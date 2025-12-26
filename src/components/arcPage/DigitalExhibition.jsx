"use client";

import "../../styles/components/arcPage/_DigitalExhibition.scss";

const projects = [
  { src: "/images/project1.jpg", title: "AI Animation Tool" },
  { src: "/images/project2.jpg", title: "3D Modeling Showcase" },
  { src: "/images/project3.jpg", title: "Interactive Storyboard" },
  { src: "/images/project4.jpg", title: "Virtual Gallery" },
];

const DigitalExhibition = () => {
  // Duplicate once for seamless loop
  const loopedProjects = [...projects, ...projects];

  return (
    <section className="digital-exhibition">
      <h2>
        <span className="highlight">Featured</span> Projects
      </h2>
      <div className="scroll-container">
        <div className="scroll-track">
          {loopedProjects.map((project, index) => (
            <div key={index} className="project-card">
              <img src={project.src} alt={project.title} />
              <div className="project-title">{project.title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DigitalExhibition;
