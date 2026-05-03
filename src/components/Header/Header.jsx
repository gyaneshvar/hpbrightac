import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location]);

  const navItems = [
    { path: '/', label: 'Home', icon: 'home' },
    { path: '/about', label: 'About', icon: 'school' },
    { path: '/academics', label: 'Academics', icon: 'menu_book' },
    { path: '/admissions', label: 'Admissions', icon: 'assignment_ind' },
    { path: '/gallery', label: 'Campus Life', icon: 'photo_camera' },
    { path: '/contact', label: 'Contact Us', icon: 'contact_support' },
  ];

  const handleNavClick = (path) => {
    navigate(path);
  };

  return (
    <>
      {/* TopNavBar (Web) */}
      <nav className="hidden md:flex bg-white/90 dark:bg-slate-900/90 backdrop-blur-md sticky top-0 z-50 justify-between items-center px-8 py-4 w-full rounded-b-[2rem] border-b-4 border-teal-50/50 shadow-[0_10px_40px_-15px_rgba(15,118,110,0.2)]">
        <button 
          onClick={() => handleNavClick('/')}
          className="flex items-center gap-3 text-left"
        >
          <img 
            src={import.meta.env.BASE_URL + "images/Logo.png"} 
            alt="H.P. Bright Academy Logo" 
            className="h-10 w-10 object-contain"
          />
          <div className="text-2xl font-black text-teal-700 tracking-tight font-headline-md text-headline-md">HP Bright Academy</div>
        </button>
        
        <div className="flex gap-4 items-center">
          {navItems.map((item) => (
            <button
              key={item.path}
              onClick={() => handleNavClick(item.path)}
              className={`font-lexend text-base font-semibold transition-all duration-300 active:scale-95 active:translate-y-0.5 ${
                location.pathname === item.path
                  ? 'text-teal-700 border-b-4 border-yellow-400 pb-1'
                  : 'text-slate-500 hover:text-teal-600 hover:bg-teal-50 rounded-full px-4 py-2'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
        <button 
          onClick={() => handleNavClick('/admissions')}
          className="bg-primary text-on-primary font-button text-button px-6 py-3 rounded-full border-b-4 border-primary-fixed-dim hover:-translate-y-1 transition-transform btn-squish"
        >
          Inquire Now
        </button>
      </nav>

      {/* Top Mobile Header */}
      <nav className="md:hidden flex bg-white/90 dark:bg-slate-900/90 backdrop-blur-md sticky top-0 z-50 justify-between items-center px-6 py-3 w-full border-b-2 border-teal-50/50 shadow-sm">
        <button 
          onClick={() => handleNavClick('/')}
          className="flex items-center gap-2 text-left"
        >
          <img 
            src={import.meta.env.BASE_URL + "images/Logo.png"} 
            alt="H.P. Bright Academy Logo" 
            className="h-8 w-8 object-contain"
          />
          <div className="text-lg font-bold text-teal-700 tracking-tight font-headline-md text-headline-md leading-none">HP Bright Academy</div>
        </button>
        <button 
          onClick={() => handleNavClick('/admissions')}
          className="bg-primary text-on-primary font-button text-xs px-4 py-2 rounded-full border-b-2 border-primary-fixed-dim hover:-translate-y-1 transition-transform btn-squish"
        >
          Inquire
        </button>
      </nav>

      {/* SideNavBar / BottomNavBar (Mobile) */}
      <nav className="md:hidden fixed bottom-0 w-full bg-teal-50 z-50 rounded-t-[2.5rem] shadow-[0_-10px_40px_-15px_rgba(15,118,110,0.2)] flex justify-around p-4 border-t-4 border-teal-100/50">
        {navItems.filter(i => i.label !== 'Campus Life').map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <button
              key={item.path}
              onClick={() => handleNavClick(item.path)}
              className={`flex flex-col items-center gap-1 p-2 transition-colors ${
                isActive 
                  ? 'text-teal-700 bg-teal-600/10 rounded-2xl' 
                  : 'text-teal-700/70'
              }`}
            >
              <span 
                className="material-symbols-outlined" 
                style={isActive ? { fontVariationSettings: "'FILL' 1" } : {}}
              >
                {item.icon}
              </span>
              <span className="font-label-bold text-label-bold text-xs">{item.label}</span>
            </button>
          );
        })}
      </nav>
    </>
  );
};

export default Header;

