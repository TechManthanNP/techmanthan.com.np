"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import "../../styles/components/contactUspage/_subscribe.scss";

// Animations
const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.2, ease: "easeOut" } },
};
const childVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

// Validation schema
const subscribeSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

export default function SubscribeSection() {
  const [status, setStatus] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(subscribeSchema),
  });

  const emailValue = watch("email");

  const onSubmit = async (data) => {
    setStatus("");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      });
      if (res.ok) {
        setStatus("Subscribed successfully!");
        reset();
      } else {
        setStatus("Failed to subscribe. Please try again.");
      }
    } catch (err) {
      setStatus("Something went wrong. Please try again later.");
    }
  };

  return (
    <motion.section
      className="subscribe-section"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.3 }}
    >
      <div className="map-container">
        {/* Google Maps Embed (you can replace src with your address) */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.307655782168!2d85.4204566754663!3d27.676884576200106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1b005fb2e85b%3A0x9b84689a66b991bc!2sTech%20Manthan!5e0!3m2!1sen!2snp!4v1754499998119!5m2!1sen!2snp"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className="form-container">
        <motion.h2 variants={childVariants}>
          Subscribe to Our Newsletter,Stay a Step Ahead
        </motion.h2>

        <motion.form
          className="subscribe-form"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          variants={childVariants}
        >
          <motion.input
            type="text"
            placeholder="Your Email Address"
            {...register("email")}
            disabled={isSubmitting}
            value={emailValue || ""}
            onChange={(e) => {
              setStatus("");
              setValue("email", e.target.value);
            }}
            variants={childVariants}
          />
          <motion.button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Subscribing..." : "Subscribe"}
          </motion.button>
        </motion.form>

        {errors.email && (
          <p className="status-msg error">{errors.email.message}</p>
        )}
        {!isSubmitting && status && (
          <motion.p
            className={`status-msg ${
              status.includes("successfully") ? "success" : "error"
            }`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            {status}
          </motion.p>
        )}
      </div>
    </motion.section>
  );
}
