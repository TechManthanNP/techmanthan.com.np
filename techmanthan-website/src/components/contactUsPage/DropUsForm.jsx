"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

// Validation schema
const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  designation: z.string().optional(),
  companyName: z.string().optional(),
  companyAddress: z.string().optional(),
  contactNumber: z.string().optional(),
  companyWorkField: z.string().optional(),
  email: z.string().email("Invalid email"),
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
    setStatus(""); // Reset status

    try {
      const res = await fetch("/api/contactUsPage", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (res.ok && result.success) {
        setStatus("Message sent successfully!");
        reset();
      } else {
        setStatus(
          `Failed to send message${result.error ? `: ${result.error}` : ""}`
        );
      }
    } catch (err) {
      console.error(err);
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
      <div className="row">
        <label>
          Your Name <span>*</span>
          <input {...register("name")} />
          {errors.name && <p className="error">{errors.name.message}</p>}
        </label>
        <label>
          Your Designation
          <input {...register("designation")} />
        </label>
      </div>

      <div className="row">
        <label>
          Company Name
          <input {...register("companyName")} />
        </label>
        <label>
          Company Address
          <input {...register("companyAddress")} />
        </label>
      </div>

      <div className="row">
        <label>
          Contact Number
          <input {...register("contactNumber")} />
        </label>
        <label>
          Company’s Work Field
          <input {...register("companyWorkField")} />
        </label>
      </div>

      <label>
        Email <span>*</span>
        <input {...register("email")} />
        {errors.email && <p className="error">{errors.email.message}</p>}
      </label>

      <label>
        Message <span>*</span>
        <textarea {...register("message")} />
        {errors.message && <p className="error">{errors.message.message}</p>}
      </label>

      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : "Submit"}
      </button>

      {status && <p className="status">{status}</p>}
    </motion.form>
  );
}
