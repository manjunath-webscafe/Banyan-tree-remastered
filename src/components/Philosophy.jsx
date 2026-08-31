import Reveal from "./Reveal.jsx";
import { pillars } from "../data/site.js";

const PILLAR_ICONS = {
  "absolute-honesty": (
    <>
      <path
        d="M20 8V28M20 28L12 20M20 28L28 20"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="20" cy="20" r="14" stroke="currentColor" strokeWidth="1.3" />
    </>
  ),
  "ethical-standards": (
    <>
      <path
        d="M20 6L32 12V22C32 28 26.5 33.5 20 36C13.5 33.5 8 28 8 22V12L20 6Z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
      <path
        d="M15 20L18.5 23.5L25 17"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
  "legal-compliance": (
    <>
      <rect
        x="7"
        y="7"
        width="26"
        height="26"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.3"
      />
      <path
        d="M13 20H27M13 14H27M13 26H21"
        stroke="currentColor"
        strokeWidth="1.3"
      />
    </>
  ),
  "construction-quality": (
    <>
      <path
        d="M20 4L34 12V28L20 36L6 28V12L20 4Z"
        stroke="currentColor"
        strokeWidth="1.3"
      />
      <path
        d="M20 4V36M6 12L34 28M34 12L6 28"
        stroke="currentColor"
        strokeWidth="0.8"
        opacity="0.5"
      />
    </>
  ),
};

export default function Philosophy() {
  return (
    <section className="section philosophy" id="philosophy">
      <div className="container">
        <div className="section-head center">
          <Reveal as="p" className="eyebrow">
            Our Philosophy
          </Reveal>
          <Reveal as="h2">
            Integrity, transparency, and architectural excellence.
          </Reveal>
          <Reveal as="p" className="section-lede">
            Our vision is built on an unyielding foundation of integrity,
            transparency, and architectural excellence. We believe that true
            development goes beyond physical structures — it is about honouring
            the trust placed in us by our clients and our community.
          </Reveal>
          <Reveal as="p" className="section-lede philosophy-lede-follow">
            Every project we undertake is guided by four uncompromising pillars.
            We refuse to compromise on structural integrity, precision
            craftsmanship, or full regulatory transparency — so every address we
            create stands as a lasting legacy of safety, value, and enduring
            pride, contributing meaningfully to the life of the place.
          </Reveal>
        </div>

        <div className="pillar-grid">
          {pillars.map((pillar) => (
            <Reveal as="article" className="pillar-card" key={pillar.id}>
              <span className="pillar-icon" aria-hidden="true">
                <svg viewBox="0 0 40 40" fill="none">
                  {PILLAR_ICONS[pillar.id]}
                </svg>
              </span>
              <h3>{pillar.title}</h3>
              <p>{pillar.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}