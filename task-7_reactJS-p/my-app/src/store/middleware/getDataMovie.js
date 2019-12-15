import axios from 'axios';
import config from '../../config/config';
import { receiveMovie, requestMovie, failuredMovieRequest } from '../actions/actionCreator';

const { API_PATH } = config;

function fetchMovie(searchParams) {
  return async (dispatch) => {
    dispatch(requestMovie(searchParams));
    try {
      const result = await axios(`${API_PATH}movies?search=${searchParams}`);
      dispatch(receiveMovie(searchParams, result));
    } catch (error) {
      dispatch(failuredMovieRequest(searchParams, error));
    }
  };
}

function shouldFetchMovie(state, searchParams) {
  const movies = state.movie[searchParams];
  if (!movies) {
    return true;
  }
  if (movies.isFetching) {
    return false;
  }
  return movies.didInvalidate;
}

export default function fetchMovieIfNeeded(searchParams) {
  return (dispatch, getState) => {
    if (shouldFetchMovie(getState(), searchParams)) {
      return dispatch(fetchMovie(searchParams));
    }
    return Promise.resolve();
  };
}
