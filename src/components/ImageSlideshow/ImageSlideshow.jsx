import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight, FaPlay, FaPause } from 'react-icons/fa';

const ImageSlideshow = ({ 
  category, 
  maxImages = 6, 
  autoPlay = true, 
  interval = 3000,
  showControls = true,
  className = ""
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [images, setImages] = useState([]);
  const [loadedImages, setLoadedImages] = useState({});

  // Generate image paths based on category and number pattern (descending)
  useEffect(() => {
    const generateImages = () => {
      const imageArray = [];
      // Start from maxImages and go down to 1 (5.jpg, 4.jpg, 3.jpg, 2.jpg, 1.jpg)
      for (let i = maxImages; i >= 1; i--) {
        const imagePath = `${import.meta.env.BASE_URL}images/${category}/${i}.jpg`;
        imageArray.push({
          src: imagePath,
          alt: `${category} ${i}`,
          number: i
        });
      }
      return imageArray;
    };

    setImages(generateImages());
  }, [category, maxImages]);

  // Preload images
  useEffect(() => {
    images.forEach((image, index) => {
      const img = new Image();
      img.onload = () => {
        setLoadedImages(prev => ({ ...prev, [index]: true }));
      };
      img.onerror = () => {
        setLoadedImages(prev => ({ ...prev, [index]: false }));
      };
      img.src = image.src;
    });
  }, [images]);

  // Auto-play functionality
  useEffect(() => {
    if (!isPlaying || images.length === 0) return;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const validImages = images.filter((_, index) => loadedImages[index] !== false);
        return (prevIndex + 1) % validImages.length;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [isPlaying, interval, images.length, loadedImages]);

  // Filter out failed images
  const validImages = images.filter((_, index) => loadedImages[index] !== false);

  if (validImages.length === 0) {
    return (
      <div className={`flex items-center justify-center h-64 bg-gray-100 rounded-lg ${className}`}>
        <p className="text-gray-500">Loading {category} images...</p>
      </div>
    );
  }

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % validImages.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? validImages.length - 1 : prevIndex - 1
    );
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className={`relative w-full h-64 md:h-80 lg:h-96 overflow-hidden rounded-lg shadow-lg ${className}`}>
      {/* Main Image Display */}
      <div className="relative w-full h-full">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentIndex}
            src={validImages[currentIndex]?.src}
            alt={validImages[currentIndex]?.alt}
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          />
        </AnimatePresence>

        {/* Overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

        {/* Category Label */}
        <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
          {category}
        </div>

        {/* Image Counter */}
        <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
          {currentIndex + 1} / {validImages.length}
        </div>

        {/* Controls */}
        {showControls && (
          <>
            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200"
            >
              <FaChevronLeft size={16} />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200"
            >
              <FaChevronRight size={16} />
            </button>

            {/* Play/Pause Button */}
            <button
              onClick={togglePlayPause}
              className="absolute bottom-4 right-4 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200"
            >
              {isPlaying ? <FaPause size={14} /> : <FaPlay size={14} />}
            </button>
          </>
        )}
      </div>

      {/* Thumbnail Navigation */}
      {validImages.length > 1 && (
        <div className="absolute bottom-4 left-4 flex space-x-2">
          {validImages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-200 ${
                index === currentIndex 
                  ? 'bg-white' 
                  : 'bg-white/50 hover:bg-white/75'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageSlideshow;
