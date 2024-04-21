import { TProduct } from '@customTypes/product';
import { createSlice } from '@reduxjs/toolkit';
import { getCartTotalQuantitySelectore } from './selectors';
import actGetProductsByItems from './act/actGetProductsByItems';
interface ICartState {
  items: { [key: number]: number };
  productFullInfo: TProduct[];
}
const initialState: ICartState = {
  items: {},
  productFullInfo: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const id = action.payload;
      if (state.items[id]) {
        state.items[id]++;
      } else {
        state.items[id] = 1;
      }
    },
  },
});

export {getCartTotalQuantitySelectore, actGetProductsByItems}
export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
