"use client";

import { motion } from "framer-motion";
import "../../styles/components/solutionPage/_HeroSolutions.scss";

export default function HeroSolutions() {
  return (
    <section className="hero-solutions">
      {/* Video background */}
      <div className="background">
        <video autoPlay loop muted playsInline>
          <source src="/videos/product-hero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Overlay */}
      <div className="overlay"></div>

      {/* Decorative corners */}
      <div className="corner corner-left"></div>
      <div className="corner corner-right"></div>

      {/* Centered text */}
      <motion.h1
        className="hero-text"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Your <span className="highlight">Success</span> is Our{" "}
        <span className="highlight">Focus.</span>
      </motion.h1>
    </section>
  );
}
