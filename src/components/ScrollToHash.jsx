import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/** Scrolls the matching element into view whenever the URL hash changes, so links like /projects#status-completed land on the right section after routing. */
export default function ScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }
    const id = hash.slice(1);
    const timer = setTimeout(() => {
      const target = document.getElementById(id);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      } else {
        window.scrollTo(0, 0);
      }
    }, 50);
    return () => clearTimeout(timer);
  }, [pathname, hash]);

  return null;
}
