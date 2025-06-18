import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";
import successrate from '../assets/success-rate.png';
import { FaBars, FaTimes } from 'react-icons/fa'; 

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="custom-navbar">
      <div className="navbar-left">
        <Link to="/" className="navbar-logo">
          <img src={successrate} alt="Transact Flow Logo" className="navbar-logo-image" />
          <span style={{ color: '#103713' }}>Transact</span>Flow
        </Link>
      </div>
      
      <button className="mobile-menu-button" onClick={toggleMobileMenu}>
        {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>
      
      <div className={`navbar-links-container ${mobileMenuOpen ? 'active' : ''}`}>
        <div className="navbar-links">
          <Link to="/" className="navbar-link" onClick={() => setMobileMenuOpen(false)}>Home</Link>
          <Link to="/about" className="navbar-link" onClick={() => setMobileMenuOpen(false)}>About</Link>
          <Link to="/solutions" className="navbar-link" onClick={() => setMobileMenuOpen(false)}>Solutions</Link>
          <Link to="/blog" className="navbar-link" onClick={() => setMobileMenuOpen(false)}>Blog</Link>
          <Link to="/faq" className="navbar-link" onClick={() => setMobileMenuOpen(false)}>FAQ's</Link>
          <Link to="/contact" className="navbar-link" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
        </div>
      </div>
      
      <div className={`navbar-right ${mobileMenuOpen ? 'active' : ''}`}>
        <Link to="/signup" className="navbar-sign-up" onClick={() => setMobileMenuOpen(false)}>
          Sign Up
        </Link>
        <Link to="/signin" className="navbar-sign-in" onClick={() => setMobileMenuOpen(false)}>
          Sign in
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;