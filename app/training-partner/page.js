"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { BaseLink } from "../config/ApiLink";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

const FormMain = () => {
  const router = useRouter();

  // useEffect(() => {
  //   if (router.isReady) {
  //     console.log(router.query);
  //   }
  // }, [router]);

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    job_title: "",
    email: "",
    company: "",
    best_classifies_id: "",
    city_id: "",
    phone: "",
    primary_interest_id: "",
    training_interest_id: "",

    query: "",
    agree_gdpr: false,
    whatsapp_subscription_status: true,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      const response = await axios.post(`${BaseLink}/contact-form`, formData);
      console.log(response);

      Swal.fire(
        "Success",
        "User details submitted successfully",
        "success"
      ).then(() => {
        router.push("/");
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      Swal.fire({
        title: "Error!",
        text: "There was an error submitting your form. Please try again.",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
    <head>
        <title>Training Partners - Ingenious Learn</title>
        <meta name="description" content="Discover our trusted training partners who help us deliver top-quality learning experiences at Ingenious Learn." />
        <meta name="robots" content="index, follow" />
        
        <meta property="og:title" content="Training Partners - Ingenious Learn" />
        <meta property="og:description" content="Meet our training partners who collaborate with Ingenious Learn to provide high-quality courses and workshops." />
        <meta property="og:image" content="/images/training-partner-banner.jpg" />
        <meta property="og:url" content="https://www.ingeniouslearn.com/training-partner" />
        <meta property="og:type" content="website" />
      
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Training Partners - Ingenious Learn" />
        <meta name="twitter:description" content="Discover our trusted training partners at Ingenious Learn who help provide top-tier educational content and experiences." />
        <meta name="twitter:image" content="/images/training-partner-banner.jpg" />
    </head>
    
    <section className="rows bg-fixed privacy-banner">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-7">
              <h1 className="text-white font-weight-bold home_h2 wow  fadeInDown   animated">
                {" "}
                Become a training partner
              </h1>

              <p className="mt-2 text-light">PARTNER PROGRAMS </p>
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
            <li className="item-current item-31259">
              {" "}
              Become a training partner
            </li>
          </ul>
        </div>
      </section>

      <div className="container">
        <div className="row">
          <div className="col-xs-12 ">
            <article
              id="post-29950"
              className="post-29950 page type-page status-publish hentry"
            >
              <header className="entry-header">
                <h1 className="entry-title">Become A Training Partner</h1>
              </header>
              <div className="entry-content">
                <div className="privacy_details">
                  <p>
                    At KnowledgeHut, we have flexible partnership programs that
                    are ideal for IT software resellers, training organisations,
                    trainers and software institutions who wish to seek business
                    growth. If you are interested in expanding your product
                    portfolio instantly, and increasing your revenues
                    multi-fold, then you are at the right place!
                  </p>

                  <p>
                    <strong>BECOME A CHANNEL PARTNER</strong>
                  </p>
                  <p>
                    We offer a diverse product portfolio with courses delivered
                    by trainers who have industry experience and a passion for
                    sharing their knowledge. Our delivery methods are flexible
                    and combine face-to-face classroom and virtual training
                    sessions, ensuring that your customers get training suited
                    to their learning style, needs, location and budget.
                  </p>
                  <ul>
                    <li>Boost your product portfolio</li>
                    <li>Give your sales and sales margins an added impetus</li>
                    <li>Create incremental and recurring revenue</li>
                    <li>
                      Eliminate the need for your sales force to become training
                      experts, as our managers are there to help!
                    </li>
                    <li>Exponentially increase client satisfaction</li>
                    <li>
                      Achieve quick-to-market results with minimal investment
                    </li>
                  </ul>
                  <p>
                    <strong>PARTNER PROGRAMS</strong>
                  </p>

                  <p>
                    The KnowledgeHut Partner Program constitutes two important
                    pillars in the partner portfolio: the Referral Partner and
                    Reseller Partner. You can opt for one that suits your
                    preference:
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="contact-us-form">
          <div className="bg-shadow no-modal-form">
            <h2 className="section-heading text-center">
              Partnership Interest Form
            </h2>
            <form action="" className="form-list" onSubmit={handleSubmit}>
              <div className="row">
                {[
                  {
                    name: "first_name",
                    label: "First name",
                    iconClass: "icon-fullname",
                    placeholder: "Enter your First Name ",
                  },
                  {
                    name: "last_name",
                    label: "Last name",
                    iconClass: "icon-fullname",
                    placeholder: "Enter your Last Name",
                  },
                  {
                    name: "job_title",
                    label: "Job Title",
                    iconClass: "icon-fullname",
                    placeholder: "Enter your Job Title",
                  },
                  {
                    name: "email",
                    label: "E-mail",
                    iconClass: "icon-email",
                    placeholder: "Enter your Email",
                  },
                  {
                    name: "company",
                    label: "Company",
                    iconClass: "icon-fullname",
                    placeholder: "Enter your Company",
                  },
                ].map((input) => (
                  <div className="col-md-6 col-sm-6" key={input.name}>
                    <div className="form-group input-field">
                      <input
                        type="text"
                        className="form-control"
                        maxLength="100"
                        name={input.name}
                        value={formData[input.name]}
                        placeholder={input.placeholder}
                        onChange={handleChange}
                        required
                      />
                      <i
                        className={`icons icons-contact ${input.iconClass}`}
                      ></i>
                      <label>{input.label}</label>
                    </div>
                  </div>
                ))}
                <div className="col-md-6 col-sm-6">
                  <div className="form-group">
                    <div className="right-inner-addon">
                      <i className="icons icons-contact icon-select"></i>
                      <i className="icons select-icon"></i>
                      <select
                        name="best_classifies_id"
                        className="form-control"
                        value={formData.best_classifies_id}
                        onChange={handleChange}
                      >
                        <option value="Best Classifies Your Org" defaultValue>
                          Best Classifies Your Org
                        </option>
                        <option value="Corporate">Corporate</option>
                        <option value="Training Company">
                          Training Company
                        </option>
                        <option value="IT Vendor">IT Vendor(HW/SW)</option>
                        <option value="IT Service Provider">
                          IT Service Provider
                        </option>
                        <option value="System Integrator">
                          System Integrator
                        </option>
                        <option value="Consultancy">Consultancy</option>
                        <option value="Reseller">Reseller</option>
                        <option value="University">University</option>
                        <option value="Government">Government</option>
                        <option value="Trainer">Trainer</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-sm-6">
                  <div className="form-group">
                    <div className="right-inner-addon">
                      <i className="icons icons-contact icon-select"></i>
                      <i className="icons select-icon"></i>
                      <select
                        name="city_id"
                        className="form-control"
                        value={formData.city_id}
                        onChange={handleChange}
                      >
                        <option value="" defaultValue>
                          Select City
                        </option>
                        <option value="Bangalore">Bangalore</option>
                        <option value="Lucknow">Lucknow</option>
                        <option value="Pune">Pune</option>
                        <option value="Hyderabad">Hyderabad</option>
                        <option value="Chennai">Chennai</option>
                        <option value="Mumbai">Mumbai</option>
                        <option value="Delhi">Delhi</option>
                        <option value="Kolkata">Kolkata</option>
                        <option value="Ahmedabad">Ahmedabad</option>
                        <option value="Cochin">Cochin</option>
                        <option value="Gurgaon">Gurgaon</option>
                        <option value="Chandigarh">Chandigarh</option>
                        <option value="Noida">Noida</option>
                        <option value="Trivandrum">Trivandrum</option>
                        <option value="Visakhapatnam">Visakhapatnam</option>
                        <option value="Patna">Patna</option>
                        <option value="Indore">Indore</option>
                        <option value="Bhubaneswar">Bhubaneswar</option>
                        <option value="Jaipur">Jaipur</option>
                        <option value="Vadodara">Vadodara</option>
                        <option value="Coimbatore">Coimbatore</option>
                        <option value="Surat">Surat</option>
                        <option value="Goa">Goa</option>
                        <option value="Nashik">Nashik</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-sm-6">
                  <div className="form-group input-field">
                    <input
                      type="text"
                      className="form-control"
                      maxLength="100"
                      name="phone"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={handleChange}
                      onKeyPress={(e) => {
                        const charCode = e.charCode;
                        if (
                          (charCode >= 48 && charCode <= 57) ||
                          e.keyCode === 8 ||
                          e.keyCode === 46 ||
                          e.keyCode === 37 ||
                          e.keyCode === 39
                        ) {
                          return true;
                        }
                        return false;
                      }}
                      required
                    />
                    <i className="icons icons-contact icon-phone"></i>
                    <label>Phone</label>
                  </div>
                </div>
                <div className="col-md-6 col-sm-6">
                  <div className="form-group">
                    <div className="right-inner-addon">
                      <i className="icons icons-contact icon-select"></i>
                      <i className="icons select-icon"></i>
                      <select
                        name="primary_interest_id"
                        className="form-control"
                        value={formData.primary_interest_id}
                        onChange={handleChange}
                      >
                        <option value="" defaultValue>
                          Primary Interest
                        </option>
                        <option value="Become an Knowledgehut Exam Center">
                          Become an Knowledgehut Exam Center
                        </option>
                        <option value="Become an Knowledgehut Partner/Reseller">
                          Become an Knowledgehut Partner/Reseller
                        </option>
                        <option value="Become an Knowledgehut Instructor">
                          Become an Knowledgehut Instructor
                        </option>
                        <option value="Become a content Partner">
                          Become a content Partner
                        </option>
                        <option value="Become an Affiliate">
                          Become an Affiliate
                        </option>
                        <option value=" Discuss Training Needs For My Organization">
                          Discuss Training Needs For My Organization
                        </option>
                        <option value="License eLearning Library">
                          License eLearning Library
                        </option>
                        <option value="License eLearning Material">
                          License eLearning Material
                        </option>
                        <option value="License Training Material">
                          License Training Material
                        </option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-sm-6">
                  <div className="form-group">
                    <div className="right-inner-addon">
                      <i className="icons icons-contact icon-select"></i>
                      <i className="icons select-icon"></i>
                      <select
                        name="training_interest_id"
                        className="form-control"
                        value={formData.training_interest_id}
                        onChange={handleChange}
                      >
                        <option value="" defaultValue>
                          Training Interest
                        </option>
                        <option value="I Am Looking For Training For Myself">
                          I Am Looking For Training For Myself
                        </option>
                        <option value="I Am Looking For Training For My Team">
                          I Am Looking For Training For My Team
                        </option>
                        <option value="I Am Looking For Training For My Customers">
                          I Am Looking For Training For My Customers
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 col-sm-12">
                  <div className="form-group">
                    <textarea
                      placeholder="Message"
                      name="query"
                      rows="4"
                      className="form-control"
                      value={formData.query}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                </div>

                <div
                  className="col-md-12 col-sm-12 col-xs-12"
                  data-id="whatsapp-block"
                >
                  <div className="checkbox-input">
                    <input
                      id="whatsapp-checkbox-layout"
                      className="styled"
                      name="whatsapp_subscription_status"
                      type="checkbox"
                      value="1"
                      checked={formData.whatsapp_subscription_status}
                      onChange={handleChange}
                    />
                    <span>I want to receive updates directly on WhatsApp</span>
                  </div>
                  <p className="submit-agree hidden-xs hidden-sm">
                    By tapping submit, you agree to KnowledgeHut{" "}
                    <Link href="/privacy-policy">Privacy Policy</Link> and{" "}
                    <Link target="_blank" href="">
                      Terms & Conditions
                    </Link>
                  </p>
                </div>
              </div>

              <div className="d-flex  justify-content-center mt-5 ">
                <button
                  type="submit"
                  className="btn-send-training-partner waves-effect waves-light  "
                >
                  <span>Send</span>{" "}
                  <img src="/images/right-arrow-icon.webp" alt="" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormMain;
