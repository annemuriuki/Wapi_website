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
    <section className="team-section">
      <header className="team-header">
        <h2 className="team-title">{title}</h2>
        {subtitle && <p className="team-subtitle">{subtitle}</p>}
      </header>
      <ul className="team-grid" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        {members.map((member) => (
          <li key={member.id}>
            <TeamCard
              name={member.name}
              role={member.role}
              image={member.image}
              bio={member.bio}
              socialLinks={member.socialLinks}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default TeamSection;