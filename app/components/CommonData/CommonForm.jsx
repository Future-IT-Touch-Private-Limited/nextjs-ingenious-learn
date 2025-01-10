"use client"
import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

// Updated BaseLink
import { BaseLink } from "../config/ApiLink"; 
// Uncomment and use the below line if you want to use the local development API
// export const BaseLink = 'http://localhost:8000/api/v1/api/v1'; 

function CommonForm() {
  const [activeTabNav, setActiveTabNav] = useState("login");
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isModalOpen, setIsModalOpen] = useState('');
  const [stuId, setStuId] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (activeTabNav === 'signup') {
        const response = await axios.post(`${BaseLink}/register`, { name, email, password }, {
          headers: { 'Content-Type': 'application/json' }
        });

        const token = response.data.student_id;
        localStorage.setItem('student_id', token);
        setStuId(token);

        Swal.fire({
          title: 'Success!',
          text: 'Registration successful.',
          icon: 'success',
          confirmButtonText: 'OK',
        });

        setIsModalOpen(false);
        setName('');
        setEmail('');
        setPassword('');
      } else {
        const response = await axios.post(`${BaseLink}/login`, { email, password }, {
          headers: { 'Content-Type': 'application/json' }
        });

        const token = response.data.student_id;
        localStorage.setItem('student_id', token);
        setStuId(token);

        Swal.fire({
          title: 'Success!',
          text: 'Login successful!',
          icon: 'success',
          confirmButtonText: 'OK',
        });

        setEmail('');
        setPassword('');
        setIsModalOpen(false);
      }
    } catch (error) {
      console.error('Error in handleSubmit:', error.response?.data?.errors.password);

      Swal.fire({
        title: 'Error!',
        text: error.response?.data?.errors?.password || 'An unexpected error occurred.',
        icon: 'error',
        confirmButtonText: 'OK',
      });
    }
  };

  const switchTab = (tab) => {
    setActiveTabNav(tab);
  };

  return (
    <>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Welcome</h5>
          </div>

          <div className="modal-body">
            <div className="nav justify-content-center sign-nav nav-tabs mb-4">
              <button
                onClick={() => switchTab("login")}
                className={`nav-link ${activeTabNav === "login" ? "active" : ""}`}
              >
                Sign In
              </button>
              <button
                onClick={() => switchTab("signup")}
                className={`nav-link ${activeTabNav === "signup" ? "active" : ""}`}
              >
                Sign Up
              </button>
            </div>

            <form onSubmit={handleSubmit}>
              {activeTabNav === "signup" && (
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    className="form-control contact-form"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              )}
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control contact-form"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control contact-form"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <button className="btn-submit w-100 mb-3">
                {activeTabNav === "login" ? "Login" : "Signup"}
              </button>
            </form>

            <div className="text-center mb-4 position-relative">
              <hr className="my-4" />
              <span className="position-absolute top-50 start-50 translate-middle bg-white px-2">
                OR
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CommonForm;
