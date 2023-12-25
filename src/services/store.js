import thunk from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit';
import { feedMiddleware } from '../services/reducers/root-reducers';
import { profileFeedMiddleware } from '../services/reducers/root-reducers';
import rootReducer from '../services/reducers/root-reducers';

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware().concat(feedMiddleware,profileFeedMiddleware);
    },
  });

export default store;