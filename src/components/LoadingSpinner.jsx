import React from 'react';
import '../styles/components/LoadingSpinner.css';

const LoadingSpinner = ({ label = 'Loading...' }) => (
  <div className="loading-spinner-container">
    <div className="loading-spinner" />
    <div className="loading-spinner-label">{label}</div>
  </div>
);

export default LoadingSpinner; 