import React from 'react';
import { motion } from 'framer-motion';

const SectionHeading = ({ eyebrow, title, highlight, description, align = 'left', light = false }) => {
  const wrapperClass = align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl';
  const titleColor = light ? 'text-white' : 'text-slate-900';
  const textColor = light ? 'text-white/78' : 'text-slate-600';
  const highlightColor = light ? 'text-[#f5d48d]' : 'text-teal-700';

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65 }}
      viewport={{ once: true, amount: 0.3 }}
      className={wrapperClass}
    >
      {eyebrow ? <span className={`eyebrow ${light ? 'text-white/80' : ''}`}>{eyebrow}</span> : null}
      <h2 className={`heading-primary mt-4 ${titleColor}`}>
        {title} {highlight ? <span className={highlightColor}>{highlight}</span> : null}
      </h2>
      {description ? <p className={`text-body ${textColor}`}>{description}</p> : null}
    </motion.div>
  );
};

export default SectionHeading;