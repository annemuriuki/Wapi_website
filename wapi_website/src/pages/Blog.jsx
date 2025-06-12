// Blog.jsx
import React, { useState, useEffect } from 'react';
import './Blog.css'; // Import the CSS for the blog list
import Viewblog from './Viewblog'; // Import the new Viewblog component

// Import your existing images
import blogImage1 from '../assets/blog1.jpeg';
import blogImage2 from '../assets/blog2.jpeg';
import blogImage3 from '../assets/blog3.jpeg';
import blogImage4 from '../assets/blog4.jpeg';

const BlogHeader = () => (
    <div className="blog-header-container">
        <h1 className="blog-header-title">Our Insights & News</h1> {/* Updated Header Title */}
        <p className="blog-header-subtitle">Stay informed with the latest trends and expert analysis from our team.</p> {/* Updated Subtitle */}
    </div>
);

// BlogCard now accepts an onReadMore prop
const BlogCard = ({ blog, onReadMore }) => {
    const formattedDate = new Date(blog.created_at).toLocaleDateString(undefined, {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    // Create an excerpt by taking the first sentence or part of the content
    const excerpt = blog.content.split('. ')[0] + (blog.content.includes('. ') ? '...' : '');

    return (
        <div className="blog-post">
            <div className="blog-post-image">
                {/* Use a fallback placeholder image if blog.image is not available */}
                <img src={blog.image || 'https://placehold.co/400x250/EBE1CF/0A4834?text=Blog+Image'} alt={blog.title} />
            </div>
            <div className="blog-post-content">
                <div className="blog-post-meta">
                    <span>By {blog.author}</span>
                    <span>{formattedDate}</span>
                </div>
                <h2 className="blog-post-title">{blog.title}</h2>
                <p className="blog-post-excerpt">{excerpt}</p>
                {/* Use a button or div with onClick to handle navigation internally */}
                <button
                    onClick={() => onReadMore(blog.id)} // Pass the blog ID to the handler
                    className="read-more-button"
                >
                    Read More &gt;
                </button>
            </div>
        </div>
    );
};

const Blog = () => {
    // State to hold the currently selected blog for viewing
    const [selectedBlog, setSelectedBlog] = useState(null);

    // Static blog data for template display
    const staticBlogs = [
        {
            id: 1,
            title: 'The Future of AI in Business: A Strategic Outlook',
            content: 'Artificial intelligence continues to redefine industry landscapes at an unprecedented pace. Understanding its strategic implications is crucial for modern businesses looking to stay competitive. This article explores key trends and offers actionable insights for integrating AI into your operations to drive efficiency and foster innovation. The rapid advancements in machine learning are opening new avenues for personalized customer experiences and predictive analytics. Companies that embrace these changes early will likely see significant advantages.',
            created_at: '2025-05-15T10:00:00Z',
            author: 'Expert Contributor',
            image: blogImage2,
        },
        {
            id: 2,
            title: '5 Essential Strategies for Digital Marketing Success in 2025',
            content: 'In today\'s dynamic digital landscape, an effective marketing strategy is paramount. This guide outlines five essential approaches to elevate your online presence and truly engage your target audience. From advanced SEO tactics to leveraging new social media platforms, staying updated is key. Content marketing, influencer collaborations, and data-driven campaigns are becoming indispensable for achieving measurable results. Adaptability and continuous learning will be crucial for success.',
            created_at: '2025-04-28T14:30:00Z',
            author: 'Industry Analyst',
            image: blogImage1,
        },
        {
            id: 3,
            title: 'Navigating Global Markets: A Guide for Emerging Businesses',
            content: 'Expanding into international territories presents both immense opportunities and unique challenges. This comprehensive guide helps emerging businesses understand the nuances of global market entry. We cover everything from regulatory compliance to cultural considerations, ensuring a smooth transition. Strategic partnerships and localized approaches are vital for successful cross-border operations. Preparing thoroughly for global expansion can unlock significant growth potential.',
            created_at: '2025-04-01T09:15:00Z',
            author: 'Growth Specialist',
            image: blogImage3,
        },
        {
            id: 4,
            title: 'The Impact of Blockchain on Supply Chain Management',
            content: 'Blockchain technology is revolutionizing transparency and efficiency in supply chain management. Discover how distributed ledger technology can enhance traceability, reduce fraud, and streamline operations. Its immutable nature offers unprecedented levels of trust and accountability. Businesses adopting blockchain are finding new ways to optimize logistics and ensure product authenticity. The future of supply chains looks highly decentralized and verifiable.',
            created_at: '2025-03-20T11:45:00Z',
            author: 'Tech Innovator',
            image: blogImage4,
        },
    ];

    // Function to handle clicking "Read More"
    const handleReadMore = (id) => {
        const blogToView = staticBlogs.find(blog => blog.id === id);
        setSelectedBlog(blogToView);
    };

    // Function to go back to the blog list
    const handleBackToList = () => {
        setSelectedBlog(null);
    };

    return (
        <div className="blog-page">
            {/* Conditionally render Viewblog or the list of BlogCards */}
            {selectedBlog ? (
                <Viewblog blog={selectedBlog} onBackToList={handleBackToList} />
            ) : (
                <>
                    <BlogHeader />
                    <div className="blog-grid">
                        {staticBlogs.map(blog => (
                            <BlogCard
                                key={blog.id}
                                blog={blog} // Pass the entire blog object
                                onReadMore={handleReadMore}
                            />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default Blog;
