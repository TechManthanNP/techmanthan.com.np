"use client";

import { motion } from "framer-motion";
import "../../styles/components/solutionPage/_SolutionsApart.scss";

const cards = [
  {
    title: "Engineered for Real Impact",
    content:
      "Built with a deep understanding of enterprise workflows, our solutions aren’t just functional — they’re purposeful. Each is designed to solve real problems with clarity and precision.",
  },
  {
    title: "Rooted in Research, Focused on Results",
    content:
      "We integrate the latest advancements in AI with practical design thinking to ensure our solutions stay ahead — and deliver measurable value.",
  },
  {
    title: "Scalable by Design",
    content:
      "Built with a deep understanding of enterprise workflows, our solutions aren’t just functional — they’re purposeful. Each is designed to solve real problems with clarity and precision.",
  },
  {
    title: "Driven by Expertise",
    content:
      "Our multidisciplinary team combines domain knowledge with AI engineering excellence — ensuring every solution is technically robust and business-ready.",
  },
];

const cardVariants = {
  offscreenLeft: { x: -100, opacity: 0 },
  offscreenRight: { x: 100, opacity: 0 },
  onscreen: { x: 0, opacity: 1, transition: { duration: 0.8 } },
};

const titleVariants = {
  hidden: { scale: 0.5, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 1, ease: "easeOut" },
  },
};

export default function SolutionsApart() {
  return (
    <section className="solutions-section">
      <div className="grid">
        {/* Title with burst from center */}
        <motion.h2
          className="title"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          variants={titleVariants}
        >
          What Sets Our <span className="highlight">Solutions</span> Apart
        </motion.h2>

        {/* Cards with conditional half-colored titles */}
        {cards.map((card, index) => (
          <motion.div
            key={index}
            className="card"
            initial={index % 2 === 0 ? "offscreenLeft" : "offscreenRight"}
            whileInView="onscreen"
            viewport={{ once: false, amount: 0.5 }}
            variants={cardVariants}
          >
            <h3>
              {card.title.split(" ").map((word, i, arr) => {
                const half = Math.ceil(arr.length / 2);
                let className = "";
                if (index === 2) {
                  className = i < half ? "half-red" : "half-black";
                } else {
                  className = i < half ? "half-black" : "half-red";
                }
                return (
                  <span key={i} className={className}>
                    {word}{" "}
                  </span>
                );
              })}
            </h3>
            <p>{card.content}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
