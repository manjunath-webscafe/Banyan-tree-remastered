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
            The Beginning
          </Reveal>
          <Reveal as="h2">A dream, planted in 2004.</Reveal>
          <Reveal as="p">
            Banyan Tree Group began not as a company, but as a conviction — held
            by a small circle of professionals who believed Bengaluru deserved
            homes built with more patience than the market demanded. Two decades
            on, that conviction has taken root across the city, in addresses
            that families have chosen to call home, and in neighbourhoods we
            have watched mature alongside our work.
          </Reveal>
          <Reveal as="p">
            We have never measured ourselves by scale alone. Every Banyan Tree
            development carries the same discipline we started with: exacting
            design, considered construction, and an unhurried commitment to
            getting the details right — because a home, like a tree, is meant to
            outlast the season it was planted in.
          </Reveal>
          <Reveal as="a" href="#philosophy" className="text-link">
            Read our philosophy →
          </Reveal>
        </div>
      </div>
    </section>
  );
}
