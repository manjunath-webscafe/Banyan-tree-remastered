import { Link, useLocation } from "react-router-dom";
import Reveal from "./Reveal.jsx";
import { projects, projectStatusGroups } from "../data/site.js";

export default function Projects() {
  const { hash } = useLocation();
  const activeStatus = projectStatusGroups.find(
    (group) => hash === `#status-${group.key}`,
  )?.key;
  const visibleStatusGroups = activeStatus
    ? projectStatusGroups.filter((group) => group.key === activeStatus)
    : projectStatusGroups;

  return (
    <>
      <section className="section projects" id="projects">
        <div className="container">
          <div className="section-head">
            <Reveal as="p" className="eyebrow">
              Our Projects
            </Reveal>
            <Reveal as="h2">Addresses across Bengaluru.</Reveal>
            <Reveal as="p" className="section-lede">
              From established enclaves to emerging corridors, each Banyan
              Tree project is planned around the character of its
              neighbourhood — never a template repeated from one site to the
              next.
            </Reveal>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <Reveal
                as="article"
                key={project.name}
                className={`project-card${project.upcoming ? " project-card-upcoming" : ""}`}
              >
                <div className="project-media">
                  <img src={project.image} alt={project.alt} loading="lazy" />
                </div>
                <div className="project-body">
                  <span
                    className={`project-tag${project.upcoming ? " project-tag-upcoming" : ""}`}
                  >
                    {project.tag}
                  </span>
                  <h3>{project.name}</h3>
                  <p className="project-loc">{project.location}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="section-cta-row">
            <a href="#contact" className="btn btn-outline">
              Enquire About a Project
            </a>
          </Reveal>
        </div>
      </section>

      <section className="section journey" id="portfolio-status">
        <div className="container">
          <div className="section-head">
            <Reveal as="p" className="eyebrow light">
              Portfolio Status
            </Reveal>
            <Reveal as="h2" className="light">
              Where every project stands today.
            </Reveal>
            {activeStatus && (
              <Link to="/projects" className="status-view-all">
                ← View all statuses
              </Link>
            )}
          </div>

          <div
            className={`status-grid${activeStatus ? " status-grid-single" : ""}`}
          >
            {visibleStatusGroups.map((group) => (
              <Reveal
                as="article"
                id={`status-${group.key}`}
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
    </>
  );
}
