import axios from 'axios';
import { count } from 'console';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ICountry } from '../types/interfaces';

export const Filter = () => {
  const onButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };

  const [countries, setCountries] = useState([]);
  const [value, setValue] = useState('');
  const getCountries = () => {
    axios
      .get('https://api.sampleapis.com/countries/countries')
      .then((res) => setCountries(res.data));
  };
  useEffect(() => {
    getCountries();
  }, []);

  const filterCountries = countries.filter((country: ICountry) =>
    country.name.toLowerCase().includes(value.toLowerCase())
  );

  return (
    <form className="search-bar">
      <input
        type="text"
        className="input-search"
        placeholder="try to search a person"
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <button className="btn-search" onClick={(e) => onButtonClick(e)}>
        Search
      </button>
      <Link className="link-add-person" to={'/add-person'}>
        Add a person
      </Link>
    </form>
  );
};
