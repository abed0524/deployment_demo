// ElectricityAndDiagnosis.jsx
import React from 'react';
import '../styles/ElectricityAndDiagnosis.css';
import { useEffect } from 'react';

const ElectricityAndDiagnosis = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="electricity-and-diagnosis-container">
      <div className="heading-container">
      <h1>חשמל ואבחון</h1>
      </div>
      <div className="text-container">
        <p>
        המוסך שלנו מצויד בכלים דיאגנוסטיים 
        מתקדמים לאיתור ופתרון בעיות חשמליות בכלי 
        הרכב שלך. מטיפול בהחלפת סוללות ועד לתיקון 
        בעיות חיווט מורכבות, הצוות המיומן שלנו
         מוכן לספק אבחון מדויק ותיקונים יעילים.
        </p>
        <br />
        <h3>שירותים:</h3>
        <ul className="list-container">
          <li>מכלולים - סטרטרים ואלטרנטורים.</li>
          <li>מצברים - מצברים רגילים ומיוחדים.</li>
          <li>דיאגנוסטיקה - בדיקת מחשב לכל סוגי הרכבים.</li>
          <li>איתור תקלות לכל העידן החדש ורכבי הייברד.</li>
      <div>
      <img src="/assets/electricity.png" alt="" />
    </div>
    </ul>
    </div>
    </div>
  );
};

export default ElectricityAndDiagnosis;
