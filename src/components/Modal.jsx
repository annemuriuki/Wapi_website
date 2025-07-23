import React from 'react';
import '../styles/components/Modal.css';

const Modal = ({ open, onClose, children }) => {
  if (!open) return null;
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-box" onClick={e => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close">×</button>
        {children}
      </div>
    </div>
  );
};

export default Modal; 