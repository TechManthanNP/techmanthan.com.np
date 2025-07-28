"use client";

import { useEffect, useRef, useState } from "react";
import {
  FaFlask,
  FaMapMarkerAlt,
  FaUserGraduate,
  FaUsersCog,
} from "react-icons/fa";
import "../../styles/components/aboutPage/_Differentiators.scss";

const cards = [
  {
    icon: <FaFlask />,
    title: "Focused on Innovation",
    text: "Innovation is at the core of everything we do. From ideation to deployment, we explore cutting-edge technologies for smarter, faster, future-ready solutions.",
    color: "purple",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Local Impact",
    text: "We drive global change through local action. Our tech solutions uplift and empower our communities from the ground up.",
    color: "orange",
  },
  {
    icon: <FaUserGraduate />,
    title: "Empowering Talents",
    text: "We nurture future innovators through hands-on experience, mentorship, and access to powerful tools and platforms.",
    color: "green",
  },
  {
    icon: <FaUsersCog />,
    title: "Team Culture",
    text: "Our culture thrives on trust, ownership, and collaboration. We embrace diverse voices and foster space to grow.",
    color: "yellow",
  },
];

const Differentiators = () => {
  const titleRef = useRef(null);
  const [titleVisible, setTitleVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setTitleVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );

    if (titleRef.current) observer.observe(titleRef.current);
    return () => {
      if (titleRef.current) observer.unobserve(titleRef.current);
    };
  }, []);

  return (
    <section className="differentiators-section">
      <div
        ref={titleRef}
        className={`heading ${titleVisible ? "animate" : ""}`}
      >
        <h4>WHAT MAKES US DIFFERENT</h4>
        <h2>
          Our focus on these key differentiators allows us to consistently
          provide exceptional value to our clients.
        </h2>
      </div>
      <div className="card-grid">
        {cards.map((card, index) => (
          <div key={index} className={`card ${card.color}`}>
            <div className={`icon icon-${card.color}`}>{card.icon}</div>
            <div className={`icon-bg icon-${card.color}`}>{card.icon}</div>
            <h3>{card.title}</h3>
            <p>{card.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Differentiators;
