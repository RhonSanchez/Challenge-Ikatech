import { RootState } from "../index";

export const selectCart = (state: RootState) => state.cart.cartItems;
export const selectCartLength = (state: RootState) =>
  state.cart.cartItems.length;
