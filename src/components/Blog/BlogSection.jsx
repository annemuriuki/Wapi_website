import React from 'react';
import { Link } from 'react-router-dom';
import BlogCard from './BlogCard';
import '../../styles/components/Blog.css';

/**
 * BlogSection component for displaying multiple blog posts
 * @param {Object} props - Component props
 * @param {Array} props.posts - Array of blog post objects
 * @param {string} props.title - Section title
 * @param {string} props.buttonText - Text for the CTA button
 * @param {string} props.buttonLink - Link for the CTA button
 * @param {Function} props.onBlogClick - Optional click handler for blog cards
 */
function BlogSection({ posts, title, buttonText, buttonLink, onBlogClick }) {
  return (
    <section className="blog-section">
      <header className="blog-header">
        <h2>{title}</h2>
        {buttonText && buttonLink && (
          <Link to={buttonLink} className="blog-button">
            {buttonText}
          </Link>
        )}
      </header>
      <div className="blog-list">
        {posts.map((post) => (
          <article key={post.id}>
            <BlogCard
              id={post.id}
              title={post.title}
              excerpt={post.excerpt}
              image={post.image}
              author={post.author}
              authorImage={post.authorImage}
              date={post.date}
              onClick={onBlogClick}
            />
          </article>
        ))}
      </div>
    </section>
  );
}

export default BlogSection;