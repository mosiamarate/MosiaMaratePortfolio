import React from "react";
import PropTypes from "prop-types";

const CertificationCard = ({ certification }) => {
  const {
    title,
    issuer,
    issue_date,
    icon: Icon, // Rename for use as a component
    description,
    verfification_link,
  } = certification;

  return (
    <div className="certification-card">
      <div className="cert-icon-container">
        {Icon && <Icon className="certification-icon" />}
      </div>
      <h3>{title}</h3>
      <p className="cert-issuer">{issuer}</p>
      <p className="cert-date">{issue_date}</p>
      <p>{description}</p>
      {verfification_link && (
        <div className="certification-links">
          <a
            href={verfification_link}
            target="_blank"
            rel="noopener noreferrer"
            className="cert-link"
          >
            Verify Credential
          </a>
        </div>
      )}
    </div>
  );
};

CertificationCard.propTypes = {
  certification: PropTypes.shape({
    title: PropTypes.string.isRequired,
    issuer: PropTypes.string.isRequired,
    issue_date: PropTypes.string.isRequired,
    icon: PropTypes.elementType,
    description: PropTypes.string,
    verfification_link: PropTypes.string,
  }).isRequired,
};

export default CertificationCard;