import {
  REQUEST_MOVIE,
  RECEIVE_MOVIE,
  FAILURE_MOVIE_REQUEST,
  GET_SORTBY_RATING,
  GET_SORTBY_RELEASE,
} from '../action-types/constants';
import { sortByRating, sortByRelease } from '../../utils/helpers';

const posts = (
  state = {
    isFetching: false,
    didInvalidate: false,
    movies: [],
  },
  action,
) => {
  switch (action.type) {
  case FAILURE_MOVIE_REQUEST:
    return { ...state, didInvalidate: true };
  case REQUEST_MOVIE:
    return {
      ...state,
      isFetching: true,
      didInvalidate: false,
    };
  case RECEIVE_MOVIE:
    return {
      ...state,
      isFetching: false,
      didInvalidate: false,
      movies: action.movies,
      lastUpdated: action.receivedAt,
    };
  default:
    return state;
  }
};

const movieReducer = (state = {}, action) => {
  switch (action.type) {
  case FAILURE_MOVIE_REQUEST:
  case RECEIVE_MOVIE:
  case REQUEST_MOVIE:
    return posts(state, action);
  case GET_SORTBY_RATING:
    return {
      ...state,
      isFetching: false,
      movies: sortByRating(action.movies),
    };
  case GET_SORTBY_RELEASE:
    return {
      ...state,
      isFetching: false,
      movies: sortByRelease(action.movies),
    };
  default:
    return state;
  }
};

export default movieReducer;
