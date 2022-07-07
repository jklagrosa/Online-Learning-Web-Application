import { createSlice } from "@reduxjs/toolkit";

export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: {
    wishlist: null,
  },
  reducers: {
    GET_WISHLIST: (state, action) => {
      state.wishlist = action.payload;
    },
  },
});

export const { GET_WISHLIST } = wishlistSlice.actions;
export default wishlistSlice.reducer;
