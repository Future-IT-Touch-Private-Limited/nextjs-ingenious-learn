"use effect"

import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Assuming Swiper library is used

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CourseSwiper = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 968);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ],
  };

  return (
    <>
      {/* <section id="awards-section" className="pt-5  ">
        <div className="container">
          <div className="row">
            <div className="mb-3 domain-content position-relative">
              <div className="max-w-133">
                <h2 className="text-sm text-uppercase font-semibold text-muted text-center">
                  upGrad Awards and Recognition
                </h2>
                <h3 className="text-3xl font-weight-bold text-black mt-3 text-center">
                  Our Commitment to Quality, Reflected in Accolades
                </h3>
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

            <div className="mai-hero mai-hero-third">
              <div className="marquee">
                <div className="marquee-content">
                  {awards.map((award) => (
                    <div key={award.id} className="my-4">
                      <div className="award-card shadow-netral ">
                        <img
                          src={award.imageUrl}
                          alt={award.title}
                          className="card-img-top"
                        />
                        <div className="award-body">
                          <h5 className="">{award.title}</h5>
                          <p className="">{award.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="d-flex justify-content-center mt-5">
            <div className="d-flex align-items-center justify-content-center position-relative mb-3 w-100 ">
              <div
                className="position-absolute top-50 start-0 end-0 border-top "
                style={{ transform: "translateY(-50%)", height: "1px" }}
              ></div>
              <span
                className="px-3 py-2 bg-white text-secondary position-relative"
                style={{ zIndex: 1 }}
              >
                We steal the spotlight sometimes, but our learners are the real
                stars.
              </span>
            </div>
          </div>

          <div className="economics-container">
            <Slider {...settings}>
              {readmoreData.map((item) => (
                <div key={item.id}>
                  <div className="upgrade-main swiper-slide swiper-slide-visible swiper-slide-active mt-3">
                    <div
                      className="position-relative overflow-hidden p-3 mb-5  d-flex justify-content-center align-items-center w-100 shadow-netral"
                      style={{ height: "152px" }}
                    >
                      {isMobile ? (
                        <div className="d-flex gap-3">
                          <div className="d-flex justify-content-center align-items-center flex-column gap-3">
                            <div className="rounded-md overflow-hidden">
                            <img
                                alt={item.title}
                                loading="lazy"
                                decoding="async"
                                className=" rounded"
                                sizes="100vw"
                                srcSet={item.imageUrl}
                                style={{
                                  height: "90px",
                                  width: "80px",
                                  inset: "0px",
                                  color: "transparent",
                                }}
                              />
                            </div>
                            
                          </div>
                          <div className="d-flex justify-content-between align-items-center flex-column">
                            <div>
                            <h5 className="fs-5 lh-1 bg-white text-dark fw-bold mb-2">
                              {item.title}
                            </h5>
                            <span className="fs-6 lh-base text-muted">
                              {item.description}
                            </span>
                            </div>
                           
                          </div>
                        </div>
                      ) : (
                        <div className="d-flex gap-3">
                          <div>
                            <div
                              className="position-relative rounded"
                              style={{ width: "120px", height: "120px" }}
                            >
                              <img
                                alt={item.title}
                                loading="lazy"
                                decoding="async"
                                className="w-100 h-100 rounded"
                                sizes="100vw"
                                srcSet={item.imageUrl}
                                style={{
                                  position: "absolute",
                                  height: "100%",
                                  width: "100%",
                                  inset: "0px",
                                  color: "transparent",
                                }}
                              />
                            </div>
                          </div>
                          <div className="d-flex justify-content-center flex-column">
                            <h5 className="fs-5 lh-1 bg-white text-dark fw-bold mb-2">
                              {item.title}
                            </h5>
                            <span className="fs-6 lh-base text-muted">
                              {item.description}
                            </span>
                          </div>
                          <div className="d-flex justify-content-center gap-3 flex-column align-items-center">
                            <div
                              className="position-relative"
                              style={{ width: "130px", height: "28px" }}
                            >
                              <img
                                alt="icon-share"
                                loading="lazy"
                                decoding="async"
                                className="w-100 h-100"
                                src={item.logoUrl}
                                style={{
                                  position: "absolute",
                                  height: "100%",
                                  width: "100%",
                                  objectFit: "contain",
                                  inset: "0px",
                                  color: "transparent",
                                }}
                              />
                            </div>
                            <Link
                             
                              to={item.articleUrl}
                              className="d-flex gap-2 justify-content-center cursor-pointer align-items-center border border-1 gap-1  shadow rounded-pill px-3"
                              style={{ height: "32px" }}
                            >
                              <p className="read-btn">Read more</p>
                              <i className="bi bi-box-arrow-up-right fs-8"></i>
                            </Link>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default CourseSwiper;
