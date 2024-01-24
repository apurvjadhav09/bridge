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

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/home/bridgeform" element={<BridgeForm />} />
      <Route path="/newuser/resetpassword" element={<ResetPassword />} />
      <Route path="/home" element={<Home />} />
      <Route path="/superadmin_home/dashboard" element={<Superuserhome />} />
      <Route path="/changepassword" element={<ChangePassword />} />
      <Route path="/masterhome" element={<Masterhome />} />
      <Route path="/superuserhome" element={<Superuserhome />} />
      <Route path="/bridgeadmin" element={<Bridgeadmin />} />
    </Routes>
  </Router>,
);

reportWebVitals();
