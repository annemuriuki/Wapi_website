import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/Navbar.css';
import successRate from '../assets/images/logos/success-rate.png';
import { FaBars, FaTimes, FaUserCircle } from 'react-icons/fa';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const avatarUrl = 'https://randomuser.me/api/portraits/men/32.jpg';

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className="custom-navbar">
      <div className="navbar-left">
        <Link to="/" className="navbar-logo">
          <img src={successRate} alt="Transact Flow Logo" className="navbar-logo-image" />
          <span style={{ color: '#103713' }}>Transact</span>Flow
        </Link>
      </div>

      <button className="mobile-menu-button" onClick={toggleMobileMenu}>
        {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      <div className={`navbar-links-container ${mobileMenuOpen ? 'active' : ''}`}>
        <div className="navbar-links">
          <Link to="/" className="navbar-link" onClick={closeMobileMenu}>Home</Link>
          <Link to="/about" className="navbar-link" onClick={closeMobileMenu}>About</Link>
          <Link to="/solutions" className="navbar-link" onClick={closeMobileMenu}>Solutions</Link>
          <Link to="/blog" className="navbar-link" onClick={closeMobileMenu}>Blog</Link>
          <Link to="/pricing" className="navbar-link" onClick={closeMobileMenu}>Pricing</Link>
          <Link to="/faq" className="navbar-link" onClick={closeMobileMenu}>FAQ's</Link>
          <Link to="/contact" className="navbar-link" onClick={closeMobileMenu}>Contact</Link>
        </div>

        <div className="navbar-right mobile-only">
          <Link to="/signup" className="navbar-sign-up" onClick={closeMobileMenu}>Sign Up</Link>
          <Link to="/signin" className="navbar-sign-in" onClick={closeMobileMenu}>Sign In</Link>
        </div>
      </div>

      <div className="navbar-right desktop-only" style={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
        <Link to="/signup" className="navbar-sign-up">Sign Up</Link>
        <Link to="/signin" className="navbar-sign-in">Sign In</Link>
        <button
          className="navbar-avatar-btn"
          aria-label="User menu"
          aria-expanded={dropdownOpen}
          aria-controls="navbar-user-dropdown"
          onClick={() => setDropdownOpen(v => !v)}
        >
          <img
            src={avatarUrl}
            alt="User avatar"
          />
        </button>
        {dropdownOpen && (
          <div id="navbar-user-dropdown" style={{ position: 'absolute', right: 0, top: 48, background: '#fff', borderRadius: 10, boxShadow: '0 2px 12px rgba(0,0,0,0.12)', minWidth: 180, zIndex: 1000 }}>
            <Link to="/profile-settings" style={{ display: 'block', padding: '12px 20px', color: '#0A4834', textDecoration: 'none', fontWeight: 500 }} onClick={() => setDropdownOpen(false)}>Profile Settings</Link>
            <Link to="/user-management" style={{ display: 'block', padding: '12px 20px', color: '#0A4834', textDecoration: 'none', fontWeight: 500 }} onClick={() => setDropdownOpen(false)}>User Management</Link>
            <div style={{ borderTop: '1px solid #eee', margin: '4px 0' }} />
            <button style={{ display: 'block', width: '100%', padding: '12px 20px', background: 'none', border: 'none', color: '#c0392b', textAlign: 'left', fontWeight: 500, cursor: 'pointer' }} onClick={() => setDropdownOpen(false)}>Logout</button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
