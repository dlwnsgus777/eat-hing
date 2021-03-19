import { all, fork, put, takeLatest, call } from 'redux-saga/effects';
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
        yield put({ type: GET_USER_INFO_SUCCESS, result})
    } catch (error) {
        yield put({ type: GET_USER_INFO_FAILED, error})
    }
}

function* watchgGetUserInfo() {
    yield takeLatest(GET_USER_INFO_REQUEST, getUserInfo)
}

export default function* accountSaga() {
    yield all([fork(watchgGetUserInfo)]);
}