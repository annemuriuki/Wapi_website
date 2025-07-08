import React from 'react';
import '../../styles/components/About.css';
import aboutImage from '../../assets/images/about/about.jpeg';

// ---
// About section data
// To customize, edit the fields below.
// ---
const aboutData = {
  headline: 'Why Partner With TransactFlow?',
  subheading: 'Distinguishing ourselves through unparalleled expertise, dedication, and measurable impact.',
  image: aboutImage,
  imageAlt: 'Why Partner With Us',
  benefits: [
    {
      title: 'Expert-Led Team',
      description: 'Benefit from the collective wisdom of seasoned professionals, each a leader in their respective field.',
    },
    {
      title: 'Tailored Strategies',
      description: 'We craft bespoke solutions that align perfectly with your unique objectives and organizational culture.',
    },
    {
      title: 'Client-Centric Approach',
      description: 'Your goals are our priority. We foster collaborative partnerships for mutual growth.',
    },
    // ---
    // To add a new benefit, copy the object above and update the title and description.
    // ---
  ],
};

const AboutSection = () => (
  <div className="full-width-hanging-blocks-section">
    <div className="full-width-content-area">
      <div className="full-width-image-container">
        <img
          src={aboutData.image}
          alt={aboutData.imageAlt}
          className="circular-image"
        />
      </div>
      <div className="full-width-text-content">
        <h2 className="full-width-section-heading">{aboutData.headline}</h2>
        <p className="full-width-section-subheading">{aboutData.subheading}</p>
        <div className="full-width-hanging-blocks-list">
          {aboutData.benefits.map((benefit, idx) => (
            <div className="full-width-hanging-block-item" key={idx}>
              <div className="green-accent"></div>
              <span className="benefit-icon">✓</span>
              <p className="benefit-text">
                <strong>{benefit.title}</strong><br />
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default AboutSection; 