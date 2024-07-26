// src/components/AccessibilityButton.jsx
import React, { useState } from 'react';
import '../styles/AccessibilityButton.css';

const AccessibilityButton = () => {
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [isLargeText, setIsLargeText] = useState(false);
  const [showOptions, setShowOptions] = useState(false);

  const toggleHighContrast = () => {
    setIsHighContrast(!isHighContrast);
    document.documentElement.classList.toggle('high-contrast', !isHighContrast);
  };

  const toggleLargeText = () => {
    setIsLargeText(!isLargeText);
    document.documentElement.classList.toggle('large-text', !isLargeText);
  };

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  return (
    <div className="accessibility-button-container">
      <button onClick={toggleOptions} className="handicap-button">
        ♿
      </button>
      {showOptions && (
        <div className="accessibility-options">
          <button onClick={toggleHighContrast}>
            {isHighContrast ? 'השבת ניגודיות גבוהה' : 'לאפשר ניגודיות גבוהה'}
          </button>
          <button onClick={toggleLargeText}>
            {isLargeText ? 'השבת טקסט גדול' : 'אפשר טקסט גדול'}
          </button>
        </div>
      )}
    </div>
  );
};

export default AccessibilityButton;
