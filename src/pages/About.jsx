import React from 'react';
import '../styles/pages/About.css';
import aboutImage from '../assets/images/about/aboutpage.jpeg';
import member1 from '../assets/images/team/member1.jpeg';
import member2 from '../assets/images/team/member2.jpeg';
import member3 from '../assets/images/team/member3.jpeg';
import member4 from '../assets/images/team/member4.jpeg';

import { FaLinkedinIn } from 'react-icons/fa'; 
import { SiGmail } from 'react-icons/si';  

function About() {
  return (
    <main className="about-page">
      {/* Hero Section */}
      <section className="header-section">
        <header className="header-container">
          <h1 className="header-title">About Us</h1>
        </header>
      </section>

      {/* Our Story Section */}
      <section className="our-story-section">
        <div className="container">
          <div className="text-content">
            <h2 className="section-heading">OUR STORY, VISION, AND MISSION</h2>
            <h3 className="story-title">Pioneering <span className="highlight">Innovation</span> for a Brighter Future</h3>
            <p className="story-description">
              At TransactFlow, we are committed to empowering businesses and individuals through cutting-edge solutions. We leverage advanced technology and a client-centric approach to redefine industry standards and drive impactful change.
            </p>
          </div>
          <div className="image-content">
            <img src={aboutImage} alt="Our Collaborative Team" loading="lazy" />
          </div>
        </div>
      </section>

      {/* Vision and Mission Section */}
      <section className="vision-mission-section">
        <div className="container">
          <section className="vision-block block">
            <h3 className="block-title">Vision</h3>
            <ul className="block-list">
              <li className="block-list-item">To be the global leader in transformative digital solutions.</li>
              <li className="block-list-item">Empowering businesses with cutting-edge technology.</li>
              <li className="block-list-item">Fostering a future where innovation drives sustainable growth.</li>
              <li className="block-list-item">Creating seamless, impactful experiences for every client.</li>
            </ul>
          </section>
          <section className="mission-block block">
            <h3 className="block-title">Mission</h3>
            <ul className="block-list">
              <li className="block-list-item">
                Our mission is to deliver innovative and strategic solutions that empower our clients to achieve their most ambitious goals. 
              </li>
              <li className='block-list-item'>
                We strive to build lasting partnerships based on trust, expertise, and a shared commitment to excellence.
              </li>
            </ul>
          </section>
        </div>
      </section>

      {/* Key Figures Section */}
      <section className="wapi-pay-key-figures-section">
        <div className="container">
          <h2 className="section-heading">Our Impact: Key Figures</h2>
          <div className="key-figures-grid">
            <div className="key-figure">
              <span className="figure-value">150+</span>
              <p className="figure-description">Successful projects delivered across diverse industries globally.</p>
            </div>
            <div className="key-figure">
              <span className="figure-value">98%</span>
              <p className="figure-description">Client satisfaction rate, reflecting our commitment to excellence.</p>
            </div>
            <div className="key-figure">
              <span className="figure-value">10+</span>
              <p className="figure-description">Years of combined industry expertise driving innovation and results.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Team Section */}
      <section className="meet-our-team-section">
        <div className="container">
          <h2 className="section-heading">Meet Our Expert Team</h2>
          <div className="team-members-grid">
            <div className="team-member">
              <img src={member1} alt="Team Member 1" loading="lazy" />
              <div className="member-info">
                <h3>Alice Johnson</h3>
                <p className="role">Chief Executive Officer</p>
                <div className="social-links">
                  <a href="#" className="linkedin-icon">
                    <FaLinkedinIn size={24} color="#0A4834" /> 
                  </a>
                  <a href="#" className="gmail-icon">
                    <SiGmail size={24} color="#0A4834" /> 
                  </a>
                </div>
              </div>
            </div>
            <div className="team-member">
              <img src={member2} alt="Team Member 2" loading="lazy" />
              <div className="member-info">
                <h3>Robert Davis</h3>
                <p className="role">Chief Technology Officer</p>
                <div className="social-links">
                  <a href="#" className="linkedin-icon">
                    <FaLinkedinIn size={24} color="#0A4834" />
                  </a>
                  <a href="#" className="gmail-icon">
                    <SiGmail size={24} color="#0A4834" />
                  </a>
                </div>
              </div>
            </div>
            <div className="team-member">
              <img src={member3} alt="Team Member 3" loading="lazy" />
              <div className="member-info">
                <h3>Sarah Chen</h3>
                <p className="role">Head of Operations</p>
                <div className="social-links">
                  <a href="#" className="linkedin-icon">
                    <FaLinkedinIn size={24} color="#0A4834" />
                  </a>
                  <a href="#" className="gmail-icon">
                    <SiGmail size={24} color="#0A4834" />
                  </a>
                </div>
              </div>
            </div>
            <div className="team-member">
              <img src={member4} alt="Team Member 4" loading="lazy" />
              <div className="member-info">
                <h3>David Miller</h3>
                <p className="role">Lead Strategist</p>
                <div className="social-links">
                  <a href="#" className="linkedin-icon">
                    <FaLinkedinIn size={24} color="#0A4834" />
                  </a>
                  <a href="#" className="gmail-icon">
                    <SiGmail size={24} color="#0A4834" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;