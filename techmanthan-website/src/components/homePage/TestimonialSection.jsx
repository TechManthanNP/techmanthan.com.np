"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
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

export default function TestimonialSlider() {
  const [index, setIndex] = useState(0);
  const items = [...testimonials, ...testimonials]; // duplicate for smooth looping
  const total = testimonials.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 3000); // 3 seconds per testimonial
    return () => clearInterval(interval);
  }, []);

  // reset index back to 0 once we've shown all duplicates
  useEffect(() => {
    if (index >= items.length) {
      setIndex(0);
    }
  }, [index, items.length]);

  return (
    <section className="testimonial-slider">
      <div className="slider-container">
        <motion.div
          className="slider-track"
          animate={{ x: `-${index * 100}%` }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {items.map((t, i) => (
            <div className="slide" key={i}>
              <Testimonial {...t} />
            </div>
          ))}
        </motion.div>
      </div>

      <div className="pagination">
        {testimonials.map((_, i) => (
          <span
            key={i}
            className={i === index % total ? "dot active" : "dot"}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </section>
  );
}
