import React from 'react';
import { motion } from 'framer-motion';
import { FaHeart, FaLeaf, FaShieldAlt, FaUsers } from 'react-icons/fa';
import SectionHeading from '../../shared/SectionHeading';

const values = [
  {
    icon: FaUsers,
    title: 'Personal attention',
    description: 'Children are known by name, pace, and personality, not treated as a number in a large system.',
  },
  {
    icon: FaLeaf,
    title: 'Balanced growth',
    description: 'Academic learning, creative confidence, and behaviour development move together every day.',
  },
  {
    icon: FaShieldAlt,
    title: 'Safe structure',
    description: 'Parents can expect a campus experience built on care, routines, and steady communication.',
  },
  {
    icon: FaHeart,
    title: 'Values with warmth',
    description: 'Discipline is taught with empathy so children grow respectful, curious, and self-assured.',
  },
];

const stats = [
  { value: '5+', label: 'Years growing with local families' },
  { value: '500+', label: 'Students guided with care' },
  { value: '15+', label: 'Teachers shaping outcomes' },
];

const About = () => {
  return (
    <section className="section-shell section-padding">
      <div className="container-custom">
        <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true, amount: 0.3 }}
              className="soft-card relative overflow-hidden p-3"
            >
              <img
                src={`${import.meta.env.BASE_URL}images/Activities/6.jpg`}
                alt="Students learning at H.P. Bright Academy"
                className="h-[430px] w-full rounded-[1.4rem] object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
              className="glass-panel absolute -bottom-8 right-4 max-w-xs rounded-[1.6rem] p-5 lg:-right-8"
            >
              <span className="label-chip">Principal's note</span>
              <p className="mt-4 text-base leading-7 text-slate-700">
                "We want children to feel seen, guided, and stretched toward their best work without losing the joy of childhood."
              </p>
              <div className="mt-4 border-t border-slate-200 pt-4 text-sm text-slate-500">
                Mrs. Pooja Verma, Principal
              </div>
            </motion.div>
          </div>

          <div>
            <SectionHeading
              eyebrow="The school philosophy"
              title="An independent school experience built around"
              highlight="clarity, care, and confidence."
              description="H.P. Bright Academy is positioned for families who want more than a basic school listing. The academic environment is structured, the relationships are personal, and the school’s tone is grounded in trust."
            />

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: index * 0.1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  className="soft-card p-5"
                >
                  <div className="font-display text-5xl leading-none text-slate-900">{stat.value}</div>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-2">
              {values.map((value, index) => (
                <motion.article
                  key={value.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: index * 0.08 }}
                  viewport={{ once: true, amount: 0.3 }}
                  className="soft-card p-6"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900 text-white">
                    <value.icon />
                  </div>
                  <h3 className="mt-5 text-xl text-slate-900" style={{ fontFamily: "'Oswald', sans-serif" }}>
                    {value.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{value.description}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
