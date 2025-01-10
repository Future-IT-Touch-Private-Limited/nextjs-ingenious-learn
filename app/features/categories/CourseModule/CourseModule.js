// features/courses/courseSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { BaseLink } from '../../config/ApiLink';
import axios from 'axios';




export const getCourseModule = createAsyncThunk('courses/getCourseModule', async (id) => {
  const response = await axios.get(`${BaseLink}/course-modules/${id}`);

  return response.data; 
});



const courseModule = createSlice({
  name: 'coursesModules',
  initialState: { data: [], status: 'idle', error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCourseModule.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getCourseModule.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.selectedCourse = action.payload;
      })
      .addCase(getCourseModule.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
      

  },
});

export default courseModule.reducer;
