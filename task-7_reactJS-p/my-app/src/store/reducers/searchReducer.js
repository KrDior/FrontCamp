/* eslint-disable sonarjs/no-small-switch */
import { GET_SEARCHBY } from '../action-types/constants';

const innitialState = [];

const searchReducer = (state = innitialState, action) => {
  switch (action.type) {
  case GET_SEARCHBY:
    return action.searchParam;
  default:
    return state;
  }
};

export default searchReducer;
