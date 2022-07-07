import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: null,
  },
  reducers: {
    GET_CART: (state, action) => {
      state.cart = action.payload;
    },
  },
});

export const { GET_CART } = cartSlice.actions;
export default cartSlice.reducer;
