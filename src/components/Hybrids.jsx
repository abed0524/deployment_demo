// Hybrids.jsx
import React from 'react';
import { useEffect } from 'react';

const Hybrids = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="hybrids-container">
    <div className="heading-container">
    <h1>הייברדים / ADAS</h1>
    </div>
    <div className="text-container">
      <p>
      אנו מתמחים בשירות ותחזוקה של רכבים היברידיים 
      עם הטכנולוגיה והידע העדכניים ביותר. טכנאים 
      המומחים שלנו מוכנים לטפל בדרישות הייחודיות 
      של מערכות היברידיות וכיול רדאר, ולוודא שרכבך יפעל בצורה 
      חלקה ויעילה תוך שמירה על יתרונותיו האקולוגיים.
      </p>
      <br />
      <h3>שירותים:</h3>
      <ul className="list-container">
        <li>טיפול ותיקון כל סוגי הרכבים החשמליים וההייברדיים.</li>
        <li>עמדת רכבים חשמליים.</li>
        <li>מערכת כיול לכל סוגי רדארים מתקדמים.</li>
        <li>עמדת לימוד מצלמות דרך.</li>
        <li>מצברי הייברד</li>
        <li>דיאגנוסטיקה מתקדמת.</li>
    <div>
    <img src="/assets/electric.png" alt="" />
  </div>
  </ul>
  </div>
  </div>
);
};

export default Hybrids;
