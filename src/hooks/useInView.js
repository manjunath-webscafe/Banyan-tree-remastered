import { useEffect, useRef, useState } from "react";
import { usePrefersReducedMotion } from "./usePrefersReducedMotion.js";

/**
 * Returns [ref, inView]. Fires once, then stops observing.
 * If motion is reduced or IntersectionObserver is unavailable, content is
 * shown immediately rather than hidden forever.
 */
export function useInView({ threshold = 0.15, rootMargin = "0px 0px -40px 0px" } = {}) {
  const ref = useRef(null);
  const reduceMotion = usePrefersReducedMotion();
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (reduceMotion || !("IntersectionObserver" in window)) {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [reduceMotion, threshold, rootMargin]);

  return [ref, inView];
}