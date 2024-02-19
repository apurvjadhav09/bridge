import React, { useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './tailwind.css';

import logo2 from '../Assets/logo.png';
import logo from '../Assets/logo2.png';



const SensorForm = () => {
  

  const [sensortype, setsensortype]= useState('Accelerometer');
  const [bridgesensorsrno, setbridgesensorsrno]= useState('');
  const [sensorlocation, setsensorlocation]= useState('');
  const [country, setCountry] = useState('');
  const [state, setState] = useState('');
  const [division, setDivision] = useState('');
  const [coordinates, setCoordinates] = useState('');
  const [bridgeLocation, setBridgeLocation] = useState('');
  const [bridgeName, setBridgeName] = useState('');
  const [noofgirders, setnoofgirders] = useState('');
  const [nobridgespan, setnobridgespan] = useState('');

  const [adminName, setAdminName] = useState('');
  const [adminName2, setAdminName2] = useState('');
  const [adminName3, setAdminName3] = useState('');

  const [managerName, setManagerName] = useState('');
  const [managerName2, setManagerName2] = useState('');
  const [managerName3, setManagerName3] = useState('');
  const [managerName4, setManagerName4] = useState('');
  const [managerName5, setManagerName5] = useState('');
  const [managerName6, setManagerName6] = useState('');

  const [ownerName, setOwnerName] = useState('');
  const [ownerName2, setOwnerName2] = useState('');
  const [ownerName3, setOwnerName3] = useState('');
  const bid = localStorage.getItem('bid');



  const Navigate = useNavigate();

  useEffect(() => {
    const storedCountry = localStorage.getItem('country');
    const storedState = localStorage.getItem('state');
    const storedBridgespan = localStorage.getItem('nobridgespan');
    const storedGirders = localStorage.getItem('noofgirders');
    const storedDivision = localStorage.getItem('division');
    const storedCoordinates = localStorage.getItem('coordinates');
    const location = localStorage.getItem('location')
    const storedbridgeName = localStorage.getItem('bridgeName');
    
    const storedOwnerName = localStorage.getItem('ownerName');
    const storedOwnerName2 = localStorage.getItem('ownerName2');
    const storedOwnerName3 = localStorage.getItem('ownerName3');

    const storedManagerName = localStorage.getItem('managerName');
    const storedManagerName2 = localStorage.getItem('managerName2');
    const storedManagerName3 = localStorage.getItem('managerName3');
    const storedManagerName4 = localStorage.getItem('managerName4');
    const storedManagerName5 = localStorage.getItem('managerName5');
    const storedManagerName6 = localStorage.getItem('managerName6');

    const storedAdminName = localStorage.getItem('adminName');
    const storedAdminName2 = localStorage.getItem('adminName2');
    const storedAdminName3 = localStorage.getItem('adminName3');


  
    setCountry(storedCountry || '');
    setState(storedState || '');
    setnobridgespan(storedBridgespan || '');
    setnoofgirders(storedGirders || '')
    setDivision(storedDivision || '');
    setCoordinates(storedCoordinates || '');
    setBridgeLocation(location || '');
    setBridgeName(storedbridgeName || '');

    setAdminName(storedAdminName || '');
    setAdminName2(storedAdminName2 || '');
    setAdminName3(storedAdminName3 || '');

    setManagerName(storedManagerName || '');
    setManagerName2(storedManagerName2 || '');
    setManagerName3(storedManagerName3 || '');
    setManagerName4(storedManagerName4 || '');
    setManagerName5(storedManagerName5 || '');
    setManagerName6(storedManagerName6 || '');

    setOwnerName(storedOwnerName || '');  
    setOwnerName2(storedOwnerName2 || '');  
    setOwnerName3(storedOwnerName3 || '');  

  }, []);


  const handleSubmit = async (e) => {
    e.preventDefault();
    if(bridgesensorsrno === '' || sensorlocation === ''){
      alert('Please fill all the fiels!')
    }
    else{
      try{
        const response = await axios.post(`http://localhost:9090/bridge/addSensorData/${bid}`, {
          sensortype:sensortype,
          bridgesensorsrno:bridgesensorsrno,
          sensorlocation:sensorlocation,
        });
        if(response.status >= 200 && response.status < 300){
          alert('Sensor Added Successfully!');
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
        const response = await axios.post(`http://localhost:9090/bridge/addSensorData/${bid}`, {
          sensortype:sensortype,
          bridgesensorsrno:bridgesensorsrno,
          sensorlocation:sensorlocation,
        });
          
        
        if(response.status >= 200 && response.status < 300){
          alert('Sensor Added Successfully!')
          console.log('Backend response:', response.data);
        }
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
      <div className="sensor w-1/2">
        <img className='w-32 p-6' src={logo2} alt="" />
      </div>
      <div className="main w-1/2 pt-5 text-center">
        <img className='mx-72 mt-2 mb-14' src={logo} alt="" />
      <h1  className='text-center pb-10 font-semibold text-3xl text-black'>&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash; Previously Entered Details &ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;</h1>

      <div className="inline-flex justify-center">
      <div>
        <div className="mb-4 px-2">
          <label htmlFor="sensorlocation" className="block text-gray-700">Country:</label>
          <input type="text" value={country} className="border border-gray-300 p-1 w-full rounded" disabled/>
        </div>
        <div className="mb-4 px-2">
          <label htmlFor="sensorlocation" className="block text-gray-700">State:</label>
          <input type="text" value={state} className="border border-gray-300 p-1 w-full rounded" disabled/>
        </div>
        <div className="mb-4 px-2">
          <label htmlFor="sensorlocation" className="block text-gray-700">Division:</label>
          <input type="text" value={division} className="border border-gray-300 p-1 w-full rounded" disabled/>
        </div>
        <div className="mb-4 px-2">
          <label htmlFor="nobridgespan" className="block text-gray-700">No of Spans:</label>
          <input type="text" value={nobridgespan} className="border border-gray-300 p-1 w-full rounded" disabled/>
        </div>
      </div>
    
      <div>
        
        <div className="mb-4 px-5">
          <label htmlFor="sensorlocation" className="block text-gray-700">Coordinates:</label>
          <input type="text" value={coordinates} className="border border-gray-300 p-1 w-full rounded" disabled/>
        </div>
        <div className="mb-4 px-5">
          <label htmlFor="sensorlocation" className="block text-gray-700">Bridge Location:</label>
          <input type="text" value={bridgeLocation} className="border border-gray-300 p-1 w-full rounded" disabled/>
        </div>
        <div className="mb-4 px-5">
          <label htmlFor="sensorlocation" className="block text-gray-700">Bridge Name:</label>
          <input type="text" value={bridgeName} className="border border-gray-300 p-1 w-full rounded" disabled/>
        </div>
        <div className="mb-4 px-5">
          <label htmlFor="noofgirders" className="block text-gray-700">No of Girders:</label>
          <input type="text" value={noofgirders} className="border border-gray-300 p-1 w-full rounded" disabled/>
        </div>
      </div>
      <div>
        
      </div>
      <div>
        <div className="mb-4 px-5">
          <label htmlFor="sensorlocation" className="block text-gray-700">Bridge Admin(s):</label>
          <select id="adminName" className="border text-gray-700 border-gray-300 p-1 w-full rounded" readOnly>
            <option value={adminName}>{adminName}</option>
            {adminName2 ? <option value={adminName2}>{adminName2}</option> : <option value="">Admin 2</option>}
            {adminName3 ? <option value={adminName3}>{adminName3}</option> : <option value="">Admin 3</option>}
          </select>
        </div>
        <div className="mb-4 px-5">
          <label htmlFor="sensorlocation" className="block text-gray-700">Bridge Manager(s):</label>
          <select id="adminName" className="border text-gray-700 border-gray-300 p-1 w-full rounded" readOnly>
            <option value={managerName}>{managerName}</option>
            {managerName2 ? <option value={managerName2}>{managerName2}</option>: <option value="">Manager 2</option>}
            {managerName3 ? <option value={managerName3}>{managerName3}</option>: <option value="">Manager 3</option>}
            {managerName4 ? <option value={managerName4}>{managerName4}</option>: <option value="">Manager 4</option>}
            {managerName5 ? <option value={managerName5}>{managerName5}</option>: <option value="">Manager 5</option>}
            {managerName6 ? <option value={managerName6}>{managerName6}</option>: <option value="">Manager 6</option>}
          </select>
        </div>
        <div className="mb-4 px-5">
          <label htmlFor="sensorlocation" className="block text-gray-700 px-8">Bridge Owner(s):</label>
          <select id="adminName" className="border text-gray-700 border-gray-300 p-1 w-full rounded" readOnly>
            <option value={ownerName}>{ownerName}</option>:
            {ownerName2 ? <option value={ownerName2}>{ownerName2}</option>: <option value="">Owner 2</option>}
            {ownerName3 ? <option value={ownerName3}>{ownerName3}</option>: <option value="">Owner 3</option>}
          </select>
        </div>
      </div>
      </div>
      <br /><br />

      <h1 className='py-5 pt-14 text-center text-3xl text-black font-sans font-semibold'>&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash; Add Sensor Information &ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;</h1>
      <div className="container mx-auto mt-2">
      <form>
        <div className='justify-center pt-8 mx-20 block'>
          <div className="mb-4 px-5">
            <label htmlFor="sensortype" className="block text-gray-700">Sensor Type:</label>
            <select id="sensortype" onChange={(e) => setsensortype(e.target.value)} name="sensortype" value={sensortype} className="border border-gray-300 p-1 w-full rounded">
              <option value="Accelerometer">Accelerometer</option>
              <option value="Strain Gauge">Strain Gauge</option>
              <option value="Deflection Gauge">Deflection Gauge</option>
              <option value="Camera">Camera</option>
            </select>
          </div>
        </div>
        <div className='block justify-center mx-20 pb-8'>
          <div className="mb-4 px-5">
            <label htmlFor="bridgesensorsrno" className="block text-gray-700">Sensor Number:</label>
            <input type="text" id="bridgesensorsrno" value={bridgesensorsrno} onChange={(e) => setbridgesensorsrno(e.target.value)} name="bridgesensorsrno" className="border border-gray-300 p-1 w-full rounded"/>
          </div>

          <div className="mb-4 px-5">
            <label htmlFor="sensorlocation" className="block text-gray-700">Sensor Location:</label>
            <input type="text" id="sensorlocation" value={sensorlocation} onChange={(e) => setsensorlocation(e.target.value)} name="sensorlocation" className="border border-gray-300 p-1 w-full rounded"/>
          </div>
        </div>

        <div className='my-6 text-center'>
        <button className="bg-blue-600 px-5 mx-2 py-2 text-gray-100 rounded-sm hover:bg-blue-900" onClick={handleSubmit}>Submit</button>
        <button className="bg-pink-600 px-5 mx-2 py-2 text-gray-100 rounded-sm hover:bg-pink-900" onClick={handleAddSensor}>Add Another Sensor</button>
        <button className="bg-black px-5 mx-2 py-2 text-gray-100 rounded-sm hover:bg-gray-900" onClick={handleCancel}>Cancel</button>
        </div>
      </form>
    </div>
  </div>
  </div>
    </>
  )
}

export default SensorForm;