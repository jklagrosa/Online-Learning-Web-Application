import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
  },
  reducers: {
    USER: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { USER } = userSlice.actions;
export default userSlice.reducer;
