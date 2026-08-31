import { Fragment, useState } from "react";
import BrandMark from "./BrandMark.jsx";
import {
  contact,
  footerQuickLinks,
  footerProjects,
  socialLinks,
} from "../data/site.js";

const SOCIAL_ICONS = {
  Instagram: (
    <>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </>
  ),
  Facebook: (
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  ),
  YouTube: (
    <>
      <path d="M22 8.5s-.2-1.6-.85-2.3c-.8-.9-1.7-.9-2.1-1C16.3 5 12 5 12 5h0s-4.3 0-7.05.2c-.4.05-1.3.05-2.1 1C2.2 6.9 2 8.5 2 8.5S1.8 10.4 1.8 12.3v1.4C1.8 15.6 2 17.5 2 17.5s.2 1.6.85 2.3c.8.9 1.85.87 2.3.97C6.8 21 12 21 12 21s4.3 0 7.05-.2c.4-.05 1.3-.05 2.1-1 .65-.7.85-2.3.85-2.3s.2-1.9.2-3.8v-1.4c0-1.9-.2-3.8-.2-3.8z" />
      <path d="M10 9.8l6 2.4-6 2.4V9.8z" fill="currentColor" stroke="none" />
    </>
  ),
  LinkedIn: (
    <>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </>
  ),
  Mail: (
    <>
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </>
  ),
};

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (event) => {
    event.preventDefault();
    // Front-end only: swap this for a POST to your mailing-list provider.
    setSubscribed(true);
    setEmail("");
  };

  return (
    <footer className="site-footer">
      <div className="container footer-top">
        <div className="footer-brand">
          <a href="#top" className="brand brand-footer">
            <BrandMark simple />
          </a>
          <p>
            three decades of landmark residences across Bengaluru — built on
            design integrity, honest craft and lasting trust.
          </p>

          <form
            className="newsletter"
            aria-label="Newsletter subscription"
            onSubmit={handleSubscribe}
          >
            <label htmlFor="newsletterEmail" className="newsletter-label">
              Stay in the loop
            </label>
            <div className="newsletter-row">
              <input
                type="email"
                id="newsletterEmail"
                placeholder="Your email address"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
              <button type="submit" className="btn btn-outline btn-sm">
                Subscribe
              </button>
            </div>
            <p role="status" aria-live="polite">
              {subscribed ? "You're on the list — thank you." : ""}
            </p>
          </form>
        </div>

        <nav className="footer-nav" aria-label="Quick links">
          <h3>Quick Links</h3>
          <ul>
            {footerQuickLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <nav className="footer-nav" aria-label="Our projects">
          <h3>Projects</h3>
          <ul>
            {footerProjects.map((name) => (
              <li key={name}>
                <a href="#projects">{name}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>
            {contact.footerAddressLines.map((line, index) => (
              <Fragment key={line}>
                {index > 0 && <br />}
                {line}
              </Fragment>
            ))}
          </p>
          <p>
            <a href={contact.phoneHref}>{contact.phoneDisplay}</a>
          </p>
          <p>
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
          </p>
          <div className="social-row" aria-label="Social media">
            {socialLinks.map((social) => (
              <a
                href={social.href}
                aria-label={social.label}
                key={social.label}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  {SOCIAL_ICONS[social.label]}
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} Banyan Tree Group. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
