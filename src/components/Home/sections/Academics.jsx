import React from 'react';
import { motion } from 'framer-motion';
import { FaBaby, FaBookOpen, FaChild, FaMicroscope, FaUserGraduate } from 'react-icons/fa';
import SectionHeading from '../../shared/SectionHeading';

const programs = [
  {
    icon: FaBaby,
    title: 'Preschool',
    age: 'Ages 3-5',
    description: 'Play, language, movement, and social confidence are developed in an environment that feels secure and joyful.',
    points: ['Routine with warmth', 'Early literacy and numeracy', 'Music, stories, activity-led learning'],
    tone: 'from-[#fff1d6] to-[#fff8ec]',
  },
  {
    icon: FaChild,
    title: 'Primary',
    age: 'Classes 1-5',
    description: 'Foundational academics become sharper through focused classroom teaching, creativity, and guided participation.',
    points: ['English, Hindi, Maths, EVS', 'Project and activity work', 'Confidence in reading and expression'],
    tone: 'from-[#ebf6ff] to-[#f6fbff]',
  },
  {
    icon: FaUserGraduate,
    title: 'Middle School',
    age: 'Classes 6-8',
    description: 'Students are prepared for the next level with stronger subject understanding, discipline, and independent thinking.',
    points: ['Science and social studies depth', 'Presentation and problem solving', 'Preparation for higher classes'],
    tone: 'from-[#eaf8f5] to-[#f6fcfb]',
  },
];

const subjects = [
  'English Language & Literature',
  'Mathematics',
  'Science',
  'Social Studies',
  'Hindi',
  'Computer Applications',
  'Art & Craft',
  'Music & Movement',
  'Physical Education',
];

const Academics = () => {
  return (
    <section className="section-shell section-padding bg-white/55">
      <div className="container-custom">
        <SectionHeading
          eyebrow="Academic direction"
          title="A learning journey that grows"
          highlight="with the child, not against them."
          description="The curriculum is arranged to feel age-appropriate at every stage. Younger children are nurtured into readiness, primary students build reliable fundamentals, and middle school learners are prepared for the next academic leap."
          align="center"
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {programs.map((program, index) => (
            <motion.article
              key={program.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.2 }}
              className={`soft-card bg-gradient-to-br ${program.tone} p-7`}
            >
              <div className="flex items-center justify-between gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-[1.3rem] bg-slate-900 text-white">
                  <program.icon />
                </div>
                <span className="label-chip">{program.age}</span>
              </div>
              <h3 className="mt-6 text-2xl text-slate-900" style={{ fontFamily: "'Oswald', sans-serif" }}>
                {program.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">{program.description}</p>
              <div className="mt-6 space-y-3">
                {program.points.map((point) => (
                  <div key={point} className="flex items-start gap-3 text-sm text-slate-700">
                    <div className="mt-2 h-1.5 w-1.5 rounded-full bg-teal-700" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.25 }}
            className="soft-card p-8"
          >
            <span className="eyebrow">How teaching works</span>
            <h3 className="mt-4 font-display text-4xl leading-none text-slate-900">
              Strong classroom teaching, then reinforcement through activity, practice, and care.
            </h3>
            <div className="mt-8 space-y-5">
              <div className="flex gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#fff1d6] text-[var(--gold-500)]">
                  <FaBookOpen />
                </div>
                <div>
                  <h4 className="text-lg text-slate-900" style={{ fontFamily: "'Oswald', sans-serif" }}>Clear fundamentals</h4>
                  <p className="mt-2 text-sm leading-7 text-slate-600">Students get reliable grounding in language, numeracy, and concept understanding before acceleration.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#ebf6ff] text-primary-700">
                  <FaMicroscope />
                </div>
                <div>
                  <h4 className="text-lg text-slate-900" style={{ fontFamily: "'Oswald', sans-serif" }}>Practical engagement</h4>
                  <p className="mt-2 text-sm leading-7 text-slate-600">Activities, projects, demonstrations, and discussion help children retain what they learn.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            viewport={{ once: true, amount: 0.25 }}
            className="soft-card p-8"
          >
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <span className="eyebrow">Core subjects</span>
                <h3 className="mt-4 font-display text-4xl leading-none text-slate-900">Wide enough to build a rounded student.</h3>
              </div>
              <span className="label-chip">Curriculum overview</span>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              {subjects.map((subject) => (
                <span key={subject} className="rounded-full border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700">
                  {subject}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Academics;
