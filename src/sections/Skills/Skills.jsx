import React from "react";
import { skills } from "../../utils/data/data";
import "./Skills.css";

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <h2 className="section-title">My Skills</h2>
      <div className="skills-grid">
        {skills && skills.length > 0 ? (
          skills.map((skill) => {
            const Icon = skill.icon;
            return (
              <div className="skill-card" key={skill.id}>
                <div className="skill-icon">
                  <Icon />
                </div>
                <h3 className="skill-name">{skill.name}</h3>
                <div className="skill-bar">
                  <div
                    className="skill-bar-fill"
                    style={{ width: skill.level }}
                  ></div>
                </div>
              </div>
            );
          })
        ) : (
          <p className="no-data">No skills available yet...</p>
        )}
      </div>
    </section>
  );
};

export default Skills;

