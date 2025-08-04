"use client";

import "../../styles/components/homePage/_contact.scss";
import ContactForm from "./ContactForm";

export default function ContactUs() {
  return (
    <section className="contact-section">
      <div className="map-container" style={{ position: "relative" }}>
        <iframe
          title="TechManthan Location"
          src="https://maps.google.com/maps?q=27.67114384380444,85.4392106832444&z=15&output=embed"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <ContactForm />
    </section>
  );
}

