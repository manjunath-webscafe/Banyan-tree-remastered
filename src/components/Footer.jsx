import { Fragment, useState } from "react";
import BrandMark from "./BrandMark.jsx";
import {
  brandName,
  contact,
  footerQuickLinks,
  footerResidences,
  socialLinks,
} from "../data/site.js";

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
            <span className="brand-word">{brandName}</span>
          </a>
          <p>
            Two decades of landmark residences across Bengaluru — built on
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

        <nav className="footer-nav" aria-label="Our residences">
          <h3>Residences</h3>
          <ul>
            {footerResidences.map((name) => (
              <li key={name}>
                <a href="#residences">{name}</a>
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
                {social.short}
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
