import React from "react";
import { Code2, Layout, Brain, Server } from "lucide-react";
import skillsImage from "../assets/skills.png";


export default function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      icon: Code2,
      skills: ["Python", "JavaScript", "Java", "C++"]
    },
    {
      title: "Frontend",
      icon: Layout,
      skills: ["HTML/CSS", "React.js", "Tailwind CSS", "Reflex", "Streamlit"]
    },
    {
      title: "Backend",
      icon: Server,
      skills: ["Django", "Springboot", "Flask", "Node.js"]
    },
    {
      title: "CS Fundamentals",
      icon: Brain,
      skills: ["OOP", "Data Structures", "Logic & Algorithms", "API Integration"]
    }
  ];

  return (
   <section
         id="skills"
         className="relative overflow-hidden py-stack-xl scroll-mt-20 reveal-on-scroll"
         style={{
           backgroundImage: `linear-gradient(rgba(19, 19, 19, 0.78), rgba(19, 19, 19, 0.78)), url(${skillsImage})`,
           backgroundSize: "cover",
           backgroundPosition: "center"
         }}>
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter">
        <div className="mb-16 flex flex-col gap-4 md:max-w-3xl">
          <span className="font-label-sm text-label-sm uppercase tracking-[0.4em] text-outline block">
            02 / Capabilities
          </span>
          <h2 className="font-headline-lg text-headline-lg text-primary">
            Skills & Technologies
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl leading-relaxed">
            A curated stack focused on core development, modern libraries, and programming principles.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
          {skillCategories.map((cat, idx) => {
            const IconComp = cat.icon;
            const cardStyles = [
              { bg: "bg-surface-container-lowest", accent: "bg-primary", badge: "bg-surface-container-low" },
              { bg: "bg-surface-container-low", accent: "bg-outline", badge: "bg-surface-container" },
              { bg: "bg-surface-container", accent: "bg-secondary", badge: "bg-surface-container-low" },
              { bg: "bg-surface-container-high", accent: "bg-outline-variant", badge: "bg-surface-container-lowest" }
            ];
            const style = cardStyles[idx] || cardStyles[0];

            return (
              <div
                key={idx}
                className={`group relative flex flex-col gap-6 border border-surface-container-high ${style.bg} p-8 pt-7 transition-all duration-500 hover:-translate-y-1 hover:border-primary/60 hover:bg-surface-container-low reveal-on-scroll`}
                style={{ transitionDelay: `${idx * 80}ms` }}
              >
                <div className={`absolute inset-x-0 top-0 h-[2px] ${style.accent}`} />
                <div className="flex items-center gap-3 text-outline">
                  <div className={`flex h-10 w-10 items-center justify-center border border-surface-container-high ${style.badge}`}>
                    <IconComp className="w-4 h-4 text-primary opacity-80" />
                  </div>
                  <span className="font-label-sm text-label-sm uppercase tracking-[0.2em] opacity-70">
                    Category {idx + 1}
                  </span>
                </div>
                <div>
                  <h3 className="font-headline-md text-headline-md text-primary mb-6">
                    {cat.title}
                  </h3>
                  <ul className="flex flex-col gap-3">
                    {cat.skills.map((skill, sIdx) => (
                      <li key={sIdx} className="group/item flex items-start gap-3">
                        <span className="mt-[0.62rem] h-px w-5 bg-outline/70 transition-all duration-300 group-hover/item:bg-primary" />
                        <span className="font-body-md text-body-md text-on-surface-variant transition-colors duration-300 group-hover/item:text-primary">
                          {skill}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
