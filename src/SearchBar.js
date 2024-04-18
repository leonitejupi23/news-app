import React from 'react';
import './SearchBar.css';

const SearchBar = ({ searchTerm, handleSearch }) => (
  <input
    type="text"
    value={searchTerm}
    onChange={handleSearch}
    placeholder="Search news..."
  />
);

export default SearchBar;
