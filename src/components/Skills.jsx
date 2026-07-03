import React from "react";
import { Code2, Layout, Terminal, Brain } from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      icon: Code2,
      skills: ["Python", "JavaScript (ES6+)", "HTML5 / CSS3", "C / C++ (Basics)"]
    },
    {
      title: "Frontend Tech",
      icon: Layout,
      skills: ["React.js", "Tailwind CSS", "Vite", "Responsive Design"]
    },
    {
      title: "Tools & Workflows",
      icon: Terminal,
      skills: ["Git & GitHub", "Linux Shell", "VS Code", "npm / Node Basics"]
    },
    {
      title: "CS Fundamentals",
      icon: Brain,
      skills: ["OOP", "Basic Data Structures", "Logic & Algorithms", "API Integration"]
    }
  ];

  return (
    <section id="skills" className="py-stack-xl bg-background scroll-mt-20 reveal-on-scroll">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-4">
          <div>
            <span className="font-label-sm text-label-sm uppercase tracking-[0.4em] text-outline block mb-4">
              02 / Capabilities
            </span>
            <h2 className="font-headline-lg text-headline-lg text-primary">
              Skills & Technologies
            </h2>
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant opacity-70 max-w-xs md:text-right leading-relaxed">
            A curated stack focused on core development, modern libraries, and programming principles.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
          {skillCategories.map((cat, idx) => {
            const IconComp = cat.icon;
            return (
              <div 
                key={idx} 
                className="border border-[#2a2a2a] bg-surface-container-lowest p-8 flex flex-col gap-6 hover:border-primary transition-colors duration-500 reveal-on-scroll"
                style={{ transitionDelay: `${idx * 80}ms` }}
              >
                <div className="flex justify-between items-center text-outline">
                  <span className="font-label-sm text-label-sm uppercase tracking-widest opacity-60">
                    Category {idx + 1}
                  </span>
                  <IconComp className="w-5 h-5 text-primary opacity-80" />
                </div>
                <div>
                  <h3 className="font-headline-md text-headline-md text-primary mb-6">
                    {cat.title}
                  </h3>
                  <ul className="flex flex-col gap-3">
                    {cat.skills.map((skill, sIdx) => (
                      <li key={sIdx} className="flex items-center gap-3">
                        <span className="w-1.5 h-1.5 bg-primary opacity-60"></span>
                        <span className="font-body-md text-body-md text-on-surface-variant">
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
