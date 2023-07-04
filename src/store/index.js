import { configureStore } from "@reduxjs/toolkit"
import loginReducer from "./modules/login"

const store = configureStore({
  reducer: {
    login: loginReducer,
  }
})

export default store
