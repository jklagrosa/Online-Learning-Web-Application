import { createSlice } from "@reduxjs/toolkit";

const offcanvasSlice = createSlice({
  name: "offcanvas",
  initialState: {
    cart_oc: false,
  },
  reducers: {
    OPEN_CART: (state, action) => {
      state.cart_oc = action.payload;
    },
    RESET_OFFCANVAS: (state, action) => {
      state.cart_oc = action.payload;
    },
  },
});

export const { OPEN_CART, RESET_OFFCANVAS } = offcanvasSlice.actions;
export default offcanvasSlice.reducer;
