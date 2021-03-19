export const initialState = {
    userInfo: null
}; // 처음 state값으로 count 0을 주었다. state값은 객체, 배열로도 사용할 수 있다.

export const GET_USER_INFO_REQUEST = 'GET_USER_INFO_REQUEST';
export const GET_USER_INFO_SUCCESS = 'GET_USER_INFO_SUCCESS'; 
export const GET_USER_INFO_FAILED = 'GET_USER_INFO_FAILED';

export const CLOSE_CONTENT = 'CLOSE_CONTENT'; 

export const openContentAction = () => ({ // 액션 생성 함수
    type : OPEN_CONTENT
});

export const closeContentAction = () => ({
    type : CLOSE_CONTENT
})

const reducer = (state=initialState, action) => { // 리듀서
    switch (action.type) {  
        case GET_USER_INFO_REQUEST:
            return {
                userInfo,
                action
            }
        case GET_USER_INFO_SUCCESS:
            return {
                userInfo,
                action
            }
        case GET_USER_INFO_FAILED:
            return {
                userInfo,
                action
            }
        case CLOSE_CONTENT:
            return {
                ...state,
                isOpen: false
            }
        default:
            return state;
    }
};

export default reducer;