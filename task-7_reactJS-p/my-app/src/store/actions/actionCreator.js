import {
  GET_SORTBY,
  GET_SEARCHBY,
  GET_MOVIE,
  GET_SAMEGENRE,
  GET_PAGE_PARAMS,
  REQUEST_MOVIE,
  RECEIVE_MOVIE,
  FAILURE_MOVIE_REQUEST,
} from '../action-types/constants';

export const requestMovie = (searchParams) => ({
  type: REQUEST_MOVIE,
  searchParams,
});

export const receiveMovie = (searchParams, movieData) => ({
  type: RECEIVE_MOVIE,
  searchParams,
  movies: movieData,
  receivedAt: Date.now(),
});

export const failuredMovieRequest = (searchParams) => ({
  type: FAILURE_MOVIE_REQUEST,
  searchParams,
});

export const getSortBy = (sortParam) => ({
  type: GET_SORTBY,
  sortParam,
});

export const getSearchBy = (searchParam) => ({
  type: GET_SEARCHBY,
  searchParam,
});

export const getMovie = (movieList) => ({
  type: GET_MOVIE,
  movieList,
});

export const getMovieGenre = (movieList) => ({
  type: GET_SAMEGENRE,
  movieList,
});

export const getPageParams = (query) => ({
  type: GET_PAGE_PARAMS,
  query,
});
