import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBaby, FaBookOpen, FaCalendarAlt, FaChevronDown, FaChevronUp, FaChild, FaFlask, FaLaptopCode, FaPalette, FaUserGraduate, FaUsers } from 'react-icons/fa';
import PageHero from '../shared/PageHero';
import SectionHeading from '../shared/SectionHeading';

const academicLevels = [
  {
    icon: FaBaby,
    title: 'Preschool Program',
    age: 'Ages 3-5',
    description: 'Young learners build school readiness through routine, play, storytelling, movement, and social confidence.',
    curriculum: ['Language and communication', 'Basic numeracy concepts', 'Creative expression', 'Social and emotional development'],
    methodology: ['Play-based learning', 'Guided exploration', 'Sensory activities', 'Individual attention'],
    outcomes: ['Comfort with school routines', 'Early literacy habits', 'Confidence in expression', 'Improved motor and social skills'],
  },
  {
    icon: FaChild,
    title: 'Primary Section',
    age: 'Classes 1-5',
    description: 'Students develop dependable fundamentals in language, mathematics, awareness, and classroom participation.',
    curriculum: ['English and Hindi', 'Mathematics', 'Environmental studies', 'Art, music, and physical education'],
    methodology: ['Activity-based teaching', 'Repetition with practice', 'Interactive classroom sessions', 'Project work'],
    outcomes: ['Stronger reading and writing', 'Numeracy fluency', 'Creative participation', 'Confidence in class engagement'],
  },
  {
    icon: FaUserGraduate,
    title: 'Middle School',
    age: 'Classes 6-8',
    description: 'Older students move into deeper subject learning, stronger analysis, and better preparation for the next academic stage.',
    curriculum: ['English, Hindi, Maths', 'Science', 'Social studies', 'Computer applications and co-curricular learning'],
    methodology: ['Concept clarity', 'Discussion and presentation', 'Practical assignments', 'Assessment-based reinforcement'],
    outcomes: ['Subject depth', 'Improved problem solving', 'Higher accountability', 'Readiness for secondary education'],
  },
];

const teachingMethods = [
  {
    title: 'Interactive classroom teaching',
    description: 'Lessons are designed to keep students involved rather than passively listening through the day.',
    icon: FaUsers,
  },
  {
    title: 'Technology and visual support',
    description: 'Digital tools and smart-class methods are used to make learning easier to absorb and recall.',
    icon: FaLaptopCode,
  },
  {
    title: 'Hands-on academic reinforcement',
    description: 'Projects, demonstrations, and activity-based work help students connect theory to application.',
    icon: FaFlask,
  },
  {
    title: 'Creative and expressive development',
    description: 'Art, activity, performance, and co-curricular work help build confidence beyond exams.',
    icon: FaPalette,
  },
];

const timeline = [
  { title: 'First Term', detail: 'April to September' },
  { title: 'Second Term', detail: 'October to March' },
  { title: 'Annual Examinations', detail: 'February to March' },
];

