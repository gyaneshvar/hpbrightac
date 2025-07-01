import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
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
  FaGlobe,
  FaLaptopCode,
  FaLanguage,
  FaChevronDown,
  FaChevronUp,
  FaDownload,
  FaCalendarAlt,
  FaUsers
} from 'react-icons/fa';

const Academics = () => {
  const [expandedLevel, setExpandedLevel] = useState(null);
  const navigate = useNavigate();

  const toggleLevel = (levelIndex) => {
    setExpandedLevel(expandedLevel === levelIndex ? null : levelIndex);
  };

  const academicLevels = [
    {
      icon: FaBaby,
      title: 'Preschool Program',
      age: 'Ages 3-5',
      description: 'Foundation for lifelong learning through play-based activities and social development.',
      curriculum: [
        'Language and Communication Skills',
        'Basic Mathematics Concepts',
        'Creative Arts and Crafts',
        'Physical Development Activities',
        'Social and Emotional Learning',
        'Nature Exploration',
        'Music and Movement',
        'Story Time and Early Reading'
      ],
      methodology: [
        'Play-based learning approach',
        'Montessori-inspired activities',
        'Sensory exploration',
        'Peer interaction and collaboration',
        'Individual attention and care'
      ],
      outcomes: [
        'School readiness skills',
        'Basic social skills',
        'Enhanced creativity',
        'Improved motor skills',
        'Foundation for formal learning'
      ]
    },
    {
      icon: FaChild,
      title: 'Primary Section',
      age: 'Classes 1-5 (Ages 6-10)',
      description: 'Building strong academic foundations with focus on core subjects and skill development.',
      curriculum: [
        'English Language & Literature',
        'Mathematics',
        'Environmental Studies',
        'Hindi Language',
        'Computer Applications',
        'Physical Education',
        'Art & Craft',
        'Music & Dance'
      ],
      methodology: [
        'Activity-based learning',
        'Interactive teaching methods',
        'Project-based assignments',
        'Group learning activities',
        'Regular assessments and feedback'
      ],
      outcomes: [
        'Strong foundation in core subjects',
        'Critical thinking skills',
        'Creative expression abilities',
        'Collaborative learning skills',
        'Digital literacy basics'
      ]
    },
    {
      icon: FaUserGraduate,
      title: 'Middle School',
      age: 'Classes 6-8 (Ages 11-13)',
      description: 'Advanced learning with specialized subjects, preparing students for higher education.',
      curriculum: [
        'English Language & Literature',
        'Mathematics',
        'Science (Physics, Chemistry, Biology)',
        'Social Studies (History, Geography, Civics)',
        'Hindi Language',
        'Computer Science',
        'Physical Education',
        'Art & Music'
      ],
      methodology: [
        'Subject-specific teaching',
        'Laboratory-based learning',
        'Research projects',
        'Presentations and seminars',
        'Competitive exam preparation'
      ],
      outcomes: [
        'Advanced subject knowledge',
        'Research and analytical skills',
        'Leadership qualities',
        'Exam preparation readiness',
        'Career awareness'
      ]
    }
  ];

  const subjects = [
    { icon: FaBook, name: 'English Language & Literature', description: 'Comprehensive language skills, literature appreciation, and communication development.' },
    { icon: FaCalculator, name: 'Mathematics', description: 'Logical reasoning, problem-solving, and mathematical concepts from basic to advanced levels.' },
    { icon: FaFlask, name: 'Science', description: 'Hands-on experiments, scientific inquiry, and understanding of natural phenomena.' },
    { icon: FaGlobe, name: 'Social Studies', description: 'History, geography, civics, and understanding of society and culture.' },
    { icon: FaLanguage, name: 'Hindi Language', description: 'Regional language proficiency, literature, and cultural understanding.' },
    { icon: FaLaptopCode, name: 'Computer Applications', description: 'Digital literacy, basic programming, and technology skills.' },
    { icon: FaPalette, name: 'Art & Craft', description: 'Creative expression, artistic skills, and aesthetic development.' },
    { icon: FaMusic, name: 'Music & Dance', description: 'Musical appreciation, rhythm, and cultural arts education.' },
    { icon: FaRunning, name: 'Physical Education', description: 'Physical fitness, sports skills, and healthy lifestyle habits.' }
  ];

  const teachingMethods = [
    {
      title: 'Interactive Learning',
      description: 'Engaging students through discussions, Q&A sessions, and collaborative activities.',
      icon: FaUsers
    },
    {
      title: 'Technology Integration',
      description: 'Smart boards, educational apps, and digital resources enhance learning experience.',
      icon: FaLaptopCode
    },
    {
      title: 'Practical Application',
      description: 'Hands-on experiments, field trips, and real-world problem solving.',
      icon: FaFlask
    },
    {
      title: 'Individual Attention',
      description: 'Small class sizes ensure personalized learning and support for each student.',
      icon: FaChild
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl lg:text-6xl font-bold font-display mb-6">
              Academic <span className="text-yellow-300">Excellence</span>
            </h1>
            <p className="text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto">
              Comprehensive curriculum designed to nurture intellectual growth, 
              creativity, and character development at every level.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Academic Levels */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="heading-primary" style={{ fontFamily: "'Oswald', sans-serif" }}>
              Our <span className="text-primary-600">Academic Programs</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Age-appropriate curriculum designed to meet the developmental needs 
              of students at every stage of their educational journey.
            </p>
          </motion.div>

          <div className="space-y-8">
            {academicLevels.map((level, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden"
              >
                <div 
                  className="p-6 lg:p-8 cursor-pointer"
                  onClick={() => toggleLevel(index)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-6">
                      <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center">
                        <level.icon className="text-2xl text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-primary-800 font-display mb-1">
                          {level.title}
                        </h3>
                        <p className="text-primary-600 font-medium mb-2">{level.age}</p>
                        <p className="text-gray-600">{level.description}</p>
                      </div>
                    </div>
                    <div className="text-primary-600">
                      {expandedLevel === index ? <FaChevronUp size={24} /> : <FaChevronDown size={24} />}
                    </div>
                  </div>
                </div>

                {expandedLevel === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="border-t border-gray-200 bg-gray-50"
                  >
                    <div className="p-6 lg:p-8">
                      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div>
                          <h4 className="text-lg font-bold text-gray-900 mb-4 font-display">Curriculum</h4>
                          <ul className="space-y-2">
                            {level.curriculum.map((item, itemIndex) => (
                              <li key={itemIndex} className="flex items-start space-x-2">
                                <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                                <span className="text-gray-700">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-lg font-bold text-gray-900 mb-4 font-display">Teaching Methodology</h4>
                          <ul className="space-y-2">
                            {level.methodology.map((item, itemIndex) => (
                              <li key={itemIndex} className="flex items-start space-x-2">
                                <div className="w-2 h-2 bg-secondary-600 rounded-full mt-2 flex-shrink-0"></div>
                                <span className="text-gray-700">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-lg font-bold text-gray-900 mb-4 font-display">Learning Outcomes</h4>
                          <ul className="space-y-2">
                            {level.outcomes.map((item, itemIndex) => (
                              <li key={itemIndex} className="flex items-start space-x-2">
                                <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                                <span className="text-gray-700">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Subject Offerings */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="heading-primary" style={{ fontFamily: "'Oswald', sans-serif" }}>
              Subject <span className="text-primary-600">Offerings</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive curriculum covering all essential subjects for 
              well-rounded educational development.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {subjects.map((subject, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-6 shadow-lg card-hover"
              >
                <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <subject.icon className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center font-display">
                  {subject.name}
                </h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  {subject.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching Methodology */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="heading-primary" style={{ fontFamily: "'Oswald', sans-serif" }}>
              Our Teaching <span className="text-primary-600">Methodology</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Innovative teaching approaches that make learning engaging, 
              effective, and enjoyable for every student.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {teachingMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="flex items-start space-x-6 p-6 bg-primary-50 rounded-lg"
              >
                <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <method.icon className="text-white text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 font-display">
                    {method.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {method.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Assessment System */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-primary-600 to-blue-600 rounded-lg p-8 lg:p-12 text-white"
          >
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold mb-4 font-display">Assessment System</h3>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Comprehensive evaluation system that focuses on continuous learning 
                and development rather than just examination scores.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaBook className="text-2xl" />
                </div>
                <h4 className="text-xl font-bold mb-2 font-display">Continuous Assessment</h4>
                <p className="text-blue-100">
                  Regular quizzes, assignments, and projects to track learning progress.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaPalette className="text-2xl" />
                </div>
                <h4 className="text-xl font-bold mb-2 font-display">Holistic Evaluation</h4>
                <p className="text-blue-100">
                  Assessment of academic, creative, and social development aspects.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaUsers className="text-2xl" />
                </div>
                <h4 className="text-xl font-bold mb-2 font-display">Parent Communication</h4>
                <p className="text-blue-100">
                  Regular feedback and parent-teacher meetings for student progress.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Academic Calendar & Resources */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-gray-900 mb-6 font-display">
                Academic Calendar 2024-25
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-md">
                  <FaCalendarAlt className="text-primary-600 text-xl" />
                  <div>
                    <h4 className="font-semibold text-gray-900">First Term</h4>
                    <p className="text-gray-600">April - September 2024</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-md">
                  <FaCalendarAlt className="text-primary-600 text-xl" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Second Term</h4>
                    <p className="text-gray-600">October - March 2025</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-md">
                  <FaCalendarAlt className="text-primary-600 text-xl" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Annual Examinations</h4>
                    <p className="text-gray-600">February - March 2025</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-gray-900 mb-6 font-display">
                Download Resources
              </h3>
              <div className="space-y-4">
                <button className="w-full flex items-center justify-between p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
                  <div className="flex items-center space-x-4">
                    <FaDownload className="text-primary-600 text-xl" />
                    <div className="text-left">
                      <h4 className="font-semibold text-gray-900">Fee Structure</h4>
                      <p className="text-gray-600 text-sm">Academic year 2024-25</p>
                    </div>
                  </div>
                  <div className="text-primary-600">→</div>
                </button>
                
                <button className="w-full flex items-center justify-between p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
                  <div className="flex items-center space-x-4">
                    <FaDownload className="text-primary-600 text-xl" />
                    <div className="text-left">
                      <h4 className="font-semibold text-gray-900">Book List</h4>
                      <p className="text-gray-600 text-sm">All classes book requirements</p>
                    </div>
                  </div>
                  <div className="text-primary-600">→</div>
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Academics;
