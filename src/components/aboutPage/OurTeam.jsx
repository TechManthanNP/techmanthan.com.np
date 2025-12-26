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
    email: "techmanthan.info@gmail.com",
    phone: "+977-9801234567",
    bio: "Sushil is a visionary leader with extensive experience in AI and machine learning. He founded TechManthan with a mission to deliver innovative, scalable technology solutions that empower businesses to thrive in the digital age.",
  },
  {
    name: "Laxman Maharjan",
    role: "CTO & Co-Founder",
    profession: "Full Stack Developer",
    image: "/images/team2.jpg",
    linkedIn: "https://linkedin.com/in/laxman-maharjan",
    email: "techmanthan.info@gmail.com",
    phone: "+977-9802345678",
    bio: "Laxman drives technological excellence with deep expertise in AI-driven Solutions, Backend engineering, and Frontend engineering. He architects scalable systems that seamlessly blend innovation with reliability.",
  },
  {
    name: "Aliza Kumpakha",
    role: "Operations Manager",
    profession: "Agile Project Coordinator",
    image: "/images/team3.jpg",
    linkedIn: "https://linkedin.com/in/aliza-kumpakha",
    email: "techmanthan.info@gmail.com",
    phone: "+977-9803456789",
    bio: "Aliza is a strategic Operations Manager who ensures seamless coordination between teams and clients. Her attention to detail and commitment to excellence guarantee that every project is delivered on time and exceeds expectations.",
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
        <h4 className="teamTitle">Our <span> 
        Team
          </span> 
        </h4>
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
