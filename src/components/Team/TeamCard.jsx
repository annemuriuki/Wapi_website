import React from 'react';
import '../../styles/components/Team.css';

/**
 * TeamCard component for displaying a team member
 * @param {Object} props - Component props
 * @param {string} props.name - Team member's name
 * @param {string} props.role - Team member's role or position
 * @param {string} props.image - Source URL for the team member's image
 * @param {string} props.bio - Short biography or description
 * @param {Array} props.socialLinks - Array of social media links (optional)
 */
function TeamCard({ name, role, image, bio, socialLinks = [] }) {
  return (
    <article className="team-card">
      <div className="team-image-container">
        <img src={image} alt={`Photo of ${name}, ${role}`} className="team-image" />
      </div>
      <div className="team-content">
        <h3 className="team-name">{name}</h3>
        <p className="team-role">{role}</p>
        {bio && <p className="team-bio">{bio}</p>}
        {socialLinks.length > 0 && (
          <div className="team-social-links">
            {socialLinks.map((link, index) => (
              <a 
                key={index} 
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
                aria-label={`Visit ${name}'s social profile`}
              >
                {link.icon}
              </a>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}

export default TeamCard;