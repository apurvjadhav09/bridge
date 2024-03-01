import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './tailwind.css';

import { FaUser, FaLock } from "react-icons/fa";
import { IoArrowBackCircleSharp } from "react-icons/io5";

import logo from '../Assets/logo.png';
import logo2 from '../Assets/logo2.png';

import loadingIcon from '../Assets/loading.gif';


function Forgotpw() {
    const [email, setEmail] = useState('');
    const [randomCharacters, setRandomCharacters] = useState('');
    const [userInput, setUserInput] = useState('');
    const [loading, setLoading] = useState(false);
    const [showTimeout, setshowTimeout] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        generateRandomCharacters();
    }, []);

    const generateRandomCharacters = () => {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        for (let i = 0; i < 6; i++) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        setRandomCharacters(result);
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        if (email === '') {
            alert('Please Enter User ID');
          } 
          else if(userInput !== randomCharacters){
            alert('Incorrect Captcha!')
            setUserInput('');
          }
          else {
            try {
              setLoading(true);
              const response = await axios.post('http://localhost:9090/login', {
                email: email,
              });
              if (response.status >= 200 && response.status < 300) {
                console.log('Successful', response);      
                setLoading(false);
                setshowTimeout(true);
              } 
              else {
                alert('Incorrect Inputs!');
                setEmail('');
                setRandomCharacters('');
                setLoading(false);
              }
            } catch (error) {
              console.error('Error during login:', error);
              alert('An error occurred during login.');
              setLoading(false);
            }
          }
    };

    const handleKeyDown = (e) => {
      if (e.key === 'Enter') {
        handleSubmit();
      }
    };
  
    const PrevFrom = () => {
      navigate('/');
    };


    return (
        <>
            <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet" />
            <div className='flex'>
                <div id='forgotpw' className='w-1/2'>
                    <img className='p-6 w-32' src={logo} alt="" />
                </div>
                <div className='w-1/2'>
                  <button type="submit" onClick={PrevFrom} className="inline-flex underline mt-4 p-2 hover:text-blue-800"><IoArrowBackCircleSharp size={32}/>Back</button>
                    <img className=' px-72' src={logo2} alt="" />
                    <h1 className='text-center pb-8 text-indigo-900 pt-8 text-2xl font-semibold'>Forgot Password?</h1>
                    <p className='px-16 pb-16 text-center'>Please provide your email address, and we'll promptly send you a secure link to reset your password via email.</p>
                    <div className='flex justify-center'>
                        <FaUser style={{ alignItems: 'center', marginTop: '2%' }} size={22} />
                        <input className="border border-gray-500 bg-gray-100 p-3 ml-3 w-1/3 pl-3 mr-2 rounded" type="email" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className='flex justify-center pt-6'>
                        <FaLock style={{ alignItems: 'center', marginTop: '2%' }} size={22}/>
                        <input className="border border-gray-500 bg-gray-100 p-3 ml-3 w-1/3 pl-3 mr-2 rounded" type="text" placeholder="Enter Captcha" value={userInput} onChange={(e) => setUserInput(e.target.value)} onKeyDown={handleKeyDown}/>
                    </div>
                    <p className='text-center mt-12 font-semibold'>Captcha</p>
                    <p className='text-center mb-6 bg-gray-800 text-white mx-72 p-4 rounded text-2xl'><strong>{randomCharacters}</strong></p>
                    <div className='text-center'>
                      {loading ? (
                        <img id='Licon-forgotpw' className='absolute' src={loadingIcon} alt="Loading" />
                        ) : (
                        <button onClick={handleSubmit} className='p-2 bg-blue-600 hover:bg-blue-900 px-5 text-white rounded-sm'>Submit</button>
                        )}
                    </div>
                </div>
            </div>
            {showTimeout && (
              <div>
                <h1>We have sent you a link on your mail if your email id is registered</h1>
              </div>
            )}
        </>
    )
}

export default Forgotpw;
