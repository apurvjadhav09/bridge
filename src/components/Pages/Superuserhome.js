import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './masterhome.css';
import axios from 'axios';

import logo from '../Assets/logo.png';
import logo2 from '../Assets/logo2.png';

function Superuserhome() {
    const [showForm, setShowForm] = useState(false);
    const [showForm1, setShowForm1] = useState(false);
    const [showForm2, setShowForm2] = useState(false);

    const toggleForm = () => {
      setShowForm(!showForm);
    };
    const toggleForm1 = () => {
      setShowForm1(!showForm);
    };
    const toggleForm2 = () => {
      setShowForm2(!showForm);
    };
  
    const closeForm = () => {
        setShowForm(false);
      };
    const closeForm1 = () => {
        setShowForm1(false);
      };
    const closeForm2 = () => {
        setShowForm2(false);
      };

  return (
    <>
    <div className="masterhome">
        <div className="masterhome-text">
            <h1>SUPER-ADMIN</h1>
            <h2>DASHBOARD</h2>
            
            <br /><br /><br />
            <p>The Superadmin Dashboard serves as the central hub for overseeing and managing critical roles within the bridge 
                infrastructure ecosystem. <br /><br />
                Through an intuitive and secure interface, the Superadmin can seamlessly integrate new Bridge Owners, individuals 
                responsible for the strategic oversight and maintenance of specific bridge structures. <br /><br /> This comprehensive 
                approach not only streamlines the administrative processes but also enhances the overall efficiency and effectiveness 
                of bridge management, ensuring a robust and well-organized infrastructure.</p>
            <div className="btncenter1">
                <button className="btn1" onClick={toggleForm}>Add Bridge Engineer &#x2192;</button>
                <button className="btn1" onClick={toggleForm1}>Add Bridge Incharge &#x2192;</button>
                <button className="btn1" onClick={toggleForm2}>Add Bridge Owner &#x2192;</button>
            </div>
        </div>
        {showForm && (
          <div className="form-container">
             <form>
                <h1>Form to Register Bridge Engineer</h1>
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
                    <input type="text" defaultValue="Bridge Engineer" readOnly/>
                </div>
                <br /><br />
                <button type='submit' onClick={closeForm}>Submit</button> <br />
                <button className="cancel" onClick={closeForm}>Cancel</button>
              </form>
          </div>
        )}
        {showForm1 && (
          <div className="form-container">
             <form>
                <h1>Form to Register Bridge Incharge</h1>
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
                    <input type="text" defaultValue="Bridge Incharge" readOnly/>
                </div>
                <br /><br />
                <button type='submit' onClick={closeForm1}>Submit</button> <br />
                <button className="cancel" onClick={closeForm1}>Cancel</button>
              </form>
          </div>
        )}
        {showForm2 && (
          <div className="form-container">
             <form>
                <h1>Form to Register Bridge Owner</h1>
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
                    <input type="text" defaultValue="Bridge Owner" readOnly/>
                </div>
                <br /><br />
                <button type='submit' onClick={closeForm2}>Submit</button> <br />
                <button className="cancel" onClick={closeForm2}>Cancel</button>
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

export default Superuserhome