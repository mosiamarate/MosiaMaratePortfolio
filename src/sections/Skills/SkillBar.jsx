import React from "react";
import PropTypes from "prop-types";
import useInView from "../../hooks/useInView.js";
import "./SkillBar.css";

const SkillBar = ({ skill, proficiency }) => {
  // The ref will be attached to the component's root element.
  // isInView will be true when the component is at least 10% visible.
  const [ref, isInView] = useInView({ threshold: 0.1 }, true);

  const barStyle = {
    // Animate width from 0% to proficiency% when in view
    width: isInView ? `${proficiency}%` : "0%",
  };

  return (
    <div className="skill-bar-wrapper" ref={ref}>
      <div className="skill-info">
        <span className="skill-name">{skill}</span>
        <span className="skill-proficiency">{proficiency}%</span>
      </div>
      <div className="skill-bar-container">
        <div className="skill-bar-fill" style={barStyle}></div>
      </div>
    </div>
  );
};

SkillBar.propTypes = {
  skill: PropTypes.string.isRequired,
  proficiency: PropTypes.number.isRequired,
};

export default SkillBar;