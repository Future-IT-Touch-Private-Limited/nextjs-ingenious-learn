import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { BaseLink } from '../../config/ApiLink';

// Async thunk to fetch slider data
export const fetchPayment = createAsyncThunk('payment/fetchPayment', async () => {
  const response = await axios.get(`${BaseLink}/payment`);
  return response.data;
});

const paymentSlicer = createSlice({
  name: 'payment',
  initialState: {
    data: [],
    status: 'idle', 
    error: null,
  },
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPayment.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPayment.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload; // Store the fetched sliders data
      })
      .addCase(fetchPayment.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default paymentSlicer.reducer;
