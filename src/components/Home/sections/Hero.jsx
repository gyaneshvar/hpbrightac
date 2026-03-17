import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FaArrowRight, FaMapMarkerAlt, FaPlay, FaStar } from 'react-icons/fa';

const highlights = [
  {
    title: 'Small classes, calm rooms',
    description: 'Students are taught in focused groups where attention is personal and progress stays visible.',
  },
  {
    title: 'Learning that feels alive',
    description: 'Academics, activity, and values are woven together so school feels rigorous without feeling rigid.',
  },
  {
    title: 'A campus families can trust',
    description: 'From first visit to final bell, the environment is designed to feel safe, cared for, and clear.',
  },
];

const backgroundImages = [
  `${import.meta.env.BASE_URL}images/Campus/2.jpg`,
  `${import.meta.env.BASE_URL}images/Activities/6.jpg`,
  `${import.meta.env.BASE_URL}images/Events/2.jpg`,
  `${import.meta.env.BASE_URL}images/Activities/5.jpg`,
];

const Hero = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 5200);

    return () => clearInterval(interval);
  }, []);

  const handleVirtualTourClick = () => {
    const gallerySection = document.getElementById('gallery');
    if (gallerySection) {
      gallerySection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="section-shell relative overflow-hidden px-4 pb-10 pt-4 sm:px-6 lg:px-8 lg:pb-16 lg:pt-6">
      <div className="container-custom relative overflow-hidden rounded-[2.25rem] border border-white/70 bg-[var(--ink-950)] px-6 py-8 text-white shadow-[0_35px_120px_rgba(15,23,35,0.18)] lg:px-10 lg:py-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(90deg, rgba(15, 23, 35, 0.88), rgba(15, 23, 35, 0.58) 46%, rgba(15, 118, 110, 0.3)), url(${backgroundImages[currentIndex]})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
            }}
          />
        </AnimatePresence>

        <div className="ambient-orb -left-10 top-6 h-48 w-48 bg-[#d4a545]/30" />
        <div className="ambient-orb bottom-8 right-0 h-72 w-72 bg-primary-500/25 animate-float-slow" />

        <div className="relative z-10 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div className="max-w-3xl pt-4 lg:pt-8">
            <span className="eyebrow text-white/82 before:bg-white/35">Next generation school experience</span>
            <motion.h1
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.1 }}
              className="mt-5 font-display text-5xl leading-[0.92] text-white sm:text-6xl lg:text-[5.8rem]"
            >
              Bright minds need a school that feels
              <span className="block text-[#f5d48d]"> thoughtful, warm, and ambitious.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.22 }}
              className="mt-6 max-w-2xl text-lg leading-8 text-white/76 lg:text-xl"
            >
              H.P. Bright Academy offers Preschool to Class 8 in Varanasi with a calmer atmosphere, stronger parent trust, and a learning environment built around individual growth instead of crowd management.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.34 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <button onClick={() => navigate('/admissions')} className="btn-primary">
                Begin Admission Inquiry
                <FaArrowRight className="text-xs" />
              </button>
              <button onClick={handleVirtualTourClick} className="btn-outline border-white/30 bg-white/12 text-white hover:bg-white hover:text-slate-900">
                <FaPlay className="text-xs" />
                Explore the Campus
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.46 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <div className="stat-pill">500+ learners</div>
              <div className="stat-pill">15+ experienced faculty</div>
              <div className="stat-pill">Preschool to Class 8</div>
            </motion.div>
          </div>

          <div className="grid gap-4 lg:gap-5">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="glass-panel rounded-[1.8rem] p-5 text-slate-900"
            >
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-teal-700" style={{ fontFamily: "'Oswald', sans-serif" }}>
                    Campus location
                  </p>
                  <h2 className="mt-2 font-display text-4xl leading-none text-slate-900">
                    Varanasi roots, modern school rhythm.
                  </h2>
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-900 text-white">
                  <FaMapMarkerAlt />
                </div>
              </div>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                Chamao Shivpur Tarna, Ganeshpur, Varanasi, Uttar Pradesh 221105.
              </p>
            </motion.div>

            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              {highlights.map((item, index) => (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.65, delay: 0.28 + index * 0.12 }}
                  className="rounded-[1.6rem] border border-white/12 bg-white/10 p-5 backdrop-blur-md"
                >
                  <FaStar className="text-[#f5d48d]" />
                  <h3 className="mt-4 text-lg font-semibold text-white" style={{ fontFamily: "'Oswald', sans-serif" }}>
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-white/72">{item.description}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </div>

        <div className="relative z-10 mt-8 flex justify-center gap-2 lg:justify-start">
          {backgroundImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'w-10 bg-[#f5d48d]' : 'w-2.5 bg-white/38 hover:bg-white/65'
              }`}
              aria-label={`Show slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
