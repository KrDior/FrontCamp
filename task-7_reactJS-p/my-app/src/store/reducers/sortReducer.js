import { GET_SORTBY } from '../action-types/constants';

const innitialState = [];

const sortReducer = (state = innitialState, action) => {
  switch (action.type) {
  case GET_SORTBY:
    return action.sortParam;
  default:
    return state;
  }
};

export default sortReducer;
