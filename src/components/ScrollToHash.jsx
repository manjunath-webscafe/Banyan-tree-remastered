import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/** Scrolls the matching element into view whenever the URL hash changes, so links like /projects#status-completed land on the right section after routing. */
export default function ScrollToHash() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const id = hash.slice(1);
    const timer = setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }, 50);
    return () => clearTimeout(timer);
  }, [hash]);

  return null;
}
