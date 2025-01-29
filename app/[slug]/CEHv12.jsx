"use client";
import React, { useState, useEffect } from "react";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { FaBriefcase } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "aos/dist/aos.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { fetchCourseById } from "../features/courses/courseSlice";

import "bootstrap-icons/font/bootstrap-icons.css";

import {
  faUser,
  faBookOpen,
  faUserCheck,
  faHeart,
  faCode,
  faAward,
  faFile,
  faHeadphones,
  faFlowChart,
  faDatabase,
  faCompass,
  faBook,
  faBriefcase,
  faTicket,
  faZap,
  faStamp,
  faCodeCompare,
  faLuggageCart,
} from "@fortawesome/free-solid-svg-icons";

import { StorageLink } from "../components/apiLink";
import parse from "html-react-parser";

import { getCourseModule } from "../features/CourseModule/CourseModule";

import { BaseLink } from "../config/ApiLink";
import axios from "axios";
import Swal from "sweetalert2";

import {
  fetchCart,
  addToCart,
  removeFromCart,
  updateQuantity,
  clearCart,
} from "../features/CartData/CartSlicer";

import ContactPopup from "../components/CommonData/ContactPopup";
import Link from "next/link";
// AccordionItem Component
const AccordionItem = ({ module, index, isOpen, onClick }) => {
  // State to toggle module_data
  const [showModuleData, setShowModuleData] = React.useState(false);

  return (
    <div style={styles.accordionItem}>
      {/* Heading Button */}
      <button style={styles.accordionButton} onClick={() => onClick(index)}>
        <div style={styles.header}>
          <span style={styles.title}>{module?.heading}</span>
          <span style={styles.toggleIcon}>{isOpen ? "▼" : "▶"}</span>
        </div>
      </button>

      {/* Description and content */}
      {isOpen && (
        <div style={styles.content}>
          <p style={styles.description}>{module.description}</p>

          {/* Button to toggle module_data */}
          {/* <button
            style={styles.moduleButton}
            onClick={() => setShowModuleData(!showModuleData)}
          >
            {showModuleData ? "Hide Module Data" : "Show Module Data"}
          </button> */}

          {/* Conditionally show module_data */}
          {showModuleData && (
            <div
              dangerouslySetInnerHTML={{ __html: module.module_data }}
              style={styles.moduleData}
            />
          )}
        </div>
      )}
    </div>
  );
};

//

