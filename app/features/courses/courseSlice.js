// features/courses/courseSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { BaseLink } from '../../config/ApiLink';
import axios from 'axios';


export const fetchCourses = createAsyncThunk('courses/fetchCourses', async () => {
  const response = await axios.get(`${BaseLink}/courses`);

  return response;
});

export const fetchCourseById = createAsyncThunk('courses/fetchCourseById', async (id) => {
  const response = await axios.get(`${BaseLink}/courses/${id}`);
  return response.data; 
});

export const fetchCourseByMainId = createAsyncThunk('courses/fetchCourseByMainId', async (id) => {
  const response = await axios.get(`${BaseLink}/coursesnew/${id}`);
  return response.data; 
});



const courseSlice = createSlice({
  name: 'courses',
  initialState: { data: [], status: 'idle', error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCourses.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCourses.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchCourses.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(fetchCourseById.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCourseById.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.selectedCourse = action.payload;
      })
      .addCase(fetchCourseById.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(fetchCourseByMainId.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCourseByMainId.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.mecourse = action.payload;
      })
      .addCase(fetchCourseByMainId.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
      

  },
});

export default courseSlice.reducer;
