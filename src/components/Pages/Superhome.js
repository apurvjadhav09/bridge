import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './masterhome.css';

import logo from '../Assets/logo.png';
import logo2 from '../Assets/logo2.png';


function superhome() {
    const [showForm, setShowForm] = useState(false);

    const toggleForm = () => {
      setShowForm(!showForm);
    };
  
    const closeForm = () => {
        setShowForm(false);
      };

  return (
    <>
    <div className="masterhome">
        <div className="masterhome-text">
            <h1>MASTER-ADMIN</h1>
            <h2>DASHBOARD</h2>
            
            <br /><br /><br />
            <p>The Master Admin Dashboard ensures that managing user access and enhancing permissions is quick, secure, and hassle-free, allowing you to adapt the system to evolving needs with unparalleled ease.</p>
            <br /><br />
            <p>The process is straightforward – click the button, input essential details for the new Superuser in the form that appears, and submit.  Once submitted, the Superuser is seamlessly integrated into the system, endowed with enhanced capabilities and permissions.</p>
            <div className="btncenter">
                <button className="btn" onClick={toggleForm}>Add Super-User  &#x2192;</button>
            </div>
        </div>
        {showForm && (
          <div className="form-container">
             <form>
                <h1>Form to Register Superuser</h1>
                <br />
                <div className="form-container1">
                    <input type="text" placeholder='Name' required/>
                    <input type="text" placeholder='Designation' required/>
                </div>
                    
                <div className="form-container1">
                    <input type="text" placeholder='Company Name' required/>
                    <input type="email" placeholder='Email id' required/>
                </div>

                <div className="form-container1">
                    <input type="text" placeholder='Phone Number (optional)'/>
                    <input type="text" defaultValue="Super-User" readOnly/>
                </div>
                <br /><br />
                <button onClick={closeForm}>Submit</button> <br />
                <button className="cancel" onClick={closeForm}>Cancel</button>
              </form>
          </div>
        )}
        <div className="masterhome-image">
            <img src={logo} alt="" />
        </div>
        
    </div>
    </>
  )
}

export default superhome;