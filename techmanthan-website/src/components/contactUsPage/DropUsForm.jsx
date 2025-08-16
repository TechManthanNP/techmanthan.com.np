"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email"),
  company: z.string().optional(),
  message: z.string().min(5, "Message must be at least 5 characters"),
});

export default function DropUsForm() {
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
    setStatus("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      });

      if (res.ok) {
        setStatus("Message sent successfully!");
        reset();
      } else {
        setStatus("Failed to send message.");
      }
    } catch {
      setStatus("Something went wrong. Please try again later.");
    }
  };

  return (
    <motion.form
      className="contact-form"
      onSubmit={handleSubmit(onSubmit)}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <input placeholder="Your Name" {...register("name")} />
      {errors.name && <p className="error">{errors.name.message}</p>}

      <input placeholder="Email" {...register("email")} />
      {errors.email && <p className="error">{errors.email.message}</p>}

      <input placeholder="Company Name" {...register("company")} />

      <textarea placeholder="Message" {...register("message")} />
      {errors.message && <p className="error">{errors.message.message}</p>}

      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : "Submit"}
      </button>

      {status && <p className="status">{status}</p>}
    </motion.form>
  );
}
