"use client";

import { motion } from "framer-motion";
import "../../styles/components/careerPage/_contactHero.scss";

export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="overlay"></div>

      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h1>
          <span>Join TechManthan</span>
        </h1>

        <motion.p
          className="subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1, ease: "easeOut" }}
        >
          Innovate, Grow, and Impact the Future
        </motion.p>
      </motion.div>
    </section>
  );
}
