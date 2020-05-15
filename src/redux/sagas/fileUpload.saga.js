import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";

// GET upload from server to store
function* getUpload(action) {
  try {
    const response = yield axios.get("/api/series");
    console.log("uploadReducer", response);
    yield put({ type: "SET_UPLOAD", payload: response.data });
  } catch (err) {
    console.warn("error with GET", err);
  }
}

function* uploadSaga() {
  yield takeLatest("GET_UPLOAD", getUpload);
}

export default uploadSaga;
