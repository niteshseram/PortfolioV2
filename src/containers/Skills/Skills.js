import React from "react";
import "./Skills.css";
import data from "../../data";
import SkillLabel from "../../components/SkillLabel/SkillLabel";

const Skills = () => {
  return (
    <section id="skills" className="section">
      <div className="section-heading">
        <h1 data-text="Tech I have explored">Skills</h1>
      </div>
      <div className="section-content skill-section">
        {data.skills.map((skill) => (
          <SkillLabel url={skill[1]} name={skill[0]} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
