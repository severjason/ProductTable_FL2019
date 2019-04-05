import React from 'react';
import './styles/search.css';

const SearchBar = () => {
  return (
    <div className="search-bar-container">
      <div className="search-bar-element">
        <input className="search-bar-input" type="text" placeholder="Search..."/>
      </div>
      <div className="search-bar-element">
        <input className="search-bar-checkbox" type="checkbox"/>
        Show only in stock
      </div>
    </div>
  )
};

export default SearchBar;
