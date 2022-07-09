import { createSlice } from "@reduxjs/toolkit";

const offcanvasSlice = createSlice({
  name: "offcanvas",
  initialState: {
    wish_oc: false,
    cart_oc: false,
  },
  reducers: {
    OPEN_WISHLIST: (state, action) => {
      state.wish_oc = action.payload.wish;
      state.cart_oc = action.payload.cart;
    },
    OPEN_CART: (state, action) => {
      state.cart_oc = action.payload.cart;
      state.wish_oc = action.payload.wish;
    },
  },
});

export const { OPEN_WISHLIST, OPEN_CART } = offcanvasSlice.actions;
export default offcanvasSlice.reducer;
