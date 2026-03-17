import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaFacebookF, 
  FaTwitter, 
  FaInstagram, 
  FaYoutube,
  FaWhatsapp 
} from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/academics', label: 'Academics' },
    { path: '/admissions', label: 'Admissions' },
    { path: '/contact', label: 'Contact' },
  ];

  const academicLinks = [
    { label: 'Preschool' },
    { label: 'Primary (Classes 1-5)' },
    { label: 'Middle School (Classes 6-8)' },
    { label: 'Curriculum' },
    { label: 'Extra-curricular Activities' },
  ];

  return (
    <footer className="relative overflow-hidden bg-[var(--ink-950)] text-white">
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-primary-500/20 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-[#d4a545]/10 blur-3xl" />
      <div className="section-padding relative">
        <div className="container-custom">
          <div className="grid gap-10 border-b border-white/10 pb-12 lg:grid-cols-[1.15fr_0.75fr_0.75fr_1fr]">
            <div className="space-y-6">
              <span className="eyebrow text-white/75 before:bg-white/30">H.P. Bright Academy</span>
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white">
                  <img 
                    src={import.meta.env.BASE_URL + "images/Logo.png"} 
                    alt="H.P. Bright Academy Logo" 
                    className="h-10 w-10 object-contain"
                  />
                </div>
                <div>
                  <h3 className="font-display text-4xl leading-none text-white">H.P. Bright Academy</h3>
                  <p className="mt-2 text-sm uppercase tracking-[0.18em] text-white/60" style={{ fontFamily: "'Oswald', sans-serif" }}>
                    Preschool to Class 8
                  </p>
                </div>
              </div>
              <p className="max-w-md text-base leading-8 text-white/72">
                A thoughtful campus in Varanasi where children learn with discipline, curiosity, and warmth. The school experience is built to feel personal, calm, and ambitious from the first day onward.
              </p>
              <div className="flex flex-wrap gap-3">
                <a 
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.facebook.com/hpbrightacademy/" 
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/14 bg-white/8 transition duration-200 hover:bg-white/14"
                  aria-label="Facebook"
                >
                  <FaFacebookF size={16} />
                </a>
                <a 
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/14 bg-white/8 transition duration-200 hover:bg-white/14"
                  aria-label="Instagram"
                >
                  <FaInstagram size={16} />
                </a>
                <a 
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/14 bg-white/8 transition duration-200 hover:bg-white/14"
                  aria-label="YouTube"
                >
                  <FaYoutube size={16} />
                </a>
                <a 
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/14 bg-white/8 transition duration-200 hover:bg-white/14"
                  aria-label="Twitter"
                >
                  <FaTwitter size={16} />
                </a>
              </div>
            </div>

            <div>
              <h4 className="mb-6 text-sm uppercase tracking-[0.2em] text-white/60" style={{ fontFamily: "'Oswald', sans-serif" }}>Explore</h4>
              <nav className="space-y-4">
                {quickLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="link-underline block w-fit text-white/76 transition-colors duration-200 hover:text-white"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            <div>
              <h4 className="mb-6 text-sm uppercase tracking-[0.2em] text-white/60" style={{ fontFamily: "'Oswald', sans-serif" }}>Programs</h4>
              <nav className="space-y-4">
                {academicLinks.map((link, index) => (
                  <a
                    key={index}
                    href="/academics"
                    className="link-underline block w-fit text-white/76 transition-colors duration-200 hover:text-white"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            <div>
              <h4 className="mb-6 text-sm uppercase tracking-[0.2em] text-white/60" style={{ fontFamily: "'Oswald', sans-serif" }}>Contact</h4>
              <div className="space-y-5">
                <div className="flex items-start gap-3 text-white/76">
                  <FaMapMarkerAlt className="mt-1 flex-shrink-0 text-[#f5d48d]" />
                  <div>
                    <p>
                      Chamao Shivpur Tarna, Ganeshpur,<br />
                      Varanasi, Uttar Pradesh 221105
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <FaPhone className="text-[#f5d48d]" />
                  <a 
                    href="tel:+918400308200" 
                    className="text-white/76 transition-colors duration-200 hover:text-white"
                  >
                    +91 8400308200
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <FaEnvelope className="text-[#f5d48d]" />
                  <a 
                    href="mailto:info@hpbrightacademy.in" 
                    className="text-white/76 transition-colors duration-200 hover:text-white"
                  >
                    info@hpbrightacademy.in
                  </a>
                </div>
                <div className="pt-3">
                  <a
                    href="https://wa.me/918400308200"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary"
                  >
                    <FaWhatsapp />
                    <span>WhatsApp Us</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative border-t border-white/10 py-6">
        <div className="container-custom">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
            <p className="text-sm text-white/50">
              © {currentYear} H.P. Bright Academy. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-white/50">
              <a href="#" className="transition-colors duration-200 hover:text-white/80">
                Privacy Policy
              </a>
              <a href="#" className="transition-colors duration-200 hover:text-white/80">
                Terms of Service
              </a>
              <a href="#" className="transition-colors duration-200 hover:text-white/80">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
