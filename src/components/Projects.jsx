import Reveal from "./Reveal.jsx";
import { projects } from "../data/site.js";

export default function Projects() {
  return (
    <section className="section projects" id="projects">
      <div className="container">
        <div className="section-head">
          <Reveal as="p" className="eyebrow">
            Our Projects
          </Reveal>
          <Reveal as="h2">Addresses across Bengaluru.</Reveal>
          <Reveal as="p" className="section-lede">
            From established enclaves to emerging corridors, each Banyan Tree
            project is planned around the character of its neighbourhood —
            never a template repeated from one site to the next.
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
  );
}
