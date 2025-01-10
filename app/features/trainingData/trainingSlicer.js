
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { BaseLink } from '../../config/ApiLink';

import axios from 'axios';
export const fetchTrainingdata = createAsyncThunk('trainingalldata/trainingall', async () => {
  const response = await axios.get(`${BaseLink}/trainall`);
  


  return response;
});

const traningData = createSlice({
  name: 'trainingall',
  initialState: { data: [], status: 'idle', error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTrainingdata.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTrainingdata.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchTrainingdata.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default traningData.reducer; 

