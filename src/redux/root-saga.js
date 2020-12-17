import { fork } from "redux-saga/effects";

//SAGAS WATCHERS
import { loadPostsWatcher } from "./test/test.sagas";

export function* rootSaga() {
   yield fork(loadPostsWatcher);
}
