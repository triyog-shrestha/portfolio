import { motion } from 'framer-motion';
import { ExternalLink, GitBranch } from 'lucide-react';
import { projects } from '../data/portfolioData';
import { SectionHeading } from './SectionHeading';

export function Projects() {
  return (
    <section id="projects" className="px-5 py-24 md:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Projects"
          title="Work I've Done"
          subtitle="A selection of projects I've built and contributed to, showcasing my skills and interests."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.06, duration: 0.45 }}
              whileHover={{ y: -4 }}
              className="group flex flex-col rounded-2xl border border-zinc-800 bg-zinc-900/55 p-6 transition-all duration-300 hover:border-cyan-400/50"
            >
              <h3 className="text-lg font-semibold text-zinc-100">{project.title}</h3>
              <p className="mt-3 flex-grow text-sm text-zinc-400">{project.description}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="inline-block rounded-full bg-zinc-800/60 px-3 py-1 text-xs text-cyan-300/85"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex gap-3 border-t border-zinc-800 pt-4">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-medium text-cyan-400 transition-colors hover:text-cyan-300"
                  >
                    <ExternalLink className="h-4 w-4" />
                    <span>Visit</span>
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-medium text-cyan-400 transition-colors hover:text-cyan-300"
                  >
                    <GitBranch className="h-4 w-4" />
                    <span>GitHub</span>
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
