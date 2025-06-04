import { allTypes } from '@/app/types/formTypes';
import { useEffect, useRef } from 'react';

interface UseIntersectionObserverProps {
  threshold?: number;
  root?: Element | null;
  rootMargin?: string;
  onIntersect?: (entry: IntersectionObserverEntry) => void;
  onUnintersect?: (entry: IntersectionObserverEntry) => void;
}

export const useIntersectionObserver = <T extends HTMLElement>({
  threshold = 0.5,
  root = null,
  rootMargin = '0px',
  onIntersect,
  onUnintersect,
}: UseIntersectionObserverProps = {}) => {
  const elementRef = useRef<T | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            onIntersect?.(entry);
          } else {
            onUnintersect?.(entry);
          }
        });
      },
      {
        threshold,
        root,
        rootMargin, 
      }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [threshold, root, rootMargin, onIntersect, onUnintersect]);

  return elementRef;
}; 

export const useHandleChange = (arr:allTypes[],index:number,value:string)=> {
  
}