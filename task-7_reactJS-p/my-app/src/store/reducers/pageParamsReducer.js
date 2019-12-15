import { GET_PAGE_PARAMS, GET_PAGE_PARAMS_DEFAULT } from '../action-types/constants';

const innitialState = [];

const pageParamsReducer = (state = innitialState, action) => {
  switch (action.type) {
  case GET_PAGE_PARAMS:
    return action.query;
  case GET_PAGE_PARAMS_DEFAULT:
    return action.query;
  default:
    return state;
  }
};

export default pageParamsReducer;
