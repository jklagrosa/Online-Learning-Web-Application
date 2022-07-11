import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import course from "../store/course";
import wishlist from "../store/wishlist";
import cart from "../store/cart";
import drawer from "../store/offcanvas";
import user from "../store/user";

export const store = configureStore({
  reducer: {
    course,
    wishlist,
    cart,
    drawer,
    user,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});
