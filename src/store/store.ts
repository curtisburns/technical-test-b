import { createStore, applyMiddleware } from "redux";
import rootReducer from './reducers/rootReducer';
import fetchData from './fetchData';

const initialState = {};

const middleware = [fetchData]; // need to look into saga.

const store = createStore(rootReducer, initialState, applyMiddleware(...middleware));

export default store;