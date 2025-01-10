"use client"
import React, { useRef, useEffect, useState } from "react";
// import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Typewriter from "typewriter-effect";
// import One from "./One";
import CourseDetails from "./CourseDetails";
import DemandDomain from "./DemandDomain";
import ExpertsSection from "./ExpertsSection";
import CourseSwiper from "./CourseSwiper";
// import favicon from "/images/favicon.webp";
// import trust from "/images/trustpilot.webp";
// import learn from "/images/learner-point.webp";
// import whats from "/images/whatsapp.webp";
// import elearn from "/images/elearning.webp";
// import group from "/images/group-learner.webp";
// import glassDoor from "/images/glassdor.webp";
import PopupForm from "./PopupForm";
// import banner1 from "/images/bannerHome.webp";
// import banner11 from "/images/bannerHome_1.webp";
// import banner2 from "/images/bannerhome2.webp";
// import banner12 from "/images/bannerhome2_1.webp";
// import banner3 from "/images/bannerhome3.webp";
// import banner13 from "/images/bannerhome3_1.webp";
// import banner4 from "/images/cybersecurity-banner.webp";

import { useDispatch, useSelector } from "react-redux";

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import Herotwo from "../training-calendar/democom";
import { FaPlayCircle } from "react-icons/fa";
// import { Swiper, SwiperSlide } from "swiper/react";
// import 'swiper/swiper-bundle.min.css';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import { fetchSliders } from "../features/Sliderslicer/SliderData";
import slider from "react-slick/lib/slider";
import ContactPopup from "./CommonData/ContactPopup";
import Link from "next/link";
const BannerCarousel = () => {
    const dispatch = useDispatch();
    const {
        data: sliders,
        status,
        error,
    } = useSelector((state) => state.sliders);
    const [sliderData, setsliderdata] = useState();

    const [newSlider, setnewSlider] = useState(true);

    useEffect(() => {


        setnewSlider(false);



    }, []);



    useEffect(() => {
        if (status === "idle") {
            dispatch(fetchSliders());
        }

        // Assuming `sliders` is coming from Redux or some external state
        setsliderdata(sliders);

        if (sliders.length > 0) {
       
            setnewSlider(false);
        } else {
            setnewSlider(true);
        }
    }, [status, sliders, dispatch]);

    useEffect(() => {
        AOS.init({
            duration: 1000, // Animation duration in milliseconds
            once: true, // Whether animation should happen only once - while scrolling down
        });
    }, []);

    const sliderRef = useRef(null);
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlayFullScreen = () => {
        if (videoRef.current.requestFullscreen) {
            videoRef.current.requestFullscreen();
        } else if (videoRef.current.mozRequestFullScreen) {
            // Firefox
            videoRef.current.mozRequestFullScreen();
        } else if (videoRef.current.webkitRequestFullscreen) {
            // Chrome, Safari and Opera
            videoRef.current.webkitRequestFullscreen();
        } else if (videoRef.current.msRequestFullscreen) {
            // IE/Edge
            videoRef.current.msRequestFullscreen();
        }
        videoRef.current.play();
        setIsPlaying(true);
    };
    useEffect(() => {
        // Example of setting up Slick Slider programmatically
        if (sliderRef.current) {
            sliderRef.current.slickGoTo(0); // Start at the first slide
        }
    }, []);

    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowPopup(false);
        }, 5000);

        return () => clearTimeout(timer);
    }, []);

    const handleClose = () => {
        setShowPopup(false);
    };

    return (
        <>

            {/* 


                 <div className="row g-3 ">
                  <div className="col-12 d-flex flex-column mt-0 mt-lg-3 ">
                    <div
                      style={{ position: "relative", display: "inline-block" }}
                    >
                      <video
                        ref={videoRef}
                        alt="Knowledgehut"
                        loading="lazy"
                        decoding="async"
                        src="/images/1113140_Opening_Educational_1280x720.mp4"
                        className="img-fluid right-side-image position-relative w-100 object-fit-cover "
                        muted
                        autoPlay
                        loop
                        onPlay={() => setIsPlaying(true)}
                        onPause={() => setIsPlaying(false)}
                        onClick={handlePlayFullScreen}
                      />
                      <div className="video-overlay"></div>
                    </div>
                    <div className="container">
                      <div className="row g-3 align-items-center position-absolute video-content">
                        <div className="d-flex flex-column gap-3 phone-hero">
                          <h1 className="display-4 fw-bold text-white">
                            Master the Skills with <br />
                            <span className="animate-asset fw-bold">
                              {""}
                              <Typewriter
                                options={{
                                  strings: ["Ingenious Learn"], // The text you want href animate
                                  autoStart: true,
                                  loop: true,
                                  delay: 75, // Adjust typing speed if needed
                                }}
                              />
                              <img
                                src="/images/animate-underline-yellow.gif"
                                alt="underline"
                                className="underline-image d-none d-md-block mt-2"
                                style={{ filter: "brightness(0.7) invert(1)" }}
                              />
                            </span>
                          </h1>
                          <div className="d-none d-md-block fs-5 text-secondary fw-medium text-center text-md-start text-white">
                            Unlock your potential with {""}
                            <span className="fw-bold">Ingenious Learn</span>
                            {""} . We're revolutionizing the way <br /> you
                            master cutting-edge
                            <span className="fw-bold">{""} technologies</span>,
                            ensuring you're {""}
                            <span className="fw-bold"> job-ready </span> in no
                            time.
                          </div>
                        </div>
                        <div className="d-flex justify-content-center justify-content-md-start gap-3">
                          <div className="d-flex justify-content-center  mt-md-2 mt-0 m-0">
                            <Link
                              href="/courses"
                              className="btn d-flex btn-primary align-items-center justify-content-center h-100 custm-btn"
                            >
                              <span>Explore All Courses</span>
                              <i className="bi bi-arrow-right rotate-180 ms-2 fs-4"></i>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>


                  <Swiper
                  navigation={true}
                  pagination={{ clickable: true }}
                  modules={[Navigation, Pagination]}
                  className="mySwiper mineSwiper"
                >
                  {sliders?.map((slider) => (
                    <SwiperSlide key={slider.id}>
                      <div
                        className="mineSilder d-flex justify-content-center align-items-center"
                        style={{
                          background:
                            slider.background ||
                            `linear-gradient(90deg, ${slider.col1} 0%, ${slider.col2} 35%, ${slider.col3} 100%)`,
                        }}
                      >
                        <div className="row justify-content-center">
                          <div className="col-12 align-items-center">
                            <h1 className="fw-bold text-center text-white">
                              {slider.heading ? (
                                <>
                                  {slider.heading} <br />
                                  <span className="animate-asset fw-bold d-flex flex-column justify-content-center align-items-center">
                                    <Typewriter
                                      options={{
                                        strings: ["Ingenious Learn"],
                                        autoStart: true,
                                        loop: true,
                                        delay: 75,
                                      }}
                                    />
                                    <img
                                      src="/images/animate-underline-yellow.gif"
                                      alt="underline"
                                      className="underline-image d-none d-md-block mt-2"
                                      style={{
                                        filter: "brightness(0.7) invert(1)",
                                      }}
                                    />
                                  </span>
                                </>
                              ) : (
                                "Default Heading"
                              )}
                            </h1>
                            <div className="d-none d-md-block fs-5 text-secondary fw-medium text-center text-md-start text-white">
                              {slider.para ? (
                                <>
                                  <div
                                    className="slider-description"
                                    dangerouslySetInnerHTML={{
                                      __html: slider.description,
                                    }}
                                  ></div>
                                </>
                              ) : (
                                "Default paragraph content..."
                              )}

                              <div className="d-flex justify-content-center  gap-3">
                                <div className="d-flex justify-content-center  mt-md-2 mt-0 m-0">
                                  <Link
                                    href="/courses"
                                    className="btn d-flex align-items-center justify-content-center h-100 custm-btn text-white"
                                    style={{
                                      backgroundColor:
                                        slider.btnColor || "#0071e3",
                                    }}
                                  >
                                    <span>Explore All Courses</span>
                                    <i className="bi bi-arrow-right rotate-180 ms-2 fs-4"></i>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
    
    */}




            <div className="position-relative overflow-hidden">
                <PopupForm show={showPopup} onClose={handleClose} />

                <section className=" bg-light rounded-bottom main-hero-section">
                    <div className="w-100 h-100">
                        {newSlider ? (
                            <>
                                <div className="row g-3 ">
                                    <div className="col-12 d-flex flex-column mt-0 mt-lg-3 ">
                                        <div
                                            style={{ position: "relative", display: "inline-block" }}
                                        >
                                            <video
                                                ref={videoRef}
                                                alt="Knowledgehut"
                                                loading="lazy"
                                                decoding="async"
                                                src="/images/1113140_Opening_Educational_1280x720.mp4"
                                                className="img-fluid right-side-image position-relative w-100 object-fit-cover "
                                                muted
                                                autoPlay
                                                loop
                                                onPlay={() => setIsPlaying(true)}
                                                onPause={() => setIsPlaying(false)}
                                                onClick={handlePlayFullScreen}
                                            />
                                            <div className="video-overlay"></div>
                                        </div>
                                        <div className="container">
                                            <div className="row g-3 align-items-center position-absolute video-content">
                                                <div className="d-flex flex-column gap-3 phone-hero">
                                                    <h1 className="display-4 fw-bold text-white">
                                                        Master the Skills with <br />
                                                        <span className="animate-asset fw-bold">
                                                            {""}
                                                            <Typewriter
                                                                options={{
                                                                    strings: ["Ingenious Learn"], // The text you want href animate
                                                                    autoStart: true,
                                                                    loop: true,
                                                                    delay: 75, // Adjust typing speed if needed
                                                                }}
                                                            />
                                                            <img
                                                                src="/images/animate-underline-yellow.gif"
                                                                alt="underline"
                                                                className="underline-image d-none d-md-block mt-2"
                                                                style={{ filter: "brightness(0.7) invert(1)" }}
                                                            />
                                                        </span>
                                                    </h1>
                                                    <div className="d-none d-md-block fs-5 text-secondary fw-medium text-center text-md-start text-white">
                                                        Unlock your potential with {""}
                                                        <span className="fw-bold">Ingenious Learn</span>
                                                        {""} . We're revolutionizing the way <br /> you
                                                        master cutting-edge
                                                        <span className="fw-bold">{""} technologies</span>,
                                                        ensuring you're {""}
                                                        <span className="fw-bold"> job-ready </span> in no
                                                        time.
                                                    </div>
                                                </div>
                                                <div className="d-flex justify-content-center justify-content-md-start gap-3">
                                                    <div className="d-flex justify-content-center  mt-md-2 mt-0 m-0">
                                                        <Link
                                                            href="/courses"
                                                            className="btn d-flex btn-primary align-items-center justify-content-center h-100 custm-btn"
                                                        >
                                                            <span>Explore All Courses</span>
                                                            <i className="bi bi-arrow-right rotate-180 ms-2 fs-4"></i>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        ) : (
                            <>
                                <Swiper
                                    navigation={true}
                                    pagination={{ clickable: true }}
                                    modules={[Navigation, Pagination]}
                                    className="mySwiper mineSwiper"
                                >
                                    {sliders?.map((slider) => (
                                        <SwiperSlide key={slider.id}>
                                            <div
                                                className="mineSilder d-flex justify-content-center align-items-center"
                                                style={{
                                                    background:
                                                        slider.background ||
                                                        `linear-gradient(90deg, ${slider.col1} 0%, ${slider.col2} 35%, ${slider.col3} 100%)`,
                                                }}
                                            >
                                                <div className="row justify-content-center">
                                                    <div className="col-12 align-items-center">
                                                        <h1 className="fw-bold text-center text-white">
                                                            {slider.heading ? (
                                                                <>
                                                                    {slider.heading} <br />
                                                                    <span className="animate-asset fw-bold d-flex flex-column justify-content-center align-items-center">
                                                                        <Typewriter
                                                                            options={{
                                                                                strings: ["Ingenious Learn"],
                                                                                autoStart: true,
                                                                                loop: true,
                                                                                delay: 75,
                                                                            }}
                                                                        />
                                                                        <img
                                                                            src="/images/animate-underline-yellow.gif"
                                                                            alt="underline"
                                                                            className="underline-image d-none d-md-block mt-2"
                                                                            style={{
                                                                                filter: "brightness(0.7) invert(1)",
                                                                            }}
                                                                        />
                                                                    </span>
                                                                </>
                                                            ) : (
                                                                "Default Heading"
                                                            )}
                                                        </h1>
                                                        <div className="d-none d-md-block fs-5 text-secondary fw-medium text-center text-md-start text-white">
                                                            {slider.para ? (
                                                                <>
                                                                    <div
                                                                        className="slider-description"
                                                                        dangerouslySetInnerHTML={{
                                                                            __html: slider.description,
                                                                        }}
                                                                    ></div>
                                                                </>
                                                            ) : (
                                                                "Default paragraph content..."
                                                            )}

                                                            <div className="d-flex justify-content-center  gap-3">
                                                                <div className="d-flex justify-content-center  mt-md-2 mt-0 m-0">
                                                                    <Link
                                                                        href="/courses"
                                                                        className="btn d-flex align-items-center justify-content-center h-100 custm-btn text-white"
                                                                        style={{
                                                                            backgroundColor:
                                                                                slider.btnColor || "#0071e3",
                                                                        }}
                                                                    >
                                                                        <span>Explore All Courses</span>
                                                                        <i className="bi bi-arrow-right rotate-180 ms-2 fs-4"></i>
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </>
                        )}
                    </div>
                </section>

                <section className="home-category-sec">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 text-center">
                                <h2>Explore Courses by Category</h2>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <Herotwo />
                        </div>
                    </div>
                </section>

                <CourseDetails />
                <div className="col text-center app-explore-link my-3 ">
                    <Link href="/courses">Explore More</Link>
                </div>
                <DemandDomain />
                <ExpertsSection />
                {/* <Testimonial /> */}
                <CourseSwiper />

                <ContactPopup />
            </div>
        </>
    );
};

export default BannerCarousel;
