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
import Features from '../components/Features/Features';
import AboutSection from '../components/About/AboutSection';
import TestimonialsSection from '../components/Testimonials/TestimonialsSection';

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
    <main className="home-container">
      <section className="home-section">
        <div className="home-content">
          <p className="welcome-text">WELCOME TO OUR SOLUTIONS</p>
          <h1 className="hero-title">Innovate. Transform.<br />Lead the Future.</h1>
          <p className="hero-subtitle">Empowering businesses to achieve unparalleled growth with cutting-edge solutions and strategic foresight. <br></br>Discover how we can elevate your vision.</p>
          <button className="cta-button" onClick={() => navigate('/signup')}>
            Get Started
          </button>
        </div>
        <div className="hero-image-container">
          <img src={HeroImage} alt="Modern Business Solution" className="hero-realistic-image" />
        </div>
      </section>

      <Features />

      <AboutSection />

      <TestimonialsSection />

      <section className="blog-section">
        <header className="blog-header">
          <h2>Uncover the Latest Insights</h2>
          <Link to="/blog" className="blog-button">
            Visit Our Blog
          </Link>
        </header>
        <div className="blog-list">
          {blogPosts.map((blog) => (
            <article key={blog.id} className="blog-card" onClick={() => handleBlogClick(blog.id)} tabIndex={0} role="button" aria-label={`Read blog post: ${blog.title}`}>
              <div className="blog-image-container">
                <img src={blog.image} alt={blog.title} className="blog-image" />
              </div>
              <div className="blog-content">
                <h3 className="blog-title">{blog.title}</h3>
                <div className="blog-meta">
                  <div className="author-info">
                    <img src="/images/blog/author.jpeg" alt={`Author: ${blog.author}`} className="author-image" />
                    <span className="author-name">By {blog.author}</span>
                  </div>
                </div>
                <p className="blog-excerpt">{blog.excerpt}</p>
                <div className="blog-date">
                  <span className="date"><strong>{blog.date}</strong></span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="our-clients-section">
        <h2>Trusted By</h2>
        <Slider {...settings} ref={sliderRef}>
          {logos.map((logo) => (
            <div key={logo.id} className="client-logo-container">
              <img src={logo.src} alt={`Client Logo ${logo.id}`} className="client-logo" />
            </div>
          ))}
        </Slider>
      </section>
    </main>
  );
}

export default Home;