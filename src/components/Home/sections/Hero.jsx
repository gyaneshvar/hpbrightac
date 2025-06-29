import React from 'react';
import { motion } from 'framer-motion';
import { FaPlay, FaArrowRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  const handleAdmissionsClick = () => {
    navigate('/admissions');
  };

  const handleVirtualTourClick = () => {
    // For now, scroll to gallery section. Later can be replaced with actual virtual tour
    const gallerySection = document.getElementById('gallery');
    if (gallerySection) {
      gallerySection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${import.meta.env.BASE_URL}images/campus-1.jpg)`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold font-display mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Welcome to{' '}
            <span className="text-blue-400">H.P. Bright Academy</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl lg:text-3xl mb-8 text-gray-200"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Nurturing Young Minds from Preschool to Class 8
          </motion.p>
          
          <motion.p 
            className="text-lg md:text-xl mb-12 text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Where learning meets fun in a safe, caring environment. 
            We shape tomorrow's leaders with individual attention, 
            value-based education, and modern facilities.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <button 
              onClick={handleAdmissionsClick}
              className="btn-primary text-lg px-8 py-4 flex items-center space-x-2 group"
            >
              <span>Admissions Open</span>
              <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-200" />
            </button>
            
            <button 
              onClick={handleVirtualTourClick}
              className="btn-outline text-lg px-8 py-4 flex items-center space-x-2 bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-gray-900"
            >
              <FaPlay />
              <span>Virtual Tour</span>
            </button>
          </motion.div>
        </motion.div>

        {/* Floating Elements */}
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 bg-blue-500 rounded-full opacity-20"
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 360]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute bottom-20 right-10 w-16 h-16 bg-green-500 rounded-full opacity-20"
          animate={{ 
            y: [0, 20, 0],
            rotate: [0, -360]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="flex flex-col items-center">
          <span className="text-sm mb-2">Scroll Down</span>
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
