// src/components/loginform/Signup.jsx
import React from 'react';
import './Signup.css';
import { Link } from 'react-router-dom';

export const Signup = () => {
  return (
    <div className="signup-page">
      <div className="signup-container">
        <h2 className="signup-title">Create Your Account</h2>
        <form className="signup-form">
          <input type="email" placeholder="Email" className="signup-input" />
          <input type="password" placeholder="Password" className="signup-input" />
          <button type="submit" className="signup-button">Sign Up</button>
        </form>
        <p className="signup-footer">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};
