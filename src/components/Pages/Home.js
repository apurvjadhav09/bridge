import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import bridge from '../Assets/Bridge.png';

const Home = () => {
  // const [bridges, setBridges] = useState([]);
  const navigate = useNavigate();
  const addbridge = () => {
    navigate('./bridgeform')
  };

  const addcsv = () => {
    navigate('./Addexcel')
  };

  const [BackEndData, setBackEndData] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
      console.log(response)
      setBackEndData(response.data) 
    })
  },[])

  const RedirectDashboard = () => {
    navigate('/home/superuserhome');
  };

  return (
    <>
      <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet" />
      <div className="flex">
        <div className="w-1/2">
          <img src={bridge} alt="" />
        </div>
        <div className='text-center w-1/2'>
          <h1 className='text-3xl font-bold my-12'>Welcome</h1>
          <h1 className='font-semibold pb-6 text-xl'>Select method to Enter Data</h1>
          <div className='flex justify-center'>
            <button onClick={addbridge} className='bg-pink-600 px-3 mx-5 py-2 text-gray-100 rounded-sm hover:bg-pink-900'>Add Manually</button>
            <button onClick={addcsv} className='bg-pink-600 px-4 py-2 mx-5 text-gray-100 rounded-sm hover:bg-pink-900'>Upload Excel</button>
          </div>

          <br /><br /><br /><hr /><hr />
          <div className="mt-4">
            <h2 className="text-2xl font-bold mb-2">Added Bridges:</h2>
            <hr /><hr />
            <br /><br />
            <ul>
            {BackEndData.map((data) =>{
              return(
              <div key={data.id}>
                <p className='cursor-pointer text-gray-600 hover:underline' onClick={RedirectDashboard}>aadouahdiuawdhuhdnoawdnoui{data.bridgeName}</p>
                <hr />
              </div>
            )
            })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
