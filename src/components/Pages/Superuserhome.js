import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom';
import './masterhome.css';
// import axios from 'axios';

import logo from '../Assets/logo.png';

function Superuserhome() {
    const [showForm, setShowForm] = useState(false);
    const [showForm1, setShowForm1] = useState(false);
    const [showForm2, setShowForm2] = useState(false);
    // const [showMenu, setShowMenu] = useState(false);
    const [showUsers, setShowUsers] = useState(false);

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

    
    const toggleUsers = () => {
        setShowUsers(!showUsers);
    }


  return (
    <>
    <nav className='navbar'>
        <button className='menu'>&#x2630;</button>
        <ul>SUPER ADMIN DASHBOARD</ul>
        <p className='userinfo'>&#x1F464;formData[name]</p>
    </nav>


    <div className="masterhome">
        <div className="masterhome-text">
            <h3>Welcome to</h3>
            <h1>SUPER-ADMIN DASHBOARD</h1>
            
            <br /><br /><br />
            <p>The Superadmin Dashboard serves as the central hub for overseeing and managing critical roles within the bridge 
                infrastructure ecosystem.</p>
            <div className="btncenter1">
                <button className="btn1" onClick={toggleForm}>Register &#x2192;</button>
            </div>
        </div>


        
            <div className="menubar">
                <ul><a href="/">Home</a></ul>
                <hr />
                <ul onClick={toggleUsers}>Add User</ul>
                <hr />
                <ul>Add Bridge</ul>
                <hr />
                <ul><a href="/login">Menu Option 4</a></ul>
                <hr />
            </div>

        {showUsers &&(
            <div className="showusers">
                <hr />
                <ul onClick={toggleForm1}>Add Admin</ul>
                <hr />
                <ul onClick={toggleForm}>Add Manager</ul>
                <hr />
                <ul onClick={toggleForm2}>Add Owner</ul>
                <hr />
            </div>
        )}


        {showForm && (
          <div className="form-container">
             <form>
                <h1>Form to Register Bridge Manager</h1>
                <br />
                <div className="form-container1">
                <label className='lab' htmlFor="Name">Name:</label>
                    <input type="text" placeholder='Name' required/>
                <label className='lab' htmlFor="Designation">Designation:</label>
                    <input type="text" placeholder='Designation' required/>
                </div>
                    
                <div className="form-container1">
                <label className='lab' htmlFor="companyName">Company Name:</label>
                    <input type="text" placeholder='Company Name' required/>
                <label className='lab' htmlFor="emailid">Email id:</label>
                    <input type="email" placeholder='Email id' required/>
                </div>

                <div className="form-container1">
                <label className='lab' htmlFor="phoneNumber">Phone Number:</label>
                    <input type="text" placeholder='Phone Number (optional)'/>
                <label className='lab' htmlFor="role">Role:</label>
                    <input type="text" defaultValue="Bridge Manager" readOnly/>
                </div>
                <br /><br />
                <button type='submit' onClick={closeForm}>Submit</button>
                <button className="cancel" onClick={closeForm}>Cancel</button>
              </form>
          </div>
        )}
        {showForm1 && (
          <div className="form-container">
             <form>
                <h1>Form to Register Bridge Admininistrator</h1>
                <br />
                <div className="form-container1">
                <label className='lab' htmlFor="Name">Name:</label>
                    <input type="text" placeholder='Name' required/>
                <label className='lab' htmlFor="Designation">Designation:</label>
                    <input type="text" placeholder='Designation' required/>
                </div>
                    
                <div className="form-container1">
                <label className='lab' htmlFor="companyName">Company Name:</label>
                    <input type="text" placeholder='Company Name' required/>
                <label className='lab' htmlFor="emailid">Email id:</label>
                    <input type="email" placeholder='Email id' required/>
                </div>

                <div className="form-container1">
                <label className='lab' htmlFor="phoneNumber">Phone Number:</label>
                    <input type="text" placeholder='Phone Number (optional)'/>
                <label className='lab' htmlFor="role">Role:</label>
                    <input type="text" defaultValue="Bridge Admininistrator" readOnly/>
                </div>
                <br /><br />
                <button type='submit' onClick={closeForm1}>Submit</button> 
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
                <label className='lab' htmlFor="Name">Name:</label>
                    <input type="text" placeholder='Name' required/>
                <label className='lab' htmlFor="Designation">Designation:</label>
                    <input type="text" placeholder='Designation' required/>
                </div>
                    
                <div className="form-container1">
                <label className='lab' htmlFor="companyName">Company Name:</label>
                    <input type="text" placeholder='Company Name' required/>
                <label className='lab' htmlFor="emailid">Email id:</label>
                    <input type="email" placeholder='Email id' required/>
                </div>

                <div className="form-container1">
                <label className='lab' htmlFor="phoneNumber">Phone Number:</label>
                    <input type="text" placeholder='Phone Number (optional)'/>
                <label className='lab' htmlFor="role">Role:</label>
                    <input type="text" defaultValue="Bridge Owner" readOnly/>
                </div>
                <br /><br />
                <button type='submit' onClick={closeForm2}>Submit</button>
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