const Academics = () => {
  const [expandedLevel, setExpandedLevel] = useState(0);

  const toggleLevel = (levelIndex) => {
    setExpandedLevel(expandedLevel === levelIndex ? null : levelIndex);
  };

  return (
    <div className="min-h-screen">
      <PageHero
        eyebrow="Academic design"
        title="Clear fundamentals first, then"
        highlight="confidence, depth, and readiness."
        description="The school’s academic structure is designed to feel age-appropriate at every level. Students are not rushed too early, but they are steadily prepared for stronger work as they progress."
        image={`${import.meta.env.BASE_URL}images/Activities/5.jpg`}
        imageAlt="Academic learning at H.P. Bright Academy"
        stats={[
          { value: '3', label: 'learning stages' },
          { value: '9+', label: 'core subject areas' },
          { value: '1', label: 'continuous progress system' },
        ]}
      />

      <section className="section-shell section-padding">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Programs"
            title="Each stage is designed for"
            highlight="how children actually grow."
            description="The curriculum becomes more demanding over time, but it remains structured around pace, understanding, and long-term confidence."
            align="center"
          />

          <div className="mt-12 space-y-5">
            {academicLevels.map((level, index) => (
              <motion.article
                key={level.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                viewport={{ once: true, amount: 0.2 }}
                className="soft-card overflow-hidden"
              >
                <button
                  onClick={() => toggleLevel(index)}
                  className="flex w-full items-center justify-between gap-5 px-6 py-6 text-left lg:px-8"
                >
                  <div className="flex items-start gap-5">
                    <div className="flex h-14 w-14 items-center justify-center rounded-[1.3rem] bg-slate-900 text-white">
                      <level.icon />
                    </div>
                    <div>
                      <div className="label-chip">{level.age}</div>
                      <h3 className="mt-4 text-2xl text-slate-900" style={{ fontFamily: "'Oswald', sans-serif" }}>
                        {level.title}
                      </h3>
                      <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600">{level.description}</p>
                    </div>
                  </div>
                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-700">
                    {expandedLevel === index ? <FaChevronUp /> : <FaChevronDown />}
                  </div>
                </button>

                {expandedLevel === index ? (
                  <div className="border-t border-slate-200 bg-slate-50/70 px-6 py-6 lg:px-8">
                    <div className="grid gap-8 lg:grid-cols-3">
                      <div>
                        <h4 className="text-lg text-slate-900" style={{ fontFamily: "'Oswald', sans-serif" }}>Curriculum</h4>
                        <div className="mt-4 space-y-3">
                          {level.curriculum.map((item) => (
                            <div key={item} className="flex items-start gap-3 text-sm text-slate-700">
                              <div className="mt-2 h-1.5 w-1.5 rounded-full bg-primary-700" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-lg text-slate-900" style={{ fontFamily: "'Oswald', sans-serif" }}>Methodology</h4>
                        <div className="mt-4 space-y-3">
                          {level.methodology.map((item) => (
                            <div key={item} className="flex items-start gap-3 text-sm text-slate-700">
                              <div className="mt-2 h-1.5 w-1.5 rounded-full bg-teal-700" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-lg text-slate-900" style={{ fontFamily: "'Oswald', sans-serif" }}>Outcomes</h4>
                        <div className="mt-4 space-y-3">
                          {level.outcomes.map((item) => (
                            <div key={item} className="flex items-start gap-3 text-sm text-slate-700">
                              <div className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--gold-500)]" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ) : null}
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell section-padding bg-white/60">
        <div className="container-custom grid gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="How learning works"
              title="Teaching is strongest when"
              highlight="clarity and engagement meet."
              description="The school uses a mix of focused classroom instruction, practical reinforcement, and co-curricular participation to make learning stick."
            />
            <div className="mt-8 space-y-4">
              {teachingMethods.map((method, index) => (
                <motion.div
                  key={method.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  viewport={{ once: true, amount: 0.25 }}
                  className="soft-card flex items-start gap-4 p-5"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900 text-white">
                    <method.icon />
                  </div>
                  <div>
                    <h3 className="text-xl text-slate-900" style={{ fontFamily: "'Oswald', sans-serif" }}>{method.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-slate-600">{method.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="soft-card p-8">
            <span className="eyebrow">Academic rhythm</span>
            <h3 className="mt-4 font-display text-4xl leading-none text-slate-900">
              Progress is tracked continuously, not left to a single high-pressure moment.
            </h3>
            <p className="mt-5 text-body">
              Teachers use regular classroom work, assignments, observation, and parent communication to keep learning visible. The goal is better understanding and better habits, not just better marks.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {timeline.map((item) => (
                <div key={item.title} className="rounded-[1.4rem] border border-slate-200 bg-slate-50 p-5">
                  <FaCalendarAlt className="text-teal-700" />
                  <h4 className="mt-4 text-lg text-slate-900" style={{ fontFamily: "'Oswald', sans-serif" }}>{item.title}</h4>
                  <p className="mt-2 text-sm text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Academics;
