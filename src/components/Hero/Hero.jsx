import React from 'react';
import '../../styles/components/Hero.css';

/**
 * Hero component for displaying a hero section with text and an image
 * @param {Object} props - Component props
 * @param {string} props.welcomeText - Small welcome text displayed above the title
 * @param {string} props.title - Main title of the hero section
 * @param {string} props.subtitle - Subtitle or description text
 * @param {string} props.imageSrc - Source URL for the hero image
 * @param {string} props.imageAlt - Alt text for the hero image
 */
function Hero({ welcomeText, title, subtitle, imageSrc, imageAlt }) {
  return (
    <div className="hero-section">
      <div className="hero-content">
        {welcomeText && <p className="welcome-text">{welcomeText}</p>}
        <h1 className="hero-title">{title}</h1>
        {subtitle && <p className="hero-subtitle">{subtitle}</p>}
      </div>
      <div className="hero-image-container">
        <img src={imageSrc} alt={imageAlt} className="hero-image" loading="lazy" />
      </div>
    </div>
  );
}

export default Hero;
