"use client"
import React from "react";
import { FaArrowRight, FaDesktop, FaIdBadge, FaLaptop, FaUserShield, FaUserTag } from "react-icons/fa";
import Link from "next/link";
import "bootstrap-icons/font/bootstrap-icons.css"; // Import Bootstrap Icons

const DemandDomain = () => {
    return (
        <>
            {/* <div className="domain-main" data-aos="zoom-in">
        <div className="mb-3 domain-content position-relative">
          <div className="max-w-133">
            <h2 className="text-sm text-uppercase font-semibold text-muted text-center">
              High-Impact Skills for the Future of Work
            </h2>
            <h3 className="text-3xl font-weight-bold text-black mt-3 text-center">
              Choose From 25+ In-Demand Domains
            </h3>
            <div className="text-sm my-2 text-center  text-muted ">
              Our immersive courses in booming fields like Data Science, AI, and
              Cloud Computing provide you with the practical knowledge and
              experience you need to succeed in the ever-evolving job market.
              Don't just learn, get future-ready with upGrad KnowledgeHut.
            </div>
          </div>
          <div
            className="position-absolute  translate-middle-x top-spacing-48 -z-1 d-none d-md-block"
            style={{ left: "50%", top: "-100px" }}
          >
            <img
              alt="pattern-image"
              loading="lazy"
              width="100"
              height="100"
              decoding="async"
              data-nimg="1"
              className="w-100 h-100"
              src={svg}
              style={{ color: "transparent" }} // Inline styles can remain unchanged
            />
          </div>
        </div>

        <div className="container mt-5">
          <div className="mai-hero mai-hero-second" data-aos="zoom-in-up">
            <div className="marquee">
              <div className="marquee-content-second">
                {marqueeData.map((item, index) => (
                  <div key={index} className="rfm-child">
                    <div
                      style={{
                        color: `${item.bgColor}`,
                        backgroundColor: ` ${item.iconColor}`,
                      }}
                      className="domain-icon"
                    >
                      {item.iconClass}
                    </div>
                    <div className="domain-para">
                      <p className="">{item.category}</p>
                      <Link to={item.link}>
                        <span className="">{item.buttonText}</span>
                        <FaArrowRight />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="mai-hero mai-hero-second mt-4"  data-aos="zoom-in-down">
            <div className="marquee">
            <div className="marquee-content">
                {marqueeData.map((item, index) => (
                  <div key={index} className="rfm-child">
                    <div
                      style={{
                        color: `${item.bgColor}`,
                        backgroundColor: ` ${item.iconColor}`,
                      }}
                      className="domain-icon"
                    >
                      {item.iconClass}
                    </div>
                    <div className="domain-para">
                      <p className="">{item.category}</p>
                      <Link to={item.link}>
                        <span className="">{item.buttonText}</span>
                        <FaArrowRight />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-center mt-5" data-aos="zoom-in-left">
          <Link
            to="/courses"
            className=" explore-btn "
          >
            <p className="mb-0">Explore All Courses</p>
            <FaArrowRight></FaArrowRight>
          </Link>
        </div>

       
      </div> */}



            <section className="app-training">
                <div className="container">
                    <div className="row">

                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 app-training-right">
                            <div className="row">
                                <div className="col-12 app-training-heading">
                                    <h3>Transforming Your Workforce with Cutting-Edge Training Programs</h3>

                                </div>
                                <div className="col-12 app-training-inner-main">
                                    <div className="row app-training-f">
                                        <div className="col-md-6 col-12 app-training-f-1">
                                            <FaUserShield className="app-icon" />
                                            <span>
                                                Experienced Trainers<br />
                                                <span className="appf-l"> Industry Specific Trainers of all courses</span>
                                            </span>
                                        </div>
                                        <div className="col-md-6 col-12 app-training-f-1">
                                            <FaDesktop className="app-icon" />
                                            <span>
                                                Virtual Training <br />
                                                <span className="appf-l">Deliver sessions across continents</span>
                                            </span>
                                        </div>
                                        <div className="col-md-6 col-12 app-training-f-1">
                                            <FaIdBadge className="app-icon" />
                                            <span>
                                                FREE ACCESS <br />
                                                <span className="appf-l">To our popular Resources and Doucmentations</span>
                                            </span>
                                        </div>
                                        <div className="col-md-6 col-12 app-training-f-1">
                                            <FaLaptop className="app-icon" />
                                            <span>
                                                Customized Trainings <br />
                                                <span className="appf-l"> Solutions to your every problems</span>
                                            </span>
                                        </div>

                                        <div className="col-12 mt-2">
                                            <div className="col text-center app-explore-link">
                                                <Link href="/business-solutions">Explore More</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 app-training-background">
                            <img
                                src="/images/it.jpg"
                                className="img-fluid"
                                alt="Wissenhive"

                            />
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-5 ">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="p-4 bg-white  shadow-netral" data-aos="zoom-in-right">
                                <h3 className="text-center fw-bold mb-4 text-dark">
                                    Accelerate Your Career with Our Expert Services
                                </h3>
                                <div className="d-flex  flex-wrap align-items-center mt-5 justify-content-between">
                                    <div className=" mb-4 p-0">
                                        <div className="d-flex  align-items-center g-10">
                                            <div className="career-icon bg-danger text-white rounded mb-2">
                                                <i className="bi bi-person-square"></i>
                                            </div>
                                            <div className="">
                                                <h5 className="fw-semibold text-dark mb-1">
                                                    Premium Job Openings
                                                </h5>
                                                <span className="text-muted">
                                                    5000+ Hiring Partners
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className=" mb-4 p-0">
                                        <div className="d-flex  align-items-center">
                                            <div className="career-icon bg-success text-white rounded mb-2">
                                                <i className="bi bi-gem "></i>
                                            </div>
                                            <div className="">
                                                <h5 className="fw-semibold text-dark mb-1">
                                                    Personalized Career Coaching
                                                </h5>
                                                <span className="text-muted">
                                                    1:1 Mentorship by Experts
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className=" mb-4 p-0">
                                        <div className="d-flex  align-items-center" data-aos="zoom-out">
                                            <div className=" career-icon bg-danger text-white rounded mb-2">
                                                <i className="bi bi-briefcase "></i>
                                            </div>
                                            <div className="">
                                                <h5 className="fw-semibold text-dark mb-1">
                                                    Dedicated Job Support
                                                </h5>
                                                <span className="text-muted">
                                                    Comprehensive Placement Assistance
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className=" mb-4 p-0">
                                        <div className="d-flex  align-items-center">
                                            <div className="career-icon bg-success text-white rounded mb-2">
                                                <i className="bi bi-compass "></i>
                                            </div>
                                            <div className="">
                                                <h5 className="fw-semibold text-dark mb-1">
                                                    Global Alumni Network
                                                </h5>
                                                <span className="text-muted">
                                                    Network with 450,000+ Alumni
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default DemandDomain;
