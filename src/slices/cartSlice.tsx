import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CartState {
    idsInInterface: number[];
}

const initialState: CartState = {
    idsInInterface: [],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        add: (state: CartState, action:  PayloadAction<number>) => {
            if (state.idsInInterface.includes(action.payload)) {
                return
            }
            state.idsInInterface = [action.payload, ...state.idsInInterface]
        },
        remove: (state: CartState, action:  PayloadAction<number>) => {
            const index = state.idsInInterface.indexOf(action.payload)
            if (index > -1) {
                state.idsInInterface.splice(index, 1);
            }
            },
        clear: (state: CartState) => {
            state.idsInInterface = []
        }
    }
})


export const cartActions = cartSlice.actions;
export const cartReducer = cartSlice.reducer;