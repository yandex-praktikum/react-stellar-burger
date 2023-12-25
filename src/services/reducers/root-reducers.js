import { combineReducers } from "redux";
import ingredientReducer from './ingredient-reducer';
import currentIngredientsReducer from './current-ingredients-reducer';
import currentIngredientReducer from './current-ingredient-reducer';
import orderReducer from './order-reducer';
import { inputsReducer } from '../reducers/inputs-reducer';
import { userReducer } from '../reducers/user-reducer';
import { currentOrderReducer } from "./current-order-reducer";
import {
  FEED_CONNECT,
  FEED_DISCONNECT,
  FEED_WS_CONNECTING,
  FEED_WS_OPEN,
  FEED_WS_CLOSE,
  FEED_WS_ERROR,
  FEED_WS_GET_FEED,
} from "../actions/feed-actions";
import {
  PROFILEFEED_ORDERS_CONNECT,
  PROFILEFEED_ORDERS_DISCONNECT,
  PROFILEFEED_ORDERS_WS_CONNECTING,
  PROFILEFEED_ORDERS_WS_ERROR,
  PROFILEFEED_ORDERS_WS_OPEN,
  PROFILEFEED_ORDERS_WS_CLOSE,
  PROFILEFEED_ORDERS_WS_GET_FEED,
} from "../actions/profile-feed-action";
import { socketMiddleware } from "../middleware/socket-middleware";
import { feedReducer } from "./feed-reducer";
import { profileFeedReducer } from "./profile-feed-reducer";

export const feedMiddleware = socketMiddleware({
  wsConnect: FEED_CONNECT,
  wsDisconnect: FEED_DISCONNECT,
  wsConnecting: FEED_WS_CONNECTING,
  onOpen: FEED_WS_OPEN,
  onClose: FEED_WS_CLOSE,
  onError: FEED_WS_ERROR,
  onMessage: FEED_WS_GET_FEED,
});

export const profileFeedMiddleware = socketMiddleware({
  wsConnect: PROFILEFEED_ORDERS_CONNECT,
  wsDisconnect: PROFILEFEED_ORDERS_DISCONNECT,
  wsConnecting: PROFILEFEED_ORDERS_WS_CONNECTING,
  onOpen: PROFILEFEED_ORDERS_WS_OPEN,
  onClose: PROFILEFEED_ORDERS_WS_CLOSE,
  onError: PROFILEFEED_ORDERS_WS_ERROR,
  onMessage: PROFILEFEED_ORDERS_WS_GET_FEED,
});

const rootReducer = combineReducers({
  allIngredients: ingredientReducer,
  currentIngredients: currentIngredientsReducer,
  currentIngredient: currentIngredientReducer,
  order: orderReducer,
  inputs: inputsReducer,
  user: userReducer,
  user: userReducer,
  currentOrder: currentOrderReducer,
  feed: feedReducer,
  profileFeed: profileFeedReducer,
});

export default rootReducer;