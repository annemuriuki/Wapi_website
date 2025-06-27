import React from 'react';
import TeamCard from './TeamCard';
import '../../styles/components/Team.css';

/**
 * TeamSection component for displaying multiple team members
 * @param {Object} props - Component props
 * @param {Array} props.members - Array of team member objects
 * @param {string} props.title - Section title
 * @param {string} props.subtitle - Optional subtitle or description
 */
function TeamSection({ members, title, subtitle }) {
  return (
    <div className="team-section">
      <div className="team-header">
        <h2 className="team-title">{title}</h2>
        {subtitle && <p className="team-subtitle">{subtitle}</p>}
      </div>
      <div className="team-grid">
        {members.map((member) => (
          <TeamCard
            key={member.id}
            name={member.name}
            role={member.role}
            image={member.image}
            bio={member.bio}
            socialLinks={member.socialLinks}
          />
        ))}
      </div>
    </div>
  );
}

export default TeamSection;