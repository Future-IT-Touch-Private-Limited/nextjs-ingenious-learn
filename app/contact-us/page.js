"use client";
import { useEffect, useState } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaBasketballBall,
  FaLocationArrow,
  FaPhoneVolume,
  FaEnvelope,
} from "react-icons/fa";
import axios from "axios";
import { BaseLink } from "../config/ApiLink";

import { Swal } from "sweetalert2";
import Link from "next/link";

const ContactUs = () => {
  const [logo, setLogo] = useState(null);
  const [contactDetails, setContactDetails] = useState("");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  useEffect(() => {
  
    const fetchLogo = async () => {
      try {
        

        const response = await axios.get(
          `https://admin.ingeniouslearn.com/api/v1/get-logo-favicon`
        );

       

        setLogo(response.data.data.logo_path);
      } catch (err) {
        console.error("Error fetching logo:", err);
      } finally {
      }
    };

    fetchLogo();
  }, []);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Handle form submission logic here

  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const { name, email, phonenumber } = userRes;
    try {
      // Send a POST request with the user data
      const response = await axios.post(`${BaseLink}/submitrespons`, {
        name,
        email,
        phonenumber,
        message,
      });

      // If successful, show a SweetAlert confirmation
      Swal.fire({
        title: "Success!",
        text: "Your form has been submitted successfully.",
        icon: "success",
        confirmButtonText: "OK",
      });

      setName(" ");
      setEmail(" ");
      setMessage(" ");
      setphonenumber(" ");

      setShow(false);
    } catch (error) {
      console.error("There was an error submitting the form:", error);

      // Show an error alert
      Swal.fire({
        title: "Error!",
        text: "There was an error submitting your form. Please try again.",
        icon: "error",
        confirmButtonText: "OK",
      });

      setName(" ");
      setEmail(" ");
      setMessage(" ");
      setphonenumber(" ");

      setShow(false);
    }
  };

  useEffect(() => {
    const fetchContactDetails = async () => {
      try {
        const response = await axios.get(`${BaseLink}/contactdetails`);
        setContactDetails(response.data[0]); // Assuming the response is an object with required fields
      } catch (error) {
        console.error("Error fetching contact details:", error);
      }
    };

    fetchContactDetails();
  }, []);
  const { address, contact_number, email } = contactDetails || {};

  const links = contactDetails.social_links || {};

  return (
    <>
      <section className="rows bg-fixed privacy-banner">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-7">
              <h1 className="text-white font-weight-bold home_h2 wow  fadeInDown   animated">
                Contact Us
              </h1>

              <p className="mt-2 text-light">Submit Your Query </p>
            </div>
          </div>
        </div>
      </section>

      <section className="home-form px-md-3 px-sm-0 py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d109782.87829261528!2d76.61497891320774!3d30.698295388807644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fee906da6f81f%3A0x512998f16ce508d8!2sSahibzada%20Ajit%20Singh%20Nagar%2C%20Punjab!5e0!3m2!1sen!2sin!4v1720091395240!5m2!1sen!2sin"
                className="map-container"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="home-main-fom col-lg-6">
              <div
                className="contact-main__form fade-top"
                style={{ transform: "translate(0px, 0px)", opacity: 1 }}
              >
                <h3>Leave a Message</h3>
                <form onSubmit={handleSubmit} className="section__content-cta">
                  <div className="group-wrapper mb-3">
                    <div className="group-input mb-3">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Name"
                        value={formData.name}
                        onChange={handleChange}
                        className="form-control"
                      />
                    </div>
                    <div className="group-input mb-3">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email"
                        value={formData.contactEmail}
                        onChange={handleChange}
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="group-input mb-6">
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="form-select"
                    >
                      <option value="" disabled>
                        Subject
                      </option>
                      <option value="Account">Account</option>
                      <option value="Service">Service</option>
                      <option value="Pricing">Pricing</option>
                      <option value="Support">Support</option>
                    </select>
                  </div>
                  <div className="group-input mb-3">
                    <textarea
                      name="message"
                      id="message"
                      placeholder="Message"
                      value={formData.message}
                      onChange={handleChange}
                      className="form-control "
                      style={{ height: "100px" }}
                    ></textarea>
                  </div>
                  <div className="form-cta justify-content-start">
                    <button type="submit" className="btn btn-submit-contact">
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mb-5">
        <div className="row gaper justify-content-around">
          <div className="col-12 col-lg-5 col-xl-4">
            <div className="footer-two__left">
              <div className="d-flex gap-3 section__content-cta">
                <div className="logo">
                  <Link href="/">
                    {logo ? (
                      <img
                        src={`https://admin.ingeniouslearn.com/storage/${logo}`}
                        alt="Logo"
                        width="160"
                        height="auto"
                      />
                    ) : (
                      <img
                        src="/images/Blue.webp"
                        alt="Logo"
                        width="160"
                        height="40"
                      />
                    )}
                  </Link>
                </div>
                <h2>
                  <Link
                    className="folks-text animated-text"
                    href={`mailto:${email}`}
                  >
                    {email}
                  </Link>
                </h2>
              </div>
              <div className="paragraph mt-2">
                <p>
                  Welcome to our digital agency. We specialize in helping
                  businesses like yours succeed online. From website design and
                  development.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-7 col-xl-7">
            {Object.keys(links).length > 0 ? (
              <div className="social_contact">
                {links.Facebook && (
                  <Link target="_blank" href={links.Facebook}>
                    <FaFacebookF />
                    <span>Facebook</span>
                  </Link>
                )}
                {links.Twitter && (
                  <Link target="_blank" href={links.Twitter}>
                    <FaTwitter />
                    <span>Twitter</span>
                  </Link>
                )}
                {links.LinkedIn && (
                  <Link target="_blank" href={links.LinkedIn}>
                    <FaLinkedinIn />
                    <span>LinkedIn</span>
                  </Link>
                )}
                {links.Instagram && (
                  <Link target="_blank" href={links.Instagram}>
                    <FaInstagram />
                    <span>Instagram</span>
                  </Link>
                )}
                {/* {links.YouTube && (
            <Link target="_blank" href={links.YouTube}>
              <FaYoutube />
              <span>YouTube</span>
            </Link>
          )} */}
              </div>
            ) : (
              <p>No social links available</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
