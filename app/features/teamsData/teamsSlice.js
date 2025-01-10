
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { BaseLink } from '../../config/ApiLink';

export const fetchTeamLinks = createAsyncThunk('footerlink/fetchteamlink', async () => {
  // const response = await fetch('https://admin.gursimran.online/api/v1/teamlink');
  const response = await fetch(`${BaseLink}/teamlink`);

  return response.json();
});

const teamlinkSlice = createSlice({
  name: 'teamsLinks',
  initialState: { data: [], status: 'idle', error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTeamLinks.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTeamLinks.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchTeamLinks.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default teamlinkSlice.reducer; 

