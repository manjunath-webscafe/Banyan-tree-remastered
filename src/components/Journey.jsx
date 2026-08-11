import Reveal from "./Reveal.jsx";
import { journeySteps, projectStatusGroups, projects } from "../data/site.js";

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

        <div className="section-head status-head">
          <Reveal as="p" className="eyebrow light">
            Portfolio Status
          </Reveal>
          <Reveal as="h2" className="light">
            Where every project stands today.
          </Reveal>
        </div>

        <div className="status-grid">
          {projectStatusGroups.map((group) => (
            <Reveal
              as="article"
              className={`status-column status-column-${group.key}`}
              key={group.key}
            >
              <h3>{group.label}</h3>
              <p className="status-desc">{group.description}</p>
              <ul className="status-list">
                {projects
                  .filter((project) => project.status === group.key)
                  .map((project) => (
                    <li key={project.name}>
                      <span className="status-project-name">
                        {project.name}
                      </span>
                      <span className="status-project-loc">
                        {project.location}
                      </span>
                    </li>
                  ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
