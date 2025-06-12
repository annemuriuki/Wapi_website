import React, { useState } from 'react';
import './Signupform.css';

function SignupForm() {
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowAlert(true);

    // Hide alert after 3 seconds (optional)
    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  };

  return (
    <div className="signup-page-container">
      <div className="signup-card">
        <h2 className="signup-card-title">Join Our Community</h2>
        <p className="signup-card-subtitle">Create your account to unlock full features.</p>

        {/* Alert Message */}
        {showAlert && (
          <div className="signup-alert">
            Account created successfully! Welcome aboard.
          </div>
        )}

        <form className="signup-form" onSubmit={handleSubmit}>
          <div className="form-input-group">
            <label htmlFor="fullName">Full Name</label>
            <input type="text" id="fullName" placeholder="John Doe" className="form-field" />
          </div>

          <div className="form-input-group">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" placeholder="you@example.com" className="form-field" />
          </div>

          <div className="form-input-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="••••••••" className="form-field" />
          </div>

          <div className="form-input-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input type="password" id="confirmPassword" placeholder="••••••••" className="form-field" />
          </div>

          <button type="submit" className="signup-submit-button">Sign Up Now</button>
        </form>

        <p className="login-link">
          Already have an account? <a href="./signin" className="login-text">Log In</a>
        </p>
      </div>
    </div>
  );
}

export default SignupForm;
