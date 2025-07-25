import React from 'react';
import '../../styles/components/Testimonials.css';

// ---
// Testimonials data array
// To customize, edit the testimonials below.
// ---
const testimonials = [
  {
    name: 'Jane Doe',
    role: 'Chief Marketing Officer, FinEdge Solutions',
    photo: 'https://randomuser.me/api/portraits/women/44.jpg',
    quote: 'TransactFlow transformed our business. Their expertise and dedication are unmatched!'
  },
  {
    name: 'John Smith',
    role: 'Head of IT, MedicaHealth Group',
    photo: 'https://randomuser.me/api/portraits/men/32.jpg',
    quote: 'A seamless experience from start to finish. Highly recommended for any growing company.'
  },
  {
    name: 'Emily Johnson',
    role: 'Operations Manager, RetailPro Inc.',
    photo: 'https://randomuser.me/api/portraits/women/65.jpg',
    quote: 'Their tailored strategies and client-centric approach made all the difference.'
  },
  // ---
  // To add a new testimonial, copy the object above and update the fields.
  // ---
];

const TestimonialsSection = () => (
  <div className="testimonials-section">
    <h2 className="testimonials-headline">What Our Clients Say</h2>
    <div className="testimonials-list">
      {testimonials.map((t, idx) => (
        <div className="testimonial-card" key={idx}>
          <img src={t.photo} alt={t.name} className="testimonial-photo" loading="lazy" />
          <p className="testimonial-quote">“{t.quote}”</p>
          <div className="testimonial-author">
            <span className="testimonial-name">{t.name}</span>
            <span className="testimonial-role">{t.role}</span>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default TestimonialsSection; 