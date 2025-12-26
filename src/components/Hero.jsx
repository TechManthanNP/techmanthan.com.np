"use client";

import { motion } from "framer-motion";
import "../styles/components/_Hero.scss";
import AnimatedPath from "./AnimationPath";

const bgImage = "/images/home-hero2.png";


const fadeContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const fadeItem = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const Hero = () => {

  return (
    <section className="home-hero">
      {/* Background image */}
      <div className="backgrounds">
        <img src={bgImage} alt="Tech Manthan" />
      </div>

      <div className="overlay" />

      {/* Staggered Content */}
      <motion.div
        className="content"
        variants={fadeContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        <motion.h1 variants={fadeItem}>
          Innovate with <span>purpose.</span>
          <br />
          <span>Impact</span> at scale.
        </motion.h1>
        <motion.p variants={fadeItem}>
          We empower organizations to harness AI for real, measurable value.
          Our tailored solutions and scalable products are built to deliver lasting impact and business growth.
        </motion.p>
        <motion.button variants={fadeItem} className="home-btn">
          Build With Us
        </motion.button>
      </motion.div>
      <AnimatedPath></AnimatedPath>

    </section>
  );
};

export default Hero;
