import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductDTO } from "../../types/products";

const initialState = {
  cartItems: [] as ProductDTO[],
};

const useSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCart: (state, action: PayloadAction<ProductDTO>) => {
      state.cartItems = [...state.cartItems, action.payload];
    },
  },
});

export const { setCart } = useSlice.actions;

export default useSlice.reducer;
