"use client";

import { useState } from "react";
import toast from "react-hot-toast";

export default function Quote() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    type: "",
    budget: "",
    description: "",
  });

  const handleChange = (e) =>
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    toast.loading("Sending email...");
    try {
      const res = await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone || "N/A",
          type: formData.type,
          budget: formData.budget,
          description: formData.description,
        }),
      });

      toast.dismiss();

      if (res.ok) {
        toast.success("Email sent successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          type: "",
          budget: "",
          description: "",
        });
      } else {
        toast.error("Failed to send email. Please try again.");
      }
    } catch (error) {
      toast.dismiss();
      toast.error("Failed to send email. Please try again.");
      console.error("Email send error:", error);
    }
  };

  const handleWhatsAppClick = () => {
    const { name, email, phone, type, budget, description } = formData;

    // Simple name validation (at least 2 chars and only letters/spaces)
    const isValidName = name.trim().length >= 2 && /^[a-zA-Z\s]+$/.test(name);

    // Basic email regex
    const isValidEmail =
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);

    // Optional: Phone number must be 10 digits if provided
    const isValidPhone = phone === "" || /^\d{10}$/.test(phone);

    // Project type & description must be provided
    const isValidType = type.trim().length > 0;
    const isValidDesc = description.trim().length > 10;

    // Show alerts for invalid fields
    if (!isValidName) {
      alert("Please enter a valid name (letters only, 2+ characters).");
      return;
    }
    if (!isValidEmail) {
      alert("Please enter a valid email address.");
      return;
    }
    if (!isValidPhone) {
      alert("Phone number must be 10 digits (or leave empty).");
      return;
    }
    if (!isValidType) {
      alert("Please select a project type.");
      return;
    }
    if (!isValidDesc) {
      alert(
        "Please enter a more detailed project description (10+ characters)."
      );
      return;
    }

    // Build WhatsApp message
    const message = `Hi TWC Architects 👋,
I’d like to request a quote:

Name: ${name}
Email: ${email}
Phone: ${phone || "N/A"}
Project Type: ${type}
Budget: ${budget || "Not specified"}
Description: ${description}

Looking forward to hearing from you!`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodedMessage}`,
      "_blank"
    );
  };

  return (
    <section className="page-section max-w-2xl mx-auto px-4 flow-rhythm">
      <h1 className="type-h1 text-center">
        Get a Quote
      </h1>

      <form
        onSubmit={handleEmailSubmit}
        className="space-y-6 type-body"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          onChange={handleChange}
          className="field-control"
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          onChange={handleChange}
          className="field-control"
        />

        <input
          type="text"
          name="phone"
          placeholder="Phone Number (optional)"
          onChange={handleChange}
          className="field-control"
        />

        <select
          name="type"
          required
          onChange={handleChange}
          className="field-control"
        >
          <option value="">Select Project Type</option>
          <option value="Architecture">Architecture</option>
          <option value="Interiors">Interiors</option>
          <option value="Both">Both</option>
        </select>

        <select
          name="budget"
          onChange={handleChange}
          className="field-control"
        >
          <option value="">Select Budget Range</option>
          <option value="Under ₹5L">Under ₹5L</option>
          <option value="₹5L–₹20L">₹5L–₹20L</option>
          <option value="₹20L–₹50L">₹20L–₹50L</option>
          <option value="₹50L+">₹50L+</option>
        </select>

        <textarea
          name="description"
          placeholder="Tell us more about your project..."
          required
          rows="5"
          onChange={handleChange}
          className="field-control"
        />

        <div className="flex flex-col sm:flex-row gap-4">
          <button
            type="submit"
            className="flex-1 btn-surface"
          >
            Send via Email
          </button>

          <button
            type="button"
            onClick={handleWhatsAppClick}
            className="flex-1 btn-accent"
          >
            Send via WhatsApp
          </button>
        </div>
      </form>
    </section>
  );
}
