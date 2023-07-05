import { createSlice } from '@reduxjs/toolkit'
import * as Icon from '@ant-design/icons/lib'



const mainSlice = createSlice({
  name: "main",
  initialState: {
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
    ]
  },
  reducers: {
    changeTabsAction(state, { payload }) {
      state.tabs = payload
    },
  },
})

export const {
  changeTabsAction,

} = mainSlice.actions

export default mainSlice.reducer
