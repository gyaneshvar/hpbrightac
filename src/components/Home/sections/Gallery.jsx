import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const navigate = useNavigate();

  const categories = [
    { id: 'all', label: 'All Photos' },
    { id: 'campus', label: 'Campus' },
    { id: 'events', label: 'Events' },
    { id: 'activities', label: 'Activities' },
    { id: 'achievements', label: 'Achievements' }
  ];

  const galleryImages = [
    {
      id: 1,
      src: import.meta.env.BASE_URL + 'images/campus-1.jpg',
      alt: 'H.P. Bright Academy Campus',
      category: 'campus',
      title: 'Our Beautiful Campus'
    },
    {
      id: 2,
      src: import.meta.env.BASE_URL + 'images/activities-1.jpg',
      alt: 'Students in Classroom',
      category: 'activities',
      title: 'Interactive Learning Session'
    },
    {
      id: 3,
      src: import.meta.env.BASE_URL + 'images/activities-2.jpg',
      alt: 'School Activities',
      category: 'activities',
      title: 'Learning Activities'
    },
    {
      id: 4,
      src: import.meta.env.BASE_URL + 'images/events-1.jpg',
      alt: 'School Events',
      category: 'events',
      title: 'Special Events'
    },
    {
      id: 5,
      src: import.meta.env.BASE_URL + 'images/activities-3.jpg',
      alt: 'Student Activities',
      category: 'activities',
      title: 'Creative Learning'
    },
    {
      id: 6,
      src: import.meta.env.BASE_URL + 'images/campus-2.jpg',
      alt: 'Campus Facilities',
      category: 'campus',
      title: 'Modern Facilities'
    },
    {
      id: 7,
      src: import.meta.env.BASE_URL + 'images/achievements-1.jpg',
      alt: 'Student Achievements',
      category: 'achievements',
      title: 'Excellence in Education'
    },
    {
      id: 8,
      src: import.meta.env.BASE_URL + 'images/activities-4.jpg',
      alt: 'Learning Environment',
      category: 'activities',
      title: 'Nurturing Environment'
    },
    {
      id: 9,
      src: import.meta.env.BASE_URL + 'images/events-2.jpg',
      alt: 'School Life',
      category: 'events',
      title: 'Vibrant School Life'
    },
    {
      id: 10,
      src: import.meta.env.BASE_URL + 'images/activities-5.jpg',
      alt: 'Educational Programs',
      category: 'activities',
      title: 'Quality Education'
    },
    {
      id: 11,
      src: import.meta.env.BASE_URL + 'images/activities-6.jpg',
      alt: 'Student Development',
      category: 'activities',
      title: 'Holistic Development'
    },
    {
      id: 12,
      src: import.meta.env.BASE_URL + 'images/achievements-2.jpg',
      alt: 'School Community',
      category: 'achievements',
      title: 'Strong Community'
    }
  ];

  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  const openLightbox = (image, index) => {
    setSelectedImage(image);
    setSelectedIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateLightbox = (direction) => {
    const newIndex = direction === 'next' 
      ? (selectedIndex + 1) % filteredImages.length
      : (selectedIndex - 1 + filteredImages.length) % filteredImages.length;
    
    setSelectedIndex(newIndex);
    setSelectedImage(filteredImages[newIndex]);
  };

  return (
    <section id="gallery" className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-primary" style={{ fontFamily: "'Oswald', sans-serif" }}>
            Our <span className="text-blue-600">Gallery</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Take a visual journey through our vibrant school life, from daily activities 
            to special events and achievements.
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 shadow-md'
              }`}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence>
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5 }}
                className="group cursor-pointer"
                onClick={() => openLightbox(image, index)}
              >
                <div className="relative overflow-hidden rounded-lg shadow-md bg-white">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center text-white">
                      <h4 className="font-semibold text-lg mb-2">{image.title}</h4>
                      <p className="text-sm">Click to view</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 mb-6">
            Want to see more of our school life and activities?
          </p>
          <button 
            onClick={() => navigate('/contact')}
            className="btn-primary"
          >
            Schedule a Campus Visit
          </button>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative max-w-4xl max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
              />
              
              {/* Title */}
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white p-4 rounded-b-lg">
                <h3 className="text-lg font-semibold">{selectedImage.title}</h3>
              </div>
              
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 w-10 h-10 bg-black bg-opacity-50 text-white rounded-full flex items-center justify-center hover:bg-opacity-70 transition-all duration-200"
              >
                <FaTimes />
              </button>
              
              {/* Navigation Buttons */}
              <button
                onClick={() => navigateLightbox('prev')}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black bg-opacity-50 text-white rounded-full flex items-center justify-center hover:bg-opacity-70 transition-all duration-200"
              >
                <FaChevronLeft />
              </button>
              
              <button
                onClick={() => navigateLightbox('next')}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black bg-opacity-50 text-white rounded-full flex items-center justify-center hover:bg-opacity-70 transition-all duration-200"
              >
                <FaChevronRight />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
