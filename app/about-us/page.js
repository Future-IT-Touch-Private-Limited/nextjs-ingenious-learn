"use client";
import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { fetechAbout } from "../features/aboutData/aboutSlicer";
import { StorageLink } from "../components/apiLink";
import Link from "next/link";

const AboutUs = () => {
  const dispatch = useDispatch();
  const { data: about, status, error } = useSelector((state) => state.about);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetechAbout());
    }
  }, [status, dispatch]);

  if (status === "loading") {
    return (
      <div className="loading">
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <>
    <head>
        <title>About Us - ingenious learn</title>
        <meta name="description" content="Learn more about ingenious-learn, our mission, and our values." />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="About Us - ingenious-learn" />
        <meta property="og:description" content="Discover who we are and what we stand for at My Company." />
        <meta property="og:image" content="/images/about-us-banner.jpg" />
        <meta property="og:url" content="https://www.mycompany.com/about" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Us - My Company" />
        <meta name="twitter:description" content="Get to know My Company and our story." />
        <meta name="twitter:image" content="/images/about-us-banner.jpg" />
      </head>
      <section className=" about-us-banner static-banner text-center">
        <div className="container">
          <h1 className="">About Us</h1>
          <ul className="breadcrumb about-us  justify-content-center">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <span>about us</span>
            </li>
          </ul>
        </div>
      </section>
      <div className="overview">
        <div className="container">
          <h2 className="section-heading">Overview</h2>

          <p dangerouslySetInnerHTML={{ __html: about[0]?.overview_1 }}></p>
        </div>
      </div>

      <div className="who-we-are nitro-offscreen" id="who-we-are">
        <div className="container">
          <h2 className="section-heading">What we offer</h2>
          <h4 className="text-center">What</h4>
          <div className="row">
            <div className="col-md-6 col-sm-6">
              <div className="about-us-image-big">
                {/* <img 
            alt="about us image" 
            src={about2}
            className=" lazyloaded" 
            decoding="async" 
            id="MTc4NToxNTk=-1" 
          />
          <img 
            alt="about us image" 
            src="https://cdn-cllme.nitrocdn.com/fsJtPHuAIrjqkSrOmOGUpPSluVVKYWgR/assets/images/optimized/rev-267fdac/www.knowledgehut.com/assets/images/trainer-images/about-us-who-we-are.png" 
            className="about-us-image-small lazyloaded" 
            decoding="async" 
            id="MTc4NTozMjQ=-1" 
          /> */}

                {about[0]?.img_2.map((item, index) => (
                  <>
                    <img
                      alt="about us image"
                      src={`${StorageLink}/${item}`}
                      className={`${
                        index == 0
                          ? "lazyloaded"
                          : "about-us-image-small lazyloaded"
                      }`}
                      decoding="async"
                      id="MTc4NTozMjQ=-1"
                    />
                  </>
                ))}
              </div>
            </div>
            <div className="col-md-6 col-sm-6">
              <div className="who-we-are-content">
                <p
                  dangerouslySetInnerHTML={{ __html: about[0]?.overview_2 }}
                ></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="what-we-do nitro-offscreen" id="what-we-do">
        <div className="container">
          <h2 className="section-heading">How we do it</h2>
          <h4 className="text-center">How</h4>
          <div className="row">
            <div className="col-md-6 col-sm-6 col-md-pull-6 col-sm-pull-6">
              <div className="what-we-do-content">
                <p
                  dangerouslySetInnerHTML={{ __html: about[0]?.overview_3 }}
                ></p>
              </div>
            </div>
            <div className="col-md-6 col-sm-6 col-md-push-6 col-sm-push-6">
              <div className="about-us-image-big">
                {about[0]?.img_3.map((item, index) => (
                  <>
                    <img
                      alt="about us image"
                      src={`${StorageLink}/${item}`}
                      className={`${
                        index == 0
                          ? "lazyloaded"
                          : "about-us-image-small lazyloaded"
                      }`}
                      decoding="async"
                      id="MTc4NTozMjQ=-1"
                    />
                  </>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <Testimonial /> */}
    </>
  );
};

export default AboutUs;
