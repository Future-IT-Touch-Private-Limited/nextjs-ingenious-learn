import React, { useEffect, useState } from "react";
import { MdOutlineWatchLater } from "react-icons/md";
import { CiGlobe } from "react-icons/ci";
import { IoSunnyOutline } from "react-icons/io5";
import { IoCloudyNightOutline } from "react-icons/io5";
import { LuCloudSun } from "react-icons/lu";
import { MdWatchLater } from "react-icons/md";
import { format, parse } from "date-fns";
import { useParams } from "react-router-dom";

import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { fetchCourseByMainId } from "../../features/courses/courseSlice";

export default function TrainCardData({ data, crname, handleAddToCart }) {

  const [userCountry, setUserCountry] = useState();

  const dispatch = useDispatch();
  // console.log(crname.tuition_fees[0]);


  const selectedNewCourse = useSelector((state) => state.courses.mecourse);

  const startDate = new Date(data.start_date);
  const endDate = new Date(data.end_date);

  // Parse the start time and end time from the provided strings
  const startTime = parse(data.start_time, "HH:mm:ss", new Date());
  const endTime = parse(data.end_time, "HH:mm:ss", new Date());

  // Format the dates and times
  const formattedStartDate = format(startDate, "MMM dd");
  const formattedEndDate = format(endDate, "MMM dd");
  const formattedStartTime = format(startTime, "hh:mm a");
  const formattedEndTime = format(endTime, "hh:mm a");

  // Determine the time of day for the start time
  const startHour = startTime.getHours();
  let timeOfDay = "";
  if (startHour < 12) {
    timeOfDay = "Morning";
  } else if (startHour >= 12 && startHour < 18) {
    timeOfDay = "Afternoon";
  } else if (startHour >= 18) {
    timeOfDay = "Evening";
  }

  // console.log(formattedStartTime)

  // console.log(formattedStartTime);

  function capitalizeWords(str) {
    return str.replace(/\b\w/g, (char) => char.toUpperCase());
  }
  const capitalizedTrainingMode = capitalizeWords(data.training_mode);

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
    const fetchUserCountry = async () => {
      try {
        const ipResponse = await fetch("https://ipinfo.io/json");
        const ipData = await ipResponse.json();
        const countryCode = ipData.country.toLowerCase();

        const countryResponse = await fetch(
          `https://restcountries.com/v2/alpha/${countryCode}`
        );
        const countryData = await countryResponse.json();

        setUserCountry(countryData.currencies[0].code);
      } catch (error) {
        console.error("Error fetching currency information:", error);
      }
    };

    fetchUserCountry();
  }, []);

  useEffect(() => {
    const getCourseModule = async () => {
      dispatch(fetchCourseByMainId(data?.course_id));

    };

    getCourseModule();
  }, [dispatch]);




  const userCountryLower = userCountry?.toLowerCase(); 

  // Find the country price based on the user's country
  const countryPrice = selectedNewCourse?.multi_country_currency?.find(
    (currency) => currency?.country_id?.toLowerCase() === userCountryLower
  ) || selectedNewCourse?.multi_country_currency?.find(
    (currency) => currency?.country_id === 'USD' 
  );

  // Format the price, using the appropriate currency
  const currencyCode = countryPrice?.country_id || "USD"; // Use the found country's currency, default to USD if not found
  
  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currencyCode, 
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(countryPrice?.price || 0); 
  

  

  const originalPrice = countryPrice?.price || 0;
  const discountPercentage =
    selectedNewCourse?.tuitionFees[0]?.discount_percentage || 0;

    const countryDISPrice = selectedNewCourse?.multi_country_currency?.find(
      (currency) => currency?.country_id?.toLowerCase() === userCountryLower
    ) || selectedNewCourse?.multi_country_currency?.find(
      (currency) => currency?.country_id === 'USD' 
    );

  const discountedPrice =
    originalPrice - (originalPrice * countryDISPrice?.discount_percentage) / 100;

  const monthlyPayment = discountedPrice / 9;

  const formattedDiscountedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currencyCode, 
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(discountedPrice);

  const formattedMonthlyPayment = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currencyCode, 
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(monthlyPayment);


  return (
    <>
      <div class="card border-primary-shadow my-3">
        <div class="card-body p-4">
          <div class="row  justify-content-between">
            <div className="col-12 col-md-4 mb-3 mb-md-0">
              <span class="btn text-success text-center bg-light border border-success my-2 py-1 px-3 rounded-pill ">
                <LuCloudSun class="me-2 text-success" />
                <span className="mx-1">{timeOfDay}</span>
              </span>
              <h4 className="font-weight-bold">
                {" "}
                {formattedStartDate} - {formattedEndDate}{" "},
              </h4>
              <span className="d-flex align-items-center text-muted">
                <MdOutlineWatchLater />
                <span className="mx-1 font-weight-bold ">
                  IST {formattedStartTime} - {formattedEndTime}{" "}
                </span>
              </span>

              <div className="globe fs-5 d-flex align-items-center my-2 ">
                <CiGlobe className="fs-4" />

                <span className="mx-1 ">
                  {capitalizedTrainingMode} Classroom <span></span>
                </span>
                <span className="d-block text-capitalize">
                , {data.batch_type}
                </span>
              </div>
            </div>

            <div className="col-12 col-md-4 mb-3 mb-md-0">
              <div className="d-flex w-100 flex-column flex-md-row justify-content-between align-items-center">
                <div className="d-flex w-100 flex-column gap-2 mb-3 mb-md-0">
                  <div className="text-xxs font-weight-bold text-success">
                    {countryPrice?.price === undefined
                      ? ""
                      : `${countryDISPrice?.discount_percentage}% OFF`}
                  </div>
                  <div className="d-flex align-items-center">
                    <h3 className="text-xl font-weight-bold text-dark">
             

                      {countryPrice?.price == undefined
                        ? "Free"
                        : formattedDiscountedPrice}
                    </h3>
                    <h4 className="text-xs mx-1 pl-2 text-muted text-decoration-line-through">
                      {/* {formatCurrency(crname.tuition_fees[0].course_fee)} */}
                      {countryPrice?.price == undefined ? "" : formattedPrice}
                    </h4>
                  </div>
                  <div className="d-flex gap-2 align-items-center">
                    <div className="text-xxs text-success font-weight-semibold">
                      {countryPrice?.price == undefined
                        ? ""
                        : `As low as ${formattedMonthlyPayment}/month`}
                    </div>
                    <button tabIndex="-1" className="btn btn-link p-0">
                      {countryPrice?.price == undefined ? (
                        ""
                      ) : (
                        <i className="bi bi-info-circle-fill text-success"></i>
                      )}
                    </button>
                  </div>
                  <div>
                    <span class="btn text-success d-inline-flex align-items-center  text-center bg-light border border-grey shadow-1 my-2 py-1 px-3 rounded-pill ">
                      <MdWatchLater class="me-1 fs-4  text-warning bg-gradient" />
                      <span className="mx-1 font-weight-bolder text-black">
                        <b>Only few seats left!</b>{" "}
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-2 my-auto">
              <div className="">
                <button
                  onClick={handleAddToCart}
                  className="btn btn-dark text-white px-4 w-100 w-md-auto h-100"
                >
                  Enroll Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
