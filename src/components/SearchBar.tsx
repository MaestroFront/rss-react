import { Link } from 'react-router-dom';
import { filterCards, installValue } from '../helpers/helpers';
import { useEffect, useState } from 'react';
import { ICountry } from '../types/interfaces';

export const SearchBar = () => {
  const [search, setSearch] = useState('');
  const [data, setData] = useState<ICountry[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [countryInfo, setCountryInfo] = useState<Array<number>>([]);
  useEffect(() => {
    const func = () => {
      fetch('https://api.sampleapis.com/countries/countries')
        .then((res) => res.json())
        .then((result) => {
          // result.length = 100;
          const filterData = result.filter((item: ICountry) =>
            item.name.toUpperCase().includes(search.toUpperCase())
          );
          setData([...filterData]);
          setIsLoaded(true);
        });
    };
    func();
  }, [data, search]);
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const element = e.target as HTMLInputElement;
    localStorage.setItem('search', element.value);
  };

  const onButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };
  return (
    <>
      <form className="search-bar">
        <input
          type="text"
          className="input-search"
          placeholder="try to search a person"
          onChange={(e) => onChangeHandler(e)}
          defaultValue={installValue()}
        />
        <button
          className="btn-search"
          onClick={(e) => {
            onButtonClick(e);
            filterCards(localStorage.getItem('search') as string);
            setSearch(localStorage.getItem('search') as string);
          }}
        >
          Search
        </button>
        <Link className="link-add-person" to={'/add-person'}>
          Add a person
        </Link>
      </form>
      <div className="countries-container">
        {!isLoaded ? (
          <div className="loading">
            <img src="loading.gif" alt="loading" />
          </div>
        ) : (
          <ul className="countries-list">
            {data.map((item: ICountry) => {
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
                  <button
                    className="btn btn-country-info"
                    onClick={() => {
                      setCountryInfo([item.id]);
                    }}
                  >
                    Info
                  </button>
                  {countryInfo.includes(item.id) ? (
                    <div className="info-wrapper" onClick={() => setCountryInfo([])}>
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
                        <button className="btn btn-cross" onClick={() => setCountryInfo([])}>
                          X
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div></div>
                  )}
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </>
  );
};

export default SearchBar;
