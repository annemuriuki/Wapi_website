import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const templateFaqs = [
    {
      question: 'What types of services does TransactFlow offer?',
      answer: 'TransactFlow specializes in a range of solutions including strategic consulting, digital transformation, performance optimization, and creative branding. Our services are designed to help businesses of all sizes achieve their growth objectives.'
    },
    {
      question: 'How can TransactFlow help my business grow?',
      answer: 'We help businesses grow by identifying key opportunities, streamlining operations, enhancing digital presence, and developing robust strategies. Our tailored approach ensures solutions align perfectly with your unique challenges and goals.'
    },
    {
      question: 'Is TransactFlow suitable for small businesses?',
      answer: 'Absolutely! While we serve enterprises, our flexible and scalable solutions are highly beneficial for small and medium-sized businesses looking to innovate, optimize processes, and expand their market reach effectively.'
    },
    {
      question: 'What is your approach to client collaboration?',
      answer: 'Client collaboration is at the core of our methodology. We believe in a partnership approach, working closely with your team through every phase of a project, from initial concept to implementation and ongoing support, ensuring transparency and alignment.'
    },
    {
      question: 'How do you ensure the security of client data?',
      answer: 'Data security is paramount. We adhere to stringent industry standards and employ robust encryption, access controls, and regular security audits to protect all client information. Our commitment is to maintain the highest level of data integrity and confidentiality.'
    },
    {
      question: 'What is the typical timeline for a project?',
      answer: 'Project timelines vary depending on complexity and scope. After an initial consultation and thorough assessment of your needs, we provide a detailed proposal including estimated timelines and milestones. We prioritize efficient delivery without compromising quality.'
    },
    {
      question: 'Do you offer ongoing support after project completion?',
      answer: 'Yes, our commitment extends beyond project completion. We offer various levels of post-implementation support, maintenance, and optimization services to ensure your solutions continue to perform optimally and evolve with your business needs.'
    },
    {
      question: 'How can I request a consultation or quote?',
      answer: 'Requesting a consultation is easy! Simply visit our "Contact Us" page, fill out the inquiry form, or reach out to us directly via phone or email. Our team will promptly get in touch to discuss your requirements and provide a tailored proposal.'
    },
    {
      question: 'What makes TransactFlow different from competitors?',
      answer: 'Our distinctiveness lies in our combination of deep industry expertise, a truly client-centric philosophy, and a relentless pursuit of innovation. We focus on delivering measurable results and building long-term, impactful partnerships based on trust and shared success.'
    },
    {
      question: 'Can you work with clients remotely?',
      answer: 'Yes, we are fully equipped to collaborate with clients remotely, leveraging modern communication and project management tools. We have a proven track record of successful remote partnerships with clients across different geographical locations.'
    }
  ];

  return (
    <div className="faq-container"> 
      <div className="faq-header">
        <p>Find answers to your most common questions below.</p>
      </div>
      <h2>Frequently Asked Questions</h2> 
      <div className="faq-list">
        {templateFaqs.map((faq, index) => (
          <div className={`faq-item ${activeIndex === index ? 'active' : ''}`} key={index}>
            <div className="faq-question" onClick={() => toggleAccordion(index)}>
              <h3>{faq.question}</h3>
              <span className="arrow">{activeIndex === index ? '-' : '+'}</span>
            </div>
            {activeIndex === index && (
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;