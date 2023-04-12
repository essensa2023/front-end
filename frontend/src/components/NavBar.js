import React from 'react';
import './navbar.css';
import logo from "../images/logo-nav.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo} />
      <ul className="navbar-list">
        <li><a href="#">Services</a></li>
        <li><a href="#">Pricing</a></li>
        <li><a href="#">About Us</a></li>
        <li className='login'><a href="#">Log In</a></li>
        <li><button className="get_in_touch-button">Get In Touch</button></li>
      </ul>
    </nav>
  );
}

export default Navbar;
