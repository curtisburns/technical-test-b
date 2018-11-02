import { combineReducers } from 'redux';
import setData from './setData';
import handleData from './handleData';

const rootReducer = combineReducers({
    storedData: setData,
    manipulatedData: handleData
});

export default rootReducer;