import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";

// GET image from server to store
function* postImage(action) {
  try {
    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    };

    const data = {
      image: action.payload,
    };

    const response = yield axios.post("api/image", data, config);
    console.log(response);
  } catch (error) {
    console.log("User get request failed", error);
  }
}

function* ImageSaga() {
  yield takeLatest("POST_IMAGE_URL", postImage);
}

export default ImageSaga;
