import {
    FEED_WS_CONNECTING,
    FEED_WS_ERROR,
    FEED_WS_OPEN,
    FEED_WS_CLOSE,
    FEED_WS_GET_FEED
} from "../actions/feed-actions";

const initialFeedState = {
    isLoading: false,
    feedCheckConnected: false,
    error: null,
    orders: [],
    total: null,
    totalToday: null
}

export const feedReducer = (state = initialFeedState, action) => {
    switch (action.type) {
        case FEED_WS_CONNECTING:
            return {
                ...state,
                isLoading: true,
            };
        case FEED_WS_OPEN:
            return {
                ...state,
                isLoading: false,
                feedCheckConnected: true,
            };
        case FEED_WS_ERROR:
            return {
                ...state,
                error: action.payload,
            };
        case FEED_WS_GET_FEED:
            return {
                ...state,
                feedCheckConnected: true,
                orders: action.payload.orders,
                total: action.payload.total,
                totalToday: action.payload.totalToday,
            };
        case FEED_WS_CLOSE:
            return {
                ...state,
                feedCheckConnected: false,
        };
        default:
            return state;
    };
};