import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./RootReducers";





export const store = configureStore({
    reducer: rootReducer
  });