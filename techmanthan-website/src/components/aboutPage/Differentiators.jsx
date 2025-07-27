"use client";

import { useInView } from "framer-motion";
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
    text: "Innovation is at the core of everything we do. From ideation to deployment, we constantly explore new technologies, frameworks, and methods to deliver smarter, faster, and more future-ready solutions.",
    color: "purple",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Local Impact",
    text: "We believe global change starts with local action. Our work is deeply rooted in the needs and strengths of our communities, creating tech solutions that uplift, empower, and inspire from the ground up.",
    color: "orange",
  },
  {
    icon: <FaUserGraduate />,
    title: "Empowering Talents",
    text: "We exist to unlock the potential of emerging talents. Through hands-on experience, mentorship, and access to cutting-edge tools, we help them grow into confident innovators and changemakers",
    color: "green",
  },
  {
    icon: <FaUsersCog />,
    title: "Team Culture",
    text: "Our culture is built on trust, ownership, and collaboration. We value diverse voices, encourage open dialogue, and create space for every team member to lead, learn, and grow",
    color: "yellow",
  },
];

const Differentiators = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px", once: true });

  useEffect(() => {
    if (isInView) {
      setHasAnimated(true);
    }
  }, [isInView]);

  return (
    <section className="differentiators-section" ref={ref}>
      <div className="heading">
        <h4>WHAT MAKES US DIFFERENT</h4>
        <h2>
          Our focus on these key differentiators allows us to consistently
          provide exceptional value to our clients.
        </h2>
      </div>
      <div className={`card-grid ${hasAnimated ? "visible" : ""}`}>
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
