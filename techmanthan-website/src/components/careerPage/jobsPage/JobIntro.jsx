"use client";

import { motion } from "framer-motion";
import "../../../styles/components/careerPage/jobsPage/_jobIntro.scss";

// Animation Variants
const textVariant = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const imageVariant = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut", delay: 0.3 },
  },
};

export default function JobIntro() {
  return (
    <section className="job-intro">
      {/* Left Text */}
      <motion.div
        className="content"
        variants={textVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        <h2>
          Fostering Growth in a Culture of{" "}
          <span className="highlight">Excellence</span> and{" "}
          <span className="highlight">Curiosity</span>
        </h2>
        <p>
          At TechMartian, we seek bold thinkers who thrive on curiosity,
          adaptability, and continuous growth. More than a workplace, we offer a
          dynamic environment where innovation meets accountability, and diverse
          voices lead breakthrough ideas. Here, your potential is nurtured
          through meaningful challenges, supported teamwork, and a culture that
          recognizes every step forward as success worth celebrating. Join us to
          shape the future with purpose and passion.
        </p>
      </motion.div>

      {/* Right Image */}
      <motion.div
        className="image-container"
        variants={imageVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        <img src="/images/job-intro.png" alt="Job Intro" />
      </motion.div>
    </section>
  );
}
