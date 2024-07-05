import { configureStore } from "@reduxjs/toolkit";
import matchReducer from "./slice";

import type { TypedUseSelectorHook } from "react-redux";
import { useDispatch, useSelector } from "react-redux";
const store = configureStore({
  reducer: {
    matches: matchReducer,
  },
});

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export type RootState = ReturnType<typeof store.getState>;
export default store;
