import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { BaseLink } from '../../config/ApiLink';

// Async thunk to fetch slider data
export const fetchSliders = createAsyncThunk('sliders/fetchSliders', async () => {
  const response = await axios.get(`${BaseLink}/sliders`);
  return response.data;
});

const sliderSlice = createSlice({
  name: 'sliders',
  initialState: {
    data: [],
    status: 'idle', 
    error: null,
  },
  reducers: {
    // You can add regular reducers here if needed
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSliders.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchSliders.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload; // Store the fetched sliders data
      })
      .addCase(fetchSliders.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default sliderSlice.reducer;
