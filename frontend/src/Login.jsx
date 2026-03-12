import React, { useState } from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      
      const data = await response.json();
      if (response.ok) {
        setMessage(`Success: Welcome back, ${data.username}!`);
      } else {
        setMessage(`Error: ${data.message}`);
      }
    } catch (error) {
      setMessage('Error connecting to the server.');
    }
  };

  return (
    <div className="auth-container">
      <h2>Log In to Your Account</h2>
      <form onSubmit={handleLogin} className="auth-form">
        <input 
          type="email" placeholder="Email" required 
          value={email} onChange={(e) => setEmail(e.target.value)} 
        />
        <input 
          type="password" placeholder="Password" required 
          value={password} onChange={(e) => setPassword(e.target.value)} 
        />
        <button type="submit" className="btn-solid-full">Log In</button>
      </form>
      {message && <p className="auth-message">{message}</p>}
    </div>
  );
}

export default Login;