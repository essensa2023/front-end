import React from 'react';
import './navbar.css';
import logo from "../images/logo-nav.png";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar flex justify-between align-center px-16 py-128 w-full h-20 bg-custom-light-green4">
        <img src={logo} className="ml-64"/>
        <ul className="navbar-list flex">
          <div className='flex mr-32'>
            <li><a href="#">Services</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">About Us</a></li>
          </div>  
          <div className='flex mr-96'>
            <li className='login'><a href="/login">Log In</a></li>
            <li><button className="get_in_touch-button">Get In Touch</button></li>
          </div>
        </ul>
      </nav>
    </div>

  );
}

export default Navbar;
