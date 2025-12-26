"use client";

import { motion } from "framer-motion";
import "../../styles/components/solutionPage/_Consultation.scss";

// Animation Variants
const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.2, ease: "easeOut" },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Consultation() {
  const handleClick = () => {
    window.location.href = "mailto:innovate@techmanthan.com.np";
  };
  return (
    <motion.section
      className="consultation-section"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.3 }} // animates every time in view
    >
      <motion.div className="content" variants={childVariants}>
        <motion.h2 variants={childVariants}>
          Explore <span className="highlight">what AI can do</span> for your
          organization
        </motion.h2>
        <motion.p variants={childVariants}>
          Let’s collaborate to design a solution that fits your goals and scales
          with your vision.
        </motion.p>
        <motion.button
          className="cv-btn"
          variants={childVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleClick}
        >
          Schedule a Consultation
        </motion.button>
      </motion.div>
    </motion.section>
  );
}
