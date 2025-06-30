import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ImageSlideshow from '../ImageSlideshow/ImageSlideshow';

const EnhancedGallery = () => {
  const [activeCategory, setActiveCategory] = useState('Campus');

  const categories = [
    {
      name: 'Campus',
      description: 'Our beautiful and safe campus facilities',
      maxImages: 2,
      color: 'bg-blue-500'
    },
    {
      name: 'Activities',
      description: 'Engaging learning activities and play time',
      maxImages: 6,
      color: 'bg-green-500'
    },
    {
      name: 'Events',
      description: 'Special celebrations and events',
      maxImages: 2,
      color: 'bg-purple-500'
    },
    {
      name: 'Achievements',
      description: 'Student accomplishments and awards',
      maxImages: 2,
      color: 'bg-yellow-500'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            School Gallery
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our vibrant school life through pictures that capture the essence of learning, growth, and joy at H.P. Bright Academy
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-8"
        >
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => setActiveCategory(category.name)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.name
                  ? `${category.color} text-white shadow-lg transform scale-105`
                  : 'bg-white text-gray-600 hover:bg-gray-100 shadow-md'
              }`}
            >
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* Active Category Description */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="text-center mb-8"
        >
          <p className="text-lg text-gray-600">
            {categories.find(cat => cat.name === activeCategory)?.description}
          </p>
        </motion.div>

        {/* Slideshow */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <ImageSlideshow
            category={activeCategory}
            maxImages={categories.find(cat => cat.name === activeCategory)?.maxImages || 6}
            autoPlay={true}
            interval={4000}
            showControls={true}
            className="shadow-2xl"
          />
        </motion.div>

        {/* Category Grid - Show all categories in smaller slideshows */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16"
        >
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
              onClick={() => setActiveCategory(category.name)}
            >
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                {/* Mini Slideshow */}
                <div className="h-48">
                  <ImageSlideshow
                    category={category.name}
                    maxImages={category.maxImages}
                    autoPlay={activeCategory !== category.name}
                    interval={5000 + index * 1000} // Stagger intervals
                    showControls={false}
                    className="h-full"
                  />
                </div>
                
                {/* Category Info */}
                <div className="p-4">
                  <h3 className="font-bold text-lg text-gray-800 mb-2">
                    {category.name}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {category.description}
                  </p>
                  <div className={`inline-block px-3 py-1 rounded-full text-xs text-white mt-3 ${category.color}`}>
                    View Gallery
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default EnhancedGallery;
