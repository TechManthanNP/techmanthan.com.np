"use client";
import { motion } from "framer-motion";

export default function FeatureCard({ title, description, delay = 0 }) {
  // const cardStyle = {
  //   backgroundImage: `
  //     linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
  //     url(${image})
  //   `,
  //   backgroundSize: "cover",
  //   backgroundPosition: "center",
  // };
  return (
   
    <motion.div
      className="feature-card"
      // style={cardStyle}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: "easeOut", delay }}
      viewport={{ once: false, amount: 0.2 }}
    >
      <h3>{title}</h3>
      <p>{description}</p>
    </motion.div>

  );
}
