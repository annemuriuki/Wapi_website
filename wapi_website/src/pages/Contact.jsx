import React, { useState } from 'react';
import './Contact.css';
import { FaMapMarkerAlt, FaPhone, FaRegEnvelope } from 'react-icons/fa'; // Assuming you have these icons installed

function Contact() {
  // Retain useState for controlled components, but remove submission logic
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  // No need for submissionStatus or isSubmitting for a template
  // const [submissionStatus, setSubmissionStatus] = useState('');
  // const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

const handleSubmit = (e) => {
  e.preventDefault();

  // Create the alert element
  const alertDiv = document.createElement('div');
  alertDiv.className = 'custom-alert';
  alertDiv.textContent = 'Thank you for getting in touch with us. We will get back to you shortly!';
  
  // Append and remove after animation
  document.body.appendChild(alertDiv);
  setTimeout(() => {
    alertDiv.remove();
  }, 4000);

  // Clear form
  setFormData({ name: '', email: '', subject: '', message: '' });
};

  return (
    <div className="contact-container">
      <div className="contact-info">
        <h2>Connect With Our Team</h2> {/* Updated Heading */}
        <p>Our dedicated team is ready to provide the insights and support you need.</p> {/* Updated Subtitle */}
        <div className="office">
          <div className="icon">
            <FaMapMarkerAlt size={24} color="#fff" />
          </div>
          <div>
            <h3>Our Global Office</h3> {/* Generic title */}
            <p>123 Solution Drive, Suite 500, Innovate City, IX 90210</p> {/* Generic Address */}
          </div>
        </div>
        <div className="phone">
          <div className="icon">
            <FaPhone size={24} color="#fff" />
          </div>
          <div>
            <h3>Phone Support</h3> {/* Generic title */}
            <p>+1 (800) 555-0199</p> {/* Generic Phone Number */}
          </div>
        </div>
        {/* Optional: Add a generic email section */}
        <div className="email">
          <div className="icon">
            {/* You'll need an MdEmail icon if you want to use it here, assuming you import it */}
            {/* <MdEmail size={24} color="#fff" /> */}
            <FaRegEnvelope size={24} color="#fff" /> {/* Using FaRegEnvelope as a placeholder for now */}
          </div>
          <div>
            <h3>Email Us</h3>
            <p>info@templatecompany.com</p> {/* Generic Email */}
          </div>
        </div>
      </div>
      <div className="contact-form-container">
        <div className="form-header">
          <p className="get-in-touch">GET IN TOUCH</p>
          <h2 className="reach-out">Let's Discuss Your Project <span className="today-accent">Today</span></h2> {/* Updated Heading */}
          <p className="form-description">Share your vision with us, and our experts will help you craft the perfect solution. We look forward to hearing from you.</p> {/* Updated Description */}
        </div>
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="name-fields">
            <div className="form-group">
              <label htmlFor="name">Your Name</label> {/* Clarified label */}
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="email-phone-fields">
            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            {/* Keeping the phone number field as a commented-out option for clients */}
            {/* <div className="form-group">
              <label htmlFor="phoneNumber">Phone Number (Optional)</label>
              <input type="tel" id="phoneNumber" name="phoneNumber" />
            </div> */}
          </div>
          <div className="form-group">
            <label htmlFor="subject">Subject of Inquiry</label> {/* Clarified label */}
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>
          <br></br>
          <div className="form-group">
            <label htmlFor="message">Your Message</label> {/* Clarified label */}
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div><br />
          <button type="submit" className="submit-button">
            Send Message {/* Removed loading text */}
          </button>
          {/* Removed submissionStatus display */}
          {/* {submissionStatus && <p>{submissionStatus}</p>} */}
        </form>
      </div>
    </div>
  );
}

export default Contact;