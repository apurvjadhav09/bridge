import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ChangePassword from './components/Pages/ChangePassword';
import Masterhome from './components/Pages/Masterhome';
import Superuserhome from './components/Pages/Superuserhome';
import ResetPassword from './components/Pages/ResetPassword';
import Bridgeadmin from './components/Pages/Bridgeadmin';
import Home from './components/Pages/Home';
import BridgeForm from './components/Pages/BridgeForm';
import SensorForm from './components/Pages/sensorform';
import Addexcelfile from './components/Pages/Addexcelfile';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Pages/Login';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/newuser/resetpassword" element={<ResetPassword />} />
      <Route path="/newuser/login" element={<Login />} />
      <Route path="/changepassword" element={<ChangePassword />} />
      <Route path="/home" element={<Home />} />
      <Route path="/home/bridgeform" element={<BridgeForm />} />
      <Route path="/home/bridgeform/sensorform" element={<SensorForm/>} />
      <Route path="/home/Addexcel" element={<Addexcelfile/>} />
      <Route path="/home/dashboard" element={<Superuserhome />} />
      <Route path="/masterhome" element={<Masterhome />} />
      <Route path="/bridgeadmin" element={<Bridgeadmin />} />
    </Routes>
  </Router>,
);

reportWebVitals();
