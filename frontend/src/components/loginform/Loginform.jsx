// src/components/loginform/Loginform.jsx
import React from 'react';
import './Loginform.css';
import { Link } from 'react-router-dom';

export const Loginform = () => {
  return (
    <div className="login-page">
      <div className="login-container">
        <h2 className="login-title">Welcome Back</h2>
        <form className="login-form">
          <input type="email" placeholder="Email" className="login-input" />
          <input type="password" placeholder="Password" className="login-input" />
          <button type="submit" className="login-button">Login</button>
        </form>
        <p className="login-footer">
          Don't have an account? <Link to="/Signup">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};
