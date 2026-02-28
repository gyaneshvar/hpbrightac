import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaGraduationCap, FaArrowRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const AdmissionModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const seen = sessionStorage.getItem('admissionModalSeen');
    if (!seen) {
      const timer = setTimeout(() => setIsOpen(true), 800);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    sessionStorage.setItem('admissionModalSeen', 'true');
    setIsOpen(false);
  };

  const handleApply = () => {
    handleClose();
    navigate('/admissions');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={handleClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

          {/* Modal */}
          <motion.div
            className="relative w-full max-w-md rounded-3xl overflow-hidden shadow-2xl"
            initial={{ scale: 0.8, opacity: 0, y: 40 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 40 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Gradient header */}
            <div className="bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-600 px-8 pt-10 pb-8 text-center relative">
              {/* Close button */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors duration-200 p-1"
              >
                <FaTimes className="text-xl" />
              </button>

              {/* Icon badge */}
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm mb-4">
                <FaGraduationCap className="text-white text-3xl" />
              </div>

              {/* Flashing badge */}
              <div className="inline-block bg-accent-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-3 animate-pulse">
                Now Open
              </div>

              <h2
                className="text-white text-3xl font-black leading-tight mb-1"
                style={{ fontFamily: "'Oswald', sans-serif" }}
              >
                Admissions Open!
              </h2>
              <p className="text-white/80 text-sm font-medium tracking-wide">
                Session 2026 – 2027
              </p>
            </div>

            {/* Body */}
            <div className="bg-white px-8 py-7 text-center">
              <p className="text-gray-600 text-base leading-relaxed mb-2">
                Enroll your child today in
              </p>
              <p
                className="text-primary-700 text-2xl font-bold mb-1"
                style={{ fontFamily: "'Oswald', sans-serif" }}
              >
                Pre-School to Class 8
              </p>
              <p className="text-gray-500 text-sm mb-6">
                H.P. Bright Academy, Varanasi
              </p>

              {/* CTA buttons */}
              <button
                onClick={handleApply}
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-accent-500 to-primary-600 hover:from-accent-600 hover:to-primary-700 text-white font-bold text-base px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 mb-3"
                style={{ fontFamily: "'Oswald', sans-serif" }}
              >
                Apply Now <FaArrowRight className="text-sm" />
              </button>
              <button
                onClick={handleClose}
                className="w-full text-gray-400 hover:text-gray-600 text-sm transition-colors duration-200"
              >
                Maybe later
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AdmissionModal;
