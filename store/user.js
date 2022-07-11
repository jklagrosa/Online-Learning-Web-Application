import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
  },
  reducers: {
    USER_DATA: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { USER_DATA } = userSlice.actions;
export default userSlice.reducer;
