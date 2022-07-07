import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import course from "../store/course";
import wishlist from "../store/wishlist";
import cart from "../store/cart";

export const store = configureStore({
  reducer: {
    course,
    wishlist,
    cart,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});
