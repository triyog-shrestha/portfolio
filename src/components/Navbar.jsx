import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      // Handle background change
      if (scrollTop > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "Education", href: "#education" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Interests", href: "#interests" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        isScrolled
          ? "py-4 bg-surface/80 backdrop-blur-md border-b border-surface-container-high"
          : "py-8 bg-transparent"
      }`}
    >
      <div className="flex justify-between items-center w-full px-margin-mobile md:px-gutter max-w-container-max mx-auto">
        <a
          href="#hero"
          className="font-headline-md text-headline-md text-primary tracking-tighter hover:opacity-80 transition-opacity"
        >
          TRIYOG.S
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-label-md text-label-md uppercase tracking-widest text-on-surface-variant opacity-70 hover:opacity-100 hover:text-primary transition-all duration-300 relative group"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Action Button & Mobile Menu Icon */}
        <div className="flex items-center gap-6">
          <a
            href="#contact"
            className="hidden sm:inline-block font-label-md text-label-md uppercase tracking-widest border border-primary px-6 py-2 hover:bg-primary hover:text-surface transition-all duration-500"
          >
            Inquiry
          </a>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden flex items-center focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-primary" />
            ) : (
              <Menu className="w-6 h-6 text-primary" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-surface border-b border-surface-container-highest transition-all duration-300 ease-in-out overflow-hidden ${
          isMobileMenuOpen ? "max-h-screen opacity-100 py-6" : "max-h-0 opacity-0 py-0"
        }`}
      >
        <div className="flex flex-col gap-6 px-margin-mobile">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="font-label-md text-label-md uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors py-2 border-b border-surface-container-low"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-center font-label-md text-label-md uppercase tracking-widest border border-primary py-3 hover:bg-primary hover:text-surface transition-all duration-500"
          >
            Inquiry
          </a>
        </div>
      </div>
    </nav>
  );
}
