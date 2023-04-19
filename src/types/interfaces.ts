export interface ICard {
  name: string;
  gender: string;
  birthday: string;
  sphere: string;
  mail: string;
  movie: boolean;
  file: string;
  id: string;
}

export interface ICountry {
  abbreviation: string;
  capital: string;
  currency: string;
  name: string;
  phone: string;
  population: number;
  media: {
    flag: string;
    emblem: string;
    orthographic: string;
  };
  id: number;
}

export interface CountryState {
  countries: [];
  loading: boolean;
  error: null | string;
}

export enum CountryActionTypes {
  FETCH_COUNTRIES = 'FETCH_COUNTRIES',
  FETCH_COUNTRIES_SUCCESS = 'FETCH_COUNTRIES_SUCCESS',
  FETCH_COUNTRIES_ERROR = 'FETCH_COUNTRIES_ERROR',
}

interface FetchCountriesAction {
  type: CountryActionTypes.FETCH_COUNTRIES;
}
interface FetchCountriesSuccessSAction {
  type: CountryActionTypes.FETCH_COUNTRIES_SUCCESS;
  payload: [];
}
interface FetchCountriesErrorAction {
  type: CountryActionTypes.FETCH_COUNTRIES_ERROR;
  payload: string;
}

export type CountryAction =
  | FetchCountriesAction
  | FetchCountriesSuccessSAction
  | FetchCountriesErrorAction;
