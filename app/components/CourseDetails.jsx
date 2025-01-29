"use client";
import React, { useState, useEffect, useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import parse from "html-react-parser";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";

import { fetchCourses } from "../features/courses/courseSlice";
import { fetechTags } from "../features/tagsData/tagSlicer";
// import { StorageLink } from "../../app/Apilink";
// import axios from "axios";

const CourseDetails = () => {
  const [activeTab, setActiveTab] = useState("All Courses");
  const [coursePrice, setCoursePrice] = useState();
  // const handleTabClick = (index) => {
  //   setActiveTab(index);
  // };
  const containerRef = useRef(null);

  const [isMobile, setIsMobile] = useState(false);
  const dispatch = useDispatch();
  const {
    data: tagsLink,
    status,
    error,
  } = useSelector((state) => state.tagsLink);

  const { data: courses } = useSelector((state) => state.courses);

  const [userCountry, setUserCountry] = useState("");

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
    if (status === "idle") {
      dispatch(fetechTags());
    }
  }, [status, dispatch]);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchCourses());
    }
  }, [status, dispatch]);

  const [filteredCourses, setFilteredCourses] = useState(courses?.data);

  useEffect(() => {
    if (courses?.data) {
      setFilteredCourses(courses.data);
    }
  }, [courses]);

  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        setIsMobile(containerRef.current.clientWidth <= 768);
      }
    };
    // Set initial size
    updateSize();

    window.addEventListener("resize", updateSize);

    return () => window.removeEventListener("resize", updateSize);
  }, [containerRef.current?.clientWidth]);

  const calculateDiscountedPrice = (originalPrice, discountPercentage) => {
   
    const discountAmount = (originalPrice?.price * discountPercentage) / 100;

  
    return originalPrice?.price - discountAmount;
  };

  const filterCoursesByTag = (tagName) => {
    if (tagName === "All Courses") {
      setFilteredCourses(courses?.data);
    } else {
      const filtered = courses?.data.filter((course) =>
        course.tags.includes(tagName)
      );
      setFilteredCourses(filtered);
    }
  };

  const handleTabClick = (tagName) => {
    setActiveTab(tagName);
    filterCoursesByTag(tagName);
  };

  const renderStars = (course) => {
    if (!course || typeof course !== "number") {
      return null;
    }

    const fullStars = Math.floor(course);
    const hasHalfStar = course % 1 !== 0;

    // Array to hold star elements
    const stars = [];

    // Render full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <i
          key={`star-full-${i}`}
          className="bi bi-star-fill text-star text-2xl"
          aria-hidden="true"
        ></i>
      );
    }

    // Render half star if present
    if (hasHalfStar) {
      stars.push(
        <i
          key="star-half"
          className="bi bi-star-half text-star text-2xl"
          aria-hidden="true"
        ></i>
      );
    }

    return stars;
  };

  const toCapitalized = (text) => {
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
  };

  //   const currencyCode =
  //   course?.multi_country_currency?.find(
  //     (currency) => currency?.country_id?.toLowerCase() === userCountry?.toLowerCase()
  //   )?.country_id || "USD";

  const formatCurrency = (value) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: userCountry.toLowerCase(),
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const modifyHtmlContent = (html) => {
    if (typeof html !== "string") return ""; // Ensure html is a string
    return html.replace(
      /<li>/g,
      '<li className="text-black my-2"><i className="bi bi-check-circle me-1"></i>'
    );
  };

  return (
    <>
      {" "}
      <section className="authorized-partners-hm">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h2>Explore All Courses</h2>
            </div>
            <div className="col-12 demand-course-item">
              <ul className="demand-course-tab" id="tabButtons">
                <li
                  className={activeTab === "All Courses" ? "active" : ""}
                  onClick={() => handleTabClick("All Courses")}
                >
                  All Courses
                </li>
                {tagsLink.map((tag,index) => {
                  return (
                    <li
                      key={index}
                      className={activeTab === tag.tag_name ? "active" : ""}
                      onClick={() => handleTabClick(tag.tag_name)}
                    >
                      {tag.tag_name}
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="container" ref={containerRef}>
              <div className="owl-stage">
                {isMobile ? (
                  <Swiper
                    spaceBetween={10}
                    slidesPerView="auto"
                    breakpoints={{
                      320: { slidesPerView: 1 },
                      768: { slidesPerView: 2 },
                      1024: { slidesPerView: 3 },
                    }}
                  >
                    {filteredCourses?.map((course, index) => {
                      const userCountryLower = userCountry?.toLowerCase();

                      const countryPrice =
                        course?.multi_country_currency?.find(
                          (currency) =>
                            currency?.country_id?.toLowerCase() ===
                            userCountryLower
                        ) ||
                        course?.multi_country_currency?.find(
                          (currency) => currency?.country_id === "USD"
                        );

                      const displayPrice = countryPrice
                        ? countryPrice.price
                        : course.course_price;

                      const maxWords = 16;
                      const featuresWithoutBr = course.features.replace(
                        /<br\s*\/?>/gi,
                        ""
                      );
                      const shortenedFeatures =
                        featuresWithoutBr.split(" ").length > maxWords
                          ? featuresWithoutBr
                              .split(" ")
                              .slice(0, maxWords)
                              .join(" ") + "..."
                          : featuresWithoutBr;

                      const currencyCode = countryPrice?.country_id || "USD";

                      const formattedPrice = new Intl.NumberFormat("en-US", {
                        style: "currency",
                        currency: currencyCode,
                        minimumFractionDigits: 0,
                        maximumFractionDigits: 0,
                      }).format(displayPrice);

                      return (
                        <>
                          <SwiperSlide key={index} style={{ width: "305px" }}>
                            <div
                              key={index}
                              className="owl-item active"
                              style={{ width: "305px" }}
                            >
                              <div className="d-flex flex-column demand-course-flex">
                                <div
                                  className="demand-course-hm-card"
                                  data-aos="flip-up"
                                >
                                  <div className="demand-course-hm-card-body">
                                    <div className="badge-section d-flex align-items-center justify-content-between">
                                      <span className="badge">
                                        {/* {toCapitalized(course.status)} */}
                                      </span>
                                      <div className="rating">
                                        {renderStars(parseFloat(course.rating))}
                                      </div>
                                    </div>
                                    <p className="moreCourseDetails">
                                      {course.name}
                                    </p>
                                    <div
                                      className="course-content"
                                      dangerouslySetInnerHTML={{
                                        __html: shortenedFeatures,
                                      }}
                                    ></div>
                                    <div className="demand-course-hm-card-top">
                                      <li>
                                        {course.number_of_hours_course} hrs
                                      </li>
                                    </div>
                                  </div>
                                  <div className="demand-course-hm-card-footer">
                                    <div>
                                      {displayPrice <= 0 ? "" : "Start from"}{" "}
                                      {displayPrice <= 0 ? "" : <br />}
                                      <span>
                                        {displayPrice <= 0
                                          ? "Free"
                                          : formattedPrice}
                                      </span>
                                      <span>
                                        <span className="old-price">
                                          {displayPrice <= 0
                                            ? ""
                                            : new Intl.NumberFormat("en-US", {
                                                style: "currency",
                                                currency: currencyCode,
                                                minimumFractionDigits: 0,
                                                maximumFractionDigits: 0,
                                              }).format(+displayPrice + 5000)}
                                        </span>
                                      </span>
                                    </div>
                                    {/* <div>Start from <br /><span>  {course.multi_country_currency[0].price}</span></div> */}
                                    <Link
                                      href={`/${course.slug}`}
                                      className="course-enroll loader"
                                    >
                                      Enroll
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </SwiperSlide>
                        </>
                      );
                    })}
                  </Swiper>
                ) : (
                  <div className="owl-stage">
                    {filteredCourses?.slice(0, 8).map((course, index) => {
                      const userCountryLower = userCountry?.toLowerCase(); // Ensure lowercase for comparison.
                      // Find the country price based on the user's country
                      const countryPrice =
                        course?.multi_country_currency?.find(
                          (currency) =>
                            currency?.country_id?.toLowerCase() ===
                            userCountryLower
                        ) ||
                        course?.multi_country_currency?.find(
                          (currency) => currency?.country_id === "USD"
                        );

                      const countryDiss =
                        course?.multi_country_currency?.find(
                          (currency) =>
                            currency?.country_id?.toLowerCase() ===
                            userCountryLower
                        ) ||
                        course?.multi_country_currency?.find(
                          (currency) => currency?.country_id === "USD"
                        );

                      const displayPrice = countryPrice
                        ? countryPrice?.price
                        : course?.course_price;

                      const maxWords = 15;
                      const featuresWithoutBr = course.features.replace(
                        /<br\s*\/?>/gi,
                        ""
                      );
                      const shortenedFeatures =
                        featuresWithoutBr.split(" ").length > maxWords
                          ? featuresWithoutBr
                              .split(" ")
                              .slice(0, maxWords)
                              .join(" ") + "..."
                          : featuresWithoutBr;

                      const currencyCode = countryPrice?.country_id || "USD";
                      const discountedPrice = calculateDiscountedPrice(
                        countryPrice,
                        countryDiss?.discount_percentage || 0
                      );

                      // console.log(discountedPrice,'fvrwfr33r43rf43r')

                      // Format the display price using the determined currency code
                      const formattedPrice = new Intl.NumberFormat("en-US", {
                        style: "currency",
                        currency: currencyCode,
                        minimumFractionDigits: 0,
                        maximumFractionDigits: 0,
                      }).format(displayPrice);

                      const discountedPriceFormate = new Intl.NumberFormat(
                        "en-US",
                        {
                          style: "currency",
                          currency: currencyCode, // Use the currency associated with the found country or USD
                          minimumFractionDigits: 0,
                          maximumFractionDigits: 0,
                        }
                      ).format(discountedPrice);

                      //   console.log("Formatted Price:",formattedPrice);
                      return (
                       
                          <div
                            key={index}
                            className="owl-item active"
                            style={{ width: "305px" }}
                          >
                            <div className="d-flex flex-column demand-course-flex">
                              <div
                                className="demand-course-hm-card"
                                data-aos="flip-up"
                              >
                                <div className="demand-course-hm1  673z -card-body">
                                  <div className="badge-section d-flex align-items-center justify-content-between">
                                    <span className="badge">
                                      {toCapitalized(course.status)}
                                    </span>
                                    <div className="rating">
                                      {renderStars(parseFloat(course.rating))}
                                    </div>
                                  </div>
                                  <p className="moreCourseDetails">
                                    {course.name}
                                  </p>
                                  <div className="course-content">
                                    {parse(
                                      modifyHtmlContent(shortenedFeatures)
                                    )}
                                  </div>
                                  <div className="demand-course-hm-card-top">
                                    <li>{course.number_of_hours_course} hrs</li>
                                  </div>
                                  <div className="new-live-class">
                                    <li className="live-list">
                                      <img
                                        className="icon-live-action"
                                        src="/images/live.svg"
                                      />
                                      Live Instructor Training
                                    </li>
                                  </div>
                                </div>

                                <div className="demand-course-hm-card-footer">
                                <div>
                                  {displayPrice <= 0 ? "" : "Start from"}{" "}
                                  {displayPrice <= 0 ? "" : <br />}
                                  <span>
                                    {displayPrice <= 0
                                      ? "Free"
                                      : discountedPriceFormate}
                                  </span>
                                  <span>
                                    {countryDiss?.discount_percentage <= 0 ? (
                                      ""
                                    ) : (
                                      <span className="old-price">
                                        {displayPrice <= 0
                                          ? ""
                                          : formattedPrice}
                                      </span>
                                    )}
                                  </span>
                                </div>

                                  <Link
                                    href={`/${course.slug}`}
                                    className="course-enroll loader"
                                  >
                                    Enroll
                                  </Link>

                                </div>

                              </div>
                            </div>
                          </div>
                     
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CourseDetails;
