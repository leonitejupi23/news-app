import React from 'react';
import './DateSelector.css';

const DateSelector = ({ startDate, handleStartDateChange }) => (
  <input
    type="date"
    value={startDate}
    onChange={handleStartDateChange}
    className="date-input"
    placeholder="From Date"
  />
);

export default DateSelector;
