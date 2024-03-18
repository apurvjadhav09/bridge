import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Papa from 'papaparse';
import { Line } from 'react-chartjs-2';
import SensorData from '../Assets/Data.csv';
import './tailwind.css';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    Title,
    Tooltip,
    Legend,
    LineElement,
} from 'chart.js';

import { FaBridge } from "react-icons/fa6";
import { FaArrowCircleRight, FaEdit } from "react-icons/fa";
import {MdHome, MdSettings, MdPerson, MdSearch, MdNotifications, MdDashboard, MdSensors, MdDescription, MdLogout, MdEdit } from 'react-icons/md'

import logo2 from '../Assets/logo2.png';

ChartJS.register(
    CategoryScale,
    LinearScale,
    LineElement,
    PointElement,
    Title,
    Tooltip,
    Legend,
)



const Superuserhome = () => {

    const [chartData, setChartData] = useState({});
    const [chartData1, setChartData1] = useState({});
    const [chartData2, setChartData2] = useState({});
    const [chartData3, setChartData3] = useState({});
    const [chartData4, setChartData4] = useState({});
    const [chartData5, setChartData5] = useState({});
    const [chartData6, setChartData6] = useState({});
    const [chartData7, setChartData7] = useState({});


    const [averageLoggerTemp, setAverageLoggerTemp] = useState(null);
    const [averageBatteryVoltage, setAverageBatteryVoltage] = useState(null);
    //Sensor1
    const [averageSensor1Temp, setAverageSensor1Temp] = useState(null);
    const [averageSensor1Freq, setAverageSensor1Freq] = useState(null);
    const [averageSensor1Eng, setAverageSensor1Eng] = useState(null);
    //Sensor2
    const [averageSensor2Temp, setAverageSensor2Temp] = useState(null);
    const [averageSensor2Freq, setAverageSensor2Freq] = useState(null);
    const [averageSensor2Eng, setAverageSensor2Eng] = useState(null);

    useEffect(() => {
      const fetchData = async () => {
        const response = await fetch(SensorData); // Change path to your CSV file
        const reader = response.body.getReader();
        const result = await reader.read();
        const decoder = new TextDecoder('utf-8');
        const csv = decoder.decode(result.value);
        const parsedData = Papa.parse(csv, { header: true });
        
        
        //General Dashboard
        const labels = parsedData.data.slice(0, 180).map(row => row.DateTime);

        const BatteryVoltage = parsedData.data.slice(0, 180).map(row => row.BatteryVoltage);
        const LoggerTemp = parsedData.data.slice(0, 180).map(row => row.LoggerTemp);
        
        // Sensor 1
        const Sensor1Temp = parsedData.data.slice(0, 180).map(row => row.S01TEMP);
        const Sensor1Freq = parsedData.data.slice(0, 180).map(row => row.S01hz);
        const Sensor1Eng = parsedData.data.slice(0, 180).map(row => row.S01Eng);
        
        // Sensor 2
        const Sensor2Temp = parsedData.data.slice(0, 180).map(row => row.S02TEMP);
        const Sensor2Freq = parsedData.data.slice(0, 180).map(row => row.S02Hz);
        const Sensor2Eng = parsedData.data.slice(0, 180).map(row => row.S02Eng);
        


        //INDIVIDUAL NUMERICAL VALUES (General Dashboard)
        const sum = BatteryVoltage.reduce((accumulator, currentValue) => accumulator + parseFloat(currentValue), 0);
        const average = sum / BatteryVoltage.length;
        setAverageBatteryVoltage(average.toFixed(2));

        const sum1 = LoggerTemp.reduce((accumulator, currentValue) => accumulator + parseFloat(currentValue), 0);
        const average1 = sum1 / LoggerTemp.length.toFixed(2);
        setAverageLoggerTemp(average1.toFixed(2));
    

        //INDIVIDUAL NUMERICAL VALUES (Sensors Dashboard)

        //Sensor 1
        const sum2 = Sensor1Temp.reduce((accumulator, currentValue) => accumulator + parseFloat(currentValue), 0);
        const average2 = sum2 / Sensor1Temp.length;
        setAverageSensor1Temp(average2.toFixed(2));

        const sum3 = Sensor1Freq.reduce((accumulator, currentValue) => accumulator + parseFloat(currentValue), 0);
        const average3 = sum3 / Sensor1Freq.length.toFixed(2);
        setAverageSensor1Freq(average3.toFixed(2));

        const sum4 = Sensor1Eng.reduce((accumulator, currentValue) => accumulator + parseFloat(currentValue), 0);
        const average4 = sum4 / Sensor1Eng.length.toFixed(2);
        setAverageSensor1Eng(average4.toFixed(2));

        //Sensor 2
        const sum5 = Sensor2Temp.reduce((accumulator, currentValue) => accumulator + parseFloat(currentValue), 0);
        const average5 = sum5 / Sensor2Temp.length;
        setAverageSensor2Temp(average5.toFixed(2));

        const sum6 = Sensor2Freq.reduce((accumulator, currentValue) => accumulator + parseFloat(currentValue), 0);
        const average6 = sum6 / Sensor2Freq.length.toFixed(2);
        setAverageSensor2Freq(average6.toFixed(2));

        const sum7 = Sensor2Eng.reduce((accumulator, currentValue) => accumulator + parseFloat(currentValue), 0);
        const average7 = sum7 / Sensor2Eng.length.toFixed(2);
        setAverageSensor2Eng(average7.toFixed(2));


        //Animation
        let count = 0;
        let count1 = 0;
        let count2 = 0;
        let count3 = 0;
        let count4 = 0;
        const animationInterval = setInterval(() => {
            if (count < average || count1 < average1 || count2 < average2 || count3 < average3 || count4 < average4) {
                setAverageBatteryVoltage(count.toFixed(2));
                setAverageLoggerTemp(count1.toFixed(2));
                setAverageSensor1Temp(count2.toFixed(2));
                setAverageSensor1Freq(count3.toFixed(2));
                setAverageSensor1Eng(count4.toFixed(2));
                count += average / 150; // Animation speed
                count1 += average1 / 150;
                count2 += average2 / 150;
                count3 += average3 / 150;
                count4 += average4 / 150;
            } else {
                setAverageBatteryVoltage(average.toFixed(2));
                setAverageLoggerTemp(average1.toFixed(2));
                setAverageSensor1Temp(average2.toFixed(2));
                setAverageSensor1Freq(average3.toFixed(2));
                setAverageSensor1Eng(average4.toFixed(2));
                clearInterval(animationInterval);
            }
        }, 20);
  
        

        setChartData({
          labels: labels,
          datasets: [
            {
                label: 'Date/Time vs Battery Voltage',
                data: BatteryVoltage,
                borderColor: 'blue',
                borderWidth: 1,
                pointBorderColor: 'black',  
                pointRadius: 1,
                pointHoverRadius: 1,
                tension: 0,
            }
          ]
        });
        setChartData1({
            labels: labels,
            datasets: [
                {
                    label: 'Date/Time vs Logger Temperature',
                    data: LoggerTemp,
                    borderColor: 'red',
                    borderWidth: 1,
                    pointBorderColor: 'black',
                    pointRadius: 1,
                    pointHoverRadius: 1,
                    tension: 0 
                }
            ]
        });

        //SENSOR DATA
        setChartData2({
            labels: labels,
            datasets: [
                {
                    label: 'Date/Time vs Sensor 1 Temperature',
                    data: Sensor1Temp,
                    borderColor: 'blue',
                    borderWidth: 1,
                    pointBorderColor: 'black',
                    pointRadius: 1,
                    pointHoverRadius: 1,
                    tension: 0 
                }
            ]
        });
        setChartData3({
            labels: labels,
            datasets: [
                {
                    label: 'Date/Time vs Sensor 1 Frequency (in Hz)',
                    data: Sensor1Freq,
                    borderColor: 'red',
                    borderWidth: 1,
                    pointBorderColor: 'black',
                    pointRadius: 1,
                    pointHoverRadius: 1,
                    tension: 0 
                }
            ]
        });
        setChartData4({
            labels: labels,
            datasets: [
                {
                    label: 'Date/Time vs Sensor 1 Eng',
                    data: Sensor1Eng,
                    borderColor: 'green',
                    borderWidth: 1,
                    pointBorderColor: 'black',
                    pointRadius: 1,
                    pointHoverRadius: 1,
                    tension: 0 
                }
            ]
        });
        setChartData5({
            labels: labels,
            datasets: [
                {
                    label: 'Date/Time vs Sensor 2 Temp)',
                    data: Sensor2Temp,
                    borderColor: 'blue',
                    borderWidth: 1,
                    pointBorderColor: 'black',
                    pointRadius: 1,
                    pointHoverRadius: 1,
                    tension: 0 
                }
            ]
        });
        setChartData6({
            labels: labels,
            datasets: [
                {
                    label: 'Date/Time vs Sensor 2 Frequency (in Hz)',
                    data: Sensor2Freq,
                    borderColor: 'red',
                    borderWidth: 1,
                    pointBorderColor: 'black',
                    pointRadius: 1,
                    pointHoverRadius: 1,
                    tension: 0 
                }
            ]
        });
        setChartData7({
            labels: labels,
            datasets: [
                {
                    label: 'Date/Time vs Sensor 2 Eng',
                    data: Sensor2Eng,
                    borderColor: 'green',
                    borderWidth: 1,
                    pointBorderColor: 'black',
                    pointRadius: 1,
                    pointHoverRadius: 1,
                    tension: 0 
                }
            ]
        });
      };
  
      fetchData();
    }, []);


    const navigate = useNavigate();
    const [isSelected, setIsSelected] = useState(true);
    const [isSelected1, setIsSelected1] = useState(false);
    const [isSelected4, setIsSelected4] = useState(false);


    const [showUserDetails, setshowUserDetails] = useState(false);
    const [showDashboard, setshowDashboard] = useState(true);
    const [showSensorDashboard, setshowSensorDashboard] = useState(false);
    const [showModify, setshowModify] = useState(false);

//MODIFY SECTION
const [id,setId]=useState('');
const bridgeName = localStorage.getItem('bridgeName');
  
    const countries = ['India', 'USA', 'Australia']; 
    const statesByCountry = {
      India: ['Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal'],
      USA: ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'],
      Australia: ['Australian Capital Territory', 'New South Wales', 'Northern Territory', 'Queensland', 'South Australia', 'Tasmania', 'Victoria', 'Western Australia'],
    }; 


    console.log(bridgeName);
    useEffect(() => {
        const findBridgeID = async () => {
                try {
                    const response = await axios.get(`http://localhost:9090/bridge/bridgeid?bridgeName=${bridgeName}`)
                    if (response.status >= 200 && response.status < 300) {
                        console.log(response.data)
                        setId(response.data)
                    } else {
                        console.error('Failed to fetch data:', response.statusText);
                    }
                } catch (error) {
                    console.error('Error:', error);
                }
            
        };
    
        findBridgeID();
    }, [bridgeName]);

    
      const [userData, setUserData] = useState({
        country: '',
        state: '',
        coordinates: '',
        division: '',
        location: '',
        bridgeName: '',

        adminEmail: '',
        adminName: '',
        adminPhone: '',
        managerEmail: '',
        managerName: '',
        managerPhone: '',
        ownerEmail: '',
        ownerName: '',
        ownerPhone: '',

        adminEmail2: '',
        adminName2: '',
        adminPhone2: '',
        managerEmail2: '',
        managerName2: '',
        managerPhone2: '',
        ownerEmail2: '',
        ownerName2: '',
        ownerPhone2: '',

        adminEmail3: '',
        adminName3: '',
        adminPhone3: '',
        managerEmail3: '',
        managerName3: '',
        managerPhone3: '',
        ownerEmail3: '',
        ownerName3: '',
        ownerPhone3: '',

        managerEmail4: '',
        managerName4: '',
        managerPhone4: '',

        managerEmail5: '',
        managerName5: '',
        managerPhone5: '',
        
        managerEmail6: '',
        managerName6: '',
        managerPhone6: '',

        noofgirders: '',
        nobridgespan:'',

        admin1countryCode:'',
        admin2countryCode:'',
        admin3countryCode:'',

        manager1countryCode:'',
        manager2countryCode:'',
        manager3countryCode:'',
        manager4countryCode:'',
        manager5countryCode:'',
        manager6countryCode:'',

        owner1countryCode:'',
        owner2countryCode:'',
        owner3countryCode:'',
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (!id) {
                    return;
                }
              const response = await axios.get(`http://localhost:9090/bridge/getbridge/${id}`);
              if (response.status >= 200 && response.status < 300) {
                console.log(response.data);
                const { country, state, coordinates, division, location, bridgeName, 
                    adminName, adminEmail, adminPhone, adminName2, adminEmail2, adminPhone2, 
                    adminName3, adminEmail3, adminPhone3, managerName, managerEmail, managerPhone,
                    managerName2, managerEmail2, managerPhone2, managerName3, managerEmail3, managerPhone3,
                    managerName4, managerEmail4, managerPhone4, managerName5, managerEmail5, managerPhone5,
                    managerName6, managerEmail6, managerPhone6, ownerName, ownerEmail, ownerPhone, ownerName2, 
                    ownerEmail2, ownerPhone2, ownerName3, ownerEmail3, ownerPhone3, nobridgespan, noofgirders,
                    admin1countryCode,admin2countryCode,admin3countryCode,owner1countryCode,owner2countryCode,
                    owner3countryCode,manager1countryCode ,manager2countryCode ,manager3countryCode ,manager4countryCode,
                    manager5countryCode ,manager6countryCode} = response.data;

                setUserData({country, state, coordinates, division, location, bridgeName, 
                    adminName, adminEmail, adminPhone, adminName2, adminEmail2, adminPhone2, 
                    adminName3, adminEmail3, adminPhone3, managerName, managerEmail, managerPhone,
                    managerName2, managerEmail2, managerPhone2, managerName3, managerEmail3, managerPhone3,
                    managerName4, managerEmail4, managerPhone4, managerName5, managerEmail5, managerPhone5,
                    managerName6, managerEmail6, managerPhone6, ownerName, ownerEmail, ownerPhone, ownerName2, 
                    ownerEmail2, ownerPhone2, ownerName3, ownerEmail3, ownerPhone3, nobridgespan, noofgirders,
                    admin1countryCode,admin2countryCode,admin3countryCode,owner1countryCode,owner2countryCode,
                    owner3countryCode,manager1countryCode ,manager2countryCode ,manager3countryCode ,manager4countryCode,
                    manager5countryCode ,manager6countryCode});
              } else {
                console.error('Failed to fetch data:', response.statusText);
              }
            } catch (error) {
              console.error('Error:', error);
            }
          };

        fetchData();
      }, [id]);


      const updateData = async (dataToUpdate) => {
        if(userData.country ===  userData.state === ''){
            alert('Please Select a Country & State')
        }
        else if(userData.adminName === userData.adminEmail === userData.adminPhone === ''){
            alert('Please Add Atleast One Admin!')
        }
        else if(userData.managerName === userData.managerEmail === userData.managerPhone === ''){
            alert('Please Add Atleast One Manager!');
        }
        else if(userData.ownerName === userData.ownerEmail === userData.ownerPhone === ''){
            alert('Please Add Atleast One Owner!');
        }
        else{
        try {
            const dataToUpdate = {
                country: userData.country,
                state: userData.state,
                coordinates: userData.coordinates,
                division: userData.division,
                location: userData.location,
                bridgeName: userData.bridgeName,

                adminEmail: userData.adminEmail,
                adminName: userData.adminName,
                adminPhone: userData.adminPhone,
                managerEmail: userData.managerEmail,
                managerName: userData.managerName,
                managerPhone: userData.managerPhone,
                ownerEmail: userData.ownerEmail,
                ownerName: userData.ownerName,
                ownerPhone: userData.ownerPhone,

                adminEmail2: userData.adminEmail2,
                adminName2: userData.adminName2,
                adminPhone2: userData.adminPhone2,
                managerEmail2: userData.managerEmail2,
                managerName2: userData.managerName2,
                managerPhone2: userData.managerPhone2,
                ownerEmail2: userData.ownerEmail2,
                ownerName2: userData.ownerName2,
                ownerPhone2: userData.ownerPhone2,

                adminEmail3: userData.adminEmail3,
                adminName3: userData.adminName3,
                adminPhone3: userData.adminPhone3,
                managerEmail3: userData.managerEmail3,
                managerName3: userData.managerName3,
                managerPhone3: userData.managerPhone3,
                ownerEmail3: userData.ownerEmail3,
                ownerName3: userData.ownerName3,
                ownerPhone3: userData.ownerPhone3,

                managerEmail4: userData.managerEmail4,
                managerName4: userData.managerName4,
                managerPhone4: userData.managerPhone4,

                managerEmail5: userData.managerEmail5,
                managerName5: userData.managerName5,
                managerPhone5: userData.managerPhone5,
                
                managerEmail6: userData.managerEmail6,
                managerName6: userData.managerName6,
                managerPhone6: userData.managerPhone6,

                admin1countryCode: userData.admin1countryCode,
                admin2countryCode: userData.admin2countryCode,
                admin3countryCode: userData.admin3countryCode,
    
                owner1countryCode: userData.owner1countryCode,
                owner2countryCode: userData.owner2countryCode,
                owner3countryCode: userData.owner3countryCode,
    
                manager1countryCode: userData.manager1countryCode,
                manager2countryCode: userData.manager2countryCode,
                manager3countryCode: userData.manager3countryCode,
                manager4countryCode: userData.manager4countryCode,
                manager5countryCode: userData.manager5countryCode,
                manager6countryCode: userData.manager6countryCode,
            };
            const response = await axios.put(`http://localhost:9090/bridge/updatebridge/${id}`, dataToUpdate);
            if(response.status >= 200 && response.status < 300){
                alert('Data Updated Successfully!')
                console.log('Data updated successfully:', response.data);
                return response.data;
            }
            } 
            catch (error) {
            console.error('Error updating data:', error);
            throw error;
        }
    }
      };



      //SensorData
      const [sensorDataList, setSensorDataList] = useState([]);

      const [sensorData, setsensorData] = useState({
        sensortype:'',
        spanno:'',
        girderno:'',
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (!id) {
                    return;
                }
              const response = await axios.get(`http://localhost:9090/bridge/getsensor/${id}`);
              if (response.status >= 200 && response.status < 300) {
                console.log(response.data);
                setSensorDataList(response.data);
                const { sensortype, spanno, girderno } = response.data;

                setsensorData({ sensortype, spanno, girderno});
              } else {
                console.error('Failed to fetch data:', response.statusText);
              }
            } catch (error) {
              console.error('Error:', error);
            }   
          };

        fetchData();
      }, [id]);


      const updateSensorData = async (SensordataToUpdate) => {
        try {
            const SensordataToUpdate = {
                sensortype: sensorData.sensortype,
                spanno: sensorData.spanno,
                girderno: sensorData.girderno,
            };
            const response = await axios.put(`http://localhost:9090/bridge/updatesensor/${id}`, SensordataToUpdate);
            if(response.status >= 200 && response.status < 300){
                alert('Data Updated Successfully!')
                console.log('Data updated successfully:', response.data);
                return response.data;
            }
            } 
            catch (error) {
            console.error('Error updating data:', error);
            throw error; // Optionally rethrow the error to handle it in the calling code
        }
      };


    const UserDetails = () => {
        setshowUserDetails(!showUserDetails);
    };

    const Dashboard = () => {
        setIsSelected(!isSelected);
        setIsSelected1(false);
        setIsSelected4(false);
        setshowDashboard(!showDashboard);
        setshowSensorDashboard(false);
        setshowModify(false);
        setshowSensorDetails(false);
        setshowBridgeDetails(false);
        setshowUser(false);
    };

    const SensorDashboard = () => {
        setIsSelected1(!isSelected1);
        setIsSelected(false);
        setIsSelected4(false);
        setshowSensorDashboard(!showSensorDashboard);
        setshowDashboard(false);
        setshowModify(false);
        setshowBridgeDetails(false);
        setshowSensorDetails(false);
        setshowUser(false);    
    };

    const RedirectHome = () => {
        navigate('../home')
    };


    const Modify = () => {
        setshowSensorDashboard(false);
        setshowDashboard(false);
        setIsSelected1(false);
        setIsSelected(false);
        setshowSensorDetails(false);
        setshowUser(false);    
        setshowModify(!showModify);
        setIsSelected4(!isSelected4);
    };

    const [showBridgeDetails, setshowBridgeDetails] = useState(false);
    const [showSensorDetails, setshowSensorDetails] = useState(false);
    const [showUser, setshowUser] = useState(false);

    const showBridgeInfo = () => {
        setshowBridgeDetails(true);
        setshowSensorDetails(false);
        setshowUser(false);
    };

    const showSensorInfo = () => {
        setshowSensorDetails(true);
        setshowBridgeDetails(false);
        setshowUser(false);
    };

    const showUserInfo = () => {
        setshowUser(true);
        setshowSensorDetails(false);
        setshowBridgeDetails(false);
    }

    const Logout = async () => {
        try {
            const token = localStorage.getItem('authToken'); // Corrected key
            console.log(token);
    
            const config = {
                headers: {
                    Authorization: `Bearer ${token}` // Correct interpolation
                }
            };
    
            const response = await axios.post('http://localhost:9090/logout', {}, config);
    
            if (response.status === 200) {
                console.log(response.data);
                localStorage.removeItem('authToken');
                navigate('/');
            } else {
                console.error('Failed to fetch data:', response.statusText);
            }
        } catch (error) {
            console.error('Failed to fetch data:', error.message);
        }
    };


  return (
    <>
      <div className="flex fixed z-10 w-full justify-center bg-gray-100 py-2 shadow-xl">
        <div className='w-full'>   
           <img className='h-10 pt-2 cursor-pointer px-5'  src={logo2} alt=""/>
        </div>
        <div className='w-full text-center pt-1'>
            <h1 className='text-2xl font-semibold'>Structural Health Monitoring Dashboard</h1>
        </div>
        <div className='w-full text-right'>
            <button className='px-2'><MdSearch size={36} /></button>
            <button className='px-2'><MdNotifications size={36} /></button>
            <button onClick={UserDetails} className='px-2'><MdPerson onClick={UserDetails} size={36} /></button>
        </div>
      </div>

      <nav className='w-24 bg-gray-300 fixed mt-14'>
        <div className='text-center'>
            <button className='w-full py-3 hover:bg-gray-400' onClick={RedirectHome}><ul><MdHome style={{width: '100%', alignItems: 'center'}} size={40} />Home</ul></button>
            <hr /><hr />
            <button className={`w-full py-3 ${isSelected ? 'bg-gray-400' : 'hover:bg-gray-400'}`} onClick={Dashboard}><ul><MdDashboard style={{width: '100%', alignItems: 'center'}} size={40} />Dashboard</ul></button>
            <hr /><hr />
            <button className={`w-full py-3 ${isSelected1 ? 'bg-gray-400' : 'hover:bg-gray-400'}`} onClick={SensorDashboard}><ul><MdSensors style={{width: '100%', alignItems: 'center'}} size={40} />Sensors</ul></button>
            <hr /><hr />
            <button className='w-full py-3 hover:bg-gray-400'><ul><FaBridge style={{width: '100%', alignItems: 'center'}} size={40} />Bridge</ul></button>
            <hr /><hr />
            <button className='w-full py-3 hover:bg-gray-400'><ul><MdDescription style={{width: '100%', alignItems: 'center'}} size={40} />Report</ul></button>
            <hr /><hr />
            <button className={`w-full py-3 ${isSelected4 ? 'bg-gray-400' : 'hover:bg-gray-400'}`} onClick={Modify}><ul><FaEdit style={{width: '100%', alignItems: 'center'}} size={40} />Edit</ul></button>
            <hr /><hr />
            <button className='w-full py-3 hover:bg-gray-400'><ul><MdSettings style={{width: '100%', alignItems: 'center'}} size={40}/>Settings</ul></button>
        </div>  
      </nav>



      {showUserDetails && (
        <div className="w-1/12 z-10 fixed top-14 right-2 bg-gray-100 border shadow-md">
          <div className='p-2 text-center'>Name</div>
          <div className='flex cursor-pointer hover:bg-gray-200 p-2'><MdEdit size={24} style={{paddingTop: '3px'}}/>Edit Info</div>
          <div className='flex cursor-pointer hover:bg-gray-200 p-2' onClick={Logout}><MdLogout size={24} style={{paddingTop: '3px'}}/>Log-out</div>
        </div>
      )}




      {showDashboard && (
        <>
        <div className='w-11/12 ml-24 p-6 flex pt-24 bg-white'>
            <div className="bg-gray-100 w-1/2 mx-8 shadow-xl">
                <h1 className='text-center font-bold'>Battery Voltage Monitoring</h1><br />
                {chartData.labels && chartData.datasets && chartData.labels.length > 0 && chartData.datasets.length > 0 ? (
                    <Line data={chartData}/>
                    ) : (
                    <h1>Loading...</h1>
                )}
            </div>

            <div className="bg-gray-100 w-1/2 shadow-xl">
            <h1 className='text-center font-bold'>Logger Temperature Monitoring</h1><br />
            {chartData1.labels && chartData1.datasets && chartData1.labels.length > 0 && chartData1.datasets.length > 0 ? (
                    <Line data={chartData1} />
                    ) : (
                    <h1>Loading...</h1>
        )}
            </div>


            </div>
            <div className='w-11/12 ml-24 p-6 flex'>

              <div className="bg-gray-100 w-1/6 mx-6 shadow-2xl rounded-xl"><br />
                <h2 className="text-lg font-semibold text-center text-gray-600">Avg Battery Voltage</h2><br />
                <h1 className='text-center font-bold text-6xl text-gray-800'>{averageBatteryVoltage} </h1><br />
              </div>

              <div className="bg-gray-100 w-1/6 mx-6 shadow-2xl rounded-xl"><br />
                <h2 className="text-lg font-semibold text-center text-gray-600">Avg Logger Temp</h2><br />
                <h1 className='text-center font-bold text-6xl text-gray-800'>{averageLoggerTemp}</h1><br />
              </div>

              <div className="bg-pink-600 w-2/3 shadow-2xl mx-6 rounded-xl text-white p-3 pl-6">
              <h1 className='text-2xl'>General Dashboard</h1> <hr /><br />
              <p className='text-sm'>The dashboard displays real-time data on battery voltage and logger temperature, allowing 
                users to monitor system health and performance. With intuitive visualizations, 
                it provides insights into power supply stability and environmental conditions, facilitating 
                informed decision-making and proactive maintenance.</p>

              </div>
            </div>
            </>
      )}



      {showSensorDashboard && (
        <>
        <h1 className='w-11/12 ml-24 text-center p-6 pt-24 text-pink-600 text-4xl font-semibold'>&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash; Sensor 1 Dashboard &ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;</h1>
        <div className='w-11/12 ml-24 p-6 pt-6 flex'>
            <div className="bg-gray-100 w-1/2 mx-8 shadow-xl">
                <br />
                <h1 className='text-center font-bold'>Sensor 1 Temperature Monitoring</h1><br />
                {chartData2.labels && chartData2.datasets && chartData2.labels.length > 0 && chartData2.datasets.length > 0 ? (
                    <Line data={chartData2}/>
                    ) : (
                    <h1>Loading...</h1>
                )}
            </div>

            <div className="bg-gray-100 w-1/2 shadow-xl">
                <br />
                <h1 className='text-center font-bold'>Sensor 1 Frequency Monitoring</h1><br />
                {chartData3.labels && chartData3.datasets && chartData3.labels.length > 0 && chartData3.datasets.length > 0 ? (
                    <Line data={chartData3} />
                    ) : (
                    <h1>Loading...</h1>
                )}
            </div>
            </div>
        <div className='w-11/12 ml-24 p-6 flex pt-14'>

            <div className="bg-gray-100 w-1/2 mx-8 shadow-xl">
                <br />
                <h1 className='text-center font-bold'>Sensor 1 Eng Monitoring</h1><br />
                {chartData4.labels && chartData4.datasets && chartData4.labels.length > 0 && chartData4.datasets.length > 0 ? (
                    <Line data={chartData4}/>
                    ) : (
                    <h1>Loading...</h1>
                )}
            </div>

            <div className='grid w-1/4'>
                <div className="bg-gray-100 w-4/5 mx-6 mb-6 shadow-2xl rounded-xl"><br />
                    <h2 className="text-lg font-semibold text-center text-gray-600">Sensor 1 avg Temperature</h2><br />
                    <h1 className='text-center font-bold text-6xl text-gray-800'>{averageSensor1Temp} </h1><br />
                  </div>

                  <div className="bg-gray-100 w-4/5 mx-6 shadow-2xl rounded-xl"><br />
                    <h2 className="text-lg font-semibold text-center text-gray-600">Sensor 1 avg Eng</h2><br />
                    <h1 className='text-center font-bold text-6xl text-gray-800'>{averageSensor1Eng} </h1><br />
                  </div>

            </div>
            <div className='grid w-1/4'>
            <div className="bg-gray-100 w-4/5 mx-6 shadow-2xl mb-6 rounded-xl"><br />
                    <h2 className="text-lg font-semibold text-center text-gray-600">Sensor 1 avg Frequency</h2><br />
                    <h1 className='text-center font-bold text-6xl text-gray-800'>{averageSensor1Freq}</h1><br />
                  </div>

                  <div className="bg-pink-600 mx-6 w-4/5 text-white pb-10 shadow-2xl cursor-pointer rounded-xl hover:bg-pink-800"><br />
                    <h2 className="text-lg font-semibold text-center">Avg Logger Temp</h2><br />
                    <FaArrowCircleRight className='' style={{width: '100%', alignItems: 'center'}} size={40} />
                  </div>
            </div>
        </div>
        <br />
        <hr />
        
        {/* Sensor 2 */}
        <h1 className='w-11/12 ml-24 text-center p-6 pt-24 text-pink-600 text-4xl font-semibold'>&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash; Sensor 2 Dashboard &ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;</h1>
        <div className='w-11/12 ml-24 p-6 pt-6 flex'>
            <div className="bg-gray-100 w-1/2 mx-8 shadow-xl">
                <br />
                <h1 className='text-center font-bold'>Sensor 2 Temperature Monitoring</h1><br />
                {chartData5.labels && chartData5.datasets && chartData5.labels.length > 0 && chartData5.datasets.length > 0 ? (
                    <Line data={chartData5}/>
                    ) : (
                    <h1>Loading...</h1>
                )}
            </div>

            <div className="bg-gray-100 w-1/2 shadow-xl">
                <br />
                <h1 className='text-center font-bold'>Sensor 2 Frequency Monitoring</h1><br />
                {chartData6.labels && chartData6.datasets && chartData6.labels.length > 0 && chartData6.datasets.length > 0 ? (
                            <Line data={chartData6}/>
                    ) : (
                    <h1>Loading...</h1>
                )}
            </div>
            </div>
        <div className='w-11/12 ml-24 p-6 flex pt-14'>

            <div className="bg-gray-100 w-1/2 mx-8 shadow-xl">
                <br />
                <h1 className='text-center font-bold'>Sensor 2 Eng Monitoring</h1><br />
                {chartData7.labels && chartData7.datasets && chartData7.labels.length > 0 && chartData7.datasets.length > 0 ? (
                            <Line data={chartData7}/>
                    ) : (
                    <h1>Loading...</h1>
                )}
            </div>

            <div className='grid w-1/4'>
                <div className="bg-gray-100 w-4/5 mx-6 mb-6 shadow-2xl rounded-xl"><br />
                    <h2 className="text-lg font-semibold text-center text-gray-600">Sensor 2 avg Temperature</h2><br />
                    <h1 className='text-center font-bold text-6xl text-gray-800'>{averageSensor2Temp} </h1><br />
                  </div>

                  <div className="bg-gray-100 w-4/5 mx-6 shadow-2xl rounded-xl"><br />
                    <h2 className="text-lg font-semibold text-center text-gray-600">Sensor 2 avg Eng</h2><br />
                    <h1 className='text-center font-bold text-6xl text-gray-800'>{averageSensor2Eng} </h1><br />
                  </div>

            </div>
            <div className='grid w-1/4'>

                <div className="bg-gray-100 w-4/5 mx-6 shadow-2xl mb-6 rounded-xl"><br />
                    <h2 className="text-lg font-semibold text-center text-gray-600">Sensor 2 avg Frequency</h2><br />
                    <h1 className='text-center font-bold text-6xl text-gray-800'>{averageSensor2Freq}</h1><br />
                  </div>

                  <div className="bg-pink-600 mx-6 w-4/5 text-white pb-10 shadow-2xl cursor-pointer rounded-xl hover:bg-pink-800"><br />
                    <h2 className="text-lg font-semibold text-center">Avg Logger Temp</h2><br />
                    <FaArrowCircleRight className='' style={{width: '100%', alignItems: 'center'}} size={40} />
                  </div>
            </div>
        </div>

        </>
      )}
      

{showModify && (
    <>
    <div className='w-11/12 ml-24 pt-14 bg-white'>
    <nav className='flex fixed justify-center bg-pink-100 w-full z-10'>
        <ul className= 'px-12 py-4 cursor-pointer hover:bg-pink-300' onClick={showBridgeInfo}>Bridge Information</ul>
        <ul className='px-12 py-4 cursor-pointer hover:bg-pink-300' onClick={showSensorInfo}>Sensor Information</ul>
        <ul className='px-12 py-4 cursor-pointer hover:bg-pink-300' onClick={showUserInfo}>User Information</ul>
    </nav>
    </div>
    </>
)}

{showBridgeDetails && (
    <>
        <div className='w-11/12 ml-24 p-6 pt-24 bg-white'>
        <form>
        <h1 className='text-center text-3xl w-full font-semibold pb-12'>&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash; Bridge Information &ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;</h1>
          <div className="flex w-full px-6 justify-center">
            <div className='w-1/2 mx-5'>
                <div className="mb-6">
                    <label htmlFor="country" className="block text-gray-700">Country:</label>
                    <select id="country" name="country" value={userData.country} onChange={(e) => setUserData(prevData => ({...prevData, country: e.target.value}))} className="border border-gray-300 p-2 w-full rounded" >
                        <option value="country" disabled>Select Country</option>
                        {countries.map((country, index) => (
                        <option key={index} value={country}>{country}</option>
                    ))}
                </select>
                </div>
                <div className="mb-6">
                    <label htmlFor="state" className="block text-gray-700">State:</label>
                    <select id="state" name="state" value={userData.state} onChange={(e) => setUserData(prevData => ({...prevData, state: e.target.value}))} className="border border-gray-300 p-2 w-full rounded">
                    <option value="state" disabled>Select State</option>
                    {statesByCountry[userData.country]?.map((state, index) => (
                        <option key={index} value={state}>{state}</option>
                    ))}
                    </select>
                </div>
                <div className="mb-6">
                    <label htmlFor="nobridgespan" className="block text-gray-700">Number of Bridge Spans:</label>
                    <select id="nobridgespan" name="nobridgespan" value={userData.nobridgespan} onChange={(e) => setUserData(prevData => ({...prevData, nobridgespan: e.target.value}))} className="border border-gray-300 p-2 w-full rounded">
                    {[...Array(50).keys()].map((span) => (<option key={span + 1} value={span + 1}>{span + 1}</option>))}
                    </select>
                </div>
                <div className="mb-6">
                    <label htmlFor="noofgirders" className="block text-gray-700">Number of Girders:</label>
                    <select id="noofgirders" name="noofgirders" value={userData.nobridgespan} onChange={(e) => setUserData(prevData => ({...prevData, noofgirders: e.target.value}))} className="border border-gray-300 p-2 w-full rounded">
                    {[...Array(20).keys()].map((girder) => (<option key={girder + 1} value={girder + 1}>{girder + 1}</option>))}
                    </select>
                </div>
            </div>
            <div className="w-1/2 px-6 justify-center">
                <div className="mb-6">
                    <label htmlFor="division" className="block text-gray-700">Division:</label>
                    <input type="text" id="division" placeholder='Enter Division' name="division" value={userData.division} onChange={(e) => setUserData(prevData => ({...prevData, division: e.target.value}))} className="border border-gray-300 p-2 w-full rounded" />
                </div>
                <div className="mb-6">
                    <label htmlFor='bridgeName' className="block text-gray-700">Bridge Location:</label>
                    <input type="text" id="location" placeholder='Enter Location' name="location" value={userData.location} onChange={(e) => setUserData(prevData => ({...prevData, location: e.target.value}))} className="border border-gray-300 p-2 w-full rounded" />
                </div>
                <div className="mb-6">
                    <label htmlFor="coordinates" className="block text-gray-700">Bridge Coordinates:</label>
                    <input type="text" id="coordinates" placeholder='Enter Coordinates' name="coordinates" value={userData.coordinates} onChange={(e) => setUserData(prevData => ({...prevData, coordinates: e.target.value}))} className="border border-gray-300 p-2 w-full rounded"/>
                </div>
                <div className="mb-6">
                    <label htmlFor='bridgeName' className="block text-gray-700">Bridge Name:</label>
                    <input type="text" id="name" placeholder='Enter Name' name="name" value={userData.bridgeName} onChange={(e) => setUserData(prevData => ({...prevData, bridgeName: e.target.value}))} className="border border-gray-300 p-2 w-full rounded" />
                </div>
            </div>
        </div>
        </form>
        <div className='text-center'>
            <button className='mt-12 p-2 bg-pink-600 text-white px-6 mx-4 rounded-sm hover:bg-pink-900' onClick={updateData}>Save</button>
        </div> 
        </div>
    </>
)}

{showSensorDetails && (
    <>
        <div className='w-11/12 ml-24 p-6 pt-24 bg-white'>
        <h1 className='text-center text-3xl w-full font-semibold pb-12'>&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash; Sensor Information &ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;</h1>
        {sensorDataList.length === 0 ? (
        <div className="text-center text-gray-700">No sensors found</div>
        ) : (
          sensorDataList.map((sensorData, index) => (
            <div key={index} className='w-11/12 ml-24 p-6 pt-24 bg-white'>
              <h1 className='text-center text-3xl w-full font-semibold pb-12'>Sensor Information - {sensorData.id}</h1>
              <div className="mb-6 px-96 w-full">
                <label htmlFor="sensortype" className="block text-gray-700">Sensor Type:</label>
                <select id="sensortype" name="sensortype" value={sensorData.sensortype}  onChange={(e) => setUserData(prevData => ({...prevData, sensortype: e.target.value}))} className="border border-gray-300 p-2 w-full rounded">
                  <option value="Accelerometer">Accelerometer</option>
                  <option value="Strain Gauge">Strain Gauge</option>
                  <option value="Deflection Gauge">Deflection Gauge</option>
                  <option value="Camera">Camera</option>
                </select>
              </div>
              <h1 className='font-semibold text-lg'>Sensor Location</h1>  
              <div className="mb-2 w-full px-5">
                <label htmlFor={`spanno-${index}`} className="block text-gray-700">Span Number:</label>
                <select id={`spanno-${index}`} name={`spanno-${index}`} value={sensorData.spanno}  onChange={(e) => setUserData(prevData => ({...prevData, spanno: e.target.value}))} className="border border-gray-300 p-1 w-full rounded">
                  {Array.from({ length: parseInt(userData.nobridgespan) }, (_, i) => (
                    <option key={`span-${i + 1}`} value={i}>{i}</option>
                  ))}
                </select>
              </div>
              <div className="mb-2 w-full px-5">
                <label htmlFor={`girderno-${index}`} className="block text-gray-700">Girder Number:</label>
                <select id={`girderno-${index}`} name={`girderno-${index}`} value={sensorData.girderno}  onChange={(e) => setUserData(prevData => ({...prevData, girderno: e.target.value}))} className="border border-gray-300 p-1 w-full rounded">
                  {Array.from({ length: parseInt(userData.noofgirders) }, (_, i) => (
                    <option key={`girder-${i + 1}`} value={i}>{i}</option>
                  ))}
                </select>
              </div>
            </div>
        ))
    )}
      <div className='text-center'>
        <button className='mt-12 p-2 bg-pink-600 text-white px-6 rounded-sm hover:bg-pink-900' onClick={() => updateSensorData(sensorData.id, sensorData)}>Save</button>
      </div> 
        </div>
    </>
)}

{showUser && ( 
    <>
        <div className='w-11/12 ml-24 p-6 pt-24 bg-white'>
        <h1 className='text-center text-3xl w-full font-semibold pb-12'>&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash; User Information &ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;</h1>
        <div className='text-left text-gray-800'>
        <h3 className='font-semibold pb-6'>Added Admin(s):</h3>
        <div className='flex'>
            <input id='adminName' value={userData.adminName} onChange={(e) => setUserData(prevData => ({...prevData, adminName: e.target.value}))} className="border-b-2 border-gray-400 p-2 w-full mr-8" type="text" placeholder='Name (Admin 1)'/>
            <input id='adminEmail' value={userData.adminEmail} onChange={(e) => setUserData(prevData => ({...prevData, adminEmail: e.target.value}))} className="border-b-2 border-gray-400 p-2 w-full mr-8" type="email" placeholder='email'/>
            <select name="countryCode" value={userData.admin1countryCode} onChange={(e) => setUserData(prevData => ({...prevData, admin1countryCode: e.target.value}))} className='border-b-2 border-gray-400 p-2 w-1/6 mr-2 cursor-pointer'>
                  <option value="code">Code</option>
                  <option value="+93">(+93) Afghanistan</option>
                  <option value="+355">(+355) Albania</option>
                  <option value="+213">(+213) Algeria</option>
                  <option value="+376">(+376) Andorra</option>
                  <option value="+244">(+244) Angola</option>
                  <option value="+1264">(+1264) Anguilla</option>
                  <option value="+1268">(+1268) Antigua and Barbuda</option>
                  <option value="+54">(+54) Argentina</option>
                  <option value="+374">(+374) Armenia</option>
                  <option value="+297">(+297) Aruba</option>
                  <option value="+61">(+61) Australia</option>
                  <option value="+43">(+43) Austria</option>
                  <option value="+994">(+994) Azerbaijan</option>
                  <option value="+1242">(+1242) Bahamas</option>
                  <option value="+973">(+973) Bahrain</option>
                  <option value="+880">(+880) Bangladesh</option>
                  <option value="+1246">(+1246) Barbados</option>
                  <option value="+375">(+375) Belarus</option>
                  <option value="+32">(+32) Belgium</option>
                  <option value="+501">(+501) Belize</option>
                  <option value="+229">(+229) Benin</option>
                  <option value="+1441">(+1441) Bermuda</option>
                  <option value="+975">(+975) Bhutan</option>
                  <option value="+591">(+591) Bolivia</option>
                  <option value="+387">(+387) Bosnia and Herzegovina</option>
                  <option value="+267">(+267) Botswana</option>
                  <option value="+55">(+55) Brazil</option>
                  <option value="+246">(+246) British Indian Ocean Territory</option>
                  <option value="+673">(+673) Brunei Darussalam</option>
                  <option value="+359">(+359) Bulgaria</option>
                  <option value="+226">(+226) Burkina Faso</option>
                  <option value="+257">(+257) Burundi</option>
                  <option value="+855">(+855) Cambodia</option>
                  <option value="+237">(+237) Cameroon</option>
                  <option value="+1">(+1) Canada</option>
                  <option value="+238">(+238) Cape Verde</option>
                  <option value="+1345">(+1345) Cayman Islands</option>
                  <option value="+236">(+236) Central African Republic</option>
                  <option value="+235">(+235) Chad</option>
                  <option value="+56">(+56) Chile</option>
                  <option value="+86">(+86) China</option>
                  <option value="+61">(+61) Christmas Island</option>
                  <option value="+672">(+672) Cocos (Keeling) Islands</option>
                  <option value="+57">(+57) Colombia</option>
                  <option value="+269">(+269) Comoros</option>
                  <option value="+242">(+242) Congo</option>
                  <option value="+243">(+243) Congo, the Democratic Republic of the</option>
                  <option value="+682">(+682) Cook Islands</option>
                  <option value="+506">(+506) Costa Rica</option>
                  <option value="+225">(+225) Cote D'Ivoire</option>
                  <option value="+385">(+385) Croatia</option>
                  <option value="+53">(+53) Cuba</option>
                  <option value="+357">(+357) Cyprus</option>
                  <option value="+420">(+420) Czech Republic</option>
                  <option value="+45">(+45) Denmark</option>
                  <option value="+253">(+253) Djibouti</option>
                  <option value="+1767">(+1767) Dominica</option>
                  <option value="+1809">(+1809) Dominican Republic</option>
                  <option value="+593">(+593) Ecuador</option>
                  <option value="+20">(+20) Egypt</option>
                  <option value="+503">(+503) El Salvador</option>
                  <option value="+240">(+240) Equatorial Guinea</option>
                  <option value="+291">(+291) Eritrea</option>
                  <option value="+372">(+372) Estonia</option>
                  <option value="+251">(+251) Ethiopia</option>
                  <option value="+500">(+500) Falkland Islands (Malvinas)</option>
                  <option value="+298">(+298) Faroe Islands</option>
                  <option value="+679">(+679) Fiji</option>
                  <option value="+358">(+358) Finland</option>
                  <option value="+33">(+33) France</option>
                  <option value="+594">(+594) French Guiana</option>
                  <option value="+689">(+689) French Polynesia</option>
                  <option value="+241">(+241) Gabon</option>
                  <option value="+220">(+220) Gambia</option>
                  <option value="+995">(+995) Georgia</option>
                  <option value="+49">(+49) Germany</option>
                  <option value="+233">(+233) Ghana</option>
                  <option value="+350">(+350) Gibraltar</option>
                  <option value="+30">(+30) Greece</option>
                  <option value="+299">(+299) Greenland</option>
                  <option value="+1473">(+1473) Grenada</option>
                  <option value="+590">(+590) Guadeloupe</option>
                  <option value="+1671">(+1671) Guam</option>
                  <option value="+502">(+502) Guatemala</option>
                  <option value="+224">(+224) Guinea</option>
                  <option value="+245">(+245) Guinea-Bissau</option>
                  <option value="+592">(+592) Guyana</option>
                  <option value="+509">(+509) Haiti</option>
                  <option value="+504">(+504) Honduras</option>
                  <option value="+852">(+852) Hong Kong</option>
                  <option value="+36">(+36) Hungary</option>
                  <option value="+354">(+354) Iceland</option>
                  <option value="+91">(+91) India</option>
                  <option value="+62">(+62) Indonesia</option>
                  <option value="+98">(+98) Iran, Islamic Republic of</option>
                  <option value="+964">(+964) Iraq</option>
                  <option value="+353">(+353) Ireland</option>
                  <option value="+972">(+972) Israel</option>
                  <option value="+39">(+39) Italy</option>
                  <option value="+1876">(+1876) Jamaica</option>
                  <option value="+81">(+81) Japan</option>
                  <option value="+962">(+962) Jordan</option>
                  <option value="+7">(+7) Kazakhstan</option>
                  <option value="+254">(+254) Kenya</option>
                  <option value="+686">(+686) Kiribati</option>
                  <option value="+850">(+850) Korea, Democratic People's Republic of</option>
                  <option value="+82">(+82) Korea, Republic of</option>
                  <option value="+965">(+965) Kuwait</option>
                  <option value="+996">(+996) Kyrgyzstan</option>
                  <option value="+856">(+856) Lao People's Democratic Republic</option>
                  <option value="+371">(+371) Latvia</option>
                  <option value="+961">(+961) Lebanon</option>
                  <option value="+266">(+266) Lesotho</option>
                  <option value="+231">(+231) Liberia</option>
                  <option value="+218">(+218) Libya</option>
                  <option value="+423">(+423) Liechtenstein</option>
                  <option value="+370">(+370) Lithuania</option>
                  <option value="+352">(+352) Luxembourg</option>
                  <option value="+853">(+853) Macao</option>
                  <option value="+389">(+389) Macedonia, the Former Yugoslav Republic of</option>
                  <option value="+261">(+261) Madagascar</option>
                  <option value="+265">(+265) Malawi</option>
                  <option value="+60">(+60) Malaysia</option>
                  <option value="+960">(+960) Maldives</option>
                  <option value="+223">(+223) Mali</option>
                  <option value="+356">(+356) Malta</option>
                  <option value="+692">(+692) Marshall Islands</option>
                  <option value="+596">(+596) Martinique</option>
                  <option value="+222">(+222) Mauritania</option>
                  <option value="+230">(+230) Mauritius</option>
                  <option value="+52">(+52) Mexico</option>
                  <option value="+691">(+691) Micronesia, Federated States of</option>
                  <option value="+373">(+373) Moldova, Republic of</option>
                  <option value="+377">(+377) Monaco</option>
                  <option value="+976">(+976) Mongolia</option>
                  <option value="+382">(+382) Montenegro</option>
                  <option value="+1664">(+1664) Montserrat</option>
                  <option value="+212">(+212) Morocco</option>
                  <option value="+258">(+258) Mozambique</option>
                  <option value="+95">(+95) Myanmar</option>
                  <option value="+264">(+264) Namibia</option>
                  <option value="+674">(+674) Nauru</option>
                  <option value="+977">(+977) Nepal</option>
                  <option value="+31">(+31) Netherlands</option>
                  <option value="+599">(+599) Netherlands Antilles</option>
                  <option value="+687">(+687) New Caledonia</option>
                  <option value="+64">(+64) New Zealand</option>
                  <option value="+505">(+505) Nicaragua</option>
                  <option value="+227">(+227) Niger</option>
                  <option value="+234">(+234) Nigeria</option>
                  <option value="+683">(+683) Niue</option>
                  <option value="+672">(+672) Norfolk Island</option>
                  <option value="+47">(+47) Norway</option>
                  <option value="+968">(+968) Oman</option>
                  <option value="+92">(+92) Pakistan</option>
                  <option value="+680">(+680) Palau</option>
                  <option value="+507">(+507) Panama</option>
                  <option value="+675">(+675) Papua New Guinea</option>
                  <option value="+595">(+595) Paraguay</option>
                  <option value="+51">(+51) Peru</option>
                  <option value="+63">(+63) Philippines</option>
                  <option value="+48">(+48) Poland</option>
                  <option value="+351">(+351) Portugal</option>
                  <option value="+974">(+974) Qatar</option>
                  <option value="+40">(+40) Romania</option>
                  <option value="+7">(+7) Russian Federation</option>
                  <option value="+250">(+250) Rwanda</option>
                  <option value="+1869">(+1869) Saint Kitts and Nevis</option>
                  <option value="+1758">(+1758) Saint Lucia</option>
                  <option value="+1784">(+1784) Saint Vincent and the Grenadines</option>
                  <option value="+684">(+684) Samoa</option>
                  <option value="+378">(+378) San Marino</option>
                  <option value="+239">(+239) Sao Tome and Principe</option>
                  <option value="+221">(+221) Senegal</option>
                  <option value="+381">(+381) Serbia</option>
                  <option value="+248">(+248) Seychelles</option>
                  <option value="+232">(+232) Sierra Leone</option>
                  <option value="+65">(+65) Singapore</option>
                  <option value="+421">(+421) Slovakia</option>
                  <option value="+386">(+386) Slovenia</option>
                  <option value="+677">(+677) Solomon Islands</option>
                  <option value="+252">(+252) Somalia</option>
                  <option value="+27">(+27) South Africa</option>
                  <option value="+34">(+34) Spain</option>
                  <option value="+94">(+94) Sri Lanka</option>
                  <option value="+249">(+249) Sudan</option>
                  <option value="+597">(+597) Suriname</option>
                  <option value="+268">(+268) Swaziland</option>
                  <option value="+46">(+46) Sweden</option>
                  <option value="+41">(+41) Switzerland</option>
                  <option value="+963">(+963) Syrian Arab Republic</option>
                  <option value="+886">(+886) Taiwan, Province of China</option>
                  <option value="+992">(+992) Tajikistan</option>
                  <option value="+255">(+255) Tanzania, United Republic of</option>
                  <option value="+66">(+66) Thailand</option>
                  <option value="+228">(+228) Togo</option>
                  <option value="+690">(+690) Tokelau</option>
                  <option value="+676">(+676) Tonga</option>
                  <option value="+1868">(+1868) Trinidad and Tobago</option>
                  <option value="+216">(+216) Tunisia</option>
                  <option value="+90">(+90) Turkey</option>
                  <option value="+993">(+993) Turkmenistan</option>
                  <option value="+688">(+688) Tuvalu</option>
                  <option value="+256">(+256) Uganda</option>
                  <option value="+380">(+380) Ukraine</option>
                  <option value="+971">(+971) United Arab Emirates</option>
                  <option value="+44">(+44) United Kingdom</option>
                  <option value="+1">(+1) United States</option>
                  <option value="+598">(+598) Uruguay</option>
                  <option value="+998">(+998) Uzbekistan</option>
                  <option value="+678">(+678) Vanuatu</option>
                  <option value="+58">(+58) Venezuela</option>
                  <option value="+84">(+84) Vietnam</option>
                  <option value="+1340">(+1340) Virgin Islands, U.S.</option>
                  <option value="+967">(+967) Yemen</option>
                  <option value="+260">(+260) Zambia</option>
                  <option value="+263">(+263) Zimbabwe</option>
                  <option value="+358">(+358) Åland Islands</option>
                </select>
            <input id='adminPhone' value={userData.adminPhone} onChange={(e) => setUserData(prevData => ({...prevData, adminPhone: e.target.value}))} className="border-b-2 border-gray-400 p-2 w-full mr-8" type="text" placeholder='Mobile Number'/>
        </div>
        <form action="submit">
        <div className='mt-5 flex'>
            <input id='adminName2' value={userData.adminName2} onChange={(e) => setUserData(prevData => ({...prevData, adminName2: e.target.value}))} className="border-b-2 border-gray-400 p-2 w-full mr-8" type="text" placeholder='Name (Admin 2)'/>
            <input id='adminEmail2' value={userData.adminEmail2} onChange={(e) => setUserData(prevData => ({...prevData, adminEmail2: e.target.value}))} className="border-b-2 border-gray-400 p-2 w-full mr-8" type="email" placeholder='email'/>
            <select name="countryCode" value={userData.admin2countryCode} onChange={(e) => setUserData(prevData => ({...prevData, admin2countryCode: e.target.value}))} className='border-b-2 border-gray-400 p-2 w-1/6 mr-2 cursor-pointer'>
                  <option value="code">Code</option>
                  <option value="+93">(+93) Afghanistan</option>
                  <option value="+355">(+355) Albania</option>
                  <option value="+213">(+213) Algeria</option>
                  <option value="+376">(+376) Andorra</option>
                  <option value="+244">(+244) Angola</option>
                  <option value="+1264">(+1264) Anguilla</option>
                  <option value="+1268">(+1268) Antigua and Barbuda</option>
                  <option value="+54">(+54) Argentina</option>
                  <option value="+374">(+374) Armenia</option>
                  <option value="+297">(+297) Aruba</option>
                  <option value="+61">(+61) Australia</option>
                  <option value="+43">(+43) Austria</option>
                  <option value="+994">(+994) Azerbaijan</option>
                  <option value="+1242">(+1242) Bahamas</option>
                  <option value="+973">(+973) Bahrain</option>
                  <option value="+880">(+880) Bangladesh</option>
                  <option value="+1246">(+1246) Barbados</option>
                  <option value="+375">(+375) Belarus</option>
                  <option value="+32">(+32) Belgium</option>
                  <option value="+501">(+501) Belize</option>
                  <option value="+229">(+229) Benin</option>
                  <option value="+1441">(+1441) Bermuda</option>
                  <option value="+975">(+975) Bhutan</option>
                  <option value="+591">(+591) Bolivia</option>
                  <option value="+387">(+387) Bosnia and Herzegovina</option>
                  <option value="+267">(+267) Botswana</option>
                  <option value="+55">(+55) Brazil</option>
                  <option value="+246">(+246) British Indian Ocean Territory</option>
                  <option value="+673">(+673) Brunei Darussalam</option>
                  <option value="+359">(+359) Bulgaria</option>
                  <option value="+226">(+226) Burkina Faso</option>
                  <option value="+257">(+257) Burundi</option>
                  <option value="+855">(+855) Cambodia</option>
                  <option value="+237">(+237) Cameroon</option>
                  <option value="+1">(+1) Canada</option>
                  <option value="+238">(+238) Cape Verde</option>
                  <option value="+1345">(+1345) Cayman Islands</option>
                  <option value="+236">(+236) Central African Republic</option>
                  <option value="+235">(+235) Chad</option>
                  <option value="+56">(+56) Chile</option>
                  <option value="+86">(+86) China</option>
                  <option value="+61">(+61) Christmas Island</option>
                  <option value="+672">(+672) Cocos (Keeling) Islands</option>
                  <option value="+57">(+57) Colombia</option>
                  <option value="+269">(+269) Comoros</option>
                  <option value="+242">(+242) Congo</option>
                  <option value="+243">(+243) Congo, the Democratic Republic of the</option>
                  <option value="+682">(+682) Cook Islands</option>
                  <option value="+506">(+506) Costa Rica</option>
                  <option value="+225">(+225) Cote D'Ivoire</option>
                  <option value="+385">(+385) Croatia</option>
                  <option value="+53">(+53) Cuba</option>
                  <option value="+357">(+357) Cyprus</option>
                  <option value="+420">(+420) Czech Republic</option>
                  <option value="+45">(+45) Denmark</option>
                  <option value="+253">(+253) Djibouti</option>
                  <option value="+1767">(+1767) Dominica</option>
                  <option value="+1809">(+1809) Dominican Republic</option>
                  <option value="+593">(+593) Ecuador</option>
                  <option value="+20">(+20) Egypt</option>
                  <option value="+503">(+503) El Salvador</option>
                  <option value="+240">(+240) Equatorial Guinea</option>
                  <option value="+291">(+291) Eritrea</option>
                  <option value="+372">(+372) Estonia</option>
                  <option value="+251">(+251) Ethiopia</option>
                  <option value="+500">(+500) Falkland Islands (Malvinas)</option>
                  <option value="+298">(+298) Faroe Islands</option>
                  <option value="+679">(+679) Fiji</option>
                  <option value="+358">(+358) Finland</option>
                  <option value="+33">(+33) France</option>
                  <option value="+594">(+594) French Guiana</option>
                  <option value="+689">(+689) French Polynesia</option>
                  <option value="+241">(+241) Gabon</option>
                  <option value="+220">(+220) Gambia</option>
                  <option value="+995">(+995) Georgia</option>
                  <option value="+49">(+49) Germany</option>
                  <option value="+233">(+233) Ghana</option>
                  <option value="+350">(+350) Gibraltar</option>
                  <option value="+30">(+30) Greece</option>
                  <option value="+299">(+299) Greenland</option>
                  <option value="+1473">(+1473) Grenada</option>
                  <option value="+590">(+590) Guadeloupe</option>
                  <option value="+1671">(+1671) Guam</option>
                  <option value="+502">(+502) Guatemala</option>
                  <option value="+224">(+224) Guinea</option>
                  <option value="+245">(+245) Guinea-Bissau</option>
                  <option value="+592">(+592) Guyana</option>
                  <option value="+509">(+509) Haiti</option>
                  <option value="+504">(+504) Honduras</option>
                  <option value="+852">(+852) Hong Kong</option>
                  <option value="+36">(+36) Hungary</option>
                  <option value="+354">(+354) Iceland</option>
                  <option value="+91">(+91) India</option>
                  <option value="+62">(+62) Indonesia</option>
                  <option value="+98">(+98) Iran, Islamic Republic of</option>
                  <option value="+964">(+964) Iraq</option>
                  <option value="+353">(+353) Ireland</option>
                  <option value="+972">(+972) Israel</option>
                  <option value="+39">(+39) Italy</option>
                  <option value="+1876">(+1876) Jamaica</option>
                  <option value="+81">(+81) Japan</option>
                  <option value="+962">(+962) Jordan</option>
                  <option value="+7">(+7) Kazakhstan</option>
                  <option value="+254">(+254) Kenya</option>
                  <option value="+686">(+686) Kiribati</option>
                  <option value="+850">(+850) Korea, Democratic People's Republic of</option>
                  <option value="+82">(+82) Korea, Republic of</option>
                  <option value="+965">(+965) Kuwait</option>
                  <option value="+996">(+996) Kyrgyzstan</option>
                  <option value="+856">(+856) Lao People's Democratic Republic</option>
                  <option value="+371">(+371) Latvia</option>
                  <option value="+961">(+961) Lebanon</option>
                  <option value="+266">(+266) Lesotho</option>
                  <option value="+231">(+231) Liberia</option>
                  <option value="+218">(+218) Libya</option>
                  <option value="+423">(+423) Liechtenstein</option>
                  <option value="+370">(+370) Lithuania</option>
                  <option value="+352">(+352) Luxembourg</option>
                  <option value="+853">(+853) Macao</option>
                  <option value="+389">(+389) Macedonia, the Former Yugoslav Republic of</option>
                  <option value="+261">(+261) Madagascar</option>
                  <option value="+265">(+265) Malawi</option>
                  <option value="+60">(+60) Malaysia</option>
                  <option value="+960">(+960) Maldives</option>
                  <option value="+223">(+223) Mali</option>
                  <option value="+356">(+356) Malta</option>
                  <option value="+692">(+692) Marshall Islands</option>
                  <option value="+596">(+596) Martinique</option>
                  <option value="+222">(+222) Mauritania</option>
                  <option value="+230">(+230) Mauritius</option>
                  <option value="+52">(+52) Mexico</option>
                  <option value="+691">(+691) Micronesia, Federated States of</option>
                  <option value="+373">(+373) Moldova, Republic of</option>
                  <option value="+377">(+377) Monaco</option>
                  <option value="+976">(+976) Mongolia</option>
                  <option value="+382">(+382) Montenegro</option>
                  <option value="+1664">(+1664) Montserrat</option>
                  <option value="+212">(+212) Morocco</option>
                  <option value="+258">(+258) Mozambique</option>
                  <option value="+95">(+95) Myanmar</option>
                  <option value="+264">(+264) Namibia</option>
                  <option value="+674">(+674) Nauru</option>
                  <option value="+977">(+977) Nepal</option>
                  <option value="+31">(+31) Netherlands</option>
                  <option value="+599">(+599) Netherlands Antilles</option>
                  <option value="+687">(+687) New Caledonia</option>
                  <option value="+64">(+64) New Zealand</option>
                  <option value="+505">(+505) Nicaragua</option>
                  <option value="+227">(+227) Niger</option>
                  <option value="+234">(+234) Nigeria</option>
                  <option value="+683">(+683) Niue</option>
                  <option value="+672">(+672) Norfolk Island</option>
                  <option value="+47">(+47) Norway</option>
                  <option value="+968">(+968) Oman</option>
                  <option value="+92">(+92) Pakistan</option>
                  <option value="+680">(+680) Palau</option>
                  <option value="+507">(+507) Panama</option>
                  <option value="+675">(+675) Papua New Guinea</option>
                  <option value="+595">(+595) Paraguay</option>
                  <option value="+51">(+51) Peru</option>
                  <option value="+63">(+63) Philippines</option>
                  <option value="+48">(+48) Poland</option>
                  <option value="+351">(+351) Portugal</option>
                  <option value="+974">(+974) Qatar</option>
                  <option value="+40">(+40) Romania</option>
                  <option value="+7">(+7) Russian Federation</option>
                  <option value="+250">(+250) Rwanda</option>
                  <option value="+1869">(+1869) Saint Kitts and Nevis</option>
                  <option value="+1758">(+1758) Saint Lucia</option>
                  <option value="+1784">(+1784) Saint Vincent and the Grenadines</option>
                  <option value="+684">(+684) Samoa</option>
                  <option value="+378">(+378) San Marino</option>
                  <option value="+239">(+239) Sao Tome and Principe</option>
                  <option value="+221">(+221) Senegal</option>
                  <option value="+381">(+381) Serbia</option>
                  <option value="+248">(+248) Seychelles</option>
                  <option value="+232">(+232) Sierra Leone</option>
                  <option value="+65">(+65) Singapore</option>
                  <option value="+421">(+421) Slovakia</option>
                  <option value="+386">(+386) Slovenia</option>
                  <option value="+677">(+677) Solomon Islands</option>
                  <option value="+252">(+252) Somalia</option>
                  <option value="+27">(+27) South Africa</option>
                  <option value="+34">(+34) Spain</option>
                  <option value="+94">(+94) Sri Lanka</option>
                  <option value="+249">(+249) Sudan</option>
                  <option value="+597">(+597) Suriname</option>
                  <option value="+268">(+268) Swaziland</option>
                  <option value="+46">(+46) Sweden</option>
                  <option value="+41">(+41) Switzerland</option>
                  <option value="+963">(+963) Syrian Arab Republic</option>
                  <option value="+886">(+886) Taiwan, Province of China</option>
                  <option value="+992">(+992) Tajikistan</option>
                  <option value="+255">(+255) Tanzania, United Republic of</option>
                  <option value="+66">(+66) Thailand</option>
                  <option value="+228">(+228) Togo</option>
                  <option value="+690">(+690) Tokelau</option>
                  <option value="+676">(+676) Tonga</option>
                  <option value="+1868">(+1868) Trinidad and Tobago</option>
                  <option value="+216">(+216) Tunisia</option>
                  <option value="+90">(+90) Turkey</option>
                  <option value="+993">(+993) Turkmenistan</option>
                  <option value="+688">(+688) Tuvalu</option>
                  <option value="+256">(+256) Uganda</option>
                  <option value="+380">(+380) Ukraine</option>
                  <option value="+971">(+971) United Arab Emirates</option>
                  <option value="+44">(+44) United Kingdom</option>
                  <option value="+1">(+1) United States</option>
                  <option value="+598">(+598) Uruguay</option>
                  <option value="+998">(+998) Uzbekistan</option>
                  <option value="+678">(+678) Vanuatu</option>
                  <option value="+58">(+58) Venezuela</option>
                  <option value="+84">(+84) Vietnam</option>
                  <option value="+1340">(+1340) Virgin Islands, U.S.</option>
                  <option value="+967">(+967) Yemen</option>
                  <option value="+260">(+260) Zambia</option>
                  <option value="+263">(+263) Zimbabwe</option>
                  <option value="+358">(+358) Åland Islands</option>
                </select>
            <input id='adminPhone2' value={userData.adminPhone2} onChange={(e) => setUserData(prevData => ({...prevData, adminPhone2: e.target.value}))} className="border-b-2 border-gray-400 p-2 w-full mr-8" type="text" placeholder='Mobile Number'/>
            {/* <button className='pl-2 text-black' onClick={RemoveAdmin}><MdOutlineRemoveCircleOutline size={22}/></button> */}
        </div>
        <div className='mt-5 flex'>
            <input id='adminName3' value={userData.adminName3} onChange={(e) => setUserData(prevData => ({...prevData, adminName3: e.target.value}))} className="border-b-2 border-gray-400 p-2 w-full mr-8" type="text" placeholder='Name (Admin 3)'/>
            <input id='adminEmail3' value={userData.adminEmail3} onChange={(e) => setUserData(prevData => ({...prevData, adminEmail3: e.target.value}))} className="border-b-2 border-gray-400 p-2 w-full mr-8" type="email" placeholder='email'/>
            <select name="countryCode" value={userData.admin3countryCode} onChange={(e) => setUserData(prevData => ({...prevData, admin3countryCode: e.target.value}))} className='border-b-2 border-gray-400 p-2 w-1/6 mr-2 cursor-pointer'>
                  <option value="code">Code</option>
                  <option value="+93">(+93) Afghanistan</option>
                  <option value="+355">(+355) Albania</option>
                  <option value="+213">(+213) Algeria</option>
                  <option value="+376">(+376) Andorra</option>
                  <option value="+244">(+244) Angola</option>
                  <option value="+1264">(+1264) Anguilla</option>
                  <option value="+1268">(+1268) Antigua and Barbuda</option>
                  <option value="+54">(+54) Argentina</option>
                  <option value="+374">(+374) Armenia</option>
                  <option value="+297">(+297) Aruba</option>
                  <option value="+61">(+61) Australia</option>
                  <option value="+43">(+43) Austria</option>
                  <option value="+994">(+994) Azerbaijan</option>
                  <option value="+1242">(+1242) Bahamas</option>
                  <option value="+973">(+973) Bahrain</option>
                  <option value="+880">(+880) Bangladesh</option>
                  <option value="+1246">(+1246) Barbados</option>
                  <option value="+375">(+375) Belarus</option>
                  <option value="+32">(+32) Belgium</option>
                  <option value="+501">(+501) Belize</option>
                  <option value="+229">(+229) Benin</option>
                  <option value="+1441">(+1441) Bermuda</option>
                  <option value="+975">(+975) Bhutan</option>
                  <option value="+591">(+591) Bolivia</option>
                  <option value="+387">(+387) Bosnia and Herzegovina</option>
                  <option value="+267">(+267) Botswana</option>
                  <option value="+55">(+55) Brazil</option>
                  <option value="+246">(+246) British Indian Ocean Territory</option>
                  <option value="+673">(+673) Brunei Darussalam</option>
                  <option value="+359">(+359) Bulgaria</option>
                  <option value="+226">(+226) Burkina Faso</option>
                  <option value="+257">(+257) Burundi</option>
                  <option value="+855">(+855) Cambodia</option>
                  <option value="+237">(+237) Cameroon</option>
                  <option value="+1">(+1) Canada</option>
                  <option value="+238">(+238) Cape Verde</option>
                  <option value="+1345">(+1345) Cayman Islands</option>
                  <option value="+236">(+236) Central African Republic</option>
                  <option value="+235">(+235) Chad</option>
                  <option value="+56">(+56) Chile</option>
                  <option value="+86">(+86) China</option>
                  <option value="+61">(+61) Christmas Island</option>
                  <option value="+672">(+672) Cocos (Keeling) Islands</option>
                  <option value="+57">(+57) Colombia</option>
                  <option value="+269">(+269) Comoros</option>
                  <option value="+242">(+242) Congo</option>
                  <option value="+243">(+243) Congo, the Democratic Republic of the</option>
                  <option value="+682">(+682) Cook Islands</option>
                  <option value="+506">(+506) Costa Rica</option>
                  <option value="+225">(+225) Cote D'Ivoire</option>
                  <option value="+385">(+385) Croatia</option>
                  <option value="+53">(+53) Cuba</option>
                  <option value="+357">(+357) Cyprus</option>
                  <option value="+420">(+420) Czech Republic</option>
                  <option value="+45">(+45) Denmark</option>
                  <option value="+253">(+253) Djibouti</option>
                  <option value="+1767">(+1767) Dominica</option>
                  <option value="+1809">(+1809) Dominican Republic</option>
                  <option value="+593">(+593) Ecuador</option>
                  <option value="+20">(+20) Egypt</option>
                  <option value="+503">(+503) El Salvador</option>
                  <option value="+240">(+240) Equatorial Guinea</option>
                  <option value="+291">(+291) Eritrea</option>
                  <option value="+372">(+372) Estonia</option>
                  <option value="+251">(+251) Ethiopia</option>
                  <option value="+500">(+500) Falkland Islands (Malvinas)</option>
                  <option value="+298">(+298) Faroe Islands</option>
                  <option value="+679">(+679) Fiji</option>
                  <option value="+358">(+358) Finland</option>
                  <option value="+33">(+33) France</option>
                  <option value="+594">(+594) French Guiana</option>
                  <option value="+689">(+689) French Polynesia</option>
                  <option value="+241">(+241) Gabon</option>
                  <option value="+220">(+220) Gambia</option>
                  <option value="+995">(+995) Georgia</option>
                  <option value="+49">(+49) Germany</option>
                  <option value="+233">(+233) Ghana</option>
                  <option value="+350">(+350) Gibraltar</option>
                  <option value="+30">(+30) Greece</option>
                  <option value="+299">(+299) Greenland</option>
                  <option value="+1473">(+1473) Grenada</option>
                  <option value="+590">(+590) Guadeloupe</option>
                  <option value="+1671">(+1671) Guam</option>
                  <option value="+502">(+502) Guatemala</option>
                  <option value="+224">(+224) Guinea</option>
                  <option value="+245">(+245) Guinea-Bissau</option>
                  <option value="+592">(+592) Guyana</option>
                  <option value="+509">(+509) Haiti</option>
                  <option value="+504">(+504) Honduras</option>
                  <option value="+852">(+852) Hong Kong</option>
                  <option value="+36">(+36) Hungary</option>
                  <option value="+354">(+354) Iceland</option>
                  <option value="+91">(+91) India</option>
                  <option value="+62">(+62) Indonesia</option>
                  <option value="+98">(+98) Iran, Islamic Republic of</option>
                  <option value="+964">(+964) Iraq</option>
                  <option value="+353">(+353) Ireland</option>
                  <option value="+972">(+972) Israel</option>
                  <option value="+39">(+39) Italy</option>
                  <option value="+1876">(+1876) Jamaica</option>
                  <option value="+81">(+81) Japan</option>
                  <option value="+962">(+962) Jordan</option>
                  <option value="+7">(+7) Kazakhstan</option>
                  <option value="+254">(+254) Kenya</option>
                  <option value="+686">(+686) Kiribati</option>
                  <option value="+850">(+850) Korea, Democratic People's Republic of</option>
                  <option value="+82">(+82) Korea, Republic of</option>
                  <option value="+965">(+965) Kuwait</option>
                  <option value="+996">(+996) Kyrgyzstan</option>
                  <option value="+856">(+856) Lao People's Democratic Republic</option>
                  <option value="+371">(+371) Latvia</option>
                  <option value="+961">(+961) Lebanon</option>
                  <option value="+266">(+266) Lesotho</option>
                  <option value="+231">(+231) Liberia</option>
                  <option value="+218">(+218) Libya</option>
                  <option value="+423">(+423) Liechtenstein</option>
                  <option value="+370">(+370) Lithuania</option>
                  <option value="+352">(+352) Luxembourg</option>
                  <option value="+853">(+853) Macao</option>
                  <option value="+389">(+389) Macedonia, the Former Yugoslav Republic of</option>
                  <option value="+261">(+261) Madagascar</option>
                  <option value="+265">(+265) Malawi</option>
                  <option value="+60">(+60) Malaysia</option>
                  <option value="+960">(+960) Maldives</option>
                  <option value="+223">(+223) Mali</option>
                  <option value="+356">(+356) Malta</option>
                  <option value="+692">(+692) Marshall Islands</option>
                  <option value="+596">(+596) Martinique</option>
                  <option value="+222">(+222) Mauritania</option>
                  <option value="+230">(+230) Mauritius</option>
                  <option value="+52">(+52) Mexico</option>
                  <option value="+691">(+691) Micronesia, Federated States of</option>
                  <option value="+373">(+373) Moldova, Republic of</option>
                  <option value="+377">(+377) Monaco</option>
                  <option value="+976">(+976) Mongolia</option>
                  <option value="+382">(+382) Montenegro</option>
                  <option value="+1664">(+1664) Montserrat</option>
                  <option value="+212">(+212) Morocco</option>
                  <option value="+258">(+258) Mozambique</option>
                  <option value="+95">(+95) Myanmar</option>
                  <option value="+264">(+264) Namibia</option>
                  <option value="+674">(+674) Nauru</option>
                  <option value="+977">(+977) Nepal</option>
                  <option value="+31">(+31) Netherlands</option>
                  <option value="+599">(+599) Netherlands Antilles</option>
                  <option value="+687">(+687) New Caledonia</option>
                  <option value="+64">(+64) New Zealand</option>
                  <option value="+505">(+505) Nicaragua</option>
                  <option value="+227">(+227) Niger</option>
                  <option value="+234">(+234) Nigeria</option>
                  <option value="+683">(+683) Niue</option>
                  <option value="+672">(+672) Norfolk Island</option>
                  <option value="+47">(+47) Norway</option>
                  <option value="+968">(+968) Oman</option>
                  <option value="+92">(+92) Pakistan</option>
                  <option value="+680">(+680) Palau</option>
                  <option value="+507">(+507) Panama</option>
                  <option value="+675">(+675) Papua New Guinea</option>
                  <option value="+595">(+595) Paraguay</option>
                  <option value="+51">(+51) Peru</option>
                  <option value="+63">(+63) Philippines</option>
                  <option value="+48">(+48) Poland</option>
                  <option value="+351">(+351) Portugal</option>
                  <option value="+974">(+974) Qatar</option>
                  <option value="+40">(+40) Romania</option>
                  <option value="+7">(+7) Russian Federation</option>
                  <option value="+250">(+250) Rwanda</option>
                  <option value="+1869">(+1869) Saint Kitts and Nevis</option>
                  <option value="+1758">(+1758) Saint Lucia</option>
                  <option value="+1784">(+1784) Saint Vincent and the Grenadines</option>
                  <option value="+684">(+684) Samoa</option>
                  <option value="+378">(+378) San Marino</option>
                  <option value="+239">(+239) Sao Tome and Principe</option>
                  <option value="+221">(+221) Senegal</option>
                  <option value="+381">(+381) Serbia</option>
                  <option value="+248">(+248) Seychelles</option>
                  <option value="+232">(+232) Sierra Leone</option>
                  <option value="+65">(+65) Singapore</option>
                  <option value="+421">(+421) Slovakia</option>
                  <option value="+386">(+386) Slovenia</option>
                  <option value="+677">(+677) Solomon Islands</option>
                  <option value="+252">(+252) Somalia</option>
                  <option value="+27">(+27) South Africa</option>
                  <option value="+34">(+34) Spain</option>
                  <option value="+94">(+94) Sri Lanka</option>
                  <option value="+249">(+249) Sudan</option>
                  <option value="+597">(+597) Suriname</option>
                  <option value="+268">(+268) Swaziland</option>
                  <option value="+46">(+46) Sweden</option>
                  <option value="+41">(+41) Switzerland</option>
                  <option value="+963">(+963) Syrian Arab Republic</option>
                  <option value="+886">(+886) Taiwan, Province of China</option>
                  <option value="+992">(+992) Tajikistan</option>
                  <option value="+255">(+255) Tanzania, United Republic of</option>
                  <option value="+66">(+66) Thailand</option>
                  <option value="+228">(+228) Togo</option>
                  <option value="+690">(+690) Tokelau</option>
                  <option value="+676">(+676) Tonga</option>
                  <option value="+1868">(+1868) Trinidad and Tobago</option>
                  <option value="+216">(+216) Tunisia</option>
                  <option value="+90">(+90) Turkey</option>
                  <option value="+993">(+993) Turkmenistan</option>
                  <option value="+688">(+688) Tuvalu</option>
                  <option value="+256">(+256) Uganda</option>
                  <option value="+380">(+380) Ukraine</option>
                  <option value="+971">(+971) United Arab Emirates</option>
                  <option value="+44">(+44) United Kingdom</option>
                  <option value="+1">(+1) United States</option>
                  <option value="+598">(+598) Uruguay</option>
                  <option value="+998">(+998) Uzbekistan</option>
                  <option value="+678">(+678) Vanuatu</option>
                  <option value="+58">(+58) Venezuela</option>
                  <option value="+84">(+84) Vietnam</option>
                  <option value="+1340">(+1340) Virgin Islands, U.S.</option>
                  <option value="+967">(+967) Yemen</option>
                  <option value="+260">(+260) Zambia</option>
                  <option value="+263">(+263) Zimbabwe</option>
                  <option value="+358">(+358) Åland Islands</option>
                </select>
            <input id='adminPhone3' value={userData.adminPhone3} onChange={(e) => setUserData(prevData => ({...prevData, adminPhone3: e.target.value}))} className="border-b-2 border-gray-400 p-2 w-full mr-8" type="text" placeholder='Mobile Number'/>
            {/* <button className='pl-2 text-black' onClick={RemoveAdmin2}><MdOutlineRemoveCircleOutline size={22}/></button> */}
        </div>
        </form>

        <br /><br /><br />
        <h3 className='font-semibold pb-6'>Added Manager(s):</h3>
        <div className='flex'>
            <input id='managerName' value={userData.managerName} onChange={(e) => setUserData(prevData => ({...prevData, managerName: e.target.value}))} className="border-b-2 border-gray-400 p-2 w-full mr-8" type="text" placeholder='Name (Manager 1)'/>
            <input id='managerEmail' value={userData.managerEmail} onChange={(e) => setUserData(prevData => ({...prevData, managerEmail: e.target.value}))} className="border-b-2 border-gray-400 p-2 w-full mr-8" type="email" placeholder='email'/>
            <select name="countryCode" value={userData.manager1countryCode} onChange={(e) => setUserData(prevData => ({...prevData, manager1countryCode: e.target.value}))} className='border-b-2 border-gray-400 p-2 w-1/6 mr-2 cursor-pointer'>
                  <option value="code">Code</option>
                  <option value="+355">(+355) Albania</option>
                  <option value="+213">(+213) Algeria</option>
                  <option value="+376">(+376) Andorra</option>
                  <option value="+244">(+244) Angola</option>
                  <option value="+1264">(+1264) Anguilla</option>
                  <option value="+1268">(+1268) Antigua and Barbuda</option>
                  <option value="+54">(+54) Argentina</option>
                  <option value="+374">(+374) Armenia</option>
                  <option value="+297">(+297) Aruba</option>
                  <option value="+61">(+61) Australia</option>
                  <option value="+43">(+43) Austria</option>
                  <option value="+994">(+994) Azerbaijan</option>
                  <option value="+1242">(+1242) Bahamas</option>
                  <option value="+973">(+973) Bahrain</option>
                  <option value="+880">(+880) Bangladesh</option>
                  <option value="+1246">(+1246) Barbados</option>
                  <option value="+375">(+375) Belarus</option>
                  <option value="+32">(+32) Belgium</option>
                  <option value="+501">(+501) Belize</option>
                  <option value="+229">(+229) Benin</option>
                  <option value="+1441">(+1441) Bermuda</option>
                  <option value="+975">(+975) Bhutan</option>
                  <option value="+591">(+591) Bolivia</option>
                  <option value="+387">(+387) Bosnia and Herzegovina</option>
                  <option value="+267">(+267) Botswana</option>
                  <option value="+55">(+55) Brazil</option>
                  <option value="+246">(+246) British Indian Ocean Territory</option>
                  <option value="+673">(+673) Brunei Darussalam</option>
                  <option value="+359">(+359) Bulgaria</option>
                  <option value="+226">(+226) Burkina Faso</option>
                  <option value="+257">(+257) Burundi</option>
                  <option value="+855">(+855) Cambodia</option>
                  <option value="+237">(+237) Cameroon</option>
                  <option value="+1">(+1) Canada</option>
                  <option value="+238">(+238) Cape Verde</option>
                  <option value="+1345">(+1345) Cayman Islands</option>
                  <option value="+236">(+236) Central African Republic</option>
                  <option value="+235">(+235) Chad</option>
                  <option value="+56">(+56) Chile</option>
                  <option value="+86">(+86) China</option>
                  <option value="+61">(+61) Christmas Island</option>
                  <option value="+672">(+672) Cocos (Keeling) Islands</option>
                  <option value="+57">(+57) Colombia</option>
                  <option value="+269">(+269) Comoros</option>
                  <option value="+242">(+242) Congo</option>
                  <option value="+243">(+243) Congo, the Democratic Republic of the</option>
                  <option value="+682">(+682) Cook Islands</option>
                  <option value="+506">(+506) Costa Rica</option>
                  <option value="+225">(+225) Cote D'Ivoire</option>
                  <option value="+385">(+385) Croatia</option>
                  <option value="+53">(+53) Cuba</option>
                  <option value="+357">(+357) Cyprus</option>
                  <option value="+420">(+420) Czech Republic</option>
                  <option value="+45">(+45) Denmark</option>
                  <option value="+253">(+253) Djibouti</option>
                  <option value="+1767">(+1767) Dominica</option>
                  <option value="+1809">(+1809) Dominican Republic</option>
                  <option value="+593">(+593) Ecuador</option>
                  <option value="+20">(+20) Egypt</option>
                  <option value="+503">(+503) El Salvador</option>
                  <option value="+240">(+240) Equatorial Guinea</option>
                  <option value="+291">(+291) Eritrea</option>
                  <option value="+372">(+372) Estonia</option>
                  <option value="+251">(+251) Ethiopia</option>
                  <option value="+500">(+500) Falkland Islands (Malvinas)</option>
                  <option value="+298">(+298) Faroe Islands</option>
                  <option value="+679">(+679) Fiji</option>
                  <option value="+358">(+358) Finland</option>
                  <option value="+33">(+33) France</option>
                  <option value="+594">(+594) French Guiana</option>
                  <option value="+689">(+689) French Polynesia</option>
                  <option value="+241">(+241) Gabon</option>
                  <option value="+220">(+220) Gambia</option>
                  <option value="+995">(+995) Georgia</option>
                  <option value="+49">(+49) Germany</option>
                  <option value="+233">(+233) Ghana</option>
                  <option value="+350">(+350) Gibraltar</option>
                  <option value="+30">(+30) Greece</option>
                  <option value="+299">(+299) Greenland</option>
                  <option value="+1473">(+1473) Grenada</option>
                  <option value="+590">(+590) Guadeloupe</option>
                  <option value="+1671">(+1671) Guam</option>
                  <option value="+502">(+502) Guatemala</option>
                  <option value="+224">(+224) Guinea</option>
                  <option value="+245">(+245) Guinea-Bissau</option>
                  <option value="+592">(+592) Guyana</option>
                  <option value="+509">(+509) Haiti</option>
                  <option value="+504">(+504) Honduras</option>
                  <option value="+852">(+852) Hong Kong</option>
                  <option value="+36">(+36) Hungary</option>
                  <option value="+354">(+354) Iceland</option>
                  <option value="+91">(+91) India</option>
                  <option value="+62">(+62) Indonesia</option>
                  <option value="+98">(+98) Iran, Islamic Republic of</option>
                  <option value="+964">(+964) Iraq</option>
                  <option value="+353">(+353) Ireland</option>
                  <option value="+972">(+972) Israel</option>
                  <option value="+39">(+39) Italy</option>
                  <option value="+1876">(+1876) Jamaica</option>
                  <option value="+81">(+81) Japan</option>
                  <option value="+962">(+962) Jordan</option>
                  <option value="+7">(+7) Kazakhstan</option>
                  <option value="+254">(+254) Kenya</option>
                  <option value="+686">(+686) Kiribati</option>
                  <option value="+850">(+850) Korea, Democratic People's Republic of</option>
                  <option value="+82">(+82) Korea, Republic of</option>
                  <option value="+965">(+965) Kuwait</option>
                  <option value="+996">(+996) Kyrgyzstan</option>
                  <option value="+856">(+856) Lao People's Democratic Republic</option>
                  <option value="+371">(+371) Latvia</option>
                  <option value="+961">(+961) Lebanon</option>
                  <option value="+266">(+266) Lesotho</option>
                  <option value="+231">(+231) Liberia</option>
                  <option value="+218">(+218) Libya</option>
                  <option value="+423">(+423) Liechtenstein</option>
                  <option value="+370">(+370) Lithuania</option>
                  <option value="+352">(+352) Luxembourg</option>
                  <option value="+853">(+853) Macao</option>
                  <option value="+389">(+389) Macedonia, the Former Yugoslav Republic of</option>
                  <option value="+261">(+261) Madagascar</option>
                  <option value="+265">(+265) Malawi</option>
                  <option value="+60">(+60) Malaysia</option>
                  <option value="+960">(+960) Maldives</option>
                  <option value="+223">(+223) Mali</option>
                  <option value="+356">(+356) Malta</option>
                  <option value="+692">(+692) Marshall Islands</option>
                  <option value="+596">(+596) Martinique</option>
                  <option value="+222">(+222) Mauritania</option>
                  <option value="+230">(+230) Mauritius</option>
                  <option value="+52">(+52) Mexico</option>
                  <option value="+691">(+691) Micronesia, Federated States of</option>
                  <option value="+373">(+373) Moldova, Republic of</option>
                  <option value="+377">(+377) Monaco</option>
                  <option value="+976">(+976) Mongolia</option>
                  <option value="+382">(+382) Montenegro</option>
                  <option value="+1664">(+1664) Montserrat</option>
                  <option value="+212">(+212) Morocco</option>
                  <option value="+258">(+258) Mozambique</option>
                  <option value="+95">(+95) Myanmar</option>
                  <option value="+264">(+264) Namibia</option>
                  <option value="+674">(+674) Nauru</option>
                  <option value="+977">(+977) Nepal</option>
                  <option value="+31">(+31) Netherlands</option>
                  <option value="+599">(+599) Netherlands Antilles</option>
                  <option value="+687">(+687) New Caledonia</option>
                  <option value="+64">(+64) New Zealand</option>
                  <option value="+505">(+505) Nicaragua</option>
                  <option value="+227">(+227) Niger</option>
                  <option value="+234">(+234) Nigeria</option>
                  <option value="+683">(+683) Niue</option>
                  <option value="+672">(+672) Norfolk Island</option>
                  <option value="+47">(+47) Norway</option>
                  <option value="+968">(+968) Oman</option>
                  <option value="+92">(+92) Pakistan</option>
                  <option value="+680">(+680) Palau</option>
                  <option value="+507">(+507) Panama</option>
                  <option value="+675">(+675) Papua New Guinea</option>
                  <option value="+595">(+595) Paraguay</option>
                  <option value="+51">(+51) Peru</option>
                  <option value="+63">(+63) Philippines</option>
                  <option value="+48">(+48) Poland</option>
                  <option value="+351">(+351) Portugal</option>
                  <option value="+974">(+974) Qatar</option>
                  <option value="+40">(+40) Romania</option>
                  <option value="+7">(+7) Russian Federation</option>
                  <option value="+250">(+250) Rwanda</option>
                  <option value="+1869">(+1869) Saint Kitts and Nevis</option>
                  <option value="+1758">(+1758) Saint Lucia</option>
                  <option value="+1784">(+1784) Saint Vincent and the Grenadines</option>
                  <option value="+684">(+684) Samoa</option>
                  <option value="+378">(+378) San Marino</option>
                  <option value="+239">(+239) Sao Tome and Principe</option>
                  <option value="+221">(+221) Senegal</option>
                  <option value="+381">(+381) Serbia</option>
                  <option value="+248">(+248) Seychelles</option>
                  <option value="+232">(+232) Sierra Leone</option>
                  <option value="+65">(+65) Singapore</option>
                  <option value="+421">(+421) Slovakia</option>
                  <option value="+386">(+386) Slovenia</option>
                  <option value="+677">(+677) Solomon Islands</option>
                  <option value="+252">(+252) Somalia</option>
                  <option value="+27">(+27) South Africa</option>
                  <option value="+34">(+34) Spain</option>
                  <option value="+94">(+94) Sri Lanka</option>
                  <option value="+249">(+249) Sudan</option>
                  <option value="+597">(+597) Suriname</option>
                  <option value="+268">(+268) Swaziland</option>
                  <option value="+46">(+46) Sweden</option>
                  <option value="+41">(+41) Switzerland</option>
                  <option value="+963">(+963) Syrian Arab Republic</option>
                  <option value="+886">(+886) Taiwan, Province of China</option>
                  <option value="+992">(+992) Tajikistan</option>
                  <option value="+255">(+255) Tanzania, United Republic of</option>
                  <option value="+66">(+66) Thailand</option>
                  <option value="+228">(+228) Togo</option>
                  <option value="+690">(+690) Tokelau</option>
                  <option value="+676">(+676) Tonga</option>
                  <option value="+1868">(+1868) Trinidad and Tobago</option>
                  <option value="+216">(+216) Tunisia</option>
                  <option value="+90">(+90) Turkey</option>
                  <option value="+993">(+993) Turkmenistan</option>
                  <option value="+688">(+688) Tuvalu</option>
                  <option value="+256">(+256) Uganda</option>
                  <option value="+380">(+380) Ukraine</option>
                  <option value="+971">(+971) United Arab Emirates</option>
                  <option value="+44">(+44) United Kingdom</option>
                  <option value="+1">(+1) United States</option>
                  <option value="+598">(+598) Uruguay</option>
                  <option value="+998">(+998) Uzbekistan</option>
                  <option value="+678">(+678) Vanuatu</option>
                  <option value="+58">(+58) Venezuela</option>
                  <option value="+84">(+84) Vietnam</option>
                  <option value="+1340">(+1340) Virgin Islands, U.S.</option>
                  <option value="+967">(+967) Yemen</option>
                  <option value="+260">(+260) Zambia</option>
                  <option value="+263">(+263) Zimbabwe</option>
                  <option value="+358">(+358) Åland Islands</option>
                </select>
            <input id='managerPhone' value={userData.managerPhone} onChange={(e) => setUserData(prevData => ({...prevData, managerPhone: e.target.value}))} className="border-b-2 border-gray-400 p-2 w-full mr-8" type="text" placeholder='Mobile Number'/>
        </div>

        <form action="submit">
        <div className='mt-5 flex'>
            <input id='managerName2' value={userData.managerName2} onChange={(e) => setUserData(prevData => ({...prevData, managerName2: e.target.value}))} className="border-b-2 border-gray-400 p-2 w-full mr-8" type="text" placeholder='Name (Manager 2)'/>
            <input id='managerEmail2' value={userData.managerEmail2} onChange={(e) => setUserData(prevData => ({...prevData, managerEmail2: e.target.value}))} className="border-b-2 border-gray-400 p-2 w-full mr-8" type="email" placeholder='email'/>
            <select name="countryCode" value={userData.manager2countryCode} onChange={(e) => setUserData(prevData => ({...prevData, manager2countryCode: e.target.value}))} className='border-b-2 border-gray-400 p-2 w-1/6 mr-2 cursor-pointer'>
                  <option value="code">Code</option>
                  <option value="+93">(+93) Afghanistan</option>
                  <option value="+355">(+355) Albania</option>
                  <option value="+213">(+213) Algeria</option>
                  <option value="+376">(+376) Andorra</option>
                  <option value="+244">(+244) Angola</option>
                  <option value="+1264">(+1264) Anguilla</option>
                  <option value="+1268">(+1268) Antigua and Barbuda</option>
                  <option value="+54">(+54) Argentina</option>
                  <option value="+374">(+374) Armenia</option>
                  <option value="+297">(+297) Aruba</option>
                  <option value="+61">(+61) Australia</option>
                  <option value="+43">(+43) Austria</option>
                  <option value="+994">(+994) Azerbaijan</option>
                  <option value="+1242">(+1242) Bahamas</option>
                  <option value="+973">(+973) Bahrain</option>
                  <option value="+880">(+880) Bangladesh</option>
                  <option value="+1246">(+1246) Barbados</option>
                  <option value="+375">(+375) Belarus</option>
                  <option value="+32">(+32) Belgium</option>
                  <option value="+501">(+501) Belize</option>
                  <option value="+229">(+229) Benin</option>
                  <option value="+1441">(+1441) Bermuda</option>
                  <option value="+975">(+975) Bhutan</option>
                  <option value="+591">(+591) Bolivia</option>
                  <option value="+387">(+387) Bosnia and Herzegovina</option>
                  <option value="+267">(+267) Botswana</option>
                  <option value="+55">(+55) Brazil</option>
                  <option value="+246">(+246) British Indian Ocean Territory</option>
                  <option value="+673">(+673) Brunei Darussalam</option>
                  <option value="+359">(+359) Bulgaria</option>
                  <option value="+226">(+226) Burkina Faso</option>
                  <option value="+257">(+257) Burundi</option>
                  <option value="+855">(+855) Cambodia</option>
                  <option value="+237">(+237) Cameroon</option>
                  <option value="+1">(+1) Canada</option>
                  <option value="+238">(+238) Cape Verde</option>
                  <option value="+1345">(+1345) Cayman Islands</option>
                  <option value="+236">(+236) Central African Republic</option>
                  <option value="+235">(+235) Chad</option>
                  <option value="+56">(+56) Chile</option>
                  <option value="+86">(+86) China</option>
                  <option value="+61">(+61) Christmas Island</option>
                  <option value="+672">(+672) Cocos (Keeling) Islands</option>
                  <option value="+57">(+57) Colombia</option>
                  <option value="+269">(+269) Comoros</option>
                  <option value="+242">(+242) Congo</option>
                  <option value="+243">(+243) Congo, the Democratic Republic of the</option>
                  <option value="+682">(+682) Cook Islands</option>
                  <option value="+506">(+506) Costa Rica</option>
                  <option value="+225">(+225) Cote D'Ivoire</option>
                  <option value="+385">(+385) Croatia</option>
                  <option value="+53">(+53) Cuba</option>
                  <option value="+357">(+357) Cyprus</option>
                  <option value="+420">(+420) Czech Republic</option>
                  <option value="+45">(+45) Denmark</option>
                  <option value="+253">(+253) Djibouti</option>
                  <option value="+1767">(+1767) Dominica</option>
                  <option value="+1809">(+1809) Dominican Republic</option>
                  <option value="+593">(+593) Ecuador</option>
                  <option value="+20">(+20) Egypt</option>
                  <option value="+503">(+503) El Salvador</option>
                  <option value="+240">(+240) Equatorial Guinea</option>
                  <option value="+291">(+291) Eritrea</option>
                  <option value="+372">(+372) Estonia</option>
                  <option value="+251">(+251) Ethiopia</option>
                  <option value="+500">(+500) Falkland Islands (Malvinas)</option>
                  <option value="+298">(+298) Faroe Islands</option>
                  <option value="+679">(+679) Fiji</option>
                  <option value="+358">(+358) Finland</option>
                  <option value="+33">(+33) France</option>
                  <option value="+594">(+594) French Guiana</option>
                  <option value="+689">(+689) French Polynesia</option>
                  <option value="+241">(+241) Gabon</option>
                  <option value="+220">(+220) Gambia</option>
                  <option value="+995">(+995) Georgia</option>
                  <option value="+49">(+49) Germany</option>
                  <option value="+233">(+233) Ghana</option>
                  <option value="+350">(+350) Gibraltar</option>
                  <option value="+30">(+30) Greece</option>
                  <option value="+299">(+299) Greenland</option>
                  <option value="+1473">(+1473) Grenada</option>
                  <option value="+590">(+590) Guadeloupe</option>
                  <option value="+1671">(+1671) Guam</option>
                  <option value="+502">(+502) Guatemala</option>
                  <option value="+224">(+224) Guinea</option>
                  <option value="+245">(+245) Guinea-Bissau</option>
                  <option value="+592">(+592) Guyana</option>
                  <option value="+509">(+509) Haiti</option>
                  <option value="+504">(+504) Honduras</option>
                  <option value="+852">(+852) Hong Kong</option>
                  <option value="+36">(+36) Hungary</option>
                  <option value="+354">(+354) Iceland</option>
                  <option value="+91">(+91) India</option>
                  <option value="+62">(+62) Indonesia</option>
                  <option value="+98">(+98) Iran, Islamic Republic of</option>
                  <option value="+964">(+964) Iraq</option>
                  <option value="+353">(+353) Ireland</option>
                  <option value="+972">(+972) Israel</option>
                  <option value="+39">(+39) Italy</option>
                  <option value="+1876">(+1876) Jamaica</option>
                  <option value="+81">(+81) Japan</option>
                  <option value="+962">(+962) Jordan</option>
                  <option value="+7">(+7) Kazakhstan</option>
                  <option value="+254">(+254) Kenya</option>
                  <option value="+686">(+686) Kiribati</option>
                  <option value="+850">(+850) Korea, Democratic People's Republic of</option>
                  <option value="+82">(+82) Korea, Republic of</option>
                  <option value="+965">(+965) Kuwait</option>
                  <option value="+996">(+996) Kyrgyzstan</option>
                  <option value="+856">(+856) Lao People's Democratic Republic</option>
                  <option value="+371">(+371) Latvia</option>
                  <option value="+961">(+961) Lebanon</option>
                  <option value="+266">(+266) Lesotho</option>
                  <option value="+231">(+231) Liberia</option>
                  <option value="+218">(+218) Libya</option>
                  <option value="+423">(+423) Liechtenstein</option>
                  <option value="+370">(+370) Lithuania</option>
                  <option value="+352">(+352) Luxembourg</option>
                  <option value="+853">(+853) Macao</option>
                  <option value="+389">(+389) Macedonia, the Former Yugoslav Republic of</option>
                  <option value="+261">(+261) Madagascar</option>
                  <option value="+265">(+265) Malawi</option>
                  <option value="+60">(+60) Malaysia</option>
                  <option value="+960">(+960) Maldives</option>
                  <option value="+223">(+223) Mali</option>
                  <option value="+356">(+356) Malta</option>
                  <option value="+692">(+692) Marshall Islands</option>
                  <option value="+596">(+596) Martinique</option>
                  <option value="+222">(+222) Mauritania</option>
                  <option value="+230">(+230) Mauritius</option>
                  <option value="+52">(+52) Mexico</option>
                  <option value="+691">(+691) Micronesia, Federated States of</option>
                  <option value="+373">(+373) Moldova, Republic of</option>
                  <option value="+377">(+377) Monaco</option>
                  <option value="+976">(+976) Mongolia</option>
                  <option value="+382">(+382) Montenegro</option>
                  <option value="+1664">(+1664) Montserrat</option>
                  <option value="+212">(+212) Morocco</option>
                  <option value="+258">(+258) Mozambique</option>
                  <option value="+95">(+95) Myanmar</option>
                  <option value="+264">(+264) Namibia</option>
                  <option value="+674">(+674) Nauru</option>
                  <option value="+977">(+977) Nepal</option>
                  <option value="+31">(+31) Netherlands</option>
                  <option value="+599">(+599) Netherlands Antilles</option>
                  <option value="+687">(+687) New Caledonia</option>
                  <option value="+64">(+64) New Zealand</option>
                  <option value="+505">(+505) Nicaragua</option>
                  <option value="+227">(+227) Niger</option>
                  <option value="+234">(+234) Nigeria</option>
                  <option value="+683">(+683) Niue</option>
                  <option value="+672">(+672) Norfolk Island</option>
                  <option value="+47">(+47) Norway</option>
                  <option value="+968">(+968) Oman</option>
                  <option value="+92">(+92) Pakistan</option>
                  <option value="+680">(+680) Palau</option>
                  <option value="+507">(+507) Panama</option>
                  <option value="+675">(+675) Papua New Guinea</option>
                  <option value="+595">(+595) Paraguay</option>
                  <option value="+51">(+51) Peru</option>
                  <option value="+63">(+63) Philippines</option>
                  <option value="+48">(+48) Poland</option>
                  <option value="+351">(+351) Portugal</option>
                  <option value="+974">(+974) Qatar</option>
                  <option value="+40">(+40) Romania</option>
                  <option value="+7">(+7) Russian Federation</option>
                  <option value="+250">(+250) Rwanda</option>
                  <option value="+1869">(+1869) Saint Kitts and Nevis</option>
                  <option value="+1758">(+1758) Saint Lucia</option>
                  <option value="+1784">(+1784) Saint Vincent and the Grenadines</option>
                  <option value="+684">(+684) Samoa</option>
                  <option value="+378">(+378) San Marino</option>
                  <option value="+239">(+239) Sao Tome and Principe</option>
                  <option value="+221">(+221) Senegal</option>
                  <option value="+381">(+381) Serbia</option>
                  <option value="+248">(+248) Seychelles</option>
                  <option value="+232">(+232) Sierra Leone</option>
                  <option value="+65">(+65) Singapore</option>
                  <option value="+421">(+421) Slovakia</option>
                  <option value="+386">(+386) Slovenia</option>
                  <option value="+677">(+677) Solomon Islands</option>
                  <option value="+252">(+252) Somalia</option>
                  <option value="+27">(+27) South Africa</option>
                  <option value="+34">(+34) Spain</option>
                  <option value="+94">(+94) Sri Lanka</option>
                  <option value="+249">(+249) Sudan</option>
                  <option value="+597">(+597) Suriname</option>
                  <option value="+268">(+268) Swaziland</option>
                  <option value="+46">(+46) Sweden</option>
                  <option value="+41">(+41) Switzerland</option>
                  <option value="+963">(+963) Syrian Arab Republic</option>
                  <option value="+886">(+886) Taiwan, Province of China</option>
                  <option value="+992">(+992) Tajikistan</option>
                  <option value="+255">(+255) Tanzania, United Republic of</option>
                  <option value="+66">(+66) Thailand</option>
                  <option value="+228">(+228) Togo</option>
                  <option value="+690">(+690) Tokelau</option>
                  <option value="+676">(+676) Tonga</option>
                  <option value="+1868">(+1868) Trinidad and Tobago</option>
                  <option value="+216">(+216) Tunisia</option>
                  <option value="+90">(+90) Turkey</option>
                  <option value="+993">(+993) Turkmenistan</option>
                  <option value="+688">(+688) Tuvalu</option>
                  <option value="+256">(+256) Uganda</option>
                  <option value="+380">(+380) Ukraine</option>
                  <option value="+971">(+971) United Arab Emirates</option>
                  <option value="+44">(+44) United Kingdom</option>
                  <option value="+1">(+1) United States</option>
                  <option value="+598">(+598) Uruguay</option>
                  <option value="+998">(+998) Uzbekistan</option>
                  <option value="+678">(+678) Vanuatu</option>
                  <option value="+58">(+58) Venezuela</option>
                  <option value="+84">(+84) Vietnam</option>
                  <option value="+1340">(+1340) Virgin Islands, U.S.</option>
                  <option value="+967">(+967) Yemen</option>
                  <option value="+260">(+260) Zambia</option>
                  <option value="+263">(+263) Zimbabwe</option>
                  <option value="+358">(+358) Åland Islands</option>
                </select>
            <input id='managerPhone2' value={userData.managerPhone2} onChange={(e) => setUserData(prevData => ({...prevData, managerPhone2: e.target.value}))} className="border-b-2 border-gray-400 p-2 w-full mr-8" type="text" placeholder='Mobile Number'/>
        </div>


        <div className='mt-5 flex'>
            <input id='managerName3' value={userData.managerName3} onChange={(e) => setUserData(prevData => ({...prevData, managerName3: e.target.value}))} className="border-b-2 border-gray-400 p-2 w-full mr-8" type="text" placeholder='Name (Manager 3)'/>
            <input id='managerEmail3' value={userData.managerEmail3} onChange={(e) => setUserData(prevData => ({...prevData, managerEmail3: e.target.value}))} className="border-b-2 border-gray-400 p-2 w-full mr-8" type="email" placeholder='email'/>
            <select name="countryCode" value={userData.manager3countryCode} onChange={(e) => setUserData(prevData => ({...prevData, manager3countryCode: e.target.value}))} className='border-b-2 border-gray-400 p-2 w-1/6 mr-2 cursor-pointer'>
                  <option value="code">Code</option>
                  <option value="+93">(+93) Afghanistan</option>
                  <option value="+355">(+355) Albania</option>
                  <option value="+213">(+213) Algeria</option>
                  <option value="+376">(+376) Andorra</option>
                  <option value="+244">(+244) Angola</option>
                  <option value="+1264">(+1264) Anguilla</option>
                  <option value="+1268">(+1268) Antigua and Barbuda</option>
                  <option value="+54">(+54) Argentina</option>
                  <option value="+374">(+374) Armenia</option>
                  <option value="+297">(+297) Aruba</option>
                  <option value="+61">(+61) Australia</option>
                  <option value="+43">(+43) Austria</option>
                  <option value="+994">(+994) Azerbaijan</option>
                  <option value="+1242">(+1242) Bahamas</option>
                  <option value="+973">(+973) Bahrain</option>
                  <option value="+880">(+880) Bangladesh</option>
                  <option value="+1246">(+1246) Barbados</option>
                  <option value="+375">(+375) Belarus</option>
                  <option value="+32">(+32) Belgium</option>
                  <option value="+501">(+501) Belize</option>
                  <option value="+229">(+229) Benin</option>
                  <option value="+1441">(+1441) Bermuda</option>
                  <option value="+975">(+975) Bhutan</option>
                  <option value="+591">(+591) Bolivia</option>
                  <option value="+387">(+387) Bosnia and Herzegovina</option>
                  <option value="+267">(+267) Botswana</option>
                  <option value="+55">(+55) Brazil</option>
                  <option value="+246">(+246) British Indian Ocean Territory</option>
                  <option value="+673">(+673) Brunei Darussalam</option>
                  <option value="+359">(+359) Bulgaria</option>
                  <option value="+226">(+226) Burkina Faso</option>
                  <option value="+257">(+257) Burundi</option>
                  <option value="+855">(+855) Cambodia</option>
                  <option value="+237">(+237) Cameroon</option>
                  <option value="+1">(+1) Canada</option>
                  <option value="+238">(+238) Cape Verde</option>
                  <option value="+1345">(+1345) Cayman Islands</option>
                  <option value="+236">(+236) Central African Republic</option>
                  <option value="+235">(+235) Chad</option>
                  <option value="+56">(+56) Chile</option>
                  <option value="+86">(+86) China</option>
                  <option value="+61">(+61) Christmas Island</option>
                  <option value="+672">(+672) Cocos (Keeling) Islands</option>
                  <option value="+57">(+57) Colombia</option>
                  <option value="+269">(+269) Comoros</option>
                  <option value="+242">(+242) Congo</option>
                  <option value="+243">(+243) Congo, the Democratic Republic of the</option>
                  <option value="+682">(+682) Cook Islands</option>
                  <option value="+506">(+506) Costa Rica</option>
                  <option value="+225">(+225) Cote D'Ivoire</option>
                  <option value="+385">(+385) Croatia</option>
                  <option value="+53">(+53) Cuba</option>
                  <option value="+357">(+357) Cyprus</option>
                  <option value="+420">(+420) Czech Republic</option>
                  <option value="+45">(+45) Denmark</option>
                  <option value="+253">(+253) Djibouti</option>
                  <option value="+1767">(+1767) Dominica</option>
                  <option value="+1809">(+1809) Dominican Republic</option>
                  <option value="+593">(+593) Ecuador</option>
                  <option value="+20">(+20) Egypt</option>
                  <option value="+503">(+503) El Salvador</option>
                  <option value="+240">(+240) Equatorial Guinea</option>
                  <option value="+291">(+291) Eritrea</option>
                  <option value="+372">(+372) Estonia</option>
                  <option value="+251">(+251) Ethiopia</option>
                  <option value="+500">(+500) Falkland Islands (Malvinas)</option>
                  <option value="+298">(+298) Faroe Islands</option>
                  <option value="+679">(+679) Fiji</option>
                  <option value="+358">(+358) Finland</option>
                  <option value="+33">(+33) France</option>
                  <option value="+594">(+594) French Guiana</option>
                  <option value="+689">(+689) French Polynesia</option>
                  <option value="+241">(+241) Gabon</option>
                  <option value="+220">(+220) Gambia</option>
                  <option value="+995">(+995) Georgia</option>
                  <option value="+49">(+49) Germany</option>
                  <option value="+233">(+233) Ghana</option>
                  <option value="+350">(+350) Gibraltar</option>
                  <option value="+30">(+30) Greece</option>
                  <option value="+299">(+299) Greenland</option>
                  <option value="+1473">(+1473) Grenada</option>
                  <option value="+590">(+590) Guadeloupe</option>
                  <option value="+1671">(+1671) Guam</option>
                  <option value="+502">(+502) Guatemala</option>
                  <option value="+224">(+224) Guinea</option>
                  <option value="+245">(+245) Guinea-Bissau</option>
                  <option value="+592">(+592) Guyana</option>
                  <option value="+509">(+509) Haiti</option>
                  <option value="+504">(+504) Honduras</option>
                  <option value="+852">(+852) Hong Kong</option>
                  <option value="+36">(+36) Hungary</option>
                  <option value="+354">(+354) Iceland</option>
                  <option value="+91">(+91) India</option>
                  <option value="+62">(+62) Indonesia</option>
                  <option value="+98">(+98) Iran, Islamic Republic of</option>
                  <option value="+964">(+964) Iraq</option>
                  <option value="+353">(+353) Ireland</option>
                  <option value="+972">(+972) Israel</option>
                  <option value="+39">(+39) Italy</option>
                  <option value="+1876">(+1876) Jamaica</option>
                  <option value="+81">(+81) Japan</option>
                  <option value="+962">(+962) Jordan</option>
                  <option value="+7">(+7) Kazakhstan</option>
                  <option value="+254">(+254) Kenya</option>
                  <option value="+686">(+686) Kiribati</option>
                  <option value="+850">(+850) Korea, Democratic People's Republic of</option>
                  <option value="+82">(+82) Korea, Republic of</option>
                  <option value="+965">(+965) Kuwait</option>
                  <option value="+996">(+996) Kyrgyzstan</option>
                  <option value="+856">(+856) Lao People's Democratic Republic</option>
                  <option value="+371">(+371) Latvia</option>
                  <option value="+961">(+961) Lebanon</option>
                  <option value="+266">(+266) Lesotho</option>
                  <option value="+231">(+231) Liberia</option>
                  <option value="+218">(+218) Libya</option>
                  <option value="+423">(+423) Liechtenstein</option>
                  <option value="+370">(+370) Lithuania</option>
                  <option value="+352">(+352) Luxembourg</option>
                  <option value="+853">(+853) Macao</option>
                  <option value="+389">(+389) Macedonia, the Former Yugoslav Republic of</option>
                  <option value="+261">(+261) Madagascar</option>
                  <option value="+265">(+265) Malawi</option>
                  <option value="+60">(+60) Malaysia</option>
                  <option value="+960">(+960) Maldives</option>
                  <option value="+223">(+223) Mali</option>
                  <option value="+356">(+356) Malta</option>
                  <option value="+692">(+692) Marshall Islands</option>
                  <option value="+596">(+596) Martinique</option>
                  <option value="+222">(+222) Mauritania</option>
                  <option value="+230">(+230) Mauritius</option>
                  <option value="+52">(+52) Mexico</option>
                  <option value="+691">(+691) Micronesia, Federated States of</option>
                  <option value="+373">(+373) Moldova, Republic of</option>
                  <option value="+377">(+377) Monaco</option>
                  <option value="+976">(+976) Mongolia</option>
                  <option value="+382">(+382) Montenegro</option>
                  <option value="+1664">(+1664) Montserrat</option>
                  <option value="+212">(+212) Morocco</option>
                  <option value="+258">(+258) Mozambique</option>
                  <option value="+95">(+95) Myanmar</option>
                  <option value="+264">(+264) Namibia</option>
                  <option value="+674">(+674) Nauru</option>
                  <option value="+977">(+977) Nepal</option>
                  <option value="+31">(+31) Netherlands</option>
                  <option value="+599">(+599) Netherlands Antilles</option>
                  <option value="+687">(+687) New Caledonia</option>
                  <option value="+64">(+64) New Zealand</option>
                  <option value="+505">(+505) Nicaragua</option>
                  <option value="+227">(+227) Niger</option>
                  <option value="+234">(+234) Nigeria</option>
                  <option value="+683">(+683) Niue</option>
                  <option value="+672">(+672) Norfolk Island</option>
                  <option value="+47">(+47) Norway</option>
                  <option value="+968">(+968) Oman</option>
                  <option value="+92">(+92) Pakistan</option>
                  <option value="+680">(+680) Palau</option>
                  <option value="+507">(+507) Panama</option>
                  <option value="+675">(+675) Papua New Guinea</option>
                  <option value="+595">(+595) Paraguay</option>
                  <option value="+51">(+51) Peru</option>
                  <option value="+63">(+63) Philippines</option>
                  <option value="+48">(+48) Poland</option>
                  <option value="+351">(+351) Portugal</option>
                  <option value="+974">(+974) Qatar</option>
                  <option value="+40">(+40) Romania</option>
                  <option value="+7">(+7) Russian Federation</option>
                  <option value="+250">(+250) Rwanda</option>
                  <option value="+1869">(+1869) Saint Kitts and Nevis</option>
                  <option value="+1758">(+1758) Saint Lucia</option>
                  <option value="+1784">(+1784) Saint Vincent and the Grenadines</option>
                  <option value="+684">(+684) Samoa</option>
                  <option value="+378">(+378) San Marino</option>
                  <option value="+239">(+239) Sao Tome and Principe</option>
                  <option value="+221">(+221) Senegal</option>
                  <option value="+381">(+381) Serbia</option>
                  <option value="+248">(+248) Seychelles</option>
                  <option value="+232">(+232) Sierra Leone</option>
                  <option value="+65">(+65) Singapore</option>
                  <option value="+421">(+421) Slovakia</option>
                  <option value="+386">(+386) Slovenia</option>
                  <option value="+677">(+677) Solomon Islands</option>
                  <option value="+252">(+252) Somalia</option>
                  <option value="+27">(+27) South Africa</option>
                  <option value="+34">(+34) Spain</option>
                  <option value="+94">(+94) Sri Lanka</option>
                  <option value="+249">(+249) Sudan</option>
                  <option value="+597">(+597) Suriname</option>
                  <option value="+268">(+268) Swaziland</option>
                  <option value="+46">(+46) Sweden</option>
                  <option value="+41">(+41) Switzerland</option>
                  <option value="+963">(+963) Syrian Arab Republic</option>
                  <option value="+886">(+886) Taiwan, Province of China</option>
                  <option value="+992">(+992) Tajikistan</option>
                  <option value="+255">(+255) Tanzania, United Republic of</option>
                  <option value="+66">(+66) Thailand</option>
                  <option value="+228">(+228) Togo</option>
                  <option value="+690">(+690) Tokelau</option>
                  <option value="+676">(+676) Tonga</option>
                  <option value="+1868">(+1868) Trinidad and Tobago</option>
                  <option value="+216">(+216) Tunisia</option>
                  <option value="+90">(+90) Turkey</option>
                  <option value="+993">(+993) Turkmenistan</option>
                  <option value="+688">(+688) Tuvalu</option>
                  <option value="+256">(+256) Uganda</option>
                  <option value="+380">(+380) Ukraine</option>
                  <option value="+971">(+971) United Arab Emirates</option>
                  <option value="+44">(+44) United Kingdom</option>
                  <option value="+1">(+1) United States</option>
                  <option value="+598">(+598) Uruguay</option>
                  <option value="+998">(+998) Uzbekistan</option>
                  <option value="+678">(+678) Vanuatu</option>
                  <option value="+58">(+58) Venezuela</option>
                  <option value="+84">(+84) Vietnam</option>
                  <option value="+1340">(+1340) Virgin Islands, U.S.</option>
                  <option value="+967">(+967) Yemen</option>
                  <option value="+260">(+260) Zambia</option>
                  <option value="+263">(+263) Zimbabwe</option>
                  <option value="+358">(+358) Åland Islands</option>
                </select>
            <input id='managerPhone3' value={userData.managerPhone3} onChange={(e) => setUserData(prevData => ({...prevData, managerPhone3: e.target.value}))} className="border-b-2 border-gray-400 p-2 w-full mr-8" type="text" placeholder='Mobile Number'/>
        </div>

        <div className='mt-5 flex'>
            <input id='managerName4' value={userData.managerName4} onChange={(e) => setUserData(prevData => ({...prevData, managerName4: e.target.value}))} className="border-b-2 border-gray-400 p-2 w-full mr-8" type="text" placeholder='Name (Manager 4)'/>
            <input id='managerEmail4' value={userData.managerEmail4} onChange={(e) => setUserData(prevData => ({...prevData, managerEmail4: e.target.value}))} className="border-b-2 border-gray-400 p-2 w-full mr-8" type="email" placeholder='email'/>
            <select name="countryCode" value={userData.manager4countryCode} onChange={(e) => setUserData(prevData => ({...prevData, manager4countryCode: e.target.value}))} className='border-b-2 border-gray-400 p-2 w-1/6 mr-2 cursor-pointer'>
                  <option value="code">Code</option>
                  <option value="+93">(+93) Afghanistan</option>
                  <option value="+355">(+355) Albania</option>
                  <option value="+213">(+213) Algeria</option>
                  <option value="+376">(+376) Andorra</option>
                  <option value="+244">(+244) Angola</option>
                  <option value="+1264">(+1264) Anguilla</option>
                  <option value="+1268">(+1268) Antigua and Barbuda</option>
                  <option value="+54">(+54) Argentina</option>
                  <option value="+374">(+374) Armenia</option>
                  <option value="+297">(+297) Aruba</option>
                  <option value="+61">(+61) Australia</option>
                  <option value="+43">(+43) Austria</option>
                  <option value="+994">(+994) Azerbaijan</option>
                  <option value="+1242">(+1242) Bahamas</option>
                  <option value="+973">(+973) Bahrain</option>
                  <option value="+880">(+880) Bangladesh</option>
                  <option value="+1246">(+1246) Barbados</option>
                  <option value="+375">(+375) Belarus</option>
                  <option value="+32">(+32) Belgium</option>
                  <option value="+501">(+501) Belize</option>
                  <option value="+229">(+229) Benin</option>
                  <option value="+1441">(+1441) Bermuda</option>
                  <option value="+975">(+975) Bhutan</option>
                  <option value="+591">(+591) Bolivia</option>
                  <option value="+387">(+387) Bosnia and Herzegovina</option>
                  <option value="+267">(+267) Botswana</option>
                  <option value="+55">(+55) Brazil</option>
                  <option value="+246">(+246) British Indian Ocean Territory</option>
                  <option value="+673">(+673) Brunei Darussalam</option>
                  <option value="+359">(+359) Bulgaria</option>
                  <option value="+226">(+226) Burkina Faso</option>
                  <option value="+257">(+257) Burundi</option>
                  <option value="+855">(+855) Cambodia</option>
                  <option value="+237">(+237) Cameroon</option>
                  <option value="+1">(+1) Canada</option>
                  <option value="+238">(+238) Cape Verde</option>
                  <option value="+1345">(+1345) Cayman Islands</option>
                  <option value="+236">(+236) Central African Republic</option>
                  <option value="+235">(+235) Chad</option>
                  <option value="+56">(+56) Chile</option>
                  <option value="+86">(+86) China</option>
                  <option value="+61">(+61) Christmas Island</option>
                  <option value="+672">(+672) Cocos (Keeling) Islands</option>
                  <option value="+57">(+57) Colombia</option>
                  <option value="+269">(+269) Comoros</option>
                  <option value="+242">(+242) Congo</option>
                  <option value="+243">(+243) Congo, the Democratic Republic of the</option>
                  <option value="+682">(+682) Cook Islands</option>
                  <option value="+506">(+506) Costa Rica</option>
                  <option value="+225">(+225) Cote D'Ivoire</option>
                  <option value="+385">(+385) Croatia</option>
                  <option value="+53">(+53) Cuba</option>
                  <option value="+357">(+357) Cyprus</option>
                  <option value="+420">(+420) Czech Republic</option>
                  <option value="+45">(+45) Denmark</option>
                  <option value="+253">(+253) Djibouti</option>
                  <option value="+1767">(+1767) Dominica</option>
                  <option value="+1809">(+1809) Dominican Republic</option>
                  <option value="+593">(+593) Ecuador</option>
                  <option value="+20">(+20) Egypt</option>
                  <option value="+503">(+503) El Salvador</option>
                  <option value="+240">(+240) Equatorial Guinea</option>
                  <option value="+291">(+291) Eritrea</option>
                  <option value="+372">(+372) Estonia</option>
                  <option value="+251">(+251) Ethiopia</option>
                  <option value="+500">(+500) Falkland Islands (Malvinas)</option>
                  <option value="+298">(+298) Faroe Islands</option>
                  <option value="+679">(+679) Fiji</option>
                  <option value="+358">(+358) Finland</option>
                  <option value="+33">(+33) France</option>
                  <option value="+594">(+594) French Guiana</option>
                  <option value="+689">(+689) French Polynesia</option>
                  <option value="+241">(+241) Gabon</option>
                  <option value="+220">(+220) Gambia</option>
                  <option value="+995">(+995) Georgia</option>
                  <option value="+49">(+49) Germany</option>
                  <option value="+233">(+233) Ghana</option>
                  <option value="+350">(+350) Gibraltar</option>
                  <option value="+30">(+30) Greece</option>
                  <option value="+299">(+299) Greenland</option>
                  <option value="+1473">(+1473) Grenada</option>
                  <option value="+590">(+590) Guadeloupe</option>
                  <option value="+1671">(+1671) Guam</option>
                  <option value="+502">(+502) Guatemala</option>
                  <option value="+224">(+224) Guinea</option>
                  <option value="+245">(+245) Guinea-Bissau</option>
                  <option value="+592">(+592) Guyana</option>
                  <option value="+509">(+509) Haiti</option>
                  <option value="+504">(+504) Honduras</option>
                  <option value="+852">(+852) Hong Kong</option>
                  <option value="+36">(+36) Hungary</option>
                  <option value="+354">(+354) Iceland</option>
                  <option value="+91">(+91) India</option>
                  <option value="+62">(+62) Indonesia</option>
                  <option value="+98">(+98) Iran, Islamic Republic of</option>
                  <option value="+964">(+964) Iraq</option>
                  <option value="+353">(+353) Ireland</option>
                  <option value="+972">(+972) Israel</option>
                  <option value="+39">(+39) Italy</option>
                  <option value="+1876">(+1876) Jamaica</option>
                  <option value="+81">(+81) Japan</option>
                  <option value="+962">(+962) Jordan</option>
                  <option value="+7">(+7) Kazakhstan</option>
                  <option value="+254">(+254) Kenya</option>
                  <option value="+686">(+686) Kiribati</option>
                  <option value="+850">(+850) Korea, Democratic People's Republic of</option>
                  <option value="+82">(+82) Korea, Republic of</option>
                  <option value="+965">(+965) Kuwait</option>
                  <option value="+996">(+996) Kyrgyzstan</option>
                  <option value="+856">(+856) Lao People's Democratic Republic</option>
                  <option value="+371">(+371) Latvia</option>
                  <option value="+961">(+961) Lebanon</option>
                  <option value="+266">(+266) Lesotho</option>
                  <option value="+231">(+231) Liberia</option>
                  <option value="+218">(+218) Libya</option>
                  <option value="+423">(+423) Liechtenstein</option>
                  <option value="+370">(+370) Lithuania</option>
                  <option value="+352">(+352) Luxembourg</option>
                  <option value="+853">(+853) Macao</option>
                  <option value="+389">(+389) Macedonia, the Former Yugoslav Republic of</option>
                  <option value="+261">(+261) Madagascar</option>
                  <option value="+265">(+265) Malawi</option>
                  <option value="+60">(+60) Malaysia</option>
                  <option value="+960">(+960) Maldives</option>
                  <option value="+223">(+223) Mali</option>
                  <option value="+356">(+356) Malta</option>
                  <option value="+692">(+692) Marshall Islands</option>
                  <option value="+596">(+596) Martinique</option>
                  <option value="+222">(+222) Mauritania</option>
                  <option value="+230">(+230) Mauritius</option>
                  <option value="+52">(+52) Mexico</option>
                  <option value="+691">(+691) Micronesia, Federated States of</option>
                  <option value="+373">(+373) Moldova, Republic of</option>
                  <option value="+377">(+377) Monaco</option>
                  <option value="+976">(+976) Mongolia</option>
                  <option value="+382">(+382) Montenegro</option>
                  <option value="+1664">(+1664) Montserrat</option>
                  <option value="+212">(+212) Morocco</option>
                  <option value="+258">(+258) Mozambique</option>
                  <option value="+95">(+95) Myanmar</option>
                  <option value="+264">(+264) Namibia</option>
                  <option value="+674">(+674) Nauru</option>
                  <option value="+977">(+977) Nepal</option>
                  <option value="+31">(+31) Netherlands</option>
                  <option value="+599">(+599) Netherlands Antilles</option>
                  <option value="+687">(+687) New Caledonia</option>
                  <option value="+64">(+64) New Zealand</option>
                  <option value="+505">(+505) Nicaragua</option>
                  <option value="+227">(+227) Niger</option>
                  <option value="+234">(+234) Nigeria</option>
                  <option value="+683">(+683) Niue</option>
                  <option value="+672">(+672) Norfolk Island</option>
                  <option value="+47">(+47) Norway</option>
                  <option value="+968">(+968) Oman</option>
                  <option value="+92">(+92) Pakistan</option>
                  <option value="+680">(+680) Palau</option>
                  <option value="+507">(+507) Panama</option>
                  <option value="+675">(+675) Papua New Guinea</option>
                  <option value="+595">(+595) Paraguay</option>
                  <option value="+51">(+51) Peru</option>
                  <option value="+63">(+63) Philippines</option>
                  <option value="+48">(+48) Poland</option>
                  <option value="+351">(+351) Portugal</option>
                  <option value="+974">(+974) Qatar</option>
                  <option value="+40">(+40) Romania</option>
                  <option value="+7">(+7) Russian Federation</option>
                  <option value="+250">(+250) Rwanda</option>
                  <option value="+1869">(+1869) Saint Kitts and Nevis</option>
                  <option value="+1758">(+1758) Saint Lucia</option>
                  <option value="+1784">(+1784) Saint Vincent and the Grenadines</option>
                  <option value="+684">(+684) Samoa</option>
                  <option value="+378">(+378) San Marino</option>
                  <option value="+239">(+239) Sao Tome and Principe</option>
                  <option value="+221">(+221) Senegal</option>
                  <option value="+381">(+381) Serbia</option>
                  <option value="+248">(+248) Seychelles</option>
                  <option value="+232">(+232) Sierra Leone</option>
                  <option value="+65">(+65) Singapore</option>
                  <option value="+421">(+421) Slovakia</option>
                  <option value="+386">(+386) Slovenia</option>
                  <option value="+677">(+677) Solomon Islands</option>
                  <option value="+252">(+252) Somalia</option>
                  <option value="+27">(+27) South Africa</option>
                  <option value="+34">(+34) Spain</option>
                  <option value="+94">(+94) Sri Lanka</option>
                  <option value="+249">(+249) Sudan</option>
                  <option value="+597">(+597) Suriname</option>
                  <option value="+268">(+268) Swaziland</option>
                  <option value="+46">(+46) Sweden</option>
                  <option value="+41">(+41) Switzerland</option>
                  <option value="+963">(+963) Syrian Arab Republic</option>
                  <option value="+886">(+886) Taiwan, Province of China</option>
                  <option value="+992">(+992) Tajikistan</option>
                  <option value="+255">(+255) Tanzania, United Republic of</option>
                  <option value="+66">(+66) Thailand</option>
                  <option value="+228">(+228) Togo</option>
                  <option value="+690">(+690) Tokelau</option>
                  <option value="+676">(+676) Tonga</option>
                  <option value="+1868">(+1868) Trinidad and Tobago</option>
                  <option value="+216">(+216) Tunisia</option>
                  <option value="+90">(+90) Turkey</option>
                  <option value="+993">(+993) Turkmenistan</option>
                  <option value="+688">(+688) Tuvalu</option>
                  <option value="+256">(+256) Uganda</option>
                  <option value="+380">(+380) Ukraine</option>
                  <option value="+971">(+971) United Arab Emirates</option>
                  <option value="+44">(+44) United Kingdom</option>
                  <option value="+1">(+1) United States</option>
                  <option value="+598">(+598) Uruguay</option>
                  <option value="+998">(+998) Uzbekistan</option>
                  <option value="+678">(+678) Vanuatu</option>
                  <option value="+58">(+58) Venezuela</option>
                  <option value="+84">(+84) Vietnam</option>
                  <option value="+1340">(+1340) Virgin Islands, U.S.</option>
                  <option value="+967">(+967) Yemen</option>
                  <option value="+260">(+260) Zambia</option>
                  <option value="+263">(+263) Zimbabwe</option>
                  <option value="+358">(+358) Åland Islands</option>
                </select>
            <input id='managerPhone4' value={userData.managerPhone4} onChange={(e) => setUserData(prevData => ({...prevData, managerPhone4: e.target.value}))} className="border-b-2 border-gray-400 p-2 w-full mr-8" type="text" placeholder='Mobile Number'/>
        </div>

        <div className='mt-5 flex'>
            <input id='managerName5' value={userData.managerName5} onChange={(e) => setUserData(prevData => ({...prevData, managerName5: e.target.value}))} className="border-b-2 border-gray-400 p-2 w-full mr-8" type="text" placeholder='Name (Manager 5)'/>
            <input id='managerEmail5' value={userData.managerEmail5} onChange={(e) => setUserData(prevData => ({...prevData, managerEmail5: e.target.value}))} className="border-b-2 border-gray-400 p-2 w-full mr-8" type="email" placeholder='email'/>
            <select name="countryCode" value={userData.manager5countryCode} onChange={(e) => setUserData(prevData => ({...prevData, manager5countryCode: e.target.value}))} className='border-b-2 border-gray-400 p-2 w-1/6 mr-2 cursor-pointer'>
                  <option value="code">Code</option>
                  <option value="+93">(+93) Afghanistan</option>
                  <option value="+355">(+355) Albania</option>
                  <option value="+213">(+213) Algeria</option>
                  <option value="+376">(+376) Andorra</option>
                  <option value="+244">(+244) Angola</option>
                  <option value="+1264">(+1264) Anguilla</option>
                  <option value="+1268">(+1268) Antigua and Barbuda</option>
                  <option value="+54">(+54) Argentina</option>
                  <option value="+374">(+374) Armenia</option>
                  <option value="+297">(+297) Aruba</option>
                  <option value="+61">(+61) Australia</option>
                  <option value="+43">(+43) Austria</option>
                  <option value="+994">(+994) Azerbaijan</option>
                  <option value="+1242">(+1242) Bahamas</option>
                  <option value="+973">(+973) Bahrain</option>
                  <option value="+880">(+880) Bangladesh</option>
                  <option value="+1246">(+1246) Barbados</option>
                  <option value="+375">(+375) Belarus</option>
                  <option value="+32">(+32) Belgium</option>
                  <option value="+501">(+501) Belize</option>
                  <option value="+229">(+229) Benin</option>
                  <option value="+1441">(+1441) Bermuda</option>
                  <option value="+975">(+975) Bhutan</option>
                  <option value="+591">(+591) Bolivia</option>
                  <option value="+387">(+387) Bosnia and Herzegovina</option>
                  <option value="+267">(+267) Botswana</option>
                  <option value="+55">(+55) Brazil</option>
                  <option value="+246">(+246) British Indian Ocean Territory</option>
                  <option value="+673">(+673) Brunei Darussalam</option>
                  <option value="+359">(+359) Bulgaria</option>
                  <option value="+226">(+226) Burkina Faso</option>
                  <option value="+257">(+257) Burundi</option>
                  <option value="+855">(+855) Cambodia</option>
                  <option value="+237">(+237) Cameroon</option>
                  <option value="+1">(+1) Canada</option>
                  <option value="+238">(+238) Cape Verde</option>
                  <option value="+1345">(+1345) Cayman Islands</option>
                  <option value="+236">(+236) Central African Republic</option>
                  <option value="+235">(+235) Chad</option>
                  <option value="+56">(+56) Chile</option>
                  <option value="+86">(+86) China</option>
                  <option value="+61">(+61) Christmas Island</option>
                  <option value="+672">(+672) Cocos (Keeling) Islands</option>
                  <option value="+57">(+57) Colombia</option>
                  <option value="+269">(+269) Comoros</option>
                  <option value="+242">(+242) Congo</option>
                  <option value="+243">(+243) Congo, the Democratic Republic of the</option>
                  <option value="+682">(+682) Cook Islands</option>
                  <option value="+506">(+506) Costa Rica</option>
                  <option value="+225">(+225) Cote D'Ivoire</option>
                  <option value="+385">(+385) Croatia</option>
                  <option value="+53">(+53) Cuba</option>
                  <option value="+357">(+357) Cyprus</option>
                  <option value="+420">(+420) Czech Republic</option>
                  <option value="+45">(+45) Denmark</option>
                  <option value="+253">(+253) Djibouti</option>
                  <option value="+1767">(+1767) Dominica</option>
                  <option value="+1809">(+1809) Dominican Republic</option>
                  <option value="+593">(+593) Ecuador</option>
                  <option value="+20">(+20) Egypt</option>
                  <option value="+503">(+503) El Salvador</option>
                  <option value="+240">(+240) Equatorial Guinea</option>
                  <option value="+291">(+291) Eritrea</option>
                  <option value="+372">(+372) Estonia</option>
                  <option value="+251">(+251) Ethiopia</option>
                  <option value="+500">(+500) Falkland Islands (Malvinas)</option>
                  <option value="+298">(+298) Faroe Islands</option>
                  <option value="+679">(+679) Fiji</option>
                  <option value="+358">(+358) Finland</option>
                  <option value="+33">(+33) France</option>
                  <option value="+594">(+594) French Guiana</option>
                  <option value="+689">(+689) French Polynesia</option>
                  <option value="+241">(+241) Gabon</option>
                  <option value="+220">(+220) Gambia</option>
                  <option value="+995">(+995) Georgia</option>
                  <option value="+49">(+49) Germany</option>
                  <option value="+233">(+233) Ghana</option>
                  <option value="+350">(+350) Gibraltar</option>
                  <option value="+30">(+30) Greece</option>
                  <option value="+299">(+299) Greenland</option>
                  <option value="+1473">(+1473) Grenada</option>
                  <option value="+590">(+590) Guadeloupe</option>
                  <option value="+1671">(+1671) Guam</option>
                  <option value="+502">(+502) Guatemala</option>
                  <option value="+224">(+224) Guinea</option>
                  <option value="+245">(+245) Guinea-Bissau</option>
                  <option value="+592">(+592) Guyana</option>
                  <option value="+509">(+509) Haiti</option>
                  <option value="+504">(+504) Honduras</option>
                  <option value="+852">(+852) Hong Kong</option>
                  <option value="+36">(+36) Hungary</option>
                  <option value="+354">(+354) Iceland</option>
                  <option value="+91">(+91) India</option>
                  <option value="+62">(+62) Indonesia</option>
                  <option value="+98">(+98) Iran, Islamic Republic of</option>
                  <option value="+964">(+964) Iraq</option>
                  <option value="+353">(+353) Ireland</option>
                  <option value="+972">(+972) Israel</option>
                  <option value="+39">(+39) Italy</option>
                  <option value="+1876">(+1876) Jamaica</option>
                  <option value="+81">(+81) Japan</option>
                  <option value="+962">(+962) Jordan</option>
                  <option value="+7">(+7) Kazakhstan</option>
                  <option value="+254">(+254) Kenya</option>
                  <option value="+686">(+686) Kiribati</option>
                  <option value="+850">(+850) Korea, Democratic People's Republic of</option>
                  <option value="+82">(+82) Korea, Republic of</option>
                  <option value="+965">(+965) Kuwait</option>
                  <option value="+996">(+996) Kyrgyzstan</option>
                  <option value="+856">(+856) Lao People's Democratic Republic</option>
                  <option value="+371">(+371) Latvia</option>
                  <option value="+961">(+961) Lebanon</option>
                  <option value="+266">(+266) Lesotho</option>
                  <option value="+231">(+231) Liberia</option>
                  <option value="+218">(+218) Libya</option>
                  <option value="+423">(+423) Liechtenstein</option>
                  <option value="+370">(+370) Lithuania</option>
                  <option value="+352">(+352) Luxembourg</option>
                  <option value="+853">(+853) Macao</option>
                  <option value="+389">(+389) Macedonia, the Former Yugoslav Republic of</option>
                  <option value="+261">(+261) Madagascar</option>
                  <option value="+265">(+265) Malawi</option>
                  <option value="+60">(+60) Malaysia</option>
                  <option value="+960">(+960) Maldives</option>
                  <option value="+223">(+223) Mali</option>
                  <option value="+356">(+356) Malta</option>
                  <option value="+692">(+692) Marshall Islands</option>
                  <option value="+596">(+596) Martinique</option>
                  <option value="+222">(+222) Mauritania</option>
                  <option value="+230">(+230) Mauritius</option>
                  <option value="+52">(+52) Mexico</option>
                  <option value="+691">(+691) Micronesia, Federated States of</option>
                  <option value="+373">(+373) Moldova, Republic of</option>
                  <option value="+377">(+377) Monaco</option>
                  <option value="+976">(+976) Mongolia</option>
                  <option value="+382">(+382) Montenegro</option>
                  <option value="+1664">(+1664) Montserrat</option>
                  <option value="+212">(+212) Morocco</option>
                  <option value="+258">(+258) Mozambique</option>
                  <option value="+95">(+95) Myanmar</option>
                  <option value="+264">(+264) Namibia</option>
                  <option value="+674">(+674) Nauru</option>
                  <option value="+977">(+977) Nepal</option>
                  <option value="+31">(+31) Netherlands</option>
                  <option value="+599">(+599) Netherlands Antilles</option>
                  <option value="+687">(+687) New Caledonia</option>
                  <option value="+64">(+64) New Zealand</option>
                  <option value="+505">(+505) Nicaragua</option>
                  <option value="+227">(+227) Niger</option>
                  <option value="+234">(+234) Nigeria</option>
                  <option value="+683">(+683) Niue</option>
                  <option value="+672">(+672) Norfolk Island</option>
                  <option value="+47">(+47) Norway</option>
                  <option value="+968">(+968) Oman</option>
                  <option value="+92">(+92) Pakistan</option>
                  <option value="+680">(+680) Palau</option>
                  <option value="+507">(+507) Panama</option>
                  <option value="+675">(+675) Papua New Guinea</option>
                  <option value="+595">(+595) Paraguay</option>
                  <option value="+51">(+51) Peru</option>
                  <option value="+63">(+63) Philippines</option>
                  <option value="+48">(+48) Poland</option>
                  <option value="+351">(+351) Portugal</option>
                  <option value="+974">(+974) Qatar</option>
                  <option value="+40">(+40) Romania</option>
                  <option value="+7">(+7) Russian Federation</option>
                  <option value="+250">(+250) Rwanda</option>
                  <option value="+1869">(+1869) Saint Kitts and Nevis</option>
                  <option value="+1758">(+1758) Saint Lucia</option>
                  <option value="+1784">(+1784) Saint Vincent and the Grenadines</option>
                  <option value="+684">(+684) Samoa</option>
                  <option value="+378">(+378) San Marino</option>
                  <option value="+239">(+239) Sao Tome and Principe</option>
                  <option value="+221">(+221) Senegal</option>
                  <option value="+381">(+381) Serbia</option>
                  <option value="+248">(+248) Seychelles</option>
                  <option value="+232">(+232) Sierra Leone</option>
                  <option value="+65">(+65) Singapore</option>
                  <option value="+421">(+421) Slovakia</option>
                  <option value="+386">(+386) Slovenia</option>
                  <option value="+677">(+677) Solomon Islands</option>
                  <option value="+252">(+252) Somalia</option>
                  <option value="+27">(+27) South Africa</option>
                  <option value="+34">(+34) Spain</option>
                  <option value="+94">(+94) Sri Lanka</option>
                  <option value="+249">(+249) Sudan</option>
                  <option value="+597">(+597) Suriname</option>
                  <option value="+268">(+268) Swaziland</option>
                  <option value="+46">(+46) Sweden</option>
                  <option value="+41">(+41) Switzerland</option>
                  <option value="+963">(+963) Syrian Arab Republic</option>
                  <option value="+886">(+886) Taiwan, Province of China</option>
                  <option value="+992">(+992) Tajikistan</option>
                  <option value="+255">(+255) Tanzania, United Republic of</option>
                  <option value="+66">(+66) Thailand</option>
                  <option value="+228">(+228) Togo</option>
                  <option value="+690">(+690) Tokelau</option>
                  <option value="+676">(+676) Tonga</option>
                  <option value="+1868">(+1868) Trinidad and Tobago</option>
                  <option value="+216">(+216) Tunisia</option>
                  <option value="+90">(+90) Turkey</option>
                  <option value="+993">(+993) Turkmenistan</option>
                  <option value="+688">(+688) Tuvalu</option>
                  <option value="+256">(+256) Uganda</option>
                  <option value="+380">(+380) Ukraine</option>
                  <option value="+971">(+971) United Arab Emirates</option>
                  <option value="+44">(+44) United Kingdom</option>
                  <option value="+1">(+1) United States</option>
                  <option value="+598">(+598) Uruguay</option>
                  <option value="+998">(+998) Uzbekistan</option>
                  <option value="+678">(+678) Vanuatu</option>
                  <option value="+58">(+58) Venezuela</option>
                  <option value="+84">(+84) Vietnam</option>
                  <option value="+1340">(+1340) Virgin Islands, U.S.</option>
                  <option value="+967">(+967) Yemen</option>
                  <option value="+260">(+260) Zambia</option>
                  <option value="+263">(+263) Zimbabwe</option>
                  <option value="+358">(+358) Åland Islands</option>
                </select>
            <input id='managerPhone5' value={userData.managerPhone5} onChange={(e) => setUserData(prevData => ({...prevData, managerPhone5: e.target.value}))} className="border-b-2 border-gray-400 p-2 w-full mr-8" type="text" placeholder='Mobile Number'/>
        </div>

        <div className='mt-5 flex'>
            <input id='managerName6' value={userData.managerName6} onChange={(e) => setUserData(prevData => ({...prevData, managerName6: e.target.value}))} className="border-b-2 border-gray-400 p-2 w-full mr-8" type="text" placeholder='Name (Manager 6)'/>
            <input id='managerEmail6' value={userData.managerEmail6} onChange={(e) => setUserData(prevData => ({...prevData, managerEmail6: e.target.value}))} className="border-b-2 border-gray-400 p-2 w-full mr-8" type="email" placeholder='email'/>
            <select name="countryCode" value={userData.manager6countryCode} onChange={(e) => setUserData(prevData => ({...prevData, manager6countryCode: e.target.value}))} className='border-b-2 border-gray-400 p-2 w-1/6 mr-2 cursor-pointer'>
                  <option value="code">Code</option>
                  <option value="+93">(+93) Afghanistan</option>
                  <option value="+355">(+355) Albania</option>
                  <option value="+213">(+213) Algeria</option>
                  <option value="+376">(+376) Andorra</option>
                  <option value="+244">(+244) Angola</option>
                  <option value="+1264">(+1264) Anguilla</option>
                  <option value="+1268">(+1268) Antigua and Barbuda</option>
                  <option value="+54">(+54) Argentina</option>
                  <option value="+374">(+374) Armenia</option>
                  <option value="+297">(+297) Aruba</option>
                  <option value="+61">(+61) Australia</option>
                  <option value="+43">(+43) Austria</option>
                  <option value="+994">(+994) Azerbaijan</option>
                  <option value="+1242">(+1242) Bahamas</option>
                  <option value="+973">(+973) Bahrain</option>
                  <option value="+880">(+880) Bangladesh</option>
                  <option value="+1246">(+1246) Barbados</option>
                  <option value="+375">(+375) Belarus</option>
                  <option value="+32">(+32) Belgium</option>
                  <option value="+501">(+501) Belize</option>
                  <option value="+229">(+229) Benin</option>
                  <option value="+1441">(+1441) Bermuda</option>
                  <option value="+975">(+975) Bhutan</option>
                  <option value="+591">(+591) Bolivia</option>
                  <option value="+387">(+387) Bosnia and Herzegovina</option>
                  <option value="+267">(+267) Botswana</option>
                  <option value="+55">(+55) Brazil</option>
                  <option value="+246">(+246) British Indian Ocean Territory</option>
                  <option value="+673">(+673) Brunei Darussalam</option>
                  <option value="+359">(+359) Bulgaria</option>
                  <option value="+226">(+226) Burkina Faso</option>
                  <option value="+257">(+257) Burundi</option>
                  <option value="+855">(+855) Cambodia</option>
                  <option value="+237">(+237) Cameroon</option>
                  <option value="+1">(+1) Canada</option>
                  <option value="+238">(+238) Cape Verde</option>
                  <option value="+1345">(+1345) Cayman Islands</option>
                  <option value="+236">(+236) Central African Republic</option>
                  <option value="+235">(+235) Chad</option>
                  <option value="+56">(+56) Chile</option>
                  <option value="+86">(+86) China</option>
                  <option value="+61">(+61) Christmas Island</option>
                  <option value="+672">(+672) Cocos (Keeling) Islands</option>
                  <option value="+57">(+57) Colombia</option>
                  <option value="+269">(+269) Comoros</option>
                  <option value="+242">(+242) Congo</option>
                  <option value="+243">(+243) Congo, the Democratic Republic of the</option>
                  <option value="+682">(+682) Cook Islands</option>
                  <option value="+506">(+506) Costa Rica</option>
                  <option value="+225">(+225) Cote D'Ivoire</option>
                  <option value="+385">(+385) Croatia</option>
                  <option value="+53">(+53) Cuba</option>
                  <option value="+357">(+357) Cyprus</option>
                  <option value="+420">(+420) Czech Republic</option>
                  <option value="+45">(+45) Denmark</option>
                  <option value="+253">(+253) Djibouti</option>
                  <option value="+1767">(+1767) Dominica</option>
                  <option value="+1809">(+1809) Dominican Republic</option>
                  <option value="+593">(+593) Ecuador</option>
                  <option value="+20">(+20) Egypt</option>
                  <option value="+503">(+503) El Salvador</option>
                  <option value="+240">(+240) Equatorial Guinea</option>
                  <option value="+291">(+291) Eritrea</option>
                  <option value="+372">(+372) Estonia</option>
                  <option value="+251">(+251) Ethiopia</option>
                  <option value="+500">(+500) Falkland Islands (Malvinas)</option>
                  <option value="+298">(+298) Faroe Islands</option>
                  <option value="+679">(+679) Fiji</option>
                  <option value="+358">(+358) Finland</option>
                  <option value="+33">(+33) France</option>
                  <option value="+594">(+594) French Guiana</option>
                  <option value="+689">(+689) French Polynesia</option>
                  <option value="+241">(+241) Gabon</option>
                  <option value="+220">(+220) Gambia</option>
                  <option value="+995">(+995) Georgia</option>
                  <option value="+49">(+49) Germany</option>
                  <option value="+233">(+233) Ghana</option>
                  <option value="+350">(+350) Gibraltar</option>
                  <option value="+30">(+30) Greece</option>
                  <option value="+299">(+299) Greenland</option>
                  <option value="+1473">(+1473) Grenada</option>
                  <option value="+590">(+590) Guadeloupe</option>
                  <option value="+1671">(+1671) Guam</option>
                  <option value="+502">(+502) Guatemala</option>
                  <option value="+224">(+224) Guinea</option>
                  <option value="+245">(+245) Guinea-Bissau</option>
                  <option value="+592">(+592) Guyana</option>
                  <option value="+509">(+509) Haiti</option>
                  <option value="+504">(+504) Honduras</option>
                  <option value="+852">(+852) Hong Kong</option>
                  <option value="+36">(+36) Hungary</option>
                  <option value="+354">(+354) Iceland</option>
                  <option value="+91">(+91) India</option>
                  <option value="+62">(+62) Indonesia</option>
                  <option value="+98">(+98) Iran, Islamic Republic of</option>
                  <option value="+964">(+964) Iraq</option>
                  <option value="+353">(+353) Ireland</option>
                  <option value="+972">(+972) Israel</option>
                  <option value="+39">(+39) Italy</option>
                  <option value="+1876">(+1876) Jamaica</option>
                  <option value="+81">(+81) Japan</option>
                  <option value="+962">(+962) Jordan</option>
                  <option value="+7">(+7) Kazakhstan</option>
                  <option value="+254">(+254) Kenya</option>
                  <option value="+686">(+686) Kiribati</option>
                  <option value="+850">(+850) Korea, Democratic People's Republic of</option>
                  <option value="+82">(+82) Korea, Republic of</option>
                  <option value="+965">(+965) Kuwait</option>
                  <option value="+996">(+996) Kyrgyzstan</option>
                  <option value="+856">(+856) Lao People's Democratic Republic</option>
                  <option value="+371">(+371) Latvia</option>
                  <option value="+961">(+961) Lebanon</option>
                  <option value="+266">(+266) Lesotho</option>
                  <option value="+231">(+231) Liberia</option>
                  <option value="+218">(+218) Libya</option>
                  <option value="+423">(+423) Liechtenstein</option>
                  <option value="+370">(+370) Lithuania</option>
                  <option value="+352">(+352) Luxembourg</option>
                  <option value="+853">(+853) Macao</option>
                  <option value="+389">(+389) Macedonia, the Former Yugoslav Republic of</option>
                  <option value="+261">(+261) Madagascar</option>
                  <option value="+265">(+265) Malawi</option>
                  <option value="+60">(+60) Malaysia</option>
                  <option value="+960">(+960) Maldives</option>
                  <option value="+223">(+223) Mali</option>
                  <option value="+356">(+356) Malta</option>
                  <option value="+692">(+692) Marshall Islands</option>
                  <option value="+596">(+596) Martinique</option>
                  <option value="+222">(+222) Mauritania</option>
                  <option value="+230">(+230) Mauritius</option>
                  <option value="+52">(+52) Mexico</option>
                  <option value="+691">(+691) Micronesia, Federated States of</option>
                  <option value="+373">(+373) Moldova, Republic of</option>
                  <option value="+377">(+377) Monaco</option>
                  <option value="+976">(+976) Mongolia</option>
                  <option value="+382">(+382) Montenegro</option>
                  <option value="+1664">(+1664) Montserrat</option>
                  <option value="+212">(+212) Morocco</option>
                  <option value="+258">(+258) Mozambique</option>
                  <option value="+95">(+95) Myanmar</option>
                  <option value="+264">(+264) Namibia</option>
                  <option value="+674">(+674) Nauru</option>
                  <option value="+977">(+977) Nepal</option>
                  <option value="+31">(+31) Netherlands</option>
                  <option value="+599">(+599) Netherlands Antilles</option>
                  <option value="+687">(+687) New Caledonia</option>
                  <option value="+64">(+64) New Zealand</option>
                  <option value="+505">(+505) Nicaragua</option>
                  <option value="+227">(+227) Niger</option>
                  <option value="+234">(+234) Nigeria</option>
                  <option value="+683">(+683) Niue</option>
                  <option value="+672">(+672) Norfolk Island</option>
                  <option value="+47">(+47) Norway</option>
                  <option value="+968">(+968) Oman</option>
                  <option value="+92">(+92) Pakistan</option>
                  <option value="+680">(+680) Palau</option>
                  <option value="+507">(+507) Panama</option>
                  <option value="+675">(+675) Papua New Guinea</option>
                  <option value="+595">(+595) Paraguay</option>
                  <option value="+51">(+51) Peru</option>
                  <option value="+63">(+63) Philippines</option>
                  <option value="+48">(+48) Poland</option>
                  <option value="+351">(+351) Portugal</option>
                  <option value="+974">(+974) Qatar</option>
                  <option value="+40">(+40) Romania</option>
                  <option value="+7">(+7) Russian Federation</option>
                  <option value="+250">(+250) Rwanda</option>
                  <option value="+1869">(+1869) Saint Kitts and Nevis</option>
                  <option value="+1758">(+1758) Saint Lucia</option>
                  <option value="+1784">(+1784) Saint Vincent and the Grenadines</option>
                  <option value="+684">(+684) Samoa</option>
                  <option value="+378">(+378) San Marino</option>
                  <option value="+239">(+239) Sao Tome and Principe</option>
                  <option value="+221">(+221) Senegal</option>
                  <option value="+381">(+381) Serbia</option>
                  <option value="+248">(+248) Seychelles</option>
                  <option value="+232">(+232) Sierra Leone</option>
                  <option value="+65">(+65) Singapore</option>
                  <option value="+421">(+421) Slovakia</option>
                  <option value="+386">(+386) Slovenia</option>
                  <option value="+677">(+677) Solomon Islands</option>
                  <option value="+252">(+252) Somalia</option>
                  <option value="+27">(+27) South Africa</option>
                  <option value="+34">(+34) Spain</option>
                  <option value="+94">(+94) Sri Lanka</option>
                  <option value="+249">(+249) Sudan</option>
                  <option value="+597">(+597) Suriname</option>
                  <option value="+268">(+268) Swaziland</option>
                  <option value="+46">(+46) Sweden</option>
                  <option value="+41">(+41) Switzerland</option>
                  <option value="+963">(+963) Syrian Arab Republic</option>
                  <option value="+886">(+886) Taiwan, Province of China</option>
                  <option value="+992">(+992) Tajikistan</option>
                  <option value="+255">(+255) Tanzania, United Republic of</option>
                  <option value="+66">(+66) Thailand</option>
                  <option value="+228">(+228) Togo</option>
                  <option value="+690">(+690) Tokelau</option>
                  <option value="+676">(+676) Tonga</option>
                  <option value="+1868">(+1868) Trinidad and Tobago</option>
                  <option value="+216">(+216) Tunisia</option>
                  <option value="+90">(+90) Turkey</option>
                  <option value="+993">(+993) Turkmenistan</option>
                  <option value="+688">(+688) Tuvalu</option>
                  <option value="+256">(+256) Uganda</option>
                  <option value="+380">(+380) Ukraine</option>
                  <option value="+971">(+971) United Arab Emirates</option>
                  <option value="+44">(+44) United Kingdom</option>
                  <option value="+1">(+1) United States</option>
                  <option value="+598">(+598) Uruguay</option>
                  <option value="+998">(+998) Uzbekistan</option>
                  <option value="+678">(+678) Vanuatu</option>
                  <option value="+58">(+58) Venezuela</option>
                  <option value="+84">(+84) Vietnam</option>
                  <option value="+1340">(+1340) Virgin Islands, U.S.</option>
                  <option value="+967">(+967) Yemen</option>
                  <option value="+260">(+260) Zambia</option>
                  <option value="+263">(+263) Zimbabwe</option>
                  <option value="+358">(+358) Åland Islands</option>
                </select>
            <input id='managerPhone6' value={userData.managerPhone6} onChange={(e) => setUserData(prevData => ({...prevData, managerPhone6: e.target.value}))} className="border-b-2 border-gray-400 p-2 w-full mr-8" type="text" placeholder='Mobile Number'/>
        </div>
        </form>

        <br /><br /><br />
        <h3 className='font-semibold pb-6'>Added Owner(s):</h3>
        <div className='flex'>
            <input id='ownerName' value={userData.ownerName} onChange={(e) => setUserData(prevData => ({...prevData, ownerName: e.target.value}))} className="border-b-2 border-gray-400 p-2 w-full mr-8" type="text" placeholder='Name (Owner 1)'/>
            <input id='ownerEmail' value={userData.ownerEmail} onChange={(e) => setUserData(prevData => ({...prevData, ownerEmail: e.target.value}))} className="border-b-2 border-gray-400 p-2 w-full mr-8" type="email" placeholder='email'/>
            <select name="countryCode" value={userData.owner1countryCode} onChange={(e) => setUserData(prevData => ({...prevData, owner1countryCode: e.target.value}))} className='border-b-2 border-gray-400 p-2 w-1/6 mr-2 cursor-pointer'>
                  <option value="code">Code</option>
                  <option value="+93">(+93) Afghanistan</option>
                  <option value="+355">(+355) Albania</option>
                  <option value="+213">(+213) Algeria</option>
                  <option value="+376">(+376) Andorra</option>
                  <option value="+244">(+244) Angola</option>
                  <option value="+1264">(+1264) Anguilla</option>
                  <option value="+1268">(+1268) Antigua and Barbuda</option>
                  <option value="+54">(+54) Argentina</option>
                  <option value="+374">(+374) Armenia</option>
                  <option value="+297">(+297) Aruba</option>
                  <option value="+61">(+61) Australia</option>
                  <option value="+43">(+43) Austria</option>
                  <option value="+994">(+994) Azerbaijan</option>
                  <option value="+1242">(+1242) Bahamas</option>
                  <option value="+973">(+973) Bahrain</option>
                  <option value="+880">(+880) Bangladesh</option>
                  <option value="+1246">(+1246) Barbados</option>
                  <option value="+375">(+375) Belarus</option>
                  <option value="+32">(+32) Belgium</option>
                  <option value="+501">(+501) Belize</option>
                  <option value="+229">(+229) Benin</option>
                  <option value="+1441">(+1441) Bermuda</option>
                  <option value="+975">(+975) Bhutan</option>
                  <option value="+591">(+591) Bolivia</option>
                  <option value="+387">(+387) Bosnia and Herzegovina</option>
                  <option value="+267">(+267) Botswana</option>
                  <option value="+55">(+55) Brazil</option>
                  <option value="+246">(+246) British Indian Ocean Territory</option>
                  <option value="+673">(+673) Brunei Darussalam</option>
                  <option value="+359">(+359) Bulgaria</option>
                  <option value="+226">(+226) Burkina Faso</option>
                  <option value="+257">(+257) Burundi</option>
                  <option value="+855">(+855) Cambodia</option>
                  <option value="+237">(+237) Cameroon</option>
                  <option value="+1">(+1) Canada</option>
                  <option value="+238">(+238) Cape Verde</option>
                  <option value="+1345">(+1345) Cayman Islands</option>
                  <option value="+236">(+236) Central African Republic</option>
                  <option value="+235">(+235) Chad</option>
                  <option value="+56">(+56) Chile</option>
                  <option value="+86">(+86) China</option>
                  <option value="+61">(+61) Christmas Island</option>
                  <option value="+672">(+672) Cocos (Keeling) Islands</option>
                  <option value="+57">(+57) Colombia</option>
                  <option value="+269">(+269) Comoros</option>
                  <option value="+242">(+242) Congo</option>
                  <option value="+243">(+243) Congo, the Democratic Republic of the</option>
                  <option value="+682">(+682) Cook Islands</option>
                  <option value="+506">(+506) Costa Rica</option>
                  <option value="+225">(+225) Cote D'Ivoire</option>
                  <option value="+385">(+385) Croatia</option>
                  <option value="+53">(+53) Cuba</option>
                  <option value="+357">(+357) Cyprus</option>
                  <option value="+420">(+420) Czech Republic</option>
                  <option value="+45">(+45) Denmark</option>
                  <option value="+253">(+253) Djibouti</option>
                  <option value="+1767">(+1767) Dominica</option>
                  <option value="+1809">(+1809) Dominican Republic</option>
                  <option value="+593">(+593) Ecuador</option>
                  <option value="+20">(+20) Egypt</option>
                  <option value="+503">(+503) El Salvador</option>
                  <option value="+240">(+240) Equatorial Guinea</option>
                  <option value="+291">(+291) Eritrea</option>
                  <option value="+372">(+372) Estonia</option>
                  <option value="+251">(+251) Ethiopia</option>
                  <option value="+500">(+500) Falkland Islands (Malvinas)</option>
                  <option value="+298">(+298) Faroe Islands</option>
                  <option value="+679">(+679) Fiji</option>
                  <option value="+358">(+358) Finland</option>
                  <option value="+33">(+33) France</option>
                  <option value="+594">(+594) French Guiana</option>
                  <option value="+689">(+689) French Polynesia</option>
                  <option value="+241">(+241) Gabon</option>
                  <option value="+220">(+220) Gambia</option>
                  <option value="+995">(+995) Georgia</option>
                  <option value="+49">(+49) Germany</option>
                  <option value="+233">(+233) Ghana</option>
                  <option value="+350">(+350) Gibraltar</option>
                  <option value="+30">(+30) Greece</option>
                  <option value="+299">(+299) Greenland</option>
                  <option value="+1473">(+1473) Grenada</option>
                  <option value="+590">(+590) Guadeloupe</option>
                  <option value="+1671">(+1671) Guam</option>
                  <option value="+502">(+502) Guatemala</option>
                  <option value="+224">(+224) Guinea</option>
                  <option value="+245">(+245) Guinea-Bissau</option>
                  <option value="+592">(+592) Guyana</option>
                  <option value="+509">(+509) Haiti</option>
                  <option value="+504">(+504) Honduras</option>
                  <option value="+852">(+852) Hong Kong</option>
                  <option value="+36">(+36) Hungary</option>
                  <option value="+354">(+354) Iceland</option>
                  <option value="+91">(+91) India</option>
                  <option value="+62">(+62) Indonesia</option>
                  <option value="+98">(+98) Iran, Islamic Republic of</option>
                  <option value="+964">(+964) Iraq</option>
                  <option value="+353">(+353) Ireland</option>
                  <option value="+972">(+972) Israel</option>
                  <option value="+39">(+39) Italy</option>
                  <option value="+1876">(+1876) Jamaica</option>
                  <option value="+81">(+81) Japan</option>
                  <option value="+962">(+962) Jordan</option>
                  <option value="+7">(+7) Kazakhstan</option>
                  <option value="+254">(+254) Kenya</option>
                  <option value="+686">(+686) Kiribati</option>
                  <option value="+850">(+850) Korea, Democratic People's Republic of</option>
                  <option value="+82">(+82) Korea, Republic of</option>
                  <option value="+965">(+965) Kuwait</option>
                  <option value="+996">(+996) Kyrgyzstan</option>
                  <option value="+856">(+856) Lao People's Democratic Republic</option>
                  <option value="+371">(+371) Latvia</option>
                  <option value="+961">(+961) Lebanon</option>
                  <option value="+266">(+266) Lesotho</option>
                  <option value="+231">(+231) Liberia</option>
                  <option value="+218">(+218) Libya</option>
                  <option value="+423">(+423) Liechtenstein</option>
                  <option value="+370">(+370) Lithuania</option>
                  <option value="+352">(+352) Luxembourg</option>
                  <option value="+853">(+853) Macao</option>
                  <option value="+389">(+389) Macedonia, the Former Yugoslav Republic of</option>
                  <option value="+261">(+261) Madagascar</option>
                  <option value="+265">(+265) Malawi</option>
                  <option value="+60">(+60) Malaysia</option>
                  <option value="+960">(+960) Maldives</option>
                  <option value="+223">(+223) Mali</option>
                  <option value="+356">(+356) Malta</option>
                  <option value="+692">(+692) Marshall Islands</option>
                  <option value="+596">(+596) Martinique</option>
                  <option value="+222">(+222) Mauritania</option>
                  <option value="+230">(+230) Mauritius</option>
                  <option value="+52">(+52) Mexico</option>
                  <option value="+691">(+691) Micronesia, Federated States of</option>
                  <option value="+373">(+373) Moldova, Republic of</option>
                  <option value="+377">(+377) Monaco</option>
                  <option value="+976">(+976) Mongolia</option>
                  <option value="+382">(+382) Montenegro</option>
                  <option value="+1664">(+1664) Montserrat</option>
                  <option value="+212">(+212) Morocco</option>
                  <option value="+258">(+258) Mozambique</option>
                  <option value="+95">(+95) Myanmar</option>
                  <option value="+264">(+264) Namibia</option>
                  <option value="+674">(+674) Nauru</option>
                  <option value="+977">(+977) Nepal</option>
                  <option value="+31">(+31) Netherlands</option>
                  <option value="+599">(+599) Netherlands Antilles</option>
                  <option value="+687">(+687) New Caledonia</option>
                  <option value="+64">(+64) New Zealand</option>
                  <option value="+505">(+505) Nicaragua</option>
                  <option value="+227">(+227) Niger</option>
                  <option value="+234">(+234) Nigeria</option>
                  <option value="+683">(+683) Niue</option>
                  <option value="+672">(+672) Norfolk Island</option>
                  <option value="+47">(+47) Norway</option>
                  <option value="+968">(+968) Oman</option>
                  <option value="+92">(+92) Pakistan</option>
                  <option value="+680">(+680) Palau</option>
                  <option value="+507">(+507) Panama</option>
                  <option value="+675">(+675) Papua New Guinea</option>
                  <option value="+595">(+595) Paraguay</option>
                  <option value="+51">(+51) Peru</option>
                  <option value="+63">(+63) Philippines</option>
                  <option value="+48">(+48) Poland</option>
                  <option value="+351">(+351) Portugal</option>
                  <option value="+974">(+974) Qatar</option>
                  <option value="+40">(+40) Romania</option>
                  <option value="+7">(+7) Russian Federation</option>
                  <option value="+250">(+250) Rwanda</option>
                  <option value="+1869">(+1869) Saint Kitts and Nevis</option>
                  <option value="+1758">(+1758) Saint Lucia</option>
                  <option value="+1784">(+1784) Saint Vincent and the Grenadines</option>
                  <option value="+684">(+684) Samoa</option>
                  <option value="+378">(+378) San Marino</option>
                  <option value="+239">(+239) Sao Tome and Principe</option>
                  <option value="+221">(+221) Senegal</option>
                  <option value="+381">(+381) Serbia</option>
                  <option value="+248">(+248) Seychelles</option>
                  <option value="+232">(+232) Sierra Leone</option>
                  <option value="+65">(+65) Singapore</option>
                  <option value="+421">(+421) Slovakia</option>
                  <option value="+386">(+386) Slovenia</option>
                  <option value="+677">(+677) Solomon Islands</option>
                  <option value="+252">(+252) Somalia</option>
                  <option value="+27">(+27) South Africa</option>
                  <option value="+34">(+34) Spain</option>
                  <option value="+94">(+94) Sri Lanka</option>
                  <option value="+249">(+249) Sudan</option>
                  <option value="+597">(+597) Suriname</option>
                  <option value="+268">(+268) Swaziland</option>
                  <option value="+46">(+46) Sweden</option>
                  <option value="+41">(+41) Switzerland</option>
                  <option value="+963">(+963) Syrian Arab Republic</option>
                  <option value="+886">(+886) Taiwan, Province of China</option>
                  <option value="+992">(+992) Tajikistan</option>
                  <option value="+255">(+255) Tanzania, United Republic of</option>
                  <option value="+66">(+66) Thailand</option>
                  <option value="+228">(+228) Togo</option>
                  <option value="+690">(+690) Tokelau</option>
                  <option value="+676">(+676) Tonga</option>
                  <option value="+1868">(+1868) Trinidad and Tobago</option>
                  <option value="+216">(+216) Tunisia</option>
                  <option value="+90">(+90) Turkey</option>
                  <option value="+993">(+993) Turkmenistan</option>
                  <option value="+688">(+688) Tuvalu</option>
                  <option value="+256">(+256) Uganda</option>
                  <option value="+380">(+380) Ukraine</option>
                  <option value="+971">(+971) United Arab Emirates</option>
                  <option value="+44">(+44) United Kingdom</option>
                  <option value="+1">(+1) United States</option>
                  <option value="+598">(+598) Uruguay</option>
                  <option value="+998">(+998) Uzbekistan</option>
                  <option value="+678">(+678) Vanuatu</option>
                  <option value="+58">(+58) Venezuela</option>
                  <option value="+84">(+84) Vietnam</option>
                  <option value="+1340">(+1340) Virgin Islands, U.S.</option>
                  <option value="+967">(+967) Yemen</option>
                  <option value="+260">(+260) Zambia</option>
                  <option value="+263">(+263) Zimbabwe</option>
                  <option value="+358">(+358) Åland Islands</option>
                </select>
            <input id='ownerPhone' value={userData.ownerPhone} onChange={(e) => setUserData(prevData => ({...prevData, ownerPhone: e.target.value}))} className="border-b-2 border-gray-400 p-2 w-full mr-8" type="text" placeholder='Mobile Number'/>
        </div>

        <form action="submit">
        <div className='mt-5 flex'>
            <input id='ownerName2' value={userData.ownerName2} onChange={(e) => setUserData(prevData => ({...prevData, ownerName2: e.target.value}))} className="border-b-2 border-gray-400 p-2 w-full mr-8" type="text" placeholder='Name (Owner 2)'/>
            <input id='ownerEmail2' value={userData.ownerEmail2} onChange={(e) => setUserData(prevData => ({...prevData, ownerEmail2: e.target.value}))} className="border-b-2 border-gray-400 p-2 w-full mr-8" type="email" placeholder='email'/>
            <select name="countryCode" value={userData.owner2countryCode} onChange={(e) => setUserData(prevData => ({...prevData, owner2countryCode: e.target.value}))} className='border-b-2 border-gray-400 p-2 w-1/6 mr-2 cursor-pointer'>
                  <option value="code">Code</option>
                  <option value="+93">(+93) Afghanistan</option>
                  <option value="+355">(+355) Albania</option>
                  <option value="+213">(+213) Algeria</option>
                  <option value="+376">(+376) Andorra</option>
                  <option value="+244">(+244) Angola</option>
                  <option value="+1264">(+1264) Anguilla</option>
                  <option value="+1268">(+1268) Antigua and Barbuda</option>
                  <option value="+54">(+54) Argentina</option>
                  <option value="+374">(+374) Armenia</option>
                  <option value="+297">(+297) Aruba</option>
                  <option value="+61">(+61) Australia</option>
                  <option value="+43">(+43) Austria</option>
                  <option value="+994">(+994) Azerbaijan</option>
                  <option value="+1242">(+1242) Bahamas</option>
                  <option value="+973">(+973) Bahrain</option>
                  <option value="+880">(+880) Bangladesh</option>
                  <option value="+1246">(+1246) Barbados</option>
                  <option value="+375">(+375) Belarus</option>
                  <option value="+32">(+32) Belgium</option>
                  <option value="+501">(+501) Belize</option>
                  <option value="+229">(+229) Benin</option>
                  <option value="+1441">(+1441) Bermuda</option>
                  <option value="+975">(+975) Bhutan</option>
                  <option value="+591">(+591) Bolivia</option>
                  <option value="+387">(+387) Bosnia and Herzegovina</option>
                  <option value="+267">(+267) Botswana</option>
                  <option value="+55">(+55) Brazil</option>
                  <option value="+246">(+246) British Indian Ocean Territory</option>
                  <option value="+673">(+673) Brunei Darussalam</option>
                  <option value="+359">(+359) Bulgaria</option>
                  <option value="+226">(+226) Burkina Faso</option>
                  <option value="+257">(+257) Burundi</option>
                  <option value="+855">(+855) Cambodia</option>
                  <option value="+237">(+237) Cameroon</option>
                  <option value="+1">(+1) Canada</option>
                  <option value="+238">(+238) Cape Verde</option>
                  <option value="+1345">(+1345) Cayman Islands</option>
                  <option value="+236">(+236) Central African Republic</option>
                  <option value="+235">(+235) Chad</option>
                  <option value="+56">(+56) Chile</option>
                  <option value="+86">(+86) China</option>
                  <option value="+61">(+61) Christmas Island</option>
                  <option value="+672">(+672) Cocos (Keeling) Islands</option>
                  <option value="+57">(+57) Colombia</option>
                  <option value="+269">(+269) Comoros</option>
                  <option value="+242">(+242) Congo</option>
                  <option value="+243">(+243) Congo, the Democratic Republic of the</option>
                  <option value="+682">(+682) Cook Islands</option>
                  <option value="+506">(+506) Costa Rica</option>
                  <option value="+225">(+225) Cote D'Ivoire</option>
                  <option value="+385">(+385) Croatia</option>
                  <option value="+53">(+53) Cuba</option>
                  <option value="+357">(+357) Cyprus</option>
                  <option value="+420">(+420) Czech Republic</option>
                  <option value="+45">(+45) Denmark</option>
                  <option value="+253">(+253) Djibouti</option>
                  <option value="+1767">(+1767) Dominica</option>
                  <option value="+1809">(+1809) Dominican Republic</option>
                  <option value="+593">(+593) Ecuador</option>
                  <option value="+20">(+20) Egypt</option>
                  <option value="+503">(+503) El Salvador</option>
                  <option value="+240">(+240) Equatorial Guinea</option>
                  <option value="+291">(+291) Eritrea</option>
                  <option value="+372">(+372) Estonia</option>
                  <option value="+251">(+251) Ethiopia</option>
                  <option value="+500">(+500) Falkland Islands (Malvinas)</option>
                  <option value="+298">(+298) Faroe Islands</option>
                  <option value="+679">(+679) Fiji</option>
                  <option value="+358">(+358) Finland</option>
                  <option value="+33">(+33) France</option>
                  <option value="+594">(+594) French Guiana</option>
                  <option value="+689">(+689) French Polynesia</option>
                  <option value="+241">(+241) Gabon</option>
                  <option value="+220">(+220) Gambia</option>
                  <option value="+995">(+995) Georgia</option>
                  <option value="+49">(+49) Germany</option>
                  <option value="+233">(+233) Ghana</option>
                  <option value="+350">(+350) Gibraltar</option>
                  <option value="+30">(+30) Greece</option>
                  <option value="+299">(+299) Greenland</option>
                  <option value="+1473">(+1473) Grenada</option>
                  <option value="+590">(+590) Guadeloupe</option>
                  <option value="+1671">(+1671) Guam</option>
                  <option value="+502">(+502) Guatemala</option>
                  <option value="+224">(+224) Guinea</option>
                  <option value="+245">(+245) Guinea-Bissau</option>
                  <option value="+592">(+592) Guyana</option>
                  <option value="+509">(+509) Haiti</option>
                  <option value="+504">(+504) Honduras</option>
                  <option value="+852">(+852) Hong Kong</option>
                  <option value="+36">(+36) Hungary</option>
                  <option value="+354">(+354) Iceland</option>
                  <option value="+91">(+91) India</option>
                  <option value="+62">(+62) Indonesia</option>
                  <option value="+98">(+98) Iran, Islamic Republic of</option>
                  <option value="+964">(+964) Iraq</option>
                  <option value="+353">(+353) Ireland</option>
                  <option value="+972">(+972) Israel</option>
                  <option value="+39">(+39) Italy</option>
                  <option value="+1876">(+1876) Jamaica</option>
                  <option value="+81">(+81) Japan</option>
                  <option value="+962">(+962) Jordan</option>
                  <option value="+7">(+7) Kazakhstan</option>
                  <option value="+254">(+254) Kenya</option>
                  <option value="+686">(+686) Kiribati</option>
                  <option value="+850">(+850) Korea, Democratic People's Republic of</option>
                  <option value="+82">(+82) Korea, Republic of</option>
                  <option value="+965">(+965) Kuwait</option>
                  <option value="+996">(+996) Kyrgyzstan</option>
                  <option value="+856">(+856) Lao People's Democratic Republic</option>
                  <option value="+371">(+371) Latvia</option>
                  <option value="+961">(+961) Lebanon</option>
                  <option value="+266">(+266) Lesotho</option>
                  <option value="+231">(+231) Liberia</option>
                  <option value="+218">(+218) Libya</option>
                  <option value="+423">(+423) Liechtenstein</option>
                  <option value="+370">(+370) Lithuania</option>
                  <option value="+352">(+352) Luxembourg</option>
                  <option value="+853">(+853) Macao</option>
                  <option value="+389">(+389) Macedonia, the Former Yugoslav Republic of</option>
                  <option value="+261">(+261) Madagascar</option>
                  <option value="+265">(+265) Malawi</option>
                  <option value="+60">(+60) Malaysia</option>
                  <option value="+960">(+960) Maldives</option>
                  <option value="+223">(+223) Mali</option>
                  <option value="+356">(+356) Malta</option>
                  <option value="+692">(+692) Marshall Islands</option>
                  <option value="+596">(+596) Martinique</option>
                  <option value="+222">(+222) Mauritania</option>
                  <option value="+230">(+230) Mauritius</option>
                  <option value="+52">(+52) Mexico</option>
                  <option value="+691">(+691) Micronesia, Federated States of</option>
                  <option value="+373">(+373) Moldova, Republic of</option>
                  <option value="+377">(+377) Monaco</option>
                  <option value="+976">(+976) Mongolia</option>
                  <option value="+382">(+382) Montenegro</option>
                  <option value="+1664">(+1664) Montserrat</option>
                  <option value="+212">(+212) Morocco</option>
                  <option value="+258">(+258) Mozambique</option>
                  <option value="+95">(+95) Myanmar</option>
                  <option value="+264">(+264) Namibia</option>
                  <option value="+674">(+674) Nauru</option>
                  <option value="+977">(+977) Nepal</option>
                  <option value="+31">(+31) Netherlands</option>
                  <option value="+599">(+599) Netherlands Antilles</option>
                  <option value="+687">(+687) New Caledonia</option>
                  <option value="+64">(+64) New Zealand</option>
                  <option value="+505">(+505) Nicaragua</option>
                  <option value="+227">(+227) Niger</option>
                  <option value="+234">(+234) Nigeria</option>
                  <option value="+683">(+683) Niue</option>
                  <option value="+672">(+672) Norfolk Island</option>
                  <option value="+47">(+47) Norway</option>
                  <option value="+968">(+968) Oman</option>
                  <option value="+92">(+92) Pakistan</option>
                  <option value="+680">(+680) Palau</option>
                  <option value="+507">(+507) Panama</option>
                  <option value="+675">(+675) Papua New Guinea</option>
                  <option value="+595">(+595) Paraguay</option>
                  <option value="+51">(+51) Peru</option>
                  <option value="+63">(+63) Philippines</option>
                  <option value="+48">(+48) Poland</option>
                  <option value="+351">(+351) Portugal</option>
                  <option value="+974">(+974) Qatar</option>
                  <option value="+40">(+40) Romania</option>
                  <option value="+7">(+7) Russian Federation</option>
                  <option value="+250">(+250) Rwanda</option>
                  <option value="+1869">(+1869) Saint Kitts and Nevis</option>
                  <option value="+1758">(+1758) Saint Lucia</option>
                  <option value="+1784">(+1784) Saint Vincent and the Grenadines</option>
                  <option value="+684">(+684) Samoa</option>
                  <option value="+378">(+378) San Marino</option>
                  <option value="+239">(+239) Sao Tome and Principe</option>
                  <option value="+221">(+221) Senegal</option>
                  <option value="+381">(+381) Serbia</option>
                  <option value="+248">(+248) Seychelles</option>
                  <option value="+232">(+232) Sierra Leone</option>
                  <option value="+65">(+65) Singapore</option>
                  <option value="+421">(+421) Slovakia</option>
                  <option value="+386">(+386) Slovenia</option>
                  <option value="+677">(+677) Solomon Islands</option>
                  <option value="+252">(+252) Somalia</option>
                  <option value="+27">(+27) South Africa</option>
                  <option value="+34">(+34) Spain</option>
                  <option value="+94">(+94) Sri Lanka</option>
                  <option value="+249">(+249) Sudan</option>
                  <option value="+597">(+597) Suriname</option>
                  <option value="+268">(+268) Swaziland</option>
                  <option value="+46">(+46) Sweden</option>
                  <option value="+41">(+41) Switzerland</option>
                  <option value="+963">(+963) Syrian Arab Republic</option>
                  <option value="+886">(+886) Taiwan, Province of China</option>
                  <option value="+992">(+992) Tajikistan</option>
                  <option value="+255">(+255) Tanzania, United Republic of</option>
                  <option value="+66">(+66) Thailand</option>
                  <option value="+228">(+228) Togo</option>
                  <option value="+690">(+690) Tokelau</option>
                  <option value="+676">(+676) Tonga</option>
                  <option value="+1868">(+1868) Trinidad and Tobago</option>
                  <option value="+216">(+216) Tunisia</option>
                  <option value="+90">(+90) Turkey</option>
                  <option value="+993">(+993) Turkmenistan</option>
                  <option value="+688">(+688) Tuvalu</option>
                  <option value="+256">(+256) Uganda</option>
                  <option value="+380">(+380) Ukraine</option>
                  <option value="+971">(+971) United Arab Emirates</option>
                  <option value="+44">(+44) United Kingdom</option>
                  <option value="+1">(+1) United States</option>
                  <option value="+598">(+598) Uruguay</option>
                  <option value="+998">(+998) Uzbekistan</option>
                  <option value="+678">(+678) Vanuatu</option>
                  <option value="+58">(+58) Venezuela</option>
                  <option value="+84">(+84) Vietnam</option>
                  <option value="+1340">(+1340) Virgin Islands, U.S.</option>
                  <option value="+967">(+967) Yemen</option>
                  <option value="+260">(+260) Zambia</option>
                  <option value="+263">(+263) Zimbabwe</option>
                  <option value="+358">(+358) Åland Islands</option>
                </select>
            <input id='ownerPhone2' value={userData.ownerPhone2} onChange={(e) => setUserData(prevData => ({...prevData, ownerPhone2: e.target.value}))} className="border-b-2 border-gray-400 p-2 w-full mr-8" type="text" placeholder='Mobile Number'/>
        </div>

        <div className='mt-5 flex'>
            <input id='ownerName3' value={userData.ownerName3} onChange={(e) => setUserData(prevData => ({...prevData, ownerName3: e.target.value}))} className="border-b-2 border-gray-400 p-2 w-full mr-8" type="text" placeholder='Name (Owner 3)'/>
            <input id='ownerEmail3' value={userData.ownerEmail3} onChange={(e) => setUserData(prevData => ({...prevData, ownerEmail3: e.target.value}))} className="border-b-2 border-gray-400 p-2 w-full mr-8" type="email" placeholder='email'/>
            <select name="countryCode" value={userData.owner3countryCode} onChange={(e) => setUserData(prevData => ({...prevData, owner3countryCode: e.target.value}))} className='border-b-2 border-gray-400 p-2 w-1/6 mr-2 cursor-pointer'>
                  <option value="code">Code</option>
                  <option value="+93">(+93) Afghanistan</option>
                  <option value="+355">(+355) Albania</option>
                  <option value="+213">(+213) Algeria</option>
                  <option value="+376">(+376) Andorra</option>
                  <option value="+244">(+244) Angola</option>
                  <option value="+1264">(+1264) Anguilla</option>
                  <option value="+1268">(+1268) Antigua and Barbuda</option>
                  <option value="+54">(+54) Argentina</option>
                  <option value="+374">(+374) Armenia</option>
                  <option value="+297">(+297) Aruba</option>
                  <option value="+61">(+61) Australia</option>
                  <option value="+43">(+43) Austria</option>
                  <option value="+994">(+994) Azerbaijan</option>
                  <option value="+1242">(+1242) Bahamas</option>
                  <option value="+973">(+973) Bahrain</option>
                  <option value="+880">(+880) Bangladesh</option>
                  <option value="+1246">(+1246) Barbados</option>
                  <option value="+375">(+375) Belarus</option>
                  <option value="+32">(+32) Belgium</option>
                  <option value="+501">(+501) Belize</option>
                  <option value="+229">(+229) Benin</option>
                  <option value="+1441">(+1441) Bermuda</option>
                  <option value="+975">(+975) Bhutan</option>
                  <option value="+591">(+591) Bolivia</option>
                  <option value="+387">(+387) Bosnia and Herzegovina</option>
                  <option value="+267">(+267) Botswana</option>
                  <option value="+55">(+55) Brazil</option>
                  <option value="+246">(+246) British Indian Ocean Territory</option>
                  <option value="+673">(+673) Brunei Darussalam</option>
                  <option value="+359">(+359) Bulgaria</option>
                  <option value="+226">(+226) Burkina Faso</option>
                  <option value="+257">(+257) Burundi</option>
                  <option value="+855">(+855) Cambodia</option>
                  <option value="+237">(+237) Cameroon</option>
                  <option value="+1">(+1) Canada</option>
                  <option value="+238">(+238) Cape Verde</option>
                  <option value="+1345">(+1345) Cayman Islands</option>
                  <option value="+236">(+236) Central African Republic</option>
                  <option value="+235">(+235) Chad</option>
                  <option value="+56">(+56) Chile</option>
                  <option value="+86">(+86) China</option>
                  <option value="+61">(+61) Christmas Island</option>
                  <option value="+672">(+672) Cocos (Keeling) Islands</option>
                  <option value="+57">(+57) Colombia</option>
                  <option value="+269">(+269) Comoros</option>
                  <option value="+242">(+242) Congo</option>
                  <option value="+243">(+243) Congo, the Democratic Republic of the</option>
                  <option value="+682">(+682) Cook Islands</option>
                  <option value="+506">(+506) Costa Rica</option>
                  <option value="+225">(+225) Cote D'Ivoire</option>
                  <option value="+385">(+385) Croatia</option>
                  <option value="+53">(+53) Cuba</option>
                  <option value="+357">(+357) Cyprus</option>
                  <option value="+420">(+420) Czech Republic</option>
                  <option value="+45">(+45) Denmark</option>
                  <option value="+253">(+253) Djibouti</option>
                  <option value="+1767">(+1767) Dominica</option>
                  <option value="+1809">(+1809) Dominican Republic</option>
                  <option value="+593">(+593) Ecuador</option>
                  <option value="+20">(+20) Egypt</option>
                  <option value="+503">(+503) El Salvador</option>
                  <option value="+240">(+240) Equatorial Guinea</option>
                  <option value="+291">(+291) Eritrea</option>
                  <option value="+372">(+372) Estonia</option>
                  <option value="+251">(+251) Ethiopia</option>
                  <option value="+500">(+500) Falkland Islands (Malvinas)</option>
                  <option value="+298">(+298) Faroe Islands</option>
                  <option value="+679">(+679) Fiji</option>
                  <option value="+358">(+358) Finland</option>
                  <option value="+33">(+33) France</option>
                  <option value="+594">(+594) French Guiana</option>
                  <option value="+689">(+689) French Polynesia</option>
                  <option value="+241">(+241) Gabon</option>
                  <option value="+220">(+220) Gambia</option>
                  <option value="+995">(+995) Georgia</option>
                  <option value="+49">(+49) Germany</option>
                  <option value="+233">(+233) Ghana</option>
                  <option value="+350">(+350) Gibraltar</option>
                  <option value="+30">(+30) Greece</option>
                  <option value="+299">(+299) Greenland</option>
                  <option value="+1473">(+1473) Grenada</option>
                  <option value="+590">(+590) Guadeloupe</option>
                  <option value="+1671">(+1671) Guam</option>
                  <option value="+502">(+502) Guatemala</option>
                  <option value="+224">(+224) Guinea</option>
                  <option value="+245">(+245) Guinea-Bissau</option>
                  <option value="+592">(+592) Guyana</option>
                  <option value="+509">(+509) Haiti</option>
                  <option value="+504">(+504) Honduras</option>
                  <option value="+852">(+852) Hong Kong</option>
                  <option value="+36">(+36) Hungary</option>
                  <option value="+354">(+354) Iceland</option>
                  <option value="+91">(+91) India</option>
                  <option value="+62">(+62) Indonesia</option>
                  <option value="+98">(+98) Iran, Islamic Republic of</option>
                  <option value="+964">(+964) Iraq</option>
                  <option value="+353">(+353) Ireland</option>
                  <option value="+972">(+972) Israel</option>
                  <option value="+39">(+39) Italy</option>
                  <option value="+1876">(+1876) Jamaica</option>
                  <option value="+81">(+81) Japan</option>
                  <option value="+962">(+962) Jordan</option>
                  <option value="+7">(+7) Kazakhstan</option>
                  <option value="+254">(+254) Kenya</option>
                  <option value="+686">(+686) Kiribati</option>
                  <option value="+850">(+850) Korea, Democratic People's Republic of</option>
                  <option value="+82">(+82) Korea, Republic of</option>
                  <option value="+965">(+965) Kuwait</option>
                  <option value="+996">(+996) Kyrgyzstan</option>
                  <option value="+856">(+856) Lao People's Democratic Republic</option>
                  <option value="+371">(+371) Latvia</option>
                  <option value="+961">(+961) Lebanon</option>
                  <option value="+266">(+266) Lesotho</option>
                  <option value="+231">(+231) Liberia</option>
                  <option value="+218">(+218) Libya</option>
                  <option value="+423">(+423) Liechtenstein</option>
                  <option value="+370">(+370) Lithuania</option>
                  <option value="+352">(+352) Luxembourg</option>
                  <option value="+853">(+853) Macao</option>
                  <option value="+389">(+389) Macedonia, the Former Yugoslav Republic of</option>
                  <option value="+261">(+261) Madagascar</option>
                  <option value="+265">(+265) Malawi</option>
                  <option value="+60">(+60) Malaysia</option>
                  <option value="+960">(+960) Maldives</option>
                  <option value="+223">(+223) Mali</option>
                  <option value="+356">(+356) Malta</option>
                  <option value="+692">(+692) Marshall Islands</option>
                  <option value="+596">(+596) Martinique</option>
                  <option value="+222">(+222) Mauritania</option>
                  <option value="+230">(+230) Mauritius</option>
                  <option value="+52">(+52) Mexico</option>
                  <option value="+691">(+691) Micronesia, Federated States of</option>
                  <option value="+373">(+373) Moldova, Republic of</option>
                  <option value="+377">(+377) Monaco</option>
                  <option value="+976">(+976) Mongolia</option>
                  <option value="+382">(+382) Montenegro</option>
                  <option value="+1664">(+1664) Montserrat</option>
                  <option value="+212">(+212) Morocco</option>
                  <option value="+258">(+258) Mozambique</option>
                  <option value="+95">(+95) Myanmar</option>
                  <option value="+264">(+264) Namibia</option>
                  <option value="+674">(+674) Nauru</option>
                  <option value="+977">(+977) Nepal</option>
                  <option value="+31">(+31) Netherlands</option>
                  <option value="+599">(+599) Netherlands Antilles</option>
                  <option value="+687">(+687) New Caledonia</option>
                  <option value="+64">(+64) New Zealand</option>
                  <option value="+505">(+505) Nicaragua</option>
                  <option value="+227">(+227) Niger</option>
                  <option value="+234">(+234) Nigeria</option>
                  <option value="+683">(+683) Niue</option>
                  <option value="+672">(+672) Norfolk Island</option>
                  <option value="+47">(+47) Norway</option>
                  <option value="+968">(+968) Oman</option>
                  <option value="+92">(+92) Pakistan</option>
                  <option value="+680">(+680) Palau</option>
                  <option value="+507">(+507) Panama</option>
                  <option value="+675">(+675) Papua New Guinea</option>
                  <option value="+595">(+595) Paraguay</option>
                  <option value="+51">(+51) Peru</option>
                  <option value="+63">(+63) Philippines</option>
                  <option value="+48">(+48) Poland</option>
                  <option value="+351">(+351) Portugal</option>
                  <option value="+974">(+974) Qatar</option>
                  <option value="+40">(+40) Romania</option>
                  <option value="+7">(+7) Russian Federation</option>
                  <option value="+250">(+250) Rwanda</option>
                  <option value="+1869">(+1869) Saint Kitts and Nevis</option>
                  <option value="+1758">(+1758) Saint Lucia</option>
                  <option value="+1784">(+1784) Saint Vincent and the Grenadines</option>
                  <option value="+684">(+684) Samoa</option>
                  <option value="+378">(+378) San Marino</option>
                  <option value="+239">(+239) Sao Tome and Principe</option>
                  <option value="+221">(+221) Senegal</option>
                  <option value="+381">(+381) Serbia</option>
                  <option value="+248">(+248) Seychelles</option>
                  <option value="+232">(+232) Sierra Leone</option>
                  <option value="+65">(+65) Singapore</option>
                  <option value="+421">(+421) Slovakia</option>
                  <option value="+386">(+386) Slovenia</option>
                  <option value="+677">(+677) Solomon Islands</option>
                  <option value="+252">(+252) Somalia</option>
                  <option value="+27">(+27) South Africa</option>
                  <option value="+34">(+34) Spain</option>
                  <option value="+94">(+94) Sri Lanka</option>
                  <option value="+249">(+249) Sudan</option>
                  <option value="+597">(+597) Suriname</option>
                  <option value="+268">(+268) Swaziland</option>
                  <option value="+46">(+46) Sweden</option>
                  <option value="+41">(+41) Switzerland</option>
                  <option value="+963">(+963) Syrian Arab Republic</option>
                  <option value="+886">(+886) Taiwan, Province of China</option>
                  <option value="+992">(+992) Tajikistan</option>
                  <option value="+255">(+255) Tanzania, United Republic of</option>
                  <option value="+66">(+66) Thailand</option>
                  <option value="+228">(+228) Togo</option>
                  <option value="+690">(+690) Tokelau</option>
                  <option value="+676">(+676) Tonga</option>
                  <option value="+1868">(+1868) Trinidad and Tobago</option>
                  <option value="+216">(+216) Tunisia</option>
                  <option value="+90">(+90) Turkey</option>
                  <option value="+993">(+993) Turkmenistan</option>
                  <option value="+688">(+688) Tuvalu</option>
                  <option value="+256">(+256) Uganda</option>
                  <option value="+380">(+380) Ukraine</option>
                  <option value="+971">(+971) United Arab Emirates</option>
                  <option value="+44">(+44) United Kingdom</option>
                  <option value="+1">(+1) United States</option>
                  <option value="+598">(+598) Uruguay</option>
                  <option value="+998">(+998) Uzbekistan</option>
                  <option value="+678">(+678) Vanuatu</option>
                  <option value="+58">(+58) Venezuela</option>
                  <option value="+84">(+84) Vietnam</option>
                  <option value="+1340">(+1340) Virgin Islands, U.S.</option>
                  <option value="+967">(+967) Yemen</option>
                  <option value="+260">(+260) Zambia</option>
                  <option value="+263">(+263) Zimbabwe</option>
                  <option value="+358">(+358) Åland Islands</option>
                </select>
            <input id='ownerPhone3' value={userData.ownerPhone3} onChange={(e) => setUserData(prevData => ({...prevData, ownerPhone3: e.target.value}))} className="border-b-2 border-gray-400 p-2 w-full mr-8" type="text" placeholder='Mobile Number'/>
        </div>
        </form>
        </div>
        <div className='text-center'>
            <button className='mt-12 p-2 bg-pink-600 text-white px-6 rounded-sm hover:bg-pink-900' onClick={updateData}>Save</button>
        </div> 
        </div>
    </>
)}
</>

  )
};
export default Superuserhome;