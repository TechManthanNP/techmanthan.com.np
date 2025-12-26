"use client";
import { motion } from "framer-motion";
import "../../styles/components/productPage/_productHero.scss";

const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
};

const ProductHero = () => {
  return (
    <section className="hero-wrapper">
      {/* Replace GIF with video for performance */}
      <div className="background">
        <motion.video
          src="/videos/product-hero.mp4"
          autoPlay
          loop
          muted
          playsInline
          initial={{ scale: 1.2, filter: "brightness(0.1)" }}
          animate={{ scale: 1, filter: "brightness(0.3)" }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
        <div className="overlay"></div>
      </div>

      <motion.div className="hero-content" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
        <motion.h1 variants={textVariants}><span>Smarter </span>Systems.</motion.h1>
        <motion.h1 variants={textVariants} transition={{ delay: 0.3 }}>Stronger <span>Outcomes.</span></motion.h1>
      </motion.div>
    </section>
  );
};

export default ProductHero;
