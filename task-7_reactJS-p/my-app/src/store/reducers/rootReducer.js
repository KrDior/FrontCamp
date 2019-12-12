import { combineReducers } from 'redux';
import movieReducer from './movieReducer';
import pageParamsReducer from './pageParamsReducer';

const rootReducer = combineReducers({
  movie: movieReducer,
  query: pageParamsReducer,
});

export default rootReducer;
