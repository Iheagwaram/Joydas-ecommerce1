import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { cartItem: [], cartCount: 0 },
  reducers: {
    addToCart: (state, action) => {
      state.cartItem.push(action.payload);
      state.cartCount += 1;
    },
    removeFromCart: (state, action) => {
      state.cartItem = state.cartItem.filter((item) => item.id !== action.payload);
      state.cartCount = Math.max(0, state.cartItem.length); // Prevent negative cartCount
    },
    clearCart: (state) => {
      state.cartItem = [];
      state.cartCount = 0;
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
