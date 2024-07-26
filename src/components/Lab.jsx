// Lab.jsx
import React from 'react';
import { useEffect } from 'react';

const Lab = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="lab-container">
    <div className="heading-container">
    <h1>מעבדה</h1>
    </div>
    <div className="text-container">
      <p>
      המוסך שלנו כולל
       מעבדה מתקדמת לבדיקות ותחזוקה מדויקת של כלי 
      הרכב. אנו משתמשים בציוד מתקדם לביצוע אבחנות 
      מקיפות, כדי לוודא שרכבך יקבל טיפול מדויק 
      ותשומת לב שתשמור עליו במצב הטוב ביותר.
      </p>
      <br />
      <h3>שירותים:</h3>
      <ul className="list-container">
        <li>תיקון כל סוגי המחשבים של הרכב - ECU, TCU.</li>
        <li>העברת נתונים למחשב.</li>
        <li>העברת SW, EMO ו- EEPROM.</li>
        <li>תיקון CAN-B ותקשורת בין מחשבים, (כל העידן החדש למחשבי הרכבים המתקדמים).</li>
    <div>
    <img src="/assets/lab.png" alt="" />
  </div>
  </ul>
  </div>
  </div>
  );
};

export default Lab;
