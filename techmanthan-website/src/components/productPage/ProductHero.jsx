"use client"; 

import { motion } from "framer-motion";
import "../../styles/components/productPage/_productHero.scss";

const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: "easeOut" },
  },
};

const ProductHero = () => {
  return (
    <section className="hero-wrapper">
      <div className="background">
        <motion.img
          src="/images/products/product-hero.gif"
          alt="hero"
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
        <div className="overlay"></div>
      </div>

      <motion.div
        className="hero-content"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }} // replay on scroll
      >
        <motion.h1 variants={textVariants}>
          <span>Smarter </span>
          Systems.
        </motion.h1>

        <motion.h1 variants={textVariants} transition={{ delay: 0.3 }}>
          Stronger <span>Outcomes.</span>
        </motion.h1>
      </motion.div>
    </section>
  );
};

export default ProductHero;
