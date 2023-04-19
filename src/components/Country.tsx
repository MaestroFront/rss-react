import { CountryAction, CountryActionTypes, CountryState } from '../types/interfaces';

const initialState: CountryState = {
  countries: [],
  loading: false,
  error: null,
};

export const CountriesReducer = (state = initialState, action: CountryAction): CountryState => {
  switch (action.type) {
    case CountryActionTypes.FETCH_COUNTRIES:
      return { loading: true, error: null, countries: [] };
    case CountryActionTypes.FETCH_COUNTRIES_SUCCESS:
      return { loading: false, error: null, countries: action.payload };
    case CountryActionTypes.FETCH_COUNTRIES_ERROR:
      return { loading: false, error: action.payload, countries: [] };
    default:
      return state;
  }
};
