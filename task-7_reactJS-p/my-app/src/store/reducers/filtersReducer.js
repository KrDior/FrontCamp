import { GET_FILTERS } from '../action-types/constants';

const innitialState = [];
export const filtersReducer = (state = innitialState, action) => {
    switch (action.type) {
        case GET_FILTERS:
            return action.payload.filtersList;
        default:
            return state;
    }
}

export default filtersReducer;
