import { motion } from 'framer-motion';
import { FolderGit2, BriefcaseBusiness, Mail } from 'lucide-react';
import { contactLinks, profile } from '../data/portfolioData';
import { SectionHeading } from './SectionHeading';

const iconMap = {
  GitHub: FolderGit2,
  LinkedIn: BriefcaseBusiness,
  Email: Mail,
};

export function Contact() {
  return (
    <section id="contact" className="px-5 py-24 md:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Contact"
          title="Let&apos;s Connect"
          subtitle="Open to collaboration, learning opportunities, and meaningful software conversations."
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mx-auto flex max-w-xl flex-col items-center gap-4"
        >
          {contactLinks.map((item) => {
            const Icon = iconMap[item.name as keyof typeof iconMap];
            return (
              <a
                key={item.name}
                href={item.href}
                target={item.name === 'Email' ? undefined : '_blank'}
                rel={item.name === 'Email' ? undefined : 'noreferrer'}
                className="flex w-full items-center justify-between rounded-xl border border-zinc-800 bg-zinc-900/60 px-5 py-4 text-zinc-300 transition hover:border-cyan-400/45 hover:text-cyan-200"
              >
                <span className="flex items-center gap-3">
                  <Icon size={18} />
                  {item.name}
                </span>
                <span className="font-mono text-xs text-zinc-500">placeholder</span>
              </a>
            );
          })}
        </motion.div>

        <p className="mt-12 text-center text-sm text-zinc-500">
          Designed and developed by {profile.name} with React, Tailwind CSS, and Framer Motion.
        </p>
      </div>
    </section>
  );
}
