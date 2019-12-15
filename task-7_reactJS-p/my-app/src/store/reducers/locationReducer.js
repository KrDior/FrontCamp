import { LOCATION_CHANGE } from '../action-types/constants';

const innitialState = [];

const locationReducer = (state = innitialState, action) => {
  switch (action.type) {
  case LOCATION_CHANGE:
    return action.location;
  default:
    return state;
  }
};

export default locationReducer;
