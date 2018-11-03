import { combineReducers } from 'redux';
import setVariables from './setVariables';
import handleData from './handleData';

const rootReducer = combineReducers({
    initialFetch: setVariables,
    fetchedData: handleData
});

export default rootReducer;