import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/pages/NotFound.css';

const NotFound = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);
  return (
    <div className={`notfound-container${mounted ? ' mounted' : ''}`}>
      {/* Large Playful SVG Illustration */}
      <svg
        width="320"
        height="250"
        viewBox="0 0 320 250"
        className="notfound-svg"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
      >
        <ellipse cx="160" cy="220" rx="90" ry="18" fill="#EBE1CF" />
        <circle cx="160" cy="120" r="80" fill="#0A4834" />
        <ellipse cx="160" cy="120" rx="62" ry="52" fill="#9F8151" />
        <ellipse cx="160" cy="140" rx="40" ry="30" fill="#EBE1CF" />
        {/* Eyes */}
        <ellipse cx="135" cy="130" rx="10" ry="14" fill="#fff" />
        <ellipse cx="185" cy="130" rx="10" ry="14" fill="#fff" />
        <ellipse cx="135" cy="134" rx="4.5" ry="6" fill="#0A4834" />
        <ellipse cx="185" cy="134" rx="4.5" ry="6" fill="#0A4834" />
        {/* Smile */}
        <path d="M145 155 Q160 170 175 155" stroke="#0A4834" strokeWidth="3" fill="none" />
        {/* Ears */}
        <polygon points="80,60 120,100 140,80" fill="#0A4834" />
        <polygon points="240,100 280,60 180,80" fill="#0A4834" />
        {/* Yarn ball */}
        <circle cx="110" cy="220" r="14" fill="#9F8151" />
        <path d="M110 220 Q115 225 122 220 Q129 215 110 212" stroke="#0A4834" strokeWidth="2" fill="none" />
      </svg>
      
      <div className="notfound-content">
        <div className="notfound-404">404</div>
        <div className="notfound-title">YIKES!</div>
        <div className="notfound-message">The page you're looking for could not be found.</div>
        <Link to="/" className="notfound-button">
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound; 