// src/features/userDetails/userDetailsSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { BaseLink } from '../../config/ApiLink';

// Async thunk to handle the API request
export const createUserDetail = createAsyncThunk(
  'userDetails/createUserDetail',
  async (userDetailData, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${BaseLink}/userres`, userDetailData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });




      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

const userDetailsSlice = createSlice({
  name: 'userDetails',
  initialState: {
    userDetail: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createUserDetail.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createUserDetail.fulfilled, (state, action) => {
        state.loading = false;
        state.userDetail = action.payload.data;
      })
      .addCase(createUserDetail.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.error;
      });
  },
});

export default userDetailsSlice.reducer;
