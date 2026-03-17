import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FaArrowRight, FaEye, FaHeart, FaLeaf, FaShieldAlt, FaStar } from 'react-icons/fa';
import PageHero from '../shared/PageHero';
import SectionHeading from '../shared/SectionHeading';

const milestones = [
  { year: '2019', event: 'The school begins its journey with a vision for a calmer, values-first education.' },
  { year: '2020', event: 'Foundational early-years programs deepen with stronger parent-school communication.' },
  { year: '2021', event: 'Academic offerings expand steadily through upper classes and wider student support.' },
  { year: '2022', event: 'Teaching spaces and classroom methods are strengthened with more modern tools.' },
  { year: '2023', event: 'The school earns stronger recognition locally for its discipline and learning culture.' },
  { year: '2024', event: 'Campus presentation, activity-led learning, and school identity continue to mature.' },
  { year: '2025', event: 'H.P. Bright Academy completes five years of trust with growing community confidence.' },
];

const leadership = [
  {
    name: 'Mrs. Pooja Verma',
    role: 'Principal',
    experience: '12+ years in education',
    image: `${import.meta.env.BASE_URL}images/AboutUs/principal.png`,
  },
  {
    name: 'Mr. Ravi Prakash Singh',
    role: 'Co-Founder & Head of Academics',
    experience: '15+ years in academics',
    image: `${import.meta.env.BASE_URL}images/AboutUs/coordinator.png`,
  },
  {
    name: 'Mr. Shambhu Narayan',
    role: 'Chairman',
    experience: '35+ years of leadership',
    image: `${import.meta.env.BASE_URL}images/AboutUs/chairman.jpg`,
  },
];

const values = [
  {
    icon: FaEye,
    title: 'Vision with discipline',
    description: 'Students are encouraged to think ahead while staying rooted in strong habits and respectful conduct.',
  },
  {
    icon: FaHeart,
    title: 'Care with accountability',
    description: 'Warmth matters, but so does structure. The school aims to offer both at the same time.',
  },
  {
    icon: FaLeaf,
    title: 'Growth that feels balanced',
    description: 'Academic learning, creativity, and behaviour are developed together instead of in isolation.',
  },
  {
    icon: FaShieldAlt,
    title: 'Trust families can feel',
    description: 'Parents should feel that the campus is safe, serious, and genuinely invested in their child.',
  },
];

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      <PageHero
        eyebrow="About the institution"
        title="A school built to feel"
        highlight="personal, steady, and ambitious."
        description="H.P. Bright Academy serves Preschool to Class 8 in Varanasi with a philosophy centered on individual attention, disciplined learning, and a campus atmosphere families can trust."
        image={`${import.meta.env.BASE_URL}images/Campus/1.jpg`}
        imageAlt="H.P. Bright Academy campus"
        stats={[
          { value: '2019', label: 'founded' },
          { value: '500+', label: 'students served' },
          { value: '15+', label: 'faculty members' },
        ]}
        actions={
          <>
            <button onClick={() => navigate('/admissions')} className="btn-primary">
              Explore Admissions
              <FaArrowRight className="text-xs" />
            </button>
            <button onClick={() => navigate('/contact')} className="btn-outline border-white/30 bg-white/12 text-white hover:bg-white hover:text-slate-900">
              Visit the Campus
            </button>
          </>
        }
      />

      <section className="section-shell section-padding">
        <div className="container-custom grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div>
            <SectionHeading
              eyebrow="School story"
              title="The school grew by staying close to"
              highlight="what families actually need."
              description="That means clear teaching, safer routines, and an environment where children are guided with attention instead of getting lost inside a crowd."
            />
            <div className="mt-8 space-y-5 text-body">
              <p>
                H.P. Bright Academy was established to give local families a more thoughtful school option: one that respects academic foundations, values-based development, and the emotional comfort children need in their early years.
              </p>
              <p>
                Over time, the institution has grown in both scale and maturity. What matters most is that the school experience still feels personal. Teachers remain visible, communication stays direct, and students are encouraged to build confidence with consistency.
              </p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <img
              src={`${import.meta.env.BASE_URL}images/Activities/4.jpg`}
              alt="Students in class"
              className="soft-card h-56 w-full object-cover p-2"
            />
            <img
              src={`${import.meta.env.BASE_URL}images/Events/1.jpg`}
              alt="School event"
              className="soft-card h-56 w-full object-cover p-2 sm:mt-10"
            />
            <img
              src={`${import.meta.env.BASE_URL}images/Campus/2.jpg`}
              alt="School campus view"
              className="soft-card h-56 w-full object-cover p-2"
            />
            <img
              src={`${import.meta.env.BASE_URL}images/Activities/6.jpg`}
              alt="Students participating in activity"
              className="soft-card h-56 w-full object-cover p-2 sm:-mt-10"
            />
          </div>
        </div>
      </section>

      <section className="section-shell section-padding bg-white/60">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Core values"
            title="The culture of the school is shaped by"
            highlight="care, clarity, and character."
            align="center"
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {values.map((value, index) => (
              <motion.article
                key={value.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                viewport={{ once: true, amount: 0.25 }}
                className="soft-card p-6"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900 text-white">
                  <value.icon />
                </div>
                <h3 className="mt-5 text-2xl text-slate-900" style={{ fontFamily: "'Oswald', sans-serif" }}>
                  {value.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{value.description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell section-padding">
        <div className="container-custom grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <SectionHeading
              eyebrow="Journey"
              title="Five years of growth that"
              highlight="feel grounded, not inflated."
              description="The timeline matters because it reflects steady trust and school-building work, not exaggerated claims."
            />
          </div>
          <div className="space-y-4">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                viewport={{ once: true, amount: 0.3 }}
                className="soft-card flex items-start gap-5 p-5"
              >
                <div className="font-display text-4xl leading-none text-slate-900">{milestone.year}</div>
                <p className="pt-2 text-sm leading-7 text-slate-600">{milestone.event}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell section-padding bg-white/55">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Leadership"
            title="A school identity needs people who"
            highlight="can hold standards with humanity."
            description="The leadership team anchors the school’s tone, educational direction, and trust with parents."
            align="center"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {leadership.map((member, index) => (
              <motion.article
                key={member.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                viewport={{ once: true, amount: 0.25 }}
                className="soft-card overflow-hidden"
              >
                <img src={member.image} alt={member.name} className="h-72 w-full object-cover" />
                <div className="p-6 text-center">
                  <h3 className="text-2xl text-slate-900" style={{ fontFamily: "'Oswald', sans-serif" }}>
                    {member.name}
                  </h3>
                  <p className="mt-2 text-sm uppercase tracking-[0.16em] text-teal-700" style={{ fontFamily: "'Oswald', sans-serif" }}>
                    {member.role}
                  </p>
                  <p className="mt-3 text-sm text-slate-500">{member.experience}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
