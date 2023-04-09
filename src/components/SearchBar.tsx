import { Link } from 'react-router-dom';
import { filterCards, installValue } from '../helpers/helpers';
import { Component } from 'react';

export class SearchBar extends Component {
  state = {
    search: '',
    data: [],
  };
  func = () => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
        'X-RapidAPI-Host': 'actor-movie-api1.p.rapidapi.com',
      },
    };

    fetch(
      'https://actor-movie-api1.p.rapidapi.com/getid/Tom%20Holland?apiKey=62ffac58c57333a136053150eaa1b587',
      options
    )
      .then((response) => response.json())
      .then((response) => console.log(response))
      .catch((err) => console.error(err));
  };

  onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const element = e.target as HTMLInputElement;
    localStorage.setItem('search', element.value);
    filterCards(element.value);
    this.setState({ search: element.value });
  };

  onButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };

  render() {
    return (
      <form className="search-bar">
        <input
          type="text"
          className="input-search"
          placeholder="try to search a person"
          onChange={(e) => this.onChangeHandler(e)}
          defaultValue={installValue()}
        />
        <button className="btn-search" onClick={(e) => this.onButtonClick(e)}>
          Search
        </button>
        <Link className="link-add-person" to={'/add-person'}>
          Add a person
        </Link>
      </form>
    );
  }
}

export default SearchBar;
