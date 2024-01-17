import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './masterhome.css';
import axios from 'axios';

import logo from '../Assets/logo.png';
import logo2 from '../Assets/logo2.png';

function Masterhome() {
  const [showForm, setShowForm] = useState(false);
  const navigate = useNavigate();

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
      phoneNumber: event.target.elements.phoneNumber.value,
      role: event.target.elements.superadmin.value,
    };

    console.log('Form Data:', formData);

    try {
      // Make the API request
      const response = await axios.post('http://localhost:9090/masterhome/register', formData);
      console.log('Form submitted successfully', response.data);
      alert('Form submitted successfully');
      // Optionally, you can navigate to another page or perform additional actions
      // navigate('/success-page');
    } catch (error) {
      console.error('Error submitting form', error);
      // Handle error as needed
    }

    // Close the form after submission
    setShowForm(false);
  };

  return (
    <>
      <div className="masterhome">
        <div className="masterhome-text">
          <h1>MASTER-ADMIN</h1>
          <h2>DASHBOARD</h2>

          <br />
          <br />
          <br />
          <p>
            The Master Admin Dashboard ensures that managing user access and enhancing permissions is quick, secure, and
            hassle-free, allowing you to adapt the system to evolving needs with unparalleled ease.
          </p>
          <br />
          <br />
          <p>
            The process is straightforward – click the button, input essential details for the new Superuser in the form
            that appears, and submit. Once submitted, the Superuser is seamlessly integrated into the system, endowed
            with enhanced capabilities and permissions.
          </p>
          <div className="btncenter">
            <button className="btn" onClick={toggleForm}>
              Add Super-User &#x2192;
            </button>
          </div>
        </div>
        {showForm && (
          <div className="form-container">
            <form onSubmit={submitForm}>
              <h1>REGISTER SUPERUSER</h1>
              <br />
              <div className="form-container1">
                <label htmlFor="name">Name:</label>
                <input type="text" placeholder="Name" name="name" required />
                <label htmlFor="designation">Designation:</label>
                <input type="text" placeholder="Designation" name="designation" required />
              </div>

              <div className="form-container1">
                <label htmlFor="companyName">Company Name:</label>
                <input type="text" placeholder="Company Name" name="companyName" required />
                <br />
                <label htmlFor="email">Email id:</label>
                <input type="email" placeholder="Email id" name="email" required />
                <br />
              </div>
            <br />
              <div className="form-container1">
                <label htmlFor="phoneNumber">Mobile Number:</label>
                <input type="text" placeholder="Mobile Number" name="phoneNumber" />
                <br />
                <label htmlFor="Role">Role:</label>
                <input type="text" placeholder="superadmin" defaultValue="SUPERADMIN" name="superadmin" readOnly />
              </div>
              <br />
              <br />
              <button type="submit">Submit</button> <br />
              <button className="cancel" onClick={closeForm}>
                Cancel
              </button>
            </form>
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