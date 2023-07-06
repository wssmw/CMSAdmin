import { HomeFilled } from '@ant-design/icons'
import { createSlice } from '@reduxjs/toolkit'

const mainSlice = createSlice({
  name: "main",
  initialState: {
    // tabs菜单栏
    tabs: [
      {
        key: '/home/index',
        label: <>
              <HomeFilled />
              <span>工作台</span>
            </>
        ,
        closable: false,
      }
    ],
    tabsActivekey:'/home/index'
  },
  reducers: {
    changeTabsAction(state, { payload }) {
      state.tabs = [...payload]
    },
    changeTabsActiveKeyAction (state,{ payload }) {
      state.tabsActivekey = payload
    }
  },
})

export const {
  changeTabsAction,
  changeTabsActiveKeyAction
} = mainSlice.actions

export default mainSlice.reducer
