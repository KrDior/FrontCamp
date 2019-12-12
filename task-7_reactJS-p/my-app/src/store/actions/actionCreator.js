import {
  GET_SORTBY,
  GET_SEARCHBY,
  GET_HOTMOVIE,
  GET_MOVIE,
  GET_SAMEGENRE,
  GET_PAGE_PARAMS,
} from '../action-types/constants';

export const getStartMovie = (movieList) => ({
  type: GET_HOTMOVIE,
  payload: { movieList },
});

export const getSortBy = (sortParam) => ({
  type: GET_SORTBY,
  payload: { sortParam },
});

export const getSearchBy = (searchParam) => ({
  type: GET_SEARCHBY,
  payload: { searchParam },
});

export const getMovie = (movieList) => ({
  type: GET_MOVIE,
  payload: { movieList },
});

export const getMovieGenre = (movieList) => ({
  type: GET_SAMEGENRE,
  payload: { movieList },
});

export const getPageParams = (query) => ({
  type: GET_PAGE_PARAMS,
  payload: { query },
});
