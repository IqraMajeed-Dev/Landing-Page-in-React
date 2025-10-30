
import React from 'react';
import { useMobileMenu } from '../hooks/useMobileMenu.js';  // ✅ Correct path
import './Header.css';

const Header = () => {
  const { isMobileMenuOpen, toggleMobileMenu, closeMobileMenu } = useMobileMenu();

  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          {/* Logo */}
          <div className="logo">
            <span className="logo-icon">⚡</span>
            <span className="logo-text">LandingPage</span>
          </div>

          {/* Desktop Navigation */}
          <ul className="nav-links">
            <li><a href="#features" onClick={closeMobileMenu}>Features</a></li>
            <li><a href="#testimonials" onClick={closeMobileMenu}>Testimonials</a></li>
            <li><a href="#pricing" onClick={closeMobileMenu}>Pricing</a></li>
            <li><a href="#contact" onClick={closeMobileMenu}>Contact</a></li>
          </ul>

          {/* CTA Buttons */}
          <div className="nav-actions">
            <button className="btn btn-secondary">Sign In</button>
            <button className="btn btn-primary">Get Started</button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="mobile-menu-btn"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? '✕' : '☰'}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="mobile-menu">
            <ul className="mobile-nav-links">
              <li><a href="#features" onClick={closeMobileMenu}>Features</a></li>
              <li><a href="#testimonials" onClick={closeMobileMenu}>Testimonials</a></li>
              <li><a href="#pricing" onClick={closeMobileMenu}>Pricing</a></li>
              <li><a href="#contact" onClick={closeMobileMenu}>Contact</a></li>
            </ul>
            <div className="mobile-nav-actions">
              <button className="btn btn-secondary">Sign In</button>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
