import { combineReducers } from 'redux';
import movieReducer from './movieReducer';
import pageParamsReducer from './pageParamsReducer';
import searchReducer from './searchReducer';
import sortReducer from './sortReducer';
import movieByIdReducer from './movieByIdReducer';

const rootReducer = combineReducers({
  movie: movieReducer,
  movieId: movieByIdReducer,
  query: pageParamsReducer,
  sortBy: sortReducer,
  searchBy: searchReducer,
});

export default rootReducer;
