import React, { useEffect } from 'react';

const toastStyle = {
  position: 'fixed',
  top: 32,
  left: '50%',
  transform: 'translateX(-50%)',
  background: '#DFF5E4',
  color: '#0A4834',
  padding: '15px 28px',
  borderLeft: '6px solid #0A4834',
  borderRadius: 8,
  boxShadow: '0 4px 18px rgba(10,72,52,0.13)',
  zIndex: 20000,
  fontSize: 17,
  fontWeight: 600,
  minWidth: 220,
  textAlign: 'center',
  animation: 'fadeOut 4s forwards',
};

const Toast = ({ message, open, onClose, duration = 3000 }) => {
  useEffect(() => {
    if (open) {
      const timer = setTimeout(onClose, duration);
      return () => clearTimeout(timer);
    }
  }, [open, onClose, duration]);
  if (!open) return null;
  return (
    <div style={toastStyle}>{message}</div>
  );
};

export default Toast; 