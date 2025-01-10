
'use client'

import React, { useEffect, useState } from "react";

import TrainCardData from "./TrainCardData";

import { useDispatch, useSelector } from "react-redux";
import { fetchCourseById } from "../../features/courses/courseSlice";
import { addToCart } from "../../features/CartData/CartSlicer";
import { useRouter } from 'next/router';
import { useParams } from 'next/navigation'
import Formlogin from "./Formlogin";
import axios from 'axios'
import { exportPages } from "next/dist/export/worker";




const MainComp = () =>{

    const {slug} = useParams()
    // const router = useRouter()
  
    const [userId, setUserId] = useState(null);
  
    const [selectedFilter, setSelectedFilter] = useState("All");
  
  
  
  
  
  
  
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [activeTabNav, setActiveTabNav] = useState("login");
  
    const toggleModal = () => {
      setIsModalOpen(!isModalOpen);
    };
    // console.log(crname);
  
    const dispatch = useDispatch();
    const course = useSelector((state) => state.courses?.selectedCourse);
    const cartItems = useSelector((state) => state.cart.items);
    const cartStatus = useSelector((state) => state.cart.status);
    const cartError = useSelector((state) => state.cart.error);
  
    useEffect(() => {
      dispatch(fetchCourseById(slug));
    }, [dispatch, slug]);
  
    const filteredCalendars = course?.trainingCalendars.filter((calendar) => {
      const currentDate = new Date();
      const calendarDate = new Date(calendar.start_date);
  
      // console.log(calendar)
  
      if (selectedFilter === "All") {
        return calendarDate >= currentDate;
      } else if (selectedFilter === "This Month") {
        return (
          calendarDate.getMonth() === currentDate.getMonth() &&
          calendarDate >= currentDate
        );
      } else if (selectedFilter === "Next Month") {
        const nextMonth = new Date();
        nextMonth.setMonth(currentDate.getMonth() + 1);
        return calendarDate.getMonth() === nextMonth.getMonth();
      } else if (selectedFilter === "Weekend") {
        return (
          calendar.batch_type.toLowerCase() === "weekend" &&
          calendarDate >= currentDate
        );
      } else if (selectedFilter === "Week Day") {
        return (
          calendar.batch_type.toLowerCase() === "weekdays" &&
          calendarDate >= currentDate
        );
      }
  
      return false;
    });
  
  
    const formatCurrency = (value) => {
      return new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
      }).format(value);
    };
  
    const calculateDiscountedPrice = (originalPrice, discountPercentage) => {
      const discountAmount = (originalPrice * discountPercentage) / 100;
      return formatCurrency(originalPrice - discountAmount);
    };
  
    const calculateDiscountedNotPrice = (originalPrice, discountPercentage) => {
      const discountAmount = (originalPrice * discountPercentage) / 100;
      return originalPrice - discountAmount;
    };
  
    const calculateMonthlyPayment = (discountedPrice) => {
      const months = 12;
  
      return Math.ceil(discountedPrice / months);
    };
  
    useEffect(() => {
      const stuId = localStorage?.getItem("student_id");
  
      if (stuId) {
        setUserId(stuId);
      } else {
        setUserId("");
      }
    }, []);
  
    const handleAddToCart = (id) => {
      if (!userId) {
        setIsModalOpen(true);
  
        return; // Exit the function early if the user is not logged in
      }
  
      const item = {
        student_id: userId,
        course_id: course.id,
        training_cal_id: id,
      };
  
      dispatch(addToCart(item))
        .unwrap()
        .then(() => {
          window.location.href = "/cart";
        })
        .catch((error) => {
          console.error("Failed to add to cart:", error);
        });
    };
  
    return (
      <>
        <div className="container">
          <div className="my-4 w-100 h-100  py-4 ">
            <div className="my-4">
              <h2>
                <b className="text-black">Schedules</b> for {course?.name}
              </h2>
            </div>
  
            <div className="container">
              <div className="row">
                <div className="col-12">
                  {/* Filter buttons */}
                  <div className="row filter-class my-3">
                    <div className="filter-comp d-flex align-items-center justify-content-start flex-nowrap overflow-auto scroll-snap">
                      {/* Filter button */}
                      {[
                        "All",
                        "This Month",
                        "Next Month",
                        "Weekend",
                        "Week Day",
                      ].map((filter, index) => (
                        <span
                          key={index}
                          className={`btn btn-dark mx-2  fw-bold rounded-pill hover-btn ${
                            selectedFilter === filter ? "active" : ""
                          }`}
                          onClick={() => setSelectedFilter(filter)}
                          style={{ whiteSpace: "nowrap" }}
                        >
                          {filter}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
  
  
  
                {/* Calendar Cards */}
                <div className="col-md-12">
                  {filteredCalendars && filteredCalendars.length > 0 ? (
                    filteredCalendars.map((data, ind) => (
                      <TrainCardData
                        crname={course}
                        key={ind}
                        data={data}
                        handleAddToCart={() => handleAddToCart(data.id)}
                      />
                    ))
                  ) : (
                    <p>Training module: Not added</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        {isModalOpen && <Formlogin toggleModal={toggleModal} />}
      </>
    );
}

export default MainComp;