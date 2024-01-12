import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './components/Pages/Home';
import ChangePassword from './components/Pages/ChangePassword';

import{
  createBrowserRouter,
  RouterProvider,
  // Route,
} from "react-router-dom"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/ChangePassword",
    element: <ChangePassword/>,
  },
  {
    path: "/home",
    element: <Home/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router} />
);

reportWebVitals();
