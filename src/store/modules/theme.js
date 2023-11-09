/** @format */

import { createSlice } from "@reduxjs/toolkit";
import cache from "../../utils/cache";
const themeSlice = createSlice({
  name: "main",
  initialState: {
    drawerVisible:false,
  },
  reducers: {
    changeDrawerVisibleAction(state, { payload }) {
      state.drawerVisible = payload;
    },
  },
});

export const { changeDrawerVisibleAction } =
themeSlice.actions;

export default themeSlice.reducer;
