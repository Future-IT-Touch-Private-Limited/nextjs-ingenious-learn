
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { BaseLink } from '../../config/ApiLink';



export const userResponse = createAsyncThunk(
    'users/responses',
    async (userData, { rejectWithValue }) => {
      try {

       
        const response = await axios.post(`${BaseLink}/submitrespons`, userData, {
          headers: { 'Content-Type': 'application/json' }
        });
    
        return response.data;
  
      } catch (error) {
         


  
        return rejectWithValue(error?.response?.data?.errors.password || error.errors);
      }
    }
  );
  
  const userResponsSlicer = createSlice({
    name: 'userresponse',
    initialState: {
          userrespons: {
            status: 'idle',
            error: null,
            message: '',
          },
        },
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(userResponse.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(userResponse.fulfilled, (state,action) => {
          state.status = 'Regsucceeded';
          state.userrespons.message = action.payload.message;
  
        })
        .addCase(userResponse.rejected, (state, action) => {
          state.status = 'Regfailed';
          state.error = action.payload;
        });
    },
  });

  export default userResponsSlicer.reducer;