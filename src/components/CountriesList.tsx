import { useTypedSelector } from '../hooks/useTypeSelector';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ICountry } from '../types/interfaces';
import { useActions } from '../hooks/useAction';

const CountriesList: React.FC = () => {
  const { countries, error, loading } = useTypedSelector((state) => state.country);

  const { fetchCountries } = useActions();

  useEffect(() => {
    fetchCountries();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };

  const [search, setSearch] = useState('');
  const [value, setValue] = useState('');

  const filterCountries = countries.filter((country: ICountry) =>
    country.name.toLowerCase().includes(value.toLowerCase())
  );

  if (loading) {
    return (
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        <img src="loading.gif" alt="loading" />
      </div>
    );
  }

  if (error) {
    return <h1>Произошла ошибка...</h1>;
  }

  return (
    <>
      <form className="search-bar">
        <input
          type="text"
          className="input-search"
          placeholder="try to search a person"
          defaultValue={search}
          onChange={(e) => {
            setValue(e.target.value);
            setSearch(e.target.value);
          }}
        />
        <button className="btn-search" onClick={(e) => onButtonClick(e)}>
          Search
        </button>
        <Link className="link-add-person" to={'/add-person'}>
          Add a person
        </Link>
      </form>
      <div className="countries-container">
        {
          <ul className="countries-list">
            {filterCountries.map((item: ICountry) => {
              return (
                <li className="card countries-item" key={item.name}>
                  <h3>{item.name}</h3>
                  <img
                    onError={(e) => {
                      const element = e.target as HTMLImageElement;
                      element.src = 'not-found.png';
                    }}
                    width={100}
                    height={80}
                    src={item.media.flag}
                    alt="img"
                  />
                  <h4>Capital: {item.capital ? item.capital : 'unknown'}</h4>
                  <h4>Population: {item.population ? item.population : 'unknown'}</h4>
                  <button className="btn btn-country-info">Info</button>
                  <div className="info-wrapper">
                    <div className="country-info" onClick={(e) => e.stopPropagation()}>
                      <p>
                        <span className="info-item">Name:</span> {item.name}
                      </p>
                      <p>
                        <span className="info-item">Abbreviation:</span> {item.abbreviation}
                      </p>
                      <p>
                        <span className="info-item">Capital:</span>{' '}
                        {item.capital ? item.capital : 'unknown'}
                      </p>
                      <p>
                        <span className="info-item">Currency:</span> {item.currency}
                      </p>
                      <div className="info-media">
                        <span className="info-item">Flag:</span>{' '}
                        <img
                          onError={(e) => {
                            const element = e.target as HTMLImageElement;
                            element.src = 'not-found.png';
                          }}
                          width={50}
                          src={item.media.flag}
                          alt="flag"
                        />
                        <span className="info-item">Emblem:</span>{' '}
                        <img
                          onError={(e) => {
                            const element = e.target as HTMLImageElement;
                            element.src = 'not-found.png';
                          }}
                          width={50}
                          src={item.media.emblem}
                          alt="emblem"
                        />
                      </div>
                      <button className="btn btn-cross">X</button>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        }
      </div>
    </>
  );
};

export default CountriesList;
