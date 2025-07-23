import React from 'react';

const spinnerStyle = {
  display: 'inline-block',
  width: 56,
  height: 56,
  border: '6px solid #EBE1CF',
  borderTop: '6px solid #0A4834',
  borderRadius: '50%',
  animation: 'spin 1s linear infinite',
  margin: '40px auto',
};

const LoadingSpinner = ({ label = 'Loading...' }) => (
  <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', minHeight: 120 }}>
    <div style={spinnerStyle} />
    <div style={{ marginTop: 18, color: '#0A4834', fontWeight: 600, fontSize: 18 }}>{label}</div>
    <style>{'@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }'}</style>
  </div>
);

export default LoadingSpinner; 