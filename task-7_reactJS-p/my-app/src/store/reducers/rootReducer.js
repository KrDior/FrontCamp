import { combineReducers } from 'redux';
import movieReducer from './movieReducer';
import pageParamsReducer from './pageParamsReducer';
import searchReducer from './searchReducer';
import sortReducer from './searchReducer';

const rootReducer = combineReducers({
  movie: movieReducer,
  query: pageParamsReducer,
  sortBy: sortReducer,
  searchBy: searchReducer,
});

export default rootReducer;
