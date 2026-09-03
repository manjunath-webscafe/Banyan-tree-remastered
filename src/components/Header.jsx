import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import BrandMark from "./BrandMark.jsx";
import { useScrolled } from "../hooks/useScrolled.js";
import { navLinks } from "../data/site.js";

export default function Header() {
  const scrolled = useScrolled(40);
  const { pathname } = useLocation();
  // Only the home route opens on a dark hero photo — every other route now
  // opens on the light page-header banner, so it needs the dark nav styling
  // from the start rather than waiting for scroll.
  const isLight = scrolled || pathname !== "/";
  const [navOpen, setNavOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);

  // Escape closes the mobile drawer.
  useEffect(() => {
    if (!navOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (e) => {
      if (e.key === "Escape") setNavOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [navOpen]);

  const handleNavClick = (event, link) => {
    const isTouchDesktop =
      link.submenu &&
      window.matchMedia("(min-width: 961px) and (hover: none)").matches;

    if (isTouchDesktop && !submenuOpen) {
      event.preventDefault();
      setSubmenuOpen(true);
      return;
    }

    setNavOpen(false);
    setSubmenuOpen(false);
  };

  return (
    <header
      className={`site-header${isLight ? " scrolled" : ""}`}
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
                className={`nav-item${link.submenu ? " has-submenu" : ""}${link.submenu && submenuOpen ? " submenu-open" : ""}`}
              >
                <Link to={link.href} onClick={(event) => handleNavClick(event, link)}>
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

        {navOpen && (
          <button
            type="button"
            className="nav-backdrop"
            aria-label="Close menu"
            onClick={() => setNavOpen(false)}
          />
        )}

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
