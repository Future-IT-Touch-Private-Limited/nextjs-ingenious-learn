import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const apiKey = 'NHhvOEcyWk50N2Vna3VFTE00bFp3MjFKR0ZEOUhkZlg4RTk1MlJlaA==';

// Thunk to fetch countries
export const fetchCountries = createAsyncThunk('location/fetchCountries', async () => {
  const response = await axios.get('https://api.countrystatecity.in/v1/countries', {
    headers: { 'X-CSCAPI-KEY': apiKey }
  });
  return response.data;
});

// Thunk to fetch states
export const fetchStates = createAsyncThunk('location/fetchStates', async (countryCode) => {
  const response = await axios.get(`https://api.countrystatecity.in/v1/countries/${countryCode}/states`, {
    headers: { 'X-CSCAPI-KEY': apiKey }
  });
  return response.data;
});

// Thunk to fetch cities
export const fetchCities = createAsyncThunk('location/fetchCities', async ({ countryCode, stateCode }) => {
  const response = await axios.get(`https://api.countrystatecity.in/v1/countries/${countryCode}/states/${stateCode}/cities`, {
    headers: { 'X-CSCAPI-KEY': apiKey }
  });
  return response.data;
});

const locationSlice = createSlice({
  name: 'location',
  initialState: {
    countries: [],
    states: [],
    cities: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    // Handle countries fetch
    builder.addCase(fetchCountries.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchCountries.fulfilled, (state, action) => {
      state.loading = false;
      state.countries = action.payload;
    });
    builder.addCase(fetchCountries.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    // Handle states fetch
    builder.addCase(fetchStates.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchStates.fulfilled, (state, action) => {
      state.loading = false;
      state.states = action.payload;
    });
    builder.addCase(fetchStates.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    // Handle cities fetch
    builder.addCase(fetchCities.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchCities.fulfilled, (state, action) => {
      state.loading = false;
      state.cities = action.payload;
    });
    builder.addCase(fetchCities.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export default locationSlice.reducer;
