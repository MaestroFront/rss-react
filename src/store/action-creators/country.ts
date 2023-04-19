import { Dispatch } from 'redux';
import axios from 'axios';
import { CountryAction, CountryActionTypes } from '../../types/interfaces';

export const fetchCountries = () => {
  return async (dispatch: Dispatch<CountryAction>) => {
    try {
      dispatch({ type: CountryActionTypes.FETCH_COUNTRIES });
      const response = await axios.get('https://api.sampleapis.com/countries/countries');
      setTimeout(() => {
        dispatch({ type: CountryActionTypes.FETCH_COUNTRIES_SUCCESS, payload: response.data });
      }, 1000);
    } catch (e) {
      dispatch({ type: CountryActionTypes.FETCH_COUNTRIES_ERROR, payload: 'Ошибка!' });
    }
  };
};
