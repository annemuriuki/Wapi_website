import React from 'react';
import '../styles/pages/Pricing.css';

const plans = [
  {
    name: 'Starter',
    price: '$19/mo',
    features: [
      'Basic features',
      'Email support',
      'Single user',
    ],
    highlight: false,
  },
  {
    name: 'Pro',
    price: '$49/mo',
    features: [
      'All Starter features',
      'Priority support',
      'Up to 5 users',
      'Advanced analytics',
    ],
    highlight: true,
  },
  {
    name: 'Enterprise',
    price: 'Contact Us',
    features: [
      'All Pro features',
      'Dedicated manager',
      'Custom integrations',
      'Unlimited users',
    ],
    highlight: false,
  },
];

function Pricing() {
  return (
    <section className="pricing-page">
      <header className="pricing-header">
        <h1>Pricing & Plans</h1>
        <p>Choose the plan that fits your business needs. Simple, transparent pricing.</p>
      </header>
      <div className="pricing-table-container">
        {plans.map((plan) => (
          <article key={plan.name} className={`pricing-card${plan.highlight ? ' highlight' : ''}`}>
            <h2 className="plan-name">{plan.name}</h2>
            <div className="plan-price">{plan.price}</div>
            <ul className="plan-features">
              {plan.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
            <button className="select-plan-btn">{plan.price === 'Contact Us' ? 'Contact Sales' : 'Choose Plan'}</button>
          </article>
        ))}
      </div>
      <footer className="pricing-footer">
        <p>Need a custom solution? <a href="/contact">Contact us</a> for enterprise pricing.</p>
      </footer>
    </section>
  );
}

export default Pricing; 