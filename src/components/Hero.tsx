import { motion } from 'framer-motion';
import { ArrowDownRight } from 'lucide-react';
import { profile } from '../data/portfolioData';

export function Hero() {
  return (
    <section id="hero" className="relative flex min-h-screen items-center px-5 pt-24 md:px-8">
      <div className="mx-auto grid w-full max-w-6xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
        >
          <p className="mb-5 font-mono text-xs uppercase tracking-[0.25em] text-cyan-300/85">Software Portfolio</p>
          <h1 className="text-4xl font-semibold leading-tight tracking-tight text-zinc-100 md:text-6xl">
            {profile.name}
          </h1>
          <p className="mt-4 text-lg text-cyan-200 md:text-xl">{profile.title}</p>
          <p className="mt-6 max-w-xl text-zinc-400">{profile.tagline}</p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-lg border border-cyan-300/40 bg-cyan-400/10 px-5 py-3 text-sm font-medium text-cyan-200 transition hover:-translate-y-0.5 hover:bg-cyan-400/20"
            >
              Explore Projects
            </a>
            <a
              href="#contact"
              className="rounded-lg border border-zinc-700 px-5 py-3 text-sm font-medium text-zinc-300 transition hover:-translate-y-0.5 hover:border-cyan-400/45 hover:text-cyan-200"
            >
              Contact Me
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="relative"
        >
          <div className="rounded-2xl border border-cyan-400/20 bg-zinc-900/65 p-6 shadow-[0_0_50px_-30px_rgba(34,211,238,0.7)]">
            <p className="font-mono text-xs text-zinc-500">dev_journal.txt</p>
            <div className="mt-4 space-y-3 text-sm text-zinc-300">
              <p className="text-zinc-200">Base: {profile.hometown}</p>
              <p>Current focus: learning software engineering fundamentals deeply.</p>
              <p>Approach: build small, improve daily, ship meaningful work.</p>
              <p className="text-cyan-200">North star: become a strong, dependable engineer.</p>
            </div>
            <a href="#about" className="mt-8 inline-flex items-center gap-2 text-cyan-300 transition hover:text-cyan-100">
              Read my story <ArrowDownRight size={16} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
