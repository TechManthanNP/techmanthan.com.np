"use client";
import { motion } from "framer-motion";

export default function SectionHeading({ title, highlight, subtitle }) {
  return (
    <div className="section-heading">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }} // plays every time in view
      >
        {title} <span>{highlight}</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        {subtitle}
      </motion.p>
    </div>
  );
}
