"use client";

import { useEffect, useRef, useState } from "react";
import { FaEnvelope, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import "../../styles/components/aboutPage/_OurTeam.scss";

const teamMembers = [
  {
    name: "Sushil Dyopala",
    role: "CEO & Founder",
    profession: "AI Engineer",
    image: "/images/team1.jpg",
    linkedIn: "https://linkedin.com/in/sushil-dyopala",
    email: "sushil@example.com",
    phone: "+977-9801234567",
    bio: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sushil leads our team with a vision for innovation and excellence in AI solutions.",
  },
  {
    name: "Laxman Maharjan",
    role: "CTO & Co-Founder",
    profession: "Full Stack Developer",
    image: "/images/team2.jpg",
    linkedIn: "https://linkedin.com/in/laxman-maharjan",
    email: "laxman@example.com",
    phone: "+977-9802345678",
    bio: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Laxman excels at designing robust, scalable tech infrastructure and leads the development team with cutting-edge solutions.",
  },
  {
    name: "Aliza Kumpakha",
    role: "Operations Manager",
    profession: "Agile Project Coordinator",
    image: "/images/team3.jpg",
    linkedIn: "https://linkedin.com/in/aliza-kumpakha",
    email: "aliza@example.com",
    phone: "+977-9803456789",
    bio: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliza ensures timely delivery, resource alignment, and seamless coordination across departments for successful project execution.",
  },
];

export default function OurTeam() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <div className="team-wrapper">
      <section
        ref={sectionRef}
        className={`ourTeamSection ${isVisible ? "animate" : ""}`}
      >
        <h4 className="teamTitle">Our Team</h4>
        <h2 className="teamSubtitle">
          Meet the passionate individuals driving our success, blending
          innovation with dedication to create impactful experiences.
        </h2>

        <div className="teamCards">
          {teamMembers.map((member) => (
            <div key={member.name} className="flipCard">
              <div className="flipInner">
                <div
                  className="flipFront"
                  style={{ backgroundImage: `url(${member.image})` }}
                >
                  <div className="overlay">
                    <div className="title">
                      <h3>{member.name}</h3>
                      <p>{member.role}</p>
                    </div>
                  </div>
                </div>

                <div className="flipBack">
                  <h3>{member.name}</h3>
                  <p className="profession">{member.profession}</p>
                  <p className="bio">{member.bio}</p>
                  <div className="contactIcons">
                    <a href={`mailto:${member.email}`} title="Email">
                      <FaEnvelope />
                    </a>
                    <a href={`tel:${member.phone}`} title="Call">
                      <FaPhoneAlt />
                    </a>
                    <a
                      href={member.linkedIn}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="LinkedIn"
                    >
                      <FaLinkedin />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
