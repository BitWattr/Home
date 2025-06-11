import React from 'react';
import { NavLink } from 'react-router-dom';

// Accept isOpen and closeSidebar as props
function Navigation({ isOpen, closeSidebar }) {
  return (
    <nav>
      {/* The hamburger button is now in Header.js */}
      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        <li><NavLink to="/" className={({ isActive }) => isActive ? "active" : ""} onClick={closeSidebar}>Home</NavLink></li>
        <li><NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""} onClick={closeSidebar}>About</NavLink></li>
        <li><NavLink to="/projects" className={({ isActive }) => isActive ? "active" : ""} onClick={closeSidebar}>Projects</NavLink></li>
        <li><NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""} onClick={closeSidebar}>Contact</NavLink></li>
      </ul>
      {/* Overlay is now in App.js */}
    </nav>
  );
}

export default Navigation;