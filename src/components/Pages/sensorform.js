import React, { useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './tailwind.css';

import logo from '../Assets/logo2.png';
import loadingIcon from '../Assets/loading.gif';


const SensorForm = () => {
  const [loading, setLoading] = useState(false);
  const [showAddSensor, setshowAddSensor] =useState(false);

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

  const handleSubmit1 = async(e) => {
    e.preventDefault();
    if(bridgesensorsrno === '' || sensorlocation === ''){
      alert('Please fill all the fiels!')
    }
    else {
      setshowAddSensor(!showAddSensor);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(bridgesensorsrno === '' || sensorlocation === ''){
      alert('Please fill all the fiels!')
    }
    else{
      try{
        setLoading(true);
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
        setshowAddSensor(false);
        setLoading(false);
        setsensortype('Accelerometer');
        setbridgesensorsrno('');
        setsensorlocation('');
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
    if (bridgesensorsrno === '' || sensorlocation === '') {
      alert('Please fill all the fields!');
    } else {
      try {
        setLoading(true);
        const response = await axios.post(`http://localhost:9090/bridge/addSensorData/${bid}`, {
          sensortype: sensortype,
          bridgesensorsrno: bridgesensorsrno,
          sensorlocation: sensorlocation,
        });
        if (response.status >= 200 && response.status < 300) {
          alert('Sensor Added Successfully!');
          console.log('Backend response:', response.data);
        }
      } catch (error) {
        console.error('Error submitting form: ', error);
      } finally {
        setLoading(false);
        setshowAddSensor(false);
        setsensortype('Accelerometer');
        setbridgesensorsrno('');
        setsensorlocation('');
      }
    }
  };

  return (
    <>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet" />

    <div className="">
      <img className='pl-6 pt-6 pb-6' src={logo} alt="" />
      <div className="flex w-full text-center">
      <div className="container w-1/2 box-border shadow-2xl mx-5 ml-10 my-8 p-6 bg-gray-100">
      <h1 className='text-center text-3xl text-black font-sans font-semibold'>Add Sensor Details</h1><br /><hr /><hr />
      <form>
        <div className='justify-center text-left pt-8 mx-20 block'>
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
        <div className='block justify-center text-left mx-20 pb-8'>
          <div className="mb-4 px-5">
            <label htmlFor="bridgesensorsrno" className="block text-gray-700">Sensor Number:</label>
            <input type="text" id="bridgesensorsrno" value={bridgesensorsrno} onChange={(e) => setbridgesensorsrno(e.target.value)} name="bridgesensorsrno" className="border border-gray-300 p-1 w-full rounded"/>
          </div>

          <div className="mb-4 px-5">
            <label htmlFor="sensorlocation" className="block text-gray-700">Sensor Location:</label>
            <input type="text" id="sensorlocation" value={sensorlocation} onChange={(e) => setsensorlocation(e.target.value)} name="sensorlocation" className="border border-gray-300 p-1 w-full rounded"/>
          </div>
        </div>

        {showAddSensor && (
        <div>
          {loading ? (
            <img id='Licon-sensorform' className='absolute' src={loadingIcon} alt="Loading" />
            ) : (
            <>
              <div id='sensorform-pop' className='absolute bg-white px-32 py-8 rounded shadow-2xl border border-black'>
                <h1 className='pb-8'>Do you want to add another sensor?</h1>
                <button className="bg-blue-600 px-5 mx-2 py-2 text-gray-100 rounded-sm hover:bg-blue-900" onClick={handleAddSensor}>Yes</button>
                <button className="bg-pink-600 px-5 mx-2 py-2 text-gray-100 rounded-sm hover:bg-pink-900" onClick={handleSubmit}>No</button>
              </div>
            </>
          )}
        </div>
          )}

        {/* Render the submit and cancel buttons only if showAddSensor is false */}
        {!showAddSensor && (
          <div className='my-6 text-center'>
            <button className="bg-blue-600 px-5 mx-2 py-2 text-gray-100 rounded-sm hover:bg-blue-900" onClick={handleSubmit1}>Submit</button>
            <button className="bg-black px-5 mx-2 py-2 text-gray-100 rounded-sm border border-black hover:bg-white hover:text-black" onClick={handleCancel}>Cancel</button>
          </div>
        )}
      </form>
    </div>

    <div className="box-border shadow-2xl w-1/2 p-6 bg-gray-100 mx-5 mr-10 my-8 justify-center text-left">
      <h1 className='text-center font-semibold text-3xl text-black'>Previously Entered Details</h1><br /><hr /><hr />
      <div className='flex pt-8'>
        <div className="mb-4 px-2 w-full">
          <label htmlFor="sensorlocation" className="block text-gray-700">Country:</label>
          <input type="text" value={country} className="border border-gray-300 bg-white p-1 w-full rounded" disabled/>
        </div>
        <div className="mb-4 px-2 w-full">
          <label htmlFor="sensorlocation" className="block text-gray-700">State:</label>
          <input type="text" value={state} className="border border-gray-300 bg-white p-1 w-full rounded" disabled/>
        </div>
        <div className="mb-4 px-2 w-full">
          <label htmlFor="sensorlocation" className="block text-gray-700">Division:</label>
          <input type="text" value={division} className="border border-gray-300 bg-white p-1 w-full rounded" disabled/>
        </div>
      </div>
    
      <div className='flex'>
        <div className="mb-4 px-2 w-full">
          <label htmlFor="sensorlocation" className="block text-gray-700">Coordinates:</label>
          <input type="text" value={coordinates} className="border border-gray-300 bg-white p-1 w-full rounded" disabled/>
        </div>
        <div className="mb-4 px-2 w-full">
          <label htmlFor="sensorlocation" className="block text-gray-700">Bridge Location:</label>
          <input type="text" value={bridgeLocation} className="border border-gray-300 bg-white p-1 w-full rounded" disabled/>
        </div>
        <div className="mb-4 px-2 w-full">
          <label htmlFor="sensorlocation" className="block text-gray-700">Bridge Name:</label>
          <input type="text" value={bridgeName} className="border border-gray-300 p-1 bg-white w-full rounded" disabled/>
        </div>
      </div>

      <div className='flex'>
      <div className="mb-4 px-2 w-full">
          <label htmlFor="nobridgespan" className="block text-gray-700">No of Spans:</label>
          <input type="text" value={nobridgespan} className="border border-gray-300 bg-white p-1 w-full rounded" disabled/>
        </div>
        <div className="mb-4 px-2 w-full">
          <label htmlFor="noofgirders" className="block text-gray-700">No of Girders:</label>
          <input type="text" value={noofgirders} className="border border-gray-300 p-1 bg-white w-full rounded" disabled/>
        </div>
      </div>
      
      <div className='flex'>
        <div className="mb-4 px-2 w-full">
          <label htmlFor="admins" className="block text-gray-700">Bridge Admin(s):</label>
          <select id="adminName" className="border text-gray-700 border-gray-300 p-1 w-full rounded" readOnly>
            <option value={adminName}>{adminName}</option>
            {adminName2 ? <option value={adminName2}>{adminName2}</option> : <option value="">Admin 2</option>}
            {adminName3 ? <option value={adminName3}>{adminName3}</option> : <option value="">Admin 3</option>}
          </select>
        </div>
        <div className="mb-4 px-2 w-full">
          <label htmlFor="managers" className="block text-gray-700">Bridge Manager(s):</label>
          <select id="adminName" className="border text-gray-700 border-gray-300 p-1 w-full rounded" readOnly>
            <option value={managerName}>{managerName}</option>
            {managerName2 ? <option value={managerName2}>{managerName2}</option>: <option value="">Manager 2</option>}
            {managerName3 ? <option value={managerName3}>{managerName3}</option>: <option value="">Manager 3</option>}
            {managerName4 ? <option value={managerName4}>{managerName4}</option>: <option value="">Manager 4</option>}
            {managerName5 ? <option value={managerName5}>{managerName5}</option>: <option value="">Manager 5</option>}
            {managerName6 ? <option value={managerName6}>{managerName6}</option>: <option value="">Manager 6</option>}
          </select>
        </div>
        <div className="mb-4 px-2 w-full">
          <label htmlFor="owners" className="block text-left text-gray-700 px-8">Bridge Owner(s):</label>
          <select id="adminName" className="border text-gray-700 border-gray-300 p-1 w-full rounded" readOnly>
            <option value={ownerName}>{ownerName}</option>:
            {ownerName2 ? <option value={ownerName2}>{ownerName2}</option>: <option value="">Owner 2</option>}
            {ownerName3 ? <option value={ownerName3}>{ownerName3}</option>: <option value="">Owner 3</option>}
          </select>
        </div>
      </div>
      </div>
  </div>
  </div>
  <br /><br />
    </>
  )
}

export default SensorForm;