// import React from 'react';
// // import { testimonialsData } from '../../data/testimonialsData';
// import testimonialsData from '../data/testimonialsData.js';
// import './Testimonials.css';

// const TestimonialCard = ({ testimonial }) => {
//   const renderStars = (rating) => {
//     return Array.from({ length: 5 }, (_, index) => (
//       <span 
//         key={index} 
//         className={`star ${index < rating ? 'filled' : ''}`}
//       >
//         ⭐
//       </span>
//     ));
//   };

//   return (
//     <div className="testimonial-card fade-in">
//       <div className="testimonial-content">
//         <p className="testimonial-text">"{testimonial.text}"</p>
        
//         <div className="stars">
//           {renderStars(testimonial.rating)}
//         </div>
//       </div>
      
//       <div className="testimonial-author">
//         <div className="author-avatar">
//           <span style={{ fontSize: '2.5rem' }}>{testimonial.image}</span>
//         </div>
//         <div className="author-info">
//           <h4 className="author-name">{testimonial.name}</h4>
//           <p className="author-role">{testimonial.role} • {testimonial.company}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// const Testimonials = () => {
//   return (
//     <section id="testimonials" className="testimonials">
//       <div className="container">
//         <div className="section-header">
//           <h2 className="section-title">What Our Customers Say</h2>
//           <p className="section-subtitle">
//             Don't just take our word for it - hear from some of our amazing customers
//           </p>
//         </div>
        
//         <div className="testimonials-grid">
//           {testimonialsData.map(testimonial => (
//             <TestimonialCard key={testimonial.id} testimonial={testimonial} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Testimonials;

import React from 'react';
import testimonialsData from '../data/testimonialsData.js'; // default import
import './Testimonials.css';

// ⭐ Testimonial Card Component
const TestimonialCard = ({ testimonial }) => {
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span 
        key={index} 
        className={`star ${index < rating ? 'filled' : ''}`}
      >
        ⭐
      </span>
    ));
  };

  return (
    <div className="testimonial-card fade-in">
      <div className="testimonial-content">
        <p className="testimonial-text">"{testimonial.text}"</p>
        
        {/* Stars */}
        <div className="stars">
          {renderStars(testimonial.rating)}
        </div>
      </div>
      
      {/* Author Info */}
      <div className="testimonial-author">
        <div className="author-avatar">
          <span style={{ fontSize: '2.5rem' }}>{testimonial.image}</span>
        </div>
        <div className="author-info">
          <h4 className="author-name">{testimonial.name}</h4>
          <p className="author-role">
            {testimonial.role} • {testimonial.company}
          </p>
        </div>
      </div>
    </div>
  );
};

// ⭐ Testimonials Section
const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <h2 className="section-title">What Our Customers Say</h2>
          <p className="section-subtitle">
            Don't just take our word for it - hear from some of our amazing customers
          </p>
        </div>
        
        {/* Testimonials Grid */}
        <div className="testimonials-grid">
          {testimonialsData.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
