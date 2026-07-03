import React from "react";
import { GithubIcon } from "./CustomIcons";

export default function Projects() {

  const projects = [
    {
      id: "01",
      title: "DevFlow — Minimalist Kanban",
      category: "React / State",
      year: "2024",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBCg1eJqHsP-OJRdImq5eED-yFE14DcM6Gp8-DSfa7rxwEh9Yo1U8hNAA2UNA1b-970b-_V-tT3QYQT089Z-s2QbT5ke4BGaVWHAbQV2poYFm5Do0RzBZI2uizrU5-5X62emgsQY-o-M7tydHS6g7eeSoiFWht3XNq_TjVAmxIbU3NK6pwEl_toBHjeDWBM56J5acn4uvONokhlOCp-Zfi9JLyT_EifLYzVmSH058svRhMl8pa0TgEKr2Ro_oF9UkxQlWfNd91eeZ0",
      description: "A local-storage backed workflow board featuring custom status columns, card dragging, and category tags. Built to master React state and lifecycle operations.",
      github: "#",
      gridClass: "md:col-span-8"
    },
    {
      id: "02",
      title: "Aether Automation CLI",
      category: "Python / CLI",
      year: "2024",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBKQJnJKPtlDDgx2Zq1ESMNP4-Upx6MKAFKYd8-UX5KhHK2T-75S-7iW7Bu3z3nMVGmmYl3DY5Kg_U1eukX9Ihninm5m6QANEBMGVAd0ceMkMjf2Sdn9UyRmv3ENfRJG89T452MhGChzt4V_l2vfZyumY85JtmZDg3BV0IGq6bm-Uvdx56hWeuCh1rm6937T7wKJe0kO__FXqd8Wa78ndzE1Mw5Y4p_R3fYFruUNKiihz-gbfvFPvL-80lTSRPbmIZnMoWDzMIr4iE",
      description: "A developer automation tool to scaffold projects, format workspace layouts, and automate repetitive git commands. Demonstrates shell scripting and OS automation in Python.",
      github: "#",
      gridClass: "md:col-span-4"
    },
    {
      id: "03",
      title: "OmniWeather Dashboard",
      category: "Web / API Integration",
      year: "2023",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC5j_v9TmET5Ua02bK3hs9Kfeff6dLKLVGK7RhnKJaALCGjszgotYRXbPsYiHeqwSH-dRklwDw8AJyhjosKvvTyyxI0LHzv39AjdYw4csxuCToPJL0aCgBo2IsWhWMBLeG_hIQNMjX8Ru2cJ0NzbOeoSt2G3CC6cWu8UYzeZFD8Kj1ep1ssJA0vBT8BrzF2ERYRI9vDi9wUV-pQjcgH2Xsg3E3liNlnbugSq7xPa_fh0pG_yFEb4u7d68Ff9Ofjwmhs7YPguhlX6EE",
      description: "An elegant, dark-themed weather dashboard connecting to the OpenWeather API. Features autocomplete search, dynamic background filters, and local search storage.",
      github: "#",
      gridClass: "md:col-span-4"
    },
    {
      id: "04",
      title: "Personal Portfolio (This)",
      category: "React / Tailwind",
      year: "2024",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBcJBSQVNV3k4tRjoG-6fKlLrJBXkhO5zcmsF9705O9qF9Vt3p_Kq9otOV4InNnQlzzMZukkhVQQUGP--Klw3QjjKuJPRvyXd9jdJTR5ozMvf_uRzNuX-zOi8wk_JHak5BF8A_W_B34dm-JgbiBZAB-y9CN9oVbiXY8lbi83oqeuS7ihutjS0dFiPXTfc16fl2i0-OzFMDp0WeJo44WCdC1-beNAnDnYJ1hKxJaITSOjFwxV7-i3eFSqt0MMFnGYIXzcgNb4grvZkY",
      description: "A fast, production-ready static portfolio website focusing on minimal layout grids, smooth scrolling hooks, semantic accessibility, and clean React typography configurations.",
      github: "#",
      gridClass: "md:col-span-8"
    }
  ];

  return (
    <section id="projects" className="py-stack-xl bg-surface-container-low scroll-mt-20 border-t border-surface-container-highest reveal-on-scroll">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6 reveal-on-scroll">
          <div>
            <span className="font-label-sm text-label-sm uppercase tracking-[0.4em] text-outline block mb-4">
              03 / Works
            </span>
            <h2 className="font-headline-lg text-headline-lg text-primary">
              Selected Projects
            </h2>
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant opacity-70 max-w-xs md:text-right leading-relaxed">
            Applying academic knowledge to tangible software solutions and interactive builds.
          </p>
        </div>

        {/* Bento-style Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className={`${project.gridClass} group cursor-pointer flex flex-col justify-between reveal-on-scroll`}
              style={{ transitionDelay: `${projects.findIndex((item) => item.id === project.id) * 70}ms` }}
            >
              <div>
                <div className="relative overflow-hidden aspect-[16/10] bg-surface-container-high border border-[#2a2a2a]">
                  <img 
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-80 grayscale group-hover:grayscale-0"
                    src={project.image}
                    alt={project.title}
                  />
                  <div className="absolute inset-0 bg-surface/20 group-hover:bg-transparent transition-colors duration-500"></div>
                </div>
                <div className="mt-stack-sm flex justify-between items-start">
                  <div>
                    <h3 className="font-headline-md text-headline-md tracking-tight group-hover:italic transition-all duration-300">
                      {project.title}
                    </h3>
                    <p className="font-label-sm text-label-sm uppercase opacity-40 mt-1">
                      {project.category}
                    </p>
                  </div>
                  <span className="font-label-sm text-label-sm opacity-40">{project.year}</span>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant mt-4 leading-relaxed opacity-75">
                  {project.description}
                </p>
              </div>
              
              <a
                href={project.github}
                className="mt-6 inline-flex items-center gap-2 font-label-sm text-label-sm uppercase tracking-widest text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:text-outline"
              >
                <GithubIcon className="w-4 h-4" /> Code
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
