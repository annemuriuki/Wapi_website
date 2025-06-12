// Viewblog.jsx
import React, { useState } from 'react';
import './Viewblog.css'; // Import the CSS for this component

const Viewblog = ({ blog, onBackToList }) => {
    // State to hold the list of reviews for this blog post
    const [reviews, setReviews] = useState([]);
    // State for the new review text being typed
    const [reviewText, setReviewText] = useState('');
    // State for a confirmation message after posting a review
    const [postMessage, setPostMessage] = useState('');

    // If no blog is provided, display a message or redirect
    if (!blog) {
        return (
            <div className="view-blog-container no-blog">
                <p>Blog post not found.</p>
                <button onClick={onBackToList} className="back-button">Back to Blog List</button>
            </div>
        );
    }

    const formattedDate = new Date(blog.created_at).toLocaleDateString(undefined, {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    const handlePostReview = () => {
        if (reviewText.trim()) {
            const newReview = {
                id: reviews.length + 1, // Simple ID generation
                author: 'Anonymous User', // You can make this dynamic if authenticated users
                text: reviewText.trim(),
                created_at: new Date().toISOString(),
            };
            setReviews([...reviews, newReview]);
            setReviewText(''); // Clear the textarea
            setPostMessage('Review posted successfully!'); // Set success message
            setTimeout(() => setPostMessage(''), 3000); // Clear message after 3 seconds
        } else {
            setPostMessage('Please write something before posting.'); // Set error message
            setTimeout(() => setPostMessage(''), 3000);
        }
    };

    return (
        <div className="view-blog-page-layout">
            <div className="main-blog-content-left"> {/* New container for left column */}
                {/* Blog Image */}
                <div className="view-blog-image-wrapper">
                    <img
                        src={blog.image || 'https://placehold.co/1000x400/EBE1CF/0A4834?text=Blog+Post+Image'}
                        alt={blog.title}
                        className="view-blog-main-image"
                    />
                </div>

                {/* Post Details Section */}
                <div className="post-details-section">
                    <h2 className="post-details-title">Post Details</h2>
                    <div className="post-meta-info">
                        <span className="post-detail-item">{formattedDate}</span>
                        <br />
                        <span className="post-detail-item">Written by <span className="author-name-detail">{blog.author}</span></span>
                    </div>
                </div>

                {/* Blog Content */}
                <div className="view-blog-content">
                    {/* Displaying the full content */}
                    {blog.content.split('\n').map((paragraph, index) => (
                        <p key={index} className="blog-full-paragraph">{paragraph}</p>
                    ))}
                </div>

                {/* Back Button */}
                <button onClick={onBackToList} className="back-button">Back to Blog List</button>
            </div>

            <div className="main-blog-content-right"> {/* New container for right column */}
                {/* Add a Review Section */}
                <div className="add-review-section">
                    <h3 className="add-review-title">Add a Review</h3>
                    <div className="review-input-area">
                        <textarea
                            className="review-textarea"
                            placeholder="Share your thoughts"
                            value={reviewText}
                            onChange={(e) => setReviewText(e.target.value)}
                        ></textarea>
                        {postMessage && <p className="post-message">{postMessage}</p>} {/* Display message */}
                        <button onClick={handlePostReview} className="post-review-button">
                            Post it!
                        </button>
                    </div>
                </div>

                {/* Display Posted Reviews */}
                {reviews.length > 0 && (
                    <div className="posted-reviews-section">
                        <h3 className="posted-reviews-title">Reviews ({reviews.length})</h3>
                        {reviews.map((review) => (
                            <div key={review.id} className="single-review-item">
                                <p className="review-text">"{review.text}"</p>
                                <p className="review-author-date">
                                    - {review.author} on {new Date(review.created_at).toLocaleDateString()}
                                </p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Viewblog;
