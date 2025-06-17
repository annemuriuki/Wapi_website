import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";
import successrate from '../assets/success-rate.png'; 

const Navbar = () => {
  return (
    <nav className="custom-navbar">
    <div className="navbar-left">
      <Link to="/" className="navbar-logo">
        <img src={successrate} alt="Transact Flow Logo" className="navbar-logo-image" />
        <span style={{ color: '#103713' }}>Transact</span>Flow
      </Link>
    </div>
      <div className="navbar-links-container">
        <div className="navbar-links">
          <Link to="/" className="navbar-link">Home</Link>
          <Link to="/about" className="navbar-link">About</Link>
           <Link to="/solutions" className="navbar-link">Solutions</Link>
          <Link to="/blog" className="navbar-link">Blog</Link>
          <Link to="/faq" className="navbar-link">FAQ's</Link>
          <Link to="/contact" className="navbar-link">Contact</Link>
        </div>
      </div>
      <div className="navbar-right">
        <Link to="/signup" className="navbar-sign-up">
          Sign Up
        </Link>
        <Link to="/signin" className="navbar-sign-in">
          Sign in
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;