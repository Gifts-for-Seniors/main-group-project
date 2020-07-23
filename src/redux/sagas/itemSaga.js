import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';


function* fetchList(action) {
    const id = action.payload
    console.log('in payload', id)
    try {
        const response = yield axios.get(`/select/${id}`);
        yield put({ type: 'SET_LIST', payload: response.data });
    } catch (error) {
        console.log('error getting details', error)
    }
}


function* ItemSaga() {
    yield takeLatest('FETCH_LIST', fetchList);
}

export default ItemSaga