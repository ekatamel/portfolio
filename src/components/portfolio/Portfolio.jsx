import Project from "./Project";
import projects from "../../data/projects";

function Portfolio() {
  const portfolio = projects.map((project, i) => {
    return (
      <Project
        key={i}
        title={project.name}
        desc={project.description}
        stack={project.tech_stack}
        url={project.url}
        source={project.source_code}
      />
    );
  });

  return (
    <section id="portfolio" className="portfolio">
      <h4 className="portfolio__title portfolio__title--black">
        PORTFOLIO PROJECTS
      </h4>
      <div className="portfolio__container">{portfolio}</div>
    </section>
  );
}

export default Portfolio;
