import React from 'react';
import './navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
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
