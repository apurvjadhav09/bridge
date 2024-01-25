import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import bridge from '../Assets/Bridge.png';

const Home = () => {
  const [bridges, setBridges] = useState([]);
  const navigate = useNavigate();
  const addbridge = () => {
    navigate('./bridgeform')
  }

  const fetchBridges = async () => {
    try {
      const response = await fetch('http://localhost:9090/bridge/getbridge');
      const data = await response.json();
      setBridges(data);
    } catch (error) {
      console.error('Error fetching bridges', error);
    }
  };

  // Fetch the bridges when the component mounts
  useEffect(() => {
    fetchBridges();
  }, []);

  return (
    <>
      <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet" />
      <div className="flex">
        <div className="w-1/2">
          <img src={bridge} alt="" />
        </div>
        <div className='text-center w-1/2'>
          <h1 className='text-3xl font-bold my-16'>Welcome</h1>
          <div>
            <button onClick={addbridge} className='bg-blue-500 px-5 py-4 text-gray-100 rounded-xl hover:bg-blue-700'>Add Bridge</button>
            <h1>OR</h1>
            <input className='mx-5' type="file" accept=".csv" />
          </div>

          {/* Display added bridges */}
          <div className="mt-4">
            <h2 className="text-2xl font-bold mb-2">Added Bridges:</h2>
            <ul>
              {bridges.map((bridge, index) => (
                <li key={index}>{bridge.name}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
