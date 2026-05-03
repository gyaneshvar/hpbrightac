import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-teal-900 dark:bg-black w-full py-16 px-12 flex flex-col md:flex-row justify-between items-center gap-8 rounded-t-[4rem] mt-16 border-t-2 border-teal-800">
      <div className="text-xl font-bold text-white font-headline-md">HP Bright Academy</div>
      <div className="font-lexend text-sm text-teal-400 text-center md:text-right">
        © {currentYear} HP Bright Academy. Where curiosity meets excellence.
      </div>
    </footer>
  );
};

export default Footer;
