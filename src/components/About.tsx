import { motion } from 'framer-motion';
import { MapPin, GraduationCap, Music2, Trophy, Flag } from 'lucide-react';
import { education, interests, profile } from '../data/portfolioData';
import { SectionHeading } from './SectionHeading';

export function About() {
  return (
    <section id="about" className="px-5 py-24 md:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="About"
          title="From Hattiban to Lubhu"
          subtitle="A personal and academic journey shaped by curiosity, consistency, and a love for building."
        />

        <div className="grid gap-8 lg:grid-cols-2">
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-zinc-800 bg-zinc-900/55 p-7"
          >
            <h3 className="mb-5 flex items-center gap-2 text-lg font-medium text-cyan-200">
              <MapPin size={18} /> Personal Background
            </h3>
            <div className="space-y-4 text-zinc-300">
              <p>
                I am {profile.name}, from {profile.hometown}. My learning path took shape early and kept growing through each classroom, challenge, and project.
              </p>
              <p>
                I completed my SEE at Little Angels School, Hattiban with a GPA of 3.75, then completed +2 at Kathmandu Model College, Lalitpur with the same GPA of 3.75.
              </p>
              <p>{profile.studyTrack}</p>
            </div>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ delay: 0.08, duration: 0.5 }}
            className="rounded-2xl border border-zinc-800 bg-zinc-900/45 p-7"
          >
            <h3 className="mb-5 flex items-center gap-2 text-lg font-medium text-cyan-200">
              <GraduationCap size={18} /> Education Timeline
            </h3>
            <div className="space-y-4">
              {education.map((item) => (
                <div key={`${item.level}-${item.school}`} className="border-l border-cyan-400/40 pl-4">
                  <p className="font-medium text-zinc-100">{item.level}</p>
                  <p className="text-sm text-zinc-400">{item.school}</p>
                  {item.gpa ? <p className="text-xs text-cyan-200/85">GPA: {item.gpa}</p> : null}
                  {item.current ? <p className="text-xs text-cyan-200/85">Currently pursuing</p> : null}
                  {item.detail ? <p className="mt-1 text-xs text-zinc-500">{item.detail}</p> : null}
                </div>
              ))}
            </div>
          </motion.article>
        </div>

        <motion.article
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ delay: 0.12, duration: 0.5 }}
          className="mt-8 rounded-2xl border border-zinc-800 bg-zinc-900/40 p-7"
        >
          <h3 className="mb-5 text-lg font-medium text-cyan-200">Interests Beyond Code</h3>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-xl border border-zinc-800 bg-zinc-950/60 p-4">
              <p className="mb-2 flex items-center gap-2 text-zinc-100"><Music2 size={17} /> Music</p>
              <p className="text-sm text-zinc-400">{interests[0]}</p>
            </div>
            <div className="rounded-xl border border-zinc-800 bg-zinc-950/60 p-4">
              <p className="mb-2 flex items-center gap-2 text-zinc-100"><Trophy size={17} /> Basketball & NBA</p>
              <p className="text-sm text-zinc-400">{interests[1]}</p>
            </div>
            <div className="rounded-xl border border-zinc-800 bg-zinc-950/60 p-4">
              <p className="mb-2 flex items-center gap-2 text-zinc-100"><Flag size={17} /> NFL</p>
              <p className="text-sm text-zinc-400">{interests[2]}</p>
            </div>
          </div>
        </motion.article>
      </div>
    </section>
  );
}
