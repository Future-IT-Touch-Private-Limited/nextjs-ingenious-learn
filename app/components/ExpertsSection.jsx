"use effect"

import React, {useEffect, useState} from "react";

import "bootstrap-icons/font/bootstrap-icons.css"; // Import Bootstrap Icons


import AOS from 'aos';
import 'aos/dist/aos.css'; 
const ExpertsSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Whether animation should happen only once - while scrolling down
    });
  }, []);
    const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 992);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check

    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <>
      <div className="domain-main" data-aos="zoom-out-up"> 
        <div className="mb-3 domain-content position-relative">
          <div className="max-w-133">
            <h2 className="text-sm text-uppercase font-semibold text-muted text-center">
              OUR SEASONED SUPPORT SYSTEM
            </h2>
            <h3 className=" font-weight-bold text-black mt-3 text-center">
              Learn from Experts Who’ve Been There and Done That
            </h3>
          </div>
        </div>

        <div className="container py-2 ">
          <div className="row">
            <div className="col-12">
              <div className="p-4 bg-white rounded-custom" data-aos="zoom-out-down">
                <div className="d-md-flex d-sm-block  align-items-center  justify-content-around">
                  <div className=" p-0">
                    <div className="d-flex  align-items-center g-10">
                      <div className="career-icon text-success rounded mb-2">
                        <i className="bi bi-person-square"></i>
                      </div>
                      <div className="">
                        <h5 className="fw-semibold text-dark mb-1">1,250+</h5>
                        <span className="text-muted">Industry Experts</span>
                      </div>
                    </div>
                  </div>
                  <div className=" p-0">
                    <div className="d-flex  align-items-center">
                      <div className="career-icon text-danger rounded mb-2">
                        <i className="bi bi-gem "></i>
                      </div>
                      <div className="">
                        <h5 className="fw-semibold text-dark mb-1">400+</h5>
                        <span className="text-muted">
                          {" "}
                          Comprehensive Courses
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className=" p-0">
                    <div className="d-flex  align-items-center">
                      <div className=" career-icon text-success rounded mb-2">
                        <i className="bi bi-briefcase "></i>
                      </div>
                      <div className="">
                        <h5 className="fw-semibold text-dark mb-1">300+</h5>
                        <span className="text-muted">
                          {" "}
                          Agile Transformations Facilitated
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className=" p-0">
                    <div className="d-flex  align-items-center">
                      <div className="career-icon text-danger rounded mb-2">
                        <i className="bi bi-compass "></i>
                      </div>
                      <div className="">
                        <h5 className="fw-semibold text-dark mb-1">50+</h5>
                        <span className="text-muted">Countries & Counting</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      {/* {isMobile ? ( 
            <div className="mai-hero-four">
              <div className="marquee-third">
                <div className="marquee-content-third">
          {facultyMembers.map((facultyMember, index) => (
            <div
              key={index}
              className="card-faculty text-center position-relative"
              style={{
                
                marginRight: '20px',
                background: `linear-gradient(180deg, ${facultyMember.iconColor} 32.78%,${facultyMember.iconbgColor} )`,
              }}
            >
              <div className="card-body "  >
                <div className="mb-3">
                  <h5 className="card-title ">{facultyMember.name}</h5>
                  <p className="card-text ">{facultyMember.role}</p>
                  <div className="">Has worked with</div>
                </div>
                <div className="d-flex justify-content-center card-logo-outer">
                  {facultyMember.logos.map((logo, logoIndex) => (
                    <img
                      key={logoIndex}
                      src={logo}
                      className="card-logo"
                      alt={`Logo ${logoIndex}`}
                    />
                  ))}
                </div>

                <img
                  src={facultyMember.image}
                  className="card-images"
                  alt={facultyMember.name}
                />
              </div>
            </div>
          ))}
        </div>
        </div>
        </div>) : (  <div className="d-flex  justify-content-center gap-5 my-5 ">
          {facultyMembers.map((facultyMember, index) => (
            <div
              key={index}
              className="card-faculty text-center position-relative" 
              data-aos={facultyMember.animation}
              style={{
                
                top: `${facultyMember.marginTop} `,
                background: `linear-gradient(180deg, ${facultyMember.iconColor} 32.78%,${facultyMember.iconbgColor} )`,
              }}
            >
              <div className="card-body " >
                <div className="mb-3">
                  <h5 className="card-title ">{facultyMember.name}</h5>
                  <p className="card-text ">{facultyMember.role}</p>
                  <div className="">Has worked with</div>
                </div>
                <div className="d-flex justify-content-center card-logo-outer">
                  {facultyMember.logos.map((logo, logoIndex) => (
                    <img
                      key={logoIndex}
                      src={logo}
                      className="card-logo"
                      alt={`Logo ${logoIndex}`}
                    />
                  ))}
                </div>

                <img
                  src={facultyMember.image}
                  className="card-images"
                  alt={facultyMember.name}
                />
              </div>
            </div>
          ))}
        </div>)
        } */}

      </div>

      <section id="Drive Growth" className="py-5 sm:py-6 px-0 overflow-hidden" data-aos="fade-up"
     data-aos-anchor-placement="top-center">
        <div className="container-xl">
          <div className="row gx-5">
            <div className="col-12 col-md">
              <div className="text-center mb-5">
                <div className="max-w-133">
                  <h2 className="text-uppercase fw-semibold text-muted">
                    EXPAND YOUR PROFESSIONAL NETWORK
                  </h2>
                  <h3 className="text-3xl fw-bold  text-black mt-2">
                    Join Our Thriving Global Learning Community
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div className="row  justify-content-center">
            <div className="col-12 col-md-4 mb-2">
              <div className="p-4 bg-white rounded-3 text-center">
                <div className="profession-icon bg-danger rounded p-1 mb-3">
                  <i className="bi bi-award text-white fs-2"></i>
                </div>
                <div className="profession-content">
                  <h4 className="text-primary">450,000+</h4>
                  <span className="text-base text-muted">
                    Professionals trained
                  </span>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4 mb-2">
              <div className="p-4 bg-white rounded-3 text-center">
                <div className="bg-success rounded profession-icon p-1 mb-3">
                  <i className="bi bi-globe text-white fs-2"></i>
                </div>
                <div className="profession-content">
                  <h4 className="text-primary">4,500+</h4>
                  <span className="text-base text-muted">Enterprise Clients</span>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4 mb-2">
              <div className="p-4 bg-white rounded-3 text-center">
                <div
                  className=" rounded profession-icon p-1 mb-3"
                  style={{ backgroundColor: "rgb(123 110 252)", objectFit:"cover" }}
                >
                  <i className="bi bi-gem text-white fs-2"></i>
                </div>
                <div className="profession-content">
                  <h4 className="text-primary">50+</h4>
                  <span className="text-base text-muted">
                    Countries and Counting
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="container mt-4 map-section">
            <div className="row">
              <div className="position-relative" >
                <img
                  alt="map"
                  loading="lazy"
                  decoding="async"
                  data-nimg="fill"
                  className="w-auto h-auto"
                  src="/images/mapbase.svg"
                  style={{
                    position: "relative",
                    height: "50%",
                    width: "50%",
                    color: "transparent",
                    
                  }}
                />
                {/* United States */}
                <div
                  className="position-absolute animate__animated animate__flash top-0 start-50 translate-middle-x scale-0"
                  style={{ animationDelay: "0s" }}
                >
                  <div className="position-relative">
                    <div className="ms-md-0 ms--8">
                      <div className="position-absolute z-index-10 rotate-180 translate-middle-x start-50 translate-middle-y border-12 border-bottom-10 ms-md-0 ms--13 border-x-transparent border-white"></div>
                      <div className="d-inline-flex align-items-center px-4 py-2 bg-white ms-md-0 ms--5  gap-3 rounded-3 shadow-lg">
                        <img
                          alt="KnowledgeHut learners from US"
                          loading="lazy"
                          width="50"
                          height="50"
                          decoding="async"
                          data-nimg="1"
                          className="rounded-circle"
                          src="/images/ee6.webp"
                          style={{ color: "transparent", objectFit:"cover" }}
                        />
                        <div className="d-flex flex-column gap-1 align-items-start">
                          <h6 className="fs-5 fw-bold text-dark m-0">122,072</h6>
                          <h6 className="fs-6 text-secondary">Learners</h6>
                        </div>
                      </div>
                    </div>
                    <div className="mt-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="41"
                        height="41"
                        viewBox="0 0 41 41"
                        fill="none"
                      >
                        <circle
                          opacity="0.16"
                          cx="20.028"
                          cy="20.0508"
                          r="20"
                          fill="#EE2C3C"
                        ></circle>
                        <circle
                          cx="20.028"
                          cy="20.0507"
                          r="10"
                          fill="#EE2C3C"
                        ></circle>
                      </svg>
                    </div>
                  </div>
                </div>
                {/* End United States */}

                {/* India */}
                <div
                  className="position-absolute animate__animated animate__flash top-50 start-50 translate-middle-x scale-0"
                  style={{ animationDelay: "0s" }}
                >
                  <div className="position-relative">
                    <div className="ms-md-0 ms--8">
                      <div className="position-absolute z-index-10 rotate-180 translate-middle-x start-50 translate-middle-y border-12 border-bottom-10 ms-md-0 ms--13 border-x-transparent border-white"></div>
                      <div className="d-inline-flex px-4 py-2 align-items-center bg-white ms-md-0 ms--5  gap-3 rounded-3 shadow-lg">
                        <img
                          alt="KnowledgeHut learners from India"
                          loading="lazy"
                          width="50"
                          height="50"
                          decoding="async"
                          data-nimg="1"
                          className="rounded-circle"
                          src="/images/ee5.webp"
                          style={{ color: "transparent" , objectFit:"cover" }}
                        />
                        <div className="d-flex flex-column gap-1 align-items-start">
                          <h6 className="fs-5 fw-bold text-dark m-0">237,213</h6>
                          <h6 className="fs-6 text-secondary">Learners</h6>
                        </div>
                      </div>
                    </div>
                    <div className="mt-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="41"
                        height="41"
                        viewBox="0 0 41 41"
                        fill="none"
                      >
                        <circle
                          opacity="0.16"
                          cx="20.028"
                          cy="20.0508"
                          r="20"
                          fill="#EE2C3C"
                        ></circle>
                        <circle
                          cx="20.028"
                          cy="20.0507"
                          r="10"
                          fill="#EE2C3C"
                        ></circle>
                      </svg>
                    </div>
                  </div>
                </div>
                {/* End India */}

                {/* United Kingdom */}
                <div
                  className="position-absolute animate__animated animate__flash bottom-50 end-50 translate-middle-x scale-0"
                  style={{ animationDelay: "0s" }}
                >
                  <div className="position-relative">
                    <div className="ms-md-0 ms--8">
                      <div className="position-absolute z-index-10 rotate-180 translate-middle-x start-50 translate-middle-y border-12 border-bottom-10 ms-md-0 ms--13 border-x-transparent border-white"></div>
                      <div className="d-inline-flex px-4 py-2 align-items-center bg-white ms-md-0 ms--5  gap-3 rounded-3 shadow-lg">
                        <img
                          alt="KnowledgeHut learners from UK"
                          loading="lazy"
                          width="50"
                          height="50"
                          decoding="async"
                          data-nimg="1"
                          className="rounded-circle"
                          src="/images/ee4.webp"
                          style={{ color: "transparent" , objectFit:"cover" }}
                        />
                        <div className="d-flex flex-column gap-1 align-items-start">
                          <h6 className="fs-5 fw-bold text-dark m-0">6,879</h6>
                          <h6 className="fs-6 text-secondary">Learners</h6>
                        </div>
                      </div>
                    </div>
                    <div className="mt-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="41"
                        height="41"
                        viewBox="0 0 41 41"
                        fill="none"
                      >
                        <circle
                          opacity="0.16"
                          cx="20.028"
                          cy="20.0508"
                          r="20"
                          fill="#EE2C3C"
                        ></circle>
                        <circle
                          cx="20.028"
                          cy="20.0507"
                          r="10"
                          fill="#EE2C3C"
                        ></circle>
                      </svg>
                    </div>
                  </div>
                </div>
                {/* End United Kingdom */}

                {/* Australia */}
                <div
                  className="position-absolute animate__animated animate__flash bottom-50 translate-middle-x scale-0"
                  style={{ animationDelay: "0s" ,left:"70%"}}
                >
                  <div className="position-relative">
                    <div className="ms-md-0 ms--8">
                      <div className="position-absolute z-index-10 rotate-180 translate-middle-x start-50 translate-middle-y border-12 border-bottom-10 ms-md-0 ms--13 border-x-transparent border-white"></div>
                      <div className="d-inline-flex px-4 py-2 align-items-center bg-white ms-md-0 ms--5  gap-3 rounded-3 shadow-lg">
                        <img
                          alt="KnowledgeHut learners from Australia"
                          loading="lazy"
                          width="50"
                          height="50"
                          decoding="async"
                          data-nimg="1"
                          className="rounded-circle"
                          src="/images/ee3.webp"
                          style={{ color: "transparent" , objectFit:"cover" }}
                        />
                        <div className="d-flex flex-column gap-1 align-items-start">
                          <h6 className="fs-5 fw-bold text-dark m-0">6,826</h6>
                          <h6 className="fs-6 text-secondary">Learners</h6>
                        </div>
                      </div>
                    </div>
                    <div className="mt-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="41"
                        height="41"
                        viewBox="0 0 41 41"
                        fill="none"
                      >
                        <circle
                          opacity="0.16"
                          cx="20.028"
                          cy="20.0508"
                          r="20"
                          fill="#EE2C3C"
                        ></circle>
                        <circle
                          cx="20.028"
                          cy="20.0507"
                          r="10"
                          fill="#EE2C3C"
                        ></circle>
                      </svg>
                    </div>
                  </div>
                </div>
                {/* End Australia */}

                {/* Malaysia */}
                <div
                  className="position-absolute animate__animated animate__flash bottom-50 end-0 translate-middle-x scale-0"
                  style={{ animationDelay: "0s" }}
                >
                  <div className="position-relative">
                    <div className="ms-md-0 ms--8">
                      <div className="position-absolute z-index-10 rotate-180 translate-middle-x start-50 translate-middle-y border-12 border-bottom-10 ms-md-0 ms--13 border-x-transparent border-white"></div>
                      <div className="d-inline-flex px-4 py-2 align-items-center bg-white ms-md-0 ms--5  gap-3 rounded-3 shadow-lg">
                        <img
                          alt="KnowledgeHut learners from Malaysia"
                          loading="lazy"
                          width="50"
                          height="50"
                          decoding="async"
                          data-nimg="   1"
                          className="rounded-circle"
                          src="/images/ee2.webp"
                          style={{ color: "transparent", objectFit:"cover" }}
                        />
                        <div className="d-flex flex-column gap-1 align-items-start">
                          <h6 className="fs-5 fw-bold text-dark m-0">4,501</h6>
                          <h6 className="fs-6 text-secondary">Learners</h6>
                        </div>
                      </div>
                    </div>
                    <div className="mt-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="41"
                        height="41"
                        viewBox="0 0 41 41"
                        fill="none"
                      >
                        <circle
                          opacity="0.16"
                          cx="20.028"
                          cy="20.0508"
                          r="20"
                          fill="#EE2C3C"
                        ></circle>
                        <circle
                          cx="20.028"
                          cy="20.0507"
                          r="10"
                          fill="#EE2C3C"
                        ></circle>
                      </svg>
                    </div>
                  </div>
                </div>
                {/* End Malaysia */}

               

                {/* Germany */}
                <div
                  className="position-absolute animate__animated animate__flash bottom-50 start-30  scale-0"
                  style={{ animationDelay: "0s" }}
                >
                  <div className="position-relative">
                    <div className="ms-md-0 ms--8">
                      <div className="position-absolute z-index-10 rotate-180 translate-middle-x start-50 translate-middle-y border-12 border-bottom-10 ms-md-0 ms--13 border-x-transparent border-white"></div>
                      <div className="d-inline-flex px-4 py-2 align-items-center bg-white ms-md-0 ms--5  gap-3 rounded-3 shadow-lg">
                        <img
                          alt="KnowledgeHut learners from Germany"
                          loading="lazy"
                          width="50"
                          height="50"
                          decoding="async"
                          data-nimg="1"
                          className="rounded-circle"
                          src="/images/ee.webp"
                          style={{ color: "transparent" , objectFit:"cover" }}
                        />
                        <div className="d-flex flex-column gap-1 align-items-start">
                          <h6 className="fs-5 fw-bold text-dark m-0">5,107</h6>
                          <h6 className="fs-6 text-secondary">Learners</h6>
                        </div>
                      </div>
                    </div>
                    <div className="mt-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="41"
                        height="41"
                        viewBox="0 0 41 41"
                        fill="none"
                      >
                        <circle
                          opacity="0.16"
                          cx="20.028"
                          cy="20.0508"
                          r="20"
                          fill="#EE2C3C"
                        ></circle>
                        <circle
                          cx="20.028"
                          cy="20.0507"
                          r="10"
                          fill="#EE2C3C"
                        ></circle>
                      </svg>
                    </div>
                  </div>
                </div>
                {/* End Germany */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ExpertsSection;
