import { configureStore } from "@reduxjs/toolkit"
import loginReducer from "./modules/login"
import mainReducer from './modules/main'

const store = configureStore({
  reducer: {
    login: loginReducer,
    main:mainReducer
  }
})

export default store
