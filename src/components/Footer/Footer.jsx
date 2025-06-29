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
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* School Information */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12">
                  <img 
                    src={import.meta.env.BASE_URL + "images/Logo.png"} 
                    alt="H.P. Bright Academy Logo" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-display">H.P. Bright Academy</h3>
                  <p className="text-gray-400 text-sm">Preschool to Class 8</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Nurturing young minds with quality education, individual attention, and 
                value-based learning in a safe and caring environment.
              </p>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-200"
                  aria-label="Facebook"
                >
                  <FaFacebookF size={16} />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors duration-200"
                  aria-label="Twitter"
                >
                  <FaTwitter size={16} />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors duration-200"
                  aria-label="Instagram"
                >
                  <FaInstagram size={16} />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors duration-200"
                  aria-label="YouTube"
                >
                  <FaYoutube size={16} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold font-display mb-6">Quick Links</h4>
              <nav className="space-y-3">
                {quickLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="block text-gray-300 hover:text-primary-400 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Academic Programs */}
            <div>
              <h4 className="text-lg font-semibold font-display mb-6">Academic Programs</h4>
              <nav className="space-y-3">
                {academicLinks.map((link, index) => (
                  <a
                    key={index}
                    href="#"
                    className="block text-gray-300 hover:text-primary-400 transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            {/* Contact Information */}
            <div>
              <h4 className="text-lg font-semibold font-display mb-6">Contact Info</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <FaMapMarkerAlt className="text-primary-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300">
                      Chamao Shivpur Tarna, Ganeshpur,<br />
                      Varanasi, Uttar Pradesh 221105
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <FaPhone className="text-primary-400" />
                  <a 
                    href="tel:+918400308200" 
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-200"
                  >
                    +91 8400308200
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <FaEnvelope className="text-primary-400" />
                  <a 
                    href="mailto:info@hpbrightacademy.edu.in" 
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-200"
                  >
                    info@hpbrightacademy.edu.in
                  </a>
                </div>
                <div className="pt-4">
                  <a
                    href="https://wa.me/918400308200"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors duration-200"
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

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-6">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} H.P. Bright Academy. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-primary-400 transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-primary-400 transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="hover:text-primary-400 transition-colors duration-200">
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
