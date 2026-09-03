import Reveal from "./Reveal.jsx";
import { pillars } from "../data/site.js";

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
              <h3>{pillar.title}</h3>
              <p>{pillar.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
