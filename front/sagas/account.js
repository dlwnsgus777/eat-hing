import { all, fork, put, takeLatest, call, takeEvery } from 'redux-saga/effects';
import {
    GET_USER_INFO_REQUEST,
    GET_USER_INFO_SUCCESS,
    GET_USER_INFO_FAILED
} from "../reducers/account";

function* getUserInfo(action) {
    try {
        const result = {
            userId: 0,
            userName: "Test"
        }
        yield put({ type: GET_USER_INFO_SUCCESS, data: result})
    } catch (error) {
        yield put({ type: GET_USER_INFO_FAILED, error: error})
    }
}

function* watchgGetUserInfo() {
    yield takeEvery(GET_USER_INFO_REQUEST, getUserInfo)
}

export default function* accountSaga() {
    yield all([fork(watchgGetUserInfo)]);
}