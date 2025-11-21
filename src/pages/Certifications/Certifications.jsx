import React from "react";
import "./Certifications.css";
import { certifications } from "../../utils/data/data.js";
import { SiCisco } from "react-icons/si";
import { FaMicrosoft } from "react-icons/fa";

const Certifications = () => {
    // Map the string/icon field to actual icon components
    const getIcon = (icon) => {
        switch (icon) {
            case "SiCisco":
                return <SiCisco className="certification-icon" />;
            case "FaMicrosoft":
                return <FaMicrosoft className="certification-icon" />;
            default:
                return null;
        }
    };

    return (
        <section className="certifications-section" id="certifications">
            <h2 className="section-title">Certifications</h2>
            <div className="certifications-grid">
                {certifications.length > 0 ? (
                    certifications.map((cert) => (
                        <div className="certification-card" key={cert.id}>
                            <div className="cert-icon-container">
                                {getIcon(cert.icon || cert.image?.name)}
                            </div>

                            <h3>{cert.title}</h3>
                            <p>{cert.description}</p>

                            <div className="certification-links">
                                {cert.issuer && (
                                    <span className="cert-issuer">
                                        Issued by: <strong>{cert.issuer}</strong>
                                    </span>
                                )}
                                {cert.issue_date && (
                                    <span className="cert-date">Date: {cert.issue_date}</span>
                                )}
                                {cert.verfification_link && (
                                    <a
                                        href={cert.verfification_link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="cert-link"
                                    >
                                        View Certificate
                                    </a>
                                )}
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="no-data">No certifications available...</p>
                )}
            </div>
        </section>
    );
};

export default Certifications;
