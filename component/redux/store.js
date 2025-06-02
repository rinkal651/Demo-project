import { applyMiddleware, configureStore } from "@reduxjs/toolkit";
import { reducer } from "./reducer";
import { rootReducer } from "./combineReducer";
import createSagaMiddleware from "redux-saga";

// export const sagaMiddleWare = createSagaMiddleware();
const store = configureStore({
    reducer: rootReducer,
    // middleware: applyMiddleware(sagaMiddleWare)
})
// sagaMiddleWare.run(helloSaga);
export default store