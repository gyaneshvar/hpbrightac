import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaChalkboardTeacher, 
  FaBook, 
  FaDesktop, 
  FaFlask, 
  FaFootballBall, 
  FaBus,
  FaWifi,
  FaCamera,
  FaMusic,
  FaPalette,
  FaHeart,
  FaShieldAlt
} from 'react-icons/fa';

const Facilities = () => {
  const facilities = [
    {
      icon: FaChalkboardTeacher,
      title: 'Smart Classrooms',
      description: 'Interactive whiteboards and digital learning tools for enhanced education experience.',
      image: import.meta.env.BASE_URL + 'images/activities-3.jpg'
    },
    {
      icon: FaBook,
      title: 'Well-Stocked Library',
      description: 'Extensive collection of books, magazines, and digital resources for all age groups.',
      image: import.meta.env.BASE_URL + 'images/campus-2.jpg'
    },
    {
      icon: FaDesktop,
      title: 'Computer Laboratory',
      description: 'Modern computers with latest software for technology education and digital literacy.',
      image: import.meta.env.BASE_URL + 'images/achievements-1.jpg'
    },
    {
      icon: FaFlask,
      title: 'Science Laboratory',
      description: 'Fully equipped labs for hands-on experiments and scientific exploration.',
      image: import.meta.env.BASE_URL + 'images/activities-4.jpg'
    },
    {
      icon: FaFootballBall,
      title: 'Sports Playground',
      description: 'Large playground with facilities for various sports and physical activities.',
      image: import.meta.env.BASE_URL + 'images/events-2.jpg'
    },
    {
      icon: FaBus,
      title: 'Safe Transportation',
      description: 'GPS-tracked buses with trained drivers and attendants for student safety.',
      image: import.meta.env.BASE_URL + 'images/activities-5.jpg'
    },
    {
      icon: FaMusic,
      title: 'Music Room',
      description: 'Dedicated space for music education with various instruments and sound equipment.',
      image: import.meta.env.BASE_URL + 'images/activities-6.jpg'
    },
    {
      icon: FaPalette,
      title: 'Art Studio',
      description: 'Creative space for arts and crafts activities to nurture artistic talents.',
      image: import.meta.env.BASE_URL + 'images/achievements-2.jpg'
    },
    {
      icon: FaWifi,
      title: 'High-Speed Wi-Fi',
      description: 'Campus-wide internet connectivity for digital learning and research.',
      image: import.meta.env.BASE_URL + 'images/events-1.jpg'
    },
    {
      icon: FaCamera,
      title: 'CCTV Security',
      description: '24/7 surveillance system ensuring complete safety and security of students.',
      image: import.meta.env.BASE_URL + 'images/activities-1.jpg'
    },
    {
      icon: FaHeart,
      title: 'Medical Room',
      description: 'First aid facility with trained staff for immediate medical attention.',
      image: import.meta.env.BASE_URL + 'images/activities-2.jpg'
    },
    {
      icon: FaShieldAlt,
      title: 'Secure Campus',
      description: 'Gated campus with security personnel and controlled access for safety.',
      image: import.meta.env.BASE_URL + 'images/campus-1.jpg'
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-primary">
            Our <span className="text-primary-600">Facilities</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            State-of-the-art infrastructure designed to provide the best learning 
            environment for our students' overall development and growth.
          </p>
        </motion.div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((facility, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-lg overflow-hidden card-hover group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={facility.image}
                  alt={facility.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300"></div>
                <div className="absolute top-4 left-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                    <facility.icon className="text-primary-600 text-xl" />
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 font-display">
                  {facility.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {facility.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-primary-600 to-blue-600 rounded-lg p-8 lg:p-12 text-white"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4 font-display">
              Creating the Perfect Learning Environment
            </h3>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Every facility at H.P. Bright Academy is designed with our students' 
              safety, comfort, and educational needs in mind.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaShieldAlt className="text-2xl" />
              </div>
              <h4 className="text-xl font-bold mb-2 font-display">Safety First</h4>
              <p className="text-blue-100">
                Comprehensive safety measures including CCTV monitoring, 
                secure entry points, and trained security personnel.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaChalkboardTeacher className="text-2xl" />
              </div>
              <h4 className="text-xl font-bold mb-2 font-display">Modern Learning</h4>
              <p className="text-blue-100">
                Technology-enabled classrooms with interactive learning 
                tools for an enhanced educational experience.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaHeart className="text-2xl" />
              </div>
              <h4 className="text-xl font-bold mb-2 font-display">Caring Environment</h4>
              <p className="text-blue-100">
                Nurturing spaces designed to make every child feel 
                comfortable, valued, and inspired to learn.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Facilities;
