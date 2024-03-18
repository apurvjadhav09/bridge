import React, { useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './tailwind.css';

import logo from '../Assets/logo2.png';
import loadingIcon from '../Assets/loading.gif';

import { IoIosWarning } from "react-icons/io";
import { MdCancel } from "react-icons/md";

const Sensorformexcel = () => {

  const [loading, setLoading] = useState(false);
  const [showAddSensor, setshowAddSensor] =useState(false);
  const [showAddSensors, setshowAddSensors] =useState(false);
  const [showSensorError, setshowSensorError] = useState(false);
  const [numSensors, setNumSensors] = useState('');
  const [sensorLocations, setSensorLocations] = useState([]);
  const [showAddLocation, setshowAddLocation] = useState(false);
  const [showLocations, setshowLocations] = useState(false);

  const [sensortype, setsensortype]= useState('');
  const [spanno, setspanno] = useState(0);
  const [girderno, setgirderno] = useState(0);
  const bid = localStorage.getItem('bid');

  const nobridgespan = useState('');
  const noofgirders = useState('');


  const Navigate = useNavigate();

  const [BackEndData, setBackEndData] = useState([]);

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

  const handleSensorTypeChange = (e) => {
    setsensortype(e.target.value);
    setshowAddSensors(true);
  };

  const handleNumSensorsChange = (e) => {
    e.preventDefault();
    const newNumSensors = parseInt(e.target.value);
    setNumSensors(newNumSensors);
    const locations = Array.from({ length: newNumSensors }, (_, index) => ({
      spanno: '',
      girderno: '',
    }));
    setshowAddLocation(!showAddLocation);
    setSensorLocations(locations);
    setshowLocations(!showLocations);
  };


  const handleSubmit1 = async(e) => {
    e.preventDefault();
    if(sensortype === ''){
      setshowSensorError(true);
      setTimeout(() => {
        setshowSensorError(false);
    }, 5000);
    }
    else {
      setshowAddSensor(!showAddSensor);
    }
  };


  const handleLocationChange = (index, field, value) => {
    const updatedLocations = [...sensorLocations];
    updatedLocations[index][field] = value;
    setSensorLocations(updatedLocations);
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (sensortype === '' || numSensors === '' || girderno === '' || spanno === '') {
      alert('Please fill all the fields!');
      setshowAddSensor(false);
    } else {
      try {
        setLoading(true);
        const sensorData = [];
        
        // Loop through each sensor location and push sensor data to sensorData array
        sensorLocations.forEach((location) => {
          sensorData.push({
            sensortype: sensortype,
            spanno: location.spanno,
            girderno: location.girderno,
          });
        });
  
        // Post sensor data for each location separately
        for (const data of sensorData) {
          const response = await axios.post(`http://localhost:9090/bridge/addSensorData/${bid}`, [data]);
          if (response.status >= 200 && response.status < 300) {
            console.log('Sensor Added Successfully:', data);
            alert('All Sensors Added Successfully!');
            Navigate('../home');
          }
        }  
      } catch (error) {
        console.error('Error submitting form: ', error);
        alert('Failed to submit form. Please try again later.');
      } finally {
        setLoading(false);
        setshowAddSensor(false);
        setshowAddSensors(false);
        setNumSensors('');
        setsensortype('');
        setspanno('');
        setgirderno('');
      }
    }
  };

  const viewLocation = (e) => {
    e.preventDefault();
    setshowAddLocation(true);
  }

  const handleCancel = () => {
    setsensortype('');
    setshowAddSensors(false);
    setspanno('');
    setgirderno('');
  };

const handleAddSensor = async (e) => {
  e.preventDefault();
  if (sensortype === '' || numSensors === '' || girderno === '' || spanno === '') {
    alert('Please fill all the fields!');
    setshowAddSensor(false);
  } else {
    try {
      setLoading(true);
      const sensorData = [];
      
      // Loop through each sensor location and push sensor data to sensorData array
      sensorLocations.forEach((location) => {
        sensorData.push({
          sensortype: sensortype,
          spanno: location.spanno,
          girderno: location.girderno,
        });
      });

      // Post sensor data for each location separately
      for (const data of sensorData) {
        const response = await axios.post(`http://localhost:9090/bridge/addSensorData/${bid}`, [data]);
        if (response.status >= 200 && response.status < 300) {
          console.log('Sensor Added Successfully:', data);
        }
      }
      alert('All Sensors Added Successfully!');
    } catch (error) {
      console.error('Error submitting form: ', error);
      alert('Failed to submit form. Please try again later.');
    } finally {
      setLoading(false);
      setshowAddSensor(false);
      setshowAddSensors(false);
      setNumSensors('');
      setsensortype('');
      setspanno('');
      setgirderno('');
    }
  }
};

  const handleSubmit2 = (e) => {
    e.preventDefault();
    if (girderno === '' || spanno === '') {
      alert('Please fill all the fields!');
    }
    else{
      setshowAddLocation(false);
    }
  };

  const handleCancel2 = () => {
    setshowAddLocation(false);
  };

  return (
      <>
      { showSensorError && ( 
        <div className='absolute text-center mt-12 w-full flex justify-center items-center'>
          <h1 className='p-4 px-6 border flex border-black rounded-sm shadow-2xl bg-yellow-200 font-semibold'><IoIosWarning size={24}/>Please Fill in all the fields!</h1>
        </div>
      )}
      <div className="">
        <img className='pl-6 pt-6 pb-6' src={logo} alt="" />
        <div className="flex w-full text-center">
        <div className="container w-1/2 box-border shadow-2xl mx-5 ml-10 my-8 p-6 bg-gray-100">
        <h1 className='text-center text-3xl text-black font-sans font-semibold'>Add Sensor Details</h1><br /><hr /><hr />
        <form>
          <div className='justify-center text-left pt-8 mx-20 block'>
            <div className="mb-4 px-5">
              <label htmlFor="sensortype" className="block text-gray-700">Sensor Type:</label>
              <select id="sensortype" onChange={handleSensorTypeChange} name="sensortype" value={sensortype} className="border border-gray-300 p-1 w-full rounded">
                <option value="" disabled>Select Sensor Type</option>
                <option value="Accelerometer">Accelerometer</option>
                <option value="Strain Gauge">Strain Gauge</option>
                <option value="Deflection Gauge">Deflection Gauge</option>
                <option value="Camera">Camera</option>
              </select>
            </div>
            {showAddSensors && (
              <div id='sensorform-pop1' className="mx-5 mb-4">
                <label htmlFor="numSensors" className="block text-gray-700">Number of Sensors:</label>
                <select id="numSensors" onChange={handleNumSensorsChange} value={numSensors} className="border border-gray-300 p-1 w-full rounded">
                  {Array.from({ length: 21 }, (_, index) => (
                    <option key={index} value={index}>{index}</option>
                  ))}
                </select>
              </div>
            )}
            {showLocations && (
              <div className='mx-5 mb-12 mt-9'>
                <button id="numSensors" onClick={viewLocation} className="border border-gray-300 bg-black text-white p-1 w-full hover:bg-pink-600 rounded">Show Added Sensor Location(s)</button>
              </div>
            )}
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
          {!showAddSensor && (
            <div className='my-6 text-center'>
              <button className="bg-blue-600 px-5 mx-2 py-2 text-gray-100 rounded-sm hover:bg-blue-900" onClick={handleSubmit1}>Submit</button>
              <button className="bg-black px-5 mx-2 py-2 text-gray-100 rounded-sm border border-black hover:bg-white hover:text-black" onClick={handleCancel}>Cancel</button>
            </div>
          )}
        </form>
      </div>
    
      {showAddLocation && (
          <div className='absolute bg-white shadow-2xl w-full justify-center text-left'>
            <h1 className='p-4 w-12 cursor-pointer' onClick={handleCancel2}><MdCancel size={30}/></h1>
            <label htmlFor="sensorlocation" className="mb-8 font-semibold px-5 text-center text-3xl block text-gray-700">Sensor Location(s):</label>
            {sensorLocations.map((location, index) => (
              <div key={index} className="mb-4 px-5 flex">
                <div className='w-1/3 mt-6 font-semibold'>
                  <h1>Sensor {index + 1}:</h1>
                </div>
                <div className="mb-2 w-full px-5">
                  <label htmlFor={`spanno-${index}`} className="block text-gray-700">Span Number:</label>
                  <select id={`spanno-${index}`} name={`spanno-${index}`} value={location.spanno} onChange={(e) => handleLocationChange(index, 'spanno', e.target.value)} className="border border-gray-300 p-1 w-full rounded">
                    {Array.from({ length: parseInt(nobridgespan) }, (_, i) => (
                      <option key={`span-${i + 1}`} value={i}>{i}</option>
                    ))}
                  </select>
                </div>
                <div className="mb-2 w-full px-5">
                  <label htmlFor={`girderno-${index}`} className="block text-gray-700">Girder Number:</label>
                  <select id={`girderno-${index}`} name={`girderno-${index}`} value={location.girderno} onChange={(e) => handleLocationChange(index, 'girderno', e.target.value)} className="border border-gray-300 p-1 w-full rounded">
                    {Array.from({ length: parseInt(noofgirders) }, (_, i) => (
                      <option key={`girder-${i + 1}`} value={i}>{i}</option>
                    ))}
                  </select>
                </div>
              </div>
            ))}
            <div className='my-12 text-center'>
              <button className="bg-blue-600 px-5 mx-2 py-2 text-gray-100 rounded-sm hover:bg-blue-900" onClick={handleSubmit2}>Confirm</button>
              <button className="bg-black px-5 mx-2 py-2 text-gray-100 rounded-sm hover:bg-pink-600" onClick={handleCancel2}>Cancel</button>
            </div>
          </div>
        )}
    {BackEndData.length > 0 ? (
      BackEndData.map((data, index) => (
      <div key={index} className="box-border shadow-2xl w-1/2 p-6 bg-gray-100 mx-5 mr-10 my-8 justify-center text-left">
        <h1 className='text-center font-semibold text-3xl text-black'>Previously Entered Details</h1><br /><hr /><hr />
        <div className='flex pt-8'>
          <div className="mb-4 px-2 w-full">
            <label htmlFor="sensorlocation" className="block text-gray-700">Country:</label>
            <input type="text" value={data.bridge ? data.bridge.country : ''} className="border border-gray-300 bg-white p-1 w-full rounded" disabled/>
          </div>
          <div className="mb-4 px-2 w-full">
            <label htmlFor="sensorlocation" className="block text-gray-700">State:</label>
            <input type="text" value={data.bridge.state} className="border border-gray-300 bg-white p-1 w-full rounded" disabled/>
          </div>
          <div className="mb-4 px-2 w-full">
            <label htmlFor="sensorlocation" className="block text-gray-700">Division:</label>
            <input type="text" value={data.bridge.division} className="border border-gray-300 bg-white p-1 w-full rounded" disabled/>
          </div>
        </div>
      
        <div className='flex'>
          <div className="mb-4 px-2 w-full">
            <label htmlFor="sensorlocation" className="block text-gray-700">Coordinates:</label>
            <input type="text" value={data.bridge.coordinates} className="border border-gray-300 bg-white p-1 w-full rounded" disabled/>
          </div>
          <div className="mb-4 px-2 w-full">
            <label htmlFor="sensorlocation" className="block text-gray-700">Bridge Location:</label>
            <input type="text" value={data.bridge.bridgeLocation} className="border border-gray-300 bg-white p-1 w-full rounded" disabled/>
          </div>
          <div className="mb-4 px-2 w-full">
            <label htmlFor="sensorlocation" className="block text-gray-700">Bridge Name:</label>
            <input type="text" value={data.bridge.bridgeName} className="border border-gray-300 p-1 bg-white w-full rounded" disabled/>
          </div>
        </div>
  
        <div className='flex'>
        <div className="mb-4 px-2 w-full">
            <label htmlFor="nobridgespan" className="block text-gray-700">No of Spans:</label>
            <input type="text" value={data.bridge.nobridgespan} className="border border-gray-300 bg-white p-1 w-full rounded" disabled/>
          </div>
          <div className="mb-4 px-2 w-full">
            <label htmlFor="noofgirders" className="block text-gray-700">No of Girders:</label>
            <input type="text" value={data.bridge.noofgirders} className="border border-gray-300 p-1 bg-white w-full rounded" disabled/>
          </div>
        </div>
        
        <div className='flex'>
          <div className="mb-4 px-2 w-full">
            <label htmlFor="admins" className="block text-gray-700">Bridge Admin(s):</label>
            <select id="adminName" className="border text-gray-700 border-gray-300 p-1 w-full rounded" readOnly>
              <option value={data.bridge.adminName}>{data.bridge.adminName}</option>
              {data.bridge.adminName2 ? <option value={data.bridge.adminName2}>{data.bridge.adminName2}</option> : <option value="">Admin 2</option>}
              {data.bridge.adminName3 ? <option value={data.bridge.adminName3}>{data.bridge.adminName3}</option> : <option value="">Admin 3</option>}
            </select>
          </div>
          <div className="mb-4 px-2 w-full">
            <label htmlFor="managers" className="block text-gray-700">Bridge Manager(s):</label>
            <select id="adminName" className="border text-gray-700 border-gray-300 p-1 w-full rounded" readOnly>
              <option value={data.bridge.managerName}>{data.bridge.managerName}</option>
              {data.bridge.managerName2 ? <option value={data.bridge.managerName2}>{data.bridge.managerName2}</option>: <option value="">Manager 2</option>}
              {data.bridge.managerName3 ? <option value={data.bridge.managerName3}>{data.bridge.managerName3}</option>: <option value="">Manager 3</option>}
              {data.bridge.managerName4 ? <option value={data.bridge.managerName4}>{data.bridge.managerName4}</option>: <option value="">Manager 4</option>}
              {data.bridge.managerName5 ? <option value={data.bridge.managerName5}>{data.bridge.managerName5}</option>: <option value="">Manager 5</option>}
              {data.bridge.managerName6 ? <option value={data.bridge.managerName6}>{data.bridge.managerName6}</option>: <option value="">Manager 6</option>}
            </select>
          </div>
          <div className="mb-4 px-2 w-full">
            <label htmlFor="owners" className="block text-left text-gray-700 px-8">Bridge Owner(s):</label>
            <select id="adminName" className="border text-gray-700 border-gray-300 p-1 w-full rounded" readOnly>
              <option value={data.bridge.ownerName}>{data.bridge.ownerName}</option>:
              {data.bridge.ownerName2 ? <option value={data.bridge.ownerName2}>{data.bridge.ownerName2}</option>: <option value="">Owner 2</option>}
              {data.bridge.ownerName3 ? <option value={data.bridge.ownerName3}>{data.bridge.ownerName3}</option>: <option value="">Owner 3</option>}
            </select>
          </div>
        </div>
        </div>
      ))
      ) : (
        <div className="box-border shadow-2xl w-1/2 p-6 bg-gray-100 mx-5 mr-10 my-8 justify-center text-left">
        <h1 className='text-center font-semibold text-3xl text-black'>Previously Entered Details</h1><br /><hr /><hr />
        <div className='flex pt-8'>
          <div className="mb-4 px-2 w-full">
            <label htmlFor="sensorlocation" className="block text-gray-700">Country:</label>
            <input type="text" className="border border-gray-300 bg-white p-1 w-full rounded" disabled/>
          </div>
          <div className="mb-4 px-2 w-full">
            <label htmlFor="sensorlocation" className="block text-gray-700">State:</label>
            <input type="text" className="border border-gray-300 bg-white p-1 w-full rounded" disabled/>
          </div>
          <div className="mb-4 px-2 w-full">
            <label htmlFor="sensorlocation" className="block text-gray-700">Division:</label>
            <input type="text" className="border border-gray-300 bg-white p-1 w-full rounded" disabled/>
          </div>
        </div>
      
        <div className='flex'>
          <div className="mb-4 px-2 w-full">
            <label htmlFor="sensorlocation" className="block text-gray-700">Coordinates:</label>
            <input type="text" className="border border-gray-300 bg-white p-1 w-full rounded" disabled/>
          </div>
          <div className="mb-4 px-2 w-full">
            <label htmlFor="sensorlocation" className="block text-gray-700">Bridge Location:</label>
            <input type="text" className="border border-gray-300 bg-white p-1 w-full rounded" disabled/>
          </div>
          <div className="mb-4 px-2 w-full">
            <label htmlFor="sensorlocation" className="block text-gray-700">Bridge Name:</label>
            <input type="text" className="border border-gray-300 p-1 bg-white w-full rounded" disabled/>
          </div>
        </div>
  
        <div className='flex'>
        <div className="mb-4 px-2 w-full">
            <label htmlFor="nobridgespan" className="block text-gray-700">No of Spans:</label>
            <input type="text" className="border border-gray-300 bg-white p-1 w-full rounded" disabled/>
          </div>
          <div className="mb-4 px-2 w-full">
            <label htmlFor="noofgirders" className="block text-gray-700">No of Girders:</label>
            <input type="text" className="border border-gray-300 p-1 bg-white w-full rounded" disabled/>
          </div>
        </div>
        
        <div className='flex'>
          <div className="mb-4 px-2 w-full">
            <label htmlFor="admins" className="block text-gray-700">Bridge Admin(s):</label>
            <select id="adminName" className="border text-gray-700 border-gray-300 p-1 w-full rounded" readOnly>
              <option>Admin 1</option>
              <option value="">Admin 2</option>
              <option value="">Admin 3</option>
            </select>
          </div>
          <div className="mb-4 px-2 w-full">
            <label htmlFor="managers" className="block text-gray-700">Bridge Manager(s):</label>
            <select id="adminName" className="border text-gray-700 border-gray-300 p-1 w-full rounded" readOnly>
              <option>Manager 1</option>
              <option value="">Manager 2</option>
              <option value="">Manager 3</option>
              <option value="">Manager 4</option>
              <option value="">Manager 5</option>
              <option value="">Manager 6</option>
            </select>
          </div>
          <div className="mb-4 px-2 w-full">
            <label htmlFor="owners" className="block text-left text-gray-700 px-8">Bridge Owner(s):</label>
            <select id="adminName" className="border text-gray-700 border-gray-300 p-1 w-full rounded" readOnly>
              <option>Owner 1</option>:
              <option value="">Owner 2</option>
              <option value="">Owner 3</option>
            </select>
          </div>
        </div>
        </div>
      )}
    </div>
    
    </div>
    <br /><br />
    </>
    )
  }

export default Sensorformexcel;