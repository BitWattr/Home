import React from 'react';

function Header({ toggleSidebar }) { // Accept toggleSidebar as a prop
  return (
    <header>
      <h1>BitWattr</h1>
      <div className="hamburger-menu" onClick={toggleSidebar}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </header>
  );
}

export default Header;