import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";

// GET series from server to store
function* getTvShow(action) {
  try {
    const response = yield axios.get("/api/tvshow");
    yield put({ type: "SET_SERIES", payload: response.data });
  } catch (err) {
    console.warn("error with GET", err);
  }
}

function* tvShowSaga() {
  yield takeLatest("SERIES", getTvShow);
}

export default tvShowSaga;
