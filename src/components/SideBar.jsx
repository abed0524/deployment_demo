import React from 'react';
import '../styles/SideBar.css';

const SideBar = () => {
  return (
    <div className="side-bar">
      {/* Sidebar content here */}
      <h2>תפריט</h2>
      <ul>
        <li><a href="/">ראשי</a></li>
        <li><a href="/electricity-and-diagnosis">חשמל ואבחון</a></li>
        <li><a href="/conditioning">מיזוג</a></li>
        <li><a href="/mechanics">מכונאות</a></li>
        <li><a href="/lab">מעבדה</a></li>
        <li><a href="/hybrids">רכבי הייברד (מערכת כיול רדאר)</a></li>
        {/* Add more links or content as needed */}
      </ul>
    </div>
  );
};

export default SideBar;
