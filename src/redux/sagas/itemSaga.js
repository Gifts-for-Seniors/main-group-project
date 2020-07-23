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

//UPDATE ITEM DESCRIPTION

//UPDATE THE PRIORITY

function* ItemSaga() {
  yield takeLatest("FETCH_LIST", fetchList);
}

export default ItemSaga;
