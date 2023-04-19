import CountriesList from '../components/CountriesList';
import { Filter } from '../components/Filter';

const MainPage = () => {
  return (
    <>
      <Filter />
      <CountriesList />
    </>
  );
};

export default MainPage;
