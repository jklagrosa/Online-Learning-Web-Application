import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import course from "../store/course";
import wishlist from "../store/wishlist";
import cart from "../store/cart";
import drawer from "../store/offcanvas";

export const store = configureStore({
  reducer: {
    course,
    wishlist,
    cart,
    drawer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});
