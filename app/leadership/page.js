"use client";
import React, { useEffect } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

import { useDispatch, useSelector } from "react-redux";
import { fetchTeamLinks } from "../features/teamsData/teamsSlice"; // Named import
import { StorageLink } from "../components/apiLink";
import Link from "next/link";

const page = () => {
  const dispatch = useDispatch();
  const {
    data: teamlink,
    status,
    error,
  } = useSelector((state) => state.teamlink);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchTeamLinks());
    }
  }, [status, dispatch]); 

  useEffect(() => {
    window.scrollTo(0, 0);
  },   []);

  return (
    <> 
   <head>
    <title>Leadership - Ingenious Learn</title>
    <meta name="description" content="Meet the leadership team at Ingenious Learn, the visionaries and experts behind our platform." />
    <meta name="robots" content="index, follow" />

   
    <meta property="og:title" content="Leadership - Ingenious Learn" />
    <meta property="og:description" content="Discover the leadership team at Ingenious Learn, including the founders and key executives shaping the future of online education." />
    <meta property="og:image" content="/images/leadership-banner.jpg" />
    <meta property="og:url" content="https://www.ingeniouslearn.com/leadership" />
    <meta property="og:type" content="website" />
  
  </head>

      <section className="rows bg-fixed team-banner">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-7">
              <h1 className="text-white font-weight-bold home_h2 wow  fadeInDown   animated">
                {" "}
                Our Strength
              </h1>

              <p className="mt-2">Meet our team </p>
            </div>
          </div>
        </div>
      </section>
      <section className="breadcrumbs-main">
        {" "}
        <div className="container">
          <ul id="breadcrumb" className="breadcrumb">
            <li className="item-home">
              <Link className="bread-link bread-home" href="/" title="Home">
                Home
              </Link>
            </li>
            <li className="item-current item-31259"> Our Leadership</li>
          </ul>
        </div>
      </section>
      <div className="expert-wrap">
      <div className="container">
       <div className="title title_center">
            <h1>Our Experts</h1>
          </div>
      <div className="row">
            {teamlink?.map((expert, index) => (
              <div className="col-lg-3 col-md-6" key={index}>
                <div className="experts">
                  <div className="teamImg">
                    <img src={`${StorageLink}/${expert.img}`} alt="" />
                    <ul className="social-icons list-inline">
                      <li className="social-facebook">
                        <Link href="#">
                          <FaFacebookF aria-hidden="true" />
                        </Link>
                      </li>
                      <li className="social-twitter">
                        <Link href="#">
                          <FaTwitter aria-hidden="true" />
                        </Link>
                      </li>
                      <li className="social-linkedin">
                        <Link href="#">
                          <FaLinkedinIn aria-hidden="true" />
                        </Link>
                      </li>
                      <li className="social-googleplus">
                        <Link href="#">
                          <FaInstagram aria-hidden="true" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="team_content">
                    <h5>
                      <Link href="#">{expert.name}</Link>
                    </h5>
                    <p className="category">{expert.post}</p>
                  </div>
                </div>
              </div>
            ))}
                      </div>
        </div>
      </div>

     
    </>
  );
};

export default page;
