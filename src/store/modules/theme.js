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
    styleSetting:'light',
    // 色弱模式
    isWeak:false,
    // 灰色模式
    isGrey:false,
    // 主题颜色
    primary:'#2449ff',
    // 国际化（中英文切换）
    language:'zhCN'
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
    changePrimaryAction(state, { payload }) {
      state.primary = payload;
    },
    changeIsGreyAction(state, { payload }) {
      if(payload==true){
        state.isWeak = false
      }
      state.isGrey = payload;
    },
    changeIsWeakAction(state, { payload }) {
      if(payload==true){
        state.isGrey = false
      }
      state.isWeak = payload;
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
  changeStyleSettingAction,
  changePrimaryAction,
  changeIsGreyAction,
  changeIsWeakAction
} = themeSlice.actions;

export default themeSlice.reducer;
