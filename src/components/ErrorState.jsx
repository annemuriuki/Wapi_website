import React from 'react';
import '../styles/components/ErrorState.css';

const ErrorState = ({ message = 'Something went wrong.' }) => (
  <div className="error-state-container">
    <div className="error-state-icon">⚠️</div>
    {message}
  </div>
);

export default ErrorState; 