"use client";

import { motion } from "framer-motion";
import "../../styles/components/homePage/_subscribe.scss";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
      ease: "easeOut",
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Subscribe() {
  return (
    <motion.section
      className="subscribe-section"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.3 }}
    >
      <motion.h2 variants={childVariants}>Subscribe to Our Newsletter</motion.h2>
      <motion.p variants={childVariants}>Stay a Step Ahead</motion.p>
      <motion.form className="subscribe-form" variants={childVariants}>
        <motion.input
          type="email"
          placeholder="Your Email Address"
          required
          variants={childVariants}
        />
        <motion.button type="submit" variants={childVariants}>
          Subscribe
        </motion.button>
      </motion.form>
    </motion.section>
  );
}
