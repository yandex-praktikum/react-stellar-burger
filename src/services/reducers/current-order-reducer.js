import { SET_CURRENT_ORDER, CLEAR_CURRENT_ORDER, SET_CURRENT_ORDER_ERROR } from "../actions/current-order-actions";

const initialOrderState = {
    error: null,
    number: null
}

export const currentOrderReducer = (state = initialOrderState, action) => {
    switch (action.type) {
        case SET_CURRENT_ORDER:
            return {
                ...state,
                number: action.payload
            };
        case CLEAR_CURRENT_ORDER:
            return {
                ...state,
                number: null
            };
        case SET_CURRENT_ORDER_ERROR:
            return {
                ...state,
                error: action.payload
            };
            default:
                return state;
    }
}