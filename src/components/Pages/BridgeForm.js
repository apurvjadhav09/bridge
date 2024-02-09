import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './tailwind.css';

import logo2 from '../Assets/logo.png';
import logo from '../Assets/logo2.png';




const BridgeForm = ({onSubmit }) => {
  
  const [country, setCountry] = useState('');
  const [state, setState] = useState('');
  const [coordinates, setCoordinates] =useState('');
  const [division, setDivision] = useState('');
  const [bridgeName, setBridgeName] = useState('');
  const [bridgeLocation, setBridgeLocation] = useState('');

  
  const navigate = useNavigate();
  const countries = ['India', 'USA', 'Australia']; 
  const statesByCountry = {
    India: ['Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal'],
    USA: ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'],
    Australia: ['Australian Capital Territory', 'New South Wales', 'Northern Territory', 'Queensland', 'South Australia', 'Tasmania', 'Victoria', 'Western Australia'],
  }; 

  
  const[showUserForm, setShowUserForm] = useState(false);
  const[showBridgeForm, setShowBridgeForm] = useState(true);

  const [showAdminForm, setShowAdminForm] = useState(false);
  const [showAdminForm1, setShowAdminForm1] = useState(false);
  const [showManagerForm, setShowManagerForm] = useState(false);
  const [showManagerForm1, setShowManagerForm1] = useState(false);
  const [showManagerForm2, setShowManagerForm2] = useState(false);
  const [showManagerForm3, setShowManagerForm3] = useState(false);
  const [showManagerForm4, setShowManagerForm4] = useState(false);
  const [showOwnerForm, setShowOwnerForm] = useState(false);
  const [showOwnerForm1, setShowOwnerForm1] = useState(false);


 

  
  const [adminEmail, setAdminEmail] = useState('');
  const [adminName, setAdminName] = useState('');
  const [adminPhone, setAdminPhone] = useState('');
  const [ownerEmail, setOwnerEmail] = useState('');
  const [ownerName, setOwnerName] = useState('');
  const [ownerPhone, setOwnerPhone] = useState('');
  const [managerEmail, setManagerEmail] = useState('');
  const [managerName, setManagerName] = useState('');
  const [managerPhone, setManagerPhone] = useState('');

  const [adminEmail2, setAdminEmail2] = useState('');
  const [adminName2, setAdminName2] = useState('');
  const [adminPhone2, setAdminPhone2] = useState('');
  const [ownerEmail2, setOwnerEmail2] = useState('');
  const [ownerName2, setOwnerName2] = useState('');
  const [ownerPhone2, setOwnerPhone2] = useState('');
  const [managerEmail2, setManagerEmail2] = useState('');
  const [managerName2, setManagerName2] = useState('');
  const [managerPhone2, setManagerPhone2] = useState('');

  const [adminEmail3, setAdminEmail3] = useState('');
  const [adminName3, setAdminName3] = useState('');
  const [adminPhone3, setAdminPhone3] = useState('');
  const [ownerEmail3, setOwnerEmail3] = useState('');
  const [ownerName3, setOwnerName3] = useState('');
  const [ownerPhone3, setOwnerPhone3] = useState('');
  const [managerEmail3, setManagerEmail3] = useState('');
  const [managerName3, setManagerName3] = useState('');
  const [managerPhone3, setManagerPhone3] = useState('');

  const [managerEmail4, setManagerEmail4] = useState('');
  const [managerName4, setManagerName4] = useState('');
  const [managerPhone4, setManagerPhone4] = useState('');

  const [managerEmail5, setManagerEmail5] = useState('');
  const [managerName5, setManagerName5] = useState('');
  const [managerPhone5, setManagerPhone5] = useState('');

  const [managerEmail6, setManagerEmail6] = useState('');
  const [managerName6, setManagerName6] = useState('');
  const [managerPhone6, setManagerPhone6] = useState('');





  const handleAddAdmin = () => {
    setShowAdminForm(!showAdminForm);
    setShowManagerForm(false);
    setShowOwnerForm(false);
  };

  const handleAddAdmin1 = () => {
    setShowAdminForm1(true);
    setShowAdminForm(!showAdminForm);
  };

  const handlePrevAdmin0 = () => {
    setShowAdminForm(false);
    setShowAdminForm1(false);
  };

  const handlePrevAdmin = () => {
    setShowAdminForm(false);
  }

  const handlePrevAdmin1 = () => {
    setShowAdminForm1(false);
    setShowAdminForm(true);
  };




  const handleAddManager = () => {
    setShowManagerForm(!showManagerForm);
    setShowAdminForm(false);
    setShowOwnerForm(false);
  };

  const handleAddManager1 = () => {
    setShowManagerForm1(true);
    setShowManagerForm(!showManagerForm);
  };

  const handleAddManager2 = () => {
    setShowManagerForm2(true);
    setShowManagerForm1(!showManagerForm1);
  };

  const handleAddManager3 = () => {
    setShowManagerForm3(true);
    setShowManagerForm2(!showManagerForm2);
  };

  const handleAddManager4 = () => {
    setShowManagerForm4(true);
    setShowManagerForm3(!showManagerForm3);
  };

  const handlePrevManager0 = () => {
    setShowManagerForm(false);
    setShowManagerForm1(false);
    setShowManagerForm2(false);
    setShowManagerForm3(false);
    setShowManagerForm4(false);
  };

  const handlePrevManager = () => {
    setShowManagerForm(false);
  };

  const handlePrevManager1 = () => {
    setShowManagerForm1(false);
    setShowManagerForm(true);
  };

  const handlePrevManager2 = () => {
    setShowManagerForm2(false);
    setShowManagerForm1(true);
  };

  const handlePrevManager3 = () => {
    setShowManagerForm3(false);
    setShowManagerForm2(true);
  };

  const handlePrevManager4 = () => {
    setShowManagerForm4(false);
    setShowManagerForm3(true);
  };





  const handleAddOwner = () => {
    setShowOwnerForm(!showOwnerForm);
    setShowAdminForm(false);
    setShowManagerForm(false);
  };

  const handleAddOwner1 = () => {
    setShowOwnerForm1(true);
    setShowOwnerForm(!showOwnerForm);
  };

  const handlePrevOwner0 = () => {
    setShowOwnerForm(false);
    setShowOwnerForm1(false);
  };

  const handlePrevOwner = () => {
    setShowOwnerForm(false);
  };

  const handlePrevOwner1 = () => {
    setShowOwnerForm1(false);
    setShowOwnerForm(true);
  };



  const closeForm = () => {
    setShowAdminForm(false);
    setShowManagerForm(false);
    setShowOwnerForm(false);
  };


  const UserForm = () => {
    if(coordinates === '' || division === '' || bridgeName === '' || country === '' || state==='' || bridgeLocation===''){
      alert('Please Fill all the Bridge Related Data');
    }
    else{
      setShowUserForm(!showUserForm);
      setShowBridgeForm(false);
    }
  };

  const UserCancel = () => {
    setCountry('');
    setState('');
    setDivision('');
    setCoordinates('');
    setBridgeName('');
    setBridgeLocation('');
  };
  



  const submitForm = async (e) => {
    e.preventDefault();
        try {
          const response = await axios.post('http://localhost:9090/bridge/register', {
            country:country,
            state:state,
            division:division,
            coordinates:coordinates,
            bridgeName:bridgeName,
            bridgeLocation:bridgeLocation,

            adminEmail: adminEmail,
            adminName: adminName,
            adminPhone: adminPhone,
            managerEmail: managerEmail,
            managerName: managerName,
            managerPhone: managerPhone,
            ownerEmail: ownerEmail,
            ownerName: ownerName,
            ownerPhone: ownerPhone,

            adminEmail2: adminEmail2,
            adminName2: adminName2,
            adminPhone2: adminPhone2,
            managerEmail2: managerEmail2,
            managerName2: managerName2,
            managerPhone2: managerPhone2,
            ownerEmail2: ownerEmail2,
            ownerName2: ownerName2,
            ownerPhone2: ownerPhone2,

            adminEmail3: adminEmail3,
            adminName3: adminName3,
            adminPhone3: adminPhone3,
            managerEmail3: managerEmail3,
            managerName3: managerName3,
            managerPhone3: managerPhone3,
            ownerEmail3: ownerEmail3,
            ownerName3: ownerName3,
            ownerPhone3: ownerPhone3,

            managerEmail4: managerEmail4,
            managerName4: managerName4,
            managerPhone4: managerPhone4,

            managerEmail5: managerEmail5,
            managerName5: managerName5,
            managerPhone5: managerPhone5,
            
            managerEmail6: managerEmail6,
            managerName6: managerName6,
            managerPhone6: managerPhone6,
          });
          localStorage.setItem('country', country);
          localStorage.setItem('state', state);
          localStorage.setItem('division', division);
          localStorage.setItem('coordinates', coordinates);
          localStorage.setItem('location', bridgeLocation);
          localStorage.setItem('ownerName', ownerName);
          localStorage.setItem('adminName', adminName);
          localStorage.setItem('managerName', managerName);
          console.log('Backend response:', response.data);
          navigate('/sensorform');
          if (onSubmit) {
            onSubmit();
          }
        } catch (error) {
          console.error('Error submitting form', error);
        }
    }


    const resetForm = () => {
    
        setAdminEmail('');
        setAdminName('');
        setAdminPhone('');
        setManagerName('');
        setManagerEmail('');
        setManagerPhone('');
        setOwnerName('');
        setOwnerEmail('');
        setOwnerPhone('');

        setAdminEmail2('');
        setAdminName2('');
        setAdminPhone2('');
        setManagerName2('');
        setManagerEmail2('');
        setManagerPhone2('');
        setOwnerName2('');
        setOwnerEmail2('');
        setOwnerPhone2('');

        setAdminEmail3('');
        setAdminName3('');
        setAdminPhone3('');
        setManagerName3('');
        setManagerEmail3('');
        setManagerPhone3('');
        setOwnerName3('');
        setOwnerEmail3('');
        setOwnerPhone3('');

        setManagerName4('');
        setManagerEmail4('');
        setManagerPhone4('');

        setManagerName5('');
        setManagerEmail5('');
        setManagerPhone5('');

        setManagerName6('');
        setManagerEmail6('');
        setManagerPhone6('');

        closeForm();
      };

      const onCancel = () => {
        resetForm();
      };

      const PrevFrom = () => {
        setShowBridgeForm(!showBridgeForm);
        setShowUserForm(false);
      };








  return (
    <>
      <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet" />
 
    <div className="flex w-full">
      <div className='bridgeform-bg w-1/2'>
        <img className='p-6 w-32' src={logo2} alt="" />
      </div>



          {showUserForm && ( 
      <div className='absolute text-left left-1/2 w-1/2 max-h-screen'>
        <div className='text-center mt-6'>
          <img className='px-72 mt-10 mb-16' src={logo} alt="" />
          <h1 className='mt-12 mb-12 text-3xl font-semibold'>&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash; Add User Details &ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;</h1>
        </div>
        <div>
            <h3 className=''>Add Admin(s):</h3>
            <input id='adminName' value={adminName} onChange={(e) => setAdminName(e.target.value)} className="border border-gray-500 p-2 mr-2 rounded" type="text" placeholder='Name (Admin 1)'/>
            <input id='adminEmail' value={adminEmail} onChange={(e) => setAdminEmail(e.target.value)} className="border border-gray-500 p-2 mr-2 rounded" type="email" placeholder='email'/>
            <input id='adminPhone' value={adminPhone} onChange={(e) => setAdminPhone(e.target.value)} className="border border-gray-500 p-2 mr-2 rounded" type="text" placeholder='Mobile Number'/>
            <button className='mx-2 px-4 py-3 rounded-sm bg-pink-600 text-white hover:bg-pink-800' onClick={handleAddAdmin}>+</button>
            <button className='px-3 py-3 rounded-sm bg-black text-white' onClick={handlePrevAdmin0}>Cancel</button>
        </div>
        {showAdminForm && ( 
            <form action="">
        <div className='mt-5'>
            <input id='adminName' value={adminName2} onChange={(e) => setAdminName2(e.target.value)} className="border border-gray-500 p-2 mr-2 rounded" type="text" placeholder='Name (Admin 2)'/>
            <input id='adminEmail' value={adminEmail2} onChange={(e) => setAdminEmail2(e.target.value)} className="border border-gray-500 p-2 mr-2 rounded" type="email" placeholder='email'/>
            <input id='adminPhone' value={adminPhone2} onChange={(e) => setAdminPhone2(e.target.value)} className="border border-gray-500 p-2 mr-2 rounded" type="text" placeholder='Mobile Number'/>
            <button className='mx-2 px-4 py-3 rounded-sm bg-pink-600 text-white hover:bg-pink-800' onClick={handleAddAdmin1}>+</button>
            <button className='px-3 py-3 rounded-sm bg-pink-600 text-white hover:bg-pink-800' onClick={handlePrevAdmin}>&larr;</button>
        </div>
        </form>
        )}

        {showAdminForm1 && ( 
          <form action="">
        <div className='mt-5'>
            <input id='adminName' value={adminName3} onChange={(e) => setAdminName3(e.target.value)} className="border border-gray-500 p-2 mr-2 rounded" type="text" placeholder='Name (Admin 3)'/>
            <input id='adminEmail' value={adminEmail3} onChange={(e) => setAdminEmail3(e.target.value)} className="border border-gray-500 p-2 mr-2 rounded" type="email" placeholder='email'/>
            <input id='adminPhone' value={adminPhone3} onChange={(e) => setAdminPhone3(e.target.value)} className="border border-gray-500 p-2 mr-2 rounded" type="text" placeholder='Mobile Number'/>
            <button className='mx-2 px-3 py-3 rounded-sm bg-pink-600 text-white hover:bg-pink-800' onClick={handlePrevAdmin1}>&larr;</button>
        </div>
        </form>
        )}



        <br /><br /><br />



        <div>
            <h3>Add Manager(s):</h3>
            <input id='managerName' value={managerName} onChange={(e) => setManagerName(e.target.value)} className="border border-gray-500 p-2 mr-2 rounded" type="text" placeholder='Name (Manager 1)'/>
            <input id='managerEmail' value={managerEmail} onChange={(e) => setManagerEmail(e.target.value)} className="border border-gray-500 p-2 mr-2 rounded" type="email" placeholder='email'/>
            <input id='managerPhone' value={managerPhone} onChange={(e) => setManagerPhone(e.target.value)} className="border border-gray-500 p-2 mr-2 rounded" type="text" placeholder='Mobile Number'/>
            <button className='mx-2 px-4 py-3 rounded-sm bg-pink-600 text-white hover:bg-pink-800' onClick={handleAddManager}>+</button>
            <button className='px-3 py-3 rounded-sm bg-pink-600 text-white hover:bg-pink-800' onClick={handlePrevManager0}>Cancel</button>
        </div>
        {showManagerForm &&(
        <form className='' action="">
        <div className='mt-5'>
            <input id='managerName' value={managerName2} onChange={(e) => setManagerName2(e.target.value)} className="border border-gray-500 p-2 mr-2 rounded" type="text" placeholder='Name (Manager 2)'/>
            <input id='managerEmail' value={managerEmail2} onChange={(e) => setManagerEmail2(e.target.value)} className="border border-gray-500 p-2 mr-2 rounded" type="email" placeholder='email'/>
            <input id='managerPhone' value={managerPhone2} onChange={(e) => setManagerPhone2(e.target.value)} className="border border-gray-500 p-2 mr-2 rounded" type="text" placeholder='Mobile Number'/>
            <button className='mx-2 px-4 py-3 rounded-sm bg-pink-600 text-white hover:bg-pink-800' onClick={handleAddManager1}>+</button>
            <button className='px-3 py-3 rounded-sm bg-pink-600 text-white hover:bg-pink-800' onClick={handlePrevManager}>&larr;</button>
        </div>
        </form>
        )}

        {showManagerForm1 && ( 
        <form action="">
        <div className='mt-5'>
            <input id='managerName' value={managerName3} onChange={(e) => setManagerName3(e.target.value)} className="border border-gray-500 p-2 mr-2 rounded" type="text" placeholder='Name (Manager 3)'/>
            <input id='managerEmail' value={managerEmail3} onChange={(e) => setManagerEmail3(e.target.value)} className="border border-gray-500 p-2 mr-2 rounded" type="email" placeholder='email'/>
            <input id='managerPhone' value={managerPhone3} onChange={(e) => setManagerPhone3(e.target.value)} className="border border-gray-500 p-2 mr-2 rounded" type="text" placeholder='Mobile Number'/>
            <button className='mx-2 px-4 py-3 rounded-sm bg-pink-600 text-white hover:bg-pink-800' onClick={handleAddManager2}>+</button>
            <button className='px-3 py-3 rounded-sm bg-pink-600 text-white hover:bg-pink-800' onClick={handlePrevManager1}>&larr;</button>
        </div>
        </form>
        )}

        {showManagerForm2 && ( 
        <form action="">
        <div className='mt-5'>
            <input id='managerName' value={managerName4} onChange={(e) => setManagerName4(e.target.value)} className="border border-gray-500 p-2 mr-2 rounded" type="text" placeholder='Name (Manager 4)'/>
            <input id='managerEmail' value={managerEmail4} onChange={(e) => setManagerEmail4(e.target.value)} className="border border-gray-500 p-2 mr-2 rounded" type="email" placeholder='email'/>
            <input id='managerPhone' value={managerPhone4} onChange={(e) => setManagerPhone4(e.target.value)} className="border border-gray-500 p-2 mr-2 rounded" type="text" placeholder='Mobile Number'/>
            <button className='mx-2 px-4 py-3 rounded-sm bg-pink-600 text-white hover:bg-pink-800' onClick={handleAddManager3}>+</button>
            <button className='px-3 py-3 rounded-sm bg-pink-600 text-white hover:bg-pink-800' onClick={handlePrevManager2}>&larr;</button>
        </div>
        </form>
        )}

        {showManagerForm3 && ( 
        <form action="">
        <div className='mt-5'>
            <input id='managerName' value={managerName5} onChange={(e) => setManagerName5(e.target.value)} className="border border-gray-500 p-2 mr-2 rounded" type="text" placeholder='Name (Manager 5)'/>
            <input id='managerEmail' value={managerEmail5} onChange={(e) => setManagerEmail5(e.target.value)} className="border border-gray-500 p-2 mr-2 rounded" type="email" placeholder='email'/>
            <input id='managerPhone' value={managerPhone5} onChange={(e) => setManagerPhone5(e.target.value)} className="border border-gray-500 p-2 mr-2 rounded" type="text" placeholder='Mobile Number'/>
            <button className='mx-2 px-4 py-3 rounded-sm bg-pink-600 text-white hover:bg-pink-800' onClick={handleAddManager4}>+</button>
            <button className='px-3 py-3 rounded-sm bg-pink-600 text-white hover:bg-pink-800' onClick={handlePrevManager3}>&larr;</button>
        </div>
        </form>
        )}

        {showManagerForm4 && ( 
        <form action="">
        <div className='mt-5'>
            <input id='managerName' value={managerName6} onChange={(e) => setManagerName6(e.target.value)} className="border border-gray-500 p-2 mr-2 rounded" type="text" placeholder='Name (Manager 6)'/>
            <input id='managerEmail' value={managerEmail6} onChange={(e) => setManagerEmail6(e.target.value)} className="border border-gray-500 p-2 mr-2 rounded" type="email" placeholder='email'/>
            <input id='managerPhone' value={managerPhone6} onChange={(e) => setManagerPhone6(e.target.value)} className="border border-gray-500 p-2 mr-2 rounded" type="text" placeholder='Mobile Number'/>
            <button className='mx-2 px-3 py-3 rounded-sm bg-pink-600 text-white hover:bg-pink-800' onClick={handlePrevManager4}>&larr;</button>
        </div>
        </form>
        )}
        
        


        <br /><br /><br />



        <div>
            <h3>Add Owner(s):</h3>
            <input id='ownerName' value={ownerName} onChange={(e) => setOwnerName(e.target.value)} className="border border-gray-500 p-2 mr-2 rounded" type="text" placeholder='Name (Owner 1)'/>
            <input id='ownerEmail' value={ownerEmail} onChange={(e) => setOwnerEmail(e.target.value)} className="border border-gray-500 p-2 mr-2 rounded" type="email" placeholder='email'/>
            <input id='ownerPhone' value={ownerPhone} onChange={(e) => setOwnerPhone(e.target.value)} className="border border-gray-500 p-2 mr-2 rounded" type="text" placeholder='Mobile Number'/>
            <button className='mx-2 px-4 py-3 rounded-sm bg-pink-600 text-white hover:bg-pink-800' onClick={handleAddOwner}>+</button>
            <button className='px-3 py-3 rounded-sm bg-pink-600 text-white hover:bg-pink-800' onClick={handlePrevOwner0}>Cancel</button>
        </div>
        {showOwnerForm && (
        <form action="">
        <div className='mt-5'>
            <input id='ownerName' value={ownerName2} onChange={(e) => setOwnerName2(e.target.value)} className="border border-gray-500 p-2 mr-2 rounded" type="text" placeholder='Name (Owner 2)'/>
            <input id='ownerEmail' value={ownerEmail2} onChange={(e) => setOwnerEmail2(e.target.value)} className="border border-gray-500 p-2 mr-2 rounded" type="email" placeholder='email'/>
            <input id='ownerPhone' value={ownerPhone2} onChange={(e) => setOwnerPhone2(e.target.value)} className="border border-gray-500 p-2 mr-2 rounded" type="text" placeholder='Mobile Number'/>
            <button className='mx-2 px-4 py-3 rounded-sm bg-pink-600 text-white hover:bg-pink-800' onClick={handleAddOwner1}>+</button>
            <button className='px-3 py-3 rounded-sm bg-pink-600 text-white hover:bg-pink-800' onClick={handlePrevOwner}>&larr;</button>
        </div>
        </form>
        )}
        {showOwnerForm1 && ( 
        <form action="">
        <div className='mt-5'>
            <input id='ownerName' value={ownerName3} onChange={(e) => setOwnerName3(e.target.value)} className="border border-gray-500 p-2 mr-2 rounded" type="text" placeholder='Name (Owner 3)'/>
            <input id='ownerEmail' value={ownerEmail3} onChange={(e) => setOwnerEmail3(e.target.value)} className="border border-gray-500 p-2 mr-2 rounded" type="email" placeholder='email'/>
            <input id='ownerPhone' value={ownerPhone3} onChange={(e) => setOwnerPhone3(e.target.value)} className="border border-gray-500 p-2 mr-2 rounded" type="text" placeholder='Mobile Number'/>
            <button className='mx-2 px-3 py-3 rounded-sm bg-pink-600 text-white hover:bg-pink-800' onClick={handlePrevOwner1}>&larr;</button>
        </div>
        </form>
        )}
        
        <div className='text-center mt-16 mb-6'>
          <button type="submit" onClick={submitForm} className="bg-blue-600 px-5 py-2 text-gray-100 mx-2 rounded-sm hover:bg-indigo-900">Next</button>
          <button type="submit" onClick={PrevFrom} className="bg-pink-600 px-5 py-2 text-gray-100 mx-2 rounded-sm hover:bg-pink-900">Prev</button>
          <button button onClick={onCancel} className="bg-black px-5 py-2 text-gray-100 rounded-sm mx-2 hover:bg-red-800">Cancel</button>
        </div>
      </div>
      )}


    {showBridgeForm && ( 
      <div className="w-1/2 bg-white rounded-xl">
        <form onSubmit={submitForm}>
          <div className='px-72 mt-10 mb-16'>
          <img  src={logo} alt="" />
          </div>
          <h1 className='text-center mb-24 text-3xl font-semibold'>&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;  Enter Bridge Details  &ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;</h1>
          <div className="flex">
            <div className='w-1/2 mx-5'>
              <div className="mb-6">
            <label htmlFor="country" className="block text-gray-700">Country:</label>
            <select id="country" name="country" value={country} onChange={(e) => setCountry(e.target.value)} className="border border-gray-300 p-2 w-full rounded" >
                <option value="" disabled>Select Country</option>
                {countries.map((country, index) => (
                <option key={index} value={country}>{country}</option>
              ))}
            </select>
          </div>
          <div className="mb-6">
            <label htmlFor="state" className="block text-gray-700">
              State:
            </label>
            <select id="state" name="state" value={state} onChange={(e) => setState(e.target.value)} className="border border-gray-300 p-2 w-full rounded">
                <option value="" disabled>Select State</option>
                {statesByCountry[country]?.map((state, index) => (
                <option key={index} value={state}>{state}</option>
              ))}
            </select>
          </div>
          <div className="mb-6">
            <label htmlFor="coordinates" className="block text-gray-700">
              Bridge Coordinates:
            </label>
            <input
              type="text" id="coordinates" placeholder='Enter Coordinates' name="coordinates" value={coordinates} onChange={(e) => setCoordinates(e.target.value)} className="border border-gray-300 p-2 w-full rounded"/>
          </div>
            </div>
            <div className='w-1/2 mx-5'>
            <div className="mb-6">
            <label htmlFor="division" className="block text-gray-700">
              Division:
            </label>
            <input type="text" id="division" placeholder='Enter Division' name="division" value={division} onChange={(e) => setDivision(e.target.value)} className="border border-gray-300 p-2 w-full rounded" />
          </div>
          <div className="mb-6">
            <label htmlFor='bridgeName' className="block text-gray-700">
              Bridge Location:
            </label>
            <input type="text" id="location" placeholder='Enter Location' name="location" value={bridgeLocation} onChange={(e) => setBridgeLocation(e.target.value)} className="border border-gray-300 p-2 w-full rounded" />
          </div>
          <div className="mb-6">
            <label htmlFor='bridgeName' className="block text-gray-700">
              Bridge Name:
            </label>
            <input type="text" id="name" placeholder='Enter Name' name="name" value={bridgeName} onChange={(e) => setBridgeName(e.target.value)} className="border border-gray-300 p-2 w-full rounded" />
          </div>
        </div>
      </div>
          <div className='flex align-center justify-center text-center mt-12'>
            <button type="submit" onClick={UserForm} className="bg-blue-600 px-6 mx-2 py-2 text-gray-100 rounded-sm hover:bg-pink-600">Next</button>
            <button onClick={UserCancel} className="bg-black px-5 py-2 text-gray-100 rounded-sm hover:bg-indigo-900 ml-2 hover:bg-pink-600">Cancel</button>
          </div>
          
        </form>
      </div>
      )}
      </div>

    </>
  );
};


export default BridgeForm;
