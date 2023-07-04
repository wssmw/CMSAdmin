// import { getHomeGoodPriceData } from '@/services'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchHomeDataAction = createAsyncThunk("fetchdata", (payload, { dispatch }) => {  
  // getHomeGoodPriceData().then(res => {
  //   dispatch(changeGoodPriceInfoAction(res))
  // })
})


const homeSlice = createSlice({
  name: "home",
  initialState: {
    num:10
  },
  reducers: {
    changenumAction(state, { payload }) {
      console.log(1);
      state.num = payload
    },
  },
})

export const { 
  changenumAction, 
} = homeSlice.actions

export default homeSlice.reducer
