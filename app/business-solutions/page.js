"use client";
import React, { useState, useEffect, useRef } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { CiUser, CiMail } from "react-icons/ci";
import { LuBuilding, LuPhoneCall } from "react-icons/lu";
import { RiArrowDropDownLine } from "react-icons/ri";
import { BaseLink } from "../config/ApiLink"; 
import Swal from "sweetalert2";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import axios from "axios";
function Trainee() {
  const [formData, setFormData] = useState({
    name: "",
    company_name: "",
    designation: "",
    email: "",
    contact_number: "",
    country: "",
    message: "",
  });

  const formRef = useRef(null);

  const handleScroll = () => {
    formRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const data = [
    {
      img: "/img1.svg",
      heading: "Customized Training Solutions",
      headinginfo:
        "Cyberyami's Customized Training Solutions unlock your team's full potential. Tailored to your organization's unique needs, they help you achieve training and development goals effectively. Benefits include:",
      subheading1: "Increased Productivity",
      subheading1data:
        "A well-trained workforce is a more productive one, leading to higher efficiency and superior results.",
      subheading2: "Employee Satisfaction",
      subheading2data:
        "Investing in employee development through tailored training fosters job satisfaction and increases retention.",
      subheading3: "Competitive Advantage",
      subheading3data:
        "Stay ahead in the ever-evolving business landscape with a skilled and adaptable workforce.",
      subheading4: "Cost-Efficiency",
      subheading4data:
        "Our programs are designed to maximize knowledge transfer while minimizing downtime, providing a cost-effective solution for your organization.",
    },
    {
      img: "/img2.svg",
      heading: "Skill Assessment Solutions",
      headinginfo:
        "In today's fast-paced business environment, upskilling and continuous learning are critical. The Cyberyami Training Program offers bite-sized, impactful learning experiences that fit into a busy workday. It benefits small startups and large corporations.",
      subheading1: "Enhanced Performance",
      subheading1data:
        "Targeted training to improve employee performance and productivity by addressing skill gaps.",
      subheading2: "Cost Savings",
      subheading2data:
        "Invest in training where it matters most, eliminating unnecessary spending on skills your team already possesses.",
      subheading3: "Talent Retention",
      subheading3data:
        "Demonstrate your commitment to employee development and increase retention rates.",
      subheading4: "Competitive Advantage",
      subheading4data:
        "Competitive Advantage Stay ahead in a rapidly changing business landscape by ensuring your workforce is equipped with the latest skills and knowledge.",
    },

    {
      img: "/img3.svg",
      heading: "SkillUp Program",
      headinginfo:
        "Cyberyami offers tailored business solutions to boost your performance, productivity, and competitiveness. Contact us to explore our custom training, skill assessment, and training programs. Your goals are our mission.",
      subheading1: "Time-Efficient Learning",
      subheading1data:
        "Achieve more in less time with microlearning modules that deliver targeted content quickly and effectively.",
      subheading2: "Flexibility and Accessibility",
      subheading2data:
        "Training is available on various devices, ensuring accessibility for your employees, regardless of their location.",
      subheading3: "Engagement and Retention",
      subheading3data:
        "Bite-sized learning is engaging and memorable, increasing knowledge retention and real-world application.",
      subheading4: "Cost-Effective Upskilling",
      subheading4data:
        "Competitive Advantage Stay ahead in a rapidly changing business landscape by ensuring your workforce is equipped with the latest skills and knowledge.",
    },
  ];

  const [countries, setCountries] = useState([]);

  useEffect(() => {
    // Fetch countries from an API
    const fetchCountries = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all"); // Example API
        const data = await response.json();
        setCountries(data.map((country) => country.name.common)); // Adjust as necessary
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };

    fetchCountries();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(formData)

    try {
      const response = await axios.post(`${BaseLink}/contacts`, formData);


      if (response.status === 200) {
        Swal.fire({
          icon: "success",
          title: "Success!",
          text: "Contact information has been saved successfully!",
        });
        setFormData({
          name: "",
          company_name: "",
          designation: "",
          email: "",
          contact_number: "",
          country: "",
          message: "",
        });
      } else {
        throw new Error("Failed to save contact information");
      }
    } catch (error) {


      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.response?.data?.message || error.message,
      });
    }
  };

  const handleChangee = (phone) => {
    setFormData({
      ...formData,
      contact_number: phone, // Updating phoneNumber field correctly
    });
  };

  return (<>
   <head>
        <title>Business Solutions - Ingenious Learn</title>
        <meta name="description" content="Discover business solutions offered by Ingenious Learn to help your company achieve its goals through innovative learning strategies and customized training programs." />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Business Solutions - Ingenious Learn" />
        <meta property="og:description" content="Explore our customized business solutions that help organizations improve employee skills, productivity, and growth through tailored educational programs." />
        <meta property="og:image" content="/images/business-solutions-banner.jpg" />
        <meta property="og:url" content="https://www.ingeniouslearn.com/business-solutions" />
        <meta property="og:type" content="website" />
        
        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Business Solutions - Ingenious Learn" />
        <meta name="twitter:description" content="Learn about Ingenious Learn's business solutions designed to enhance workplace training, development, and overall organizational performance." />
        <meta name="twitter:image" content="/images/business-solutions-banner.jpg" />
      </head>
    <div className="">
      <section
        className="bggradian d-flex flex-column gap-4 align-items-center py-5 px-4 "
        style={{
          background: `#f4f6fd`,
        }}
      >
        <b
          className="fs-1 text-center px-md-5"
          style={{ lineHeight: "1.5", fontWeight: "bold" }}
        >
          Unlocking Success through Tailored Business Solutions.
        </b>
        <p
          className="fs-5 text-center text-secondary px-md-5"
          style={{ maxWidth: "800px" }}
        >
          Cyberyami offers customized business solutions to help organizations
          succeed. Whether you're a startup or a corporation, our tailored
          solutions will give you a strategic edge.
        </p>
        <button
          className="p-3 px-5 border-0 text-light rounded-pill bg-primary shadow-lg d-flex gap-2 align-items-center justify-content-center"
          style={{ transition: "all 0.3s ease", fontSize: "1.1rem" }}
          onClick={handleScroll}
        >
          Get in Touch <MdKeyboardArrowDown />
        </button>
      </section>

      <div className="">
        <section className="my-5">
          {data.map((info, index) => {
            return (
              <div className="container">
                <div className="row align-items-center">
                  <div
                    className={`col-lg-6 p-3 d-flex flex-column gap-3 ${
                      index % 2 === 0 ? "order-lg-1" : "order-lg-2"
                    }`}
                  >
                    <b className="fs-4 bgg px-2 py-1">{info.heading}</b>
                    <p>{info.headinginfo}</p>

                    {[1, 2, 3, 4].map((num) => (
                      <div className="row align-items-start" key={num}>
                        <div className="col-3">
                          <img
                            src={`/${num}.png`}
                            alt=""
                            style={{
                              backgroundColor: "aliceblue",
                              height: "100px",
                              width: "auto",
                              objectFit: "contain",
                              padding: "20px",
                              borderRadius: "8px",
                            }}
                          />
                        </div>
                        <div className="col-9 d-flex flex-column gap-1">
                          <b className="fs-6">{info[`subheading${num}`]}</b>
                          <p className="text-secondary">
                            {info[`subheading${num}data`]}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div
                    className={`col-lg-6 d-flex align-items-center ${
                      index % 2 === 0
                        ? "order-2 justify-content-end"
                        : "order-1 justify-content-start"
                    }`}
                  >
                    <img src={info.img} alt="" className="svgiconwid" />
                  </div>
                </div>
              </div>
            );
          })}
        </section>

        <section
          className="bgimg d-flex justify-content-center align-itemes-center"
          style={{
            background: `#f4f6fd`,
          }}
          ref={formRef}
        >
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6 col-md-8">
                <form
                  onSubmit={handleSubmit}
                  className="bg-light my-5 py-5 d-flex flex-column gap-4 p-4 rounded-3 shadow-lg"
                >
                  <h1 className="text-center mb-4">Get in touch with us</h1>

                  <div className="position-relative border border-secondary rounded-3 d-flex align-items-center px-3">
                    <CiUser className="me-2" />
                    <input
                      type="text"
                      name="name"
                      placeholder="Full Name"
                      value={formData.name}
                      onChange={handleChange}
                      className="form-control border-0 ps-1"
                      required
                    />
                  </div>

                  <div className="d-flex flex-column flex-md-row gap-3">
                    <div className="position-relative w-100  border border-secondary rounded-3 d-flex align-items-center px-3">
                      <LuBuilding className="me-2" />
                      <input
                        type="text"
                        name="company_name"
                        placeholder="Company Name"
                        value={formData.company_name}
                        onChange={handleChange}
                        className="form-control border-0 ps-1"
                        required
                      />
                    </div>
                    <div className="position-relative  w-100  border border-secondary rounded-3 d-flex align-items-center px-3">
                      <CiUser className="me-2" />
                      <input
                        type="text"
                        name="designation"
                        placeholder="Designation"
                        value={formData.designation}
                        onChange={handleChange}
                        className="form-control border-0 ps-1"
                        required
                      />
                    </div>
                  </div>

                  <div className="position-relative border border-secondary rounded-3 d-flex align-items-center px-3">
                    <CiMail className="me-2" />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleChange}
                      className="form-control border-0 ps-1"
                      required
                    />
                  </div>

                  <div className="position-relative border border-secondary rounded-3 d-flex align-items-center px-3">
                    <LuPhoneCall className="me-2" />
                    {/* <input
                      type="text"
                      name="contact_number"
                      placeholder="Contact"
                      value={formData.contact_number}
                      onChange={handleChange}
                      className="form-control border-0 ps-1"
                      required
                    /> */}
                    <PhoneInput
                      country={"in"}
                      value={formData.contact_number}
                      onChange={(phone) => handleChangee(phone)}
                      inputProps={{
                        name: "contact_number",
                        required: true,
                        className: "form-control padding-left-10", // Keep this for the actual input field
                        placeholder: "Enter your phone number",
                      }}
                      enableSearch={true}
                      inputClass="w-100 border-dark" // Apply custom styles for the input field
                    />
                  </div>

                  <div className="position-relative border border-secondary rounded-3">
                    <select
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      className="form-control border-0 px-3"
                      required
                    >
                      <option value="">Select Country</option>
                      {countries.map((country, index) => (
                        <option key={index} value={country}>
                          {country}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <textarea
                      name="message"
                      rows="4"
                      placeholder="Message"
                      value={formData.message}
                      onChange={handleChange}
                      className="form-control"
                      required
                    ></textarea>
                  </div>

                  <div className="text-center">
                    <button
                      type="submit"
                      className="btn btn-success text-light px-5 py-2 fs-5"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
    </>
  );
}

export default Trainee;
