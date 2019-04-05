import React from 'react';
import './styles/search.css';

const SearchBar = ({input, inStockOnly, onChange, onCheckboxChange}) => {
  return (
    <div className="search-bar-container">
      <div className="search-bar-element">
        <input
          onChange={onChange}
          value={input}
          className="search-bar-input"
          type="text"
          placeholder="Search..."
        />
      </div>
      <div className="search-bar-element">
        <input
          onChange={onCheckboxChange}
          checked={inStockOnly}
          className="search-bar-checkbox"
          type="checkbox"
        />
        Show only in stock
      </div>
    </div>
  )
};

export default SearchBar;
