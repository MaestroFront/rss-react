import CardsField from '../components/CardsField';
import SearchBar from '../components/SearchBar';

const MainPage = () => {
  return (
    <>
      <SearchBar />
      <CardsField
        state={{
          client: [],
        }}
      />
    </>
  );
};

export default MainPage;
