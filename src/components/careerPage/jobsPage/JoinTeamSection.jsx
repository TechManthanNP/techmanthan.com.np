"use client";

import { motion } from "framer-motion";
import "../../../styles/components/careerPage/jobsPage/_joinTeam.scss";

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

export default function JoinTeamSection() {
  return (
    <motion.section
      className="join-team-section"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.3 }} // animates every time in view
    >
      <motion.div className="content" variants={childVariants}>
        <motion.h2 variants={childVariants}>
          Join Our <span className="highlight">Team</span>
        </motion.h2>
        <motion.p variants={childVariants}>
          Can’t find what you are looking for? No worries just drop us your CV
          and we’ll reach out to you.
        </motion.p>
        <motion.button
          className="cv-btn"
          variants={childVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Drop Your CV
        </motion.button>
      </motion.div>
    </motion.section>
  );
}
