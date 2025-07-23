import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/components/Blog.css';

/**
 * BlogCard component for displaying a single blog post preview
 * @param {Object} props - Component props
 * @param {number} props.id - Blog post ID
 * @param {string} props.title - Blog post title
 * @param {string} props.excerpt - Short excerpt from the blog post
 * @param {string} props.image - Source URL for the blog post image
 * @param {string} props.author - Author name
 * @param {string} props.authorImage - Source URL for the author image
 * @param {string} props.date - Publication date
 * @param {Function} props.onClick - Optional click handler (if not provided, will navigate to blog post)
 */
function BlogCard({ id, title, excerpt, image, author, authorImage, date, onClick }) {
  const navigate = useNavigate();
  
  const handleClick = () => {
    if (onClick) {
      onClick(id);
    } else {
      navigate(`/blog?blogId=${id}`);
    }
  };
  
  return (
    <article className="blog-card" onClick={handleClick} tabIndex={0} role="button" aria-label={`Read blog post: ${title}`}> 
      <div className="blog-image-container">
        <img src={image} alt={title} className="blog-image" />
      </div>
      <div className="blog-content">
        <h3 className="blog-title">{title}</h3>
        <div className="blog-meta">
          <div className="author-info">
            <img src={authorImage} alt={`Author: ${author}`} className="author-image" />
            <span className="author-name"><strong>{author}</strong></span>
          </div>
        </div>
        <p className="blog-excerpt">{excerpt}</p>
        <div className="blog-date">
          <span className="date"><strong>{date}</strong></span>
        </div>
      </div>
    </article>
  );
}

export default BlogCard;