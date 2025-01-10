"use client";
import React, { useState, useEffect } from "react";

import { tabs } from "./CommonData/CardsDetailData";


import { OverlayTrigger, Popover } from "react-bootstrap";

import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../features/categories/categorySlice";
import { Apilink, StorageLink } from "../components/apiLink";
import Swal from "sweetalert2";


import { useRouter } from 'next/navigation';

import { loginUser, getUserById } from "../features/user/authSlice";
import { FaRegUserCircle } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";

import { fetchCourses } from "../features/courses/courseSlice";
import axios from "axios";
import { BaseLink } from "../config/ApiLink";
import Link from "next/link";

const Navbar = () => {
  const [logo, setLogo] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(searchTerm);
  const [showGovBodies, setShowGovBodies] = useState(false);

  const dispatch = useDispatch();
  const [openDropdown, setOpenDropdown] = useState("");
  const [openNav, setOpenNav] = useState(false);


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

        setEmail("");
        setPassword("");
        setIsModalOpen(false);
      }
    } catch (error) {
      console.error("Error in handleSubmit:", error.response);

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

  const toggleNav = () => {
    setOpenNav(!openNav);
  };

  const categoriess = useSelector((state) => state.categories.data);

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  const handleMouseEnter = () => {
    setOpenDropdown(true);
  };

  const handleMouseLeave = () => {
    setOpenDropdown(false);
  };
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [searchTerm]);

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   // Perform any additional logic if needed before redirection
  //   window.location.to = `${encodeURIComponent(searchTerm)}`;
  // };
  // const [activeTab, setActiveTab] = useState("v-pills-course-vendor");

  const [activeTab, setActiveTab] = useState(tabs[0].id);

  const handleTabHover = (tabId) => {
    setHoveredTab(tabId);
  };

  const handleTabClick = (tabId) => {
    setHoveredTab(tabId);
  };

  const [openSubMenu, setOpenSubMenu] = useState({});

  const toggleSubMenu = (menu) => {
    setOpenSubMenu((prevOpenSubMenu) => ({
      ...prevOpenSubMenu,
      [menu]: !prevOpenSubMenu[menu],
    }));
  };

  const toggleAll = (menu) => {
    setOpenNav(!openNav);
    setOpenSubMenu((prevOpenSubMenu) => ({
      ...prevOpenSubMenu,
      [menu]: !prevOpenSubMenu[menu],
    }));
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTabNav, setActiveTabNav] = useState("login");
  const [stuID, setStuId] = useState();
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const switchTab = (tab) => {
    setActiveTabNav(tab);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    const stuId = localStorage.getItem("student_id");
    setStuId(stuId);
  }, []);

  useEffect(() => {
    if (stuID) {
      dispatch(getUserById(stuID));
    }
  }, [stuID, dispatch]);

  const course = useSelector((state) => state.courses.data.data);

  useEffect(() => {
    dispatch(fetchCourses());
  }, []);

  const [hoveredTab, setHoveredTab] = useState(null);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 500); // 500ms debounce delay

    return () => {
      clearTimeout(handler);
    };
  }, [searchTerm]);

  // Update suggestions based on debounced search term
  useEffect(() => {
    if (debouncedSearchTerm.length >= 12) {
      setSuggestions([]);
    } else {
      if (debouncedSearchTerm) {
        const filteredSuggestions = course.filter((course) =>
          course.name.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
        );
        setSuggestions(filteredSuggestions);
      } else {
        setSuggestions([]);
      }
    }
  }, [debouncedSearchTerm, course]);


  const logoutUser = () => {
    localStorage.removeItem("student_id");

    window.location.reload();

    setStuId();
  };

  const router = useRouter();


  const handleSuggestionClick = (name, slg) => {
    // Clear suggestions first
    setSuggestions([]);
    // Update search term
    setSearchTerm(name);
    // Navigate to the new page
    router.push(`/${slg}`);
  };

  const filteredCategories = categoriess.filter(
    (tab) => tab.mainCategory === "gov_bodies"
  );
  const onlyDomain = categoriess.filter((tab) => tab.mainCategory === "domain");

  const [expandedCategory, setExpandedCategory] = useState(null); // Track expanded category

  const toggleCategory = (categoryId) => {

    setExpandedCategory(expandedCategory === categoryId ? null : categoryId);
  };

  useEffect(() => {
   
    const fetchLogo = async () => {
      try {
       
        const response = await axios.get(
          `https://admin.ingeniouslearn.com/api/v1/get-logo-favicon`
        );

      

        setLogo(response.data.data.logo_path);
      } catch (err) {
        console.error("Error fetching logo:", err);
      } finally {
      }
    };

    fetchLogo();
  }, []);

  // const showAllcategoriess =



  return (
    <>
      <nav className="navbar navbar-expand-lg main-mega-menu">
        <div className="nav-container  navbar-container position-relative">
          <Link className="navbar-brand" href="/">
            {logo ? (
              <img
                src={`https://admin.ingeniouslearn.com/storage/${logo}`}
                alt="Logo"
                style={{ width: "200px",height: "65px",objectFit: 'contain'}}
              />
            ) : (
              <img
                src="/images/Blue.webp"
                alt="Logo"
                style={{ width: "200px", height: "auto" }}
              />
            )}
          </Link>

          <form
            className="nav-search-form d-none d-lg-flex"
            onSubmit={handleSubmit}
          >
            <div className="input-container">
              <div className="dropdown mega-menu-dropdown courses-dropdown">
                <span
                  className="megamenu-nav-link  dropdown-toggle"
                  onMouseEnter={handleMouseEnter}
                  style={{ position: "relative", display: "inline-block" }}
                >
                  Courses
                </span>
                {openDropdown && (
                  <>
                    <div
                      className="overlay"
                      onClick={() => setOpenDropdown(false)}
                    ></div>
                    <div className="">
                      <div
                        className="dropdown-menu mega-menu "
                        style={{ display: "block" }}
                        onMouseLeave={() => handleMouseLeave(false)}
                      >
                        <div className="row m-0">
                          <div className="col-12 item-two">
                            <div className="mega-menu-opt-tabs">
                              <div className="row m-0">
                                <div className="col-4">
                                  <div className="mega-menu-col-heading">
                                    Governing Body
                                  </div>
                                  <div
                                    className="nav vendor-tab-pills d-block nav-pills w-100"
                                    id="v-pills-tab"
                                    role="tablist"
                                    aria-orientation="vertical"
                                  >
                                    {filteredCategories.map((tab) => (
                                      <div key={tab.id}>
                                        <span
                                          className={`mega-menu-tab-link text-black ${activeTab === tab.id ? "active" : ""
                                            }`}
                                          onClick={() => handleTabClick(tab.id)}
                                          onMouseEnter={() =>
                                            handleTabHover(tab.id)
                                          }
                                          role="tab"
                                          aria-controls={`v-pills-course-vendor${tab.id}`}
                                          aria-selected={activeTab === tab.id}
                                        >
                                          <img
                                            src={`${StorageLink}/${tab.icon}`}
                                            className="tab-nav-image"
                                            alt=""
                                          />
                                          {tab.name}
                                        </span>
                                      </div>
                                    ))}

                                    <span
                                      className={`mega-menu-tab-link  "active" : ""
                                            `}
                                      onClick={() =>
                                        setShowGovBodies(!showGovBodies)
                                      }
                                      role="tab"
                                    >
                                      All Domain
                                    </span>

                                    {showGovBodies && (
                                      <>
                                        {onlyDomain.map((tab) => (
                                          <div key={tab.id}>
                                            <span
                                              className={`mega-menu-tab-link ${activeTab === tab.id
                                                ? "active"
                                                : ""
                                                }`}
                                              onClick={() =>
                                                handleTabClick(tab.id)
                                              }
                                              onMouseEnter={() =>
                                                handleTabHover(tab.id)
                                              }
                                              onMouseLeave={() =>
                                                setHoveredTab(null)
                                              }
                                              role="tab"
                                              aria-controls={`v-pills-course-vendor${tab.id}`}
                                              aria-selected={
                                                activeTab === tab.id
                                              }
                                            >
                                              <img
                                                src={`${StorageLink}/${tab.icon}`}
                                                className="tab-nav-image"
                                                alt=""
                                              />
                                              {tab.name}
                                            </span>
                                          </div>
                                        ))}
                                      </>
                                    )}
                                  </div>
                                </div>

                                <div className="col-8">
                                  <div className="mega-menu-col-heading">
                                    Certifications
                                  </div>
                                  <div
                                    className="tab-content"
                                    id="v-pills-tabContent"
                                  >
                                    <div className={`t`} role="tabpanel">
                                      <ul
                                        className="list-unstyled list-group w-100"
                                        style={{ color: "#2a2a2a" }}
                                      >
                                        {course?.filter(
                                            (item) =>
                                              hoveredTab
                                                ? item.course_category_id ===
                                                hoveredTab
                                                : true // Filter based on hovered tab
                                          )
                                          .map((item, index) => (
                                            <Link
                                              key={index}
                                              href={item.slug}
                                              className="text-black"
                                              onClick={() =>
                                                setOpenDropdown(false)
                                              }
                                            >
                                              <li className="text-black">
                                                {item.name}
                                              </li>
                                            </Link>
                                          ))}
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div></div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="mega-menu-vendor-heading ppp text-center">
                          <Link
                            href="/courses"
                            className="d-flex justify-content-between"
                            style={{
                              color: "#0071e3",
                              border: "1px solid #0071e3",
                              padding: "4px 24px",
                              borderRadius: "5px",
                              fontWeight: "700",
                              fontSize: "12px",
                            }}
                          >
                            <span style={{ color: "#0071e3" }}>
                              VIEW ALL VENDORS →
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>









              
              <input
                type="text"
                className="input-field ui-autocomplete-input"
                placeholder="What do you want to learn"
                name="s"
                value={searchTerm}
                onChange={handleChange}
                autoComplete="off"
                required
                pattern="[Link-zA-Z0-9\s]+"
                title="Please remove special characters"
              />

              <button className="icon" type="submit">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M19.3593 18.2168L14.5993 13.2662C15.8232 11.8113 16.4937 9.98069 16.4937 8.07499C16.4937 3.62251 12.8712 0 8.41874 0C3.96626 0 0.34375 3.62251 0.34375 8.07499C0.34375 12.5275 3.96626 16.15 8.41874 16.15C10.0903 16.15 11.6831 15.6458 13.045 14.6888L17.8412 19.677C18.0417 19.8852 18.3113 20 18.6003 20C18.8737 20 19.1332 19.8957 19.3302 19.7061C19.7487 19.3034 19.762 18.6357 19.3593 18.2168ZM8.41874 2.10652C11.7098 2.10652 14.3872 4.78391 14.3872 8.07499C14.3872 11.3661 11.7098 14.0435 8.41874 14.0435C5.12766 14.0435 2.45027 11.3661 2.45027 8.07499C2.45027 4.78391 5.12766 2.10652 8.41874 2.10652Z"
                    fill="#AFAFAF"
                  ></path>
                </svg>
              </button>
            </div>

                {/* seugeestion list  */}
            <ul className="suggestions-list">
              {suggestions?.map((course) => (
                <li
                  key={course.id}
                  className="suggestion-item"
                  onClick={() =>
                    handleSuggestionClick(course.name, course.slug)
                  }
                > 
                  {course.name}
                </li>
              ))}
            </ul>



          </form>
          <ul className="navbar-nav ml-auto align-items-center d-lg-flex d-none">

            <li className="megamenu-nav-item">
              <Link
                className="megamenu-nav-link text-black"
                href="/training-calendar"
              >
                Training Calendar
              </Link>
            </li>
            {/* dropdown start */}

            {/* dropdown end */}

            {/* dropdown start */}
            {/* <li className="megamenu-nav-item service-dropdwon">
              <Link className="megamenu-nav-link dropdown-toggle" href="#">
                services
              </Link>
              <ul className="drop-menu">
                <li className="drop-menu-item">
                  <Link href="https://www.infosectrain.com/corporate-training/">
                    Corporate Training
                  </Link>
                </li>
                <li className="drop-menu-item">
                  <Link href="https://www.infosectrain.com/hire-Link-trainer/">
                    Hire-Link-Trainer
                  </Link>
                </li>
                <li className="drop-menu-item">
                  <Link href="https://www.infosectrain.com/one-on-one-training/">
                    1-on-1 Training
                  </Link>
                </li>
                <li className="drop-menu-item">
                  <Link href="https://www.infosectrain.com/career-mentorship-program/">
                    career mentorship program
                  </Link>
                </li>
                <li className="drop-menu-item">
                  <Link href="https://www.azpirantz.com/">
                    Consulting Services
                  </Link>
                </li>
              </ul>
            </li> */}
            {/* dropdown end */}

            {/* <li className="megamenu-nav-item">
              <Link
                className="megamenu-nav-link"
                href="/leadership"
              >
                Our Team
              </Link>
            </li> */}

            <li className="megamenu-nav-item service-dropdwon">
              <Link
                className="megamenu-nav-link dropdown-toggle text-black"
                href="/"
              >
                about us
              </Link>
              <ul className="drop-menu">
                <li className="drop-menu-item">
                  <Link href="/about-us">
                    <img
                      src="/images/information-button.webp"
                      alt=""
                      className="mobile-images"
                    />{" "}
                    About Us
                  </Link>
                </li>
                <li className="drop-menu-item">
                  <Link href="/leadership">
                    <img
                      src="/images/team-management.webp"
                      alt=""
                      className="mobile-images"
                    />{" "}
                    Our Team
                  </Link>
                </li>
              </ul>
            </li>
            <li className="megamenu-nav-item service-dropdwon">
              <Link
                className="megamenu-nav-link dropdown-toggle text-black"
                href="/"
              >
                 resources
              </Link>
              <ul className="drop-menu">
                <li className="drop-menu-item text-black">
                  <Link href="/free-events">
                    events
                  </Link>
                </li>
                {/* <li className="drop-menu-item">
                  <Link href="/free-practice-tests">
                    <img src={test} alt="" className="mobile-images" /> free
                    practice tests
                  </Link>
                </li> */}

                <li className="drop-menu-item text-black">
                  <Link href="/blog">
                    {" "}
                    <img src="/images/blog.webp" alt="" className="mobile-images" /> blog
                  </Link>
                </li>
              </ul>
            </li>
            <li className="megamenu-nav-item">
              {stuID ? (
                <>
                  <div className="d-flex justify-content-between gap-5 ">
                    <Link href="/dashboard">
                      <div>
                        <FaRegUserCircle size={28} />
                      </div>
                    </Link>

                    <div className="point">
                      <IoIosLogOut onClick={() => logoutUser()} size={28} />
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div
                    className="megamenu-nav-link text-black Signin"
                    onClick={toggleModal}
                  >
                    Sign In
                  </div>
                </>
              )}
            </li>

          </ul>

          <div className="humberger-menu d-lg-none" onClick={toggleNav}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="29"
              height="20"
              viewBox="0 0 29 20"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 3.33333V0H29V3.33333H0ZM0 11.6667H29V8.33333H0V11.6667ZM0 20H29V16.6667H0V20Z"
                fill="#0071e3"
              ></path>
            </svg>
          </div>

          <form className="nav-search-form d-lg-none" method="get">
            <div className="input-container">
              <input
                type="text"
                className="input-field ui-autocomplete-input"
                placeholder="What do you want to learn"
                name="s"
                autoComplete="off"
                required
                pattern="[Link-zA-Z0-9\s]+"
                title="Please remove special characters"
              />
              <button className="icon" type="submit">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M19.3593 18.2168L14.5993 13.2662C15.8232 11.8113 16.4937 9.98069 16.4937 8.07499C16.4937 3.62251 12.8712 0 8.41874 0C3.96626 0 0.34375 3.62251 0.34375 8.07499C0.34375 12.5275 3.96626 16.15 8.41874 16.15C10.0903 16.15 11.6831 15.6458 13.045 14.6888L17.8412 19.677C18.0417 19.8852 18.3113 20 18.6003 20C18.8737 20 19.1332 19.8957 19.3302 19.7061C19.7487 19.3034 19.762 18.6357 19.3593 18.2168ZM8.41874 2.10652C11.7098 2.10652 14.3872 4.78391 14.3872 8.07499C14.3872 11.3661 11.7098 14.0435 8.41874 14.0435C5.12766 14.0435 2.45027 11.3661 2.45027 8.07499C2.45027 4.78391 5.12766 2.10652 8.41874 2.10652Z"
                    fill="#AFAFAF"
                  ></path>
                </svg>
              </button>
            </div>
            <input
              type="hidden"
              name="et_pb_searchform_submit"
              value="et_search_proccess"
            />
            <input type="hidden" name="et_pb_include_posts" value="yes" />
            <input type="hidden" name="et_pb_include_pages" value="yes" />
          </form>
        </div>
      </nav>

      {openNav && (
        <section className="nav-wrap " style={{ width: "100%" }}>
          <div className="backBtn" onClick={toggleNav}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <rect
                width="25.3833"
                height="2.90095"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 17.9531 0)"
                fill="#0071e3"
              ></rect>
              <rect
                x="2.05078"
                width="25.3833"
                height="2.90095"
                transform="rotate(45 2.05078 0)"
                fill="#0071e3"
              ></rect>
            </svg>
          </div>

          <ul
            className="acnav__list acnav__list--level1"
            style={{ listStyle: "none", paddingLeft: "0" }}
          >
            <li
              className={`has-children ${openSubMenu.byDomain ? "is-open" : ""
                }`}
            >
              <div
                className="acnav__label"
                onClick={() => toggleSubMenu("byDomain")}
              >
                By Domain/Expertise
              </div>
              <ul
                style={{ paddingLeft: "0" }}
                className={`acnav__list acnav__list--level2 ${openSubMenu.byDomain ? "open" : ""
                  }`}
              >
                {categoriess.map((tab, ind) => {
                  return (
                    <>
                      <li>
                        <span
                          className="acnav__link acnav__link--level2"
                          onClick={() => toggleCategory(tab.id)}
                        >
                          <img
                            src={`${StorageLink}/${tab.icon}`}
                            className="tab-nav-image"
                            alt=""
                          />
                          {tab.name}
                        </span>

                        {expandedCategory === tab.id && (
                          <ul
                            style={{ listStyle: "none", paddingLeft: "0" }}
                            className="course-list ml-4 mt-2"
                          >
                            {course
                              .filter(
                                (item) => item.course_category_id === tab.id
                              )
                              .map((item) => (
                                <li
                                  key={item.id}
                                  className="acnav__link acnav__link--level2"
                                >
                                  <Link
                                    href={item.slug}
                                    className="text-black"
                                    onClick={() => setExpandedCategory(null)}
                                  >
                                    {item.name}
                                  </Link>
                                </li>
                              ))}
                          </ul>
                        )}
                      </li>
                    </>
                  );
                })}
                {/* <li>
                  <Link
                    className="acnav__link acnav__link--level2"
                    onClick={() => toggleAll("cyber")}
                    href="/certified-ethical-hacker-ceh-training"
                  >
                    <img src={security} alt="" className="mobile-images" />{" "}
                    Cyber Security
                  </Link>
                </li>
                <li>
                  <Link
                    className="acnav__link acnav__link--level2"
                    onClick={() => toggleAll("cyber")}
                    href="/certified-ethical-hacker-ceh-training"
                  >
                    <img src={grc} alt="" className="mobile-images" /> GRC
                  </Link>
                </li> */}

                {/* <li>
                  <Link
                    className="acnav__link acnav__link--level2"
                    onClick={() => toggleAll("cyber")}
                    href="/certified-ethical-hacker-ceh-training"
                  >
                    <img src={security} alt="" className="mobile-images" />{" "}
                    Cyber Security
                  </Link>
                </li>
                <li>
                  <Link
                    className="acnav__link acnav__link--level2"
                    onClick={() => toggleAll("cyber")}
                    href="/certified-ethical-hacker-ceh-training"
                  >
                    <img src={cloud} alt="" className="mobile-images" /> Cloud
                    Security
                  </Link>
                </li>
                <li>
                  <Link
                    className="acnav__link acnav__link--level2"
                    onClick={() => toggleAll("cyber")}
                    href="/certified-ethical-hacker-ceh-training"
                  >
                    <img src={grc} alt="" className="mobile-images" /> GRC
                  </Link>
                </li>
                <li>
                  <Link
                    className="acnav__link acnav__link--level2"
                    onClick={() => toggleAll("cyber")}
                    href="/certified-ethical-hacker-ceh-training"
                  >
                    <img src={file} alt="" className="mobile-images" /> Security
                    Testing
                  </Link>
                </li>
                <li>
                  <Link
                    className="acnav__link acnav__link--level2"
                    onClick={() => toggleAll("cyber")}
                    href="/certified-ethical-hacker-ceh-training"
                  >
                    <img src={eye} alt="" className="mobile-images" /> Data
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link
                    className="acnav__link acnav__link--level2"
                    onClick={() => toggleAll("cyber")}
                    href="/certified-ethical-hacker-ceh-training"
                  >
                    <img src={ins} alt="" className="mobile-images" /> Auditing
                  </Link>
                </li>
                <li>
                  <Link
                    className="acnav__link acnav__link--level2"
                    onClick={() => toggleAll("cyber")}
                    href="/certified-ethical-hacker-ceh-training"
                  >
                    <img src={product} alt="" className="mobile-images" />{" "}
                    Product Trainings
                  </Link>
                </li>
                <li>
                  <Link
                    className="acnav__link acnav__link--level2"
                    onClick={() => toggleAll("cyber")}
                    href="/certified-ethical-hacker-ceh-training"
                  >
                    <img src={system} alt="" className="mobile-images" />{" "}
                    Security Operations Center
                  </Link>
                </li>
                <li>
                  <Link
                    className="acnav__link acnav__link--level2"
                    onClick={() => toggleAll("cyber")}
                    href="/certified-ethical-hacker-ceh-training"
                  >
                    <img src={network} alt="" className="mobile-images" />{" "}
                    Network &amp; Network Security
                  </Link>
                </li>
                <li>
                  <Link
                    className="acnav__link acnav__link--level2"
                    onClick={() => toggleAll("cyber")}
                    href="/certified-ethical-hacker-ceh-training"
                  >
                    <img src={security} alt="" className="mobile-images" />{" "}
                    Offensive Security
                  </Link>
                </li>
                <li>
                  <Link
                    className="acnav__link acnav__link--level2"
                    onClick={() => toggleAll("cyber")}
                    href="/certified-ethical-hacker-ceh-training"
                  >
                    <img src={defensive} alt="" className="mobile-images" />{" "}
                    Defensive security
                  </Link>
                </li>
                <li>
                  <Link
                    className="acnav__link acnav__link--level2"
                    onClick={() => toggleAll("cyber")}
                    href="/certified-ethical-hacker-ceh-training"
                  >
                    <img src={cyber} alt="" className="mobile-images" />
                    OT/ICS Security
                  </Link>
                </li>
                <li>
                  <Link
                    className="acnav__link acnav__link--level2"
                    onClick={() => toggleAll("cyber")}
                    href="/certified-ethical-hacker-ceh-training"
                  >
                    <img src={distance} alt="" className="mobile-images" />
                    Physical Security
                  </Link>
                </li>
                <li>
                  <Link
                    className="acnav__link acnav__link--level2"
                    onClick={() => toggleAll("cyber")}
                    href="/certified-ethical-hacker-ceh-training"
                  >
                    <img src={cordinator} alt="" className="mobile-images" />
                    Project Management Professional
                  </Link>
                </li>
                <li>
                  <Link
                    className="acnav__link acnav__link--level2"
                    onClick={() => toggleAll("cyber")}
                    href="/certified-ethical-hacker-ceh-training"
                  >
                    {" "}
                    <img src={suspect} alt="" className="mobile-images" />
                    Identity &amp; Access Management
                  </Link>
                </li>
                <li>
                  <Link
                    className="acnav__link acnav__link--level2"
                    onClick={() => toggleAll("cyber")}
                    href="/certified-ethical-hacker-ceh-training"
                  >
                    {" "}
                    <img src={view} alt="" className="mobile-images" /> View All
                  </Link>
                </li> */}
              </ul>
            </li>
            <li className="has-children">
              <div className="acnav__labeltwo">
                <Link
                  onClick={() => toggleAll("training")}
                  href="/training-calendar"
                >
                  Training Calendar
                </Link>
              </div>
            </li>
            <li
              className={`has-children ${openSubMenu.aboutUs ? "is-open" : ""}`}
            >
              <div
                className="acnav__label"
                onClick={() => toggleSubMenu("aboutUs")}
              >
                About Us
              </div>
              <ul
                className={`acnav__list acnav__list--level2 ${openSubMenu.aboutUs ? "open" : ""
                  }`}
              >
                <li>
                  <Link
                    onClick={() => toggleAll("aboutUs")}
                    className="acnav__link acnav__link--level2 text-black"
                    href="/about-us"
                  >
                    <img
                      src="/images/information-button.webp"
                      alt=""
                      className="mobile-images"
                    />{" "}
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={() => toggleAll("ourteam")}
                    className="acnav__link acnav__link--level2  text-black"
                    href="/leadership"
                  >
                    <img
                      src="/images/team-management.webp"
                      alt=""
                      className="mobile-images"
                    />{" "}
                    Our Team
                  </Link>
                </li>
              </ul>
            </li>
            <li
              className={`has-children ${openSubMenu.freeResources ? "is-open" : ""
                }`}
            >
              <div
                className="acnav__label"
                onClick={() => toggleSubMenu("freeResources")}
              >
                 Resources
              </div>
              <ul
                className={`acnav__list acnav__list--level2 ${openSubMenu.freeResources ? "open" : ""
                  }`}
              >
                <li>
                  <Link
                    onClick={() => toggleAll("freevents")}
                    className="acnav__link acnav__link--level2 text-black"
                    href="/free-events"
                  >
                   <img src={test} alt="" className="mobile-images" />
                    events
                  </Link>
                </li>
                {/* <li>
                  <Link
                    onClick={() => toggleAll("freepractice")}
                    className="acnav__link acnav__link--level2"
                    href="/free-practice-tests"
                  >
                    <img src={test} alt="" className="mobile-images" /> free
                    practice tests
                  </Link>
                </li> */}
                <li>
                  <Link
                    onClick={() => toggleAll("blog")}
                    className="acnav__link acnav__link--level2"
                    href="/blog"
                  >
                    <img src="/images/blog.webp" alt="" className="mobile-images" /> blog
                  </Link>
                </li>
              </ul>
            </li>

            <li className="has-children">
              {/* <div className="acnav__labeltwo text-black" onClick={toggleModal}>
                <Link
                  className="text-black"
                  onClick={() => toggleAll("signin")}
                >
                  Sign In
                </Link>
              </div> */}

              {stuID ? (
                <>
                  <div className="d-flex justify-content-between gap-5 ">
                    <Link href="/dashboard">
                      <div>
                        <FaRegUserCircle size={28} />
                      </div>
                    </Link>

                    <div className="point">
                      <IoIosLogOut onClick={() => logoutUser()} size={28} />
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <span
                    className="acnav__labeltwo text-black"
                    onClick={toggleModal}
                  >
                    Sign In
                  </span>
                </>
              )}
            </li>
          </ul>
        </section>
      )}
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
                    className={`nav-link  ${activeTabNav === "login" ? "active" : ""
                      }`}
                  >
                    Sign In
                  </button>
                  <button
                    onClick={() => switchTab("signup")}
                    className={`nav-link ${activeTabNav === "signup" ? "active" : ""
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

                  {/* <div className="text-center mb-4 position-relative">
                    <hr className="my-4" />
                    <span className="position-absolute top-50 start-50 translate-middle bg-white px-2">
                      OR
                    </span>
                  </div>

                  <button className="google-btn btn border w-100 d-flex justify-content-center align-items-center">
                    <img src={fav} alt="" className="me-2 w-10" />
                    Continue with Google
                  </button> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
