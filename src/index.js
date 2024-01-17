import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './components/Pages/Home';
import ChangePassword from './components/Pages/ChangePassword';
import Masterhome from './components/Pages/Masterhome';
import Superuserhome from './components/Pages/Superuserhome';
import ResetPassword from './components/Pages/ResetPassword';

import{
  createBrowserRouter,
  RouterProvider,
  // Route,
} from "react-router-dom"

const router = createBrowserRouter([
  {
    path: "/login",
    element: <App/>,
  },
  {
    path: "/ChangePassword",
    element: <ChangePassword/>,
  },
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/contact",
    element: <contact/>,
  },
  {
    path: "/services",
    element: <services/>,
  },
  {
    path: "/about",
    element: <about/>,
  },
  {
    path: "/masterhome",
    element: <Masterhome/>,
  },
  {
    path: "/Superuserhome",
    element: <Superuserhome/>,
  },
  {
    path: "/ResetPassword",
    element: <ResetPassword/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router} />
);

reportWebVitals();
