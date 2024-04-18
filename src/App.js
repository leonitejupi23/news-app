import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './Header';
import NewsGrid from './NewsGrid';
import './App.css'

const App = () => {
  const [articles, setArticles] = useState([]);
  const [sources, setSources] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedSource, setSelectedSource] = useState('');
  const [startDate, setStartDate] = useState('');
  const [error, setError] = useState(null);
  

  useEffect(() => {
    const fetchSources = async () => {
      try {
        const { data } = await axios.get(`${process.env.REACT_APP_API_URL}sources`, {
          params: {
            apiKey: process.env.REACT_APP_API_KEY,
            language: 'en'
          }
        });
        setSources(data.sources);
      } catch (error) {
        setError(error);
      }
    };

    fetchSources();
  }, []);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        let endpoint = `${process.env.REACT_APP_API_URL}`;
        let params = {
          apiKey: process.env.REACT_APP_API_KEY,
          language: 'en',
        };
  
        if (searchTerm) {
          endpoint += 'everything';
          params.q = searchTerm;
          if (selectedSource) {
            params.sources = selectedSource;
          }
        } else {
          endpoint += 'top-headlines';
          if (!selectedSource) {
            params.country = 'us';
            if (selectedCategory) {
              params.category = selectedCategory;
            }
          } else {
            params.sources = selectedSource;
          }
        }
  
        if (startDate) {
          params.from = startDate;
        }
  
        const { data } = await axios.get(endpoint, { params });
        setArticles(data.articles);
      } catch (error) {
        setError(`Error fetching news: ${error.response ? error.response.data.message : error.message}`);
      }
    };
  
    fetchArticles();
  }, [searchTerm, selectedCategory, selectedSource, startDate]);
  

  const handleSearch = (event) => setSearchTerm(event.target.value);
  const handleCategoryChange = (event) => setSelectedCategory(event.target.value);
  const handleSourceChange = (event) => setSelectedSource(event.target.value);
  const handleStartDateChange = (event) => setStartDate(event.target.value);

  if (error) {
    return <div>Error fetching news: {error.message}</div>;
  }

  return (
    <div className="app">
      <Header
        searchTerm={searchTerm}
        handleSearch={handleSearch}
        selectedCategory={selectedCategory}
        handleCategoryChange={handleCategoryChange}
        selectedSource={selectedSource}
        handleSourceChange={handleSourceChange}
        sources={sources}
        startDate={startDate}
        handleStartDateChange={handleStartDateChange}
      />
      <main>
        <NewsGrid articles={articles} />
      </main>
    </div>
  );
};

export default App;
