"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import "../../styles/components/contactUsPage/_hero.scss";

export default function HeroSection() {
  const [showTyping, setShowTyping] = useState(false);

  return (
    <section className="hero-section">
      <div className="overlay"></div>

      <motion.div
        className="hero-content"
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        onAnimationComplete={() => setShowTyping(true)}
      >
        <h1>
          Let’s <span>team up!</span>
        </h1>

        <div className="typing-wrapper">
          {showTyping && (
            <TypeAnimation
              sequence={[
                "No matter where you are in your journey, we’re excited to be part of your next chapter",
              ]}
              wrapper="p"
              speed={50}
              cursor={true}
            />
          )}
        </div>
      </motion.div>
    </section>
  );
}
