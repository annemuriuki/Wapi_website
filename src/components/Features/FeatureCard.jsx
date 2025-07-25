import React from 'react';
import '../../styles/components/Features.css';

/**
 * FeatureCard component for displaying a single feature or service
 * @param {Object} props - Component props
 * @param {string} props.icon - Source URL for the feature icon
 * @param {string} props.title - Title of the feature
 * @param {string} props.description - Description of the feature
 */
function FeatureCard({ icon, title, description }) {
  return (
    <div className="feature-card">
      <img src={icon} alt={title} className="feature-icon" loading="lazy" />
      <h3 className="feature-title">{title}</h3>
      <p className="feature-description">{description}</p>
    </div>
  );
}

export default FeatureCard;