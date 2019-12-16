import { GET_SORTBY, GET_SORTBY_RATING, GET_SORTBY_RELEASE } from '../action-types/constants';
import { sortByRating, sortByRelease } from '../../utils/helpers';

const innitialState = [];

const sortReducer = (state = innitialState, action) => {
  switch (action.type) {
  case GET_SORTBY:
    return action.sortParam;
  case GET_SORTBY_RATING:
    return [...sortByRating(action.movieList)];
  case GET_SORTBY_RELEASE:
    return sortByRelease(action.movieList);
  default:
    return state;
  }
};

export default sortReducer;
