import {combineReducers, configureStore} from '@reduxjs/toolkit'
import {cartReducer} from "./slices/cartSlice.tsx";

const rootReducer = combineReducers({
    cart: cartReducer,
    // other reducers...
});

export const store = configureStore({
    reducer: rootReducer,
})

