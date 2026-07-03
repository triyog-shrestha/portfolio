import React, { useState } from "react";
import { Mail, Send } from "lucide-react";
import contactImage from "../assets/contact.png";
import { LinkedinIcon, InstagramIcon } from "./CustomIcons";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "brand",
    message: ""
  });
  
  const [submitStatus, setSubmitStatus] = useState("idle"); // idle, transmitting, received

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all required fields.");
      return;
    }
    
    setSubmitStatus("transmitting");
    
    setTimeout(() => {
      setSubmitStatus("received");
      setFormData({
        name: "",
        email: "",
        subject: "brand",
        message: ""
      });
      
      setTimeout(() => {
        setSubmitStatus("idle");
      }, 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-stack-xl bg-background scroll-mt-20 border-t border-surface-container-highest">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter mt-8">
        
        {/* Section Header */}
        <header className="max-w-3xl mb-20 reveal-on-scroll">
          <span className="font-label-sm text-label-sm uppercase tracking-[0.4em] text-outline block mb-4">
            03 / Inquiry
          </span>
          <h1 className="font-headline-xl text-headline-xl mb-6 leading-none">
            Let’s begin a conversation.
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
            I am always open to discussing web projects, collaborative tools, internship opportunities, or academic research. Drop a message below.
          </p>
        </header>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-stack-xl">
          
          {/* Contact Form */}
          <section className="lg:col-span-7 reveal-on-scroll">
            <form onSubmit={handleSubmit} className="flex flex-col gap-10">
              
              <div className="group">
                <label 
                  htmlFor="name" 
                  className="block font-label-sm text-label-sm uppercase mb-2 text-outline group-focus-within:text-primary transition-colors"
                >
                  Name *
                </label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="YOUR FULL NAME" 
                  className="w-full bg-transparent border-t-0 border-x-0 border-b border-surface-container-high py-4 font-body-md text-body-md text-primary form-input-focus placeholder:text-surface-container-highest transition-colors"
                />
              </div>

              <div className="group">
                <label 
                  htmlFor="email" 
                  className="block font-label-sm text-label-sm uppercase mb-2 text-outline group-focus-within:text-primary transition-colors"
                >
                  Email *
                </label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="EMAIL@ADDRESS.COM" 
                  className="w-full bg-transparent border-t-0 border-x-0 border-b border-surface-container-high py-4 font-body-md text-body-md text-primary form-input-focus placeholder:text-surface-container-highest transition-colors"
                />
              </div>

              

              <div className="group">
                <label 
                  htmlFor="message" 
                  className="block font-label-sm text-label-sm uppercase mb-2 text-outline group-focus-within:text-primary transition-colors"
                >
                  Message *
                </label>
                <textarea 
                  id="message" 
                  name="message" 
                  required
                  rows="4"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="BRIEF OVERVIEW OF YOUR PROJECT OR INQUIRY..." 
                  className="w-full bg-transparent border-t-0 border-x-0 border-b border-surface-container-high py-4 font-body-md text-body-md text-primary form-input-focus resize-none placeholder:text-surface-container-highest transition-colors"
                ></textarea>
              </div>

              <div className="mt-4">
                <button 
                  type="submit" 
                  disabled={submitStatus === "transmitting"}
                  className={`border border-primary px-12 py-5 font-label-md text-label-md uppercase tracking-widest transition-all duration-500 flex items-center justify-center gap-3 ${
                    submitStatus === "received"
                      ? "bg-primary text-surface font-bold"
                      : "text-primary hover:bg-primary hover:text-surface"
                  } disabled:opacity-50`}
                >
                  {submitStatus === "idle" && (
                    <>
                      Send Inquiry <Send className="w-4 h-4" />
                    </>
                  )}
                  {submitStatus === "transmitting" && "Transmitting..."}
                  {submitStatus === "received" && "Received."}
                </button>
              </div>

            </form>
          </section>

          {/* Sidebar Information */}
          <aside className="lg:col-span-4 lg:col-start-9 flex flex-col gap-16 reveal-on-scroll">
            
            {/* Visual Anchor */}
            <div className="relative w-full aspect-square overflow-hidden border border-surface-container-high">
              <img 
                className="w-full h-full object-cover" 
                src={contactImage}
                alt="Brutalist concrete detail showing shadows and clean minimalist angles"
              />
            </div>

            {/* Direct Social Links */}
            <div className="flex flex-col gap-8">
              <div>
                <h3 className="font-label-sm text-label-sm uppercase text-outline mb-3">Direct</h3>
                <a 
                  href="mailto:triyog.shrestha@gmail.com" 
                  className="flex items-center gap-3 font-body-lg text-body-lg text-primary hover:text-outline transition-colors duration-300"
                >
                  <Mail className="w-5 h-5 text-primary opacity-70" />
                  triyogshrestha86@gmail.com
                </a>
              </div>

              <div>
                <h3 className="font-label-sm text-label-sm uppercase text-outline mb-3">Social</h3>
                <ul className="flex flex-col gap-4">
                  <li>
                    <a 
                      href="https://linkedin.com/in/triyog-shrestha" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 font-body-md text-body-md text-primary hover:text-outline transition-colors"
                    >
                      <LinkedinIcon className="w-5 h-5 text-primary opacity-70" />
                      LinkedIn
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://instagram.com/triyog.shrestha" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 font-body-md text-body-md text-primary hover:text-outline transition-colors"
                    >
                      <InstagramIcon className="w-5 h-5 text-primary opacity-70" />
                      Instagram
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-label-sm text-label-sm uppercase text-outline mb-3">Location</h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Kathmandu,<br />
                  Bagmati, Nepal
                </p>
              </div>
            </div>

          </aside>
        </div>

      </div>
    </section>
  );
}
