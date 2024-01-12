import React, { useState } from 'react';
import './Login.css'
import { useNavigate } from 'react-router-dom';

import logo from '../Assets/logo.png';
import logo2 from '../Assets/logo2.png';

const ChangePassword = () => {

    const [CurrentPassword, setCurrentPassword] = useState('');
    const [NewPassword, setNewPassword] = useState('');
    const [ConfirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();

    const password = ['password1', 'password2', 'password3'];

    const handleConfirm = () => {

      if (CurrentPassword === ''){
        alert('Please Enter Current Password');
      }
      else if (NewPassword === ''){
        alert('Please Enter New Password');
      }
      else if (ConfirmPassword === ''){
        alert('Please Confirm your Password');
      }
      else if(CurrentPassword === NewPassword){
        alert('New Password cannot be the same as the old one');
        setCurrentPassword('');
        setNewPassword('');
        setConfirmPassword('');
      }
      else if(NewPassword !== ConfirmPassword){
        alert('Incorrect Confirmation');
        setCurrentPassword('');
        setNewPassword('');
        setConfirmPassword('');
      }
      else if(!password.includes(CurrentPassword)){
        alert('Incorrect Current Password');
        setCurrentPassword('');
        setNewPassword('');
        setConfirmPassword('');
      }
      else{
        navigate('/Home');
      } 
    };

  return (
    <>
    <div className="Landing">
    <div className="background">
      <img src={logo} alt="" />
    </div>  
    <div className='container'>
      <div className="header1">
        <img src={logo2} alt="" />
        <div className="text1"><h1>Change Password</h1></div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        <div className="input">
          <input type="text" placeholder='Enter Current Password' value={CurrentPassword} onChange={(e) => setCurrentPassword(e.target.value)} />
        </div>
        <div className="input">
          <input type="password" placeholder='Enter New Password'  value={NewPassword} onChange={(e) => setNewPassword(e.target.value)} />
        </div>
        <div className="input">
          <input type="password" placeholder='Confirm Password'  value={ConfirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
        </div>
      </div>
      <div className="submit-container">
        <div className="submit1" onClick={handleConfirm}>Confirm</div>
      </div>
      
    </div>
    </div>
    </>  
  )
}

export default ChangePassword;

