import React from 'react';
import SearchBar from './SearchBar';
import CategorySelector from './CategorySelector';
import SourceSelector from './SourceSelector';

const Header = ({ searchTerm, handleSearch, selectedCategory, handleCategoryChange, selectedSource, handleSourceChange, sources }) => (
  <header className="app-header">
    <h1>React News</h1>
    <SearchBar searchTerm={searchTerm} handleSearch={handleSearch} />
    <CategorySelector selectedCategory={selectedCategory} handleCategoryChange={handleCategoryChange} />
    <SourceSelector selectedSource={selectedSource} handleSourceChange={handleSourceChange} sources={sources} />
  </header>
);

export default Header;
