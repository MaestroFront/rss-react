import { useSearchCardsQuery } from "../../store";

export const HomePage = () => {
  const { isLoading, isError, data } = useSearchCardsQuery('1');

  console.log('DATA: ', data);
  console.log('Load: ', isLoading);
  console.log('Error: ', isError);

  return <h1>HomePage</h1>;
};
