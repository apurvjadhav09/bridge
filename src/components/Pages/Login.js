import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';
import { useNavigate } from 'react-router-dom';

import logo from '../Assets/logo.png';
import logo2 from '../Assets/logo2.png';
import user_icon from '../Assets/person.png';
import password_icon from '../Assets/password.png';

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
  
        if (response.status >= 200 && response.status < 300) {
          console.log('Login successful');
          const token = response.data.token;
          localStorage.setItem('authToken', token);
          navigate('/');
        } else {
          alert('Incorrect User ID or Password');
          setemail('');
          setPassword('');
        }
      } catch (error) {
        console.error('Error during login:', error);
        alert('An error occurred during login.');
      }
    }
  };  
  
  return (
    <>
    <section className='dekstop'>
      <div className="Landing">
        <div className="background">
          <img src={logo} alt="" />
        </div>
        <div className="container">
          <div className="header">
            <img src={logo2} alt="" />
            <div className="text">
              <h1>Login</h1>
            </div>
            <div className="underline"></div>
          </div>
          <div className="inputs">
            <div className="input">
              <img src={user_icon} alt="" />
              <input
                type="email"
                placeholder="User ID"
                value={email}
                onChange={(e) => setemail(e.target.value)}
              />
            </div>
            <div className="input">
              <img src={password_icon} alt="" />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div className="submit-container">
            <div className="submit" onClick={handleLogin}>
              Login
            </div>
          </div>
        </div>
      </div>
      </section>


      <section className='responsive'>
      <div className="Landing1">
        <div className="background1">
          <img src={logo} alt="" />
        </div>
        <div className="container1">
          <div className="header1">
            <img src={logo2} alt="" />
            <div className="text1">
              <h1>Login</h1>
            </div>
            <div className="underline1"></div>
          </div>
          <div className="inputs1">
            <div className="input1">
              <img src={user_icon} alt="" />
              <input
                type="email"
                placeholder="User ID"
                value={email}
                onChange={(e) => setemail(e.target.value)}
              />
            </div>
            <div className="input1">
              <img src={password_icon} alt="" />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div className="submit-container1">
            <div className="submit1" onClick={handleLogin}>
              Login
            </div>
          </div>
        </div>
      </div>
      </section>
    </>
  );
};

export default Login;