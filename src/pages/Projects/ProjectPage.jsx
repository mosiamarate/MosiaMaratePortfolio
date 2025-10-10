// src/pages/ProjectPage/ProjectPage.jsx
import React from "react";
import { projects } from "../../utils/data/data";
import "./ProjectPage.css";

const ProjectPage = () => {
  return (
    <section className="projects-page">
      <h2 className="section-title">All Projects</h2>
      <div className="projects-grid">
        {projects.length > 0 ? (
          projects.map((proj) => (
            <div className="project-card" key={proj.id}>
              {/* {proj.image && (
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="project-img"
                />
              )} */}
              <div className="project-content">
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
                      className="btn project-btn"
                    >
                      GitHub
                    </a>
                  )}
                  {proj.live && (
                    <a
                      href={proj.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn project-btn"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="no-data">No projects available yet...</p>
        )}
      </div>
      <div className="project-note">
        <p>Note: More projects coming soon!</p>
      </div>
    </section>
  );
};

export default ProjectPage;
