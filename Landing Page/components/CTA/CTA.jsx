import React from 'react';
import './CTA.css';

const CTA = () => {
  return (
    <section className="cta">
      <div className="container">
        <div className="cta-content">
          <h2 className="cta-title fade-in">
            Ready to Get Started?
          </h2>
          <p className="cta-subtitle fade-in">
            Join thousands of satisfied customers and start building your dream website today. 
            No credit card required.
          </p>
          <div className="cta-actions fade-in">
            <button className="btn btn-primary btn-large">
              Start Free Trial
            </button>
            <button className="btn btn-secondary btn-large">
              Schedule a Demo
            </button>
          </div>
          <div className="cta-features fade-in">
            <div className="cta-feature">
              <span className="check">✓</span>
              <span>14-day free trial</span>
            </div>
            <div className="cta-feature">
              <span className="check">✓</span>
              <span>No credit card required</span>
            </div>
            <div className="cta-feature">
              <span className="check">✓</span>
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;