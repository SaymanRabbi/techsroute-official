import { configureStore } from "@reduxjs/toolkit"
import userSlice from "../../pages/features/userinfo/userSlice"

const store = configureStore({
    reducer: {
       user:userSlice
    }
})

export default store