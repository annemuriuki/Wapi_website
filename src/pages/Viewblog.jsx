// Viewblog.jsx
import React, { useState } from 'react';
import '../styles/pages/Viewblog.css'; 

const Viewblog = ({ blog, onBackToList }) => {
    const [reviews, setReviews] = useState([]);
    const [reviewText, setReviewText] = useState('');
    const [postMessage, setPostMessage] = useState('');

    if (!blog) {
        return (
            <div className="view-blog-container no-blog">
                <p>Blog post not found.</p>
                <button onClick={onBackToList} className="back-button">Back to Blog List</button>
            </div>
        );
    }

    const formattedDate = new Date(blog.date).toLocaleDateString('en-US');

    const handlePostReview = () => {
        if (reviewText.trim()) {
            const newReview = {
                id: reviews.length + 1, 
                author: 'Anonymous User', 
                text: reviewText.trim(),
                created_at: new Date().toISOString(),
            };
            setReviews([...reviews, newReview]);
            setReviewText('');
            setPostMessage('Review posted successfully!');
            setTimeout(() => setPostMessage(''), 3000);
        } else {
            setPostMessage('Please write something before posting.');
            setTimeout(() => setPostMessage(''), 3000);
        }
    };

    return (
        <div className="view-blog-page-layout">
            <div className="main-blog-content-left">
                <div className="view-blog-hero-image-wrapper">
                    <img
                        src={blog.image || 'https://placehold.co/1000x400/EBE1CF/0A4834?text=Blog+Post+Image'}
                        alt={blog.title}
                        className="view-blog-hero-image"
                    />
                    <div className="view-blog-hero-overlay">
                        <h1 className="view-blog-title">{blog.title}</h1>
                        <div className="view-blog-author-box">
                            <img src="/images/blog/author.jpeg" alt={blog.author} className="author-image" />
                            <div>
                                <span className="author-name-detail">{blog.author}</span>
                                <span className="blog-date">{formattedDate}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="view-blog-content-card">
                    <div className="view-blog-content">
                        {blog.content.split('\n').map((paragraph, index) => (
                            <p key={index} className="blog-full-paragraph">{paragraph}</p>
                        ))}
                    </div>
                </div>
                <button onClick={onBackToList} className="back-button">Back to Blog List</button>
            </div>
            <div className="main-blog-content-right">
                <div className="review-section">
                    <h3 className="review-title">Add a Review</h3>
                    <div className="review-input-area">
                        <textarea
                            className="review-textarea"
                            placeholder="Share your thoughts"
                            value={reviewText}
                            onChange={(e) => setReviewText(e.target.value)}
                        ></textarea>
                        {postMessage && <p className="post-message">{postMessage}</p>} 
                        <button onClick={handlePostReview} className="post-review-button">
                            Post it!
                        </button>
                    </div>
                </div>
                {reviews.length > 0 && (
                    <div className="posted-reviews-section">
                        <h3 className="posted-reviews-title">Reviews ({reviews.length})</h3>
                        {reviews.map((review) => (
                            <div key={review.id} className="single-review-item enhanced-review-bubble">
                                <div className="review-avatar-enhanced">{review.author[0]}</div>
                                <div>
                                    <p className="review-text">"{review.text}"</p>
                                    <p className="review-author-date">
                                        - {review.author} on {new Date(review.created_at).toLocaleDateString()}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Viewblog;
