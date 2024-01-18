import React from 'react';
import './Home.css';

import logo2 from '../Assets/logo2.png'
import locmark from '../Assets/locmark.png';
import searchicon from '../Assets/searchicon.png';

function Home() {
  return (
    <>
    <div className="home">
      <nav className='navbar'>
        <div className="navbarimg">
          <a href="/"><img src={logo2} alt="" /></a>
        </div>
        <div className="navlabels">
          <ul>
            <ul><a href="./about">About</a></ul>
            <ul><a href="./services">Services</a></ul>
            <ul><a href="./contact">Contact</a></ul>
            <a className='logih' href="./Login">Login</a>
          </ul>
        </div>
      </nav>
      <div className="main">
        <div className="htags">
          <h1>Structural Health <br /></h1>
          <h2>Monitoring Dashboard</h2>
        </div>
        {/* <div className="search-container">
          <div className="searchbar">
            <img className='searchicon' src={searchicon} alt="" />
            <input type="text" placeholder='Search' />
          </div>
          <div className='search-dropdown'>
          <img className='locmark' src={locmark} alt="" />
            <select className="BridgeDropdown" name="Bridges">
              <option value="X">Select Bridge</option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
              <option value="E">E</option>
            </select>
          </div>
        </div> */}
      </div>
    </div>
    </>
  )
}

export default Home;
