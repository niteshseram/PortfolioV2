import React from "react";
import "./SkillLabel.css";

const SkillLabel = ({ url, name }) => {
  return (
    <div className="skill-label">
      <div className="skill-content">
        <img src={url} alt={name} />
        <p>{name}</p>
      </div>
    </div>
  );
};

export default SkillLabel;
