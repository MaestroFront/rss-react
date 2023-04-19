import { combineReducers } from 'redux';
import { CountriesReducer } from '../../components/Country';

export const rootReducer = combineReducers({ country: CountriesReducer });

export type RootState = ReturnType<typeof rootReducer>;
