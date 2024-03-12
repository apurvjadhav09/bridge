import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import logo from '../Assets/logo.png'
import logo2 from '../Assets/logo2.png';

import { MdSearch } from 'react-icons/md';


function Bridges() {
    const [backEndData, setBackEndData] = useState([]);
    const [searchKeyword, setSearchKeyword] = useState('');
    const navigate = useNavigate();
  
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
    
    const redirectDashboard = (bridgeName) => {
        localStorage.setItem('bridgeName', bridgeName);
        navigate('/home/dashboard');
    };

    const handleSearch = (e) => {
        setSearchKeyword(e.target.value);
    };

    const filteredData = backEndData.filter((data) =>
        data.bridge.bridgeName.toLowerCase().includes(searchKeyword.toLowerCase())
    );
    

    return (
        <>
            <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet" />
            

            <div className="flex w-full">
                <div className='w-1/2 p-6'>
                    <div className='flex pb-6 text-center'>
                        <div className='w-1/2'>
                            <img className='w-40' src={logo2} alt="" />
                        </div>
                        <div className='w-1/2 flex justify-end'>
                            <MdSearch size={36} />
                            <input type="text" placeholder="Search" value={searchKeyword} onChange={handleSearch} className="border border-gray-300 p-2 rounded-md"/>
                        </div>
                    </div>
                <h1 className='font-bold text-3xl py-6'>Added Bridges</h1>

                <table className="min-w-full border-collapse border border-gray-300">
                    <thead>
                        <tr>
                            <th className="border border-gray-300 px-4 py-2">Bridge Name</th>
                            <th className="border border-gray-300 px-4 py-2">Number of Girders</th>
                            <th className="border border-gray-300 px-4 py-2">Number of Spans</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.length > 0 ? (
                            filteredData.map((data, index) => (
                                <tr key={index} className="hover:bg-gray-100 cursor-pointer" onClick={() => redirectDashboard(data.bridge.bridgeName)}>
                                    <td className="border border-gray-300 px-4 py-2">{data.bridge.bridgeName}</td>
                                    <td className="border border-gray-300 px-4 py-2">{data.bridge.numGirders}</td>
                                    <td className="border border-gray-300 px-4 py-2">{data.bridge.numSpans}</td>
                                </tr>
                            ))
                            ) : (
                            <tr>
                                <td colSpan="3" className="border border-gray-300 px-4 py-2 text-center hover:bg-gray-100 cursor-pointer">No bridges found</td>
                            </tr>
                        )}
                    </tbody>
                </table>
                </div>

                <div id='globe' className='w-1/2'>
                    <img className='w-32 p-6' src={logo} alt="" />
                </div>
               
            </div>
        </>
    );
}

export default Bridges;
