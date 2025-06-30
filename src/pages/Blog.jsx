// Blog.jsx
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/pages/Blog.css'; 
import Viewblog from './Viewblog'; 
import blogPosts from '../data/blogPosts.json';

const BlogHeader = () => (
    <div className="blog-header-container">
        <h1 className="blog-header-title">Our Insights & News</h1>
        <p className="blog-header-subtitle">Stay informed with the latest trends and expert analysis from our team.</p>
    </div>
);

const BlogCard = ({ blog, onReadMore }) => {
    const formattedDate = new Date(blog.date).toLocaleDateString(undefined, {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    return (
        <div className="blog-post">
            <div className="blog-post-image">
                <img src={blog.image || 'https://placehold.co/400x250/EBE1CF/0A4834?text=Blog+Image'} alt={blog.title} />
            </div>
            <div className="blog-post-content">
                <div className="blog-post-meta">
                    <span>By {blog.author}</span>
                    <span>{formattedDate}</span>
                </div>
                <h2 className="blog-post-title">{blog.title}</h2>
                <p className="blog-post-excerpt">{blog.excerpt}</p>
                <button
                    onClick={() => onReadMore(blog.id)} 
                    className="read-more-button"
                >
                    Read More 
                </button>
            </div>
        </div>
    );
};

const Blog = () => {
    const [selectedBlog, setSelectedBlog] = useState(null);
    const location = useLocation();

    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const blogId = queryParams.get('blogId');

        if (blogId) {
            const id = parseInt(blogId, 10);
            const blogToView = blogPosts.find(blog => blog.id === id);
            if (blogToView) {
                setSelectedBlog(blogToView);
            }
        }
    }, [location.search]);

    // Scroll to top when selectedBlog changes
    useEffect(() => {
        if (selectedBlog) {
            window.scrollTo(0, 0);
        }
    }, [selectedBlog]);

    const handleReadMore = (id) => {
        const blogToView = blogPosts.find(blog => blog.id === id);
        setSelectedBlog(blogToView);
    };

    const handleBackToList = () => {
        setSelectedBlog(null);
    };

    return (
        <div className="blog-page">
            {selectedBlog ? (
                <Viewblog blog={selectedBlog} onBackToList={handleBackToList} />
            ) : (
                <>
                    <BlogHeader />
                    <div className="blog-grid">
                        {blogPosts.map(blog => (
                            <BlogCard
                                key={blog.id}
                                blog={blog} 
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
