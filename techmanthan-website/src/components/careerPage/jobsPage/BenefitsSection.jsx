"use client";

import { motion } from "framer-motion";
import { Bus, Calendar, Home } from "lucide-react";
import "../../../styles/components/careerPage/jobsPage/_benefits.scss";

const benefits = [
  {
    id: 1,
    icon: <Home size={32} />,
    title: "Hybrid Work",
    subtitle: "Flexible working method",
    description:
      "We offer remote, hybrid, and flexible hours to help you balance work and life while staying productive.",
  },
  {
    id: 2,
    icon: <Bus size={32} />,
    title: "Transport Benefits",
    subtitle: "Convenient Commute Solutions",
    description:
      "Shuttle services and commuting allowances designed to make your daily travel comfortable and hassle-free.",
  },
  {
    id: 3,
    icon: <Calendar size={32} />,
    title: "Workweek Focus",
    subtitle: "Balanced Work Schedule",
    description:
      "Enjoy a focused workweek from Monday to Friday, allowing you to recharge on weekends and maintain a healthy work-life balance.",
  },
  {
    id: 4,
    icon: <Home size={32} />,
    title: "Hybrid Work",
    subtitle: "Flexible working method",
    description:
      "We offer remote, hybrid, and flexible hours to help you balance work and life while staying productive.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, x: -50 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function BenefitsSection() {
  return (
    <section className="benefits-section">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        Benefits of Working at <span className="highlight">Techmanthan</span>
      </motion.h2>

      <div className="benefits-list">
        {benefits.map((benefit) => (
          <motion.div
            key={benefit.id}
            className="benefit-card"
            variants={cardVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            whileHover={{ y: -8, boxShadow: "0px 10px 20px rgba(0,0,0,0.12)" }}
          >
            <div className="benefit-content">
              <h3>{benefit.title}</h3>
              <p className="subtitle">{benefit.subtitle}</p>
              <p className="description">{benefit.description}</p>
            </div>
            <div className="benefit-icon">{benefit.icon}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
