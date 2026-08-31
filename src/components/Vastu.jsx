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
          <Reveal as="p" className="eyebrow">Designed in Harmony</Reveal>
          <Reveal as="h2" id="vastu-title">
            Vastu-inspired living, thoughtfully planned.
          </Reveal>
        </div>
        <div className="vastu-copy">
          <Reveal as="p">
            Vastu Shastra is India&apos;s time-honoured approach to architecture
            and spatial design. Guided by the five elements—earth, water, fire,
            air and space—and the cardinal directions, it seeks to create homes
            that feel balanced, comfortable and connected to their surroundings.
          </Reveal>
          <Reveal as="p">
            At Banyan Tree Group, these principles inform planning from the very
            first blueprint. Site orientation, entrances, living areas, kitchens
            and master suites are considered alongside structural engineering,
            natural light, cross-ventilation and everyday flow. The result is a
            modern home that honours tradition while supporting life today.
          </Reveal>
          <Reveal as="ul" className="vastu-principles">
            {principles.map((principle) => <li key={principle}>{principle}</li>)}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
