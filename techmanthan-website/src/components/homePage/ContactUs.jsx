
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
        {/* <iframe
          title="TechManthan Location"
          src="https://maps.google.com/maps?q=27.67114384380444,85.4392106832444&z=15&output=embed"
          https://www.google.com/maps/place/Tech+Manthan/@27.6768846,85.4204567,17z/data=!3m1!4b1!4m6!3m5!1s0x39eb1b005fb2e85b:0x9b84689a66b991bc!8m2!3d27.6768846!4d85.4230316!16s%2Fg%2F11yg4v4t0w?entry=ttu&g_ep=EgoyMDI1MDgwMy4wIKXMDSoASAFQAw%3D%3D
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe> */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.307655782168!2d85.4204566754663!3d27.676884576200106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1b005fb2e85b%3A0x9b84689a66b991bc!2sTech%20Manthan!5e0!3m2!1sen!2snp!4v1754499998119!5m2!1sen!2snp"
          
          style={{border:0}}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </motion.div>

      <ContactForm />
    </section>
  );
}
