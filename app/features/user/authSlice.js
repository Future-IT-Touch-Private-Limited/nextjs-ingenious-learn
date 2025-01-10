// features/auth/authSlice.js
"use client";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { BaseLink } from "../../config/ApiLink";
import axios from "axios";
// Define async thunk for user login
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${BaseLink}/login`, userData, {
        headers: { "Content-Type": "application/json" },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "An unexpected error occurred"
      );
    }
  }
);

// export const loginUser = createAsyncThunk('auth/loginUser', async (userData, { rejectWithValue }) => {
//   try {
//     const response = await loginUserAPI(userData);
//     return response.data;
//   } catch (error) {
//     return rejectWithValue(error.response?.data?.message);
//   }
// });

const initialState = {
  user: null,
  status: "idle",
  error: null,
};

export const getUserById = createAsyncThunk(
  "auth/getUserById",
  async (userId, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${BaseLink}/student/${userId}`);

      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "An unexpected error occurred"
      );
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    login: {
      status: "idle",
      error: null,
      message: "",
    },
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(getUserById.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getUserById.fulfilled, (state, action) => {
        state.status = "Logsucceeded";
        state.userById = action.payload; // Check if userById is used correctly
      })
      .addCase(getUserById.rejected, (state, action) => {
        state.status = "Logfailed";
        state.error = action.payload;
      });
  },
});

export default authSlice.reducer;
