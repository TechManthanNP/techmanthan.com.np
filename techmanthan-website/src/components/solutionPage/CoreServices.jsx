"use client";

import { motion } from "framer-motion";
import {
  FaBrain,
  FaChartLine,
  FaLightbulb,
  FaRobot,
  FaShieldAlt,
} from "react-icons/fa";
import { SiMaterialdesignicons } from "react-icons/si";
import "../../styles/components/solutionPage/_CoreServices.scss";

const services = [
  {
    icon: <FaRobot size={35} />,
    title: "Data Science & Machine Learning",
    content:
      "Turn raw data into actionable insights with predictive models, optimization algorithms, and intelligent analytics tailored to real-world business needs.",
  },
  {
    icon: <FaBrain size={35} />,
    title: "Generative & Agentic AI",
    content:
      "Leverage the power of foundation models, LLMs, and autonomous agents to build adaptive, human-like systems that create, reason, and act.",
  },
  {
    icon: <FaChartLine size={35} />,
    title: "Software Development",
    content:
      "From concept to deployment, we build scalable, secure, and maintainable software that aligns with your business goals and drives operational excellence.",
  },
  {
    icon: <SiMaterialdesignicons size={35} />,
    title: "UI/UX Design",
    content:
      "Design intuitive and engaging digital experiences that balance form and function — optimized for usability, performance, and accessibility.",
  },
  {
    icon: <FaShieldAlt size={35} />,
    title: "Software Testing & QA",
    content:
      "Ensure quality at every stage with robust manual and automated testing strategies that detect issues early and deliver reliable, high-performing systems.",
  },
  {
    icon: <FaLightbulb size={35} />,
    title: "Compliance & Risk Management",
    content:
      "Mitigate risk with intelligent monitoring and proactive alerts tailored to enterprise-grade standards.",
  },
];

const cardVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function CoreServices() {
  return (
    <section className="core-services-section">
      <motion.h2
        className="title"
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Our Core <span className="highlight">Services</span>
      </motion.h2>

      <div className="services-grid">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="service-card"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            variants={cardVariants}
          >
            <div className="icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.content}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
