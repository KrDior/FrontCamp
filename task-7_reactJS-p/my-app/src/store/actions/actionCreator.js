import {
  REMOVE_PRODUCT,
  ADD_FILTER,
  GET_FILTERS,
  ADD_FILTERED_PRODUCT,
  GET_PAGE_PARAMS,
  SET_FILTERS,
} from '../action-types/constants';

export const getStartMovie = filtersList => {
  return {
    type: null,
    payload: { filtersList },
  };
};

export const getPageParam = pageParamsList => {
  return {
    type: GET_PAGE_PARAMS,
    payload: { pageParamsList },
  };
};

export const setFilteredFirst = productList => {
  return {
    type: ADD_FILTERED_PRODUCT,
    payload: { productList },
  };
};

export const addFilter = enabledFilter => {
  return {
    type: ADD_FILTER,
    payload: { enabledFilter },
  };
};

export const setEnableFilter = enabledFilter => {
  return {
    type: SET_FILTERS,
    payload: { enabledFilter },
  };
};

export const removeProduct = id => {
  return {
    type: REMOVE_PRODUCT,
    id,
  };
};
