import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';

import { FaLock } from "react-icons/fa";
import { LuRepeat } from "react-icons/lu";

import logo from '../Assets/logo.png';
import logo2 from '../Assets/logo2.png';

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState('');
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
        setNewPassword('');
        setConfirmNewPassword('');
        return;
      } else if (newPassword !== confirmNewPassword) {
        alert('Incorrect Confirmation');
        setConfirmNewPassword('');
        return;
      }
      
      const response = await axios.post(`http://localhost:9090/newuser/resetpassword?token=${token}`, {
        newPassword: newPassword,
        confirmNewPassword: confirmNewPassword,
      });

      if (response.status >= 200 && response.status < 300) {
        console.log('Password changed successfully');
        navigate('/');
      } else {
        console.error('Failed to change password:', response.data);
        alert('Failed to change password. Please try again.', response.data);
        
      }
    } catch (error) {
      console.error('An error occurred during password change:', error);
      alert('An error occurred during password change. Please try again.');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleConfirm();
    }
  };

  return (
    <>
      <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet" />
      <div className="flex">
        <div className="background w-1/2">
          <img className='p-6 w-32' src={logo} alt="" />
        </div>
        <div className="w-1/2">
          <div className="">
            <img className='px-72 pt-8 pb-16' src={logo2} alt="" />
            <div className="">
              <h1 className='text-2xl font-semibold pb-24 text-center text-indigo-900'>Reset Password</h1>
            </div>
          </div>
          <div className="pb-16">
            <div className="flex justify-center pb-6">
              <FaLock style={{ alignItems: 'center', marginTop: '2%' }} size={22} />
              <input className="border border-gray-500 bg-gray-100 p-3 ml-3 w-1/3 pl-3 mr-2 rounded" type="password" placeholder="Enter New Password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
            </div>
            <div className="flex justify-center">
              <LuRepeat style={{ alignItems: 'center', marginTop: '2%' }} size={22} />
              <input className="border border-gray-500 bg-gray-100 p-3 ml-3 w-1/3 pl-3 mr-2 rounded" type="password" placeholder="Confirm Password" value={confirmNewPassword} onChange={(e) => setConfirmNewPassword(e.target.value)} onKeyDown={handleKeyDown} />
            </div>
          </div>
          <div className="">
            <div className="text-center">
                <button className='p-2 bg-blue-600 hover:bg-blue-900 px-5 text-white rounded-sm' onClick={handleConfirm}>Confirm</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ResetPassword;
