/** @format */

import { createSlice } from "@reduxjs/toolkit";
const themeSlice = createSlice({
  name: "main",
  initialState: {
    // 是否显示drawer
    drawerVisible:false,
    // 菜单是否收起
    collapsedMenu:false,
    // 是否显示面包屑
    breadcrumb:true,
    // 是否显示面包屑上面的icon
    breadcrumbIcon:true,
    // 是否显示tabs
    isHasTabs:true,
    // 是否显示tabs的icon
    isHasTabsIcon:true,
    // 是否显示页脚
    footer:true,
    // 风格切换
    styleSetting:'dark',
    // 色弱模式
    isWeak:false,
    // 灰色模式
    isGrey:false,
    // 主题颜色
    primary:'red'
  },
  reducers: {
    changeDrawerVisibleAction(state, { payload }) {
      state.drawerVisible = payload;
    },
    changeCollapsedMenuAction(state, { payload }) {
      state.collapsedMenu = payload;
    },
    changeBreadcrumbAction(state, { payload }) {
      state.breadcrumb = payload;
    },
    changeBreadcrumbIconAction(state, { payload }) {
      state.breadcrumbIcon = payload;
    },
    changeIsHasTabsAction(state, { payload }) {
      state.isHasTabs = payload;
    },
    changeIsHasTabsIconAction(state, { payload }) {
      state.isHasTabsIcon = payload;
    },
    changeFooterAction(state, { payload }) {
      state.footer = payload;
    },
    changeStyleSettingAction(state, { payload }) {
      state.styleSetting = payload;
    },
  },
});

export const { 
  changeDrawerVisibleAction,
  changeCollapsedMenuAction,
  changeBreadcrumbAction,
  changeBreadcrumbIconAction,
  changeIsHasTabsAction,
  changeIsHasTabsIconAction,
  changeFooterAction,
  changeStyleSettingAction
} = themeSlice.actions;

export default themeSlice.reducer;
