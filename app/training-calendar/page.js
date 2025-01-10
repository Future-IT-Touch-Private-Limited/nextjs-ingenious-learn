"use client";
import React, { useEffect, useState } from "react";
import TrainingCommon from "./TrainingCommon";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import axios from "axios";
import { fetchTrainingdata } from "../features/trainingData/trainingSlicer";
import {
  fetchCart,
  addToCart,
  removeFromCart,
  updateQuantity,
  clearCart,
} from "../features/CartData/CartSlicer";

import TrainingCalenPage from "./TrainCalenPage";
import { useRouter } from 'next/navigation';
import { BaseLink } from "../config/ApiLink";
import Link from "next/link";
const TrainingCalender = () => {

 
  const router = useRouter();

  const [stuId, setStuId] = useState();
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState();
  const [activeTabNav, setActiveTabNav] = useState("login");
  const trainingData = useSelector((state) => state.training.data.data);
  const status = useSelector((state) => state.training.status);
  const error = useSelector((state) => state.training.error);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (activeTabNav === "signup") {
        // Handle Registration
        const response = await axios.post(
          `${BaseLink}/register`,
          { name, email, password },
          {
            headers: { "Content-Type": "application/json" },
          }
        );

        const token = response.data.student_id;
        localStorage.setItem("student_id", token);
        setStuId(token);

        Swal.fire({
          title: "Success!",
          text: "Registration successful.",
          icon: "success",
          confirmButtonText: "OK",
        });

        window.location.reload("/");
        setIsModalOpen(false);
        setName("");
        setEmail("");
        setPassword("");
      } else {
        const response = await axios.post(
          `${BaseLink}/login`,
          { email, password },
          {
            headers: { "Content-Type": "application/json" },
          }
        );

        const token = response.data.student_id;
        localStorage.setItem("student_id", token);
        setStuId(token);
        Swal.fire({
          title: "Success!",
          text: "Login successful!",
          icon: "success",
          confirmButtonText: "OK",
        });

        window.location.reload("/");
        setEmail("");
        setPassword("");
        setIsModalOpen(false);
      }
    } catch (error) {
      console.error("Error in handleSubmit:", error);

      Swal.fire({
        title: "Error!",
        text:
          error.response?.data?.errors?.password ||
          "An unexpected error occurred.",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  const switchTab = (tab) => {
    setActiveTabNav(tab);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchTrainingdata());
    }
  }, [status, dispatch]);

  useEffect(() => {
    const stuId = localStorage?.getItem("student_id");

    if (stuId) {


      setStuId(stuId);
    } else {
      setStuId("");
    }
  }, []);

  const handleAddToCart = (dd, id) => {


    if (!stuId) {
      setIsModalOpen(true);
      return;
    }

    const item = {
      student_id: stuId,
      course_id: dd.course_id,
      training_cal_id: dd.id,
    };
 

    dispatch(addToCart(item))
      .unwrap()
      .then(() => {
        router(`/cart`);
      })
      .catch((error) => {
        console.error("Failed to add to cart:", error);
      });
  };

  return (
    <>
      <section className="rows bg-fixed training-banner" />

      <section className="breadcrumbs-main">
        {" "}
        <div className="container">
          <ul id="breadcrumb" className="breadcrumb">
            <li className="item-home">
              <Link className="bread-link bread-home" href="/" title="Home">
                Home
              </Link>
            </li>
            <li className="item-current item-31259"> Training Calendar</li>
          </ul>
        </div>
      </section>

      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h3 className="head11">
              {" "}
              CHECK-OUT THE UPCOMING{" "}
              <strong className="text-primary"> BATCHES</strong>
            </h3>
          </div>
        </div>

        <TrainingCalenPage
          data={trainingData}
          handleAddToCart={handleAddToCart}
        />
      </div>
      {isModalOpen && (
        <div
          className="modal show d-block"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Welcome</h5>
                <button onClick={toggleModal} className="btn-close"></button>
              </div>

              <div className="modal-body">
                <div className="nav justify-content-center sign-nav nav-tabs mb-4">
                  <button
                    onClick={() => switchTab("login")}
                    className={`nav-link ${
                      activeTabNav === "login" ? "active" : ""
                    }`}
                  >
                    Sign In
                  </button>
                  <button
                    onClick={() => switchTab("signup")}
                    className={`nav-link ${
                      activeTabNav === "signup" ? "active" : ""
                    }`}
                  >
                    Sign Up
                  </button>
                </div>

                <div>
                  {/* <h2 className="h5 mb-4">{activeTabNav === 'login' ? 'Login' : 'Signup'}</h2> */}
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
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TrainingCalender;
