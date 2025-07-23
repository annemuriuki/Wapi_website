import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);
  return (
    <div style={{ minHeight: '100vh', width: '100vw', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: '#fff', position: 'fixed', top: 0, left: 0, zIndex: 10000, opacity: mounted ? 1 : 0, transform: mounted ? 'scale(1)' : 'scale(0.98)', transition: 'opacity 0.7s, transform 0.7s' }}>
      {/* Large Playful SVG Illustration */}
      <svg
        width="320"
        height="250"
        viewBox="0 0 320 250"
        style={{
          marginBottom: 12,
          animation: 'float404 3s ease-in-out infinite alternate',
          maxWidth: '90vw',
          maxHeight: '40vh',
          display: 'block'
        }}
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
      <div style={{ fontSize: '3.5rem', fontWeight: 900, color: '#0A4834', letterSpacing: 2, marginBottom: 0 }}>404</div>
      <div style={{ fontSize: '2rem', fontWeight: 700, color: '#9F8151', margin: '8px 0 0 0' }}>YIKES!</div>
      <div style={{ color: '#444', margin: '12px 0 28px 0', fontSize: 18 }}>The page you're looking for could not be found.</div>
      <Link to="/" style={{ marginTop: 12, padding: '12px 32px', background: '#0A4834', color: '#fff', borderRadius: 8, textDecoration: 'none', fontWeight: 'bold', fontSize: 18, boxShadow: '0 2px 8px rgba(0,0,0,0.08)', transition: 'background 0.3s, transform 0.2s' }} onMouseOver={e => e.currentTarget.style.background = '#9F8151'} onMouseOut={e => e.currentTarget.style.background = '#0A4834'}>Return to Home</Link>
      <style>{`
        @keyframes float404 { 0% { transform: translateY(0); } 100% { transform: translateY(-18px); } }
      `}</style>
    </div>
  );
};

export default NotFound; 