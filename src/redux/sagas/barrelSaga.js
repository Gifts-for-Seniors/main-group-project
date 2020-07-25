import axios from "axios";
import { put, takeEvery } from "redux-saga/effects";

function* getBarrels(action) {
  try {
    const response = yield axios.get(`/api/barrel-locations`);
    yield put({ type: "SET_BARRELS", payload: response.data });
  } catch (error) {
    console.log("CLIENT GET BARREL-LOCATION ERR", error);
  }
}

function* newBarrel(action) {
  console.log(action.payload);
  try {
    yield axios.post("/api/barrel-locations", action.payload);
    console.log("from newBarrel", action.payload);
    yield put({ type: "GET_BARRELS" });
    // yield put({ type: 'FETCH_LIST' })
  } catch (error) {
    console.log(error);
  }
}

function* newBarrelSaga() {
  yield takeEvery("ADD_TO_LIST", newBarrel);
  yield takeEvery("GET_BARRELS", getBarrels);
}

export default newBarrelSaga;
