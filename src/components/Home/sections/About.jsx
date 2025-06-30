import React from 'react';
import { motion } from 'framer-motion';
import { FaAward, FaUsers, FaGraduationCap, FaHeart } from 'react-icons/fa';

const About = () => {
  const stats = [
    { icon: FaAward, number: '5+', label: 'Years of Excellence' },
    { icon: FaUsers, number: '500+', label: 'Happy Students' },
    { icon: FaGraduationCap, number: '15+', label: 'Experienced Faculty' },
    { icon: FaHeart, number: '100%', label: 'Care & Dedication' },
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-primary">
              About <span className="text-blue-600">H.P. Bright Academy</span>
            </h2>
            
            <div className="space-y-6 text-body">
              <p className="text-lg">
                Welcome to H.P. Bright Academy, where we believe that every child is unique and has 
                the potential to excel. Our mission is to provide quality education that nurtures 
                young minds from preschool to class 8, fostering both academic excellence and 
                character development.
              </p>
              
              <p>
                Founded with the vision of creating well-rounded individuals, we focus on holistic 
                education that combines modern teaching methodologies with traditional values. Our 
                experienced faculty and state-of-the-art facilities create an environment where 
                children can explore, learn, and grow with confidence.
              </p>
              
              <p>
                At H.P. Bright Academy, we understand that the foundation years are crucial for a 
                child's overall development. That's why we maintain small class sizes to ensure 
                individual attention, implement innovative teaching methods, and create a safe, 
                nurturing environment where every child feels valued and supported.
              </p>
            </div>

            {/* Mission and Vision */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-blue-800 mb-3 font-display">Our Mission</h3>
                <p className="text-gray-600">
                  To provide quality education that develops critical thinking, creativity, and 
                  character while preparing students for future success.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-blue-800 mb-3 font-display">Our Vision</h3>
                <p className="text-gray-600">
                  To be a leading educational institution that shapes confident, compassionate, 
                  and capable global citizens.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Image and Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* School Image */}
            <div className="relative">
              <img
                src={import.meta.env.BASE_URL + "images/Activities/6.jpg"}
                alt="H.P. Bright Academy Campus"
                className="w-full h-80 object-cover rounded-lg shadow-lg"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm p-4 rounded-lg">
                <h4 className="font-bold text-gray-900">Shaping Tomorrow's Leaders Today</h4>
                <p className="text-sm text-gray-600 mt-1">
                  Where learning meets fun in a safe and nurturing environment
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-lg shadow-md text-center card-hover"
                >
                  <stat.icon className="text-3xl text-blue-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-gray-900 mb-1">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Principal's Message */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 bg-primary-50 rounded-lg p-8 lg:p-12"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl lg:text-3xl font-bold text-blue-800 mb-6 font-display">
              Principal's Message
            </h3>
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <img
                src={import.meta.env.BASE_URL + "images/AboutUs/principal.png"}
                alt="Principal - Mrs. Pooja Verma"
                className="w-32 h-32 rounded-full object-cover shadow-lg"
              />
              <div className="flex-1 text-left">
                <p className="text-lg text-gray-700 italic mb-4">
                  "At H.P. Bright Academy, we believe that education is not just about academic 
                  achievement, but about nurturing the whole child. Our dedicated team works 
                  tirelessly to create an environment where every student can discover their 
                  potential and develop into confident, caring, and capable individuals."
                </p>
                <div>
                  <div className="font-semibold text-blue-800">Mrs. Pooja Verma</div>
                  <div className="text-gray-600">Principal, H.P. Bright Academy</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
