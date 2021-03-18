export const initialState = {
    userInfo: {}
}; // 처음 state값으로 count 0을 주었다. state값은 객체, 배열로도 사용할 수 있다.

export const OPEN_CONTENT = 'OPEN_CONTENT'; // count 1을 증가시킬 액션 타입이다.
export const CLOSE_CONTENT = 'CLOSE_CONTENT'; // count 1을 감소시킬 액션 타입이다.

export const openContentAction = () => ({ // 액션 생성 함수
    type : OPEN_CONTENT
});

export const closeContentAction = () => ({
    type : CLOSE_CONTENT
})

const reducer = (state=initialState, action) => { // 리듀서
    switch (action.type) {  
        case OPEN_CONTENT:
            return {
                ...state,
                isOpen: true
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