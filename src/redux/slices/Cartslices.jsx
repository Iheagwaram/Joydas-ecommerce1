import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: "cart",
    initialState: {cartItem: [], cartCount: 0},
    reducers:{
        addToCart: (state,action)=>{
            state.cartItem.push(action.payload);
            state.cartCount += 1;
        },
        removeFromCart: (state,action) => {
            state.items = state.items.filter((item) => item.id !== action.payload);
          },      
        clearCart: (state) => {
            state.items = [];
        },
    }
})
export const {addToCart, removeFromCart, clearCart} = cartSlice.actions;
export default cartSlice.reducer