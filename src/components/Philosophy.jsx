import Reveal from "./Reveal.jsx";
import { pillars } from "../data/site.js";

const PILLAR_ICONS = {
  "design-integrity": (
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
  "enduring-craft": (
    <>
      <path
        d="M8 30L8 18L20 8L32 18V30"
        stroke="currentColor"
        strokeWidth="1.3"
      />
      <path d="M16 30V22H24V30" stroke="currentColor" strokeWidth="1.3" />
    </>
  ),
  "rooted-sustainability": (
    <>
      <path
        d="M20 6C20 6 10 14 10 24C10 30.6 14.7 36 20 36C25.3 36 30 30.6 30 24C30 14 20 6 20 6Z"
        stroke="currentColor"
        strokeWidth="1.3"
      />
      <path d="M20 36V20" stroke="currentColor" strokeWidth="1.3" />
    </>
  ),
  "complete-transparency": (
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
};

export default function Philosophy() {
  return (
    <section className="section philosophy" id="philosophy">
      <div className="container">
        <div className="section-head center">
          <Reveal as="p" className="eyebrow">
            What Guides Us
          </Reveal>
          <Reveal as="h2">Four roots, one standard.</Reveal>
          <Reveal as="p" className="section-lede">
            Every Banyan Tree address is held to the same set of principles —
            unchanged since our first project, non&#8209;negotiable in every one
            since.
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
