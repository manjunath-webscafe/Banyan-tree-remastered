import Reveal from "./Reveal.jsx";

const principles = [
  "Thoughtful site orientation",
  "Abundant natural light",
  "Cross-ventilation and easy flow",
];

export default function Vastu() {
  return (
    <section className="section vastu" aria-labelledby="vastu-title">
      <div className="container vastu-grid">
        <div className="vastu-intro">
          <Reveal as="p" className="eyebrow">
            Designed in Harmony
          </Reveal>
          <Reveal as="h2" id="vastu-title">
            Vastu-inspired living, thoughtfully planned.
          </Reveal>
        </div>
        <div className="vastu-copy">
          <Reveal as="p">
            Vastu Shastra is the ancient Indian science of architecture and
            spatial design, rooted in creating harmony between human habitats
            and natural forces. By aligning structural layouts with the five
            fundamental elements (Panchabhutas—Earth, Water, Fire, Air, and
            Space) and cardinal directions, Vastu aims to optimize the flow of
            positive energy (Prana) within a space. Beyond traditional beliefs,
            modern Vastu emphasizes geometric balance, optimal natural lighting,
            cross-ventilation, and functional flow, ensuring that a home
            supports the physical well-being, peace, and prosperity of its
            occupants. Banyan Tree Group, every project is designed around a
            commitment to these traditional spatial principles. We integrate
            strict Vastu adherence directly into the initial planning and
            architectural blueprints of our developments. From site orientation
            and entrance placement to the precise positioning of living zones,
            kitchens, and master suites, our design process ensures that spatial
            harmony is never compromised. By pairing rigorous structural
            engineering with timeless Vastu fundamentals, Banyan Tree Group
            delivers modern homes that respect tradition while enhancing daily
            living
          </Reveal>
          <Reveal as="ul" className="vastu-principles">
            {principles.map((principle) => (
              <li key={principle}>{principle}</li>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
