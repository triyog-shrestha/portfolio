import React from "react";
import { GraduationCap, Landmark, Award } from "lucide-react";

export default function Education() {
  const educationData = [
    {
      level: "Bachelors in Software Engineering",
      institution: "PCPS College, Kupondole",
      period: "Currently Pursuing",
      detail: "Deepening knowledge in software design, algorithms, databases, and full-stack systems. Building solid foundations in computer science.",
      icon: GraduationCap,
      score: "Active"
    },
    {
      level: "+2 (High School)",
      institution: "KMC (Kathmandu Model College), Balkumari",
      period: "2022 — 2024",
      detail: "Science Stream. Focused on Mathematics, Physics, and Computer Science. Graduated with top marks.",
      icon: Landmark,
      score: "GPA 3.75"
    },
    {
      level: "SEE (Secondary Education Exam)",
      institution: "Little Angels' School, Hattiban",
      period: "Completed 2022",
      detail: "Strong foundations in science and mathematics. Participated in early computing and logic clubs.",
      icon: Award,
      score: "GPA 3.75"
    }
  ];

  return (
    <section id="education" className="py-stack-xl bg-surface-container-low scroll-mt-20 reveal-on-scroll">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter">
        <div className="border-t border-surface-container-highest pt-stack-md flex flex-col md:flex-row gap-stack-xl">
          
          {/* Left Column: Sticky Title */}
          <div className="md:w-1/3">
            <span className="font-label-sm text-label-sm uppercase tracking-[0.4em] text-outline block mb-4">
              Academic Path
            </span>
            <h2 className="font-headline-lg text-headline-lg text-primary top-32">
              Education
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant mt-6 max-w-xs leading-relaxed">
              A timeline of formal education and foundational learnings that shape my approach to engineering and software design.
            </p>
          </div>

          {/* Right Column: Interactive Education Timeline */}
          <div className="md:w-2/3 flex flex-col divide-y divide-surface-container-highest">
            {educationData.map((edu, index) => {
              const IconComponent = edu.icon;
              return (
                <div
                  key={index}
                  className="group py-10 flex flex-col sm:flex-row justify-between items-start gap-6 hover:opacity-100 transition-all duration-300 reveal-on-scroll"
                  style={{ transitionDelay: `${index * 80}ms` }}
                >
                  <div className="flex gap-6 items-start max-w-xl">
                    <div className="mt-1 p-3 bg-surface-container border border-surface-container-high rounded text-outline group-hover:text-primary group-hover:border-primary transition-colors duration-500">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="font-label-sm text-label-sm uppercase tracking-widest text-outline mb-2 block">
                        {edu.period} • {edu.score}
                      </span>
                      <h4 className="font-headline-md text-headline-md text-primary group-hover:italic transition-all duration-300">
                        {edu.level}
                      </h4>
                      <p className="font-label-md text-label-md text-secondary mt-1">
                        {edu.institution}
                      </p>
                      <p className="font-body-md text-body-md text-on-surface-variant mt-4 leading-relaxed opacity-75">
                        {edu.detail}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
