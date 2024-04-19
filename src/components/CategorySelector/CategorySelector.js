import React from 'react';
import './CategorySelector.css';

const CategorySelector = ({ selectedCategory, handleCategoryChange }) => (
  <select value={selectedCategory} onChange={handleCategoryChange}>
    <option value="">All Categories</option>
    <option value="business">Business</option>
    <option value="entertainment">Entertainment</option>
    <option value="general">General</option>
    <option value="health">Health</option>
    <option value="technology">Technology</option>
  </select>
);

export default CategorySelector;
