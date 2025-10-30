// import React, { useEffect } from 'react';
// import { useScrollAnimation } from './components/hooks/useScrollAnimation.js';
// import Header from './components/Header/Header.jsx';
// import Hero from './components/Hero/Hero.jsx';
// import Features from './components/Features/Features.jsx';

// import Testimonials from './components/Testimonials/Testimonials.jsx';

// import featuresData from './components/data/featuresData.js';
// import testimonialsData from './components/data/testimonialsData.js';


// import CTA from './components/CTA/CTA.jsx';
// import Footer from './components/Footer/Footer.jsx';
// import './components/styles/globals.css';

// function App() {
//   useScrollAnimation();

//   useEffect(() => {
//     // Smooth scrolling for anchor links
//     const handleAnchorClick = (e) => {
//       const href = e.currentTarget.getAttribute('href');
      
//       if (href && href.startsWith('#')) {
//         e.preventDefault();
//         const element = document.querySelector(href);
//         if (element) {
//           const offset = 80; // Header height
//           const elementPosition = element.getBoundingClientRect().top;
//           const offsetPosition = elementPosition + window.pageYOffset - offset;

//           window.scrollTo({
//             top: offsetPosition,
//             behavior: 'smooth'
//           });
//         }
//       }
//     };

//     // Add event listeners to all anchor links
//     const anchorLinks = document.querySelectorAll('a[href^="#"]');
//     anchorLinks.forEach(link => {
//       link.addEventListener('click', handleAnchorClick);
//     });

//     return () => {
//       anchorLinks.forEach(link => {
//         link.removeEventListener('click', handleAnchorClick);
//       });
//     };
//   }, []);

//   return (
//     <div className="App">
//       <Header />
//       <main>
//         <Hero />
//         <Features />
//         <Testimonials />
//         <CTA />
//       </main>
//       <Footer />
//     </div>
//   );
// }

// export default App;

import React, { useEffect } from 'react';
import { useScrollAnimation } from './components/hooks/useScrollAnimation.js';
import Header from './components/Header/Header.jsx';
// import { useMobileMenu } from "../hooks/useMobileMenu.js";

import Hero from './components/Hero/Hero.jsx';
import Features from './components/Features/Features.jsx';
import Testimonials from './components/Testimonials/Testimonials.jsx';
import CTA from './components/CTA/CTA.jsx';
import Footer from './components/Footer/Footer.jsx';
import './components/styles/globals.css';
import { useMobileMenu } from "./components/hooks/useMobileMenu.js";




function App() {
  useScrollAnimation();

  useEffect(() => {
    // Smooth scrolling for anchor links
    const handleAnchorClick = (e) => {
      const href = e.currentTarget.getAttribute('href');
      
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
          const offset = 80; // Header height
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }
    };

    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
      link.addEventListener('click', handleAnchorClick);
    });

    return () => {
      anchorLinks.forEach(link => {
        link.removeEventListener('click', handleAnchorClick);
      });
    };
  }, []);

  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <Features />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
