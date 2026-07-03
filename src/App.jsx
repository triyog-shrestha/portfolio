import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.15,
      rootMargin: "0px 0px -10% 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        } else {
          entry.target.classList.remove("active");
        }
      });
    }, observerOptions);

    const elementsToReveal = document.querySelectorAll(".reveal-on-scroll");
    elementsToReveal.forEach((el) => observer.observe(el));

    return () => {
      elementsToReveal.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="selection:bg-primary selection:text-surface min-h-screen flex flex-col bg-background text-on-background">
      {/* Navigation Menu */}
      <Navbar />

      {/* Main Sections */}
      <main className="flex-grow pt-20">
        {/* Section 1: Hero */}
        <Hero />

        {/* Section 2: Education */}
        <Education />

        {/* Section 3: Skills */}
        <Skills />

        {/* Section 4: Projects */}
        <Projects />

        {/* Section 5: Contact */}
        <Contact />
      </main>

      {/* Footer details */}
      <Footer />
    </div>
  );
}
