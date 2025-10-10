import React from "react";
import { projects } from "../../utils/data/data";
import { Link } from "react-router-dom";
import "./Projects.css";

const Projects = () => {
  // Show only featured projects
  const featuredProjects = projects.filter((proj) => proj.featured);

  return (
    <section className="projects-section" id="projects">
      <h2 className="section-title">Featured Projects</h2>
      <div className="projects-grid">
        {featuredProjects.length > 0 ? (
          featuredProjects.map((proj) => (
            <div className="project-card" key={proj.id}>
              {/* {proj.image && (
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="project-image"
                />
              )} */}
              <h3>{proj.title}</h3>
              <p>{proj.description}</p>

              {/* Tech stack */}
              <div className="tech-stack">
                {proj.tech.map((t, idx) => (
                  <span key={idx} className="tech-tag">{t}</span>
                ))}
              </div>

              {/* Project links */}
              <div className="project-links">
                {proj.github && (
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                )}
                {proj.live && (
                  <a
                    href={proj.live}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ))
        ) : (
          <p className="no-data">No featured projects available...</p>
        )}
      </div>

      {/* Button to go to all projects page */}
      <div className="view-all">
        <Link to="/projects" className="btn project-btn">
          View All Projects
        </Link>
      </div>
    </section>
  );
};

export default Projects;
