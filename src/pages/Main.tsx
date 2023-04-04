import CardsField from '../components/CardsField';
import SearchBar from '../components/SearchBar';
import { createOrUpdateCards } from '../helpers/helpers';

const MainPage = function () {
  return (
    <>
      <SearchBar />
      <CardsField
        state={{
          client: createOrUpdateCards(),
        }}
      />
    </>
  );
};

export default MainPage;
