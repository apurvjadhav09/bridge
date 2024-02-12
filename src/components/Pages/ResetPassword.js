import React, { useEffect, useState} from 'react';
import axios from 'axios';
import './Login.css';
import { useNavigate, useLocation } from 'react-router-dom';

import logo from '../Assets/logo.png';
import logo2 from '../Assets/logo2.png';

const ResetPassword = () => {
    
    const [newPassword, setnewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');
    const [token, setToken] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
  
    useEffect(() => {
        const tokenFromURL = new URLSearchParams(location.search).get('token');
        console.log('Token from URL:', tokenFromURL);
        setToken(tokenFromURL);
      }, [location.search]);

    const handleConfirm = async () => {
      try {
        if (!token) {
          alert('Authorization token not found. Please open this page with the provided link on your email.');
          
          setnewPassword('');
          setConfirmNewPassword('');
          return;
        }
        
    
        if (newPassword !== confirmNewPassword) {
          alert('Incorrect Confirmation');
          setConfirmNewPassword('');
          return;
        }
    
        const response = await axios.post(`http://localhost:9090/newuser/resetpassword?token=${token}`, {
          newPassword: newPassword,
          confirmNewPassword: confirmNewPassword,
        },
        );
    
        if (response.status >= 200 && response.status < 300) {
          console.log('Password changed successfully');
          navigate('/');
        } else {
          console.error('Failed to change password:', response.data);
          alert('Failed to change password. Please try again.' ,response.data);
        }
      } catch (error) {
        console.error('An error occurred during password change:', error);  
        alert('An error occurred during password change. Please try again.');
      } finally {
        
        setnewPassword('');
        setConfirmNewPassword('');
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
            <img src={logo2} alt="" />
            <div className="text1">
              <h1>Reset Password</h1>
            </div>
            <div className="underline"></div>
          </div>
          <div className="inputs">
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
                value={confirmNewPassword}
                onChange={(e) => setConfirmNewPassword(e.target.value)}
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
              <img src={logo2} alt="" />
              <div className="text1">
                <h1>Reset Password</h1>
              </div>
              <div className="underline1"></div>
            </div>
            <div className="inputs1">
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
                  value={confirmNewPassword}
                  onChange={(e) => setConfirmNewPassword(e.target.value)}
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
  )
}

export default ResetPassword;