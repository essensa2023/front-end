import React from 'react';
import './navbar.css';
import logo from "../images/logo-nav.png";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar flex justify-between align-center px-16 py-128 w-full h-20 bg-custom-light-green4">
        <img src={logo} />
        <ul className="navbar-list">
          <li><a href="#">Services</a></li>
          <li><a href="#">Pricing</a></li>
          <li><a href="#">About Us</a></li>
          <li className='login'><a href="/login">Log In</a></li>
          <li><button className="get_in_touch-button">Get In Touch</button></li>
        </ul>
      </nav>
    </div>

  );
}

export default Navbar;
