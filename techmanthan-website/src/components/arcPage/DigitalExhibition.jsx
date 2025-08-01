"use client";

import "../../styles/components/arcPage/_DigitalExhibition.scss";

const projectImages = [
  "/images/project1.jpg",
  "/images/project2.jpg",
  "/images/project3.jpg",
  "/images/project4.jpg",
];

const DigitalExhibition = () => {
  // Duplicate once for seamless loop
  const loopedImages = [...projectImages, ...projectImages];

  return (
    <section className="digital-exhibition">
      <h2>Digital Exhibition</h2>
      <div className="scroll-container">
        <div className="scroll-track">
          {loopedImages.map((src, index) => (
            <div key={index} className="project-card">
              <img src={src} alt={`Project ${index + 1}`} />
              <div className="project-title">Project Name</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DigitalExhibition;
