"use client";

import "../styles/components/aboutPage/_Footer.scss";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2, 
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Footer = () => {
  return (
    <footer className="footer">
      <motion.div
        className="footer-top"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
      >
        <motion.div className="footer-column" variants={itemVariants}>
          <h4>Company</h4>
          <ul>
            <li>About Us</li>
            <li>Contact Us</li>
          </ul>
        </motion.div>

        <motion.div className="footer-column" variants={itemVariants}>
          <h4>AI Products</h4>
          <ul>
            <li><a href="/">SmartHRMS</a></li>
            <li><a href="/">SkillMentorAI</a></li>
            <li><a href="/">FiscalMind</a></li>
          </ul>
        </motion.div>

        <motion.div className="footer-column" variants={itemVariants}>
          <h4>AI Solutions</h4>
          <ul>
            <li><a href="/">GenAI Solutions</a></li>
            <li><a href="/">AI Strategy</a></li>
            <li><a href="/">Data Intelligence</a></li>
            <li><a href="/">Responsible AI and Compliance</a></li>
          </ul>
        </motion.div>

        <motion.div className="footer-column" variants={itemVariants}>
          <h4>Contact</h4>
          <ul>
            <li>
              <a href="mailto:info@techmanthan.com">
                techmanthan.info@gmail.com
              </a>
            </li>
            <li><a href="/">+977 9701083925</a></li>
          </ul>
        </motion.div>

        <motion.div className="footer-column" variants={itemVariants}>
          <h4>Follow Us On</h4>
          <div className="socials">
            <motion.a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaFacebookF />
            </motion.a>
            <motion.a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaInstagram />
            </motion.a>
            <motion.a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaLinkedinIn />
            </motion.a>
            <motion.a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaXTwitter />
            </motion.a>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        className="footer-bottom"
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        viewport={{ once: false }}
      >
        © {new Date().getFullYear()} Tech Manthan. All rights reserved.
      </motion.div>
    </footer>
  );
};

export default Footer;
