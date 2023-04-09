import { useEffect, useState } from 'react';
import CardsField from '../components/CardsField';
import { createOrUpdateCards, filterCards, installValue } from '../helpers/helpers';
import { Link } from 'react-router-dom';
import { ICountry } from '../types/interfaces';

const MainPage = () => {
  const [search, setSearch] = useState('');
  const [data, setData] = useState<ICountry[]>([]);
  useEffect(() => {
    const func = () => {
      fetch('https://api.sampleapis.com/countries/countries')
        .then((res) => res.json())
        .then((data) => {
          const filterData = data.filter((item: ICountry) =>
            item.name.toUpperCase().includes(search.toUpperCase())
          );
          setData([...filterData]);
        });
    };
    func();
  }, [data, search]);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const element = e.target as HTMLInputElement;
    localStorage.setItem('search', element.value);
    filterCards(element.value);
    setSearch(element.value);
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
        <button className="btn-search" onClick={(e) => onButtonClick(e)}>
          Search
        </button>
        <Link className="link-add-person" to={'/add-person'}>
          Add a person
        </Link>
      </form>
      <div className="countries-container">
        <ul className="countries-list">
          {data.map((item: ICountry) => {
            return (
              <li className="card countries-item" key={item.name}>
                <h3>{item.name}</h3>
                <img width={100} height={80} src={item.media.flag} alt={item.name.split(' ')[0]} />
                <h4>Capital: {item.capital}</h4>
                <h4>Population: {item.population}</h4>
                <button className="btn btn-country-info">Info</button>
              </li>
            );
          })}
        </ul>
      </div>
      <CardsField
        state={{
          client: createOrUpdateCards(),
        }}
      />
    </>
  );
};

export default MainPage;
