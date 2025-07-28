"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
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
        <h1>About Us</h1>
        <p>
          Founded in April 2025 in Bhaktapur, Tech Manthan was born from a
          vision to redefine how Nepal learns and innovates. 'Manthan', meaning
          to churn, reflects our drive to stir progress by empowering local
          talent and bridging Nepal’s heritage with the future of technology.
        </p>
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
