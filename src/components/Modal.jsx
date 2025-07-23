import React from 'react';

const modalBackdrop = {
  position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: 'rgba(10,72,52,0.18)', zIndex: 10000, display: 'flex', alignItems: 'center', justifyContent: 'center',
};
const modalBox = {
  background: '#fff', borderRadius: 16, boxShadow: '0 4px 32px rgba(10,72,52,0.13)', padding: '36px 32px 28px 32px', minWidth: 320, maxWidth: '90vw', maxHeight: '90vh', position: 'relative', zIndex: 10001, display: 'flex', flexDirection: 'column', alignItems: 'center',
};
const closeBtn = {
  position: 'absolute', top: 16, right: 18, background: 'none', border: 'none', fontSize: 26, color: '#0A4834', cursor: 'pointer', fontWeight: 700,
};

const Modal = ({ open, onClose, children }) => {
  if (!open) return null;
  return (
    <div style={modalBackdrop} onClick={onClose}>
      <div style={modalBox} onClick={e => e.stopPropagation()}>
        <button style={closeBtn} onClick={onClose} aria-label="Close">×</button>
        {children}
      </div>
    </div>
  );
};

export default Modal; 