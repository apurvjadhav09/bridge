import React, { useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './tailwind.css';

import logo2 from '../Assets/logo.png';



const SensorForm = () => {
  
  const [nobridgespan, setnobridgespan] = useState('1');
  const [noofgirders, setnoofgirders] = useState('1');
  const [sensortype, setsensortype]= useState('Accelerometer');
  const [bridgesensorsrno, setbridgesensorsrno]= useState('');
  const [sensorlocation, setsensorlocation]= useState('');
  const [country, setCountry] = useState('');
  const [state, setState] = useState('');
  const [division, setDivision] = useState('');
  const [coordinates, setCoordinates] = useState('');
  const [ownerName, setOwnerName] = useState('');
  const [adminName, setAdminName] = useState('');
  const [managerName, setManagerName] = useState('');


  const Navigate = useNavigate();

  useEffect(() => {
    const storedCountry = localStorage.getItem('country');
    const storedState = localStorage.getItem('state');
    const storedDivision = localStorage.getItem('division');
    const storedCoordinates = localStorage.getItem('coordinates');
    const storedOwnerName = localStorage.getItem('ownerName');
    const storedAdminName = localStorage.getItem('adminName');
    const storedManagerName = localStorage.getItem('managerName');
  
    setCountry(storedCountry || '');
    setState(storedState || '');
    setDivision(storedDivision || '');
    setCoordinates(storedCoordinates || '');
    setOwnerName(storedOwnerName || '');
    setAdminName(storedAdminName || '');
    setManagerName(storedManagerName || '');
  }, []);


  const handleSubmit = async (e) => {
    e.preventDefault();
    if(bridgesensorsrno === null || sensorlocation === null){
      alert('Please fill all the fiels!')
    }
    else{
      try{
        const response = await axios.post('http://localhost:9090/bridge/addSensorData', {
          nobridgespan:nobridgespan,
          noofgirders:noofgirders,
          sensortype:sensortype,
          bridgesensorsrno:bridgesensorsrno,
          sensorlocation:sensorlocation,
        });
        if(response.status >= 200 && response.status < 300){
          alert('Sensor Added Successfully!')
          console.log('Backend response:', response.data);
          Navigate('../home');
        }
      }
      catch(error){
        console.error('Error submitting form: ', error);
      }
    };
  };
  
  const handleCancel = () => {
    setnobridgespan('1');
    setnoofgirders('1');
    setsensortype('Accelerometer');
    setbridgesensorsrno(' ');
    setsensorlocation(' ');
  };

  const handleAddSensor = async (e) => {
    e.preventDefault();
    if(bridgesensorsrno === '' || sensorlocation === ''){
      alert('Please fill all the fiels!')
    }
    else{
      try{
        const response = await axios.post('http://localhost:9090/bridge/addSensorData', {
          nobridgespan:nobridgespan,
          noofgirders:noofgirders,
          sensortype:sensortype,
          bridgesensorsrno:bridgesensorsrno,
          sensorlocation:sensorlocation,
        });
          
        
        if(response.status >= 200 && response.status < 300){
          alert('Sensor Added Successfully!')
          console.log('Backend response:', response.data);
        }
          setnobridgespan('1');
          setnoofgirders('1');
          setsensortype('Accelerometer');
          setbridgesensorsrno(' ');
          setsensorlocation(' ');
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
        <img className='w-28 p-6' src={logo2} alt="" />
      </div>


      <div className="main w-2/3 pt-5 text-center">
      <div className="flex justify-center">
      <div>
        <div className="mb-4 px-2">
          <label htmlFor="sensorlocation" className="block text-gray-700">Country:</label>
          <input type="text" value={country} className="border border-gray-300 px-2 py-2" readOnly/>
        </div>
        <div className="mb-4 px-2">
          <label htmlFor="sensorlocation" className="block text-gray-700">State:</label>
          <input type="text" value={state} className="border border-gray-300 px-2 py-2" readOnly/>
        </div>
      </div>
    
      <div>
        <div className="mb-4 px-2">
          <label htmlFor="sensorlocation" className="block text-gray-700">Division:</label>
          <input type="text" value={division} className="border border-gray-300 px-2 py-2" readOnly/>
        </div>
        <div className="mb-4 px-2">
          <label htmlFor="sensorlocation" className="block text-gray-700">Coordinates:</label>
          <input type="text" value={coordinates} className="border border-gray-300 px-2 py-2" readOnly/>
        </div>
      </div>
      <div>
        <div className="mb-4 px-5">
          <label htmlFor="sensorlocation" className="block text-gray-700">Owner Name:</label>
          <input type="text" value={ownerName} className="border border-gray-300 px-2 py-2" readOnly/>
        </div>
        <div className="mb-4 px-5">
          <label htmlFor="sensorlocation" className="block text-gray-700">Admin Name:</label>
          <input type="text" value={adminName} className="border border-gray-300 px-2 py-2" readOnly/>
        </div>
      </div>
      <div>
        <div className="mb-4 px-5">
          <label htmlFor="sensorlocation" className="block text-gray-700">Manager Name:</label>
          <input type="text" value={managerName} className="border border-gray-300 px-2 py-2" readOnly/>
        </div>
      </div>
      </div>

      <h1 className='py-5 pt-14 text-center text-3xl text-pink-600 font-sans font-semibold'>Add Sensor Information</h1>
      <div className="container mx-auto mt-2">
      <form className=''>
        <div className='justify-center pt-8 mx-20 flex'>
          <div className="mb-4 px-5">
            <label htmlFor="nobridgespan" className="block text-gray-700">Number of Bridge Spans:</label>
            <select id="nobridgespan" name="nobridgespan" className="border cursor-pointer border-gray-300 p-2 w-full">
              {[...Array(50).keys()].map((span) => (<option key={span + 1} value={span + 1}>{span + 1}</option>))}
            </select>
          </div>

          <div className="mb-4 px-5">
            <label htmlFor="noofgirders" className="block text-gray-700">Number of Girders:</label>
            <select id="noofgirders" name="noofgirders" className="border cursor-pointer border-gray-300 p-2 w-full">
              {[...Array(20).keys()].map((girder) => (<option key={girder + 1} value={girder + 1}>{girder + 1}</option>))}
            </select>
          </div>
        

          <div className="mb-4 px-5">
            <label htmlFor="sensortype" className="block text-gray-700">Sensor Type:</label>
            <select id="sensortype" name="sensortype" className="border cursor-pointer border-gray-300 p-2 w-full">
              <option value="Accelerometer">Accelerometer</option>
              <option value="Strain Gauge">Strain Gauge</option>
              <option value="Deflection Gauge">Deflection Gauge</option>
              <option value="Camera">Camera</option>
            </select>
          </div>
        </div>
<br />
        <div className='flex justify-center mx-20 pb-8'>
          <div className="mb-4 px-5">
            <label htmlFor="bridgesensorsrno" className="block text-gray-700">Sensor Number:</label>
            <input type="text" id="bridgesensorsrno" name="bridgesensorsrno" className="border border-gray-300 px-10 py-2"/>
          </div>

          <div className="mb-4 px-5">
            <label htmlFor="sensorlocation" className="block text-gray-700">Sensor Location:</label>
            <input type="text" id="sensorlocation" name="sensorlocation" className="border border-gray-300 px-10 py-2"/>
          </div>
        </div>


        <div className='mt-6'>
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