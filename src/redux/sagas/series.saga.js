import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";

// GET series from server to store
function* getSeries(action) {
  try {
    const response = yield axios.get("/api/series");
    console.log("seriesReducer", response);
    yield put({ type: "SET_SERIES", payload: response.data });
  } catch (err) {
    console.warn("error with GET", err);
  }
}

function* seriesSaga() {
  yield takeLatest("GET_SERIES", getSeries);
}

export default seriesSaga;
