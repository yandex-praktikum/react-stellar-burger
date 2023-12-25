import {
    PROFILEFEED_ORDERS_WS_CONNECTING,
    PROFILEFEED_ORDERS_WS_ERROR,
    PROFILEFEED_ORDERS_WS_OPEN,
    PROFILEFEED_ORDERS_WS_CLOSE,
    PROFILEFEED_ORDERS_WS_GET_FEED
} from "../actions/profile-feed-action"

const initialProfileFeedState = {
    isLoading: false,
    feedCheckConnected: false,
    error: null,
    orders: [],
    total: null,
    totalToday: null
}

export const profileFeedReducer = (state = initialProfileFeedState, action) => {
    switch (action.type) {
        case PROFILEFEED_ORDERS_WS_CONNECTING:
            return {
                ...state,
                isLoading: true,
            };
        case PROFILEFEED_ORDERS_WS_OPEN:
            return {
                ...state,
                isLoading: false,
                feedCheckConnected: true,
            };
        case PROFILEFEED_ORDERS_WS_ERROR:
            return {
                ...state,
                error: action.payload,
            };
        case PROFILEFEED_ORDERS_WS_GET_FEED:
            return {
                ...state,
                feedCheckConnected: true,
                orders: action.payload.orders,
                total: action.payload.total,
                totalToday: action.payload.totalToday,
            };
        case PROFILEFEED_ORDERS_WS_CLOSE:
            return {
                ...state,
                feedCheckConnected: false,
        };
        default:
            return state;
    };
};