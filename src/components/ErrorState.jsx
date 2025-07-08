import React from 'react';

const ErrorState = ({ message = 'Something went wrong.' }) => (
  <div style={{ padding: '60px 0', textAlign: 'center', color: '#c0392b', fontWeight: 'bold', fontSize: '1.3em', background: '#fff', borderRadius: 12, boxShadow: '0 2px 8px rgba(0,0,0,0.08)', maxWidth: 500, margin: '40px auto' }}>
    <div style={{ fontSize: 48, marginBottom: 12 }}>⚠️</div>
    {message}
  </div>
);

export default ErrorState; 