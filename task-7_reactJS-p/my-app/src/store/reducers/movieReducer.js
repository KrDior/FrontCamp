import {
  REQUEST_MOVIE,
  RECEIVE_MOVIE,
  FAILURE_MOVIE_REQUEST,
} from '../action-types/constants';

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
  default:
    return state;
  }
};

export default movieReducer;
