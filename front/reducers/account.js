export const initialState = {
	userInfo: null,
};

export const GET_USER_INFO_REQUEST = "GET_USER_INFO_REQUEST";
export const GET_USER_INFO_SUCCESS = "GET_USER_INFO_SUCCESS";
export const GET_USER_INFO_FAILED = "GET_USER_INFO_FAILED";

const reducer = (state = initialState, action) => {
	// 리듀서
	switch (action.type) {
		case GET_USER_INFO_REQUEST:
			return state;
		case GET_USER_INFO_SUCCESS:
			return { ...state, userInfo: action.data };
		case GET_USER_INFO_FAILED:
			return state;
		default:
			return state;
	}
};

export default reducer;
