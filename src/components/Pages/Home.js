import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { IoIosArrowDropdown } from "react-icons/io";

import bridge from '../Assets/Bridge.png';

const Home = () => {
  
  const navigate = useNavigate();
  const addbridge = () => {
    navigate('./bridgeform')
  };

  const addcsv = () => {
    navigate('./Addexcel')
  };

  const [BackEndData, setBackEndData] = useState([]);
  const [Dropdown, setDropdown] = useState(false);
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const email=localStorage.getItem('email')
       
        const response = await axios.get(`http://localhost:9090/bridge/showbridge?email=${email}`);
        if (response.status === 200) {
          console.log(response.data);
          setBackEndData(response.data);
         
        
         
        } else {
          console.error('Failed to fetch data:', response.statusText);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };
  
    fetchData();
  }, []);
  
  const Drop = () => {
    setDropdown(!Dropdown);
  };

  const RedirectDashboard = (bridgeName) => {
    localStorage.setItem('bridgeName', bridgeName);
    navigate('/home/dashboard');
  };
 
  return (
    <>
      <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet" />
      <div className="flex">
        <div className="w-1/2">
          <img src={bridge} alt="" />
        </div>
        <div className='text-center w-1/2 pr-6'>
          <h1 className='text-4xl font-bold text-pink-600 my-12'>REGISTER</h1>
          <h1 className='text-white font-sm mb-6 text-l cursor-pointer bg-black px-3 py-2 rounded-sm hover:bg-pink-600' onClick={Drop}>Select a method to Enter Data &nbsp;&nbsp; <IoIosArrowDropdown style={{alignItems: 'center' , display:'inline-flex'}} size={24}/></h1>
          {Dropdown && (
          <div className='grid justify-center'>
            <button onClick={addbridge} className='bg-pink-600 px-3 mx-5 mb-5 py-2 text-gray-100 rounded-sm hover:bg-black'>Add Manually</button>
            <button onClick={addcsv} className='bg-pink-600 px-4 py-2 mx-5 text-gray-100 rounded-sm hover:bg-black'>Upload Excel</button>
          </div>
          )}

          <br /><br /><br /><hr /><hr />
          <div className="mt-4">
            <h2 className="text-2xl font-bold mb-2">Added Bridges:</h2>
            <hr /><hr />
            <br /><br />
            <ul>
           
             {BackEndData.length > 0 ? (
              <ul>
              {BackEndData.map((data, index) => (
                <div key={index}>
                  <p className='cursor-pointer text-gray-600 hover:underline' onClick={() => RedirectDashboard(data.bridge.bridgeName)}>
                     {data.bridge.bridgeName}
                  </p>
                  <hr />
                </div>
              ))}
            </ul>
            
            ) : (
              <p>No bridges found</p>
            )}
            </ul>
       
          </div>
        </div>
      </div>


    </>
  );
};

export default Home;