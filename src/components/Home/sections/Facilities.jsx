import React from 'react';
import { motion } from 'framer-motion';
import { FaBook, FaBus, FaFlask, FaLaptopCode, FaMusic, FaShieldAlt } from 'react-icons/fa';
import SectionHeading from '../../shared/SectionHeading';

const facilities = [
  {
    icon: FaLaptopCode,
    title: 'Smart classrooms',
    description: 'Technology-supported teaching spaces that make concepts more visual and interactive.',
    image: `${import.meta.env.BASE_URL}images/Activities/4.jpg`,
  },
  {
    icon: FaBook,
    title: 'Reading and reference spaces',
    description: 'Children get room to build reading habits, curiosity, and quieter concentration.',
    image: `${import.meta.env.BASE_URL}images/Campus/1.jpg`,
  },
  {
    icon: FaFlask,
    title: 'Hands-on learning corners',
    description: 'Science and activity-based learning are supported with practical demonstration and exploration.',
    image: `${import.meta.env.BASE_URL}images/Activities/5.jpg`,
  },
  {
    icon: FaMusic,
    title: 'Creative development spaces',
    description: 'Art, music, and performance are part of school identity, not treated as afterthoughts.',
    image: `${import.meta.env.BASE_URL}images/Activities/2.jpg`,
  },
  {
    icon: FaBus,
    title: 'Transportation support',
    description: 'Commute planning and parent convenience are addressed through organized transport systems.',
    image: `${import.meta.env.BASE_URL}images/Campus/2.jpg`,
  },
  {
    icon: FaShieldAlt,
    title: 'Campus safety systems',
    description: 'Security, supervision, and campus discipline are treated as infrastructure, not messaging.',
    image: `${import.meta.env.BASE_URL}images/Events/2.jpg`,
  },
];

const Facilities = () => {
  return (
    <section className="section-shell section-padding bg-white/60">
      <div className="container-custom">
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <SectionHeading
            eyebrow="Spaces that matter"
            title="Facilities that support real learning and"
            highlight="make parents feel secure."
            description="The best school environments are not overdesigned. They are well-organized, well-kept, and deliberately built around teaching quality, child safety, and daily comfort."
          />

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.2 }}
            className="soft-card p-6"
          >
            <img
              src={`${import.meta.env.BASE_URL}images/Activities/1.jpg`}
              alt="Students on campus"
              className="h-[280px] w-full rounded-[1.5rem] object-cover"
            />
            <div className="mt-5 grid gap-4 sm:grid-cols-3">
              <div>
                <div className="font-display text-4xl leading-none text-slate-900">Safe</div>
                <p className="mt-2 text-sm text-slate-600">CCTV-supported and supervised campus routines.</p>
              </div>
              <div>
                <div className="font-display text-4xl leading-none text-slate-900">Active</div>
                <p className="mt-2 text-sm text-slate-600">Spaces that allow both classroom work and movement.</p>
              </div>
              <div>
                <div className="font-display text-4xl leading-none text-slate-900">Ready</div>
                <p className="mt-2 text-sm text-slate-600">Infrastructure that communicates seriousness to parents.</p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {facilities.map((facility, index) => (
            <motion.article
              key={facility.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              viewport={{ once: true, amount: 0.2 }}
              className="soft-card overflow-hidden"
            >
              <div className="relative h-52 overflow-hidden">
                <img src={facility.image} alt={facility.title} className="h-full w-full object-cover" />
                <div className="absolute left-5 top-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900 text-white">
                  <facility.icon />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl text-slate-900" style={{ fontFamily: "'Oswald', sans-serif" }}>
                  {facility.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{facility.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facilities;
