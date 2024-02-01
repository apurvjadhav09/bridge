import React from 'react';
import './tailwind.css';


function Bridgeadmin() {
  return (
    <>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet"/>
    <div className="bg-blue-500 text-white p-4">
            <li className="flex justify-start list-none">
                <ul><button>&#x2630; MENU</button></ul>
                <ul className="pl-96 ml-48">Bridge Admin Dashboard</ul>
                <ul className="pl-96 ml-48">User</ul>
            </li>
        </div>
        <div id='kinda' className="flex bg-cover bg-no-repeat bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500">
            <div className="one p-24 font-semibold w-2/3 text-white">
                <h3 className="text-2xl">Welcome to</h3>
                <h1 className="text-5xl">Structural Health Monitoring,</h1><br /><br />
                <h1 className="text-4xl">Admin Dashboard</h1><br />
                <p className="w-2/3">The Admin Dashboard serves as the central hub for overseeing and managing critical roles within the bridge 
                infrastructure ecosystem.</p>
                
                <button>Click to Register</button>
            </div>
            <div>
                <img className="w-16 ml-96 mt-2" src="../Assets/" alt=""/>
            </div>
        </div>
    </>
  )
}

export default Bridgeadmin;