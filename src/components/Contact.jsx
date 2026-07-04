import React from "react";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "./CustomIcons";
import contactImage from "../assets/contact.png";


export default function Contact() {

  return (
    <section
            id="contact"
            className="relative overflow-hidden py-stack-xl scroll-mt-20 reveal-on-scroll"
            style={{
              backgroundImage: `linear-gradient(rgba(19, 19, 19, 0.78), rgba(19, 19, 19, 0.78)), url(${contactImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}
          >      
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter mt-8">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center reveal-on-scroll">
          <h2 className="font-headline-xl text-headline-xl mb-6 leading-none">
            Get in Touch
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-[34rem] mb-10">
            I&apos;m currently open to new opportunities. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
            <a
              href="https://instagram.com/triyog.shrestha"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 border border-primary bg-primary px-6 py-4 font-label-md text-label-md uppercase tracking-widest text-surface transition-all duration-500 hover:bg-transparent hover:text-primary"
            >
              <InstagramIcon className="w-4 h-4" />
              Instagram
            </a>
            <a
              href="https://github.com/triyog-shrestha"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 border border-primary px-6 py-4 font-label-md text-label-md uppercase tracking-widest text-primary transition-all duration-500 hover:bg-primary hover:text-surface"
            >
              <GithubIcon className="w-4 h-4" />
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/triyog-shrestha"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 border border-primary px-6 py-4 font-label-md text-label-md uppercase tracking-widest text-primary transition-all duration-500 hover:bg-primary hover:text-surface"
            >
              <LinkedinIcon className="w-4 h-4" />
              LinkedIn
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
