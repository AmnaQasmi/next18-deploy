import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

interface CartItem {
  name: string;
  price: number;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  totalPrice: number;
}

const initialState: CartState = {
  items: [],
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<{ name: string, price: number }>) => {
      const item = action.payload;
      const existingItem = state.items.find(i => i.name === item.name);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...item, quantity: 1 });
      }
      state.totalPrice += item.price;
      // Add a toast message here
      toast.success(`${item.name} added to cart!`);
    },
    removeItem: (state, action: PayloadAction<string>) => {
      const index = state.items.findIndex(i => i.name === action.payload);
      if (index !== -1) {
        const item = state.items[index];
        if (item.quantity > 1) {
          item.quantity -= 1;
          state.totalPrice -= item.price;
        } else {
          state.items.splice(index, 1);
          state.totalPrice -= item.price;
        }
      }
    },
    clearCart: (state) => {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
