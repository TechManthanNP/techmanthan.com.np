"use client";
import { FaLongArrowAltRight } from "react-icons/fa";
import { motion } from "framer-motion";
import "../../styles/components/homePage/_productShowcase.scss";

// Animation variant for each child
const fadeItem = {
  hidden: { opacity: 0, y: 30, filter: "brightness(0.6)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "brightness(1)",
    transition: { duration: 1.2, ease: "easeOut" },
  },
};

export default function ProductShowcase() {
  return (
    <section className="product-showcase">
      {/* Header */}
      <motion.div
        className="header"
        variants={fadeItem}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }} // 👈 replay on every scroll
      >
        <h2>Enterprise-Grade AI Products</h2>
        <p>
          Explore a suite of AI-powered products engineered for performance,
          scalability, and practical impact across industries.
        </p>
      </motion.div>

      <div className="card-layout">
        {/* Left Column */}
        <div className="left-column">
          <motion.div
            className="card smarthrms"
            variants={fadeItem}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          >
            <div className="card-text">
              <h3>SmartHRMS</h3>
              <div className="tag">Predictive AI</div>
              <ul>
                <li>
                  Next Generation HRMS designed to streamline HR operations and
                  deliver predictive workforce insights.
                </li>
              </ul>
              <button>
                READ MORE <FaLongArrowAltRight className="arrow-icon" />{" "}
              </button>
            </div>
            <div className="image-group">
              <img className="img-back" src="/images/hrms2.png" alt="HRMS BG" />
              <img
                className="img-front"
                src="/images/hrms.png"
                alt="HRMS Overlay"
              />
            </div>
          </motion.div>

          <motion.div
            className="card fiscalmind"
            variants={fadeItem}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          >
            <div className="card-text">
              <h3>FiscalMind</h3>
              <div className="tag">Automation</div>
              <ul>
                <li>Automate financial workflows</li>
                <li>Ensure audit readiness</li>
                <li>Uncover actionable insights</li>
              </ul>
              <button>
                READ MORE <FaLongArrowAltRight className="arrow-icon" />{" "}
              </button>
            </div>
            <div className="image-group">
              <img
                className="img-back"
                src="/images/fiscal.png"
                alt="Finance BG"
              />
              <img
                className="img-front"
                src="/images/fiscal2.png"
                alt="Finance Overlay"
              />
            </div>
          </motion.div>
        </div>

        {/* Right Column */}
        <motion.div
          className="card skillmentor"
          variants={fadeItem}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          <div className="card-text">
            <h3>SkillMentor AI</h3>
            <div className="tags">
              <span className="tag">AI Coach</span>
              <span className="tag">Multi Modal</span>
            </div>
            <ul>
              <li>
                A soft skill training platform tailored to individual learning
                styles and performance gaps powered by GenAI.
              </li>
              <li>
                Delivers personalized learning journeys to enhance
                communication, leadership, adaptability, and emotional
                intelligence across the workforce.
              </li>
            </ul>
            <button>
              READ MORE <FaLongArrowAltRight className="arrow-icon" />{" "}
            </button>
          </div>
          <div className="image-single">
            <img src="/images/skillMentor.png" alt="SkillMentor UI" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
