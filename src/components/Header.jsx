import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BrandMark from "./BrandMark.jsx";
import { useScrolled } from "../hooks/useScrolled.js";
import { navLinks } from "../data/site.js";

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
              <li
                key={link.href}
                className={`nav-item${link.submenu ? " has-submenu" : ""}`}
              >
                <Link to={link.href} onClick={() => setNavOpen(false)}>
                  {link.label}
                  {link.submenu && (
                    <span className="caret" aria-hidden="true">
                      ▾
                    </span>
                  )}
                </Link>
                {link.submenu && (
                  <ul className="submenu">
                    {link.submenu.map((sub) => (
                      <li key={sub.href}>
                        <Link to={sub.href} onClick={() => setNavOpen(false)}>
                          {sub.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-actions">
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
