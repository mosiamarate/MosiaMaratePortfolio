import React from "react";
import { experience } from "../../utils/data/data";
import "./Experience.css";

const Experience = () => {
  return (
    <section className="experience">
      <h2 className="section-title">Experience</h2>
      <div className="experience-list">
        {experience.length > 0 ? (
          experience.map((exp) => (
            <div className="experience-card" key={exp.id}>
              <h3>{exp.role}</h3>
              <h4>{exp.company}</h4>
              <p className="experience-date">
              {exp.start_date} – {exp.end_date}
              </p>
              <p>{exp.description}</p>
            </div>
          ))
        ) : (
          <p className="no-data">No experience available yet...</p>
        )}
      </div>
    </section>
  );
};

export default Experience;
