import React from 'react';

import '../../assets/css/Search.css';

const Search = () => {
  return (
    <form className="search-form">
        <input className="search-input" name="search" placeholder="Search for a country..." />
    </form>
  )
}

export default Search