import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: null,
    cartId: null,
  },
  reducers: {
    GET_CART: (state, action) => {
      state.cart = action.payload;
    },

    CART_COURSE_ID: (state, action) => {
      state.cartId = action.payload;
    },
  },
});

export const { GET_CART, CART_COURSE_ID } = cartSlice.actions;
export default cartSlice.reducer;
