import { configureStore } from "@reduxjs/toolkit"
import loginReducer from "./modules/login"
import mainReducer from './modules/main'
import themeReducer from './modules/theme'

const store = configureStore({
  reducer: {
    login: loginReducer,
    main:mainReducer,
    theme:themeReducer
  },
  middleware:getDefaultMiddleware => getDefaultMiddleware({
    //关闭redux序列化检测
    serializableCheck:false
  })
})

export default store
