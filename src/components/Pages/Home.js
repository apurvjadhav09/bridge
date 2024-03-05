import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './tailwind.css';

import logo from '../Assets/logo2.png'

const Home = () => {
  
  const navigate = useNavigate();
  const addbridge = () => {
    navigate('./bridgeform')
  };

  const addcsv = () => {
    navigate('./Addexcel')
  };

  const [BackEndData, setBackEndData] = useState([]);
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const email=localStorage.getItem('email')
       
        const response = await axios.get(`http://localhost:9090/bridge/showbridge?email=${email}`);
        if (response.status >= 200 && response.status < 300) {
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
  

  const RedirectDashboard = (bridgeName) => {
    localStorage.setItem('bridgeName', bridgeName);
    navigate('/home/dashboard');
  };
 
  return (
    <>
      <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet" />
      <div className='flex justify-center my-10'>
        <img src={logo} alt="" />
      </div>
      <div className="w-full bg-white">
      <div className='m-6 py-12 mx-20 bg-gray-200 shadow-2xl text-center border border-gray-300 rounded-sm'>
        <div className='w-full'>
          <h1 className='text-3xl font-bold text-black mb-8'>REGISTER NEW BRIDGE</h1>  
        </div>
        <div className='w-full flex justify-center'>
          <button onClick={addbridge} className='bg-pink-600 px-3 mx-5 w-1/3 py-2 text-xl font-semibold text-gray-100 rounded-sm hover:bg-pink-900'>Add Manually</button><br />
          <button onClick={addcsv} className='bg-pink-600 px-3 py-2 mx-5 w-1/3 text-xl font-semibold text-gray-100 rounded-sm hover:bg-pink-900'>Upload Excel</button>
        </div>
      </div>
      <br />
    <div className="mt-4 bg-gray-100 border border-gray-200 rounded-sm shadow-2xl m-4 mx-6">
    <h1 className='text-3xl p-4 text-center font-bold text-black mb-6'>Added Bridges</h1>  
    <table className="table-auto w-full border-collapse border">
        <thead>
            <tr>
                <th className="border bg-black text-lg text-white px-4 py-4 font-bold">Bridge Name</th>
                <th className="border bg-black text-lg text-white px-4 py-4 font-bold">Number of Girders</th>
                <th className="border bg-black text-lg text-white px-4 py-4 font-bold">Number of Spans</th>
            </tr>
        </thead>
        <tbody>
            {BackEndData.length > 0 ? (
                BackEndData.map((data, index) => (
                    <tr key={index} onClick={RedirectDashboard} className="hover:bg-gray-200 cursor-pointer border border-gray-300">
                        <td className="border px-4 py-2">{data.bridge.bridgeName}</td>
                        <td className="border px-4 py-2">{data.bridge.noofgirders}</td>
                        <td className="border px-4 py-2">{data.bridge.nobridgespans}</td>
                    </tr>
                ))
            ) : (
                <tr>
                    <td colSpan="3" className="px-4 py-2 text-center text-lg border border-gray-300 hover:bg-gray-200 cursor-pointer">No bridges found</td>
                </tr>
            )}
        </tbody>
      </table>
    </div>

      </div>


    </>
  );
};

export default Home;