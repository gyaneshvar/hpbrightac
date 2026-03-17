import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight, FaQuoteLeft, FaStar } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import SectionHeading from '../../shared/SectionHeading';

const testimonials = [
  {
    name: 'Mrs. Priya Sharma',
    role: 'Parent of Aarav, Class 5',
    content: 'The school gives our son attention that is difficult to find elsewhere. His confidence has improved because the teachers are involved, observant, and consistent.',
  },
  {
    name: 'Mr. Rajesh Kumar',
    role: 'Parent of Ananya, Class 7',
    content: 'What stands out is the balance. The academics are serious, but the school environment still feels warm and respectful. That combination matters to families.',
  },
  {
    name: 'Aditya Verma',
    role: 'Student, Class 8',
    content: 'The teachers explain things clearly and encourage us to participate. I feel prepared for higher classes and more confident when speaking in front of others.',
  },
];

const trustStats = [
  { value: '98%', label: 'Family satisfaction' },
  { value: '500+', label: 'Students enrolled' },
  { value: '15+', label: 'Experienced faculty' },
];

const Testimonials = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5200);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="section-shell section-padding">
      <div className="container-custom">
        <div className="overflow-hidden rounded-[2.2rem] bg-[var(--ink-950)] px-6 py-8 text-white shadow-[0_30px_100px_rgba(15,23,35,0.14)] lg:px-10 lg:py-10">
          <div className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
            <div>
              <SectionHeading
                eyebrow="Community voice"
                title="The strongest marketing asset is"
                highlight="genuine trust."
                description="Parents and students describe the school in terms of care, discipline, and confidence. That is the reputation the new website should foreground."
                light
              />

              <div className="mt-8 grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                {trustStats.map((stat) => (
                  <div key={stat.label} className="rounded-[1.4rem] border border-white/12 bg-white/8 p-5">
                    <div className="font-display text-5xl leading-none text-[#f5d48d]">{stat.value}</div>
                    <p className="mt-3 text-sm leading-6 text-white/68">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-panel rounded-[1.9rem] p-6 text-slate-900 lg:p-8">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-[#bc8b2c]">
                  {[...Array(5)].map((_, index) => (
                    <FaStar key={index} />
                  ))}
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-900"
                    aria-label="Previous testimonial"
                  >
                    <FaChevronLeft />
                  </button>
                  <button
                    onClick={() => setCurrentIndex((prev) => (prev + 1) % testimonials.length)}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-900"
                    aria-label="Next testimonial"
                  >
                    <FaChevronRight />
                  </button>
                </div>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={testimonials[currentIndex].name}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -18 }}
                  transition={{ duration: 0.35 }}
                  className="mt-8"
                >
                  <FaQuoteLeft className="text-3xl text-teal-700" />
                  <blockquote className="mt-5 text-xl leading-9 text-slate-700 lg:text-2xl">
                    “{testimonials[currentIndex].content}”
                  </blockquote>
                  <div className="mt-8 border-t border-slate-200 pt-6">
                    <div className="text-xl text-slate-900" style={{ fontFamily: "'Oswald', sans-serif" }}>
                      {testimonials[currentIndex].name}
                    </div>
                    <p className="mt-1 text-sm uppercase tracking-[0.16em] text-slate-500" style={{ fontFamily: "'Oswald', sans-serif" }}>
                      {testimonials[currentIndex].role}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-slate-200 pt-6">
                <div className="flex gap-2">
                  {testimonials.map((item, index) => (
                    <button
                      key={item.name}
                      onClick={() => setCurrentIndex(index)}
                      className={`h-2.5 rounded-full transition-all duration-200 ${currentIndex === index ? 'w-10 bg-slate-900' : 'w-2.5 bg-slate-300'}`}
                      aria-label={`Show testimonial ${index + 1}`}
                    />
                  ))}
                </div>
                <button onClick={() => navigate('/admissions')} className="btn-primary">
                  Schedule a Visit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
