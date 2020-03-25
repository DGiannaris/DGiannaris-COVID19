import { put, takeLatest, all } from "redux-saga/effects";
import { receivedPointsAction } from "../actions/apiActions";

function* fetchNews() {
  const json = yield fetch(
    "https://covid-api.quintessential.gr/data"
  ).then(response => response.json());
  yield put(receivedPointsAction(json));
}
function* actionWatcher() {
  yield takeLatest("GET_POINTS", fetchNews);
}

export default function* getPointsSaga() {
  yield all([actionWatcher()]);
}
