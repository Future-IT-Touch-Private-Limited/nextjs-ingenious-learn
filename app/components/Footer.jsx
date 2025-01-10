"use client";
import React, { useState, useEffect } from "react";
import { FaChevronRight } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { fetchFooterLinks } from "../features/footerLink/footerSlice";
import { BaseLink } from "../config/ApiLink";

import axios from "axios";
import Link from "next/link";
const Footer = () => {
  const [isOpenCompany, setIsOpenCompany] = useState(true);
  const [isOpenOfferings, setIsOpenOfferings] = useState(true);
  const [isOpenResources, setIsOpenResources] = useState(true);
  const dispatch = useDispatch();
  const {
    data: footerlinkes,
    status,
    error,
  } = useSelector((state) => state.footerLinks);

  const [contactDetails, setContactDetails] = useState([]);
  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchFooterLinks());
    }

  }, [dispatch, status]);

  useEffect(() => {
    // Fetch data from the backend
    const fetchSocialLinks = async () => {
      try {
        const response = await axios.get(`${BaseLink}/contactdetails`);
        setContactDetails(response.data[0]);
      } catch (error) {
        console.error("Error fetching social links:", error);
      }
    };

    fetchSocialLinks();
  }, []);

  const toggleList = (section) => {
    switch (section) {
      case "company":
        setIsOpenCompany(!isOpenCompany);
        break;
      case "offerings":
        setIsOpenOfferings(!isOpenOfferings);
        break;
      case "resources":
        setIsOpenResources(!isOpenResources);
        break;
      default:
        break;
    }
  };

  const { address, contact_number, email, social_links } = contactDetails;

  return (
    <>
      <section className=" bg-home-cta">
        <div className="container">
          <div className="row">
            <div className="col-12 ">
              <div className="d-md-flex  align-items-center justify-content-around ">
                <img
                  alt="img"
                  loading="lazy"
                  height="100"
                  decoding="async"
                  src="/images/footer.svg"
                  className="image-desktop"
                />

                <div className="text-center">
                  <div className="text-uppercase text-secondary-700 font-weight-bold small">
                    Got more questions? We've got answers!
                  </div>
                  <h4 className="text-dark font-weight-bold">
                    Book a Free Counselling Session today.
                  </h4>
                </div>
                <div className="d-flex align-items-center justify-content-around justify-content-md-between justify-content-sm-center">
                  <Link href="/contact-us" className="explore-btn">
                    Request a Call Back
                    <FaChevronRight className="ml-2 fas fa-chevron-right" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="footer-main">
        <div className="container ">
          <div className="row">
            <div className="col-md-3">
              <h5 className="font-weight-bold text-dark mb-3">
                Company{" "}
                <FaChevronRight
                  className="footer-icon"
                  onClick={() => toggleList("company")}
                />
              </h5>
              <ul className={`top-category ${isOpenCompany ? "show" : ""}`}>
                <li>
                  <Link href="/about-us" className="text-muted">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/training-partner" className="text-muted">
                    Become a Training Partner{" "}
                  </Link>
                </li>
                <li>
                  <Link href="/leadership" className="text-muted">
                    Our Team
                  </Link>
                </li>
                <li>
                  <Link href="/contact-us" className="text-muted">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy-policy"
                    className="font-weight-medium text-muted text-sm  cursor-pointer"
                  >
                    Our Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>

            {/* Offerings Section */}
            <div className="col-md-3">
              <h5 className="font-weight-bold text-dark mb-3">
                Offerings{" "}
                <FaChevronRight
                  className="footer-icon"
                  onClick={() => toggleList("offerings")}
                />
              </h5>
              <ul className={`top-category ${isOpenOfferings ? "show" : ""}`}>
                <li>
                  <Link href="/free-events" className="text-muted">
                     Events
                  </Link>
                </li>
                
                <li>
                  <Link href="/blog" className="text-muted">
                    Blog
                  </Link>
                </li>
                
                <li>
                  <Link href="/training-calendar" className="text-muted">
                    Training Calendar
                  </Link>
                </li>
              </ul>
            </div>

            {/* Resources Section */}

            {/* Newsletter and Connect with Us Section */}
            <div className="col-md-6">
              <h5 className="font-weight-bold text-dark mb-3">
                Get our weekly Newsletter
              </h5>
              <form className="footer-form">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Email"
                  />
                  <div className="input-group-append">
                    <button className="btn btn-dark" type="submit">
                      Subscribe <FaChevronRight />
                    </button>
                  </div>
                </div>
              </form>

              <div className="d-md-flex d-sm-block gap-5 mt-5">
                <div className="">
                  <h5 className="font-weight-bold mb-3">Connect with us</h5>
                  <ul className="d-flex gap-2">
                    {social_links?.LinkedIn && (
                      <li>
                        <Link href={social_links.LinkedIn} target="_blank">
                          <i className="inline-block f-icon-linkedin-large footer-icons"></i>
                        </Link>
                      </li>
                    )}
                    {social_links?.Facebook && (
                      <li>
                        <Link href={social_links.Facebook} target="_blank">
                          <i className="inline-block f-icon-facebook-large footer-icons"></i>
                        </Link>
                      </li>
                    )}
                    {social_links?.Instagram && (
                      <li>
                        <Link href={social_links.Instagram} target="_blank">
                          <i className="inline-block f-icon-instagram footer-icons"></i>
                        </Link>
                      </li>
                    )}
                    {social_links?.Twitter && (
                      <li>
                        <Link href={social_links.Twitter} target="_blank">
                          <i className="inline-block f-icon-twitter-large footer-icons"></i>
                        </Link>
                      </li>
                    )}
                    {social_links?.YouTube && (
                      <li>
                        <Link href={social_links.YouTube} target="_blank">
                          <i className="inline-block f-icon-youtube-large footer-icons"></i>
                        </Link>
                      </li>
                    )}
                  </ul>
                </div>
                <div className="">
                  <h5 className="font-weight-bold mb-3">We Accept</h5>
                  <ul className="d-flex gap-2 flex-wrap">
                    <li className="">
                      <i className="d-inline-block f-icon-paypal footer-icons"></i>
                    </li>
                    <li className="">
                      <i className="inline-block f-icon-american-express footer-icons"></i>
                    </li>
                    <li className="">
                      <i className="inline-block f-icon-master-card footer-icons"></i>
                    </li>
                    <li className="">
                      <i className="inline-block f-icon-visa footer-icons"></i>
                    </li>
                    <li className="">
                      <i className="inline-block f-icon-after-pay footer-icons"></i>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="row border-top pt-4">
            <div className="d-none d-md-block">
              <div>
                <div className="d-flex flex-column pb-3">
                  <div>
                    <div className="h5 text-dark font-weight-bold mb-3">
                      Top Categories
                    </div>
                    <ul className="d-flex flex-wrap pl-0">
                      {/* {  console.log('fwrffrfr3f34rf43r43t3',footerlinkes?.data[0]) }

                      {footerlinkes?.data?.[0]?.categories?.map((item) => (
                        <li key={item.id} className="top-services">

                          <Link href={`/courses/${item.slug}`}>
                          {item.name || "Category Name"}
                          </Link>
                          
                        </li>
                      ))} */}
                    </ul>
                  </div>
                  <div>
                    <div className="h5 text-dark font-weight-bold mb-3">
                      Top Courses
                    </div>
                    <ul className=" d-flex flex-wrap pl-0">
                    {/* {footerlinkes?.data?.[0]?.courses?.map((item) => (
                        <li key={item.id} className="top-services">

                          <Link href={`/${item.slug}`}>
                          {item.name || "Category Name"}
                          </Link>
                          
                        </li>
                      ))} */}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <section className=" mobile-hide-border">
            <div className="d-flex flex-column flex-md-row justify-content-center gap-2 align-items-center">
              <p className="text-xs text-muted text-center">
                © 2011-2024, Future It Touch Private Limited. All Rights
                Reserved
              </p>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Footer;
