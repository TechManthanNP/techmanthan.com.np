"use client";

import {
  FaDraftingCompass,
  FaLightbulb,
  FaProjectDiagram,
  FaRocket,
} from "react-icons/fa";
import "../../styles/components/solutionPage/_ProvenProcess.scss";

const steps = [
  {
    title: "Discovery & Strategy",
    content:
      "We start by understanding your vision, goals, and challenges to craft a tailored project roadmap.",
    icon: <FaLightbulb />,
    color: "#FF7A00",
    position: "bottom",
  },
  {
    title: "Design & Prototyping",
    content:
      "Our UI/UX experts create wireframes and high-fidelity prototypes to visualize the end product.",
    icon: <FaDraftingCompass />,
    color: "#E3FF33",
    position: "top",
  },
  {
    title: "Agile Development",
    content:
      "We use an iterative, agile approach to build, test, and refine your application for optimal results.",
    icon: <FaProjectDiagram />,
    color: "#6CE3FF",
    position: "bottom",
  },
  {
    title: "Launch & Support",
    content:
      "We handle the deployment and provide ongoing support to ensure your application runs smoothly.",
    icon: <FaRocket />,
    color: "#E39FFF",
    position: "top",
  },
];

export default function ProvenProcess() {
  return (
    <section className="proven-process-section">
      <h2 className="section-title">
        Our <span className="highlight">Proven</span> Process
      </h2>
      <p className="subtitle">A streamlined workflow for guaranteed success</p>

      <div className="process-flow">
        {steps.map((step, index) => (
          <div className="process-step-wrapper" key={index}>
            {step.position === "top" && (
              <div className="step-info top">
                <h3 className="step-title">{step.title}</h3>
                <p className="step-desc">{step.content}</p>
              </div>
            )}

            <div
              className="process-step"
              style={{ backgroundColor: step.color }}
            >
              {step.icon}
            </div>

            {step.position === "bottom" && (
              <div className="step-info bottom">
                <h3 className="step-title">{step.title}</h3>
                <p className="step-desc">{step.content}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
