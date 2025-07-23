import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/components/Navbar.css';
import successRate from '../assets/images/logos/success-rate.png';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const avatarUrl = 'https://randomuser.me/api/portraits/men/32.jpg';
  const isAdmin = true; // Set to true for demo; replace with real logic
  const location = useLocation();

  useEffect(() => {
    setDropdownOpen(false);
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <nav className="custom-navbar" aria-label="Main Navigation">
      {/* Left: Logo */}
      <div className="navbar-left">
        <Link to="/" className="navbar-logo">
          <img src={successRate} alt="Transact Flow Logo" className="navbar-logo-image" />
          <span style={{ color: '#103713' }}>Transact</span>Flow
        </Link>
      </div>
      {/* Hamburger for mobile */}
      <button className="mobile-menu-button" onClick={() => setMobileMenuOpen(v => !v)} aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}>
        {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>
      {/* Center: Public Links */}
      <div className={`navbar-center ${mobileMenuOpen ? 'active' : ''}`}>
        <ul className="navbar-links" role="menubar">
          <li role="none"><Link to="/" className="navbar-link" role="menuitem" onClick={() => setMobileMenuOpen(false)}>Home</Link></li>
          <li role="none"><Link to="/about" className="navbar-link" role="menuitem" onClick={() => setMobileMenuOpen(false)}>About</Link></li>
          <li role="none"><Link to="/solutions" className="navbar-link" role="menuitem" onClick={() => setMobileMenuOpen(false)}>Solutions</Link></li>
          <li role="none"><Link to="/blog" className="navbar-link" role="menuitem" onClick={() => setMobileMenuOpen(false)}>Blog</Link></li>
          <li role="none"><Link to="/pricing" className="navbar-link" role="menuitem" onClick={() => setMobileMenuOpen(false)}>Pricing</Link></li>
          <li role="none"><Link to="/faq" className="navbar-link" role="menuitem" onClick={() => setMobileMenuOpen(false)}>FAQs</Link></li>
          <li role="none"><Link to="/contact" className="navbar-link" role="menuitem" onClick={() => setMobileMenuOpen(false)}>Contact</Link></li>
        </ul>
      </div>
      {/* Right: Sign Up, Sign In, Profile Dropdown */}
      <div className="navbar-right" style={{ position: 'relative' }}>
        <Link to="/signup" className="navbar-sign-up" onClick={() => setMobileMenuOpen(false)}>Sign Up</Link>
        <Link to="/signin" className="navbar-sign-in" onClick={() => setMobileMenuOpen(false)}>Sign In</Link>
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
            className="avatar"
          />
        </button>
        {dropdownOpen && (
          <ul id="navbar-user-dropdown" className="profile-dropdown" role="menu">
            <li role="none"><Link to="/dashboard" role="menuitem" onClick={() => setDropdownOpen(false)}>Dashboard</Link></li>
            <li role="none"><Link to="/profile-settings" role="menuitem" onClick={() => setDropdownOpen(false)}>Profile Settings</Link></li>
            {isAdmin && (
              <li role="none"><Link to="/user-management" role="menuitem" onClick={() => setDropdownOpen(false)}>User Management</Link></li>
            )}
            <li className="dropdown-separator" role="separator" />
            <li role="none"><button role="menuitem" onClick={() => setDropdownOpen(false)}>Logout</button></li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
