"use client";

import { motion } from "framer-motion";
import "../../styles/components/contactUsPage/_dropUsALine.scss";
import DropUsForm from "./DropUsForm";

export default function DropUsALine() {
  return (
    <section id="contact" className="dropus-section">
      <motion.div
        className="header"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2>
          Drop <span>us a line.</span>
        </h2>
        <p>
          Fill out the form and expect to hear from us within two business days.
          Let’s co-create something impactful.
        </p>
      </motion.div>

      <div className="form-container">
        {/* Left side → form */}
        <DropUsForm />

        {/* Right side → info */}
        <div className="contact-info">
          <h4>Talk In Person? Visit Us</h4>
          <p>Bhaktapur-02, Nepal</p>
          <h4>Give Us a Call</h4>
          <p>+977 9701083225</p>
          <h4>Get More Information at</h4>
          <p>techmanthan.info@gmail.com</p>
        </div>
      </div>
    </section>
  );
}
