import { combineReducers } from "redux";

import { postsReducer } from "./test/test.reducer";

// right now we have only 1 reducer, but lets use this format of combineReducers so you can add more later if you need to.
const rootReducer = combineReducers({
   posts: postsReducer,
});

export default rootReducer;
