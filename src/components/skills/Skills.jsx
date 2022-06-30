import SkillCard from "./SkillCard";
import skills from "../../data/skills.js";
import { useState } from "react";

function Skills() {
  const [category, setCategory] = useState("front-end");

  const mySkills = skills[category].map((e, i) => {
    return <SkillCard key={i} name={e.name} logo={e.logo} skills={e.skills} />;
  });

  const handleClick = (e) => {
    setCategory(e.target.dataset.skill);
    const skillsArray = Array.from(e.target.parentElement.children);
    skillsArray.forEach((el) => {
      el.classList.remove("skills__filter--active");
    });
    e.target.classList.add("skills__filter--active");
  };

  return (
    <section className="skills">
      <h2 className="skills__title">MY SKILLS</h2>
      <div className="skills__filters">
        <div
          className="skills__filter skills__filter--active"
          data-skill="front-end"
          onClick={handleClick}
        >
          Front-end
        </div>
        <div
          className="skills__filter"
          data-skill="back-end"
          onClick={handleClick}
        >
          Back-end
        </div>
        <div
          className="skills__filter"
          data-skill="tools"
          onClick={handleClick}
        >
          Tools & technologies
        </div>
      </div>
      <div className="skills__container">{mySkills}</div>
    </section>
  );
}

export default Skills;
