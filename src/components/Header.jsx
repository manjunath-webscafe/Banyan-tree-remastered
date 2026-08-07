import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BrandMark from "./BrandMark.jsx";
import { useScrolled } from "../hooks/useScrolled.js";
import { brandName, navLinks } from "../data/site.js";

export default function Header() {
  const scrolled = useScrolled(40);
  const [navOpen, setNavOpen] = useState(false);

  // Escape closes the mobile drawer.
  useEffect(() => {
    if (!navOpen) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") setNavOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [navOpen]);

  return (
    <header
      className={`site-header${scrolled ? " scrolled" : ""}`}
      id="siteHeader"
    >
      <div className="container header-inner">
        <Link to="/" className="brand" aria-label="Banyan Tree Group — Home">
          <BrandMark />
        </Link>

        <nav
          className={`main-nav${navOpen ? " open" : ""}`}
          id="mainNav"
          aria-label="Primary"
        >
          <ul>
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link to={link.href} onClick={() => setNavOpen(false)}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-actions">
          <Link to="/contact" className="btn btn-primary btn-sm">
            Enquire
          </Link>
          <button
            className="nav-toggle"
            id="navToggle"
            aria-label={navOpen ? "Close menu" : "Open menu"}
            aria-expanded={navOpen}
            aria-controls="mainNav"
            onClick={() => setNavOpen((open) => !open)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
}
