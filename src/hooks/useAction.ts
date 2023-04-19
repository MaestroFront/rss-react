import { useDispatch } from 'react-redux';
import * as CountryActionCreators from '../store/action-creators/country';
import { bindActionCreators } from 'redux';

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(CountryActionCreators, dispatch);
};
