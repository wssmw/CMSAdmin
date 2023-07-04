import { configureStore } from "@reduxjs/toolkit"
import homeReducer from "./modules/login"

const store = configureStore({
  reducer: {
    home: homeReducer,
  }
})

export default store
