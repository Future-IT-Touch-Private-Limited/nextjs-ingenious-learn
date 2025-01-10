
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { BaseLink } from '../../config/ApiLink';

export const fetechEvents = createAsyncThunk('events/event', async () => {
  const response = await fetch(`${BaseLink}/events`);

  return response.json();
});

const eventSlicer = createSlice({
  name: 'eventdata',
  initialState: { data: [], status: 'idle', error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetechEvents.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetechEvents.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetechEvents.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default eventSlicer.reducer; 

