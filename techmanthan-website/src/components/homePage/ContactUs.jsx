
"use client";

import "../../styles/components/homePage/_contact.scss";
import ContactForm from "./ContactForm";
import { motion } from "framer-motion";

export default function ContactUs() {
  return (
    <section className="contact-section">
      <motion.div
        className="map-container"
        style={{ position: "relative" }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <iframe
          title="TechManthan Location"
          src="https://maps.google.com/maps?q=27.67114384380444,85.4392106832444&z=15&output=embed"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </motion.div>

      <ContactForm />
    </section>
  );
}
