import { ADD_PRODUCT, ADD_FILTERED_PRODUCT } from './action-types/constants';

const innitialState = [];

const productsReducer = (state = innitialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            return action.payload.productList
        case ADD_FILTERED_PRODUCT:
            return action.payload.productList
        default:
            return state;
    }
}

export default productsReducer;
