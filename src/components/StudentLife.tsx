import { motion } from 'framer-motion';
import { MoonStar, BookOpen, Target, Laptop2 } from 'lucide-react';
import { SectionHeading } from './SectionHeading';

const points = [
  {
    icon: MoonStar,
    text: 'Late-night builds often become my best learning sessions.',
  },
  {
    icon: BookOpen,
    text: 'I balance class theory with practical project work whenever possible.',
  },
  {
    icon: Laptop2,
    text: 'The grind is real, but every bug solved sharpens my engineering mindset.',
  },
  {
    icon: Target,
    text: 'My goal is clear: become a strong software engineer who ships reliable products.',
  },
];

export function StudentLife() {
  return (
    <section id="student-life" className="px-5 py-24 md:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Student Life"
          title="First-Year SWE Reality"
          subtitle="Learning foundations, building late, and growing through every challenge."
        />

        <motion.article
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55 }}
          className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-7"
        >
          <p className="text-lg leading-relaxed text-zinc-200">
            As a first-year software engineering student, each week feels like a cycle of learning, building, and reflecting. Some nights stretch longer than planned when projects are due or when I am chasing down one stubborn bug. Still, that process is exactly what keeps me motivated.
          </p>
          <p className="mt-5 text-zinc-400">
            I am learning to balance academics with personal growth, keep discipline through the hard parts, and stay ambitious about where I want to go. The path is demanding, but every assignment, every commit, and every failed attempt is shaping me into a better engineer.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {points.map((point, index) => {
              const Icon = point.icon;
              return (
                <motion.div
                  key={point.text}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08, duration: 0.4 }}
                  className="flex items-start gap-3 rounded-xl border border-zinc-800 bg-zinc-950/70 p-4"
                >
                  <Icon size={18} className="mt-0.5 text-cyan-300" />
                  <p className="text-sm text-zinc-400">{point.text}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.article>
      </div>
    </section>
  );
}
