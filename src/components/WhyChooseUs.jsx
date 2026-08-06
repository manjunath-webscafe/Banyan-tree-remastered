import Reveal from "./Reveal.jsx";
import { features } from "../data/site.js";

export default function WhyChooseUs() {
  return (
    <section className="section why" id="why">
      <div className="container">
        <div className="section-head center">
          <Reveal as="p" className="eyebrow">
            Why Families Choose Us
          </Reveal>
          <Reveal as="h2">The Banyan Tree difference.</Reveal>
        </div>

        <div className="feature-grid">
          {features.map((feature) => (
            <Reveal className="feature-item" key={feature.title}>
              <h3>{feature.title}</h3>
              <p>{feature.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
