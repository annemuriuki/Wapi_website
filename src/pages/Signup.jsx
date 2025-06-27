import React from 'react';
import { Link } from 'react-router-dom'; 
import '../styles/pages/Signup.css'; 

function Signup() {
  return (
    <div className="signup-container">
      <div className="signup-header">
        <h1>Join Our Platform</h1>
        <p>Unlock a world of possibilities with our comprehensive solutions designed for everyone. Experience secure, efficient, and seamless interactions tailored to your specific needs.</p>
      </div>

      <div className="signup-body">
        <div className="get-started">
          <h2>Get Started in Minutes:</h2>
          <ul>
            <li><span className="checkmark">&#10003;</span> Quick and easy registration</li>
            <li><span className="checkmark">&#10003;</span> Secure and reliable services</li>
            <li><span className="checkmark">&#10003;</span> Access to powerful features</li>
          </ul>
          <p className="join-us">Sign up today and streamline your operations!</p>
        </div>

        <div className="signup-form">
          <h2>Create Your Free Account.</h2>

          <Link to="/signup-form" className="continue-button">
            Continue
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;