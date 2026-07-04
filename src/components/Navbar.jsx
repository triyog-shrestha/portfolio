import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

function SpotifyIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm4.66 14.17a.75.75 0 0 1-1.03.26c-2.82-1.73-6.37-2.12-10.55-1.16a.75.75 0 0 1-.95-.57.75.75 0 0 1 .57-.95c4.47-.95 8.38-.5 11.56 1.35a.75.75 0 0 1 .26 1.07Zm1.47-3.26a.75.75 0 0 1-1.03.26c-3.23-1.58-8.16-2.04-11.96-1.12a.75.75 0 0 1-.95-.57.75.75 0 0 1 .57-.95c4.2-.95 9.56-.48 13.3 1.29a.75.75 0 0 1 .27 1.09Zm.13-3.3c-3.63-2.16-9.6-2.36-13.06-1.31a.75.75 0 1 1-.42-1.44c3.96-1.16 10.39-.94 14.46 1.5a.75.75 0 0 1-.27 1.25Z" />
    </svg>
  );
}

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
            href="https://open.spotify.com/playlist/5NEpEYNViL4Rh7Yz1jcU8S"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 font-label-md text-label-md uppercase tracking-widest border border-primary px-6 py-2 hover:bg-primary hover:text-surface transition-all duration-500"
          >
            <SpotifyIcon className="w-4 h-4" />
            Check out my playlist
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
            href="https://open.spotify.com/playlist/37i9dQZF1DXcBWIGoYBM5M?si=3c1f6d1f7a474a5d"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-center font-label-md text-label-md uppercase tracking-widest border border-primary py-3 hover:bg-primary hover:text-surface transition-all duration-500"
          >
            Check out my playlist
          </a>
        </div>
      </div>
    </nav>
  );
}
