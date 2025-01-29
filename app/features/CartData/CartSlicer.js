// features/cart/cartSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { BaseLink } from '../../config/ApiLink';



// Asynchronous thunk to fetch cart data
export const fetchCart = createAsyncThunk('cart/fetchCart', async (studentId) => {

    const response = await fetch(`${BaseLink}/cart?student_id=${studentId}`);
    
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
  
    return response.json();
  });
// Asynchronous thunk to add an item to the cart
export const addToCart = createAsyncThunk('cart/addToCart', async (item, { rejectWithValue }) => {
  try {
    const response = await fetch(`${BaseLink}/cart`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(item),
    });

    
    if (!response.ok) {
      let errorData = {};
      try {
        errorData = await response.json(); 
      } catch (e) {
        errorData = { error: 'Failed to parse error response from server' }; 
      }
      return rejectWithValue(errorData);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error in addToCart:", error); 
    return rejectWithValue({ error: 'An unexpected error occurred.' });
  }
});

  

export const removeFromCart = createAsyncThunk('cart/removeFromCart', async (itemId) => {
  const response = await fetch(`${BaseLink}/cart/${itemId}`, {
    method: 'DELETE',
  });

  return response;
});

const cartSlice = createSlice({
  name: 'cart',
  initialState: { items: [], status: 'idle', error: null },
  reducers: {
    // Optional: Add local reducers if needed (e.g., for updating quantity without API calls)
    updateQuantity: (state, action) => {
      const { itemId, quantity } = action.payload;
      const existingItem = state.items.find((item) => item.id === itemId);
      if (existingItem) {
        existingItem.quantity = quantity;
      }
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCart.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCart.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchCart.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        state.items.push(action.payload); // Add the new item to the cart
      })
      .addCase(removeFromCart.fulfilled, (state, action) => {
        state.items = state.items.filter((item) => item.id !== action.meta.arg); // Remove the item from the cart
      });
  },
});

export const { updateQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
