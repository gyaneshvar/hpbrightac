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
  }, [location]);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/academics', label: 'Academics' },
    { path: '/admissions', label: 'Admissions' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-blue-800 text-white py-2 hidden lg:block">
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
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-12 h-12 lg:w-16 lg:h-16">
                <img 
                  src={import.meta.env.BASE_URL + "images/Logo.png"} 
                  alt="H.P. Bright Academy Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h1 className="text-xl lg:text-2xl font-bold text-blue-800 font-display">
                  H.P. Bright Academy
                </h1>
                <p className="text-xs text-gray-600 hidden sm:block">
                  Preschool to Class 8
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`font-medium transition-colors duration-200 ${
                    location.pathname === item.path
                      ? 'text-blue-600 border-b-2 border-blue-600'
                      : 'text-gray-700 hover:text-blue-600'
                  } py-2`}
                >
                  {item.label}
                </Link>
              ))}
              <button 
                onClick={() => navigate('/admissions')}
                className="btn-primary"
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
              className="lg:hidden bg-white border-t border-gray-200"
            >
              <div className="container-custom py-4">
                <nav className="flex flex-col space-y-4">
                  {navItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className={`font-medium transition-colors duration-200 py-2 px-4 rounded-md ${
                        location.pathname === item.path
                          ? 'text-blue-600 bg-blue-50'
                          : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                      }`}
                    >
                      {item.label}
                    </Link>
                  ))}
                  <div className="pt-4 border-t border-gray-200">
                    <button 
                      onClick={() => navigate('/admissions')}
                      className="btn-primary w-full"
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
