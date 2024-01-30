import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './tailwind.css';


import logo2 from '../Assets/logo.png';
import { Navigate } from 'react-router-dom';

const SensorForm = () => {
  const { bridgeName } = useParams();
  const [formData, setFormData] = useState({
    nobridgespan: 1,
    noofgirders: 1,
    sensortype: 'Accelerometer',
    bridgesensorsno: '',
    sensorlocation: '',
  });

  const [backendData, setBackendData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:9090/  `);
        setBackendData((prevdata) => ({
          ...prevdata,
          bridgeName: response.data.bridgeName,
          country: response.data.country,
        }));
      } catch (error) {
        console.error('Error fetching data from the backend: ', error);
      }
    };

    fetchData();
  }, [bridgeName]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(formData.bridgesensorsno === '' || formData.sensorlocation === ''){
      alert('Please fill all the fiels!')
    }
    else{
      try{
        const response = await axios.post('http://localhost:9090/', {
          formData:formData,
        });
        alert('Sensor Added Successfully!')
        console.log('Backend response:', response.data);
        Navigate('./');
      }
      catch(error){
        console.error('Error submitting form: ', error);
      }
    };
  };
  
  const handleCancel = () => {
    setFormData({
      nobridgespan: 1,
      noofgirders: 1,
      sensortype: 'Accelerometer',
      bridgesensorsno: ' ',
      sensorlocation: ' ',
    });
  };

  const handleAddSensor = async (e) => {
    e.preventDefault();
    if(formData.bridgesensorsno === '' || formData.sensorlocation === ''){
      alert('Please fill all the fiels!')
    }
    else{
      try{
        const response = await axios.post('http://localhost:9090/', {
          formData:formData,
        });
        setFormData({
          nobridgespan: 1,
          noofgirders: 1,
          sensortype: 'Accelerometer',
          bridgesensorsno: ' ',
          sensorlocation: ' ',
        });
        alert('Sensor Added Successfully!')
        console.log('Backend response:', response.data);
        Navigate('../home');
      }
      catch(error){
        console.error('Error submitting form: ', error);
      }
    };
  };

  return (
    <>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet" />

    <div className="flex">

      <div className="sensor w-1/3">
        <img className='w-1/4 p-6' src={logo2} alt="" />
      </div>


      <div className="main w-2/3 pt-5 text-center">
      {backendData && (
        <div className="mb-4">
           <p className="text-lg font-semibold">Bridge Name: {backendData.bridgeName}, {backendData.country}</p>
        </div>
      )}
      <h1 className='py-5 text-center text-4xl text-pink-600 font-sans font-semibold'>Add Sensor Information</h1>
      <div className="mt-16 container mx-auto mt-8">
      <form className=''>
        <div className="mb-4">
          <label htmlFor="nobridgespan" className="block text-gray-700">Number of Bridge Spans:</label>
          <select id="nobridgespan" name="nobridgespan" value={formData.nobridgespan} onChange={handleInputChange} className="border cursor-pointer border-gray-300 p-2 w-2/3 rounded">
            {[...Array(50).keys()].map((span) => (<option key={span + 1} value={span + 1}>{span + 1}</option>))}
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="noofgirders" className="block text-gray-700">Number of Girders:</label>
          <select id="noofgirders" name="noofgirders" value={formData.noofgirders} onChange={handleInputChange} className="border cursor-pointer border-gray-300 p-2 w-2/3 rounded">
            {[...Array(20).keys()].map((girder) => (<option key={girder + 1} value={girder + 1}>{girder + 1}</option>))}
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="sensortype" className="block text-gray-700">Sensor Type:</label>
          <select id="sensortype" name="sensortype" value={formData.sensortype} onChange={handleInputChange} className="border cursor-pointer border-gray-300 p-2 w-2/3 rounded">
            <option value="Accelerometer">Accelerometer</option>
            <option value="Strain Gauge">Strain Gauge</option>
            <option value="Deflection Gauge">Deflection Gauge</option>
            <option value="Camera">Camera</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="bridgesensorsno" className="block text-gray-700">Sensor Number:</label>
          <input type="text" id="bridgesensorsno" name="bridgesensorsno" value={formData.bridgesensorsno} onChange={handleInputChange} className="border border-gray-300 p-2 w-2/3 rounded"/>
        </div>

        <div className="mb-4">
          <label htmlFor="sensorlocation" className="block text-gray-700">Sensor Location:</label>
          <input type="text" id="sensorlocation" name="sensorlocation" value={formData.sensorlocation} onChange={handleInputChange} className="border border-gray-300 p-2 w-2/3 rounded"/>
        </div>
        <div className='mt-16'>
        <button className="bg-pink-600 px-5 mx-2 py-2 text-gray-100 rounded-sm hover:bg-pink-900" onClick={handleSubmit}>Submit</button>
        <button className="bg-pink-600 px-5 mx-2 py-2 text-gray-100 rounded-sm hover:bg-pink-900" onClick={handleAddSensor}>Add Another Sensor</button>
        <button className="bg-pink-600 px-5 mx-2 py-2 text-gray-100 rounded-sm hover:bg-pink-900" onClick={handleCancel}>Cancel</button>
        </div>
      </form>
    </div>
  </div>
  </div>
    </>
  )
}

export default SensorForm;