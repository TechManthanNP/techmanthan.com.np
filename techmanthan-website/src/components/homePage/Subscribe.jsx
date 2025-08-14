"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import "../../styles/components/homePage/_subscribe.scss";

// Animation Variants
const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.2, ease: "easeOut" },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

// Validation Schema
const subscribeSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

export default function Subscribe() {
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

  // Watch input changes
  const emailValue = watch("email");

  const onSubmit = async (data) => {
    setStatus(""); // Clear previous status

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      });

      if (res.ok) {
        setStatus("Subscribed successfully!");
        reset(); // Reset the form after success
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
      <motion.h2 variants={childVariants}>
        Subscribe to Our Newsletter
      </motion.h2>
      <motion.p variants={childVariants}>Stay a Step Ahead</motion.p>

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
            setStatus(""); // Clear status message
            setValue("email", e.target.value); // Update form value
          }}
          variants={childVariants}
        />
        <motion.button
          type="submit"
          disabled={isSubmitting}
          variants={childVariants}
        >
          {isSubmitting ? "Subscribing..." : "Subscribe"}
        </motion.button>
      </motion.form>

      {/* Validation error below input */}
      {errors.email && (
        <p className="status-msg error">{errors.email.message}</p>
      )}

      {/* Status message below input, only after submission */}
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
    </motion.section>
  );
}
