import React from 'react';

import '../../assets/css/Filter.css';

const Filter = () => {
  return (
    <form className="filter-form">
        <select name="filter" className="filter-input" defaultValue={{ label: "Select Dept", value: 0 }}>
            <option value="" disabled defaultValue>Filter by region</option>
            <option value="Africa">Africa</option>
            <option value="America">America</option>
            <option value="Asia">Asia</option>
            <option value="Europa">Europa</option>
            <option value="Oceania">Oceania</option>
          </select>
    </form>
  )
}

export default Filter