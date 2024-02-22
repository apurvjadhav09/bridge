import React, { useState } from 'react';
import axios from 'axios';
// import './Login.css';
import { useNavigate } from 'react-router-dom';

import logo from '../Assets/logo.png';

const ChangePassword = () => {
  const [currentPassword, setcurrentPassword] = useState('');
  const [newPassword, setnewPassword] = useState('');
  const [newPasswordAgain, setnewPasswordAgain] = useState('');
  const navigate = useNavigate();

  const handleConfirm = async () => {
    try {
      const token = localStorage.getItem('authToken');

      if (!token) {
        alert('Authorization token not found. Please log in.');
        return;
      }
      if (!currentPassword || !newPassword || !newPasswordAgain) {
        alert('Please fill in all the fields');
        return;
      }
  
      if (currentPassword === newPassword) {
        alert('New Password cannot be the same as the old one');
        setcurrentPassword('');
        setnewPassword('');
        setnewPasswordAgain('');
        return;
      }
  
      if (newPassword !== newPasswordAgain) {
        alert('Incorrect Confirmation');
        setnewPasswordAgain('');
        return;
      }
  
      const response = await axios.post('http://localhost:9090/setupnewpassword', {
        currentPassword: currentPassword,
        newPassword: newPassword,
        newPasswordAgain: newPasswordAgain,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
      );
  
      if (response.status >= 200 && response.status < 300) {
        console.log('Password changed successfully');
        navigate('/login');
      } else {
        console.error('Failed to change password:', response.data);
        alert('Failed to change password. Please try again.');
      }
    } catch (error) {
      console.error('An error occurred during password change:', error);
      alert('An error occurred during password change. Please try again.');
    } finally {
      // Reset password fields regardless of the outcome
      setcurrentPassword('');
      setnewPassword('');
      setnewPasswordAgain('');
    }
  };
  return (
    <>
      <div className="Landing">
        <div className="background">
          <img src={logo} alt="" />
        </div>
        <div className="container">
          <div className="header1">
            <img src={logo} alt="" />
            <div className="text1">
              <h1>Change Password</h1>
            </div>
            <div className="underline"></div>
          </div>
          <div className="inputs">
            <div className="input">
              <input
                type="text"
                placeholder="Enter Current Password"
                value={currentPassword}
                onChange={(e) => setcurrentPassword(e.target.value)}
              />
            </div>
            <div className="input">
              <input
                type="password"
                placeholder="Enter New Password"
                value={newPassword}
                onChange={(e) => setnewPassword(e.target.value)}
              />
            </div>
            <div className="input">
              <input
                type="password"
                placeholder="Confirm Password"
                value={newPasswordAgain}
                onChange={(e) => setnewPasswordAgain(e.target.value)}
              />
            </div>
          </div>
          <div className="submit-container">
            <div className="submit1" onClick={handleConfirm}>
              Confirm
            </div>
          </div>
        </div>
      </div>
      <section className="responsive1">
        <div className="Landing1">
          <div className="background1">
            <img src={logo} alt="" />
          </div>
          <div className="container1">
            <div className="header1">
              <img src={logo} alt="" />
              <div className="text1">
                <h1>Change Password</h1>
              </div>
              <div className="underline1"></div>
            </div>
            <div className="inputs1">
              <div className="input1">
                <input
                  type="text"
                  placeholder="Enter Current Password"
                  value={currentPassword}
                  onChange={(e) => setcurrentPassword(e.target.value)}
                />
              </div>
              <div className="input1">
                <input
                  type="password"
                  placeholder="Enter New Password"
                  value={newPassword}
                  onChange={(e) => setnewPassword(e.target.value)}
                />
              </div>
              <div className="input1">
                <input
                  type="password"
                  placeholder="Confirm Password"
                  value={newPasswordAgain}
                  onChange={(e) => setnewPasswordAgain(e.target.value)}
                />
              </div>
            </div>
            <div className="submit-container1">
              <div className="submit1" onClick={handleConfirm}>
                Confirm
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ChangePassword;