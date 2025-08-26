"use client";
import { motion, useScroll, useSpring } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import "../../../styles/components/careerPage/internPage/_arcProgram.scss";

export default function ArcProgram() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"], // progress starts when section enters, ends when section leaves
  });
  const scaleX = useSpring(scrollYProgress, { stiffness: 150, damping: 30 });

  return (
    <section className="arc-program" ref={sectionRef}>
      {/* Scroll progress bar */}
      <motion.div className="scroll-progress-bar" style={{ scaleX }} />

      {/* Intro Section */}
      <motion.div
        className="intro"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <div className="text">
          <h2>
            <span className="highlight">ARC</span> Program
          </h2>
          <p>
            TechManthan’s ARC Program is a 3-month immersive internship designed
            to accelerate learning, refine skills, and create impactful
            projects. Built around its three core aspects —{" "}
            <strong>Accelerate, Refine, and Create</strong>, the program ensures
            a guided experience where participants get hands-on knowledge,
            develop tech and professional abilities, and finally apply them in
            real-world projects.
          </p>
        </div>
        <motion.div
          className="image"
          whileHover={{ scale: 1.05 }}
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <Image
            src="/images/intro.jpg"
            alt="ARC Program Intro"
            width={500}
            height={350}
          />
        </motion.div>
      </motion.div>

      {/* Program List */}
      <div className="program-list">
        {[
          {
            title: "Accelerate",
            img: "/images/accelerate.jpg",
            desc: "Our flagship program designed for early-career developers and fresh graduates who want to fast-track their tech career. This intensive 12-week program combines hands-on coding experience with industry-relevant projects.",
          },
          {
            title: "Refine",
            img: "/images/refine.jpg",
            desc: "Designed for experienced developers looking to level up their skills and take on senior roles. This flexible 6-month program focuses on advanced technical skills and leadership development.",
          },
          {
            title: "Create",
            img: "/images/accelerate.jpg",
            desc: "Our startup incubation program for innovative tech entrepreneurs. Turn your ideas into reality with comprehensive support, mentorship, and resources needed to build a successful tech startup.",
            button: true,
          },
        ].map((card, i) => (
          <motion.div
            key={i}
            className={`program-card ${i === 1 ? "reverse" : ""} ${
              card.button ? "create-card" : ""
            }`}
            initial={{ opacity: 0, x: i % 2 === 0 ? -80 : 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, delay: i * 0.25 }}
          >
            <motion.div
              className="image"
              whileHover={{ scale: 1.08, rotate: i % 2 === 0 ? 2 : -2 }}
              transition={{ type: "spring", stiffness: 150 }}
            >
              <Image src={card.img} alt={card.title} width={500} height={350} />
            </motion.div>
            <motion.div className="text">
              <h3 className={card.title.toLowerCase()}>{card.title}</h3>
              <p>{card.desc}</p>
              {card.button && (
                <motion.button
                  className="join-btn"
                  whileHover={{
                    scale: 1.15,
                    boxShadow: "0px 0px 15px rgba(241, 112, 6, 0.6)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  Join Program
                </motion.button>
              )}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
