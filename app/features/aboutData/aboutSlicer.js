// features/categories/blogSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { BaseLink } from '../../config/ApiLink';

export const fetechAbout = createAsyncThunk('about/abouts', async () => {
  const response = await fetch(`${BaseLink}/about`);
  return response.json();
});

const aboutSlicer = createSlice({
  name: 'about',
  initialState: { data: [], status: 'idle', error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetechAbout.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetechAbout.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetechAbout.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default aboutSlicer.reducer;
