import { Fragment, useState } from "react";
import Reveal from "./Reveal.jsx";
import { contact } from "../data/site.js";

const EMPTY_FORM = { name: "", phone: "", email: "", message: "" };

export default function Contact() {
  const [values, setValues] = useState(EMPTY_FORM);
  const [note, setNote] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Front-end only: swap this for a POST to your form endpoint.
    setNote(
      "Thank you — your message has been received. Our team will be in touch shortly.",
    );
    setValues(EMPTY_FORM);
  };

  return (
    <section className="section contact" id="contact">
      <div className="container contact-grid">
        <div className="contact-info">
          <Reveal as="p" className="eyebrow">
            Get in Touch
          </Reveal>
          <Reveal as="h2">We'd love to hear from you.</Reveal>
          <Reveal as="p" className="section-lede">
            Reach out about a residence, a partnership, or simply to learn more
            about how we build.
          </Reveal>

          <Reveal as="ul" className="contact-list">
            <li>
              <span className="contact-label">Visit</span>
              <span>
                {contact.addressLines.map((line, index) => (
                  <Fragment key={line}>
                    {index > 0 && <br />}
                    {line}
                  </Fragment>
                ))}
              </span>
            </li>
            <li>
              <span className="contact-label">Call</span>
              <a href={contact.phoneHref}>{contact.phoneDisplay}</a>
            </li>
            <li>
              <span className="contact-label">Email</span>
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </li>
          </Reveal>
        </div>

        <Reveal
          as="form"
          className="contact-form"
          id="contactForm"
          noValidate
          onSubmit={handleSubmit}
        >
          <div className="form-row">
            <label htmlFor="name">Full name</label>
            <input
              type="text"
              id="name"
              name="name"
              autoComplete="name"
              required
              value={values.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-row form-row-split">
            <div>
              <label htmlFor="phone">Phone number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                autoComplete="tel"
                required
                value={values.phone}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                id="email"
                name="email"
                autoComplete="email"
                required
                value={values.email}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="form-row">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              required
              value={values.message}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="btn btn-primary btn-block">
            Send Message
          </button>
          <p
            className="form-note"
            role="status"
            aria-live="polite"
            id="formNote"
          >
            {note}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
