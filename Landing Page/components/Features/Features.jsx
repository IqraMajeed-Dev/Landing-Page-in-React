

import React from 'react';
import featuresData from '../data/featuresData.js';   // Default import
import './Features.css';

// Single Feature Card Component
const FeatureCard = ({ feature }) => {
  return (
    <div className="feature-card fade-in">
      <div 
        className="feature-icon"
        style={{ backgroundColor: `${feature.color}20` }}
      >
        <span style={{ color: feature.color, fontSize: '2.5rem' }}>
          {feature.icon}
        </span>
      </div>
      <h3 className="feature-title">{feature.title}</h3>
      <p className="feature-description">{feature.description}</p>
    </div>
  );
};

// Features Section
const Features = () => {
  return (
    <section id="features" className="features">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <h2 className="section-title">Amazing Features</h2>
          <p className="section-subtitle">
            Everything you need to build modern and engaging websites
          </p>
        </div>
        
        {/* Features Grid */}
        <div className="features-grid">
          {featuresData.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
