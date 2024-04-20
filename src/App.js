import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './components/Header/Header';
import NewsGrid from './components/NewsGrid/NewsGrid';
import './App.css';

const App = () => {
  const [articles, setArticles] = useState([]);
  const [sources, setSources] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedSource, setSelectedSource] = useState('');
  const [selectedAuthor, setSelectedAuthor] = useState('');
  const [startDate, setStartDate] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSources = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}sources`, {
          params: {
            apiKey: process.env.REACT_APP_API_KEY,
            language: 'en'
          }
        });
        setSources(response.data.sources);
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
          language: 'en'
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
  
        const response = await axios.get(endpoint, { params });
        setArticles(response.data.articles);
  
        const uniqueAuthors = Array.from(new Set(response.data.articles.map(article => article.author).filter(author => author)));
        setAuthors(uniqueAuthors);
  
      } catch (error) {
        setError(`Error fetching news: ${error.response ? error.response.data.message : error.message}`);
      }
    };
  
    fetchArticles();
  }, [searchTerm, selectedCategory, selectedSource, startDate]);
  

  const handleSearch = (event) => setSearchTerm(event.target.value);
  const handleCategoryChange = (event) => setSelectedCategory(event.target.value);
  const handleSourceChange = (event) => setSelectedSource(event.target.value);
  const handleAuthorChange = (event) => setSelectedAuthor(event.target.value);
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
        selectedAuthor={selectedAuthor}
        handleAuthorChange={handleAuthorChange}
        sources={sources}
        authors={authors}
        startDate={startDate}
        handleStartDateChange={handleStartDateChange}
      />
      <main>
        <NewsGrid articles={articles.filter(article => !selectedAuthor || article.author === selectedAuthor)} />
      </main>
    </div>
  );
};

export default App;
