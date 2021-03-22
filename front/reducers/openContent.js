
export const initialState = {
    isOpen: false
};

export const OPEN_CONTENT = 'OPEN_CONTENT'; 
export const CLOSE_CONTENT = 'CLOSE_CONTENT'; 

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