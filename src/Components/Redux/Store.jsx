import { configureStore } from "@reduxjs/toolkit";
import { CartSlice } from "./Cartslice";
const Store = configureStore({
  reducer: {
    cart: CartSlice.reducer,
  },
});

export default Store;
