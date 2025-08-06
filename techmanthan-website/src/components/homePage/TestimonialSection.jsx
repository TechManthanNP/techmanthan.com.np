"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Testimonial from "./Testimonials";
import "../../styles/components/homePage/_testimonials.scss";

const testimonials = [
  {
    quote:
      "We believe the most impactful technology is simple, purposeful, and built for the real world. Everything we create is designed to help organizations operate better, move smarter, and grow faster.",
    author: "Sushil Dyopala",
    role: "Founder & CEO",
    highlight: "techmanthan",
    image: "/images/team1.jpg",
  },
  {
    quote:
      "We do believe the most impactful technology is simple, purposeful, and built for the real world. Everything we create is designed to help organizations operate better, move smarter, and grow faster.",
    author: "Laxman Maharjan",
    role: "CTO & Co-Founder",
    highlight: "techmanthan",
    image: "/images/team2.jpg",
  },
  {
    quote:
      "We and believe the most impactful technology is simple, purposeful, and built for the real world. Everything we create is designed to help organizations operate better, move smarter, and grow faster.",
    author: "Aliza Kumpakha",
    role: "Operations Manager",
    highlight: "techmanthan",
    image: "/images/team3.jpg",
  },
];

export default function TestimonialCarousel() {
  const [index, setIndex] = useState(0);

  // autoplay every 3s
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="testimonial-slider">
      <div className="slider-container">
        <div className="slider-track">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={index}
              className="slide"
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: "0%", opacity: 1 }}
              exit={{ x: "-100%", opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              <Testimonial {...testimonials[index]} />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className="pagination">
        {testimonials.map((_, i) => (
          <span
            key={i}
            className={i === index ? "dot active" : "dot"}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </section>
  );
}
