import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          {/* Main Heading */}
          <h1 className="hero-title fade-in">
            Build Your Amazing 
            <span className="gradient-text"> Digital Experience</span>
          </h1>
          
          {/* Subtitle */}
          <p className="hero-subtitle fade-in">
            Create beautiful, responsive websites that convert visitors into customers. 
            Our platform provides everything you need to launch your online presence.
          </p>
          
          {/* CTA Buttons */}
          <div className="hero-actions fade-in">
            <button className="btn btn-primary btn-large">
              Get Started Free
            </button>
            <button className="btn btn-secondary btn-large">
              Watch Demo
            </button>
          </div>
          
          {/* Stats */}
          <div className="hero-stats fade-in">
            <div className="stat">
              <div className="stat-number">10K+</div>
              <div className="stat-label">Happy Customers</div>
            </div>
            <div className="stat">
              <div className="stat-number">99.9%</div>
              <div className="stat-label">Uptime</div>
            </div>
            <div className="stat">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Support</div>
            </div>
          </div>
        </div>
        
        {/* Hero Image/Illustration */}
        <div className="hero-visual fade-in">
          <div className="hero-card">
            <div className="card-header">
              <div className="card-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            <div className="card-content">
              <div className="demo-element primary"></div>
              <div className="demo-elements">
                <div className="demo-element secondary"></div>
                <div className="demo-element accent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;


