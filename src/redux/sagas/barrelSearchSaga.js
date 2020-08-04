import axios from "axios";
import { put, takeEvery } from "redux-saga/effects";

function* searchTheBarrels(action) {
  console.log(action.payload);

  try {
    const response = yield axios.get(`/api/barrel-search/${action.payload}`);
    yield put({ type: "SET_SEARCH_TERM_BARRELS", payload: response.data });
  } catch (error) {
    console.log(error);
  }
}

function* searchBarrelSaga() {
  yield takeEvery("SEARCH_ALL_BARRELS", searchTheBarrels);
}

export default searchBarrelSaga;
