"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import "../../styles/components/contactUsPage/_jobAndARCSection.scss";

export default function JobAndARCSection() {
  const textRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    const textEl = textRef.current;
    const imgEl = imgRef.current;
    if (!textEl || !imgEl) return;

    const setImgHeight = () => {
      const h = textEl.getBoundingClientRect().height;
      imgEl.style.height = `${Math.max(0, h * 0.9)}px`;
    };

    const ro = new ResizeObserver(setImgHeight);
    ro.observe(textEl);
    setImgHeight(); // initial
    window.addEventListener("resize", setImgHeight);

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", setImgHeight);
    };
  }, []);

  return (
    <section className="job-arc-section">
      <div className="text-content" ref={textRef}>
        <div className="job-section">
          <motion.div
            className="header"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2>
              Looking For <span>Job?</span>
            </h2>
            <p>
              Explore exciting career opportunities and become part of a company
              that values innovation, collaboration, and personal growth.
            </p>
            <p>
              We’re always on the lookout for talented individuals ready to make
              an impact. Browse our open roles and take the next step in your
              career with us.
            </p>
          </motion.div>
          <button className="apply-button">APPLY NOW →</button>
        </div>

        <div className="arc-section">
          <motion.div
            className="header"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2>
              Get into our <span>ARC</span> program?
            </h2>
            <p>
              Kickstart your tech journey with our ARC program — designed to
              help you accelerate your learning, refine your skills, and create
              real impact.
            </p>
            <p>
              Whether you're a student or a fresh graduate, this internship is
              your gateway to hands-on experience, mentorship, and growth at
              Techmanthan.
            </p>
          </motion.div>
          <button className="apply-button">APPLY NOW →</button>
        </div>
      </div>

      <div className="image-section">
        <img ref={imgRef} src="/jobArc.png" alt="Team working together" />
      </div>
    </section>
  );
}
