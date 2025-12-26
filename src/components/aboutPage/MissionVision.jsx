"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import "../../styles/components/aboutPage/_MissionVision.scss";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const MissionVision = () => {
  return (
    <section className="mission-vision">
      <motion.div
        className="mv-row"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={fadeInUp}
      >
        <div className="mv-image">
          <img src="/images/mission.jpg" alt="Mission Image" />
        </div>
        <div className="mv-text">
          <h2>
            <span className="highlight">Our Mission</span>
          </h2>
          <h3>
            <span className="theme">Nurturing</span> Nepali Tech Talents
          </h3>
          <TypeAnimation
            sequence={[
              "We aim to nurture and develop tech talent in Nepal, enabling them to create real impact through innovation and skill. We’re committed to providing world-class education and mentorship opportunities that bridge the gap between academic learning and industry requirements.",
              1000,
            ]}
            speed={80}
            wrapper="p"
            cursor={false}
            repeat={0}
          />
        </div>
      </motion.div>

      <motion.div
        className="mv-row reverse"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={fadeInUp}
      >
        <div className="mv-text">
          <h2>
            <span className="highlight">Our Vision</span>
          </h2>
          <h3>
            <span className="theme">Transforming</span> how Nepal Learns
          </h3>
          <TypeAnimation
            sequence={[
              "We strive to transform how Nepal learns by integrating innovation, inspiration, and technology into education. We envision Nepal as a hub of technological innovation, where local talent creates solutions for global challenges while staying rooted in our rich cultural values.",
              1000,
            ]}
            speed={80}
            wrapper="p"
            cursor={false}
            repeat={0}
          />
        </div>
        <div className="mv-image">
          <img src="/images/vision.png" alt="Vision Image" />
        </div>
      </motion.div>
    </section>
  );
};

export default MissionVision;
