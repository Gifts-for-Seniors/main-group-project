import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

function* newItem(action) {
    console.log(action.payload)
    try {
        yield axios.post("/api/wishlist", action.payload);
        console.log('from newItem', action.payload);
        yield put({ type: 'SET_TO_LIST' });
        yield put({ type: 'FETCH_NEW' })
    } catch (error) {
        console.log(error);
    }
}

function* newItemSaga() {
    yield takeEvery('ADD_TO_LIST', newItem);
}


export default newItemSaga;