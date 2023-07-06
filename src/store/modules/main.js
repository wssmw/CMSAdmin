import { createSlice } from '@reduxjs/toolkit'
import * as Icon from '@ant-design/icons/lib'



const mainSlice = createSlice({
  name: "main",
  initialState: {
    // tabs菜单栏
    tabs: [
      {
        key: '/home/index',
        label: (
          <div>
            <Icon.HomeFilled />工作台
          </div>
        ),
        closable: false,
      }
    ],
    tabsActivekey:'/home/index'
  },
  reducers: {
    changeTabsAction(state, { payload }) {
      state.tabs = payload
    },
    changeTabsActiveKeyAction (state,{payload}) {
      state.tabsActivekey = payload
    }
  },
})

export const {
  changeTabsAction,
  changeTabsActiveKeyAction
} = mainSlice.actions

export default mainSlice.reducer
