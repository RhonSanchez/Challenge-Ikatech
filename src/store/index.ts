import { configureStore } from "@reduxjs/toolkit";
import { useSelector, useDispatch } from "react-redux";
import cart from "./cart";

const store = configureStore({
  reducer: { cart },
});

export type RootState = ReturnType<typeof store.getState>;
export { store, useSelector, useDispatch };
