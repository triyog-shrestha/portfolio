import React from "react";
import { ArrowDown } from "lucide-react";
import landImage from "../assets/land.png";

export default function Hero() {
  return (
    <section id="hero" className="relative h-screen w-full flex items-center overflow-hidden reveal-on-scroll">
      {/* Background Image and Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          className="w-full h-full object-cover grayscale opacity-60"
          alt="Brutalist concrete architecture at twilight, dark-toned minimalist aesthetic"
          src={landImage}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-surface/40 via-transparent to-surface"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 w-full max-w-container-max mx-auto px-margin-mobile md:px-gutter">
        <div className="max-w-4xl">
          <h1 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl text-primary leading-tight mix-difference">
            Triyog Shrestha <br /><br />
            <span className="italic font-light">Trust the process</span> <br />
            {/* The Process. */}
          </h1>
          <div className="mt-stack-md flex items-center gap-4 reveal-on-scroll">
            <span className="h-[1px] w-12 bg-primary"></span>
            <p className="font-label-md text-label-md uppercase tracking-[0.2em] text-on-surface-variant">
              Lubhu - Lalitpur
            </p>
          </div>
        </div>
      </div>

      {/* Animated Scroll Down Indicator */}
      <div className="absolute bottom-12 right-gutter hidden md:block">
        <a
          href="#education"
          className="flex flex-col items-center gap-2 text-primary opacity-60 hover:opacity-100 transition-opacity"
          aria-label="Scroll to Education"
        >
          <span className="font-label-sm text-label-sm uppercase tracking-widest vertical-text mb-2">
            Scroll
          </span>
          <ArrowDown className="w-5 h-5 animate-bounce" />
        </a>
      </div>
    </section>
  );
}
