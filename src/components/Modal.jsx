import React, { useState } from 'react';
import '../styles/Modal.css'; // Ensure you have appropriate styles in this file

const Modal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    carType: '',
    carModel: '',
    licensePlate: '',
    carYear: '',
    freeText: '',
    pickupDateTime: '',
    phoneNumber: '', // Added phone number field
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Clear error for this field if it's being updated
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: '',
      });
    }

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name) newErrors.name = 'שם חובה';
    if (!formData.carType) newErrors.carType = 'יצרן רכב חובה';
    if (!formData.carModel) newErrors.carModel = 'דגם רכב חובה';
    if (!formData.carYear) newErrors.carYear = 'שנה חובה';
    if (!formData.pickupDateTime) newErrors.pickupDateTime = 'תאריך איסוף חובה';
    if (!formData.freeText) newErrors.freeText = 'שדה חובה';
    if (!formData.phoneNumber) newErrors.phoneNumber = 'מספר טלפון חובה'; // Added validation for phoneNumber

    setErrors(newErrors);

    // Return false if there are errors
    return Object.keys(newErrors).length === 0;
  };

  const handleConfirm = () => {
    if (!validateForm()) return; // If form is invalid, do not proceed

    // Format the message
    const message = `
      הזמנה חדשה:
      שם: ${formData.name}
      יצרן רכב: ${formData.carType}
      דגם רכב: ${formData.carModel}
      מספר רישוי: ${formData.licensePlate || 'N/A'}
      שנה: ${formData.carYear}
      שעה ותאריך איסוף: ${formData.pickupDateTime}
      מספר טלפון: ${formData.phoneNumber}
      הערות: ${formData.freeText || 'N/A'}
    `;

    // Encode the message for URL
    const encodedMessage = encodeURIComponent(message);

    // WhatsApp URL
    const phoneNumber = '972587730731'; // The phone number
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    // Open WhatsApp with the message
    window.open(whatsappURL, '_blank');

    onClose(); // Close the modal after sending
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>פרטי ההזמנה</h2>
        <form className="modal-form">
          <div className="form-group">
            <label htmlFor="name">שם מלא:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            {errors.name && <p className="error-message">{errors.name}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="carType">יצרן רכב:</label>
            <input
              type="text"
              id="carType"
              name="carType"
              value={formData.carType}
              onChange={handleChange}
              required
            />
            {errors.carType && <p className="error-message">{errors.carType}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="carModel">דגם רכב:</label>
            <input
              type="text"
              id="carModel"
              name="carModel"
              value={formData.carModel}
              onChange={handleChange}
              required
            />
            {errors.carModel && <p className="error-message">{errors.carModel}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="licensePlate">מספר רישוי (לא חובה):</label>
            <input
              type="number"
              id="licensePlate"
              name="licensePlate"
              value={formData.licensePlate}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="carYear">שנה:</label>
            <input
              type="number"
              id="carYear"
              name="carYear"
              value={formData.carYear}
              onChange={handleChange}
              required
            />
            {errors.carYear && <p className="error-message">{errors.carYear}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="pickupDateTime">תאריך ושעת איסוף: (9:00-18:00)</label>
            <input
              type="datetime-local"
              id="pickupDateTime"
              name="pickupDateTime"
              value={formData.pickupDateTime}
              onChange={handleChange}
              required
            />
            {errors.pickupDateTime && <p className="error-message">{errors.pickupDateTime}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="phoneNumber">מספר טלפון:</label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
            {errors.phoneNumber && <p className="error-message">{errors.phoneNumber}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="freeText">נא לפרט על איזה חלקים אתם צריכים:</label>
            <textarea
              id="freeText"
              name="freeText"
              value={formData.freeText}
              onChange={handleChange}
              required
            />
            {errors.freeText && <p className="error-message">{errors.freeText}</p>}
          </div>
          <p className="confirmation-note">
            *התשלום במשרד בלבד (מזומן/אשראי). הזמנות נשלחות באמצעות וואטסאפ, אנא בדקו את השדות לפני השליחה, נחזור מיד בהקדם האפשרי
          </p>
          <div className="modal-buttons">
            <button type="button" className="confirm-button" onClick={handleConfirm}>
              אישור
            </button>
            <button type="button" className="close-button" onClick={onClose}>
              סגירה
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
