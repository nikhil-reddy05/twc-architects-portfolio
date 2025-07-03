"use client";
import { BsInstagram } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";
import Quote from "@/components/Quote";

export default function ContactPage() {
  return (
    <section className="pt-8 pb-2 px-6  max-w-4xl mx-auto text-white">
      <h1 className="text-2xl sm:text-3xl font-bold mb-10 uppercase text-center">
        Contact Us
      </h1>

      {/* Contact Details */}
      <div className="space-y-6 text-sm text-gray-300 mb-12 md:text-lg">
        <p>
          <strong>Phone:</strong>
          <a href="tel:+917036113378" className="text-blue-400 hover:underline">
            +91 7036113378
          </a>
        </p>
        <p>
          <strong>Email:</strong>
          <a
            href="mailto:jellapranav@gmail.com"
            className="text-blue-400 hover:underline"
          >
            jellapranav@gmail.com
          </a>
        </p>
        <p>
          <strong>Location:</strong> Hyderabad, Telangana, India
        </p>
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-col text-sm md:flex-row gap-4 justify-center items-center">
        <a
          href="https://wa.me/917330761540"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer min-w-[200px] bg-green-500 text-white font-semibold py-3 px-6 rounded-md text-center hover:bg-green-600 transition"
        >
          <p className="flex text-[14px] md:text-[17px] justify-center">
            <FaWhatsapp className="mr-2 h-6 w-6" /> WhatsApp
          </p>
        </a>

        <a
          href="https://instagram.com/thewhitewallsco"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer min-w-[200px] bg-[#d62976] text-white font-semibold py-3 px-6 rounded-md text-center hover:bg-[#ba1c63] transition"
        >
          <p className="flex text-[14px] md:text-[17px] justify-center">
            <BsInstagram className="mr-2 h-6 w-6" /> Instagram
          </p>
        </a>
      </div>

      {/* Optional: Google Map */}
      <div className="mt-16 w-full rounded-lg overflow-hidden">
        <iframe
          title="TWC Architects Location"
          className="w-full h-64 sm:h-80 border-0"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3814.1444418166093!2d79.27918707584107!3d17.065585983767733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb290762ae9d05%3A0x3b93ffb97cd0eb5b!2sThe%20White%20Walls%20Company%20-%20Architectural%20Designer!5e0!3m2!1sen!2sus!4v1749859176483!5m2!1sen!2sus"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <Quote />
    </section>
  );
}
