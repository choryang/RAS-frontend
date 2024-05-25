import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import { ENABLE_REDUX_DEV_TOOLS } from "src/constants";

const store = configureStore({
    reducer: rootReducer,
    devTools: ENABLE_REDUX_DEV_TOOLS
})

export default store;