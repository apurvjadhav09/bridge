import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const BridgeForm = ({ onCancel, onSubmit }) => {
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    alert('Bridge Added Successfully')
    navigate('../home');
    try {
      const response = await axios.post('http://localhost:9090', bridgeData);
      console.log('Backend response:', response.data);
    } catch (error) {
      console.error('Error submitting form', error);
    }
  };

  return (
    <>
      <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet" />
    <div className="flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl">
        <h2 className="text-2xl font-bold mb-4">Add New Bridge</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="country" className="block text-gray-700">Country:</label>
            <select id="country" name="country" value={bridgeData.country} onChange={handleCountryChange} className="border border-gray-300 p-2 w-full rounded" required>
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
            <select
              id="state"
              name="state"
              value={bridgeData.state}
              onChange={handleStateChange}
              className="border border-gray-300 p-2 w-full rounded"
              required
            >
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
              type="text"
              id="coordinates"
              name="coordinates"
              value={bridgeData.coordinates}
              onChange={handleInputChange}
              className="border border-gray-300 p-2 w-full rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="division" className="block text-gray-700">
              Division:
            </label>
            <input
              type="text"
              id="division"
              name="division"
              value={bridgeData.division}
              onChange={handleInputChange}
              className="border border-gray-300 p-2 w-full rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700">
              Bridge Name:
            </label>
            <input type="text" id="bname" name="name" value={bridgeData.name} onChange={handleInputChange} className="border border-gray-300 p-2 w-full rounded" required/>
          </div>
          <button type="submit" onClick={handleSubmit} className="bg-blue-500 px-5 py-2 text-gray-100 rounded-xl hover:bg-blue-700">
            Add
          </button>
          <button onClick={onCancel} className="bg-red-500 px-5 py-2 text-gray-100 rounded-xl hover:bg-red-700 ml-2">
            Cancel
          </button>
        </form>
      </div>
    </div>
    </>
  );
};

export default BridgeForm;
