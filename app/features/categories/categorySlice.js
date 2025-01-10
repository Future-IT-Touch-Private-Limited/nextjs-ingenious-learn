// features/categories/categorySlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { BaseLink } from "../../config/ApiLink";

export const fetchCategories = createAsyncThunk(
  "categories/fetchCategories",
  async () => {
    const response = await fetch(`${BaseLink}/category`);
    return response.json();
  }
);

export const fetchCategoriesbyID = createAsyncThunk(
  "categories/fetchCategories",
  async () => {
    const response = await fetch(`${BaseLink}/category/${id}`);
    return response.json();
  }
);

const categorySlice = createSlice({
  name: "categories",
  initialState: { data: [], status: "idle", error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default categorySlice.reducer;
