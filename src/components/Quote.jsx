"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import { FiChevronDown } from "react-icons/fi";

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
    <section className="min-w-0 rounded-[20px] border border-[#e0e5ec] bg-white p-3.5 shadow-[0_24px_70px_rgba(15,23,42,0.08)] sm:rounded-[32px] sm:p-7 lg:p-9">
      <h3 className="text-[1.2rem] font-semibold leading-tight tracking-normal text-[#111827] sm:text-[1.65rem] lg:text-3xl">
        Get a Quote
      </h3>

      <form
        onSubmit={handleEmailSubmit}
        className="mt-3.5 space-y-2.5 text-sm text-[#344054] sm:mt-7 sm:space-y-4 lg:mt-8 lg:space-y-5"
      >
        <label className="block">
          <span className="mb-1 block text-[8px] font-semibold uppercase leading-none tracking-[0.06em] text-[#667085] sm:text-[11px] sm:tracking-[0.1em]">
            Your Name
          </span>
          <input
            type="text"
            name="name"
            aria-label="Your Name"
            placeholder="Your Name"
            required
            value={formData.name}
            onChange={handleChange}
            className="min-h-9 w-full rounded-xl border border-[#d8dee8] bg-[#f8fafc] px-3 py-2 text-[12px] tracking-normal text-[#111827] outline-none transition placeholder:text-[#98a2b3] focus:border-[#1f3a5f] focus:bg-white focus:ring-4 focus:ring-[#1f3a5f]/10 sm:min-h-11 sm:rounded-2xl sm:text-[15px] lg:min-h-12 lg:py-3.5 lg:text-base"
          />
        </label>

        <label className="block">
          <span className="mb-1 block text-[8px] font-semibold uppercase leading-none tracking-[0.06em] text-[#667085] sm:text-[11px] sm:tracking-[0.1em]">
            Your Email
          </span>
          <input
            type="email"
            name="email"
            aria-label="Your Email"
            placeholder="Your Email"
            required
            value={formData.email}
            onChange={handleChange}
            className="min-h-9 w-full rounded-xl border border-[#d8dee8] bg-[#f8fafc] px-3 py-2 text-[12px] tracking-normal text-[#111827] outline-none transition placeholder:text-[#98a2b3] focus:border-[#1f3a5f] focus:bg-white focus:ring-4 focus:ring-[#1f3a5f]/10 sm:min-h-11 sm:rounded-2xl sm:text-[15px] lg:min-h-12 lg:py-3.5 lg:text-base"
          />
        </label>

        <label className="block">
          <span className="mb-1 block text-[8px] font-semibold uppercase leading-none tracking-[0.06em] text-[#667085] sm:text-[11px] sm:tracking-[0.1em]">
            Phone Number optional
          </span>
          <input
            type="text"
            name="phone"
            aria-label="Phone Number optional"
            placeholder="Phone Number (optional)"
            value={formData.phone}
            onChange={handleChange}
            className="min-h-9 w-full rounded-xl border border-[#d8dee8] bg-[#f8fafc] px-3 py-2 text-[12px] tracking-normal text-[#111827] outline-none transition placeholder:text-[#98a2b3] focus:border-[#1f3a5f] focus:bg-white focus:ring-4 focus:ring-[#1f3a5f]/10 sm:min-h-11 sm:rounded-2xl sm:text-[15px] lg:min-h-12 lg:py-3.5 lg:text-base"
          />
        </label>

        <label className="block">
          <span className="mb-1 block text-[8px] font-semibold uppercase leading-none tracking-[0.06em] text-[#667085] sm:text-[11px] sm:tracking-[0.1em]">
            Select Project Type
          </span>
          <div className="relative z-20">
            <select
              name="type"
              aria-label="Select Project Type"
              required
              value={formData.type}
              onChange={handleChange}
              className="relative z-10 min-h-9 w-full appearance-none rounded-xl border border-[#d8dee8] bg-[#f8fafc] px-3 py-2 pr-11 text-[12px] tracking-normal text-[#111827] outline-none transition focus:border-[#1f3a5f] focus:bg-white focus:ring-4 focus:ring-[#1f3a5f]/10 sm:min-h-11 sm:rounded-2xl sm:pr-12 sm:text-[15px] lg:min-h-12 lg:py-3.5 lg:pr-14 lg:text-base"
            >
              <option value="">Select Project Type</option>
              <option value="Architecture">Architecture</option>
              <option value="Interiors">Interiors</option>
              <option value="Both">Both</option>
            </select>
            <span className="pointer-events-none absolute inset-y-0 right-3 z-20 flex items-center text-[#111827] sm:right-4 lg:right-5">
              <FiChevronDown className="h-4 w-4 stroke-[2.25] sm:h-[18px] sm:w-[18px]" />
            </span>
          </div>
        </label>

        <label className="block">
          <span className="mb-1 block text-[8px] font-semibold uppercase leading-none tracking-[0.06em] text-[#667085] sm:text-[11px] sm:tracking-[0.1em]">
            Select Budget Range
          </span>
          <div className="relative z-20">
            <select
              name="budget"
              aria-label="Select Budget Range"
              value={formData.budget}
              onChange={handleChange}
              className="relative z-10 min-h-9 w-full appearance-none rounded-xl border border-[#d8dee8] bg-[#f8fafc] px-3 py-2 pr-11 text-[12px] tracking-normal text-[#111827] outline-none transition focus:border-[#1f3a5f] focus:bg-white focus:ring-4 focus:ring-[#1f3a5f]/10 sm:min-h-11 sm:rounded-2xl sm:pr-12 sm:text-[15px] lg:min-h-12 lg:py-3.5 lg:pr-14 lg:text-base"
            >
              <option value="">Select Budget Range</option>
              <option value="Under ₹5L">Under ₹5L</option>
              <option value="₹5L–₹20L">₹5L–₹20L</option>
              <option value="₹20L–₹50L">₹20L–₹50L</option>
              <option value="₹50L+">₹50L+</option>
            </select>
            <span className="pointer-events-none absolute inset-y-0 right-3 z-20 flex items-center text-[#111827] sm:right-4 lg:right-5">
              <FiChevronDown className="h-4 w-4 stroke-[2.25] sm:h-[18px] sm:w-[18px]" />
            </span>
          </div>
        </label>

        <label className="block">
          <span className="mb-1 block text-[8px] font-semibold uppercase leading-none tracking-[0.06em] text-[#667085] sm:text-[11px] sm:tracking-[0.1em]">
            Tell us more about your project...
          </span>
          <textarea
            name="description"
            aria-label="Tell us more about your project..."
            placeholder="Tell us more about your project..."
            required
            rows="5"
            value={formData.description}
            onChange={handleChange}
            className="min-h-[84px] w-full resize-none rounded-xl border border-[#d8dee8] bg-[#f8fafc] px-3 py-2 text-[12px] tracking-normal text-[#111827] outline-none transition placeholder:text-[#98a2b3] focus:border-[#1f3a5f] focus:bg-white focus:ring-4 focus:ring-[#1f3a5f]/10 sm:min-h-32 sm:rounded-2xl sm:text-[15px] lg:min-h-36 lg:py-3.5 lg:text-base"
          />
        </label>

        <div className="grid gap-2 pt-0.5 sm:grid-cols-2 sm:gap-3 lg:gap-4 lg:pt-2">
          <button
            type="submit"
            className="min-h-9 rounded-full bg-[#111827] px-3 py-2 text-[12px] font-semibold tracking-normal text-white shadow-sm transition hover:bg-[#1f2937] focus:outline-none focus:ring-4 focus:ring-[#111827]/15 cursor-pointer sm:text-sm lg:min-h-12 lg:px-5 lg:py-3"
          >
            Send via Email
          </button>

          <button
            type="button"
            onClick={handleWhatsAppClick}
            className="min-h-9 rounded-full bg-[#22c55e] px-3 py-2 text-[12px] font-semibold tracking-normal text-white shadow-sm transition hover:bg-[#16a34a] focus:outline-none focus:ring-4 focus:ring-[#22c55e]/20 cursor-pointer sm:text-sm lg:min-h-12 lg:px-5 lg:py-3"
          >
            Send via WhatsApp
          </button>
        </div>
      </form>
    </section>
  );
}
