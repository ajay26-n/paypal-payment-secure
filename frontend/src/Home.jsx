import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home-wrapper">
      {/* Hero Section */}
      <section className="hero-section full-width">
        <div className="content-container">
          <h3>The Secure App</h3>
          <h1>Payments made easy,<br />fast, and secure.</h1>
          <Link to="/register" className="btn-large">Get Started Now</Link>
          
          <div className="mockup-container">
            <div className="phone-mockup">
               <p>Secure Interface Demo</p>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Features Section */}
      <section className="features-section full-width">
        <div className="content-container">
          <h2>Send money. Shop with confidence.</h2>
          <div className="feature-grid">
            <div className="feature-card">
              <h4>Bank-Level Security</h4>
              <p>Your transactions are monitored 24/7 by advanced fraud detection systems to keep your money safe.</p>
            </div>
            <div className="feature-card">
              <h4>Instant Transfers</h4>
              <p>Send money to friends and family across the globe in seconds, directly from your mobile device.</p>
            </div>
            <div className="feature-card">
              <h4>Buyer Protection</h4>
              <p>Shop anywhere online. If an eligible item doesn't show up, we will help you get your money back.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Business Section */}
      <section className="business-section full-width">
        <div className="content-container">
          <h2>Power your business growth.</h2>
          <p>Accept payments from customers worldwide, manage subscriptions, and access business funding all in one place.</p>
          <Link to="/register" className="btn-solid business-btn">Set Up a Business Account</Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer full-width">
        <div className="content-container">
          <p>© 2026 FastTransfer Inc. This is a demonstration project for CyberGuard.</p>
          <div className="footer-links">
            <span>Privacy</span>
            <span>Terms</span>
            <span>Security</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;