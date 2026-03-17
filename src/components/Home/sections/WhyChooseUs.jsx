import React from 'react';
import { motion } from 'framer-motion';
import { FaHandsHelping, FaSchool, FaShieldAlt, FaUserCheck, FaUserGraduate, FaUsers } from 'react-icons/fa';
import SectionHeading from '../../shared/SectionHeading';

const reasons = [
  {
    icon: FaUsers,
    title: 'Smaller class strength',
    description: 'Teachers can monitor progress closely and adjust how students are supported in class.',
    span: 'lg:col-span-2',
  },
  {
    icon: FaShieldAlt,
    title: 'Parent confidence',
    description: 'The environment is orderly, safe, and easy for families to trust from the first interaction onward.',
  },
  {
    icon: FaUserCheck,
    title: 'Individual growth',
    description: 'Children are encouraged to build voice, responsibility, and discipline at their own stage.',
  },
  {
    icon: FaHandsHelping,
    title: 'Faculty with care',
    description: 'Teachers are expected to combine consistency with empathy, not just content delivery.',
  },
  {
    icon: FaSchool,
    title: 'A campus with presence',
    description: 'The school should look and feel like a serious educational home, not a temporary setup.',
    span: 'lg:col-span-2',
  },
  {
    icon: FaUserGraduate,
    title: 'Prepared for what comes next',
    description: 'Students finish each stage with stronger habits and readiness for the next academic level.',
  },
];

const WhyChooseUs = () => {
  return (
    <section className="section-shell section-padding">
      <div className="container-custom">
        <SectionHeading
          eyebrow="Why families choose us"
          title="The difference is not louder branding."
          highlight="It is a better school experience."
          description="A world-class school website has to communicate substance, not noise. These are the reasons the institution earns trust and stands apart from generic local-school presentations."
          align="center"
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, index) => (
            <motion.article
              key={reason.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              viewport={{ once: true, amount: 0.25 }}
              className={`soft-card ${reason.span || ''} flex h-full flex-col p-7`}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900 text-white">
                <reason.icon />
              </div>
              <h3 className="mt-6 text-2xl text-slate-900" style={{ fontFamily: "'Oswald', sans-serif" }}>
                {reason.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">{reason.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
