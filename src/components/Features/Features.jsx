import React from 'react';
import FeatureCard from './FeatureCard';
import '../../styles/components/Features.css';

/**
 * Features component for displaying multiple features or services
 * @param {Object} props - Component props
 * @param {Array} props.features - Array of feature objects with icon, title, and description
 * @param {string} props.title - Optional section title
 */
function Features({ features, title }) {
  return (
    <div className="features-section">
      {title && <h2 className="features-title">{title}</h2>}
      <div className="features-container">
        {features.map((feature) => (
          <FeatureCard
            key={feature.id}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </div>
  );
}

export default Features;