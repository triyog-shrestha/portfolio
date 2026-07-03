import React from "react";
import { Music, ArrowUpRight } from "lucide-react";
import { BasketballIcon, SpotifyIcon } from "./CustomIcons";

export default function Interests() {
  return (
    <section id="interests" className="py-stack-xl bg-background scroll-mt-20 border-t border-surface-container-highest reveal-on-scroll">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter">
        <div className="border-b border-surface-container-highest pb-stack-md flex flex-col md:flex-row gap-stack-xl">
          
          {/* Left Column: Title */}
          <div className="md:w-1/3 reveal-on-scroll">
            <span className="font-label-sm text-label-sm uppercase tracking-[0.4em] text-outline block mb-4">
              04 / Beyond Code
            </span>
            <h2 className="font-headline-lg text-headline-lg text-primary top-32">
              Interests
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant mt-6 max-w-xs leading-relaxed">
              When I'm not writing code or studying software systems, I channel my energy into physical flow and auditory spaces.
            </p>
          </div>

          {/* Right Column: Grid for Interests */}
          <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-gutter pt-8 md:pt-0">
            
            {/* Music Card */}
            <div className="border border-[#2a2a2a] bg-surface-container-lowest p-10 flex flex-col justify-between gap-12 hover:border-primary transition-colors duration-500 reveal-on-scroll">
              <div className="flex justify-between items-center text-outline">
                <span className="font-label-sm text-label-sm uppercase tracking-widest opacity-60">
                  Rhythm & Focus
                </span>
                <Music className="w-6 h-6 text-primary opacity-80" />
              </div>
              <div>
                <h3 className="font-headline-md text-headline-md text-primary mb-4 italic">
                  Music
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed opacity-80">
                  A constant companion during late-night debugging sessions. I enjoy exploring synth-wave, ambient lofi, and modern hip-hop, appreciating how sound structures focus and pattern logical thinking.
                </p>
                <a 
                  href="https://open.spotify.com" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-label-sm text-label-sm uppercase tracking-widest text-primary hover:text-outline transition-colors mt-6"
                >
                  <SpotifyIcon className="w-4 h-4" /> Here's a link to my Spotify profile <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Basketball Card */}
            <div className="border border-[#2a2a2a] bg-surface-container-lowest p-10 flex flex-col justify-between gap-12 hover:border-primary transition-colors duration-500 reveal-on-scroll" style={{ transitionDelay: '120ms' }}>
              <div className="flex justify-between items-center text-outline">
                <span className="font-label-sm text-label-sm uppercase tracking-widest opacity-60">
                  Agility & Flow
                </span>
                <BasketballIcon className="w-6 h-6 text-primary opacity-80" />
              </div>
              <div>
                <h3 className="font-headline-md text-headline-md text-primary mb-4 italic">
                  Basketball
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed opacity-80">
                  My primary outlet for physical endurance and active teamwork. Whether playing streetball or running court drills, basketball keeps me focused, teaches fast decision-making under pressure, and balances logic with movement.
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
