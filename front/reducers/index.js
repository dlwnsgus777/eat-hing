import { combineReducers } from 'redux'; // 여러 리듀서들을 하나로 합쳐준다.
import { HYDRATE } from 'next-redux-wrapper';

import openContent from './openContent';
import account from "./account";

const rootReducer = (state, action) => {
  switch (action.type) {
    case HYDRATE:
    //   console.log('HYDRATE', action);
      return action.payload;
    default: {
      const combinedReducer = combineReducers({
        openContent,
        account,
      });
      return combinedReducer(state, action);
    }
  }
};

export default rootReducer; // _app.js에서 reducer로 사용된다!