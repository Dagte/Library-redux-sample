import { configureStore } from '@reduxjs/toolkit'
import {cartReducer} from "./slices/cartSlice.tsx";
export const store = configureStore({
    reducer: cartReducer,
})
