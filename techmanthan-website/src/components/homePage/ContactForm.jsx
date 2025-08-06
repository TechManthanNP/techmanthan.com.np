"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import "../../styles/components/homePage/_contact.scss";
import { motion } from "framer-motion";

const contactSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  middleName: z.string().optional(),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email"),
  message: z.string().min(5, "Message must be at least 5 characters"),
});

export default function ContactForm() {
  const [status, setStatus] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data) => {
    setStatus("Sending...");

    const response = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      setStatus("Message sent successfully!");
      reset();
    } else {
      setStatus("Failed to send message. Try again.");
    }
  };

  return (
    <motion.form
      className="contact-form"
      onSubmit={handleSubmit(onSubmit)}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.3 }}
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{  duration: 0.6 }}
        viewport={{ once: false }}
      >
        Contact Us
      </motion.h2>

      <motion.div
        className="input-group"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{  duration: 0.6 }}
        viewport={{ once: false }}
      >
        <input type="text" placeholder="First Name" {...register("firstName")} />
        <input type="text" placeholder="Middle Name" {...register("middleName")} />
      </motion.div>
      {errors.firstName && <p className="status-msg error">{errors.firstName.message}</p>}

      <motion.input
        type="text"
        placeholder="Last Name"
        {...register("lastName")}
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false }}
      />
      {errors.lastName && <p className="status-msg error">{errors.lastName.message}</p>}

      <motion.input
        type="email"
        placeholder="Email"
        {...register("email")}
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false }}
      />
      {errors.email && <p className="status-msg error">{errors.email.message}</p>}

      <motion.textarea
        placeholder="Your message"
        {...register("message")}
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{  duration: 0.6 }}
        viewport={{ once: false }}
      />
      {errors.message && <p className="status-msg error">{errors.message.message}</p>}

      <motion.button
        type="submit"
        disabled={isSubmitting}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{  duration: 0.5 }}
        viewport={{ once: false }}
      >
        {isSubmitting ? "Sending..." : "Submit"}
      </motion.button>

      {status && (
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
    </motion.form>
  );
}
