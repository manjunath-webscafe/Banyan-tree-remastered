import Reveal from "./Reveal.jsx";
import { journeySteps } from "../data/site.js";

export default function Journey() {
  return (
    <section className="section journey" id="journey">
      <div className="container">
        <div className="section-head">
          <Reveal as="p" className="eyebrow light">
            From Site to Home
          </Reveal>
          <Reveal as="h2" className="light">
            How a Banyan Tree address comes to life.
          </Reveal>
        </div>

        <ol className="timeline">
          {journeySteps.map((step) => (
            <Reveal as="li" className="timeline-item" key={step.num}>
              <span className="timeline-num">{step.num}</span>
              <div className="timeline-body">
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
