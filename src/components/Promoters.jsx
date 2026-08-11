import Reveal from "./Reveal.jsx";
import PersonCard from "./PersonCard.jsx";
import { promoters } from "../data/site.js";

export default function Promoters() {
  return (
    <section className="section promoters" id="promoters">
      <div className="container">
        <div className="section-head center">
          <Reveal as="p" className="eyebrow">
            Behind Banyan Tree
          </Reveal>
          <Reveal as="h2">The promoters.</Reveal>
          <Reveal as="p" className="section-lede">
            Banyan Tree Group was founded and is guided by promoters who
            continue to set its standard for design integrity and honest
            craft.
          </Reveal>
        </div>

        <div className="people-grid">
          {promoters.map((promoter) => (
            <PersonCard
              key={promoter.id}
              name={promoter.name}
              role={promoter.role}
              bio={promoter.bio}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
