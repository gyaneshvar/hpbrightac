import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaBars, FaTimes, FaPhone, FaEnvelope, FaMapMarkerAlt, FaArrowRight } from 'react-icons/fa';
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
      <div className="bg-[var(--ink-950)] text-white/80 hidden lg:block">
        <div className="container-custom">
          <div className="flex items-center justify-between gap-6 py-3 text-[0.78rem] uppercase tracking-[0.18em]">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <FaPhone className="text-[0.7rem] text-[#f5d48d]" />
                <span>+91 8400308200</span>
              </div>
              <div className="flex items-center gap-2">
                <FaEnvelope className="text-[0.7rem] text-[#f5d48d]" />
                <span>info@hpbrightacademy.in</span>
              </div>
            </div>
            <div className="flex items-center gap-2 text-right">
              <FaMapMarkerAlt className="text-[0.7rem] text-[#f5d48d]" />
              <span>Chamao Shivpur Tarna, Ganeshpur, Varanasi, Uttar Pradesh 221105</span>
            </div>
          </div>
        </div>
      </div>

      <header
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[rgba(249,246,239,0.88)] shadow-[0_18px_50px_rgba(15,23,35,0.08)] backdrop-blur-xl py-3'
            : 'bg-[rgba(249,246,239,0.68)] backdrop-blur-xl py-4'
        }`}
      >
        <div className="container-custom">
          <div className="glass-panel flex items-center justify-between rounded-full px-4 py-3 lg:px-6">
            <button onClick={() => handleNavClick('/')} className="flex items-center gap-3 text-left">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white lg:h-16 lg:w-16">
                <img 
                  src={import.meta.env.BASE_URL + "images/Logo.png"} 
                  alt="H.P. Bright Academy Logo" 
                  className="h-9 w-9 object-contain lg:h-12 lg:w-12"
                />
              </div>
              <div>
                <p className="text-[0.72rem] uppercase tracking-[0.22em] text-teal-700 hidden sm:block" style={{ fontFamily: "'Oswald', sans-serif" }}>
                  Preschool to Class 8
                </p>
                <h1 className="font-display text-2xl leading-none text-slate-900 lg:text-4xl">
                  H.P. Bright Academy
                </h1>
                <p className="mt-1 hidden text-sm text-slate-500 sm:block">
                  A calm, ambitious campus for thoughtful early education.
                </p>
              </div>
            </button>

            <nav className="hidden items-center gap-2 lg:flex">
              {navItems.map((item) => (
                <button
                  key={item.path}
                  onClick={() => handleNavClick(item.path)}
                  className={`inline-flex h-10 items-center justify-center rounded-full px-4 text-sm uppercase tracking-[0.14em] transition-all duration-200 ${
                    location.pathname === item.path
                      ? 'bg-slate-900 text-white shadow-md'
                      : 'text-slate-600 hover:bg-white/70 hover:text-slate-900'
                  }`}
                  style={{ fontFamily: "'Oswald', sans-serif" }}
                >
                  {item.label}
                </button>
              ))}
              <button 
                onClick={() => handleNavClick('/admissions')}
                className="btn-primary"
              >
                Admissions Open
                <FaArrowRight className="text-xs" />
              </button>
            </nav>

            <button
              className="rounded-full border border-slate-200 bg-white/80 p-3 text-slate-700 transition-colors duration-200 hover:text-blue-600 lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden"
            >
              <div className="container-custom pt-3">
                <div className="glass-panel rounded-[2rem] p-5">
                  <nav className="flex flex-col space-y-3">
                  {navItems.map((item) => (
                    <button
                      key={item.path}
                      onClick={() => handleNavClick(item.path)}
                      className={`rounded-full px-4 py-3 text-left text-sm uppercase tracking-[0.14em] transition-all duration-200 ${
                        location.pathname === item.path
                          ? 'bg-slate-900 text-white'
                          : 'text-slate-700 hover:bg-white'
                      }`}
                      style={{ fontFamily: "'Oswald', sans-serif" }}
                    >
                      {item.label}
                    </button>
                  ))}
                  <div className="border-t border-slate-200 pt-4">
                    <button 
                      onClick={() => handleNavClick('/admissions')}
                      className="btn-primary w-full"
                    >
                      Admissions Open
                    </button>
                  </div>
                  <div className="space-y-2 text-sm text-slate-600">
                    <div className="flex items-center gap-2">
                      <FaPhone className="text-xs text-teal-700" />
                      <span>+91 8400308200</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaEnvelope className="text-xs text-teal-700" />
                      <span>info@hpbrightacademy.in</span>
                    </div>
                  </div>
                  </nav>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <div className={`${isScrolled ? 'h-24' : 'h-28'} lg:h-36`}></div>
    </>
  );
};

export default Header;
