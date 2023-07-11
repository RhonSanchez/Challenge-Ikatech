import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

const useSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCart: (state, action) => {
      state.cartItems = [...state.cartItems, action.payload];
    },
  },
});

export const { setCart } = useSlice.actions;

export default useSlice.reducer;
