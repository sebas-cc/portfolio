import React from 'react';
import './notification.css';

const Notification = ({ width, isVisible, message }) => {
  return (
    <div 
      className={`notification ${isVisible ? 'visible' : ''}`} 
      role="alert"
      aria-live="polite"
    >
      <div className="notification-content">
        <p className="notification-message">{message}</p>
        <div className="progress-container">
          <div 
            className="progress-bar" 
            style={{ width: `${width}%` }} 
            aria-valuenow={width}
            aria-valuemin="0"
            aria-valuemax="100"
          />
        </div>
      </div>
    </div>
  );
};

export default Notification;