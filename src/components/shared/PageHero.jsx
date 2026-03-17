import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';

const PageHero = ({ eyebrow, title, highlight, description, image, imageAlt, stats = [], actions }) => {
  return (
    <section className="page-hero pt-12 pb-16 lg:pb-24 lg:pt-16">
      <div className="ambient-orb left-0 top-0 h-60 w-60 bg-white/10" />
      <div className="ambient-orb bottom-10 right-10 h-80 w-80 bg-[#d4a545]/20 animate-float-slow" />
      <div className="container-custom relative z-10">
        <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <div>
            <SectionHeading
              eyebrow={eyebrow}
              title={title}
              highlight={highlight}
              description={description}
              light
            />
            {stats.length ? (
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.25 }}
                className="mt-8 flex flex-wrap gap-3"
              >
                {stats.map((stat) => (
                  <div key={stat.label} className="stat-pill">
                    {stat.value} {stat.label}
                  </div>
                ))}
              </motion.div>
            ) : null}
            {actions ? (
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.35 }}
                className="mt-8 flex flex-wrap gap-4"
              >
                {actions}
              </motion.div>
            ) : null}
          </div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative"
          >
            <div className="absolute -left-6 top-10 hidden h-24 w-24 rounded-[2rem] border border-white/18 bg-white/8 blur-[1px] lg:block" />
            <div className="glass-panel relative overflow-hidden rounded-[2rem] p-3">
              <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-white/20 to-transparent" />
              <img
                src={image}
                alt={imageAlt}
                className="h-[320px] w-full rounded-[1.5rem] object-cover lg:h-[420px]"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PageHero;