import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './tailwind.css';

import { MdSearch } from 'react-icons/md'

import logo from '../Assets/logo2.png';

const Home = () => {
  const navigate = useNavigate();
  const [showBridge, setshowBridge] = useState(false);

  const showAddBridge = (e) => {
    setshowBridge(!showBridge);
  };

  const addbridge = () => {
    navigate('./bridgeform');
  };



  const addcsv = () => {
    navigate('./Addexcel');
  };

  const [BackEndData, setBackEndData] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const email = localStorage.getItem('email');
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

  const handleRowClick = (bridgeName) => {
    RedirectDashboard(bridgeName);
  };

  // Filter the data based on searchKeyword
  const filteredData = BackEndData.filter(
    (data) =>
      data.bridge.bridgeName.toLowerCase().includes(searchKeyword.toLowerCase()) ||
      data.bridge.country.toLowerCase().includes(searchKeyword.toLowerCase()) ||
      data.bridge.state.toLowerCase().includes(searchKeyword.toLowerCase()) ||
      data.bridge.division.toLowerCase().includes(searchKeyword.toLowerCase())
  );

  return (
    <>
      <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet" />
        <button onClick={showAddBridge} className='text-center absolute mb-16 py-4 z-50 font-semibold text-3xl w-full bg-pink-600 hover:bg-pink-900 cursor-pointer text-white'>Click here to add a new bridge</button>
        {showBridge && (
          <div className="absolute w-full mt-16 pb-24 pt-20 bg-gray-200 shadow-2xl text-center border border-gray-300 rounded-sm">
          <div className="w-full flex justify-center">
            <img src={logo} alt="" />
          </div>
          <br /><br /><br />
          <div className="w-full">
            <h1 className="text-3xl font-bold text-black mb-8">Welcome, <br /><br />Choose a method to Register a new Bridge</h1>
          </div>
          <br /><br />
          <div className="w-full justify-center">
            <button onClick={addbridge} className="bg-blue-600 w-1/3 py-4 text-2xl font-semibold text-gray-100 rounded-sm hover:bg-blue-900">Add Manually</button>
            <br /><br /><br />
            <button onClick={addcsv} className="bg-blue-600 py-4 w-1/3 text-2xl font-semibold text-gray-100 rounded-sm hover:bg-blue-900">Upload Excel</button>
          </div>
          </div>
        )}
      <div className="w-full pt-16">
        <div className='flex py-5 px-6 bg-gray-200 border border-gray-300 shadow-2xl'>
          <div className="w-full justify-left">
            <img src={logo} alt="" />
          </div>
          <div className='flex w-full justify-center'>
          <h1 className='font-bold text-3xl'>Added Bridges</h1>
          </div>
          <div className="flex w-full justify-end items-center">
            <MdSearch size={36} className='text-gray-600'/>
            <input type="text" placeholder="Search" className="border bg-gray-200 w-56 border-gray-600 rounded-md p-2 mr-2 focus:outline-none" value={searchKeyword} onChange={(e) => setSearchKeyword(e.target.value)}/>
          </div>
        </div>
        <br />
        <div className="mt-4 bg-gray-100 border border-gray-200 rounded-sm shadow-2xl">
          <table className="table-auto w-full border-collapse border">
            <thead>
              <tr>
                <th className="border bg-black text-lg text-white px-2 py-4 font-bold">#</th>
                <th className="border bg-black text-lg text-white px-16 py-4 font-bold">Name</th>
                <th className="border bg-black text-lg text-white px-8 py-4 font-bold">Country</th>
                <th className="border bg-black text-lg text-white px-10 py-4 font-bold">State</th>
                <th className="border bg-black text-lg text-white px-8 py-4 font-bold">Division</th>
                <th className="border bg-black text-lg text-white px-8 py-4 font-bold">Coordinates</th>
                <th className="border bg-black text-lg text-white px-2 py-4 font-bold">Girders</th>
                <th className="border bg-black text-lg text-white px-2 py-4 font-bold">Spans</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.length > 0 ? (
                filteredData.map((data, index) => (
                  <tr key={index} onClick={() => handleRowClick(data.bridge.bridgeName)} className="hover:bg-gray-200 cursor-pointer border border-gray-300" >
                    <td className="border px-2 py-3">{data.bridge.bridgeid}</td>
                    <td className="border px-16 py-3">{data.bridge.bridgeName}</td>
                    <td className="border px-8 py-3">{data.bridge.country}</td>
                    <td className="border px-10 py-3">{data.bridge.state}</td>
                    <td className="border px-8 py-3">{data.bridge.division}</td>
                    <td className="border px-8 py-3">{data.bridge.coordinates}</td>
                    <td className="border px-2 py-3">{data.bridge.noofgirders}</td>
                    <td className="border px-2 py-3">{data.bridge.nobridgespan}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="8" className="py-3 text-center text-lg hover:bg-gray-200 cursor-pointer">No bridges found</td>
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
