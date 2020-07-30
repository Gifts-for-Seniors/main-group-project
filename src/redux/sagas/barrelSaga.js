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

function* getAdminBarrels(action) {
  try {
    const response = yield axios.get(`/api/barrel-locations/admin`);
    yield put({ type: "SET_ADMIN_BARRELS", payload: response.data });
  } catch (error) {
    console.log("CLIENT GET BARREL-LOCATION ERR", error);
  }
}

function* newBarrel(action) {
  console.log(action.payload);
  let dataObject = { payload: action.payload };
  try {
    yield axios.post("/api/barrel-locations", dataObject);
    console.log("from newBarrel", action.payload);
    yield put({ type: "GET_ADMIN_BARRELS" });
    // yield put({ type: 'FETCH_LIST' })
  } catch (error) {
    console.log(error);
  }
}
//DELETE ITEM
function* deleteBarrel(action) {
  console.log(action.payload);
  console.log(action.payload.id);
  try {
    yield axios.delete(`/api/barrel-locations/delete/${action.payload.id}`);
    if (action.payload.previousSearch === Array(0)) {
      console.log("pooter");
    }
    yield put({
      type: "SEARCH_ALL_BARRELS",
      payload: action.payload.previousSearch,
    });
  } catch (error) {
    console.log(error);
  }
}

function* updateBarrel(action) {
  console.log(action.payload);
  try {
    let searchTerm = action.payload.searchTerm;
    yield axios.put(
      `api/barrel-locations/edit/${action.payload.itemToEdit}`,
      action.payload
    );
    yield put({
      type: "SEARCH_ALL_BARRELS",
      payload: searchTerm,
    });
  } catch (error) {
    console.log("error");
  }
}

//UPDATE THE STATUS
function* updateStatus(action) {
  let data = {
    id: action.payload.id,
    status: action.payload.status,
  };
  console.log(data);
  try {
    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    };
    yield axios.put(`api/barrel-locations/update/${data}`, data);
    if (action.payload.previousSearch === Array(0)) {
      console.log("pooter");
    }
    yield put({
      type: "SEARCH_ALL_BARRELS",
      payload: action.payload.previousSearch,
    });
  } catch (error) {
    console.log("UPDATE STATUS FAILED", error);
  }
}

function* newBarrelSaga() {
  yield takeEvery("ADD_TO_LIST", newBarrel);
  yield takeEvery("GET_BARRELS", getBarrels);
  yield takeEvery("GET_ADMIN_BARRELS", getAdminBarrels);
  yield takeEvery("DELETE_BARREL", deleteBarrel);
  yield takeEvery("UPDATE_BARREL", updateBarrel);
  yield takeEvery("UPDATE_STATUS", updateStatus);
}

export default newBarrelSaga;
