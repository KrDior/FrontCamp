import { GET_PAGE_PARAMS } from './action-types/constants';

const innitialState = [];

export const pageReducer = (state = innitialState, action) => {
    switch (action.type) {
        case GET_PAGE_PARAMS:
            return action.payload.pageParamsList;
        default:
            return state;
    }
}

export default pageReducer;
