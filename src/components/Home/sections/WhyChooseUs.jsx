import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaChalkboardTeacher, 
  FaUsers, 
  FaEye, 
  FaBuilding, 
  FaHeart, 
  FaHandshake,
  FaStar,
  FaShieldAlt
} from 'react-icons/fa';

const WhyChooseUs = () => {
  const features = [
    {
      icon: FaChalkboardTeacher,
      title: 'Experienced Faculty',
      description: 'Our qualified and dedicated teachers bring years of experience and passion for education.',
      color: 'bg-blue-500'
    },
    {
      icon: FaUsers,
      title: 'Small Class Sizes',
      description: 'Limited students per class ensure personalized attention and better learning outcomes.',
      color: 'bg-green-500'
    },
    {
      icon: FaEye,
      title: 'Individual Attention',
      description: 'Every child is unique, and we tailor our approach to meet each student\'s needs.',
      color: 'bg-purple-500'
    },
    {
      icon: FaBuilding,
      title: 'Modern Facilities',
      description: 'State-of-the-art infrastructure with smart classrooms, labs, and recreational areas.',
      color: 'bg-orange-500'
    },
    {
      icon: FaHeart,
      title: 'Value-Based Education',
      description: 'We instill moral values, ethics, and character development alongside academic excellence.',
      color: 'bg-red-500'
    },
    {
      icon: FaHandshake,
      title: 'Parent-Teacher Collaboration',
      description: 'Regular meetings and open communication ensure parents are involved in their child\'s progress.',
      color: 'bg-indigo-500'
    },
    {
      icon: FaStar,
      title: 'Holistic Development',
      description: 'Focus on academic, physical, emotional, and social development of every child.',
      color: 'bg-yellow-500'
    },
    {
      icon: FaShieldAlt,
      title: 'Safe Environment',
      description: 'Secure campus with CCTV monitoring, trained staff, and safety protocols in place.',
      color: 'bg-pink-500'
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-primary-50 to-blue-50">
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
            Why Choose <span className="text-primary-600">H.P. Bright Academy?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide an exceptional educational experience that goes beyond traditional learning, 
            preparing students for success in an ever-changing world.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg p-6 shadow-lg card-hover text-center group"
            >
              <div className={`w-16 h-16 ${feature.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="text-white text-2xl" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3 font-display">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Key Messages */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-lg p-8 lg:p-12 shadow-lg"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6 font-display">
                Our Commitment to Excellence
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <FaStar className="text-white text-sm" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Shaping Tomorrow's Leaders Today</h4>
                    <p className="text-gray-600">We prepare students with the skills and values needed for future success.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-secondary-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <FaHeart className="text-white text-sm" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Where Learning Meets Fun</h4>
                    <p className="text-gray-600">Our innovative teaching methods make learning enjoyable and effective.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <FaShieldAlt className="text-white text-sm" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Safe and Nurturing Environment</h4>
                    <p className="text-gray-600">A secure campus where children feel safe, supported, and valued.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <FaEye className="text-white text-sm" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Individual Attention for Every Child</h4>
                    <p className="text-gray-600">Small class sizes ensure personalized learning and growth opportunities.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <img
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800&auto=format&fit=crop"
                alt="Happy Students"
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
              
              <div className="bg-primary-50 p-6 rounded-lg">
                <h4 className="text-xl font-bold text-primary-800 mb-3 font-display">
                  Preparing Students for Future Success
                </h4>
                <p className="text-gray-700">
                  Our comprehensive approach to education ensures that every graduate leaves 
                  with the knowledge, skills, and confidence needed to excel in their next 
                  educational journey and beyond.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
