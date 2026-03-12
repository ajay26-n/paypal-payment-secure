import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        {/* Navigation Bar */}
        <nav className="navbar">
          <div className="nav-brand">
            <Link to="/">PayPal</Link>
          </div>
          <div className="nav-links">
            <span>Personal</span>
            <span>Business</span>
            <span>Enterprise</span>
          </div>
          <div className="nav-actions">
            <Link to="/login" className="btn-outline">Log In</Link>
            <Link to="/register" className="btn-solid">Sign Up</Link>
          </div>
        </nav>

        {/* Page Routing */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;