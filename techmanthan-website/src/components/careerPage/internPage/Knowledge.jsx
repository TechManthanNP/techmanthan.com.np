"use client";

import "../../../styles/components/careerPage/internPage/_knowledgeTestimonial.scss";

const knowledgeData = [
  {
    title: "Artificial Intelligence",
    resources: "53 Resources",
    description:
      "Machine learning, deep learning, neural networks, NLP, and frameworks.",
    topics: ["TensorFlow", "Python", "Computer Vision", "OpenAI"],
    icon: "🧠",
    bgGradient: "linear-gradient(239.87deg, #C92C00 2.07%, #C8A700 78.14%)",
  },
  {
    title: "UI/UX Design",
    resources: "68 Resources",
    description:
      "UI/UX principles, user research, wireframes, prototypes, and design systems.",
    topics: ["Figma", "Adobe XD", "Sketch", "Usability"],
    icon: "🎨",
    bgGradient: "linear-gradient(180deg, #37BF5B 0%, #B29FFF 100%)",
  },
  {
    title: "Frontend Development",
    resources: "203 Resources",
    description:
      "Modern web dev: React, Next.js, TypeScript, tooling, and UI frameworks.",
    topics: ["React", "Next.js", "TypeScript", "Tailwind"],
    icon: "💻",
    bgGradient: "linear-gradient(239.87deg, #C92C00 2.07%, #C8A700 78.14%)",
  },
  {
    title: "Backend Development",
    resources: "156 Resources",
    description:
      "Server-side programming, databases, APIs, and cloud deployment patterns.",
    topics: ["Node.js", "Python", "AWS", "MongoDB"],
    icon: "⚙️",
    bgGradient: "linear-gradient(180deg, #37BF5B 0%, #B29FFF 100%)",
  },
];

export default function KnowledgeHub() {
  return (
    <section className="knowledge-hub-section">
      <h2>
        Knowledge <span className="highlight">Hub</span>
      </h2>

      <div className="knowledge-cards">
        {knowledgeData.map((item, idx) => (
          <div
            key={idx}
            className="card"
            style={{ background: item.bgGradient }}
          >
            <div className="card-header">
              <span className="icon">{item.icon}</span>
              <span className="resources">{item.resources}</span>
            </div>

            <h3>{item.title}</h3>
            <p className="desc">{item.description}</p>

            <ul>
              {item.topics.map((topic, i) => (
                <li key={i}>{topic}</li>
              ))}
            </ul>

            <button>Request Resources</button>
          </div>
        ))}
      </div>
    </section>
  );
}
