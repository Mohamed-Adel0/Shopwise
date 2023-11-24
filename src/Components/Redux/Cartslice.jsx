import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  loves: [],
};

// console.log(initialState.items , initialState.loves)

export const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addtocart: (state, action) => {
      state.items.push(action.payload);
    },
    wishlist: (state, action) => {
      state.loves.push(action.payload);
    },
  },
});
