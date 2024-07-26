import React, { useEffect } from 'react';
import '../styles/Conditioning.css';

const Conditioning = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="condition-container">
      <div className="heading-container">
        <h1>מיזוג</h1>
      </div>
      <div className="text-container">
        <p>
          אנו מתמחים בהבטחת מערכת מיזוג האוויר של
          הרכב שלך פועלת ביעילות שיא. בין אם מדובר
          בתחזוקה שוטפת, תיקונים או שיפוץ מערכות
          מלא, הטכנאים המומחים שלנו כאן כדי
          לשמור על קור רוח ונוח על הכביש.
        </p>
<br />
        <h3>שירותים:</h3>
        <ul className="list-container">
          <li>ווקום גז - R134 ו- 1234YF לכל סוגי הרכבים.</li>
          <li>מיזוג רכבים חשמליים.</li>
          <li>איתור נזילות דרך מכשירים מיוחדים.</li>
          <li>בדיקת חנקן וזרחן.</li>
          <li>שטיפת מערכת מיזוג והעלפת מיבשים (פילטרים).</li>
          <div>
          <img src="/assets/ac.png" alt="" />
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Conditioning;
