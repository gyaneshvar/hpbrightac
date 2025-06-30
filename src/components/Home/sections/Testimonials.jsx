import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight, FaUser } from 'react-icons/fa';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Mrs. Priya Sharma',
      role: 'Parent of Aarav (Class 5)',
      content: 'H.P. Bright Academy has been a wonderful choice for our son Aarav. The teachers are incredibly caring and dedicated. The individual attention my child receives has helped him grow both academically and personally. The school truly feels like a second home.',
      rating: 5    },
    {
      id: 2,
      name: 'Mr. Rajesh Kumar',
      role: 'Parent of Ananya (Class 7)',
      content: 'The holistic approach to education at H.P. Bright Academy is commendable. My daughter has not only excelled in academics but also developed confidence in various co-curricular activities. The faculty is experienced and truly cares about each child\'s development.',
      rating: 5    },
    {
      id: 3,
      name: 'Mrs. Sunita Gupta',
      role: 'Parent of Krish (Preschool)',
      content: 'As a working mother, I was concerned about sending my 4-year-old to school. But H.P. Bright Academy has exceeded all my expectations. The nurturing environment and play-based learning approach has made my son excited about going to school every day.',
      rating: 5,
         },
    {
      id: 4,
      name: 'Mr. Vikram Singh',
      role: 'Parent of Ishika (Class 6)',
      content: 'The modern facilities and technology integration at H.P. Bright Academy is impressive. My daughter enjoys the interactive learning sessions, and the small class sizes ensure she gets the attention she needs. The school has created a perfect balance between academics and values.',
      rating: 5,
          },
    {
      id: 5,
      name: 'Mrs. Kavita Mishra',
      role: 'Parent of Arjun (Class 8)',
      content: 'H.P. Bright Academy has prepared my son well for his transition to high school. The focus on character building and moral values alongside academic excellence is what sets this school apart. The teachers have been like mentors to our child.',
      rating: 5,
         },
    {
      id: 6,
      name: 'Aditya Verma',
      role: 'Student (Class 8)',
      content: 'I have been studying at H.P. Bright Academy for 5 years now, and it has been an amazing journey. The teachers make learning fun and interesting. I have made great friends and participated in many activities that have helped me grow as a person.',
      rating: 5,
         }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <FaStar
        key={i}
        className={`${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <section className="section-padding bg-gradient-to-br from-primary-600 to-blue-700 text-white overflow-hidden">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-5xl font-bold font-display mb-6" style={{ fontFamily: "'Oswald', sans-serif" }}>
            What Our <span className="text-yellow-300">Community</span> Says
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Don't just take our word for it. Hear from the parents and students 
            who are part of the H.P. Bright Academy family.
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="relative">
          <div className="flex items-center justify-center">
            <div className="max-w-4xl mx-auto">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white/10 backdrop-blur-md rounded-lg p-8 lg:p-12 text-center"
                >
                  <FaQuoteLeft className="text-4xl text-yellow-300 mx-auto mb-6" />
                  
                  <blockquote className="text-lg lg:text-xl leading-relaxed mb-8 italic">
                    "{testimonials[currentIndex].content}"
                  </blockquote>
                  
                  <div className="flex justify-center mb-6">
                    {renderStars(testimonials[currentIndex].rating)}
                  </div>
                  
                  <div className="flex items-center justify-center space-x-4">
                    <img
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-white/20"
                    />
                    <div>
                      <h4 className="text-xl font-bold font-display" style={{ fontFamily: "'Oswald', sans-serif" }}>
                        {testimonials[currentIndex].name}
                      </h4>
                      <p className="text-blue-200">
                        {testimonials[currentIndex].role}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrev}
            className="absolute left-4 lg:left-8 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-md text-white rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-200"
          >
            <FaChevronLeft />
          </button>
          
          <button
            onClick={goToNext}
            className="absolute right-4 lg:right-8 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-md text-white rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-200"
          >
            <FaChevronRight />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center space-x-2 mt-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentIndex ? 'bg-yellow-300 scale-125' : 'bg-white/40'
              }`}
            />
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-8"
        >
          <div className="text-center">
            <div className="text-4xl font-bold text-yellow-300 mb-2" style={{ fontFamily: "'Oswald', sans-serif" }}>98%</div>
            <div className="text-blue-100" style={{ fontFamily: "'Oswald', sans-serif" }}>Parent Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-yellow-300 mb-2" style={{ fontFamily: "'Oswald', sans-serif" }}>500+</div>
            <div className="text-blue-100" style={{ fontFamily: "'Oswald', sans-serif" }}>Happy Families</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-yellow-300 mb-2" style={{ fontFamily: "'Oswald', sans-serif" }}>5+</div>
            <div className="text-blue-100" style={{ fontFamily: "'Oswald', sans-serif" }}>Years of Trust</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-yellow-300 mb-2" style={{ fontFamily: "'Oswald', sans-serif" }}>100%</div>
            <div className="text-blue-100" style={{ fontFamily: "'Oswald', sans-serif" }}>Dedicated Care</div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-bold mb-4 font-display" style={{ fontFamily: "'Oswald', sans-serif" }}>
            Ready to Join Our School Family?
          </h3>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Experience the difference of quality education with individual attention 
            and value-based learning at H.P. Bright Academy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
              Schedule a Visit
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-3 px-8 rounded-lg transition-all duration-200">
              Download Prospectus
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
