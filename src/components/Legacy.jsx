import Reveal from "./Reveal.jsx";

export default function Legacy() {
  return (
    <section className="section legacy" id="legacy">
      <div className="container legacy-grid">
        <Reveal className="legacy-media">
          <img
            src="https://media.istockphoto.com/id/1409298953/photo/real-estate-agents-shake-hands-after-the-signing-of-the-contract-agreement-is-complete.jpg?s=612x612&w=0&k=20&c=SFybbpGMB0wIoI0tJotFqptzAYK_mICVITNdQIXqnyc="
            alt="Glass and stone facade of a Banyan Tree development"
            loading="lazy"
          />
          <div className="legacy-media-frame" aria-hidden="true"></div>
        </Reveal>

        <div className="legacy-copy">
          <Reveal as="p" className="eyebrow">
            Our Journey
          </Reveal>

          <Reveal as="h2">three decades years of building with intention.</Reveal>

          <Reveal as="p">
            2004, Banyan Tree Group has grown alongside Bengaluru,
            evolving from a small team with an ambitious vision into a developer
            trusted to create enduring addresses across the city.
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
    </section>
  );
}
