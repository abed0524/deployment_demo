import React from 'react';
import '../styles/SideBar.css';

const SideBar = () => {
  return (
    <div className="side-bar">
      {/* Sidebar content here */}
      <h2>תפריט</h2>
      <ul>
        <li><Link to="/">ראשי</Link></li>
        <li><Link to="/electricity-and-diagnosis">חשמל ואבחון</Link></li>
        <li><Link to="/conditioning">מיזוג</Link></li>
        <li><Link to="/mechanics">מכונאות</Link></li>
        <li><Link to="/lab">מעבדה</Link></li>
        <li><Link to="/hybrids">רכבי הייברד (מערכת כיול רדאר)</Link></li>
        {/* Add more links or content as needed */}
      </ul>
    </div>
  );
};

export default SideBar;
