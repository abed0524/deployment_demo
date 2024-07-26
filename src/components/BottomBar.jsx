import React from "react";
import { Link } from "react-router-dom";
import "../styles/BottomBar.css";

const BottomBar = () => {
  const handleCall = () => {
    const phoneNumber = "0525399761"; // Replace with your actual phone number
    window.open(`tel:${phoneNumber}`, "_self");
  };

  const openLocation = () => {
    const latitude = 32.252537; // Replace with your actual latitude
    const longitude = 34.993998; // Replace with your actual longitude
    const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`;
    const wazeUrl = `https://waze.com/ul?ll=${latitude},${longitude}&navigate=yes`;

    const choice = window.confirm(
      "האם תרצה לפתוח ב-Waze? לחץ על 'cancel' כדי לפתוח במפות Google."
    );
    window.open(choice ? wazeUrl : googleMapsUrl, "_blank");
  };

  return (
    <div className="bottom-bar">
      <div className="bottom-bar-section">
        <img
          src="/assets/hasan-logo.png"
          alt="Hasan Logo"
          className="hasan-logo"
        />
      </div>
      <div className="bottom-bar-section">
        <ul className="contact-info">
          <li className="contact">צרו קשר</li>
          <li>
            <button onClick={handleCall} className="contact-button">
              📞 טלפון: 0525399761{" "}
            </button>
          </li>
          <li>📧 מייל: hasanmsarwe1986@gmai.com</li>
          <li>⌚ ימים: א'-ש' 9:00-18:00 ללא ששי</li>
          <li>
            <button onClick={openLocation} className="location-button">
              🗺️ נווט למוסך{" "}
            </button>
          </li>
        </ul>
      </div>
      <div className="bottom-bar-section">
        <ul className="page-links">
          <li className="pages">עמודים</li>
          <li>
            <Link to="/">ראשי</Link>
          </li>
          <li>
            <Link to="/conditioning">מיזוג</Link>
          </li>
          <li>
            <Link to="/electricity-and-diagnosis">חשמל</Link>
          </li>
          <li>
            <Link to="/hybrids">הייברד</Link>
          </li>
          <li>
            <Link to="/lab">מעבדה</Link>
          </li>
          <li>
            <Link to="/mechanics">מכונאות</Link>
          </li>
          <li>
            <Link to="/regulation">תקנון</Link>
          </li>
        </ul>
      </div>
      <p className="copyright">© כל הזכויות שמורות 2024</p>
    </div>
  );
};

export default BottomBar;
