import Reveal from "./Reveal.jsx";
import PersonCard from "./PersonCard.jsx";
import { teamMembers } from "../data/site.js";

export default function Team() {
  return (
    <section className="section team" id="team">
      <div className="container">
        <div className="section-head center">
          <Reveal as="p" className="eyebrow">
            The People Behind It
          </Reveal>
          <Reveal as="h2">Our team.</Reveal>
          <Reveal as="p" className="section-lede">
            A team of designers, engineers and advisors working from the same
            room, so every project moves forward as one considered effort.
          </Reveal>
        </div>

        <div className="people-grid people-grid-compact">
          {teamMembers.map((member) => (
            <PersonCard
              key={member.id}
              name={member.name}
              role={member.role}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
