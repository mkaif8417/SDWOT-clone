import React, { useState } from 'react';
import './Signin.css';
import { Link } from 'react-router-dom'; // Use only if using React Router
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <>
    <Navbar />
    <div className="signin-container">
      <form className="signin-form" onSubmit={handleSubmit}>
        <h2>Sign In</h2>

        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          id="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Sign In</button>

        <div className="signin-links">
          <a href="#">Forgot ID or Password?</a>
          <span> | </span>
          <a href="#">New User? Register here</a>
        </div>
      </form>
    </div>
    <Footer/>
          </>
  );
};

export default Signin;
