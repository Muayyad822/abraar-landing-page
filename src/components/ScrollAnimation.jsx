/* eslint-disable react-refresh/only-export-components */
import { useEffect, useRef, useState } from 'react';

// Custom hook for scroll animations
export function useScrollAnimation() {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return [ref, isVisible];
}

// Animation component wrapper
export function ScrollAnimation({ children, animation = 'fadeIn', delay = 0, duration = 0.6 }) {
  const [ref, isVisible] = useScrollAnimation();

  const animationStyles = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translate(0, 0)' : getInitialTransform(animation),
    transition: `opacity ${duration}s ease-out, transform ${duration}s ease-out`,
    transitionDelay: `${delay}s`,
  };

  return (
    <div ref={ref} style={animationStyles}>
      {children}
    </div>
  );
}

// Helper function to get initial transform based on animation type
function getInitialTransform(animation) {
  switch (animation) {
    case 'fadeInUp':
      return 'translate(0, 20px)';
    case 'fadeInDown':
      return 'translate(0, -20px)';
    case 'fadeInLeft':
      return 'translate(-20px, 0)';
    case 'fadeInRight':
      return 'translate(20px, 0)';
    default:
      return 'translate(0, 0)';
  }
}