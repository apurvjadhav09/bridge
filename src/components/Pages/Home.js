import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as XLSX from 'xlsx';
import axios from 'axios';
import { IoIosArrowDropdown } from "react-icons/io";
import { IoArrowBackCircleSharp } from "react-icons/io5";

import logo from '../Assets/logo.png';

const Home = () => {

  const [BackEndData, setBackEndData] = useState([]);
  const [Dropdown, setDropdown] = useState(false);
  const [Showexcelfile, setshowexcelfile] = useState(false);
  const [showHome, setshowHome] = useState(true);
  const [setData] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const email=localStorage.getItem('email')
       
        const response = await axios.get(`http://localhost:9090/bridge/showbridge?email=${email}`);
        if (response.status === 200) {
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

  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileUpload = (e) => {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.readAsBinaryString(file);
      reader.onload = (e) => {
          const data = e.target.result;
          const workbook = XLSX.read(data, { type: "binary" });
          const sheetName = workbook.SheetNames[0];
          const sheet = workbook.Sheets[sheetName];
          const parsedData = XLSX.utils.sheet_to_json(sheet);
          setData(parsedData);
          setSelectedFile({ file, data: parsedData });
      };
  };

  const postDataToServer = async() => {
    if(!selectedFile){
        alert('Please add a file!')
    }
    else{
        try{
            const formData = new FormData();
              formData.append('file', selectedFile.file);
            const response = await axios.post('https://shm-server.azurewebsites.net/files/upload', formData,{
                headers:{
                    'Content-Type': 'multipart/form-data',
                }
            });
            if(response.status >= 200 && response.status < 300){
                console.log('Backend Response: ',response.data);
                alert('File successfully uploaded!');
                navigate('/home');
            }

        }
        catch(error){
            console.log(error);
            alert('Error: ', error)
        }

    }
};
  
const sample_csv = 'https://shm-frontserver.azurewebsites.net/sample.xlsx'

const downloadFileAtURL = (url) => {
    const fileName = url.split("/").pop();
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.href = url;
    aTag.setAttribute("download", fileName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
};

  const navigate = useNavigate();
  const addbridge = () => {
    navigate('./bridgeform');
  };

  const CancelExcel = () => {
    setshowexcelfile(false);
    setshowHome(!showHome);
  };

  const addcsv = () => {
    setshowexcelfile(!Showexcelfile);
    setshowHome(false);
  };

  const Drop = () => {
    setDropdown(!Dropdown);
  };

  const backHome = () => {
    setshowHome(true);
    setshowexcelfile(false);
  };

  const RedirectDashboard = () => {
    navigate('/home/dashboard');
  };

  return (
    <>
      <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet" />
      <div className="flex">
        <div className="home w-1/2">
          <img className='p-6 w-1/6' src={logo} alt="" />
        </div>

        { Showexcelfile && (
          <div className='absolute left-1/2 w-1/2'>
            <button className='inline-flex underline mt-4' onClick={backHome}><IoArrowBackCircleSharp size={32}/>Home</button>
            <div className='text-center pt-12'>
            <h1 className='text-3xl font-bold'>&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash; Sample File Download &ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;</h1>
              <button className="cursor-pointer bg-pink-600 text-white p-2 mt-10 rounded-sm hover:bg-pink-900" onClick={()=>{downloadFileAtURL(sample_csv)}}>Sample Download</button>
              <h1 className='text-3xl pt-32 justify-center font-bold'>&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash; Upload Excel File &ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;</h1>
            </div>
            <div className="flex justify-center mt-10 py-6">
              <input id='fileinput' className='hidden' type="file" accept='.xlsx , .xls , .csv' onChange={handleFileUpload} />
              <label htmlFor="fileinput" className="cursor-pointer bg-black text-white rounded-sm p-2 px-4 hover:bg-pink-600" >{selectedFile ? `${selectedFile.file.name}` : 'Choose File'}</label>
              <button className='bg-green-600 justify-end text-white p-2 px-4 rounded-sm ml-12 hover:bg-green-900' onClick={postDataToServer}>Submit</button>
              <button className='bg-red-600 justify-end text-white p-2 px-4 rounded-sm ml-12 hover:bg-red-900' onClick={CancelExcel}>Cancel</button>
            </div>
          </div>
        )}

        {showHome && (
        <div className='text-center w-1/2 pr-6'>
        <h1 className='text-3xl font-bold text-black my-12'>&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash; REGISTER &ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;</h1>
        <h1 className='text-white mx-56 font-sm mb-6 text-l cursor-pointer bg-black px-3 py-2 rounded-sm hover:bg-pink-600' onClick={Drop}>Select a method to Enter Data &nbsp;&nbsp; <IoIosArrowDropdown style={{alignItems: 'center' , display:'inline-flex'}} size={24}/></h1>
        {Dropdown && (
        <div className='grid justify-center'>
          <button onClick={addbridge} className='bg-pink-600 px-3 mx-5 mb-5 py-2 text-gray-100 rounded-sm hover:bg-black'>Add Manually</button>
          <button onClick={addcsv} className='bg-pink-600 px-4 py-2 mx-5 text-gray-100 rounded-sm hover:bg-black'>Upload Excel</button>
        </div>
        )}

        <br /><br /><br /><hr /><hr />
        <div className="mt-4">
          <h2 className="text-2xl font-bold mb-2">Added Bridges:</h2>
          <hr /><hr />
          <br /><br />
          <ul>
         
           {BackEndData.length > 0 ? (
            <ul>
            {BackEndData.map((data, index) => (
              <div key={index}>
                <p className='cursor-pointer text-gray-600 hover:underline' onClick={RedirectDashboard}>
                   {data.bridge.bridgeName}
                </p>
                <hr />
              </div>
            ))}
          </ul>
          
          ) : (
            <p>No bridges found</p>
          )}
          </ul>
     
        </div>
      </div>
        )}

      </div>


    </>
  );
};

export default Home;