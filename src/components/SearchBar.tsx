import { Link } from 'react-router-dom';
import { filterCards, installValue } from '../helpers/helpers';

export const SearchBar = function () {
  return (
    <form className="search-bar">
      <input
        type="text"
        className="input-search"
        placeholder="try to search a person"
        onChange={(e) => {
          const element = e.target as HTMLInputElement;
          localStorage.setItem('search', element.value);
          filterCards(element.value);
        }}
        defaultValue={installValue()}
      />
      <button
        className="btn-search"
        onClick={(e) => {
          e.preventDefault();
        }}
      >
        Search
      </button>
      <Link className="link-add-person" to={'/add-person'}>
        Add a person
      </Link>
    </form>
  );
};

export default SearchBar;
