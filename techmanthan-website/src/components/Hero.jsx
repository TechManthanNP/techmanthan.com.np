
// "use client";

// import { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import "../styles/components/_Hero.scss";

// const images = [
//   // "/images/home-hero1.jpg",
//   // "/images/home-hero1.jpg",
//   // "/images/about-hero2.jpg",
//   "/images/home-hero2.png",
//   "/images/home-hero2.png",
// ];

// const fadeContainer = {
//   hidden: {},
//   visible: {
//     transition: {
//       staggerChildren: 0.25,
//     },
//   },
// };

// const fadeItem = {
//   hidden: { opacity: 0, y: 30 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.8, ease: "easeOut" },
//   },
// };

// const Hero = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) =>
//         prevIndex === images.length - 1 ? 0 : prevIndex + 1
//       );
//     }, 4000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="home-hero">
//       {/* Background images */}
//       <div className="backgrounds">
//         {images.map((src, index) => (
//           <img
//             key={index}
//             src={src}
//             alt={`Background ${index + 1}`}
//             className={`bg-image ${index === currentIndex ? "active" : ""}`}
//           />
//         ))}
//       </div>

//       <div className="overlay" />

//       {/* Staggered Content */}
//       <motion.div
//         className="content"
//         variants={fadeContainer}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: false, amount: 0.3 }}
//       >
//         <motion.h1 variants={fadeItem}>
//           Innovate with <span>purpose.</span>
//           <br />
//           <span>Impact</span> at scale.
//         </motion.h1>
//         <motion.p variants={fadeItem}>
//           We empower organizations to harness AI for real, measurable value. <br />
//           Our tailored solutions and scalable products are built to deliver lasting impact and business growth.
//         </motion.p>
//         <motion.button variants={fadeItem} className="home-btn">
//           Build With Us
//         </motion.button>
//       </motion.div>

//       {/* Pagination Dots */}
//       <div className="dots">
//         {images.map((_, index) => (
//           <button
//             key={index}
//             className={index === currentIndex ? "active" : ""}
//             onClick={() => setCurrentIndex(index)}
//           />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Hero;


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
          We empower organizations to harness AI for real, measurable value. <br />
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
