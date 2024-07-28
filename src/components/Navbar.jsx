import React, { useState } from 'react';
import './navbar-style.css';
import logo from '../assets/logo.png';

const Navbar = ({ list }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Pul's Cafe" className="logo-image" />
        <span className="span-logo">Pul's Cafe</span>
      </div>
      <button className="hamburger" onClick={toggleMenu}>
        &#9776;
      </button>
      <ul className={`navbar-menu ${isOpen ? 'open' : ''}`}>
        {list.map((item, index) => (
          <li key={index} className="menu-item">{item}</li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
