import Reveal from "./Reveal.jsx";

export default function Legacy() {
  return (
    <section className="section legacy" id="legacy">
      <div className="container legacy-grid">
        <Reveal className="legacy-media">
          <img
            src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1200&q=80"
            alt="Glass and stone facade of a Banyan Tree development"
            loading="lazy"
          />
          <div className="legacy-media-frame" aria-hidden="true"></div>
        </Reveal>

        <div className="legacy-copy">
          <Reveal as="p" className="eyebrow">
            Our Journey
          </Reveal>

          <Reveal as="h2">Twenty years of building with intention.</Reveal>

          <Reveal as="p">
            Since 2004, Banyan Tree Group has grown alongside Bengaluru,
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
