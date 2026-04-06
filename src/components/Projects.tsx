import { motion } from 'framer-motion';
import { FolderGit2, ExternalLink, Music } from 'lucide-react';
import { SectionHeading } from './SectionHeading';

export function Projects() {
  return (
    <section id="projects" className="px-5 py-24 md:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Projects"
          title="Featured Build"
          subtitle="A project that combines software engineering logic with my deep connection to music."
        />

        <motion.article
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55 }}
          className="relative overflow-hidden rounded-2xl border border-cyan-400/20 bg-gradient-to-b from-zinc-900/90 to-zinc-900/50 p-7"
        >
          <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-cyan-400/10 blur-3xl" />

          <div className="relative flex flex-wrap items-start justify-between gap-4">
            <div>
              <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-300/40 px-3 py-1 text-xs font-medium uppercase tracking-widest text-cyan-200">
                <Music size={14} /> Featured
              </p>
              <h3 className="text-2xl font-semibold text-zinc-100">Personal Music Analyser and Recommendation System</h3>
              <p className="mt-4 max-w-3xl text-zinc-300">
                Built with Java and JavaFX, this desktop application analyzes a user&apos;s listening behavior and suggests songs based on recurring patterns. It focuses on turning listening history into practical recommendations through structured data analysis.
              </p>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <span className="rounded-full border border-orange-300/35 bg-orange-300/10 px-3 py-1 text-xs font-medium text-orange-200">Java</span>
            <span className="rounded-full border border-sky-300/35 bg-sky-300/10 px-3 py-1 text-xs font-medium text-sky-200">JavaFX</span>
          </div>

          <div className="mt-8 flex flex-wrap gap-6 text-sm">
            <a
              href="https://github.com/your-username/your-music-analyser-project"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-zinc-300 transition hover:text-cyan-200"
            >
              <FolderGit2 size={16} /> GitHub (placeholder)
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 text-zinc-500 transition hover:text-cyan-200"
            >
              <ExternalLink size={16} /> Live demo placeholder
            </a>
          </div>
        </motion.article>
      </div>
    </section>
  );
}
