import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";

// GET series from server to store
function* getTvShow(action) {
  try {
    const response = yield axios.get("/api/tvshow");
    yield put({ type: "GET_TVSERIES", payload: response.data });
  } catch (err) {
    console.warn("error with GET", err);
  }
}

function* tvShowSaga() {
  yield takeLatest("GET_TVSERIES", getTvShow);
}

export default tvShowSaga;
