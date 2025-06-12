import React from "react";
import { FaGooglePlay } from "react-icons/fa";
import { SiAppstore } from "react-icons/si";
import { MdLocationOn, MdPhone, MdEmail, MdMailOutline } from "react-icons/md";
import "./Footer.css"; // Import the CSS file for styling

const Footer = () => {
  // Define placeholder app store links for template display
  const playStoreLink = "#"; // Placeholder link
  const appStoreLink = "#"; // Placeholder link

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Column 1 - Global Headquarters Contact Info */}
        <div className="footer-column">
          <h3 className="footer-title">Global Headquarters</h3>
          <div className="contact-section">
            <h4 className="section-label">
              <span className="icon-container">
                <MdLocationOn className="icon" />
              </span>
              Address
            </h4>
            <p className="section-content">
              123 Global Solutions Plaza, Suite 700, Innovation City, GX 90210
            </p>
          </div>
          <div className="contact-section">
            <h4 className="section-label">
              <span className="icon-container">
                <MdPhone className="icon" />
              </span>
              Contact
            </h4>
            <p className="section-content">+1 (555) 123-4567</p>
          </div>
          <div className="contact-section">
            <h4 className="section-label">
              <span className="icon-container">
                <MdEmail className="icon" />
              </span>
              Email
            </h4>
            <p className="section-content">info@templatecompany.com</p>
          </div>
          <div className="contact-section">
            <h4 className="section-label">
              <span className="icon-container">
                <MdMailOutline className="icon" />
              </span>
              Postal Address
            </h4>
            <p className="section-content">P.O Box 8765, Innovation City</p>
          </div>
        </div>

        {/* Column 2 - Regional Office Contact Info */}
        <div className="footer-column">
          <h3 className="footer-title">Regional Office</h3>
          <div className="contact-section">
            <h4 className="section-label">
              <span className="icon-container">
                <MdLocationOn className="icon" />
              </span>
              Address
            </h4>
            <p className="section-content">
              Suite 45B, Tech Hub Centre, 789 Growth Avenue, Metroville, MV 10101
            </p>
          </div>
          <div className="contact-section">
            <h4 className="section-label">
              <span className="icon-container">
                <MdPhone className="icon" />
              </span>
              Contact
            </h4>
            <p className="section-content">+1 (555) 987-6543</p>
          </div>
          <div className="contact-section">
            <h4 className="section-label">
              <span className="icon-container">
                <MdEmail className="icon" />
              </span>
              Email
            </h4>
            <p className="section-content">support@templatecompany.com</p>
          </div>
          <div className="contact-section">
            <h4 className="section-label">
              <span className="icon-container">
                <MdMailOutline className="icon" />
              </span>
              Postal Address
            </h4>
            <p className="section-content">P.O Box 5432, Metroville</p>
          </div>
        </div>


        {/* Column 3 - Apps Download with placeholder buttons */}
        <div className="footer-column">
          <h3 className="footer-title">Stay Connected</h3>
          <p className="footer-text">
            Download our app for seamless experience on the go, or follow us on social media.
          </p>
          <div className="app-buttons">
            <a href={playStoreLink} className="app-button" target="_blank" rel="noopener noreferrer">
              <FaGooglePlay className="app-icon" />
              Google Play
            </a>
            <a href={appStoreLink} className="app-button" target="_blank" rel="noopener noreferrer">
              <SiAppstore className="app-icon" />
              App Store
            </a>
          </div>
        </div>
      </div>

      {/* Copyright and Links */}
      <div className="footer-bottom">
        <p className="copyright">
          &copy; 2025 [Your Company Name]. All rights reserved.
        </p>
        <div className="footer-links">
          <a href="/terms">Terms of Service</a>
          <a href="/privacy">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;