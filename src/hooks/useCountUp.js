import { useEffect, useRef, useState } from "react";
import { usePrefersReducedMotion } from "./usePrefersReducedMotion.js";

/**
 * Counts from 0 up to `target` once the element scrolls into view.
 * Returns [ref, value].
 */
export function useCountUp(target, { duration = 1400, threshold = 0.5 } = {}) {
  const ref = useRef(null);
  const frameRef = useRef(0);
  const reduceMotion = usePrefersReducedMotion();
  const [value, setValue] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const run = () => {
      if (reduceMotion) {
        setValue(target);
        return;
      }
      let start = null;
      const step = (ts) => {
        if (start === null) start = ts;
        const progress = Math.min((ts - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setValue(progress < 1 ? Math.floor(eased * target) : target);
        if (progress < 1) frameRef.current = requestAnimationFrame(step);
      };
      frameRef.current = requestAnimationFrame(step);
    };

    if (!("IntersectionObserver" in window)) {
      run();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            observer.unobserve(entry.target);
            run();
          }
        });
      },
      { threshold },
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frameRef.current);
    };
  }, [target, duration, threshold, reduceMotion]);

  return [ref, value];
}
