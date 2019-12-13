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
  movieList,
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
