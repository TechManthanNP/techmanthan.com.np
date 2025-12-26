"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "../../styles/components/homePage/_enterpriseCarousel.scss";
import { motion } from "framer-motion";

const slides = [
  {
    title: "AI Strategy & Transformation",
    description:
      "Identify high-value opportunities, define a strategic roadmap, and align AI initiatives with business goals.",
    image: "/images/ai-slide-1.png",
  },
  {
    title: "AI Strategy & Transformation",
    description:
      "Identify high-value opportunities, define a strategic roadmap, and align AI initiatives with business goals.",
    image: "/images/ai-slide-1.png",
  },
  {
    title: "AI Strategy & Transformation",
    description:
      "Identify high-value opportunities, define a strategic roadmap, and align AI initiatives with business goals.",
    image: "/images/ai-slide-1.png",
  },
  {
    title: "AI Strategy & Transformation",
    description:
      "Identify high-value opportunities, define a strategic roadmap, and align AI initiatives with business goals.",
    image: "/images/ai-slide-1.png",
  },
  {
    title: "AI Strategy & Transformation",
    description:
      "Identify high-value opportunities, define a strategic roadmap, and align AI initiatives with business goals.",
    image: "/images/ai-slide-1.png",
  },
];

// Animation variant
const fadeContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeItem = {
  hidden: { opacity: 0, y: 30, filter: "brightness(0.6)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "brightness(1)",
    transition: { duration: 1.2, ease: "easeOut" },
  },
};

export default function EnterpriseCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    slidesToScroll: 1,
  });

  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  return (
    <section className="enterprise-section">

      <motion.div
        className="content-left"
        variants={fadeContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        <motion.h4 variants={fadeItem}>AI Solutions That Drive</motion.h4>
        <motion.h2 variants={fadeItem}>Business Outcomes</motion.h2>
        <motion.div className="points" variants={fadeItem}>
          <ul className="arrow-bullets">
            <li>
              <span className="arrow-animation" />
              Purpose-built to solve real enterprise challenges.
            </li>
            <li>
              <span className="arrow-animation" />
              Powered by expert teams and advanced technology.
            </li>
          </ul>
        </motion.div>
      </motion.div>

      <div className="carousel-wrapper">
        {prevBtnEnabled && (
          <button
            className="carousel-btn left animate"
            onClick={() => emblaApi.scrollPrev()}
          >
            <FaChevronLeft />
          </button>
        )}
        <div className="embla" ref={emblaRef}>
          <div className="embla__container">
            {slides.map((slide, index) => (
              <div className="embla__slide" key={index}>
                <motion.div
                  className="card"
                  variants={fadeItem}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.3 }}
                >
                  <img src={slide.image} alt={slide.title} />
                  <h3>{slide.title}</h3>
                  <p>{slide.description}</p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
        {nextBtnEnabled && (
          <button
            className="carousel-btn right animate"
            onClick={() => emblaApi.scrollNext()}
          >
            <FaChevronRight />
          </button>
        )}
      </div>
    </section>
  );
}

