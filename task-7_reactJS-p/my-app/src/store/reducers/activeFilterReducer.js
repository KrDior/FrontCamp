import { ADD_FILTER, SET_FILTERS } from './action-types/constants';

const innitialState = [];
export const enabledFiltersReducer = (state = innitialState, action) => {
    switch (action.type) {
        case ADD_FILTER:
            let filter = action.payload.enabledFilter;
            if (!state.length) {
                return [filter];
            }
            let newState = JSON.parse(JSON.stringify(state));
            let ind = newState.findIndex(it => {
                return it.targetProp === filter.targetProp
            });
            if (ind < 0) {
                ind = state.length;
            }
            newState[ind] = filter;
            return newState;
        case SET_FILTERS:
            const setfilters = action.payload.enabledFilter;
            let newStateFilter = JSON.parse(setfilters);
            return newStateFilter;
        default:
            return state;
    }
}

export default enabledFiltersReducer;
