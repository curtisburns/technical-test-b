import axios from 'axios';

//Helper functions - put is like dispatch
import { takeLatest, put, call } from 'redux-saga/effects';

const birdieApiGet = ( variable ) => {
    variable = variable.toLowerCase();
    return axios.get(`/api/data/${variable}`)
        .then((res:any) => res.data)
        .catch((err:any) => {
            throw err
        })
}


// Once we've caught the action we can dispatch it.
function* retrieveDataAsync(action) {
    // Couldn't destruct action above without getting error on takeEvery helper
    const variable = action.variable;
    if (variable !== "Please select a variable") {
        try {
            const data = yield call(birdieApiGet, variable);
            yield put({type: "RETRIEVE_DATA_ASYNC", variable, data});
        }
        catch(err) {
            yield put({type: "CANNOT_RETRIEVE_DATA_ASYNC", variable, err});
        }       
    } else {
        yield put({type: "RETRIEVE_DATA_ASYNC", variable})
    }

}

export function* watchRetrieveData() {
    // takeEvery - observe every action that dispatches. Will action all of the ones it catches
    // takeLatest can be used if say a button is repeatedly pressed and we only want the action
    // to occur once - "debounce"

    // takeEvery or Latest will pass the action to params

    yield takeLatest("RETRIEVE_DATA", retrieveDataAsync)
}

//Generator functions:
//Yield pauses the function until the action is completed, then continues.