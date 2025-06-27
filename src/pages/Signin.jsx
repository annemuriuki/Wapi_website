import React, { useState } from 'react';
import '../styles/pages/Signin.css';
import { Link } from 'react-router-dom';

function SignIn() {
  const [showMessage, setShowMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowMessage(true);

    setTimeout(() => {
      setShowMessage(false);
    }, 3000);
  };

  return (
    <div className="signin-page-container">
      <div className="signin-card">
        <h2 className="signin-card-title">Welcome Back</h2>
        <p className="signin-card-subtitle">Log in to your account.</p>

        {showMessage && (
          <div className="signin-alert">
            Just a moment, logging you in...
          </div>
        )}

        <form className="signin-form" onSubmit={handleSubmit}>
          <div className="form-input-group">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" placeholder="you@example.com" className="form-field" />
          </div>

          <div className="form-input-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="••••••••" className="form-field" />
          </div>

          <p className="forgot-password-link">
            <a href="#" className="forgot-password-text">Forgot Password?</a>
          </p>

          <button type="submit" className="signin-submit-button">Log In</button>
        </form>

        <p className="signup-link">
          Don't have an account? <Link to="/signup-form" className="signup-text">Sign Up</Link>
        </p>
      </div>
    </div>
  );
}

export default SignIn;
