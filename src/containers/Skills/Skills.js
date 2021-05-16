import React, { useEffect, useRef } from "react";
import "./Skills.css";
import data from "../../data";
import SkillLabel from "../../components/SkillLabel/SkillLabel";
import {
  ScrollTriggerTimeline,
  FadeUpEnter,
  FadeDownEnter,
} from "../../animation";

const Skills = () => {
  const skillSectionRef = useRef(null);
  const skillHeadingRef = useRef(null);
  const skillsRef = useRef([]);

  useEffect(() => {
    let t1 = ScrollTriggerTimeline(skillSectionRef.current);
    let t2 = ScrollTriggerTimeline(skillsRef.current);
    FadeUpEnter(t1, skillHeadingRef.current);
    FadeDownEnter(t2, ".skill-label");
  });

  return (
    <section id="skills" className="section" ref={skillSectionRef}>
      <div className="section-heading" ref={skillHeadingRef}>
        <h1 data-text="Tech I have explored">Skills</h1>
      </div>
      <div className="section-content skill-section" ref={skillsRef}>
        {data.skills.map((skill, i) => (
          <SkillLabel
            className="skillName"
            key={skill[0]}
            url={skill[1]}
            name={skill[0]}
            skillSectionRef={skillSectionRef}
          />
        ))}
      </div>
    </section>
  );
};

export default Skills;
