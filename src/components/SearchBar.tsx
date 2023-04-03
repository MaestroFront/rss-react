import React from 'react';
import AddPerson from './AddPerson';

export const SearchBar = function () {
  return (
    <form className="search-bar">
      <input type="text" className="input-search" />
      <button
        className="btn-search"
        onClick={(e) => {
          e.preventDefault();
        }}
      >
        Search
      </button>
      <AddPerson />
    </form>
  );
};

export default SearchBar;
