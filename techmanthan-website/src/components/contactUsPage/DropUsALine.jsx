"use client";

import { motion } from "framer-motion";
import "../../styles/components/contactUsPage/_dropUsALine.scss";
import DropUsForm from "./DropUsForm";

export default function DropUsALine() {
  return (
    <section id="contact" className="dropus-section">
      {/* Header */}
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

      {/* Form + Info */}
      <div className="dropus-box">
        {/* Left side → form */}
        <div className="form-side">
          <h3>
            Have questions? Ideas?
            <br />
            <span>Let’s talk!</span> We’re just a click away.
          </h3>
          <DropUsForm />
        </div>

        {/* Right side → info */}
        <div className="info-side">
          <h3>Talk In Person? Visit Us</h3>
          <p>Bhaktapur-02, Nepal</p>

          <h3>Give Us a Call</h3>
          <p>+977 9701039325</p>

          <h3>Get More Information at</h3>
          <p>techmanthan.info@gmail.com</p>
        </div>
      </div>
    </section>
  );
}