const CEHv12 = ({ slug }) => {
  const router = useRouter();

  const [hasApplied, setHasApplied] = useState(false);
  // const [stuID, setStuId] = useState(null);
  const [expanded, setExpanded] = useState(false);
  const [openShare, setOpenShare] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);
  const [stuID, setStuId] = useState();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [userCountry, setUserCountry] = useState("");

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);

  // useEffect(() => {
  //   const fetchUserCountry = async () => {
  //     try {
  //       const response = await axios.get(
  //         "https://ipinfo.io/223.178.212.128?token=51e83b031328ca"
  //       ); // Replace with your token

  //       console.log(response.data.country);
  //       setUserCountry(response.data.country);
  //     } catch (error) {
  //       console.error("Error fetching user country:", error);
  //     }
  //   };

  //   fetchUserCountry();
  // }, []);

  // const [userCountry, setUserCountry] = useState("");

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
        // console.log(countryData.currencies[0].code);
        setUserCountry(countryData.currencies[0].code);
       
      } catch (error) {
        console.error("Error fetching currency information:", error);
      }
    };

    fetchUserCountry();
  }, []);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (activeTabNav === "signup") {
        // Handle Registration
        const response = await axios.post(
          `${BaseLink}/register`,
          { name, email, password },
          {
            headers: { "Content-Type": "application/json" },
          }
        );

        const token = response.data.student_id;
        localStorage.setItem("student_id", token);
        setStuId(token);

        Swal.fire({
          title: "Success!",
          text: "Registration successful.",
          icon: "success",
          confirmButtonText: "OK",
        });

        window.location.reload("/");
        setIsModalOpen(false);
        setName("");
        setEmail("");
        setPassword("");
      } else {
        const response = await axios.post(
          `${BaseLink}/login`,
          { email, password },
          {
            headers: { "Content-Type": "application/json" },
          }
        );

        const token = response.data.student_id;
        localStorage.setItem("student_id", token);
        setStuId(token);
        Swal.fire({
          title: "Success!",
          text: "Login successful!",
          icon: "success",
          confirmButtonText: "OK",
        });

        window.location.reload("/");
        setEmail("");
        setPassword("");
        setIsModalOpen(false);
      }
    } catch (error) {
      console.error("Error in handleSubmit:", error);

      Swal.fire({
        title: "Error!",
        text:
          error.response?.data?.errors?.password ||
          "An unexpected error occurred.",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  const [activeTabNav, setActiveTabNav] = useState("login");
 
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const dispatch = useDispatch();
  const course = useSelector((state) => state.courses?.selectedCourse);
  const cartItems = useSelector((state) => state.cart.items);
  const cartStatus = useSelector((state) => state.cart.status);
  const cartError = useSelector((state) => state.cart.error);

  const courseModule = useSelector(
    (state) => state.counsemodules.selectedCourse
  );

  const status = useSelector((state) => state.courses.status);
  const error = useSelector((state) => state.courses.error);

  useEffect(() => {
    dispatch(fetchCourseById(slug));


  }, [dispatch, slug]);

  useEffect(() => {
    dispatch(getCourseModule(course?.id));
  }, [dispatch, slug]);

  const toggleShare = () => {
    setOpenShare(!openShare);
  };

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 999,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);

  const sectionIds = [
    "overview",
    "KnowledgeHut",
    "Projects",
    "Tuition",
    "Reviews",
    "FAQs",
  ];
  const [activeId, setActiveId] = useState("");

  const [userRes, setUserRes] = useState({
    name: "",
    email: "",
    phonenumber: "",
    crname: "",
  });

  useEffect(() => {
    const stuId = localStorage?.getItem("student_id");

    if (stuId) {
      

      setStuId(stuId);
    } else {
      setStuId("");
    }
  }, []);

  useEffect(() => {
    // AOS.init({
    //   duration: 3000,
    //   once: true,
    // });F

    if (stuID && course?.id) {
      const checkApplicationStatus = async () => {
        try {
          const response = await axios.post(`${BaseLink}/applied`, {
            student_id: stuID,
            course_id: course.id,
          });

          setHasApplied(
            response.data.message ===
              "User has already applied for this course."
          );
        } catch (err) {
          if (err.response && err.response.status === 409) {
            setHasApplied(true);
          } else {
            setHasApplied(false);
          }
        }
      };

      checkApplicationStatus();
    }
  }, []);

  useEffect(() => {
    if (cartStatus === "idle") {
      dispatch(fetchCart());
    }
  }, [cartStatus, dispatch]);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionIds || sectionIds.length === 0) return; // Early exit if no sectionIds

      const offsets = sectionIds
        .map((id) => {
          const element = document.getElementById(id);
          if (element) {
            // Calculate the offset of the element relative to the document
            return {
              id,
              offset: element.getBoundingClientRect().top + window.scrollY,
            };
          }
          return null;
        })
        .filter((item) => item !== null);

      const currentOffset = window.scrollY + window.innerHeight / 2;

      const activeSection =
        offsets.length > 0
          ? offsets.reduce((closest, current) => {
              return Math.abs(current.offset - currentOffset) <
                Math.abs(closest.offset - currentOffset)
                ? current
                : closest;
            })
          : { id: "" }; // Default value when no section found

      // Update state with the active section ID
      setActiveId(activeSection.id);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sectionIds]);

  if (!course) {
    return  <div>
    <Skeleton height={30} width={200} style={{ marginBottom: "10px" }} />
    <Skeleton count={5} height={20} width={"100%"} />
    <Skeleton count={4} height={20} width={"100%"} />
    <Skeleton count={5} height={20} width={"100%"} />
    <Skeleton count={5} height={20} width={"100%"} />
    <Skeleton count={5} height={20} width={"100%"} />
    <Skeleton count={5} height={20} width={"100%"} />
    <Skeleton count={5} height={20} width={"100%"} />
  </div>;
  }

  const modifyHtmlContent = (html) => {
    if (typeof html !== "string") return ""; // Ensure html is a string
    return html.replace(
      /<li>/g,
      '<li class="text-black my-2"><i class="bi bi-check-circle me-2"></i>'
    );
  };

  const newmodifyHtmlContent = (html) => {
    if (typeof html !== "string") return ""; // Ensure html is a string
    html = html.replace(/<ul>/g, '<ul className="p-0 text-black">');
    html = html.replace(
      /<li>/g,
      '<li className="text-sm text-black text-secondary my-2"><i className="bi bi-check-circle-fill me-2"></i>'
    );
    return html;
  };

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const calculateDiscountedPrice = (originalPrice, discountPercentage) => {
    
    const discountAmount = (originalPrice * discountPercentage) / 100;
    return originalPrice - discountAmount;
  };

  const calculateDiscountedNotPrice = (originalPrice, discountPercentage) => {
   
    const discountAmount = (originalPrice * discountPercentage) / 100;
    return originalPrice - discountAmount;
  };

  const calculateMonthlyPayment = (discountedPrice) => {
    const months = 12;

    return Math.ceil(discountedPrice / months);
  };

  const submitQuery = async (e) => {
    e.preventDefault();
    const { name, email, phonenumber } = userRes;
    try {
      // Send a POST request with the user data
      const response = await axios.post(`${BaseLink}/submitrespons`, {
        name,
        email,
        phonenumber,
        crname: course?.name,
      });

      // If successful, show a SweetAlert confirmation
      Swal.fire({
        title: "Success!",
        text: "Your form has been submitted successfully.",
        icon: "success",
        confirmButtonText: "OK",
      });

     

      setUserRes({
        name: "",
        email: "",
        phonenumber: "",
        crname: "",
      });
    } catch (error) {
      console.error("There was an error submitting the form:", error);

      // Show an error alert
      Swal.fire({
        title: "Error!",
        text: "There was an error submitting your form. Please try again.",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  const changeMe = (e) => {
    setUserRes({
      ...userRes,
      [e.target.name]: e.target.value,
    });

    // console.log(userRes);
  };

  const applyForCourse = async () => {};
  // console.log(course)

  const handleAddToCartNew = () => {


        router.push(`/schedule/${course.slug}`)

    console.log(`friday check sliug value >> /schedule/${course.slug}`);

   };



  
  const switchTab = (tab) => {
    setActiveTabNav(tab);
  };

  const handleAddToCart = (dd) => {


    if (!stuID) {
      setIsModalOpen(true);

      return;
    }

    const item = {
      student_id: stuID,
      course_id: course.id,
      training_cal_id: dd.id,
    };
 

    dispatch(addToCart(item))
      .unwrap()
      .then(() => {
        router.push(`/cart`);
      })
      .catch((error) => {
        console.error("Failed to add to cart:", error);
      });
  };


  const userCountryLower = userCountry?.toLowerCase();

  const countryPrice2 =
    course?.multi_country_currency?.find(
      (currency) => currency?.country_id?.toLowerCase() === userCountryLower
    ) ||
    course?.multi_country_currency?.find(
      (currency) => currency?.country_id?.toLowerCase() === "usd"
    );

  const countryPriceByDis2 =
    course?.multi_country_currency?.find(
      (currency) => currency?.country_id?.toLowerCase() === userCountryLower
    ) ||
    course?.multi_country_currency?.find(
      (currency) => currency?.country_id?.toLowerCase() === "usd"
    );

  const currencyCode =
    course?.multi_country_currency?.find(
      (currency) =>
        currency?.country_id?.toLowerCase() === userCountry?.toLowerCase()
    )?.country_id || "USD";

  const formatCurrency = (value) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: currencyCode,
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const CourseHighlights = ({ courseHighlights }) => {
    return (
      <div className="container p-0 my-2 ">
        <h2 className="text-black texy-bold my-2 mb-3 ">Course Highlights</h2>

        {/* pending*/}
        <div className="row mt-4">
          {courseHighlights?.map((highlight, index) => (
            <div key={index} className="col-md-4  mb-3">
              <i
                className={`${highlight.icon} ic-col fa-2x mb-3`}
                aria-hidden="true"
              ></i>
              <div
                dangerouslySetInnerHTML={{ __html: highlight.text }}
                className="text-black highlight-text pl-2 max-w-166"
              ></div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  console.log(course,"course")

  return (
    <>
      <head>
      <title>{course?.meta_title ? course.meta_title : slug}</title>
      <meta name="description" content={course?.meta_description ? course.meta_description : "Description is loading"} />

      </head>
      <section className=" bg-white-custom py-5 py-md-5 position-relative">
        <div className="container px-0  ">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item">
                <Link href="/" className="breadcrumb-custom">
                  <i className="bi bi-house-door"></i>
                </Link>
              </li>
              <li className="breadcrumb-item">
                <p className="breadcrumb-custom">{course?.category_name}</p>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                {course?.name}
              </li>
            </ol>
          </div>
          <div className="row">
            <div className="col-md-7">
              <h2 className="txt-black display-6 fw-bold mb-3">
                {course?.name}
              </h2>
              <h3 className="h5 text-muted mb-4">{course?.subheading}</h3>
              <div className="d-flex gap-3 py-2 border-top mb-2"></div>

              <div className="benefits-list">
                {parse(modifyHtmlContent(course?.features))}
              </div>

              <div className="d-flex justify-content-center justify-content-lg-start gap-3">
                <button
                  className={`btn text-xl btn-primary px-5 py-2 ${
                    hasApplied ? "disabled-class" : ""
                  }`}
                  onClick={() => handleAddToCartNew()}
                  disabled={hasApplied}
                >
                  {hasApplied ? "Enrolled" : "Enroll"}{" "}
                  <i className="bi bi-arrow-up-right"></i>
                </button>
              </div>
            </div>
            <div className="col-md-5 text-center">
              <div className="position-relative " style={{ zIndex: 10 }}>
                <div className="animate-circle-main position-absolute bottom-0 animate-circle  d-none d-md-block "></div>

                <img
                  src={
                    course?.hero_img
                      ? `${StorageLink}/${course?.hero_img}`
                      : "/images/portal_first_fold-1-1.webp"
                  }
                  alt="AWS"
                  className="img-fluid  d-none d-md-block "
                />
              </div>
            </div>
          </div>
        </div>

        {course?.extra_features?.length > 0 ? (
          <>
            <div className="d-none d-md-block">
              <section className="main-featrues-section">
                <div className="child-featrues-section">
                  <ul className="list-child">
                    {course?.extra_features?.map((data, ind) => {
                      return (
                        <>
                          <li
                            key={ind}
                            className="mb-mine d-flex gap-3 align-items-center "
                          >
                            <div className="img-mine">
                              <img
                                className="w-20 h-20"
                                src={
                                  data.image
                                    ? `${StorageLink}/${data.image}`
                                    : "/images/userimg.png"
                                }
                              />
                            </div>

                            <div className="text-sm">
                              <h5>{data?.text}</h5>
                              <p>{data?.data}</p>
                            </div>
                          </li>
                        </>
                      );
                    })}
                  </ul>
                </div>
              </section>
            </div>
          </>
        ) : (
          ""
        )}
      </section>

      <div className="container marg-top">
        {/* {course?.training_calendars[0] ? (
          <>
            <TrainingCalenPage
              courseName={course?.name}
              handleAddToCart={handleAddToCart}
              data={course?.training_calendars}
            />
          </>
        ) : (
          ""
        )} */}
      </div>

      <section className="rows course_details">
        <div className="container">
          <div className="row">
            {/* left */}
            <div className="col-md-3 course_sticky_w d-md-none d-sm-block d-lg-block">
              <div className="course_sticky">
                <div className="card1 p-4 mt-3 pb-0">
                  <li>
                    <a
                      href="#overview"
                      className={
                        activeId === "overview"
                          ? "text-dark active"
                          : "text-dark"
                      }
                    >
                      Overview
                    </a>
                  </li>

                  <li>
                    <a
                      href="#Tuition"
                      className={
                        activeId === "Tuition"
                          ? "text-dark active"
                          : "text-dark"
                      }
                    >
                      Tuition
                    </a>
                  </li>

                  <li>
                    <a
                      href="#FAQs"
                      className={
                        activeId === "FAQs" ? "text-dark active" : "text-dark"
                      }
                    >
                      FAQs
                    </a>
                  </li>
                  <li>
                    <Link href="/training-calendar" className="btn1">
                      View Schedules
                    </Link>
                  </li>
                </div>
                <div className="card1 p-4 rows ">
                  <h2 className="head11 text-uppercase m-0 f22">
                    GET A FREE
                    <strong className="text-primary">DEMO CLASS </strong>
                  </h2>
                  <div className=" course_enquiry    ">
                    <div
                      className="hide rows"
                      id="enquiry_cdetails_output"
                    ></div>
                    <div className="rows mt-3 ">
                      <form
                        onSubmit={submitQuery}
                        id="enquiry_cdetails"
                        autoComplete="off"
                      >
                        <p>
                          <input
                            type="text"
                            id="me_name"
                            className="form-control"
                            name="name"
                            onChange={(e) => changeMe(e)}
                            placeholder="Name*"
                          />
                        </p>
                        <p>
                          <input
                            type="text"
                            id="email"
                            className="form-control"
                            name="email"
                            placeholder="Email*"
                            onChange={(e) => changeMe(e)}
                          />
                        </p>
                        <p>
                          <input
                            type="tel"
                            id="me_mobile"
                            className="form-control"
                            name="phonenumber"
                            placeholder="Phone*"
                            onChange={(e) => changeMe(e)}
                          />
                        </p>
                        <input type="submit" className="btn1" />
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* right  */}
            <div className="col-md-12 col-lg-9">
              <div className="max-w-133 w-100 m-0 mt-4 add-pd" id="overview">
                <h2 className="text-sm text-uppercase font-weight-semibold text-secondary">
                  <i className="icon-compass"></i>
                  {course.subheading}
                </h2>
                <h3 className="text-sm text-uppercase font-weight-semibold text-secondary">
                  {course.name}
                </h3>
              </div>
              <div className="container">
                <CourseHighlights courseHighlights={course?.coursehighlit} />
              </div>

              <div className="position-relative add-pd">
                <div
                  className={`transition-all ${
                    expanded ? "" : "overflow-hidden"
                  }`}
                  style={{
                    maxHeight: expanded ? "none" : "500px",
                    transitionDuration: "0.5s",
                    textOverflow: "ellipsis",
                  }}
                >
                  <div style={{ color: "#2a2a2a" }}>
                  <div
    dangerouslySetInnerHTML={{
      __html: course?.description2
        ?.replace(/<h2>/g, `<h2 style="margin:${course?.margin || 0}px 0px;">`)
        .replace(/<p>/g, `<p style="margin:${course?.margin || 0}px 0px;">`)
        .replace(/<h3>/g, `<h3 style="margin:${course?.margin || 0}px 0px;">`),
    }}
  />
                  </div>
                </div>

                {/* read more  */}
                <div className="position-relative ">
                  <button
                    className="btn btn-link text-dark "
                    onClick={toggleExpand}
                  >
                    <span className="text-sm text-mono-black font-medium">
                      {expanded ? "Read Less" : "Read More"}
                    </span>
                    <i
                      className={`bi bi-chevron-${
                        expanded ? "up" : "down"
                      } text-xl mx-1`}
                      style={{ transition: "transform 0.5s" }}
                    ></i>
                  </button>
                </div>
              </div>

              <div className="p-2 p-md-4 mt-4 bg-subdued rounded">
                <div className="py-0">
                  <div className="max-w-133 w-100 m-0">
                    <h2 className="text-xl my-4 text-black font-weight-bold text-muted">
                      Demand for {course?.name} Certification
                    </h2>
                  </div>
                  <div className="d-flex flex-column">
                    <div className="rounded bg-white p-4">
                      <div className="annual-main ">
                        <div className=" w-50 ">
                          <b className="text-xs font-weight-bold text-muted">
                            Annual Salary
                          </b>
                          <div className="d-flex flex-column w-100 mx-auto align-items-center gap-2">
                            <div className="d-flex align-items-end gap-2">
                              <div className="d-flex flex-column align-items-center gap-1">
                                <b className="text-center text-xs font-bold text-muted">
                                  ₹{course.annual_salary_mid}L
                                </b>
                                <div
                                  className="w-100"
                                  style={{
                                    height: "1.5rem",
                                    backgroundColor: "rgb(251 230 195)",
                                  }}
                                ></div>
                              </div>
                              <div
                                className="w-25 "
                                style={{
                                  height: "2.5rem",
                                  backgroundColor: "rgb(245 192 106)",
                                }}
                              ></div>
                              <div className="d-flex flex-column align-items-center gap-1">
                                <b className="text-center text-xs font-weight-bold text-muted">
                                  ₹{course.annual_salary_avg}L
                                </b>
                                <div
                                  className="w-100 "
                                  style={{
                                    height: "4.5rem",
                                    backgroundColor: "rgb(245 192 106)",
                                  }}
                                ></div>
                              </div>
                              <div
                                className="w-25"
                                style={{ height: "2.3rem" }}
                              ></div>
                              <div className="d-flex flex-column align-items-center gap-1">
                                <b className="text-center text-xs font-weight-bold text-muted">
                                  ₹{course.annual_salary_max}L
                                </b>
                                <div
                                  className="w-100"
                                  style={{
                                    height: "0.7rem",
                                    backgroundColor: "rgb(251 230 195)",
                                  }}
                                ></div>
                              </div>
                            </div>
                            <div className="d-flex justify-content-between w-100">
                              <div className="text-xs text-muted">Min</div>
                              <div className="text-xs text-muted">Average</div>
                              <div className="text-xs text-muted">Max</div>
                            </div>
                          </div>
                        </div>
                        <div className=" w-50">
                          <b className="text-xs font-weight-bold text-muted">
                            Hiring Companies
                          </b>
                          <div className="d-flex flex-wrap">
                            {course?.hiring_company_logos.map((data, ind) => {
                              return (
                                <>
                                  <div className="d-flex justify-content-center align-items-center mt-3">
                                    <img
                                      alt="sapient"
                                      loading="lazy"
                                      width="128"
                                      height="32"
                                      decoding="async"
                                      className="w-32 h-8"
                                      src={`${StorageLink}/${data}`}
                                      style={{ color: "transparent" }}
                                    />
                                  </div>
                                </>
                              );
                            })}
                          </div>
                        </div>
                        <div className=" w-50 border-0">
                          <b className="text-xs font-weight-bold text-muted">
                            Available Jobs
                          </b>
                          <div className="d-flex flex-column align-items-start mt-3 gap-3">
                            <span className="icon-briefcase text-secondary text-custom32">
                              <FaBriefcase className="briefcase-svg" />
                            </span>
                            <div className="d-flex flex-column align-items-start gap-1">
                              <b className="text-base font-weight-bold text-dark">
                                {/* {course?.available_job_percentage}% */}
                                {Math.floor(course?.available_job_percentage)}%
                              </b>
                              <div className="text-xs text-muted">
                                Annual job growth rate by{" "}
                                {new Date().getFullYear()}-
                                {new Date().getFullYear() + 5}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <div className="mt-2 mt-md-5">
                      <div className="transition overflow-hidden ">
                        <div
                          dangerouslySetInnerHTML={{
                            __html: course?.description1,
                          }}
                        />
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>

              <div style={styles.container}>
                <h3 className="head11 " id="faqs">
                  There are <strong className="text-primary">modules</strong> in
                  this course
                </h3>

                {course?.modules?.map((module, index) => (
                  <AccordionItem
                    key={module.id}
                    module={module}
                    index={index}
                    isOpen={openIndex === index}
                    onClick={handleToggle}
                  />
                ))}
              </div>
            </div>

            {/* below form  */}
            <div className="col-12 mt-5">
              <div className="bg-subdued rounded" id="Tuition">
                <div className="py-0">
                  <div className="max-w-133 w-100 m-0">
                    <h2 className="text-sm font-weight-bold  text-muted">
                      {course?.name} COURSE PRICING
                    </h2>
                    <h3 className="text-3xl font-weight-bold text-dark mt-2 mb-5">
                      Tuition Fee
                    </h3>
                  </div>
                  <div className="d-flex  flex-column flex-sm-row gap-4">

                   { console.log(course?.tuitionFees)}
                    {course?.tuitionFees?.length > 0 ? (
                      <>
                        {course.tuitionFees?.map((data, index) => {
                          const userCountryLower = userCountry?.toLowerCase();

                          const countryPrice =
                            data?.multi_country_currency?.find(
                              (currency) =>
                                currency?.country_id?.toLowerCase() ===
                                userCountryLower
                            ) ||
                            data?.multi_country_currency?.find(
                              (currency) =>
                                currency?.country_id?.toLowerCase() === "usd"
                            );

                          const countryPriceByDis =
                            data?.multi_country_currency?.find(
                              (currency) =>
                                currency?.country_id?.toLowerCase() ===
                                userCountryLower
                            ) ||
                            data?.multi_country_currency?.find(
                              (currency) =>
                                currency?.country_id?.toLowerCase() === "usd"
                            );

                          const discountedPrice = calculateDiscountedPrice(
                            countryPrice?.price,
                            countryPriceByDis?.discount_percentage
                          );

                          const discountedPrice2 = calculateDiscountedPrice(
                            countryPrice2?.price,
                            countryPriceByDis2?.discount_percentage
                          );

                          // Ensure lowercase for comparison.

                          const currencyCode =
                            course?.multi_country_currency?.find(
                              (currency) =>
                                currency?.country_id?.toLowerCase() ===
                                userCountry?.toLowerCase()
                            )?.country_id || "USD";

                          const formatCurrency = (value) => {
                            return new Intl.NumberFormat("en-IN", {
                              style: "currency",
                              currency: currencyCode,
                              minimumFractionDigits: 0,
                              maximumFractionDigits: 0,
                            }).format(value);
                          };

                          const discountedNotPrice =
                            calculateDiscountedNotPrice(
                              countryPrice?.price,
                              countryPriceByDis?.discount_percentage
                            );


                          const monthlyPayment =
                            calculateMonthlyPayment(discountedNotPrice);

                          const formattedPrice = new Intl.NumberFormat(
                            "en-US",
                            {
                              style: "currency",
                              currency: currencyCode, // Use the determined or default currency.
                              minimumFractionDigits: 0,
                              maximumFractionDigits: 0,
                            }
                          ).format(discountedPrice);


                          console.log('countryPriceByDis',countryPriceByDis?.price)
                          console.log('countryPriceByDis',countryPriceByDis?.discount_percentage)

                          const discountedPriceMEE = countryPriceByDis?.price - (countryPriceByDis?.price * countryPriceByDis?.discount_percentage) / 100;

                          return (
                            <>
                              <div className="card border-primary-shadow mb-4">
                                <div
                                  style={{ width: "350px" }}
                                  className="card-body py-0 px-4 d-flex flex-column align-items-center"
                                >
                                  <div className="w-100 pt-0">
                                    <div className="d-flex flex-column align-items-center text-center">
                                      {data.tag && (
                                        <div className="bg-primary text-white px-2 py-1 mb-2 rounded-bottom">
                                          <div className="text-sm font-weight-bold text-capitalize">
                                            {data.tag}
                                          </div>
                                        </div>
                                      )}
                                      <h3 className="text-lg font-weight-bold text-dark">
                                        {data.heading}
                                      </h3>
                                      <div className="text-sm text-secondary mt-2">
                                        Learn in Expert-Led Sessions
                                      </div>
                                    </div>
                                    <div className="mt-4 w-100 border-top border-dashed border-secondary">
                                      <div className="mt-4 pb-2 border-bottom border-dashed border-secondary">
                                        <div className="text-sm font-weight-bold text-dark">
                                          Solid Experiential Learning
                                        </div>
                                        <div className="mt-3 d-flex flex-column   gap-2">
                                          {parse(
                                            newmodifyHtmlContent(data?.features)
                                          )}
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                {/* price  */}
                                <div className="w-100 p-3 rounded-custom bg-light">
                                  <div className="d-flex w-100 flex-column flex-md-row justify-content-between align-items-center">
                                    <div className="d-flex w-100 flex-column gap-2 mb-3 mb-md-0">
                                      <div className="text-xxs font-weight-bold text-primary">
                               
                                        {/* {Array.isArray(
                                          data?.multi_country_currency
                                        ) &&
                                        data.multi_country_currency.length <= 0
                                          ? isNaN(
                                              countryPriceByDis?.discount_percentage
                                            ) ||
                                            countryPriceByDis?.discount_percentage ==
                                              null
                                            ? "Free"
                                            : `${Math.floor(
                                                countryPriceByDis?.discount_percentage
                                              )}% OFF`
                                          : isNaN(
                                              countryPriceByDis?.discount_percentage
                                            ) ||
                                            countryPriceByDis?.discount_percentage ==
                                              null
                                          ? ""
                                          : `${Math.floor(
                                              countryPriceByDis?.discount_percentage
                                            )}% off`} */}

                                        {/* {console.log(
                                          discountedPrice2,
                                          "vsfvrwfrreffre"
                                        )} */}


                                        {discountedPrice2
                                          ? data.heading.includes(
                                              "Self-Paced Learning"
                                            ) ||
                                            countryPriceByDis2?.discount_percentage ==
                                              null
                                            ? ` ${countryPriceByDis?.discount_percentage ? countryPriceByDis?.discount_percentage + '% Off' : ''}`
                                            : `${Math.floor(
                                                countryPriceByDis2.discount_percentage
                                              )}% OFF`
                                          : ""}
                               
                                      </div>
                                      <div className="d-flex align-items-center">
                                        <h3 className="text-xl font-weight-bold text-dark">
                                          {/* {Array.isArray(
                                            data?.multi_country_currency
                                          ) &&
                                          data.multi_country_currency.length <=
                                            0
                                            ? forma tCurrency(discountedPrice2)
                                            : `${formattedPrice}`} */}

                                          {/* for self placed leadring  */}

                                          {/* {data.multi_country_currency == null
                                            ? data.heading.includes(
                                              "Self-Paced Learning"
                                            )
                                              ? ""
                                              : `${formatCurrency(
                                                discountedPrice2
                                              )}`
                                            : ""} */}

                                          {data.multi_country_currency == null
                                            ? `${formatCurrency(
                                                discountedPrice2
                                              )}`
                                            : ""}

                                          {console.log(
                                            discountedPrice2,
                                            "fwrefrfr"
                                          )}
                                          {discountedPrice2
                                            ? !data.heading.includes("Self")
                                              ? formatCurrency(discountedPrice2)
                                              : `${discountedPriceMEE ? formatCurrency(discountedPriceMEE) : ''}`
                                            : ""}
                                        </h3>
                                        <h4 className=" text-sm mx-2 text-muted text-decoration-line-through">
                                        {discountedPrice2
                                            ? data.heading.includes(
                                                "Self-Paced Learning"
                                              ) ||
                                              countryPriceByDis2?.discount_percentage ==
                                                null
                                              ? `${discountedPriceMEE ? formatCurrency(countryPriceByDis?.price ) : ''}`
                                              : `${formatCurrency(
                                                  countryPrice2?.price
                                                )}`
                                            : ""}

                                          {/* {(data?.multi_country_currency || [])
                                            .length <= 0
                                            ? countryPrice2.price
                                            : `${discountedPrice}`} */}
                                        </h4>
                                      </div>
                                      <div className="d-flex gap-2 align-items-center">
                                        <div className="text-xxs text-primary font-weight-semibold">
                                          {/* {countryPrice?.price <= 0
                                            ? ""
                                            : `As low as ${formatCurrency(
                                                monthlyPayment
                                              )}/month`} */}
                                        </div>
                                        <button
                                          tabIndex="-1"
                                          className="btn p-0"
                                        >
                                          {/* <i className="bi bi-info-circle-fill text-primary"></i> */}
                                          {data.course_fee <= 0 ? (
                                            ""
                                          ) : (
                                            <i className="bi bi-info-circle-fill text-primary"></i>
                                          )}
                                        </button>
                                      </div>

                                      {/* enroll now  */}
                                      <div>
                                        <button
                                          onClick={() => handleAddToCartNew()}
                                          className="btn btn-primary  text-white px-4 w-100 w-md-auto h-100"
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
                        })}
                      </>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* {isModalOpen && (
        <div
          className="modal show d-block"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        >
         <CommonForm/>
        </div>
      )} */}

      {isModalOpen && (
        <div
          className="modal show d-block"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Welcome</h5>
                <button onClick={toggleModal} className="btn-close"></button>
              </div>

              <div className="modal-body">
                <div className="nav justify-content-center sign-nav nav-tabs mb-4">
                  <button
                    onClick={() => switchTab("login")}
                    className={`nav-link ${
                      activeTabNav === "login" ? "active" : ""
                    }`}
                  >
                    Sign In
                  </button>
                  <button
                    onClick={() => switchTab("signup")}
                    className={`nav-link ${
                      activeTabNav === "signup" ? "active" : ""
                    }`}
                  >
                    Sign Up
                  </button>
                </div>

                <div>
                  {/* <h2 className="h5 mb-4">{activeTabNav === 'login' ? 'Login' : 'Signup'}</h2> */}
                  <form onSubmit={handleSubmit}>
                    {activeTabNav === "signup" && (
                      <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input
                          type="text"
                          className="form-control contact-form"
                          placeholder="Enter your name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>
                    )}
                    <div className="mb-3">
                      <label className="form-label">Email</label>
                      <input
                        type="email"
                        className="form-control contact-form"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Password</label>
                      <input
                        type="password"
                        className="form-control contact-form"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>

                    <button className="btn-submit w-100 mb-3">
                      {activeTabNav === "login" ? "Login" : "Signup"}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <ContactPopup />
    </>
  );
};

const styles = {
  accordionItem: {
    marginBottom: "1rem",
    border: "1px solid #ddd",
    borderRadius: "8px",
    overflow: "hidden",
    transition: "all 0.3s ease",
  },
  accordionButton: {
    width: "100%",
    padding: "1rem",
    textAlign: "left",
    cursor: "pointer",
    background: "#f7f7f7",
    border: "none",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    transition: "background-color 0.3s ease",
    outline: "none",
    fontSize: "16px",
  },
  accordionButtonHover: {
    backgroundColor: "#e0e0e0", // On hover
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  title: {
    fontWeight: "bold",
    fontSize: "18px",
    color: "#333",
  },
  toggleIcon: {
    fontSize: "1.5rem",
    color: "#007BFF",
  },
  content: {
    padding: "1rem",
    backgroundColor: "#fff",
    fontSize: "14px",
    color: "#555",
  },
  moduleButton: {
    marginTop: "1rem",
    padding: "0.5rem 1rem",
    backgroundColor: "#007BFF",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
  moduleButtonHover: {
    backgroundColor: "#0056b3", // On hover
  },
  moduleData: {
    marginTop: "1rem",
    padding: "1rem",
    backgroundColor: "#f9f9f9",
    borderRadius: "5px",
    overflow: "auto",
    maxHeight: "400px",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
  },
};

export default CEHv12;
