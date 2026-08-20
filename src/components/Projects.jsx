import { Link, useLocation } from "react-router-dom";
import Reveal from "./Reveal.jsx";
import { projects, projectStatusGroups } from "../data/site.js";

export default function Projects() {
  const { hash } = useLocation();

  const activeGroup = projectStatusGroups.find(
    (group) => hash === `#status-${group.key}`,
  );

  const visibleProjects = activeGroup
    ? projects.filter((project) => project.status === activeGroup.key)
    : projects;

  return (
    <section className="section projects" id="projects">
      <div className="container">
        <div className="section-head">
          <Reveal as="p" className="eyebrow">
            Our Projects
          </Reveal>
          <Reveal as="h2">
            {activeGroup ? activeGroup.label : "Addresses across Bengaluru."}
          </Reveal>
          <Reveal as="p" className="section-lede">
            {activeGroup
              ? activeGroup.description
              : "From established enclaves to emerging corridors, each Banyan Tree project is planned around the character of its neighbourhood — never a template repeated from one site to the next."}
          </Reveal>
          {activeGroup && (
            <Reveal as="p">
              <Link to="/projects" className="status-view-all">
                ← View all projects
              </Link>
            </Reveal>
          )}
        </div>

        <div className="project-grid">
          {visibleProjects.map((project) => (
            <Reveal
              as="article"
              key={project.name}
              className={`project-card${project.upcoming ? " project-card-upcoming" : ""}`}
            >
              <div className="project-media">
                {project.image ? (
                  <img src={project.image} alt={project.alt} loading="lazy" />
                ) : (
                  <span className="project-media-name">{project.name}</span>
                )}
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
  );
}