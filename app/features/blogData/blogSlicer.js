// features/categories/blogSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { BaseLink } from '../../config/ApiLink';

export const fetechBlog = createAsyncThunk('blog/blogs', async () => {
  const response = await fetch(`${BaseLink}/blogs`);
  return response.json();
});

const blogSlice = createSlice({
  name: 'blog',
  initialState: { data: [], status: 'idle', error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetechBlog.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetechBlog.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetechBlog.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default blogSlice.reducer;
