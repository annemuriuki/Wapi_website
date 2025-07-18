// Home.jsx
import React from 'react';
import '../styles/pages/Home.css'; 
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useRef } from 'react';
import HeroImage from '../assets/images/hero/hero_image.jpeg'; 
import about from '../assets/images/about/about.jpeg'; 
import logo1 from '../assets/images/logos/logo1.png';
import logo2 from '../assets/images/logos/logo2.png';
import logo3 from '../assets/images/logos/logo3.png';
import logo4 from '../assets/images/logos/logo4.png';
import strategicConsultingIcon from '../assets/images/icons/StrategicConsulting .jpg';
import perfomanceOptimizationIcon from '../assets/images/icons/PerfomanceOptimization .jpg';
import digitalTransformationIcon from '../assets/images/icons/DigitalTransformation  .jpg';
import { useNavigate } from 'react-router-dom';
import blogPosts from '../data/blogPosts.json';

function Home() {
  const navigate = useNavigate();
  const sliderRef = useRef(null);
  const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  cssEase: 'linear',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        autoplay: false, 
      },
    },
  ],
};

  const logos = [
    { id: 4, src: logo1 },
    { id: 6, src: logo2 },
    { id: 7, src: logo3 },
    { id: 10, src: logo4 },
  ];

  const handleBlogClick = (blogId) => {
    navigate(`/blog?blogId=${blogId}`);
  };
  
  return (
    <div className="home-container">
      <div className="home-section">
        <div className="home-content">
          <p className="welcome-text">WELCOME TO OUR SOLUTIONS</p>
          <h1 className="hero-title">Innovate. Transform.<br />Lead the Future.</h1>
          <p className="hero-subtitle">Empowering businesses to achieve unparalleled growth with cutting-edge solutions and strategic foresight. <br></br>Discover how we can elevate your vision.</p>
        </div>
        <div className="hero-image-container">
          <img src={HeroImage} alt="Modern Business Solution" className="hero-realistic-image" />
        </div>
      </div>

      <div className="features-section">
        <div className="feature-card">
          <img src={strategicConsultingIcon} alt="Strategic Consulting" className="feature-icon" />
          <h3 className="feature-title">Strategic Consulting</h3>
          <p className="feature-description">Gain clarity and direction with expert insights into market dynamics, operational efficiency, and future-proof strategies.</p>
        </div>
        <div className="feature-card">
          <img src={digitalTransformationIcon} alt="Digital Transformation" className="feature-icon" />
          <h3 className="feature-title">Digital Transformation</h3>
          <p className="feature-description">Leverage cutting-edge technology and seamless integration to modernize your operations and enhance user experience.</p>
        </div>
        <div className="feature-card">
          <img src={perfomanceOptimizationIcon} alt="Performance Optimization" className="feature-icon" />
          <h3 className="feature-title">Performance Optimization</h3>
          <p className="feature-description">Unlock peak efficiency and maximize ROI through data-driven analysis and continuous improvement methodologies.</p>
        </div>
      </div>

      <div className="full-width-hanging-blocks-section">
        <div className="full-width-content-area">
          <div className="full-width-image-container">
            <img
              src={about} 
              alt="Why Partner With Us"
              className="circular-image"
            />
          </div>
          <div className="full-width-text-content">
            <h2 className="full-width-section-heading">
              Why Partner With TransactFlow?
            </h2>
            <p className="full-width-section-subheading">Distinguishing ourselves through unparalleled expertise, dedication, and measurable impact.</p>
            <div className="full-width-hanging-blocks-list">
              <div className="full-width-hanging-block-item">
                <div className="green-accent"></div>
                <span className="benefit-icon">✓</span> 
                <p className="benefit-text"><strong>Expert-Led Team</strong><br />Benefit from the collective wisdom of seasoned professionals, each a leader in their respective field.</p>
              </div>
              <div className="full-width-hanging-block-item">
                <div className="green-accent"></div>
                <span className="benefit-icon">✓</span> 
                <p className="benefit-text"><strong>Tailored Strategies</strong><br />We craft bespoke solutions that align perfectly with your unique objectives and organizational culture.</p>
              </div>
              <div className="full-width-hanging-block-item">
                <div className="green-accent"></div>
                <span className="benefit-icon">✓</span> 
                <p className="benefit-text"><strong>Client-Centric Approach</strong><br />Your goals are our priority. We foster collaborative partnerships for mutual growth.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="blog-section">
        <div className="blog-header">
          <h2>Uncover the Latest Insights</h2>
          <Link to="/blog" className="blog-button">
            Visit Our Blog
          </Link>
        </div>
        <div className="blog-list">
          {blogPosts.map((blog) => (
            <div key={blog.id} className="blog-card" onClick={() => handleBlogClick(blog.id)}>
              <div className="blog-image-container">
                <img src={blog.image} alt={blog.title} className="blog-image" />
              </div>
              <div className="blog-content">
                <h3 className="blog-title">{blog.title}</h3>
                <div className="blog-meta">
                  <div className="author-info">
                    <img src="/images/blog/author.jpeg" alt={blog.author} className="author-image" />
                    <span className="author-name">By {blog.author}</span>
                  </div>
                </div>
                <p className="blog-excerpt">{blog.excerpt}</p>
                <div className="blog-date">
                  <span className="date"><strong>{blog.date}</strong></span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="our-clients-section">
        <h2>Trusted By</h2>
        <Slider {...settings} ref={sliderRef}>
          {logos.map((logo) => (
            <div key={logo.id} className="client-logo-container">
              <img src={logo.src} alt={`Client Logo ${logo.id}`} className="client-logo" />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Home;