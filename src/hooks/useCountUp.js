import { useState, useEffect, useRef } from 'react';

/**
 * Custom hook for count-up animation with scroll detection
 * @param {number} end - The target number to count up to
 * @param {number} duration - Duration of animation in milliseconds (default: 2000)
 * @param {number} startDelay - Delay before starting animation (default: 0)
 * @returns {Object} - Returns { count, ref } where ref should be attached to the element
 */
export const useCountUp = (end, duration = 2000, startDelay = 0) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef(null);
  const observerRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Create intersection observer to detect when element is in view
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Start animation when element is in view and hasn't animated yet
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            
            setTimeout(() => {
              const startTime = Date.now();
              const startValue = 0;
              
              const animate = () => {
                const currentTime = Date.now();
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);
                
                // Easing function for smooth animation (easeOutExpo)
                const easeOutExpo = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
                
                const currentCount = Math.floor(startValue + (end - startValue) * easeOutExpo);
                setCount(currentCount);
                
                if (progress < 1) {
                  requestAnimationFrame(animate);
                } else {
                  setCount(end); // Ensure we end at exact number
                }
              };
              
              requestAnimationFrame(animate);
            }, startDelay);
          }
        });
      },
      {
        threshold: 0.3, // Trigger when 30% of element is visible
        rootMargin: '0px'
      }
    );

    observerRef.current.observe(element);

    // Cleanup
    return () => {
      if (observerRef.current && element) {
        observerRef.current.unobserve(element);
      }
    };
  }, [end, duration, startDelay, hasAnimated]);

  return { count, ref: elementRef };
};

/**
 * Helper function to format numbers with commas or K/M suffix
 * @param {number} num - The number to format
 * @param {string} suffix - Optional suffix like '+', 'K+', etc.
 * @returns {string} - Formatted number string
 */
export const formatNumber = (num, suffix = '') => {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M' + suffix;
  }
  if (num >= 1000) {
    // Check if we want 'K' format or comma format
    if (suffix.includes('K')) {
      return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K' + suffix.replace('K', '');
    }
    return num.toLocaleString() + suffix;
  }
  return num + suffix;
};

/**
 * Hook specifically for parsing strings with numbers and suffixes
 * Example: "12000+", "50K+", "2.5M"
 */
export const useCountUpFromString = (valueString, duration = 2000, startDelay = 0) => {
  // Parse the number from string
  const parseValue = (str) => {
    if (typeof str === 'number') return { value: str, suffix: '' };
    
    const numMatch = str.match(/[\d.]+/);
    const num = numMatch ? parseFloat(numMatch[0]) : 0;
    
    // Extract multiplier (K, M, etc.) and other suffix (+, etc.)
    let multiplier = 1;
    let suffix = '';
    
    if (str.includes('M')) {
      multiplier = 1000000;
      suffix = str.split('M')[1] || '';
      suffix = 'M' + suffix;
    } else if (str.includes('K') || str.includes('k')) {
      multiplier = 1000;
      suffix = str.split(/[Kk]/)[1] || '';
      suffix = 'K' + suffix;
    } else {
      // Extract any non-numeric suffix
      suffix = str.replace(/[\d.,]/g, '');
    }
    
    return { value: Math.floor(num * multiplier), suffix };
  };

  const { value, suffix } = parseValue(valueString);
  const { count, ref } = useCountUp(value, duration, startDelay);

  // Format the count back to string with original format
  const formattedCount = formatNumber(count, suffix);

  return { count: formattedCount, ref };
};
