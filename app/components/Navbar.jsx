"use client";

import Image from "next/image";
import { useState } from "react";
import { ContactForm } from "./ContactForm";
import PricingTable from "./PricingTable";

export default function Navbar() {
  const [isHovered, setIsHovered] = useState(false);
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleFormSubmit = async (formData) => {
    try {
      const response = await fetch("http://localhost:8000/agenc/send-info", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsFormSubmitted(true);
        setIsContactFormOpen(false);
      } else {
        console.error("Error submitting form:", await response.text());
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="w-full flex flex-col items-center">
      <div className="fixed top-0 z-10 w-[22rem] flex items-center pt-6">
        <div className="bg-[#2f2f2f]/25 backdrop-blur-sm rounded-full flex items-center justify-between px-6 py-3 w-full max-w-[90rem] relative overflow-hidden">
          {/* Gradient border effect */}
          <div className="absolute inset-0 rounded-full  opacity-50 -z-10" />

          {/* Logo */}
          <div className="flex-shrink-0 pl-6">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Group-VA2GOUFvtoTX5fqXXCfgvQictJ6EYM.svg"
              alt="AgenC Logo"
              width={90}
              height={32}
              priority
            />
          </div>

          {/* Request Demo Button */}
          <button
            className={`relative group px-6 py-2 rounded-full transition-all duration-300 ease-in-out
                        ${
                          isHovered
                            ? "shadow-lg transform -translate-y-0.5"
                            : "shadow-md"
                        }
                        active:shadow-inner active:transform active:translate-y-0 active:scale-95`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => setIsContactFormOpen(true)}
          >
            {/* Button gradient border */}
            <div
              className={`absolute inset-0 rounded-full bg-gradient-to-r from-red-500 to-pink-500 
                             transition-opacity duration-300 ease-in-out
                             ${isHovered ? "opacity-100" : "opacity-80"} -z-10`}
            />
            <div
              className={`absolute inset-[1px] rounded-full bg-[#2F2F2F] transition-all duration-300 ease-in-out
                             ${isHovered ? "opacity-90" : "opacity-100"} 
                             group-active:opacity-100 group-active:inset-[2px] -z-10`}
            />
            <span className="text-white text-sm font-medium relative z-10">
              Request a demo
            </span>

            {/* Glow effect */}
            <div
              className={`absolute inset-0 rounded-full bg-gradient-to-r from-red-500 via-[#F15A29] to-[#EC008C] 
                             filter blur-sm transition-opacity duration-300 ease-in-out
                             ${isHovered ? "opacity-80" : "opacity-0"} 
                             group-active:opacity-90 group-active:blur-md -z-20`}
            />
          </button>
        </div>
      </div>

      {/* Contact Form */}
      <ContactForm
        isOpen={isContactFormOpen}
        onClose={() => setIsContactFormOpen(false)}
        onSubmit={handleFormSubmit}
      />
    </div>
  );
}
