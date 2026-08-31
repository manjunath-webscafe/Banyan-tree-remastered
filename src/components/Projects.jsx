import { Link, useLocation } from "react-router-dom";
import Reveal from "./Reveal.jsx";
import { projects, projectStatusGroups } from "../data/site.js";

function FeaturedStatusGrid() {
  return (
    <div className="project-status-grid">
      {projectStatusGroups.map((group) => {
        const groupProjects = projects.filter(
          (project) => project.status === group.key,
        );
        const cover = groupProjects[0];
        const to = `/projects#status-${group.key}`;

        return (
          <Reveal
            as="article"
            className="project-status-card"
            key={group.key}
          >
            <Link to={to} className="project-status-media">
              {cover?.image ? (
                <img src={cover.image} alt={cover.alt || group.label} loading="lazy" />
              ) : (
                <span className="project-media-name">{group.label}</span>
              )}
            </Link>
            <div className="project-status-body">
              <h3>{group.label}</h3>
              <p>{group.description}</p>
              <Link to={to} className="text-link">
                View {group.label} →
              </Link>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}

export default function Projects({ featured = false }) {
  const { hash } = useLocation();

  const activeGroup = projectStatusGroups.find(
    (group) => hash === `#status-${group.key}`,
  );

  const visibleProjects = activeGroup
    ? projects.filter((project) => project.status === activeGroup.key)
    : projects;

  const showFeaturedGrid = featured && !activeGroup;

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

        {showFeaturedGrid ? (
          <FeaturedStatusGrid />
        ) : (
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
        )}

        <Reveal className="section-cta-row">
          <a href="#contact" className="btn btn-outline">
            Enquire About a Project
          </a>
        </Reveal>
      </div>
    </section>
  );
}
