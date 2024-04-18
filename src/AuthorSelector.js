// AuthorSelector.js
import React from 'react';

const AuthorSelector = ({ selectedAuthors, handleAuthorChange, authors }) => (
  <select value={selectedAuthors} onChange={handleAuthorChange}>
    <option value="">All Authors</option>
    {authors.map((author) => (
      <option key={author} value={author}>{author}</option>
    ))}
  </select>
);

export default AuthorSelector;
