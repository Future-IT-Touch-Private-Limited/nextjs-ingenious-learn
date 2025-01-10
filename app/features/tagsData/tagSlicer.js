
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { BaseLink } from '../../config/ApiLink';

export const fetechTags = createAsyncThunk('tagsdata/tags', async () => {
  const response = await fetch(`${BaseLink}/tags`);

  return response.json();
});

const tagsSlicer = createSlice({
  name: 'tagsLink',
  initialState: { data: [], status: 'idle', error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetechTags.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetechTags.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetechTags.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default tagsSlicer.reducer; 

