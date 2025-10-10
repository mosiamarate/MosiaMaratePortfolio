import React from "react";
import { education } from "../../utils/data/data";

import "./Education.css";

const Education = () => {
    return (
        <section className="education-section" id="education">
            <h2 className="section-title">Education</h2>
            <div className="education-list">
                {education.length > 0 ? (
                    education.map((edu) => (
                        <div className="education-item" key={edu.id}>
                            <div className="education-content">
                                <h3>{edu.degree}</h3>
                                <p>{edu.description}</p>
                                <h4>{edu.school}</h4>
                                <p className="education-date"> Start: {edu.start_year} - End: {edu.end_year}</p>
                            </div>
                        </div>
                    ))
                ) :
                (
                    <p className="no-data">No education history available yet...</p>
                )}
            </div>
        </section>
    );
};

export default Education;