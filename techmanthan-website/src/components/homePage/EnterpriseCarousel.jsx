"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "../../styles/components/homePage/_enterpriseCarousel.scss";

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
];

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
      <div className="content-left">
        <h4>AI Solutions That Drive</h4>
        <h2>Business Outcomes</h2>
        <p>
          Purpose-built to solve real enterprise challenges.
          <br />
          Powered by expert teams and advanced technology.
        </p>
      </div>

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
                <div className="card">
                  <img src={slide.image} alt={slide.title} />
                  <h3>{slide.title}</h3>
                  <p>{slide.description}</p>
                </div>
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
