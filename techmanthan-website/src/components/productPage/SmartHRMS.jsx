
"use client";
import { FaGear } from "react-icons/fa6";
import "../../styles/components/productPage/_smartHrms.scss";
import { FaBrain, FaLock, FaKey, FaChartBar, FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";

const SmartHRMS = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="smartHrms-wrapper">
      {/* Top Section */}
      <div className="top-section-wrapper">
        <div className="top-contents">
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >
            SmartHRMS
          </motion.h1>

          <motion.div
            className="tags"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >
            Predictive AI
          </motion.div>

          <ul>
            <motion.li
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
            >
              Next Generation HRMS designed to streamline HR operations and deliver predictive workforce insights.
            </motion.li>
            <motion.li
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
            >
              From recruitment to retention, performance tracking to predictive analytics, SmartHRMS empowers organizations to build stronger, more agile teams without the operational overhead.
            </motion.li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bottom-section-wrapper">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          Key Features
        </motion.h2>

        <ul>
          <motion.li
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >
            <FaChartBar className="icon bar" size={20} /> AI-Powered Workforce Insights
          </motion.li>

          <motion.li
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >
            <FaGear className="icon gear" size={20} /> Secure & Scalable
          </motion.li>

          <motion.li
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >
            <FaBrain className="icon brain" size={20} /> Talent Optimization
          </motion.li>

          <motion.li
            className="lock-key-item"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >
            <span className="lock-key-wrapper">
              <FaLock className="icon lock" size={20} />
              <FaKey className="icon key" size={15} />
            </span>
            Smart Automation
          </motion.li>
        </ul>

        <motion.a
          href="/products"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          <motion.button
            className="demo-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            variants={fadeUp}
          >
            <span className="btn-text">Book a Demo</span>
            <FaPaperPlane className="plane" />
          </motion.button>
        </motion.a>
      </div>

      {/* Images */}
      <div className="image-wrapper">
        <motion.div
          className="image1"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          <img src="/images/products/login.png" alt="" />
        </motion.div>

        <motion.div
          className="image2"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          <img src="/images/products/dashboard.png" alt="" />
        </motion.div>
      </div>
    </section>
  );
};

export default SmartHRMS;
