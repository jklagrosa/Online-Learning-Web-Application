import { createSlice } from "@reduxjs/toolkit";

export const courseSlice = createSlice({
  name: "course",
  initialState: {
    courses: null,
  },
  reducers: {
    GET_ALL_COURSE: (state, action) => {
      state.courses = action.payload;
    },
  },
});

export const { GET_ALL_COURSE } = courseSlice.actions;
export default courseSlice.reducer;
