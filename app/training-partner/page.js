"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const FormMain = () => {
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

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
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
              <Link className="bread-link bread-home" href="" title="Home">
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
                    placeholder: "Enter your Name",
                  },
                  {
                    name: "last_name",
                    label: "Last name",
                    iconClass: "icon-fullname",
                    placeholder: "Enter your Name",
                  },
                  {
                    name: "job_title",
                    label: "Job Title",
                    iconClass: "icon-fullname",
                    placeholder: "Enter your Name",
                  },
                  {
                    name: "email",
                    label: "E-mail",
                    iconClass: "icon-email",

                    placeholder: "Enter your Name",
                  },
                  {
                    name: "company",
                    label: "Company",
                    iconClass: "icon-fullname",
                    placeholder: "Enter your Name",
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
                        <option value="" selected>
                          Best Classifies Your Org
                        </option>
                        <option value="1">Corporate</option>
                        <option value="2">Training Company</option>
                        <option value="3">IT Vendor(HW/SW)</option>
                        <option value="4">IT Service Provider</option>
                        <option value="5">System Integrator</option>
                        <option value="6">Consultancy</option>
                        <option value="7">Reseller</option>
                        <option value="8">University</option>
                        <option value="9">Government</option>
                        <option value="10">Trainer</option>
                        <option value="11">Other</option>
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
                        <option value="">Select City</option>
                        <option value="15">Bangalore</option>
                        <option value="533">Lucknow</option>
                        <option value="25">Pune</option>
                        <option value="20">Hyderabad</option>
                        <option value="16">Chennai</option>
                        <option value="23">Mumbai</option>
                        <option value="18">Delhi</option>
                        <option value="22">Kolkata</option>
                        <option value="14">Ahmedabad</option>
                        <option value="17">Cochin</option>
                        <option value="19">Gurgaon</option>
                        <option value="21">Chandigarh</option>
                        <option value="24">Noida</option>
                        <option value="26">Trivandrum</option>
                        <option value="27">Visakhapatnam</option>
                        <option value="541">Patna</option>
                        <option value="418">Indore</option>
                        <option value="455">Bhubaneswar</option>
                        <option value="459">Jaipur</option>
                        <option value="467">Vadodara</option>
                        <option value="468">Coimbatore</option>
                        <option value="214">Surat</option>
                        <option value="473">Goa</option>
                        <option value="477">Nashik</option>
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
                        <option value="" selected>
                          Primary Interest
                        </option>
                        <option value="1">
                          Become an Knowledgehut Exam Center
                        </option>
                        <option value="2">
                          Become an Knowledgehut Partner/Reseller
                        </option>
                        <option value="3">
                          Become an Knowledgehut Instructor
                        </option>
                        <option value="4">Become a content Partner</option>
                        <option value="5">Become an Affiliate</option>
                        <option value="6">
                          Discuss Training Needs For My Organization
                        </option>
                        <option value="7">License eLearning Library</option>
                        <option value="8">License eLearning Material</option>
                        <option value="9">License Training Material</option>
                        <option value="10">Other</option>
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
                        <option value="" selected>
                          Training Interest
                        </option>
                        <option value="1">
                          I Am Looking For Training For Myself
                        </option>
                        <option value="2">
                          I Am Looking For Training For My Team
                        </option>
                        <option value="3">
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
                <span>Send</span> <img src="/images/right-arrow-icon.webp" alt="" />
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
