"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Testimonial from "./Testimonials";
import "../../styles/components/homePage/_testimonials.scss";

const testimonials = [
  {
    quote: "We believe the most impactful technology is simple, purposeful, and built for the real world. Everything we create is designed to help organizations operate better, move smarter, and grow faster.",
    author: "Sushil Dyopala",
    role: "Founder & CEO",
    highlight: "techmanthan",
    image:"/images/team1.jpg",
  },
  {
    quote: "We believe the most impactful technology is simple, purposeful, and built for the real world. Everything we create is designed to help organizations operate better, move smarter, and grow faster.",
    author: "Laxman Maharjan",
    role: "CTO & Co-Founder",
    highlight: "techmanthan",
    image: "/images/team2.jpg",
  },
  {
    quote: "We believe the most impactful technology is simple, purposeful, and built for the real world. Everything we create is designed to help organizations operate better, move smarter, and grow faster.",
    author: "Aliza Kumpakha",
    role: "Operations Manager",
    highlight: "techmanthan",
    image: "/images/team3.jpg",
  },
];

export default function TestimonialSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.section
      className="testimonial-slider"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div
        className="slider-wrapper"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {testimonials.map((t, index) => (
          <Testimonial key={index} {...t} />
        ))}
      </div>

      <div className="pagination">
        {testimonials.map((_, index) => (
          <span
            key={index}
            className={index === current ? "dot active" : "dot"}
            onClick={() => setCurrent(index)}
          ></span>
        ))}
      </div>
    </motion.section>
  );
}