import Reveal from "./Reveal.jsx";
import { legacyAcronym, journeySteps } from "../data/site.js";

export default function Legacy() {
  return (
    <section className="section legacy" id="legacy">
      <div className="container legacy-grid">
        <Reveal className="legacy-media">
          <img
            src="https://res.cloudinary.com/flxf4ltt/image/upload/v1787990432/unnamed_zc72ty.jpg"
            alt="Glass and stone facade of a Banyan Tree development"
            loading="lazy"
          />
          <div className="legacy-media-frame" aria-hidden="true"></div>
        </Reveal>

        <div className="legacy-copy">
          <Reveal as="p" className="eyebrow">
            Our Story
          </Reveal>

          <Reveal as="h2">Three decades of building with intention.</Reveal>

          <Reveal as="p">
            2004, Banyan Tree Group has grown alongside Bengaluru, evolving from
            a small team with an ambitious vision into a developer trusted to
            create enduring addresses across the city.
          </Reveal>

          <Reveal as="p">
            Each project has added something to that journey — new
            neighbourhoods, new ideas and new standards for what a considered
            home can be. Through every stage of our growth, we have remained
            focused on the same fundamental belief: that good development should
            contribute to the life of a place, not simply occupy it.
          </Reveal>

          <Reveal as="a" href="#philosophy" className="text-link">
            What guides us →
          </Reveal>
        </div>
      </div>

      <div className="container legacy-acronym-wrap">
        <Reveal as="p" className="eyebrow legacy-acronym-eyebrow">
          What LEGACY Means to Us
        </Reveal>
        <div className="legacy-acronym-grid">
          {legacyAcronym.map((item) => (
            <Reveal as="article" className="legacy-acronym-card" key={item.letter}>
              <span className="legacy-acronym-letter">{item.letter}</span>
              <h3>{item.word}</h3>
              <p>{item.body}</p>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="container journey-inline" id="journey">
        <div className="section-head">
          <Reveal as="p" className="eyebrow">
            From Site to Home
          </Reveal>
          <Reveal as="h2">How a Banyan Tree address comes to life.</Reveal>
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
