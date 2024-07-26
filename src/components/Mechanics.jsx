import React from 'react';
import { useEffect } from 'react';

const Mechanics = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="mechanics-container">
    <div className="heading-container">
    <h1>מכונאות</h1>
    </div>
    <div className="text-container">
      <p>
      במוסך שלנו, 
      אנו מציעים מגוון מלא של תיקונים ותחזוקה מכנית 
      לשמירה על רכבך במצב מעולה. מטיפול במנוע ועד 
      שירותי בלמים, המכונאים המנוסים שלנו מחויבים 
      לספק עבודה באיכות גבוהה ושירות יוצא דופן.
      </p>
      <br />
      <h3>שירותים:</h3>
      <ul className="list-container">
        <li>טיפולים - מנועים וגירים שונים.</li>
        <li>טיפולים לרכבים מתקמים - בנוסף רכבים חשמליים.</li>
        <li>מחסן חלפים וחלקים.</li>
    <div>
    <img src="/assets/mechanics.png" alt="" />
  </div>
  </ul>
  </div>
  </div>
);
};

export default Mechanics;
