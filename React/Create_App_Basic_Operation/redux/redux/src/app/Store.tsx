import { configureStore } from "@reduxjs/toolkit";
import counterReducre from "../features/counter/counterSlice.tsx";

export const store = configureStore({
  reducer: {
    counter: counterReducre,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
