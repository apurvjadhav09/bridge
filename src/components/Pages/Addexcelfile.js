import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as XLSX from 'xlsx';
import './tailwind.css';

import logo2 from '../Assets/logo.png';
import axios from 'axios';

const Addexcelfile = () => {

    const [data, setData] = useState([]);
    const navigate = useNavigate();
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
                const response = await axios.post('http://localhost:9090/',{
                    data:data,
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

    const sample_csv = 'http://localhost:3000/sample.xlsx'

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






  return (
    <>
      <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet" />

      <div className='flex'>

        <div id='excel' className='w-1/2'>
            <img className='w-32 p-7' src={logo2} alt="" />

        </div>



        <div className='w-1/2 pl-20 py-6'>
            <div>
                <h1 className='text-3xl font-semibold py-6'>Sample File</h1>
                <p className='text-gray-800'>Use this sample Excel sheet as a guide to create your own. It provides an example structure and format, helping users to accurately set up their data entries.</p>
                <button className="cursor-pointer bg-black text-white p-2 mt-6 rounded-sm hover:bg-pink-600" onClick={()=>{downloadFileAtURL(sample_csv)}}>Sample Download</button>
            </div>
            <br /><br /><br />
            <h1 className='text-3xl font-semibold py-6'>Select File</h1>
            <p className='text-gray-800'>Uploading an Excel file simplifies data entry, especially for large datasets, ensuring accurate information integration. To assist users, a sample Excel file 
            is provided as a reference template, guiding them on the correct format for entering data. This streamlined process enhances efficiency and reduces the risk of errors, promoting 
            a user-friendly and reliable upload experience. <br /><br />Select your excel file first and then upload it.</p>


            <div className="flex py-6">
              <input id='fileinput' className='hidden' type="file" accept='.xlsx , .xls , .csv' onChange={handleFileUpload} />
              <label htmlFor="fileinput" className="cursor-pointer bg-black text-white p-2 px-4 rounded-sm hover:bg-pink-600" >{selectedFile ? `${selectedFile.file.name}` : 'Select File'}</label>
              <button className='bg-black justify-end text-white p-2 px-3 rounded-sm ml-12 hover:bg-pink-600' onClick={postDataToServer}>Upload File</button>
            </div>
            
            
        </div>
        <div className='justify-center w-1/6'>
        </div>
      </div>
      



        {data.length > 0 && (
            <table className='hidden text-left'>
                <thead>
                    <tr className='grid'>
                        {Object.keys(data[0]).map((key)=>(
                            <th className='p-2 w-full' key={key}><label htmlFor="label">{key}:</label></th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, index) => (
                        <tr className='grid' key={index}>
                            {Object.values(row).map((value, index) => (
                                <td key={index}><input className='p-2 w-full' type="text" value={value} readOnly/></td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        )}
        
    </>
  );
};

export default Addexcelfile;
