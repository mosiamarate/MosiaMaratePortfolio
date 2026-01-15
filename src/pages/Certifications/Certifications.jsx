import React from "react";
import { certifications } from "../../utils/data/data";
import CertificationCard from "./CertificationCard";
import "./Certifications.css";

const Certifications = () => {
  return (
    <section id="certifications" className="certifications-section">
      <h2 className="section-title">Certifications</h2>
      <div className="certifications-grid">
        {certifications && certifications.length > 0 ? (
          certifications.map((cert) => (
            <CertificationCard key={cert.id} certification={cert} />
          ))
        ) : (
          <div className="no-data">
            <p>
              No certifications to display at the moment. Please check back
              later!
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Certifications;