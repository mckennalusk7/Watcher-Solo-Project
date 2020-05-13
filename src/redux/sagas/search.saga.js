import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";

// GET series from server to store
function* searchSeries(action) {
  try {
    const response = yield axios.get("/search");
    yield put({ type: "SET_SEARCH", payload: response.data });
  } catch (err) {
    console.warn("error with GET", err);
  }
}

function* searchSeriesSaga() {
  yield takeLatest("SEARCH_SERIES", searchSeries);
}

export default searchSeriesSaga;
