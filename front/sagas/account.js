import {
	all,
	fork,
	put,
	takeLatest,
	call,
	takeEvery,
} from "redux-saga/effects";
import {
	GET_USER_INFO_REQUEST,
	GET_USER_INFO_SUCCESS,
	GET_USER_INFO_FAILED,
	LOG_OUT_REQUEST,
	LOG_OUT_SUCCESS,
	LOG_OUT_FAILED,
} from "../reducers/account";

function* getUserInfo(action) {
	try {
		const result = {
			userId: 0,
			userName: "Test",
			userEmail: "test@test.com",
		};
		yield put({ type: GET_USER_INFO_SUCCESS, data: result });
	} catch (error) {
		yield put({ type: GET_USER_INFO_FAILED, error: error });
	}
}

function* logOutUser(action) {
	try {
		yield put({ type: LOG_OUT_SUCCESS });
	} catch (error) {
		yield put({ type: LOG_OUT_FAILED });
	}
}

function* watchgGetUserInfo() {
	yield takeEvery(GET_USER_INFO_REQUEST, getUserInfo);
}

function* watchLogOutUser() {
	yield takeEvery(LOG_OUT_REQUEST, logOutUser);
}

export default function* accountSaga() {
	yield all([fork(watchgGetUserInfo), fork(watchLogOutUser)]);
}
