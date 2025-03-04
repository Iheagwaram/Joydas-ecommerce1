import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/Cartslices";
import authSlice from "./slices/Authslices"
const store = configureStore({
  reducer: {
    cart: cartSlice,
    auth: authSlice,
  },
});

export default store;
