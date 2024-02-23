import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './tailwind.css';

import { FaUser, FaLock } from "react-icons/fa";

import logo from '../Assets/logo.png';
import logo2 from '../Assets/logo2.png';

const Login = () => {
  const [email, setemail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (email === '') {
      alert('Please Enter User ID');
    } else if (password === '') {
      alert('Please Enter Password');
    } else {
      try {
        const response = await axios.post('http://localhost:9090/login', {
          email: email,
          password: password,
        });
        localStorage.setItem('email', email);

        if (response.status >= 200 && response.status < 300) {
          console.log('Login successful');
          const token = response.data.token;
          localStorage.setItem('authToken', token);
          const dashboardUrl = response.data.dashboardUrl;
          localStorage.setItem('dashboardUrl', dashboardUrl);          
          navigate(dashboardUrl);
        } else {
          alert('Incorrect User ID or Password');
          setemail('');
          setPassword('');
        }
      } catch (error) {
        console.error('Error during login:', error);
        alert('Incorrect login credentials!');
      }
    }
  };  

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleLogin();
    }
  };

  
  return (
    <>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet" />

      <div className="w-full flex">
        <div className="background w-1/2">
          <img className='w-32 p-6' src={logo} alt="" />
        </div>
        <div className="w-1/2 text-center justify-center">
          <div className="text-center justify-center px-72 mx-4 pt-8 pb-12">
            <img className='text-center justify-center' src={logo2} alt="" />
          </div>
          <div className="text">
              <h1 className='text-2xl pb-24 font-semibold text-indigo-900'>Login</h1>
            </div>
          <div className="">
            <div className="pb-6 flex justify-center">
              <FaUser style={{ alignItems: 'center', marginTop: '2%' }} size={22} />
              <input className="border border-gray-500 p-3 ml-3 pr-16 pl-3 mr-2 rounded" type="email" placeholder="Enter Email" value={email} onChange={(e) => setemail(e.target.value)}/>
            </div>
            <div className="pb-2 flex justify-center">
              <FaLock style={{ alignItems: 'center', marginTop: '2%' }} size={22} />
              <input className="border border-gray-500 p-3 ml-3 pr-16 pl-3 mr-2 rounded" type="password" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} onKeyDown={handleKeyDown}/>
            </div>
          </div>
          <div className="pt-16">
            <div className="">
              <button onClick={handleLogin} className='p-2 mb-2 bg-blue-600 hover:bg-blue-900 text-white rounded-sm px-8'>Login</button>
              <p className='underline text-m text-blue-800'><a href="./forgotpassword">Forgot Password?</a></p>
            </div>
          </div>
        </div>
      </div>


  </>
  );
};

export default Login;