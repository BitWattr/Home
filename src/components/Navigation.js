import React from 'react';
import { NavLink, Link } from 'react-router-dom'; // Import Link as well
import { scroller } from 'react-scroll'; // Import scroller

function Navigation({ isOpen, closeSidebar }) {
  const scrollToSection = (sectionId) => {
    closeSidebar(); // Close sidebar after clicking
    scroller.scrollTo(sectionId, {
      duration: 800, // Duration of the scroll animation in milliseconds
      delay: 0,
      smooth: 'easeInOutQuart' // Type of easing for the scroll animation
    });
  };

  return (
    <nav>
      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        {/* Use Link and onClick for scrolling to sections on the home page */}
        <li><Link to="/" onClick={() => scrollToSection('home-section')}>Home</Link></li>
        <li><Link to="/" onClick={() => scrollToSection('about-section')}>About</Link></li>
        <li><Link to="/" onClick={() => scrollToSection('projects-section')}>Projects</Link></li>
        <li><Link to="/" onClick={() => scrollToSection('contact-section')}>Contact</Link></li>
        
        {/* Keep NavLink for the separate Donate page */}
        <li>
          <NavLink
            to="/donate"
            className={({ isActive }) => `donate-button ${isActive ? "active" : ""}`}
            onClick={closeSidebar}
            style={{
              background: 'linear-gradient(45deg, #FF6B6B, #556270)',
              color: 'white',
              padding: '8px 15px',
              borderRadius: '20px',
              textDecoration: 'none',
              fontWeight: 'bold',
              transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
              display: 'inline-block',
              marginTop: '10px'
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
    </nav>
  );
}

export default Navigation;