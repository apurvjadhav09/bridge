import React, { useState } from 'react';
import './Login.css'
import { useNavigate } from 'react-router-dom';

import logo from '../Assets/logo.png'
import logo2 from '../Assets/logo2.png'
import user_icon from '../Assets/person.png'
import password_icon from '../Assets/password.png'

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showWarning] = useState(false);
    const navigate = useNavigate();
  
    const registeredUsers = {
      'user1@example.com': 'password1',
      'user2@example.com': 'password2',
      'user3@example.com': 'password3',
    };
  
    const handleLogin = () => {
      if (email === ''){
        alert('Please Enter User ID');
      }
      else if (password === ''){
        alert('Please Enter Password');
      }
      else{
      
      if (email in registeredUsers) {
        if (password === registeredUsers[email]) {
          console.log('Login successful');
          navigate('/ChangePassword');
        } else {
          alert('Incorrect User ID or Password');
          setEmail(''); // Clear email and pw
          setPassword('');
        }
      } else {
        alert('Incorrect User ID or Password');
        setEmail('');
        setPassword(''); 
      }}
    };

  return (
    <>
    <div className="Landing">
    <div className="background">
      <img src={logo} alt="" />
    </div>  
    <div className='container'>
      <div className="header">
        <img src={logo2} alt="" />
        <div className="text"><h1>Login</h1></div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        <div className="input">
          <img src={user_icon} alt="" />
          <input type="email" placeholder='User ID' value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="input">
          <img src={password_icon} alt="" />
          <input type="password" placeholder='Password'  value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
      </div>
      {/* <div className="forgotpw" onClick={handlePassword}><p><a href="">Forgot Password?</a></p></div> */}
      {showWarning && <div className="warning">Incorrect email or password</div>}
      <div className="submit-container">
        <div className="submit" onClick={handleLogin}>Login</div>
      </div>
      
    </div>
    </div>
    </>  
  )
}

export default Login;
