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
        {/* Add the new Donate link */}
        <li>
          <NavLink
            to="/donate"
            className={({ isActive }) => `donate-button ${isActive ? "active" : ""}`}
            onClick={closeSidebar}
            style={{
              background: 'linear-gradient(45deg, #FF6B6B, #556270)', // Colorful gradient
              color: 'white',
              padding: '8px 15px',
              borderRadius: '20px',
              textDecoration: 'none',
              fontWeight: 'bold',
              transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
              display: 'inline-block', // Ensure padding works
              marginTop: '10px' // Space it from other links in sidebar
            }}
            onMouseOver={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.3)';
            }}
            onMouseOut={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
            }}
          >
            Donate ❤️
          </NavLink>
        </li>
      </ul>
      {/* Overlay is now in App.js */}
    </nav>
  );
}

export default Navigation;
