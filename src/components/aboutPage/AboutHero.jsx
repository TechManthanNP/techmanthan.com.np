"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import "../../styles/components/aboutPage/_AboutHero.scss";

const images = [
  "/images/about-hero1.jpg",
  "/images/about-hero2.jpg",
  "/images/about-hero3.jpg",
];

const AboutHero = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollTo = useCallback(
    (index) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();

    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [emblaApi, onSelect]);

  return (
    <section className="about-hero">
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          {images.map((src, index) => (
            <div className="embla__slide" key={index}>
              <img
                className="embla__slide__img"
                src={src}
                alt={`Background ${index + 1}`}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="overlay" />

      <div className="content">
        <motion.div
          className="scroll-text"
          initial={{ y: "100%" }}
          whileInView={{ y: "0%" }}
          animate={{ y: "0%" }} 
          transition={{ duration: 5, ease: "easeOut" }}
          viewport={{ once: false }}
        >
          <h1>
            <span>Founded</span> in 2025
          </h1>
          <p>
            We set out with a mission to redefine how enterprises leverage
            artificial intelligence, not with buzzwords, but with real,
            measurable value.
          </p>
          <p>
            We build intelligent software designed to address the practical
            challenges modern organizations. From automating workflows to
            delivering predictive insights, our solutions are built with
            scalability, security, and impact at the core. face.
          </p>
          <p>
            As a startup, we're agile, curious, and deeply committed to creating
            technology that adapts, evolves, and delivers for the businesses of
            today and the needs of tomorrow.
          </p>
        </motion.div>
      </div>

      <div className="dots">
        {images.map((_, index) => (
          <button
            key={index}
            className={index === selectedIndex ? "active" : ""}
            onClick={() => scrollTo(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default AboutHero;
