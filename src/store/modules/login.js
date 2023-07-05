import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getAuthMenuListApi } from '../../service/module/login';

export const fetchHomeDataAction = createAsyncThunk("fetchdata", (payload, { dispatch }) => {  
  getAuthMenuListApi().then(res=>{
    dispatch(changeMenuAction(res.data))
  })
})


const loginSlice = createSlice({
  name: "login",
  initialState: {
    token:'',
    menu:[],
  },
  reducers: {
    changeTokenAction(state, { payload }) {
      console.log("payload",payload);
      state.token = payload
    },
    changeMenuAction(state,{payload}){
      state.menu = payload
    },

  },
})

export const { 
  changeTokenAction, 
  changeMenuAction,
} = loginSlice.actions

export default loginSlice.reducer
