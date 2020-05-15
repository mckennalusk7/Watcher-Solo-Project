import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";

// GET watching series from server to store
function* getUserWatching(action) {
  try {
    const response = yield axios.get("/api/watching");
    console.log("watchingReducer", response);
    yield put({ type: "SET_WATCHING", payload: response.data });
  } catch (err) {
    console.warn("error with GET", err);
  }
}

function* watchingSaga() {
  yield takeLatest("GET_WATCHING", getUserWatching);
}

export default watchingSaga;
