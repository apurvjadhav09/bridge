import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './tailwind.css';

import logo from '../Assets/logo.png';

const Home = () => {
  const [inputs, setInputs] = useState([]);
  const [currentInput, setCurrentInput] = useState('');
  const [showForm, setShowForm] = useState(false); // State to control the visibility of the form
  const [newBridgeData, setNewBridgeData] = useState({
    name: '',
    location: '',
    coordinates: '',
  });

  const navigate = useNavigate();

  // Load bridges from localStorage on component mount
  useEffect(() => {
    const storedInputs = JSON.parse(localStorage.getItem('bridges')) || [];
    setInputs(storedInputs);
  }, []);

  // Save bridges to localStorage whenever inputs change
  useEffect(() => {
    localStorage.setItem('bridges', JSON.stringify(inputs));
  }, [inputs]);

  const handleInputChange = (e) => {
    setCurrentInput(e.target.value);
  };

  const handleAddInput = () => {
    setShowForm(true);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (
      newBridgeData.name.trim() !== '' &&
      newBridgeData.location.trim() !== '' &&
      newBridgeData.coordinates.trim() !== ''
    ) {
      setInputs([...inputs, newBridgeData]);
      setShowForm(false);
      setNewBridgeData({
        name: '',
        location: '',
        coordinates: '',
      });
    }
  };

  const handleRemoveInput = (index) => {
    const shouldRemove = window.confirm("Do you want to really remove the selected bridge?")

    if (shouldRemove) {
      const updatedInputs = [...inputs];
      updatedInputs.splice(index, 1);
      setInputs(updatedInputs);
    }
  };

  const handleExploreInput = (index) => {
    navigate('./dashboard');
  }

  return (
    <>
      <link
        href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
        rel="stylesheet"
      />
      <div className="flex">
        <div id='homeimg' className="bg-no-repeat w-1/2">
          <img className='w-32 p-5' src={logo} alt="" />
        </div>
        <div className="text-center w-1/2">
          <h1 className="text-3xl font-bold my-16">Welcome</h1>
          <div>
            <button
              className="bg-blue-500 px-5 py-3 text-gray-100 rounded-xl hover:bg-blue-700"
              onClick={handleAddInput}
            >
              Add Bridge Manually
            </button><br /><br /><br />
            <h1 className='text-3xl font-semibold'>OR</h1>
            <br /><br />
            <input
              className="ml-24 cursor-pointer"
              type="file"
              onChange={handleAddInput}
              accept=".csv, .xlsx"
            /> <br /><br /><br /><br />
            <h1 className='text-3xl font-semibold'>Bridges Added</h1><br /><br />
          </div>
          <ul>
            {inputs.map((bridge, index) => (
              <li key={index}>
                {bridge.name}
                <button
                  className="bg-blue-500 px-5 py-1 text-gray-100 rounded-xl hover:bg-blue-700 my-5 mx-5"
                  onClick={() => handleRemoveInput(index)}
                >
                  Remove
                </button>
                <button
                  className="bg-blue-500 px-5 py-1 text-gray-100 rounded-xl hover:bg-blue-700"
                  onClick={() => handleExploreInput(index)}
                >
                  Explore
                </button>
              </li>
            ))}
          </ul>



          {showForm && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <div className="bg-white p-8 rounded-xl">
                <h2 className="text-2xl font-bold mb-4">Add New Bridge</h2>
                <form onSubmit={handleFormSubmit}>
                  <div className="mb-4">
                    <label htmlFor="bridgeName" className="block text-gray-700">
                      Bridge Name:
                    </label>
                    <input
                      type="text"
                      id="bridgeName"
                      value={newBridgeData.name}
                      onChange={(e) =>
                        setNewBridgeData({
                          ...newBridgeData,
                          name: e.target.value,
                        })
                      }
                      className="border border-gray-300 p-2 w-full rounded"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="bridgeLocation" className="block text-gray-700">
                      Bridge Location:
                    </label>
                    <input
                      type="text"
                      id="bridgeLocation"
                      value={newBridgeData.location}
                      onChange={(e) =>
                        setNewBridgeData({
                          ...newBridgeData,
                          location: e.target.value,
                        })
                      }
                      className="border border-gray-300 p-2 w-full rounded"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="bridgeCoordinates" className="block text-gray-700">
                      Bridge Coordinates:
                    </label>
                    <input
                      type="text"
                      id="bridgeCoordinates"
                      value={newBridgeData.coordinates}
                      onChange={(e) =>
                        setNewBridgeData({
                          ...newBridgeData,
                          coordinates: e.target.value,
                        })
                      }
                      className="border border-gray-300 p-2 w-full rounded"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-blue-500 px-5 py-2 text-gray-100 rounded-xl hover:bg-blue-700"
                  >
                    Add
                  </button>
                  <button
                    onClick={() => setShowForm(false)}
                    className="bg-red-500 px-5 py-2 text-gray-100 rounded-xl hover:bg-red-700 ml-2"
                  >
                    Cancel
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
