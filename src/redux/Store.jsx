import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/Cartslices";

const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
});

export default store;
