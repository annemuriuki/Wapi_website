import React from 'react';
import '../styles/pages/Solution.css';
import { Link } from 'react-router-dom';
import { FaGlobe, FaBuilding, FaUsers } from 'react-icons/fa'; 
import professionalImage from '../assets/images/about/reachus.jpeg';

const Solution = () => {
  const solutions = [
    {
      id: 'core-services',
      title: 'Core Service Offerings',
      icon: <FaGlobe />, 
      details: (
        <ul>
          <li>Strategic Consulting & Advisory</li>
          <li>Digital Transformation Initiatives</li>
          <li>Custom Software Development</li>
          <li>Cloud Solutions & Migration</li>
          <li>Data Analytics & Insights</li>
        </ul>
      ),
    },
    {
      id: 'specialized-solutions',
      title: 'Specialized Business Solutions',
      icon: <FaBuilding />, 
      details: (
        <ul>
          <li>Enterprise Resource Planning (ERP)</li>
          <li>Customer Relationship Management (CRM)</li>
          <li>Supply Chain Optimization</li>
          <li>E-commerce Platform Development</li>
          <li>Cybersecurity & Compliance</li>
        </ul>
      ),
    },
    {
      id: 'support-resources',
      title: 'Support & Resources',
      icon: <FaUsers />, 
      details: <p>Access our comprehensive knowledge base or <Link to="/contact" className="inline-link">contact our support team</Link> for assistance.</p>,
    },
  ];

  return (
    <div className="solutions-page">
      <section className="header-section">
        <div className="header-content">
          <h1>Our Solutions</h1>
          <p>Discover our comprehensive suite of innovative services tailored for your success.</p>
        </div>
      </section>

      <section className="solutions-overview">
        <div className="container">
          <h2>Explore Our Diverse Services</h2>
          <div className="solutions-list">
            {solutions.map((solution) => (
              <div key={solution.id} className="solution-item">
                <div className="solution-header">
                  <span className="solution-icon">{solution.icon}</span>
                  <h3>{solution.title}</h3>
                </div>
                <div className="solution-details">{solution.details}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="transform-section">
        <div className="transform-content">
          <p className="our-professionals">PARTNER WITH EXPERTS</p>
          <h2 className="transform-question">Ready to Transform Your Business?</h2>
          <Link to="/contact">
            <button className="contact-us-button">GET STARTED TODAY &gt;</button>
          </Link>
        </div>
        <div className="transform-image">
          <img src={professionalImage} alt="Professional Team" />
        </div>
      </section>
    </div>
  );
};

export default Solution;