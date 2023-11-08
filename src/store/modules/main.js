/** @format */

import { createSlice } from "@reduxjs/toolkit";
import cache from "../../utils/cache";
const mainSlice = createSlice({
  name: "main",
  initialState: {
    // tabs菜单栏
    tabs: cache.getCache('tabs')||[
      {
        key: "/home/index",
        title:'工作台',
        icon: 'HomeFilled',
        closable: false,
      },
    ],
    tabsActivekey:cache.getCache("tabsActivekey")|| "/home/index",
  },
  reducers: {
    changeTabsAction(state, { payload }) {
      state.tabs = payload;
      cache.setCache("tabs", [...payload]);
    },
    changeTabsActiveKeyAction(state, { payload }) {
      state.tabsActivekey = payload;
      cache.setCache("tabsActivekey", payload);
    },
  },
});

export const { changeTabsAction, changeTabsActiveKeyAction } =
  mainSlice.actions;

export default mainSlice.reducer;
