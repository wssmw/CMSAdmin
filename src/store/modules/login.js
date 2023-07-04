// import { getHomeGoodPriceData } from '@/services'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getAuthMenuListApi } from '../../service/module/login';

export const fetchHomeDataAction = createAsyncThunk("fetchdata", (payload, { dispatch }) => {  
  // getHomeGoodPriceData().then(res => {
  //   dispatch(changeGoodPriceInfoAction(res))
  // })
  getAuthMenuListApi().then(res=>{
    console.log("router:",res);
    dispatch(changeMenuAction(res.data))
  })
})


const homeSlice = createSlice({
  name: "home",
  initialState: {
    token:'',
    menu:[]
  },
  reducers: {
    changeTokenAction(state, { payload }) {
      console.log("payload",payload);
      state.token = payload
    },
    changeMenuAction(state,{payload}){
      state.menu = payload
    }
  },
})

export const { 
  changeTokenAction, 
  changeMenuAction
} = homeSlice.actions

export default homeSlice.reducer
