import React from 'react';
import SearchBar from './SearchBar';
import CategorySelector from './CategorySelector';
import SourceSelector from './SourceSelector';
import DateSelector from './DateSelector';

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
  <header className="app-header">
    <h1>React News</h1>
    <SearchBar searchTerm={searchTerm} handleSearch={handleSearch} />
    <CategorySelector selectedCategory={selectedCategory} handleCategoryChange={handleCategoryChange} />
    <SourceSelector selectedSource={selectedSource} handleSourceChange={handleSourceChange} sources={sources} />
    <DateSelector startDate={startDate} handleStartDateChange={handleStartDateChange} /> 
  </header>
);

export default Header;
