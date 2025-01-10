// app/store.js
import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "../features/categories/categorySlice";


import footerLinkReducer from "../features/footerLink/footerSlice";
import teamLinkReducer from "../features/teamsData/teamsSlice";
import bloglinkReducer from "../features/blogData/blogSlicer";

// import usersReducer from "../features/user/userSlicer";
import authReducer from "../features/user/authSlice";
import aboutReducer from "../features/aboutData/aboutSlicer";
import tagsReducer from "../features/tagsData/tagSlicer";

import courseReducer from "../features/courses/courseSlice";
import trainingallReducer from "../features/trainingData/trainingSlicer";

import coursemodulesReducer from "../features/CourseModule/CourseModule";

import eventReducer from "../features/eventData/eventSlicer";
// import userresponseReducer from "../features/userresponser/userResSlicer";

import locationReducer from "../features/locationData/locationSlicer";
import cartReducer from "../features/CartData/CartSlicer";

import Applycourse from "../features/Applycourse/Applied";
import sliderReducer from "../features/Sliderslicer/SliderData";

import paymentReducer from "../features/paymentDetails/Paymnetslicer";
export const store = configureStore({
  reducer: {
    categories: categoryReducer,
    courses: courseReducer,
    footerLinks: footerLinkReducer,
    teamlink: teamLinkReducer,
    bloglink: bloglinkReducer,
    // users: usersReducer,
    auth: authReducer,
    about: aboutReducer,
    tagsLink: tagsReducer,
    training: trainingallReducer,
    counsemodules: coursemodulesReducer,
    eventdata: eventReducer,
    // userresponse: userresponseReducer,
    location: locationReducer,
    cart: cartReducer,
    userDetails: Applycourse,
    sliders: sliderReducer,
    payment: paymentReducer,
  },
});
