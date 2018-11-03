import { createStore, applyMiddleware } from "redux";
import rootReducer from './reducers/rootReducer';
import initialFetch from './middleware/initialFetch';
import  createSagaMiddleware from 'redux-saga'
import { watchRetrieveData } from './middleware/sagas/saga';

const sagaMiddleware = createSagaMiddleware();

const initialState = {};

const middleware = [sagaMiddleware, initialFetch]; 

const store = createStore(rootReducer, initialState, applyMiddleware(...middleware));

//Comes after the createStore function as it needs to be mounted before running 
sagaMiddleware.run(watchRetrieveData);

export default store;