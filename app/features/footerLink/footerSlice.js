import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { BaseLink } from '../../config/ApiLink';

export const fetchFooterLinks = createAsyncThunk('footerLinks/fetchFooterLinks', async () => {
  const response = await axios.get(`${BaseLink}/footerlink`);
  return response.data;
});

const footerLinkSlice = createSlice({
  name: 'footerLinks',
  initialState: { data: [], status: 'idle', error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFooterLinks.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchFooterLinks.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchFooterLinks.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default footerLinkSlice.reducer;
