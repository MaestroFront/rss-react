import { useEffect, useState } from "react";
import { useSearchCardsQuery } from "../../store";
import { useDebounce } from "../../hooks/debounce";
import { IResult } from "../../components/models/models";

export const HomePage = () => {
  const [search, setSearch] = useState("");
  const debounce = useDebounce(search);
  const { isLoading, isError, data } = useSearchCardsQuery(debounce, {
    // skip: debounce.length < 2,
  });

  useEffect(() => {
    console.log("Search: ", debounce);
  }, [debounce]);

  const showInfo = (item: IResult) => {
    return (
      <div className="info">
        <p>Name: {item.name}</p>
        <p>Species: {item.species}</p>
        <p>Status: {item.status}</p>
        <p>Gender: {item.gender}</p>
        <p>Location: {item.location.name}</p>
      </div>
    );
  };

  return (
    <>
      <div className="search-bar">
        <input
          className="input input-search"
          type="text"
          placeholder="Search a person..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <ul className="cards-list">
        {isError ? (
          <p>Nothing found...</p>
        ) : isLoading ? (
          <p className="loading">Loading...</p>
        ) : (
          data?.map((item: IResult) => (
            <li className="cards-item" key={item.id}>
              <div className="card-image-container">
                <img width={200} src={item.image} alt="img" />
              </div>
              <p>Name: {item.name}</p>
              <div className="btn-container">
                <button
                  className="btn btn-info"
                  onClick={() => {
                    console.log("click!");
                    showInfo(item);
                  }}
                >
                  Info
                </button>
              </div>
            </li>
          ))
        )}
      </ul>
    </>
  );
};
