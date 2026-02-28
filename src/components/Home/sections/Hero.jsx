import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlay, FaArrowRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();
  const [currentBgIndex, setCurrentBgIndex] = useState(0);

  // Background images from different categories
  const backgroundImages = [
    `${import.meta.env.BASE_URL}images/Campus/2.jpg`,
    `${import.meta.env.BASE_URL}images/Activities/6.jpg`,
    `${import.meta.env.BASE_URL}images/Campus/1.jpg`,
    `${import.meta.env.BASE_URL}images/Activities/5.jpg`,
    `${import.meta.env.BASE_URL}images/Events/2.jpg`,
  ];

  // Auto-rotate background images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBgIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  const handleAdmissionsClick = () => {
    navigate('/admissions');
  };

  const handleVirtualTourClick = () => {
    // First try to find the gallery section
    const gallerySection = document.getElementById('gallery');
    if (gallerySection) {
      gallerySection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      // Fallback: scroll to a reasonable position if gallery not found
      window.scrollTo({ 
        top: window.innerHeight * 2, 
        behavior: 'smooth' 
      });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image Slideshow */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentBgIndex}
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${backgroundImages[currentBgIndex]})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat'
            }}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
        </AnimatePresence>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-primary-900/50 to-black/60 z-10"></div>

      {/* Floating Decorative Blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary-400/20 rounded-full blur-3xl z-10 animate-bounce-gentle pointer-events-none"></div>
      <div className="absolute bottom-32 right-10 w-96 h-96 bg-secondary-400/15 rounded-full blur-3xl z-10 animate-bounce-gentle pointer-events-none" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-accent-400/15 rounded-full blur-3xl z-10 animate-bounce-gentle pointer-events-none" style={{ animationDelay: '2s' }}></div>

      {/* Content */}
      <div className="relative z-20 text-center text-white px-6 max-w-4xl mx-auto">
        <motion.h1 
          className="text-6xl md:text-8xl font-black mb-6 leading-tight"
          style={{ fontFamily: "'Oswald', sans-serif" }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Welcome to{' '}
          <span className="bg-gradient-to-r from-yellow-300 to-accent-400 bg-clip-text text-transparent">H.P. Bright Academy</span>
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl mb-8 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Nurturing young minds from Preschool to Class 8 with quality education, 
          individual attention, and value-based learning in the heart of Varanasi.
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <button
            onClick={handleAdmissionsClick}
            className="bg-gradient-to-r from-accent-500 to-primary-500 hover:from-accent-600 hover:to-primary-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl transform hover:scale-105"
            style={{ fontFamily: "'Oswald', sans-serif" }}
          >
            <span>Admissions Open</span>
            <FaArrowRight className="text-sm" />
          </button>
          
          <button
            onClick={handleVirtualTourClick}
            className="bg-white/20 backdrop-blur-sm border-2 border-white/70 hover:bg-white hover:text-gray-800 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl transform hover:scale-105"
            style={{ fontFamily: "'Oswald', sans-serif" }}
          >
            <FaPlay className="text-sm" />
            <span>Virtual Tour</span>
          </button>
        </motion.div>

        {/* Key Features */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 text-center border border-white/40 border-t-4 border-t-yellow-400 shadow-lg">
            <h3 className="text-xl font-bold mb-2" style={{ fontFamily: "'Oswald', sans-serif" }}>Expert Teachers</h3>
            <p className="text-gray-200 text-sm">Qualified and caring educators dedicated to your child's growth</p>
          </div>
          <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 text-center border border-white/40 border-t-4 border-t-secondary-400 shadow-lg">
            <h3 className="text-xl font-bold mb-2" style={{ fontFamily: "'Oswald', sans-serif" }}>Safe Environment</h3>
            <p className="text-gray-200 text-sm">Secure and nurturing campus for optimal learning</p>
          </div>
          <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 text-center border border-white/40 border-t-4 border-t-accent-400 shadow-lg">
            <h3 className="text-xl font-bold mb-2" style={{ fontFamily: "'Oswald', sans-serif" }}>Holistic Development</h3>
            <p className="text-gray-200 text-sm">Academic excellence combined with character building</p>
          </div>
        </motion.div>
      </div>

      {/* Background Image Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {backgroundImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentBgIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentBgIndex 
                ? 'bg-white' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>

      {/* Scroll Down Indicator */}
      <motion.div 
        className="absolute bottom-8 right-8 text-white z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="flex flex-col items-center">
          <span className="text-sm mb-2">Scroll Down</span>
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
