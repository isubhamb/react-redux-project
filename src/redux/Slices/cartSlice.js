import { createSlice } from '@reduxjs/toolkit';
const cartSlice = createSlice({
    name:'cart-page',
    initialState:[],
    reducers: {
        addToCart(state,action){
            state.push(action.payload);
        },
        removeFromCart(state, action){
            return state.filter((item)=>item.id!==action.payload.id);
        },
        clearCart(state){
            return state = [];
        }
    }
});

export const { addToCart, removeFromCart,clearCart } = cartSlice.actions;
export default cartSlice.reducer;
