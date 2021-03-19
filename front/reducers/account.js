export const initialState = {
    userInfo: null
};

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

            }
        case GET_USER_INFO_SUCCESS:
            console.log(state)
            return {
                ...state,
                userInfo: action.result
            }
        case GET_USER_INFO_FAILED:
            return {

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