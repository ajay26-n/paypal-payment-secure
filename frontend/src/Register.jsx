// src/Register.js
import React, { useState } from 'react';

function Register() {
  // State to hold all form inputs
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    mobileNumber: '',
    password: ''
  });
  
  const [message, setMessage] = useState('');

  // Update state whenever a user types in an input field
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault(); // Prevent page reload
    
    try {
      const response = await fetch('https://paypal-payment-secure.onrender.com/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      const data = await response.json();
      
      if (response.ok) {
        setMessage('Success: ' + data.message + '. You can now log in!');
        // Clear the form on successful registration
        setFormData({ username: '', email: '', mobileNumber: '', password: '' });
      } else {
        setMessage('Error: ' + data.message);
      }
    } catch (error) {
      setMessage('Error connecting to the server. Make sure your backend is running!');
    }
  };

  return (
    <div className="auth-container">
      <h2>Create an Account</h2>
      <form onSubmit={handleRegister} className="auth-form">
        <input 
          type="text" 
          name="username" 
          placeholder="Full Name (e.g., Sanjay)" 
          required 
          value={formData.username} 
          onChange={handleChange} 
        />
        <input 
          type="email" 
          name="email" 
          placeholder="Email Address" 
          required 
          value={formData.email} 
          onChange={handleChange} 
        />
        <input 
          type="tel" 
          name="mobileNumber" 
          placeholder="Mobile Number" 
          required 
          value={formData.mobileNumber} 
          onChange={handleChange} 
        />
        <input 
          type="password" 
          name="password" 
          placeholder="Create a Password" 
          required 
          value={formData.password} 
          onChange={handleChange} 
        />
        <button type="submit" className="btn-solid-full">Sign Up</button>
      </form>
      {message && <p className="auth-message">{message}</p>}
    </div>
  );
}


export default Register;
