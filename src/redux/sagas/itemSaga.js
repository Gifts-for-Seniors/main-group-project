import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';


//GET WISHLIST
function* fetchList(action) {
    const id = action.payload
    try {
        const response = yield axios.get(`/api/wishlist`);
        yield put({ type: 'SET_LIST', payload: response.data });
    } catch (error) {
        console.log('error getting details', error)
    }
}

//UPDATE ITEM DESCRIPTION


//UPDATE THE PRIORITY


function* ItemSaga() {
    yield takeLatest('FETCH_LIST', fetchList);
}



export default ItemSaga