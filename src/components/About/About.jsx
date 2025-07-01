import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  FaHistory, 
  FaEye, 
  FaHeart, 
  FaAward, 
  FaGraduationCap,
  FaUsers,
  FaStar,
  FaShieldAlt
} from 'react-icons/fa';

const About = () => {
  const navigate = useNavigate();
  const milestones = [
    { year: '2019', event: 'H.P. Bright Academy Founded' },
    { year: '2020', event: 'First Graduating Class of 50 Students' },
    { year: '2021', event: 'Expanded to Include Middle School' },
    { year: '2022', event: 'Introduced Smart Classroom Technology' },
    { year: '2023', event: 'Achieved Excellence in State Education Awards' },
    { year: '2024', event: 'Successfully Transitioned to Hybrid Learning' },
    { year: '2025', event: 'Celebrated 5 Years of Educational Excellence' }
  ];

  const faculty = [
    {
      name: 'Mrs. Pooja Verma',
      position: 'Principal',
      experience: '12+ years',
      image: '/images/AboutUs/principal.png'
    },
    {
      name: 'Mr. Ravi Prakash Singh',
      position: 'Co-Founder & Head of Academics',
      experience: '15+ years',
      image: '/images/AboutUs/coordinator.png'
    },
    {
      name: 'Mr. Shambhu Narayan',
      position: 'Chairman',
      experience: '35+ years',
      image: '/images/AboutUs/chairman.jpg?q=80&w=300&auto=format&fit=crop'
    }
  ];

  const awards = [
    'Best School for Holistic Education - 2023',
    'Excellence in Value-Based Learning - 2022',
    'Outstanding Academic Performance - 2021',
    'Best Safety Standards Award - 2020',
    'Innovation in Teaching Methods - 2024'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary-600 to-blue-600 text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl lg:text-6xl font-bold font-display mb-6">
              About <span className="text-yellow-300">H.P. Bright Academy</span>
            </h1>
            <p className="text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto">
              Fifteen years of nurturing young minds and shaping future leaders 
              through quality education and value-based learning.
            </p>
          </motion.div>
        </div>
      </section>

      {/* School Story */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="heading-secondary">Our Story</h2>
              <div className="space-y-6 text-body">
                <p className="text-lg">
                  Founded in 2008 with a vision to provide quality education that nurtures both 
                  academic excellence and character development, H.P. Bright Academy has been 
                  a beacon of educational innovation in Varanasi for over 15 years.
                </p>
                <p>
                  What started as a small preschool with just 20 students has grown into a 
                  comprehensive educational institution serving over 500 students from preschool 
                  to Class 8. Our journey has been marked by continuous growth, innovation, and 
                  an unwavering commitment to educational excellence.
                </p>
                <p>
                  We believe that every child is unique and has unlimited potential. Our approach 
                  combines modern teaching methodologies with traditional values, creating an 
                  environment where children not only excel academically but also develop into 
                  responsible, confident, and compassionate individuals.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <img
                src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=400&auto=format&fit=crop"
                alt="School Campus"
                className="w-full h-48 object-cover rounded-lg shadow-md"
              />
              <img
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=400&auto=format&fit=crop"
                alt="Students Learning"
                className="w-full h-48 object-cover rounded-lg shadow-md"
              />
              <img
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=400&auto=format&fit=crop"
                alt="Modern Classroom"
                className="w-full h-48 object-cover rounded-lg shadow-md"
              />
              <img
                src="https://images.unsplash.com/photo-1551698618-1dfe5d97d256?q=80&w=400&auto=format&fit=crop"
                alt="Sports Activities"
                className="w-full h-48 object-cover rounded-lg shadow-md"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
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
              Our <span className="text-primary-600">Core Values</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg p-8 shadow-lg text-center card-hover"
            >
              <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaEye className="text-white text-2xl" />
              </div>
              <h3 className="text-2xl font-bold text-primary-800 mb-4 font-display">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be a leading educational institution that shapes confident, compassionate, 
                and capable global citizens who contribute positively to society while maintaining 
                strong moral values and cultural roots.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg p-8 shadow-lg text-center card-hover"
            >
              <div className="w-16 h-16 bg-secondary-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaHeart className="text-white text-2xl" />
              </div>
              <h3 className="text-2xl font-bold text-primary-800 mb-4 font-display">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To provide quality education that develops critical thinking, creativity, and 
                character while nurturing each child's unique potential in a safe, supportive, 
                and inclusive environment that celebrates diversity and promotes lifelong learning.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg p-8 shadow-lg text-center card-hover"
            >
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaStar className="text-white text-2xl" />
              </div>
              <h3 className="text-2xl font-bold text-primary-800 mb-4 font-display">Our Values</h3>
              <ul className="text-gray-600 leading-relaxed text-left space-y-2">
                <li>• Excellence in Education</li>
                <li>• Integrity and Honesty</li>
                <li>• Respect and Inclusivity</li>
                <li>• Innovation and Creativity</li>
                <li>• Compassion and Empathy</li>
                <li>• Environmental Responsibility</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* School Timeline */}
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
              Our <span className="text-primary-600">Journey</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Fifteen years of continuous growth, innovation, and educational excellence.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex items-center mb-8 ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                }`}
              >
                <div className={`flex items-center ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                } max-w-md`}>
                  <div className="w-4 h-4 bg-primary-600 rounded-full flex-shrink-0"></div>
                  <div className={`bg-white p-4 rounded-lg shadow-md ${
                    index % 2 === 0 ? 'ml-4' : 'mr-4'
                  }`}>
                    <div className="text-lg font-bold text-primary-600">{milestone.year}</div>
                    <div className="text-gray-700">{milestone.event}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty Section */}
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
              Our <span className="text-primary-600">Leadership Team</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the dedicated professionals who guide our educational vision and 
              ensure excellence in every aspect of school life.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {faculty.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg overflow-hidden shadow-lg card-hover"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 font-display">
                    {member.name}
                  </h3>
                  <p className="text-primary-600 font-medium mb-2">{member.position}</p>
                  <p className="text-gray-600 text-sm mb-1">{member.qualification}</p>
                  <p className="text-gray-500 text-sm">{member.experience}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards and Recognition */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-5xl font-bold font-display mb-6">
              Awards & <span className="text-yellow-300">Recognition</span>
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Our commitment to excellence has been recognized by various educational 
              bodies and organizations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {awards.map((award, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-md rounded-lg p-6 text-center"
              >
                <FaAward className="text-4xl text-yellow-300 mx-auto mb-4" />
                <h3 className="text-lg font-semibold">{award}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="heading-secondary mb-6">
              Ready to Be Part of Our Story?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Join the H.P. Bright Academy family and give your child the foundation 
              for a bright and successful future.
            </p>

          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
