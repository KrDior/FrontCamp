import { GET_MOVIE, GET_HOTMOVIE } from '../action-types/constants';

const innitialState = [];

const movieReducer = (state = innitialState, action) => {
  switch (action.type) {
  case GET_MOVIE:
    return action.movieList;
  case GET_HOTMOVIE:
    return action.movieList;
  default:
    return state;
  }
};

export default movieReducer;
