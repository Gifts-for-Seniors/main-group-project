import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

function* newBarrel(action) {
    console.log(action.payload)
    try {
        yield axios.post("/api/barrel-locations", action.payload);
        console.log('from newBarrel', action.payload);
        yield put({ type: 'SET_TO_LIST' });
        // yield put({ type: 'FETCH_LIST' })
    } catch (error) {
        console.log(error);
    }
}

function* newBarrelSaga() {
    yield takeEvery('ADD_TO_LIST', newBarrel);
}


export default newBarrelSaga;