import React, { useEffect, useState, useRef } from 'react';
interface ScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}
export function useScrollAnimation<T extends HTMLElement = HTMLDivElement>(
options: ScrollAnimationOptions = {})
{
  const { threshold = 0.1, rootMargin = '0px', triggerOnce = true } = options;
  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin
      }
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold, rootMargin, triggerOnce]);
  return {
    ref,
    isVisible
  };
}
export function useStaggeredAnimation<T extends HTMLElement = HTMLDivElement>(
  options: ScrollAnimationOptions = {})
{
  const { ref, isVisible } = useScrollAnimation<T>(options);
  const getItemStyle = (index: number): React.CSSProperties => ({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(32px)',
    transition: `all 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.12}s`
  });
  return {
    ref,
    isVisible,
    getItemStyle
  };
}