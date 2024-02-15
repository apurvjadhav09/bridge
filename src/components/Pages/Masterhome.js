import React, { useState } from 'react';
import './masterhome.css';
import axios from 'axios';

import logo from '../Assets/logo.png';
import { IoArrowBackCircleSharp } from "react-icons/io5";

function Masterhome() {
  const [showForm, setShowForm] = useState(false);
  const [showUpdateBridge, setshowUpdateBridge] = useState(false);

  const updateBridge = () => {
    setshowUpdateBridge(!showUpdateBridge);
  };

  const backHome = () => {
    setshowUpdateBridge(false);
  };

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const closeForm = () => {
    setShowForm(false);
  };

  const submitForm = async (event) => {
    event.preventDefault();

    // Collect form data
    const formData = {
      name: event.target.elements.name.value,
      designation: event.target.elements.designation.value,
      companyName: event.target.elements.companyName.value,
      email: event.target.elements.email.value,
      phoneNumber: event.target.elements.countryCode.value + event.target.elements.phoneNumber.value,
      role: event.target.elements.superadmin.value,
    };

    console.log('Form Data:', formData);

    try {
      // Make the API request
      const response = await axios.post('http://localhost:9090/masterhome/register', formData);
      console.log('Form submitted successfully', response.data);
      alert('Form submitted successfully');
    } catch (error) {
      console.error('Error submitting form', error);
    }
    setShowForm(false);
  };

  return (
    <>
      <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet" />
      <div className="masterhome">
        <div className="masterhome-text">
          <h1>MASTER-ADMIN DASHBOARD</h1>
          <br />
          <br />
          <br />
          <div className="btncenter">
            <button className="btn" onClick={toggleForm}>Add Super-User &#x2192;</button>
            <button className='btn' onClick={updateBridge}>Update Bridge Data</button>
          </div>
        </div>


        {showForm && (
          <div className="form-container">
            <form onSubmit={submitForm}>
              <h1>REGISTER SUPERADMIN</h1>
              <br />
              <div className="form-container1">
                <label className='lab' htmlFor="name">Name:</label>
                <input type="text" name="name" required />
                <label className='lab' htmlFor="designation">Designation:</label>
                <input type="text" name="designation" required />
              </div>

              <div className="form-container1">
                <label className='lab' htmlFor="companyName">Company Name:</label>
                <input type="text" name="companyName" required />
                <br />
                <label className='lab' htmlFor="email">Email id:</label>
                <input type="email" name="email" required />
                <br />
              </div>
            <br />
              <div className="form-container1">
                <label className='lab' htmlFor="phoneNumber">Mobile Number: </label>
                <div className="phone-input-container">
                
                <select name="countryCode" defaultValue="+1">
                  <option value="+91">+91</option>
                  <option value="+1">+1</option>
                </select>
                <input type="text" name="phoneNumber" maxLength="10"/>
                </div>
                <br />
                <label className='lab' htmlFor="Role">Role:</label>
                <input type="text" defaultValue="SUPERADMIN" name="superadmin" readOnly />
              </div>
              <br />
              <br />
              <button type="submit">Submit</button>
              <button className="cancel" onClick={closeForm}>
                Cancel
              </button>
            </form>
          </div>
        )}

        { showUpdateBridge && (
          <div className='absolute w-1/2 bg-white min-h-screen'>
            <button className='inline-flex underline mt-4' onClick={backHome}><IoArrowBackCircleSharp size={32}/>Home</button>
            blabla
          </div>
        )}
        <div className="masterhome-image">
          <img src={logo} alt="" />
        </div>
      </div>
    </>
  );
}

export default Masterhome;