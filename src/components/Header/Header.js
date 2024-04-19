import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import CategorySelector from '../CategorySelector/CategorySelector';
import SourceSelector from '../SourceSelector/SourceSelector';
import DateSelector from '../DateSelector/DateSelector';
import './Header.css';

const Header = ({
  searchTerm,
  handleSearch,
  selectedCategory,
  handleCategoryChange,
  selectedSource,
  handleSourceChange,
  startDate,
  handleStartDateChange,
  sources,
}) => (
  <>
  <h1 className='h1-header'>NewsAPI </h1>
  <header className="app-header">
    <SearchBar searchTerm={searchTerm} handleSearch={handleSearch} />
    <CategorySelector selectedCategory={selectedCategory} handleCategoryChange={handleCategoryChange} />
    <SourceSelector selectedSource={selectedSource} handleSourceChange={handleSourceChange} sources={sources} />
    <DateSelector startDate={startDate} handleStartDateChange={handleStartDateChange} /> 
  </header>
  </>
);

export default Header;
