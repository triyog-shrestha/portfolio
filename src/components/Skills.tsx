import { motion } from 'framer-motion';
import { skills } from '../data/portfolioData';
import { SectionHeading } from './SectionHeading';

export function Skills() {
  return (
    <section id="skills" className="px-5 py-24 md:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Skills"
          title="Stack I Build With"
          subtitle="Full-stack leaning with comfort across frontend and backend development."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, index) => (
            <motion.article
              key={skill.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.06, duration: 0.45 }}
              whileHover={{ y: -4 }}
              className="group rounded-2xl border border-zinc-800 bg-zinc-900/55 p-6"
            >
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-cyan-300/85">{skill.name}</p>
              <p className="mt-3 text-sm text-zinc-400">{skill.summary}</p>
              <div className="mt-5 h-px w-20 bg-gradient-to-r from-cyan-400/70 to-transparent transition-all duration-300 group-hover:w-28" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
