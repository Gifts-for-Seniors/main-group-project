import axios from "axios";
import { put, takeEvery } from "redux-saga/effects";

function* searchTheBarrels(action) {
  console.log(action.payload);
  let data = { key: action.payload };
  try {
    yield axios.get(`/api/barrel-locations/search/${action.payload}`);
    yield put({ type: "SET_SEARCH_BARRELS" });
  } catch (error) {
    console.log(error);
  }
}

function* searchBarrelSaga() {
  yield takeEvery("SEARCH_ALL_BARRELS", searchTheBarrels);
}

export default searchBarrelSaga;
