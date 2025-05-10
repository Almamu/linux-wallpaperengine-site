//
// Comes from https://dev.to/mattlewandowski93/lazy-loaded-video-component-in-react-22dp
//
import { useEffect, useRef, useState } from 'react';

interface IntersectionObserverOptions {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
}

export const useIsVisible = <T extends Element>(
  options?: IntersectionObserverOptions,
  once = false
) => {
  const optionsRef = useRef(options);
  const [isVisible, setIsVisible] = useState(false);
  const targetRef = useRef<T | null>(null);

  useEffect(() => {
    const target = targetRef.current;
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(() => true);
          if (once) {
            observer.unobserve(entry.target);
            observer.disconnect();
          }
        } else {
          setIsVisible(() => false);
        }
      });
    }, optionsRef.current);

    if (target) {
      observer.observe(target);
    }

    return () => {
      if (target) {
        observer.unobserve(target);
      }
      observer.disconnect(); // Clean up the IntersectionObserver
    };
  }, [once]);

  return { isVisible, targetRef };
};
