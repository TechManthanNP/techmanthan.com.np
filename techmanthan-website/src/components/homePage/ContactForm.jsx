"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import "../../styles/components/homePage/_contact.scss";

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
    <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
      <h2>Contact Us</h2>

      <div className="input-group">
        <input
          type="text"
          placeholder="First Name"
          {...register("firstName")}
        />
        <input
          type="text"
          placeholder="Middle Name"
          {...register("middleName")}
        />
      </div>
      {errors.firstName && (
        <p className="status-msg error">{errors.firstName.message}</p>
      )}

      <input type="text" placeholder="Last Name" {...register("lastName")} />
      {errors.lastName && (
        <p className="status-msg error">{errors.lastName.message}</p>
      )}

      <input type="email" placeholder="Email" {...register("email")} />
      {errors.email && (
        <p className="status-msg error">{errors.email.message}</p>
      )}

      <textarea placeholder="Your message" {...register("message")} />
      {errors.message && (
        <p className="status-msg error">{errors.message.message}</p>
      )}

      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Submit"}
      </button>

      {status && (
        <p
          className={`status-msg ${
            status.includes("successfully") ? "success" : "error"
          }`}
        >
          {status}
        </p>
      )}
    </form>
  );
}
