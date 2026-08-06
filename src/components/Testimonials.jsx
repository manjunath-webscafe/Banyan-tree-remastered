import Reveal from "./Reveal.jsx";
import { testimonials } from "../data/site.js";

export default function Testimonials() {
  return (
    <section className="section testimonials" id="testimonials">
      <div className="container">
        <div className="section-head center">
          <Reveal as="p" className="eyebrow">
            In Their Words
          </Reveal>
          <Reveal as="h2">Families who call it home.</Reveal>
        </div>

        <div className="testimonial-grid">
          {testimonials.map((item) => (
            <Reveal as="figure" className="testimonial-card" key={item.name}>
              <blockquote>{item.quote}</blockquote>
              <figcaption>
                <span className="t-name">{item.name}</span>
                <span className="t-role">{item.role}</span>
              </figcaption>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
