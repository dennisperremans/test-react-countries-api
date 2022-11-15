import React, {useState, useEffect} from 'react';
import { API_URL } from '../request';
import '../../assets/css/Countries.css';

import { Link } from 'react-router-dom';

import Search from '../Search/Search';
import Filter from '../Filter/Filter';

const Countries = () => {
  const [countries, setCountries] = useState([]);

  const getCountries = async() => {
    try {
      const result = await fetch(`${API_URL}/all`);

      if(!result.ok) throw new Error ('Error');

      const data = await result.json();

      //console.log(data);
      
      setCountries(data);

    } catch (error) {

    }

  };

  useEffect(()=>{
    getCountries();
  },[]);

  return (
    
    <div className="countries">
      <div className="countries-top">
        <div className="search">
          <Search />
        </div>

        <div className="filter">
          <Filter />
        </div>
      </div>

      <div className="countries-list">
        {
          countries.map(country=>(
            <Link key={country.alpha3Code} className="country-item" to={`/country/${country.name}`}>
              <div className="country-item__flag">
                <img src={country.flags.svg} alt={country.name} />
              </div>
              <div className="country-item__body">
                <h2 className="title">{country.name}</h2>

                <div className="country-item__info">
                  <div className="country-item__info__row">
                    <span className="label">Population: </span>
                    {country.population}
                  </div>

                  <div className="country-item__info__row">
                    <span className="label">Region: </span>
                    {country.region}
                  </div>

                  <div className="country-item__info__row">
                    <span className="label">Capital: </span>
                    {country.capital}
                  </div>
                </div>

              </div>
            </Link>
          ))
        }
      </div>
    </div>
  )
}

export default Countries