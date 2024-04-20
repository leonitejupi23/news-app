import React, { useState } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import CategorySelector from '../CategorySelector/CategorySelector';
import SourceSelector from '../SourceSelector/SourceSelector';
import AuthorSelector from '../AuthorSelector/AuthorSelector';
import DateSelector from '../DateSelector/DateSelector';
import './Header.css';

const Header = ({
  searchTerm,
  handleSearch,
  selectedCategory,
  handleCategoryChange,
  selectedSource,
  handleSourceChange,
  selectedAuthor,
  handleAuthorChange,
  authors,
  startDate,
  handleStartDateChange,
  sources,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <h1 className='h1-header'>NewsAPI</h1>
      <div className="burger-menu" onClick={toggleMenu}>☰</div>
      <header className={`form-container ${isMenuOpen ? 'show' : ''}`}>
        <SearchBar className='search-bar' searchTerm={searchTerm} handleSearch={handleSearch} />
        <CategorySelector className='category-selector' selectedCategory={selectedCategory} handleCategoryChange={handleCategoryChange} />
        <SourceSelector className='source-selector' selectedSource={selectedSource} handleSourceChange={handleSourceChange} sources={sources} />
        <AuthorSelector className='author-selector' selectedAuthor={selectedAuthor} handleAuthorChange={handleAuthorChange} authors={authors} />
        <DateSelector className='date-selector' startDate={startDate} handleStartDateChange={handleStartDateChange} /> 
      </header>
    </>
  );
};

export default Header;
