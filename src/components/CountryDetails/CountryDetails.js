import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { API_URL } from '../request';
import '../../assets/css/CountryDetails.css';

import { Link } from 'react-router-dom';

const CountryDetails = () => {

  const [country, setCountry] = useState([]);
  const {countryName} = useParams();

  const getCountry = async()=>{
    try {
      const result = await fetch(`${API_URL}/name/${countryName}`);

      if(!result.ok) throw new Error ('Error');

      const data = await result.json();

      //console.log(data);
      
      setCountry(data);

    } catch (error) {
      
    }
  }

  useEffect(()=>{
    getCountry();
  },[countryName]);

  return (
    <div className="country-wrapper">
      <div className="country-wrapper__top">
        <Link to={`/`} className="btn btn-back">Back</Link>
      </div>
      {
        country.map(country=>(
          <div className="country-wrapper__main">
            <div className="country-wrapper__flag">
              <img src={country.flags.svg} alt={country.name} />
            </div>

            <div className="country-wrapper__content">
              <h2 className="title">{country.name}</h2>

              <div className="country-wrapper__content__main">
                <div className="country-wrapper__content__main__col">
                  <div>
                    <span className="label">Native name: </span> {country.nativeName}
                  </div>
                  <div>
                    <span className="label">Population: </span> {country.population}
                  </div>
                  <div>
                    <span className="label">Region: </span> {country.region}
                  </div>
                  <div>
                    <span className="label">Subregion: </span> {country.subregion}
                  </div>
                </div>

                <div className="country-wrapper__content__main__col">
                  <div>
                    <span className="label">Top Level Domain: </span> {country.topLevelDomain}
                  </div>

                  <div>
                    <span className="label">Currencies: </span>

                    {country.currencies.map((currency, index) => {
                      return (
                        <span key={currency.name}>
                          {index + 1 !== country.currencies.length
                            ? `${currency.name}, `
                            : currency.name}
                        </span>
                      );
                    })}{' '}
                  </div>

                  <div>
                    <span className="label">Languages: </span>
                    {country.languages.map((language, index) => {
                      return (
                        <span key={language.name}>
                          {index + 1 !== country.languages.length
                            ? `${language.name}, `
                            : language.name}
                        </span>
                      );
                    })}{' '}
                  </div>
                  
                </div>
              </div>

              <div className="country-wrapper__content__bottom">
                <span className="label">Borders: </span>
                {country.borders?.map((border, index) => {
                    return (
                      <span key={border.name}>
     
                        {index + 1 !== country.borders.length
                          ? `${border}, `
                          :  border}
                      </span>
                    );
                  })}{' '}
              </div>


            </div>
          </div>
        ))
      }

    </div>
      
  )
}

export default CountryDetails