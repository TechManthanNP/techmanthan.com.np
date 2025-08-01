"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import "../styles/components/_Hero.scss";

const images = [
  "/images/home-hero1.jpg",
  "/images/home-hero1.jpg",
  "/images/home-hero1.jpg",
];

const Hero = () => {
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
    <section className="home-hero">
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
        <h1>Lorem ipsum dolor sit amet amet amet amet nisi?</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi
          maxime est perspiciatis itaque distinctio voluptas ut sunt officiis
          magni beatae.
        </p>
        <button className="home-btn">Learn More</button>
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

export default Hero;
