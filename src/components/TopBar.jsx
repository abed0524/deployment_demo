import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/TopBar.css';

const TopBar = () => {
  const handleCall = () => {
    const phoneNumber = "0525399761"; // Replace with your actual phone number
    window.open(`tel:${phoneNumber}`, "_self");
  };

  return (
    <div className="top-bar">
      <div className="left-buttons">
        <button onClick={handleCall}>📞</button>
      </div>
      <div className="logo-container">
        <img
          src="/assets/logo_tachbura.png" // Correct path
          alt="Road Safety Logo"
          className="roadSafety"
        />
        <p className="sentence">מורשה מטעם משרד התחבורה</p>
        <Link to="/"> {/* Wrap the logo image in a Link */}
          <img 
            src="/assets/hasan-logo.png" // Correct path
            className="logo" 
            alt="Hasan Logo" 
          />
        </Link>
      </div>
    </div>
  );
};

export default TopBar;
