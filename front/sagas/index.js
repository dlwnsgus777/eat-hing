import { all, call, fork } from 'redux-saga/effects';

import accountSaga from "./account"

export default function* rootSaga() {
  yield all([
    fork(accountSaga)
  ]);
}