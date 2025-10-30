// import { useState, useEffect } from 'react';

// export const useScrollAnimation = () => {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const elements = document.querySelectorAll('.fade-in');
//       elements.forEach(element => {
//         const elementTop = element.getBoundingClientRect().top;
//         const elementBottom = element.getBoundingClientRect().bottom;
        
//         if (elementTop < window.innerHeight - 100 && elementBottom > 0) {
//           element.classList.add('visible');
//         }
//       });
//     };

//     window.addEventListener('scroll', handleScroll);
//     handleScroll(); // Check initial state

//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return { isVisible };
// };


// src/hooks/useScrollAnimation.js
// src/hooks/useScrollAnimation.js
import { useState, useEffect } from "react";

export const useScrollAnimation = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(".fade-in");
      elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        const inView =
          elementTop < window.innerHeight - 100 && elementBottom > 0;

        if (inView) {
          element.classList.add("visible");
          setIsVisible(true);
        } else {
          element.classList.remove("visible");
          setIsVisible(false);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return { isVisible };
};
