import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaBaby, 
  FaChild, 
  FaUserGraduate, 
  FaBook, 
  FaFlask, 
  FaCalculator, 
  FaPalette, 
  FaMusic,
  FaRunning,
  FaGlobe
} from 'react-icons/fa';

const Academics = () => {
  const gradelevels = [
    {
      icon: FaBaby,
      title: 'Preschool',
      age: 'Ages 3-5',
      description: 'Foundation for lifelong learning through play-based activities, social skills development, and basic literacy.',
      features: ['Play-based Learning', 'Motor Skills Development', 'Social Interaction', 'Basic Concepts']
    },
    {
      icon: FaChild,
      title: 'Primary (Classes 1-5)',
      age: 'Ages 6-10',
      description: 'Building strong academic foundations with focus on core subjects and developing critical thinking skills.',
      features: ['Core Subjects', 'Creative Arts', 'Physical Education', 'Character Building']
    },
    {
      icon: FaUserGraduate,
      title: 'Middle School (Classes 6-8)',
      age: 'Ages 11-13',
      description: 'Advanced learning with specialized subjects, preparing students for higher secondary education.',
      features: ['Advanced Curriculum', 'Science Labs', 'Project Work', 'Leadership Skills']
    }
  ];

  const subjects = [
    { icon: FaBook, name: 'English Language & Literature', color: 'bg-blue-500' },
    { icon: FaCalculator, name: 'Mathematics', color: 'bg-green-500' },
    { icon: FaFlask, name: 'Science', color: 'bg-purple-500' },
    { icon: FaGlobe, name: 'Social Studies', color: 'bg-orange-500' },
    { icon: FaPalette, name: 'Arts & Crafts', color: 'bg-pink-500' },
    { icon: FaMusic, name: 'Music', color: 'bg-indigo-500' },
    { icon: FaRunning, name: 'Physical Education', color: 'bg-red-500' },
    { icon: FaBook, name: 'Hindi', color: 'bg-yellow-500' }
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
            Our <span className="text-primary-600">Academic Programs</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive education designed to nurture intellectual curiosity, 
            creativity, and character development at every stage of learning.
          </p>
        </motion.div>

        {/* Grade Levels */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {gradelevels.map((level, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary-50 to-blue-50 rounded-lg p-8 card-hover"
            >
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <level.icon className="text-2xl text-white" />
                </div>
                <h3 className="text-2xl font-bold text-primary-800 font-display">{level.title}</h3>
                <p className="text-primary-600 font-medium">{level.age}</p>
              </div>
              
              <p className="text-gray-700 mb-6 text-center">{level.description}</p>
              
              <div className="space-y-2">
                {level.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Subject Offerings */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12 font-display">
            Subject Offerings
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {subjects.map((subject, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-6 shadow-md card-hover text-center border border-gray-100"
              >
                <div className={`w-12 h-12 ${subject.color} rounded-lg flex items-center justify-center mx-auto mb-4`}>
                  <subject.icon className="text-white text-xl" />
                </div>
                <h4 className="font-semibold text-gray-900 text-sm">{subject.name}</h4>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Teaching Methodology */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gray-50 rounded-lg p-8 lg:p-12"
        >
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12 font-display">
            Our Teaching Methodology
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaBook className="text-white text-2xl" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3 font-display">Interactive Learning</h4>
              <p className="text-gray-600">
                Engaging, hands-on activities that make learning fun and memorable for all students.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaChild className="text-white text-2xl" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3 font-display">Individual Attention</h4>
              <p className="text-gray-600">
                Small class sizes ensure every child receives personalized attention and support.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaPalette className="text-white text-2xl" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3 font-display">Creative Expression</h4>
              <p className="text-gray-600">
                Encouraging creativity through arts, music, and various co-curricular activities.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Academics;
