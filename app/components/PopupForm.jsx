"use client"
import React, { useState } from 'react';
// import SignupForm from './SignupForm';
import { FaTimes } from 'react-icons/fa';
import Link from 'next/link'; 

const PopupForm = ({ show, onClose }) => {
  const [isChecked, setIsChecked] = useState(true);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  if (!show) return null;
  const styles = {
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgb(12 22 32 / 80%)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 999,
    },
    popup: {
      background: '#fff',
      padding: '30px',
      borderRadius: '10px',
      width: '600px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      textAlign: 'center',
      position: 'relative'
    },
    heading: {
      margin: '0 0 20px',
      fontSize: '24px',
      color: '#333',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
    },
    formGroup: {
      marginBottom: '15px',
    },
    label: {
      display: 'block',
      marginBottom: '5px',
      fontSize: '16px',
      color: '#666',
    },
    input: {
      width: '100%',
      padding: '10px',
      borderRadius: '5px',
      border: '1px solid #ccc',
      fontSize: '16px',
    },
    submitButton: {
      padding: '10px 20px',
      borderRadius: '5px',
      border: 'none',
      backgroundColor: '#28a745',
      color: '#fff',
      fontSize: '16px',
      cursor: 'pointer',
    },
    closeButton: {
      marginTop: '10px',
      padding: '0px',
      borderRadius: '5px',
      border: 'none',
      backgroundColor: 'transparent',
      color: 'black',
      fontSize: '24px',
      cursor: 'pointer',
      position: 'absolute',
      top:'0px',
      right: '20px'
    },
  };

  return (
    <div style={styles.overlay}>
      <div style={styles.popup}>
        <h2 style={styles.heading}>Contact Learning Advisor</h2>
         <button onClick={onClose} style={styles.closeButton}><FaTimes /></button>
        <form action="">
        <div className="row g-4 mb-4">
      <div className="col-md-6">
          <input
            placeholder="Full Name"
            className="w-100 form-control text-sm text-dark placeholder-transparent pl-4 pr-8 rounded-lg contact-form"
            type="text"
            name="fullName"
          />
         
      </div>
      <div className="col-md-6">
          <input
            placeholder="Email"
            className="w-100  form-control text-sm text-dark placeholder-transparent pl-4 pr-8 rounded-lg contact-form"
            type="text"
            name="email"
          />
       
      </div>
    </div>
         <div className="row g-4 mb-4">
      <div className="col-md-6">
   
     
   
   
          <input className="w-100 form-control text-sm text-dark placeholder-transparent pl-4 pr-8 rounded-lg contact-form" placeholder="Phone Number" type="text" name="number" required />
      
      </div>
      <div className="col-md-6">
      
      <select
      type="select"
        name="courseList"
        className="w-100  form-control text-sm text-dark placeholder-transparent pl-4 pr-8 rounded-lg contact-form pe-5"
        aria-label="Course select"
      >
        <option className='text-dark' value='{"name":"Hands-on Jira for Scrum Masters - Enhancing Agile Project Management","legacy_id":1435,"category":{"name":"Other"}}'>
        Select Course
        </option>
        <option value='{"name":"Hands-on Jira for Scrum Masters - Enhancing Agile Project Management","legacy_id":1435,"category":{"name":"Other"}}'>
          Hands-on Jira for Scrum Masters - Enhancing Agile Project Management
        </option>
        {/* Add more options here as needed */}
      </select>
     
      </div>
    </div>
         <div className="row g-4 mb-4">
         <textarea className=" form-control text-sm text-dark placeholder-transparent pl-4 pr-8 rounded-lg contact-form" placeholder="Message" type="message" name="number" required />
    </div>
    <div className="d-flex justify-content-between align-items-center mt-4">
      <div className="d-flex flex-column gap-2 align-items-md-center">
        <div className="d-flex align-items-center">
          <label htmlFor="whatsapp-checkbox" className="w-4 h-5 md:h-5.5 d-flex align-items-center">
            <input
              id="whatsapp-checkbox"
              className="form-check-input m-2"
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
              name="whatsapp_subscription_status"
            />
            <span className="relative w-4 h-4 d-flex"></span>
          </label>
          <div className="ml-2 hover:cursor-pointer">
            <div className="text-xs text-muted"> I agree to KnowledgeHut
          <Link className="font-weight-bold text-dark ml-1 mr-2 md:mr-4" href="/terms-conditions" target="_blank" rel="noopener noreferrer">
            Terms and Conditions
          </Link></div>
          </div>
        </div>
       
      </div>
      <button
        type="submit"
        className="btn btn-dark hover:bg-primary-main md:h-14 px-5 md:min-w-45 text-base text-white d-flex justify-content-center align-items-center font-weight-bold rounded"
      >
        <div className="d-flex justify-content-center align-items-center">Submit</div>
      </button>
    </div>
        </form>
      </div>
    </div>
  );
};



export default PopupForm;
