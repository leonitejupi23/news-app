import React from 'react';

const SourceSelector = ({ selectedSource, handleSourceChange, sources }) => (
  <select value={selectedSource} onChange={handleSourceChange}>
    <option value="">Select Source</option>
    {sources.map((source) => (
      <option key={source.id} value={source.id}>{source.name}</option>
    ))}
  </select>
);

export default SourceSelector;
