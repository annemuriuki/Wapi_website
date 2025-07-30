import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/components/Navbar.css';
import successRate from '../assets/images/logos/success-rate.png';
import { FaBars, FaTimes } from 'react-icons/fa';


// Memoized navigation links for better performance
const NavigationLinks = React.memo(({ onLinkClick, currentPath }) => {
  const links = useMemo(() => [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/solutions', label: 'Solutions' },
    { to: '/blog', label: 'Blog' },
    { to: '/pricing', label: 'Pricing' },
    { to: '/faq', label: 'FAQs' },
    { to: '/contact', label: 'Contact' }
  ], []);

  return (
    <ul className="navbar-links" role="menubar">
      {links.map(({ to, label }) => (
        <li key={to} role="none">
          <Link 
            to={to} 
            className={`navbar-link ${currentPath === to ? 'active' : ''}`}
            role="menuitem" 
            onClick={onLinkClick}
          >
            {label}
          </Link>
        </li>
      ))}
    </ul>
  );
});

// Memoized profile dropdown for better performance
const ProfileDropdown = React.memo(({ isOpen, onClose, dropdownRef, isAdmin }) => {
  const handleLogout = useCallback(() => {
    onClose();
    // Add logout logic here
    console.log('Logout clicked');
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <ul
      id="navbar-user-dropdown"
      className="profile-dropdown"
      role="menu"
      ref={dropdownRef}
      style={{ 
        boxShadow: '0 8px 32px rgba(10,72,52,0.13)', 
        background: '#fff', 
        borderRadius: 12, 
        minWidth: 180, 
        zIndex: 10010 
      }}
    >
      <li role="none">
        <Link to="/dashboard" role="menuitem" onClick={onClose}>
          Dashboard
        </Link>
      </li>
      <li role="none">
        <Link to="/profile-settings" role="menuitem" onClick={onClose}>
          Profile Settings
        </Link>
      </li>
      {isAdmin && (
        <li role="none">
          <Link to="/user-management" role="menuitem" onClick={onClose}>
            User Management
          </Link>
        </li>
      )}
      <li className="dropdown-separator" role="separator" />
      <li role="none">
        <button role="menuitem" onClick={handleLogout}>
          Logout
        </button>
      </li>
    </ul>
  );
});

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  const avatarUrl = 'https://randomuser.me/api/portraits/men/32.jpg';
  const isAdmin = true; // Set to true for demo; replace with real logic
  const location = useLocation();
  
  const dropdownRef = useRef();
  const avatarBtnRef = useRef();
  const navbarRef = useRef();

  // Optimized scroll handler with performance utilities
  const handleScroll = useCallback(() => {
    const scrolled = window.scrollY > 10;
    setIsScrolled(scrolled);
  }, []);

  // Optimized scroll handler with throttling
  const optimizedScrollHandler = handleScroll;

  // Optimized click handlers
  const handleMobileMenuToggle = useCallback(() => {
    setMobileMenuOpen(prev => !prev);
  }, []);

  const handleDropdownToggle = useCallback(() => {
    setDropdownOpen(prev => !prev);
  }, []);

  const handleLinkClick = useCallback(() => {
    setMobileMenuOpen(false);
    setDropdownOpen(false);
  }, []);

  const handleAvatarKeyDown = useCallback((e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setDropdownOpen(prev => !prev);
    }
  }, []);

  // Close dropdown on outside click or ESC
  useEffect(() => {
    setDropdownOpen(false);
    setMobileMenuOpen(false);
  }, [location]);

  useEffect(() => {
    if (!dropdownOpen) return;
    
    const handleClick = (e) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target) &&
        avatarBtnRef.current &&
        !avatarBtnRef.current.contains(e.target)
      ) {
        setDropdownOpen(false);
      }
    };
    
    const handleEsc = (e) => {
      if (e.key === 'Escape') setDropdownOpen(false);
    };
    
    document.addEventListener('mousedown', handleClick);
    document.addEventListener('keydown', handleEsc);
    
    return () => {
      document.removeEventListener('mousedown', handleClick);
      document.removeEventListener('keydown', handleEsc);
    };
  }, [dropdownOpen]);

  // Optimized scroll listener
  useEffect(() => {
    window.addEventListener('scroll', optimizedScrollHandler, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', optimizedScrollHandler);
    };
  }, [optimizedScrollHandler]);

  // Memoized navbar classes
  const navbarClasses = useMemo(() => {
    const classes = ['custom-navbar'];
    if (isScrolled) classes.push('scrolled');
    return classes.join(' ');
  }, [isScrolled]);

  return (
    <nav 
      className={navbarClasses} 
      aria-label="Main Navigation"
      ref={navbarRef}
    >
      {/* Left: Logo */}
      <div className="navbar-left">
        <Link to="/" className="navbar-logo">
          <img 
            src={successRate} 
            alt="Transact Flow Logo" 
            className="navbar-logo-image"
            loading="eager"
          />
          <span style={{ color: '#103713' }}>Transact</span>Flow
        </Link>
      </div>
      
      {/* Hamburger for mobile */}
      <button 
        className="mobile-menu-button" 
        onClick={handleMobileMenuToggle} 
        aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={mobileMenuOpen}
      >
        {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>
      
      {/* Center: Public Links */}
      <div className={`navbar-center ${mobileMenuOpen ? 'active' : ''}`}>
        <NavigationLinks 
          onLinkClick={handleLinkClick}
          currentPath={location.pathname}
        />
      </div>
      
      {/* Right: Sign Up, Sign In, Profile Dropdown */}
      <div className="navbar-right" style={{ position: 'relative', alignItems: 'center', display: 'flex' }}>
        <Link 
          to="/signup" 
          className={`navbar-sign-up${mobileMenuOpen ? ' mobile-btn' : ''}`} 
          onClick={handleLinkClick}
        >
          Sign Up
        </Link>
        <Link 
          to="/signin" 
          className={`navbar-sign-in${mobileMenuOpen ? ' mobile-btn' : ''}`} 
          onClick={handleLinkClick}
        >
          Sign In
        </Link>
        <button
          className="navbar-avatar-btn"
          aria-label="User Profile"
          aria-haspopup="true"
          aria-expanded={dropdownOpen}
          aria-controls="navbar-user-dropdown"
          onClick={handleDropdownToggle}
          onKeyDown={handleAvatarKeyDown}
          ref={avatarBtnRef}
          style={{ display: 'flex', alignItems: 'center' }}
        >
          <img
            src={avatarUrl}
            alt="User Profile"
            className="avatar"
            style={{ verticalAlign: 'middle' }}
            loading="lazy"
          />
        </button>
        <ProfileDropdown 
          isOpen={dropdownOpen}
          onClose={() => setDropdownOpen(false)}
          dropdownRef={dropdownRef}
          isAdmin={isAdmin}
        />
      </div>
    </nav>
  );
};

export default React.memo(Navbar);
