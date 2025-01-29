"use client"
import { useState } from "react";
import axios from 'axios';
import Swal from "sweetalert2";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import { BaseLink } from "../../config/ApiLink";

import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './Float.css'; // Your custom CSS

export default function ContactPopup() {
  const [show, setShow] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [phonenumber, setPhonenumber] = useState('');

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const submitQuery = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${BaseLink}/submitrespons`, {
        name,
        email,
        phonenumber,
        message,
      });

      Swal.fire({
        title: "Success!",
        text: "Your form has been submitted successfully.",
        icon: "success",
        confirmButtonText: "OK",
      });

      setName('');
      setEmail('');
      setMessage('');
      setPhonenumber('');
      setShow(false);

    } catch (error) {
      console.error("There was an error submitting the form:", error);
      Swal.fire({
        title: "Error!",
        text: "There was an error submitting your form. Please try again.",
        icon: "error",
        confirmButtonText: "OK",
      });

      setName('');
      setEmail('');
      setMessage('');
      setPhonenumber('');
      setShow(false);
    }
  };

  return (
    <>
      <div className="it-about-style-3">
        <button variant="primary" className="floating-button" onClick={handleShow}>
          <span className="ripple"></span>
          <i className="bi bi-chat-dots"></i>
          <span className="it-about-thumb-shape"></span>
        </button>
      </div>

      <div className={`popup-box ${show ? 'open' : 'close'}`}>
        <div className="form-container">
          <div className="logo-container">Leave a Message</div>

          <button className="close-button" onClick={handleClose}>
            &times;
          </button>

          <form className="form" onSubmit={submitQuery}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phonenumber">Phone number</label>
              <PhoneInput
                country={"in"}
                value={phonenumber}
                onChange={(value) => setPhonenumber(value)}
                inputProps={{
                  name: "phone",
                  required: true,
                  className: "form-control padding-left-10",
                  placeholder: "Enter your phone number",
                }}
                enableSearch={true}
                inputClass="w-100 border-dark"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                placeholder="Enter your message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>

            <button className="btn btn-primary my-2" type="submit">
              Send Email
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
