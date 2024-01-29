import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './tailwind.css';


const BridgeForm = ({onSubmit }) => {
  const [bridgeData, setBridgeData] = useState({
    country: '',
    state: '',
    coordinates: '',
    division: '',
    name: '',
  });
  const navigate = useNavigate();
  const countries = ['India', 'USA', 'Australia']; // Added countries
  const statesByCountry = {
    India: ['Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal'],
    USA: ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'],
    Australia: ['Australian Capital Territory', 'New South Wales', 'Northern Territory', 'Queensland', 'South Australia', 'Tasmania', 'Victoria', 'Western Australia'],
  }; 

  const handleCountryChange = (e) => {
    const selectedCountry = e.target.value;
    setBridgeData({
      ...bridgeData,
      country: selectedCountry,
      state: '',
    });
  };

  const handleStateChange = (e) => {
    setBridgeData({
      ...bridgeData,
      state: e.target.value,
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBridgeData({
      ...bridgeData,
      [name]: value,
    });
  };

  
  const [adminEmail] = useState('');
  const [adminName] = useState('');
  const [adminPhone] = useState('');
  const [ownerEmail] = useState('');
  const [ownerName] = useState('');
  const [ownerPhone] = useState('');
  const [managerEmail] = useState('');
  const [managerName] = useState('');
  const [managerPhone] = useState('');

  const [showAdminForm, setShowAdminForm] = useState(false);
  const [showManagerForm, setShowManagerForm] = useState(false);
  const [showOwnerForm, setShowOwnerForm] = useState(false);

  const handleAddAdmin = () => {
    setShowAdminForm(!showAdminForm);
  };
  const handleAddManager = () => {
    setShowManagerForm(!showManagerForm);
  };
  const handleAddOwner = () => {
    setShowOwnerForm(!showOwnerForm);
  };

  const closeForm = () => {
    setShowAdminForm(false);
    setShowManagerForm(false);
    setShowOwnerForm(false);
  };

  const submitForm = async (e) => {
    e.preventDefault();
    if(bridgeData.coordinates === '' || bridgeData.division === '' || bridgeData.name === '' || bridgeData.country === '' || bridgeData.state===''){
        alert('Please fill all the bridge relatied information!')
    }
    else{
        try {

            

          const response = await axios.post('http://localhost:9090/', {
            bridgeData: bridgeData,
            adminEmail: adminEmail,
            adminName: adminName,
            adminPhone: adminPhone,
            managerEmail: managerEmail,
            managerName: managerName,
            managerPhone: managerPhone,
            ownerEmail: ownerEmail,
            ownerName: ownerName,
            ownerPhone: ownerPhone,
          });
          console.log('Backend response:', response.data);
          navigate('./superuserhome');
          if (onSubmit) {
            onSubmit();
          }
        } catch (error) {
          console.error('Error submitting form', error);
        }
      };
    }


      const onCancel = () => {
        
      };

      const saveForm = () => {

      };






  return (
    <>
      <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet" />
    <div className="flex items-center justify-center">
      <div className="w-1/3 bg-white p-8 rounded-xl">
        <h2 className="text-2xl font-bold mb-4">Add New Bridge</h2>
        <form onSubmit={submitForm}>
          <div className="mb-4">
            <label htmlFor="country" className="block text-gray-700">Country:</label>
            <select id="country" name="country" value={bridgeData.country} onChange={handleCountryChange} className="border border-gray-300 p-2 w-full rounded" >
                <option value="" disabled>Select Country</option>
                {countries.map((country, index) => (
                <option key={index} value={country}>{country}</option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="state" className="block text-gray-700">
              State:
            </label>
            <select id="state" name="state" value={bridgeData.state} onChange={handleStateChange} className="border border-gray-300 p-2 w-full rounded">
                <option value="" disabled>Select State</option>
                {statesByCountry[bridgeData.country]?.map((state, index) => (
                <option key={index} value={state}>{state}</option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="coordinates" className="block text-gray-700">
              Bridge Coordinates:
            </label>
            <input
              type="text" id="coordinates" name="coordinates" value={bridgeData.coordinates} onChange={handleInputChange} className="border border-gray-300 p-2 w-full rounded" required/>
          </div>
          <div className="mb-4">
            <label htmlFor="division" className="block text-gray-700">
              Division:
            </label>
            <input type="text"id="division" name="division" value={bridgeData.division} onChange={handleInputChange} className="border border-gray-300 p-2 w-full rounded" />
          </div>
          <div className="mb-4">
            <label  className="block text-gray-700">
              Bridge Name:
            </label>
            <input type="text" id="bname" name="name" value={bridgeData.name} onChange={handleInputChange} className="border border-gray-300 p-2 w-full rounded" />
          </div>
          
        </form>
      </div>

      {showAdminForm &&(
            <div className="absolute mt-48 py-24 px-8 bg-gray-50">
            <form>
                    <div className='mt-4'>
                        <label htmlFor="Admin">Admin 1:</label>
                        <input id='adminName' className='bg-gray-200 mx-5 px-8 py-3 rounded-sm outline-none' type="text" placeholder='Name' />
                        <input id='adminEmail' className='bg-gray-200 mx-5 px-8 py-3 rounded-sm outline-none' type="email" placeholder='email' />
                        <input id='adminPhone' className='bg-gray-200 mx-5 px-8 py-3 rounded-sm outline-none' type="text" placeholder='Mobile Number' />
                        <button className='px-4 py-2 rounded-sm mx-4 bg-pink-600 text-white hover:bg-pink-800' type='submit'>Add</button>
                    </div>
                    <br /><br />
                    <div>
                        <label htmlFor="Admin">Admin 2:</label>
                        <input id='admin2Name' className='bg-gray-200 mx-5 px-8 py-3 rounded-sm outline-none' type="text" placeholder='Name' />
                        <input id='admin2Email' className='bg-gray-200 mx-5 px-8 py-3 rounded-sm outline-none' type="email" placeholder='email' />
                        <input id='admin2Mobile' className='bg-gray-200 mx-5 px-8 py-3 rounded-sm outline-none' type="text" placeholder='Mobile Number' />
                        <button className='px-4 py-2 rounded-sm mx-4 bg-pink-600 text-white hover:bg-pink-800' type='submit'>Add</button>
                    </div>
                    <br /><br />
                    <div>
                        <label htmlFor="Admin">Admin 3:</label>
                        <input id='admin3Name' className='bg-gray-200 mx-5 px-8 py-3 rounded-sm outline-none' type="text" placeholder='Name' />
                        <input id='admin3Email' className='bg-gray-200 mx-5 px-8 py-3 rounded-sm outline-none' type="email" placeholder='email' />
                        <input id='admin3Mobile' className='bg-gray-200 mx-5 px-8 py-3 rounded-sm outline-none' type="text" placeholder='Mobile Number' />
                        <button className='px-4 py-2 rounded-sm mx-4 bg-pink-600 text-white hover:bg-pink-800' type='submit'>Add</button>
                    </div>
                    <br /><br /><br /><br />
                    <div className='text-center'>
                        <button className='px-4 py-2 rounded-sm mx-4 bg-pink-600 text-white hover:bg-pink-800' type='submit' onSubmit={onSubmit} onClick={saveForm}>Save</button>
                        <button className="px-4 py-2 rounded-sm mx-4 bg-pink-600 text-white hover:bg-pink-800" onClick={closeForm}>Cancel</button>
                    </div>
               
             </form>
         </div>
        )}


    {showManagerForm &&(
             <div className="absolute mt-48 py-24 px-8 bg-gray-50">
             <form>
                     <div>
                         <label>Manager 1:</label>
                         <input id='managerName' className='bg-gray-200 mx-5 px-8 py-3 rounded-sm outline-none md:mx-4 px-5 py-2' type="text" placeholder='Name' />
                         <input id='managerEmail' className='bg-gray-200 mx-5 px-8 py-3 rounded-sm outline-none md:mx-4 px-5 py-2' type="email" placeholder='email' />
                         <input id='managerPhone' className='bg-gray-200 mx-5 px-8 py-3 rounded-sm outline-none md:mx-4 px-5 py-2' type="tel" placeholder='Mobile Number' />
                         <button className='px-4 py-2 rounded-sm mx-4 bg-pink-600 text-white hover:bg-pink-800 md:mx-2 px-2 py-2' type='submit'>Add</button>
                     </div>
                     <br /><br />
                     <div>
                         <label>Manager 2:</label>
                         <input id='managerName2' className='bg-gray-200 mx-5 px-8 py-3 rounded-sm outline-none' type="text" placeholder='Name' />
                         <input id='m2Email' className='bg-gray-200 mx-5 px-8 py-3 rounded-sm outline-none' type="email" placeholder='email' />
                         <input id='m2Mobile' className='bg-gray-200 mx-5 px-8 py-3 rounded-sm outline-none' type="tel" placeholder='Mobile Number' />
                         <button className='px-4 py-2 rounded-sm mx-4 bg-pink-600 text-white hover:bg-pink-800' type='submit'>Add</button>
                     </div>
                     <br /><br />
                     <div>
                        <label>Manager 3:</label>
                         <input id='m3Name' className='bg-gray-200 mx-5 px-8 py-3 rounded-sm outline-none' type="text" placeholder='Name' />
                         <input id='m3Email' className='bg-gray-200 mx-5 px-8 py-3 rounded-sm outline-none' type="email" placeholder='email' />
                         <input id='m3Mobile' className='bg-gray-200 mx-5 px-8 py-3 rounded-sm outline-none' type="tel" placeholder='Mobile Number' />
                         <button className='px-4 py-2 rounded-sm mx-4 bg-pink-600 text-white hover:bg-pink-800' type='submit'>Add</button>
                     </div>
                     <br /><br />
                     <div>
                        <label >Manager 4:</label>
                         <input id='m4Name' className='bg-gray-200 mx-5 px-8 py-3 rounded-sm outline-none' type="text" placeholder='Name' />
                         <input id='m4Email' className='bg-gray-200 mx-5 px-8 py-3 rounded-sm outline-none' type="email" placeholder='email' />
                         <input id='m4Mobile' className='bg-gray-200 mx-5 px-8 py-3 rounded-sm outline-none' type="tel" placeholder='Mobile Number' />
                         <button className='px-4 py-2 rounded-sm mx-4 bg-pink-600 text-white hover:bg-pink-800' type='submit'>Add</button>
                     </div>
                     <br /><br />
                     <div>
                        <label >Manager 5:</label>
                         <input id='m5Name' className='bg-gray-200 mx-5 px-8 py-3 rounded-sm outline-none' type="text" placeholder='Name' />
                         <input id='m5Email' className='bg-gray-200 mx-5 px-8 py-3 rounded-sm outline-none' type="email" placeholder='email'/>
                         <input id='m5Mobile' className='bg-gray-200 mx-5 px-8 py-3 rounded-sm outline-none' type="tel" placeholder='Mobile Number'/>
                         <button className='px-4 py-2 rounded-sm mx-4 bg-pink-600 text-white hover:bg-pink-800' type='submit'>Add</button>
                     </div>
                     <br /><br />
                     <div>
                        <label >Manager 6:</label>
                         <input id='m6Name' className='bg-gray-200 mx-5 px-8 py-3 rounded-sm outline-none' type="text" placeholder='Name'/>
                         <input id='m6Email' className='bg-gray-200 mx-5 px-8 py-3 rounded-sm outline-none' type="email" placeholder='email'/>
                         <input id='m6Mobile' className='bg-gray-200 mx-5 px-8 py-3 rounded-sm outline-none' type="tel" placeholder='Mobile Number'/>
                         <button className='px-4 py-2 rounded-sm mx-4 bg-pink-600 text-white hover:bg-pink-800' type='submit'>Add</button>
                     </div>
                     <br /><br /><br /><br />
                     <div className='text-center'>
                         <button className='px-4 py-2 rounded-sm mx-4 bg-pink-600 text-white hover:bg-pink-800' type='submit' onClick={saveForm}>Save</button>
                         <button className="px-4 py-2 rounded-sm mx-4 bg-pink-600 text-white hover:bg-pink-800" onClick={closeForm}>Cancel</button>
                     </div>
              </form>
          </div>
        )}


        {showOwnerForm &&(
             <div className="absolute py-24 mt-48 px-8 bg-gray-50">
             <form>
                     <div className=''>
                        <label >Owner 1:</label>
                         <input id='o1Name' className='bg-gray-200 mx-5 px-8 py-3 rounded-sm outline-none' type="text" placeholder='Name' />
                         <input id='o1Email' className='bg-gray-200 mx-5 px-8 py-3 rounded-sm outline-none' type="email" placeholder='email' />
                         <input id='o1Mobile' className='bg-gray-200 mx-5 px-8 py-3 rounded-sm outline-none' type="text" placeholder='Mobile Number' />
                         <button className='px-4 py-2 rounded-sm mx-4 bg-pink-600 text-white hover:bg-pink-800' type='submit'>Add</button>
                     </div>
                     <br /><br />
                     <div>
                        <label >Owner 2:</label>
                         <input id='o2Name' className='bg-gray-200 mx-5 px-8 py-3 rounded-sm outline-none' type="text" placeholder='Name'/>
                         <input id='o2Email' className='bg-gray-200 mx-5 px-8 py-3 rounded-sm outline-none' type="email" placeholder='email'/>
                         <input id='o2Mobile' className='bg-gray-200 mx-5 px-8 py-3 rounded-sm outline-none' type="text" placeholder='Mobile Number'/>
                         <button className='px-4 py-2 rounded-sm mx-4 bg-pink-600 text-white hover:bg-pink-800' type='submit'>Add</button>
                     </div>
                     <br /><br />
                     <div>
                        <label >Owner 3:</label>
                         <input id='o3Name' className='bg-gray-200 mx-5 px-8 py-3 rounded-sm outline-none' type="text" placeholder='Name'/>
                         <input id='o3Email' className='bg-gray-200 mx-5 px-8 py-3 rounded-sm outline-none' type="email" placeholder='email'/>
                         <input id='o3Mobile' className='bg-gray-200 mx-5 px-8 py-3 rounded-sm outline-none' type="text" placeholder='Mobile Number'/>
                         <button className='px-4 py-2 rounded-sm mx-4 bg-pink-600 text-white hover:bg-pink-800' type='submit'>Add</button>
                     </div>
                     <br /><br /><br /><br />
                     <div className='text-center'>
                         <button className='px-4 py-2 rounded-sm mx-4 bg-pink-600 text-white hover:bg-pink-800' type='submit' onSubmit={onSubmit} onClick={saveForm}>Save</button>
                         <button className="px-4 py-2 rounded-sm mx-4 bg-pink-600 text-white hover:bg-pink-800" onClick={closeForm}>Cancel</button>
                     </div>
                
              </form>
          </div>
        )}



      <div className='text-center w-2/3'>
        <h3>Add Admin:</h3>
            <input id='adminName' value={adminName} className='bg-gray-200 px-2 py-3 rounded-sm outline-none' type="text" placeholder='Name'/>
            <input id='adminEmail' value={adminEmail} className='bg-gray-200 mx-2 px-8 py-3 rounded-sm outline-none' type="email" placeholder='email'/>
            <input id='adminPhone' value={adminPhone} className='bg-gray-200 mx-2 px-2 py-3 rounded-sm outline-none' type="text" placeholder='Mobile Number'/>
            <button className='px-4 py-3 rounded-sm bg-pink-600 text-white hover:bg-pink-800' onClick={handleAddAdmin}>+</button>
        <br /><br /><br />
        <h3>Add Manager:</h3>
            <input id='managerName' value={managerName} className='bg-gray-200 px-2 py-3 rounded-sm outline-none' type="text" placeholder='Name'/>
            <input id='managerEmail' value={managerEmail} className='bg-gray-200 mx-2 px-8 py-3 rounded-sm outline-none' type="email" placeholder='email'/>
            <input id='managerPhone' value={managerPhone} className='bg-gray-200 mx-2 px-2 py-3 rounded-sm outline-none' type="text" placeholder='Mobile Number'/>
            <button className='px-4 py-3 rounded-sm bg-pink-600 text-white hover:bg-pink-800' onClick={handleAddManager}>+</button>
        <br /><br /><br />
        <h3>Add Owner:</h3>
            <input id='ownerName' value={ownerName} className='bg-gray-200 px-2 py-3 rounded-sm outline-none' type="text" placeholder='Name'/>
            <input id='ownerEmail' value={ownerEmail} className='bg-gray-200 mx-2 px-8 py-3 rounded-sm outline-none' type="email" placeholder='email'/>
            <input id='ownerPhone' value={ownerPhone} className='bg-gray-200 mx-2 px-2 py-3 rounded-sm outline-none' type="text" placeholder='Mobile Number'/>
            <button className='px-4 py-3 rounded-sm bg-pink-600 text-white hover:bg-pink-800' onClick={handleAddOwner}>+</button>
      </div>
    </div>
    <div className='text-center'>
        <button type="submit" onClick={submitForm} className="bg-blue-500 px-5 py-2 text-gray-100 rounded-sm hover:bg-blue-700">Submit</button>
        <button onClick={onCancel} className="bg-red-500 px-5 py-2 text-gray-100 rounded-sm hover:bg-red-700 ml-2">Cancel</button>
    </div>

        


        
    </>
  );
};

export default BridgeForm;
