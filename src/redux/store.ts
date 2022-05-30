import { configureStore } from "@reduxjs/toolkit";
import textReducer from "@src/redux/slices/textSlice";

export const store = configureStore({
  reducer: {
    text: textReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
