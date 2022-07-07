import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import course from "../store/course";

export const store = configureStore({
  reducer: {
    course,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});
