import { createStore, applyMiddleware } from "redux";
import reducer from './reducer';
import fetchData from './fetchData';

const initialState = {};

const middleware = [fetchData]; // need to look into saga.

const store = createStore(reducer, initialState, applyMiddleware(...middleware));

export default store;