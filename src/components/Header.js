import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

function Header({ toggleSidebar, isDarkMode, toggleDarkMode }) { // Accept toggleSidebar, isDarkMode, and toggleDarkMode as props
  return (
    <header className="header"> {/* Add a class for potential styling */}
      <h1 className="logo">BitWattr</h1> {/* Add a class for potential styling */}
      <div className="header-right"> {/* Container for dark mode and hamburger */}
        <button onClick={toggleDarkMode} className="dark-mode-toggle">
          <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} />
        </button>
        <div className="hamburger-menu" onClick={toggleSidebar}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
    </header>
  );
}

export default Header;
