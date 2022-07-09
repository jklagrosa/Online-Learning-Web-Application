import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: null,
    cartId: null,
    ran_again: false,
  },
  reducers: {
    GET_CART: (state, action) => {
      state.cart = action.payload;
    },

    CART_COURSE_ID: (state, action) => {
      state.cartId = action.payload;
    },
    RAN_GET_CART_AGAIN: (state, action) => {
      state.ran_again = action.payload;
    },
  },
});

export const { GET_CART, CART_COURSE_ID, RAN_GET_CART_AGAIN } =
  cartSlice.actions;
export default cartSlice.reducer;
