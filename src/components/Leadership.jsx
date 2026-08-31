import Reveal from "./Reveal.jsx";
import { leadershipTeam } from "../data/site.js";

function initials(name) {
  return name
    .split(" ")
    .map((word) => word[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export default function Leadership() {
  return (
    <section className="section leadership" id="leadership">
      <div className="container">
        <div className="section-head center">
          <Reveal as="p" className="eyebrow">
            Empowering Teams, Inspiring Growth
          </Reveal>
          <Reveal as="h2">Leadership in Action  </Reveal>
          <Reveal as="p" className="section-lede">
           Shareholders, Family &amp; HNI
          </Reveal>
        </div>

        <div className="leadership-grid">
          {leadershipTeam.map((leader) => (
            <Reveal as="article" className="leader-card" key={leader.id}>
              <div className="leader-portrait">
                <span
                  className="leader-portrait-frame"
                  aria-hidden="true"
                ></span>
                {leader.image ? (
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="leader-photo"
                  />
                ) : (
                  <span className="leader-initials">
                    {initials(leader.name)}
                  </span>
                )}
              </div>

              <div className="leader-info">
                <h3>{leader.name}</h3>
                <p className="leader-bio leader-bio-italic">{leader.bio}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
