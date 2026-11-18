import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector as useAppSelector, useDispatch as useAppDispatch } from "react-redux";
import commonSlice from "./slices/commonSlice";
import wishlistSlice from "./slices/wishlistSlice";

const rootReducer = combineReducers({
  common: commonSlice,
  wishlist: wishlistSlice,
});

const store = configureStore({
  reducer: rootReducer,
});

export type AppState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelectorHook: TypedUseSelectorHook<AppState> = useAppSelector;
export const useAppDispatchHook = () => useAppDispatch<AppDispatch>();

export { store };
export default store;
