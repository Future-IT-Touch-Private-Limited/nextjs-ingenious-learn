"use client"



import React from 'react'
import { blogData, categories } from "../components/CommonData/CardsDetailData";
import { FaFolder } from "react-icons/fa";

import Link from 'next/link';

const Left = () => {
  return (
    <>
      <div id="sidebar" style={{ width: "100%" }}>
        {/* Contact Form Section */}
        <div className="my-6 d-inline-block mb-4 p-4 pb-6 align-bottom bg-light text-left overflow-hidden shadow-lg transform transition-all w-100 border border-primary">
          <div>
            <div className="r-s-image">
              Ready to Master the Skills that{" "}
              <span>Drive Your Career?</span>

              <p className="">Avail your free 1:1 mentorship session.</p>
            </div>
            <div className="mt-3">
              <form>
                <input
                  className="d-none"
                  type="text"
                  name="certifying_authority"
                />
                <div className="row">
                  <div className="col-md-6 mb-3 ">
                    <div className="form-group">
                      <input
                        placeholder="First name"
                        type="text"
                        className="form-control"
                        name="first_name"
                      />
                    </div>
                  </div>
                  <div className="col-md-6 mb-3 ">
                    <div className="form-group">
                      <input
                        placeholder="Last name"
                        type="text"
                        className="form-control"
                        name="last_name"
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group mb-3">
                  <input
                    placeholder="Email"
                    className="form-control"
                    name="email"
                  />
                </div>
                <div className="form-group mb-3">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <select className="custom-select-main" name="isd">
                        <option value="+91">+91</option>
                        {/* Add other country codes as needed */}
                      </select>
                    </div>
                    <input
                      placeholder="Phone"
                      type="tel"
                      className="form-control"
                      name="phone"
                    />
                  </div>
                </div>
                <div className="form-group mb-3">
                  <label className="form-check-label">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      name="whatsapp_subscription_status"
                      defaultChecked
                      style={{ marginRight: '10px' }}
                    />
                    I want to receive updates directly on WhatsApp.
                  </label>
                </div>
                <div className="d-flex justify-content-center">
                  <button className="btn-talk">Talk to Us</button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <br />

        {/* Free Event Section */}
        <section id="categories-5" className="widget widget_event">
          <h2 className="widget-title">Free Event</h2>
          <ul>
            <li>
              <Link
                href=""

              >
                <img
                  src="/images/Exposing.webp"
                  alt="Exposing Cybercrime with Threat Hunting & Digital Forensics"
                  loading="lazy"
                />
                <br />
                Exposing Cybercrime: with Threat Hunting & Digital
                Forensics
              </Link>
            </li>
            <li>
              <Link
                href=""
              >
                <img
                  src="/images/Scenario-Based.webp"
                  alt="Scenario Based Interview Prep Series on Security"
                  loading="lazy"
                />
                <br />
                Scenario-Based Interview Prep Series on Security+
                Concepts
              </Link>
            </li>
            <li>
              <Link
                href=""
              >
                <img
                  src="/images/Scenario-Based2.webp"
                  alt="Scenario Based Interview Prep Series on AWS Concepts"
                  loading="lazy"
                />
                <br />
                Scenario-Based Interview Prep Series on AWS Concepts
              </Link>
            </li>
          </ul>
        </section>

        {/* Categories Section */}
        <section id="categories-5" className="widget widget_categories">
          <h2 className="widget-title">Categories</h2>
          <ul>
            {categories.map((category) => (
              <li
                key={category.id}
                className={`cat-item cat-item-${category.id}`}
              >
                <FaFolder />
                <Link href={category.link}>{category.name}</Link>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </>
  )
}

export default Left