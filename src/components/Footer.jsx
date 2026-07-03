import React from "react";
import { ArrowUp, Mail } from "lucide-react";
import { LinkedinIcon, InstagramIcon } from "./CustomIcons";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-background border-t border-surface-container-highest">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter py-stack-md flex flex-col md:flex-row justify-between items-start md:items-center gap-stack-sm">
        
        {/* Brand details */}
        <div className="flex flex-col gap-2">
          <span className="font-headline-md text-headline-md text-primary tracking-tighter">
            TRIYOG.S
          </span>
          <p className="font-label-sm text-label-sm text-secondary uppercase tracking-widest opacity-80">
            © {new Date().getFullYear()} Triyog Shrestha. All rights reserved.
          </p>
        </div>

        {/* Links row */}
        <div className="flex flex-wrap gap-x-8 gap-y-4">
          <a
            href="https://linkedin.com/in/triyog-shrestha"
            target="_blank"
            rel="noopener noreferrer"
            className="font-label-sm text-label-sm uppercase text-outline hover:text-primary transition-colors duration-300 flex items-center gap-1"
          >
            <LinkedinIcon className="w-3.5 h-3.5" /> LinkedIn
          </a>
          <a
            href="https://instagram.com/triyog.shrestha"
            target="_blank"
            rel="noopener noreferrer"
            className="font-label-sm text-label-sm uppercase text-outline hover:text-primary transition-colors duration-300 flex items-center gap-1"
          >
            <InstagramIcon className="w-3.5 h-3.5" /> Instagram
          </a>
          <a
            href="mailto:triyog.shrestha@gmail.com"
            className="font-label-sm text-label-sm uppercase text-outline hover:text-primary transition-colors duration-300 flex items-center gap-1"
          >
            <Mail className="w-3.5 h-3.5" /> Gmail
          </a>
        </div>

        {/* Back to Top */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 group cursor-pointer focus:outline-none"
        >
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-outline group-hover:text-primary transition-colors duration-300">
            Back to top
          </span>
          <ArrowUp className="w-4 h-4 text-outline group-hover:text-primary group-hover:-translate-y-1 transition-all duration-300" />
        </button>

      </div>
    </footer>
  );
}
