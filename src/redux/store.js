import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./root-saga";
import rootReducer from "./root-reducer";
import { createLogger } from "redux-logger";

//configure a logger for redux
const logger = createLogger({
   // collapsed: true,
});

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];
if (process.env.NODE_ENV === "development") {
   middlewares.push(logger);
}

// redux sagas is a middleware that we apply to the store
export const store = createStore(rootReducer, applyMiddleware(...middlewares));
sagaMiddleware.run(rootSaga);

export default store;
