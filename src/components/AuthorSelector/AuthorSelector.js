import React from 'react';

const AuthorSelector = ({ selectedAuthor, handleAuthorChange, authors }) => (
  <select value={selectedAuthor} onChange={handleAuthorChange}>
    <option value="">Select Author</option>
    {authors.map((author, index) => (
      <option key={index} value={author}>{author}</option>
    ))}
  </select>
);

export default AuthorSelector;
