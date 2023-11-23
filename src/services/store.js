import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/root-reducers';

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;