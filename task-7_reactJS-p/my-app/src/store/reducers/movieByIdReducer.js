import {
  REQUEST_MOVIE_BY_ID,
  RECEIVE_MOVIE_BY_ID,
  FAILURE_MOVIE_REQUEST_BY_ID,
} from '../action-types/constants';

const posts = (
  state = {
    isFetching: false,
    didInvalidate: false,
    movie: [],
  },
  action,
) => {
  switch (action.type) {
  case FAILURE_MOVIE_REQUEST_BY_ID:
    return { ...state, didInvalidate: true };
  case REQUEST_MOVIE_BY_ID:
    return {
      ...state,
      isFetching: true,
      didInvalidate: false,
    };
  case RECEIVE_MOVIE_BY_ID:
    return {
      ...state,
      isFetching: false,
      didInvalidate: false,
      movie: action.movie,
      lastUpdated: action.receivedAt,
    };
  default:
    return state;
  }
};

const movieByIdReducer = (state = {}, action) => {
  switch (action.type) {
  case FAILURE_MOVIE_REQUEST_BY_ID:
  case RECEIVE_MOVIE_BY_ID:
  case REQUEST_MOVIE_BY_ID:
    return posts(state, action);
  default:
    return state;
  }
};

export default movieByIdReducer;
