import { Link } from 'react-router-dom';

export const Filter = () => {
  const onButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };

  return (
    <form className="search-bar">
      <input type="text" className="input-search" placeholder="try to search a person" />
      <button className="btn-search" onClick={(e) => onButtonClick(e)}>
        Search
      </button>
      <Link className="link-add-person" to={'/add-person'}>
        Add a person
      </Link>
    </form>
  );
};
