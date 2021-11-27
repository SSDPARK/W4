import { combineReducers, createStore, applyMiddleware } from 'redux';
import diction from './modules/diction';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({ diction });

const middlewares = [thunk];

const enhancer = applyMiddleware(...middlewares);

const store = createStore(rootReducer, enhancer);

export default store;
