import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";

//GET WISHLIST
function* fetchList(action) {
    try {
        const response = yield axios.get(`/api/wishlist`);
        yield put({ type: "SET_LIST", payload: response.data });
    } catch (error) {
        console.log("error getting details", error);
    }
}

//POST A NEW ITEM
function* addItem(action) {
    try {
        const config = {
            headers: { "Content-Type": "application/json" },
            withCredentials: true,
        };
        yield axios.post(`/api/wishlist`, action.payload, config);
        yield put({ type: "FETCH_LIST" });
    } catch (error) {
        console.log("POST ERR", error);
    }
}

//UPDATE ITEM DESCRIPTION
function* updateItem(action) {
    console.log(action.payload);
    try {
        let payload = action.payload
        let dataObject = { payload }
        yield axios.put(`api/wishlist/${action.payload}`, dataObject);
        const config = {
            headers: { "Content-Type": "application/json" },
            withCredentials: true,
        };
    } catch (error) {
        console.log("CLIENT UPDATE ERR", error);
    }
}
//UPDATE THE PRIORITY

//SAGA FUNCTIONS
function* ItemSaga() {
    yield takeLatest("FETCH_LIST", fetchList);
    yield takeLatest("ADD_ITEM", addItem);
    yield takeLatest("UPDATE_ITEM", updateItem);
}

export default ItemSaga;
