import { motion } from 'framer-motion';

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
}

export function SectionHeading({ eyebrow, title, subtitle }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.55 }}
      className="mx-auto mb-12 max-w-2xl text-center"
    >
      <p className="mb-3 font-mono text-xs uppercase tracking-[0.25em] text-cyan-300/80">{eyebrow}</p>
      <h2 className="text-3xl font-semibold tracking-tight text-zinc-100 md:text-4xl">{title}</h2>
      {subtitle ? <p className="mt-4 text-sm text-zinc-400 md:text-base">{subtitle}</p> : null}
      <div className="mx-auto mt-6 h-px w-24 bg-gradient-to-r from-transparent via-cyan-400/80 to-transparent" />
    </motion.div>
  );
}
