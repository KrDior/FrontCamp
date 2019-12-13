import { GET_PAGE_PARAMS, GET_PAGE_PARAMS_DEFAULT, GET_SEARCHBY } from '../action-types/constants';

const innitialState = [];

const pageParamsReducer = (state = innitialState, action) => {
  switch (action.type) {
  case GET_PAGE_PARAMS:
    return action.payload.query;
  case GET_PAGE_PARAMS_DEFAULT:
    return action.payload.query;
  case GET_SEARCHBY:
    return action.payload.searchParam;
  default:
    return state;
  }
};

export default pageParamsReducer;
