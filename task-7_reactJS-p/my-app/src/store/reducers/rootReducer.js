import { combineReducers } from 'redux';
import movieReducer from './movieReducer';
import pageParamsReducer from './pageParamsReducer';
import searchReducer from './searchReducer';
import sortReducer from './sortReducer';
import locationReducer from './locationReducer';

const rootReducer = combineReducers({
  movie: movieReducer,
  query: pageParamsReducer,
  sortBy: sortReducer,
  searchBy: searchReducer,
  location: locationReducer,
});

export default rootReducer;
