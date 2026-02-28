import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaBars, FaTimes, FaPhone, FaEnvelope } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    // Scroll to top when route changes
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location]);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/academics', label: 'Academics' },
    { path: '/admissions', label: 'Admissions' },
    { path: '/contact', label: 'Contact' },
  ];

  const handleNavClick = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-primary-700 via-primary-600 to-secondary-600 text-white py-2 hidden lg:block">
        <div className="container-custom">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <FaPhone className="text-xs" />
                <span>+91 8400308200</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaEnvelope className="text-xs" />
                <span>info@hpbrightacademy.in</span>
              </div>
            </div>
            <div className="text-sm">
              Chamao Shivpur Tarna, Ganeshpur, Varanasi, UP 221105
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white shadow-lg py-2'
            : 'bg-white/95 backdrop-blur-md py-4'
        }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between">
            {/* Logo and School Name */}
            <button onClick={() => handleNavClick('/')} className="flex items-center space-x-3">
              <div className="w-12 h-12 lg:w-16 lg:h-16">
                <img 
                  src={import.meta.env.BASE_URL + "images/Logo.png"} 
                  alt="H.P. Bright Academy Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h1 className="text-xl lg:text-2xl font-bold text-blue-800 font-display" style={{ fontFamily: "'Oswald', sans-serif" }}>
                  H.P. Bright Academy
                </h1>
                <p className="text-xs text-gray-600 hidden sm:block">
                  Preschool to Class 8
                </p>
              </div>
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.path}
                  onClick={() => handleNavClick(item.path)}
                  className={`inline-flex items-center justify-center leading-none font-medium transition-all duration-200 h-9 ${
                    location.pathname === item.path
                      ? 'text-primary-700 bg-primary-50 px-4 rounded-full'
                      : 'text-gray-700 hover:text-primary-600 px-2'
                  }`}
                  style={{ fontFamily: "'Oswald', sans-serif" }}
                >
                  {item.label}
                </button>
              ))}
              <button 
                onClick={() => handleNavClick('/admissions')}
                className="btn-primary ring-2 ring-primary-300 ring-offset-2"
                style={{ fontFamily: "'Oswald', sans-serif" }}
              >
                Admissions Open
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 transition-colors duration-200"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-gradient-to-b from-white to-primary-50 border-t border-primary-100"
            >
              <div className="container-custom py-4">
                <nav className="flex flex-col space-y-4">
                  {navItems.map((item) => (
                    <button
                      key={item.path}
                      onClick={() => handleNavClick(item.path)}
                      className={`font-medium transition-all duration-200 py-2 px-4 rounded-full text-left ${
                        location.pathname === item.path
                          ? 'text-primary-700 bg-primary-100'
                          : 'text-gray-700 hover:text-primary-600 hover:bg-primary-50'
                      }`}
                      style={{ fontFamily: "'Oswald', sans-serif" }}
                    >
                      {item.label}
                    </button>
                  ))}
                  <div className="pt-4 border-t border-gray-200">
                    <button 
                      onClick={() => handleNavClick('/admissions')}
                      className="btn-primary w-full"
                      style={{ fontFamily: "'Oswald', sans-serif" }}
                    >
                      Admissions Open
                    </button>
                  </div>
                  <div className="text-sm text-gray-600 space-y-2">
                    <div className="flex items-center space-x-2">
                      <FaPhone className="text-xs" />
                      <span>+91 8400308200</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <FaEnvelope className="text-xs" />
                      <span>info@hpbrightacademy.in</span>
                    </div>
                  </div>
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Spacer to prevent content overlap */}
      <div className={`${isScrolled ? 'h-20' : 'h-24'} lg:h-32`}></div>
    </>
  );
};

export default Header;
