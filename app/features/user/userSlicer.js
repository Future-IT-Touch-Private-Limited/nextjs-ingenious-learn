import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { BaseLink } from '../../config/ApiLink';

export const registerUser = createAsyncThunk(
  'users/register',
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${BaseLink}/register`, userData, {
        headers: { 'Content-Type': 'application/json' }
      });

      const token = response.data.student_id;


      localStorage.setItem('student_id', token);


      return response.data;

    } catch (error) {
     

      return rejectWithValue(error?.response?.data?.errors.password || error.errors);
    }
  }
);

const usersSlice = createSlice({
  name: 'users',
  initialState: {
        registration: {
          status: 'idle',
          error: null,
          message: '',
        },
      },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(registerUser.fulfilled, (state,action) => {
        state.status = 'Regsucceeded';
        state.registration.message = action.payload.message;

      })
      .addCase(registerUser.rejected, (state, action) => {
        state.status = 'Regfailed';
        state.error = action.payload;
      });
  },
});


// const usersSlice = createSlice({
//   name: 'users',
//   initialState: {
//     registration: {
//       status: 'idle',
//       error: null,
//       message: '',
//     },
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(registerUser.pending, (state) => {
//         state.registration.status = 'loading';
//         state.registration.error = null;
//       })
//       .addCase(registerUser.fulfilled, (state, action) => {
//         state.registration.status = 'succeeded';
//         state.registration.message = action.payload.message;
//       })
//       .addCase(registerUser.rejected, (state, action) => {
//         state.registration.status = 'failed';
//         state.registration.error = action.payload.message || 'Registration failed';
//       });
//   },
// });

export default usersSlice.reducer;
