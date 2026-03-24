import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaFileAlt, 
  FaCalendarAlt, 
  FaCheckCircle, 
  FaMoneyBillWave,
  FaPhone, 
  FaEnvelope,
  FaUser,
  FaChild,
  FaComments,
  FaDownload
} from 'react-icons/fa';

const Admissions = () => {
  const [formData, setFormData] = useState({
    parentName: '',
    email: '',
    phone: '',
    childName: '',
    childAge: '',
    gradeInterest: '',
    previousSchool: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const admissionSteps = [
    {
      icon: FaFileAlt,
      title: 'Submit Application',
      description: 'Fill out our online application form or visit our campus to collect the admission form.'
    },
    {
      icon: FaCalendarAlt,
      title: 'School Visit',
      description: 'Schedule a campus tour to see our facilities and meet our faculty members.'
    },
    {
      icon: FaCheckCircle,
      title: 'Assessment',
      description: 'Age-appropriate interaction session to understand your child\'s learning style.'
    },
    {
      icon: FaMoneyBillWave,
      title: 'Fee Payment',
      description: 'Complete the admission process with fee payment and document submission.'
    }
  ];

  const requiredDocuments = [
    'Birth Certificate (Original and Photocopy)',
    'Transfer Certificate from Previous School (if applicable)',
    'Medical Certificate',
    'Passport Size Photographs (4 copies)',
    'Address Proof',
    'Parent\'s ID Proof (Aadhar Card/Passport)',
    'Previous Academic Records (if applicable)'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.parentName.trim()) newErrors.parentName = 'Parent name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) newErrors.phone = 'Please enter a valid 10-digit phone number';
    if (!formData.childName.trim()) newErrors.childName = 'Child name is required';
    if (!formData.childAge.trim()) newErrors.childAge = 'Child age is required';
    if (!formData.gradeInterest.trim()) newErrors.gradeInterest = 'Please select grade of interest';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      alert('Thank you for your inquiry! We will contact you within 24 hours.');
      setFormData({
        parentName: '',
        email: '',
        phone: '',
        childName: '',
        childAge: '',
        gradeInterest: '',
        previousSchool: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-700 via-primary-600 to-primary-500 text-white py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full -mr-48 -mt-48"></div>
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-white rounded-full -ml-36 -mb-36"></div>
        </div>
        <div className="container-custom text-center relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-4"
          >
            <span className="inline-block bg-white bg-opacity-20 text-white px-5 py-2 rounded-full text-sm font-semibold backdrop-blur-sm">
              Welcome to Our Community
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-6xl font-bold mb-6"
            style={{ fontFamily: "'Oswald', sans-serif" }}
          >
            Admissions Open
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed font-light"
          >
            Join H.P. Bright Academy and unlock your child's potential. We nurture curious minds and compassionate hearts across Preschool to Class 8.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-10"
          >
            <a href="#inquiry-form" className="inline-flex items-center space-x-2 bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105">
              <span>Start Your Application</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="inline-block bg-primary-50 text-primary-600 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              4-Step Process
            </span>
            <h2 className="heading-primary">
              Our Admission <span className="text-primary-600">Journey</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto mt-6">
              A smooth, transparent process designed with parents and students in mind.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {admissionSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 h-full border border-gray-100">
                  <div className="absolute -top-6 left-8">
                    <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                      {index + 1}
                    </div>
                  </div>
                  <div className="w-16 h-16 bg-primary-50 rounded-xl flex items-center justify-center mb-6 mt-4">
                    <step.icon className="text-2xl text-primary-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
                {index < admissionSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary-600 to-transparent"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Required Documents */}
      <section className="section-padding bg-gradient-to-b from-white to-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="mb-8">
                <span className="inline-block bg-primary-50 text-primary-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  Required Documents
                </span>
                <h2 className="heading-primary">
                  What to <span className="text-primary-600">Bring</span>
                </h2>
              </div>
              <div className="space-y-4">
                {requiredDocuments.map((document, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-4 p-4 bg-white rounded-xl hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="flex-shrink-0">
                      <FaCheckCircle className="text-primary-600 text-xl mt-1" />
                    </div>
                    <span className="text-gray-700 leading-relaxed">{document}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Admission Criteria */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="mb-8">
                <span className="inline-block bg-secondary-50 text-secondary-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  Eligibility & Selection
                </span>
                <h2 className="heading-primary">
                  Admission <span className="text-secondary-600">Criteria</span>
                </h2>
              </div>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300">
                  <h4 className="font-bold text-gray-900 mb-4 text-lg">Age Criteria</h4>
                  <ul className="space-y-3">
                    {[
                      { label: 'Nursery', age: '2.5 - 3.5 years' },
                      { label: 'LKG', age: '3.5 - 4.5 years' },
                      { label: 'UKG', age: '4.5 - 5.5 years' },
                      { label: 'Class 1', age: '5.5 - 6.5 years' }
                    ].map((item, idx) => (
                      <li key={idx} className="flex justify-between text-gray-700">
                        <span className="font-medium">{item.label}</span>
                        <span className="text-primary-600">{item.age}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300">
                  <h4 className="font-bold text-gray-900 mb-4 text-lg">Selection Process</h4>
                  <ul className="space-y-3">
                    {[
                      'Parent-child interaction session',
                      'Age-appropriate activities & assessment',
                      'Parent counseling session',
                      'Document verification'
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start space-x-3 text-gray-700">
                        <span className="text-secondary-600 font-bold mt-1">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="section-padding bg-white" id="inquiry-form">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block bg-primary-50 text-primary-600 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Get Started Today
            </span>
            <h2 className="heading-primary">
              Admission <span className="text-primary-600">Inquiry Form</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto mt-6">
              Fill out the form below and our admission team will get back to you within 24 hours.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.form
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              onSubmit={handleSubmit}
              className="bg-gradient-to-br from-gray-50 to-white p-10 rounded-2xl shadow-lg border border-gray-100"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-3">
                    Parent/Guardian Name *
                  </label>
                  <input
                    type="text"
                    name="parentName"
                    value={formData.parentName}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-lg border-2 transition-colors duration-200 ${
                      errors.parentName ? 'border-red-500 bg-red-50' : 'border-gray-200 focus:border-primary-600 bg-white'
                    } focus:outline-none`}
                    placeholder="Enter parent/guardian name"
                  />
                  {errors.parentName && <p className="text-red-600 text-sm mt-2 font-medium">{errors.parentName}</p>}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-3">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-lg border-2 transition-colors duration-200 ${
                      errors.email ? 'border-red-500 bg-red-50' : 'border-gray-200 focus:border-primary-600 bg-white'
                    } focus:outline-none`}
                    placeholder="Enter email address"
                  />
                  {errors.email && <p className="text-red-600 text-sm mt-2 font-medium">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-3">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-lg border-2 transition-colors duration-200 ${
                      errors.phone ? 'border-red-500 bg-red-50' : 'border-gray-200 focus:border-primary-600 bg-white'
                    } focus:outline-none`}
                    placeholder="Enter phone number"
                  />
                  {errors.phone && <p className="text-red-600 text-sm mt-2 font-medium">{errors.phone}</p>}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-3">
                    Child's Name *
                  </label>
                  <input
                    type="text"
                    name="childName"
                    value={formData.childName}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-lg border-2 transition-colors duration-200 ${
                      errors.childName ? 'border-red-500 bg-red-50' : 'border-gray-200 focus:border-primary-600 bg-white'
                    } focus:outline-none`}
                    placeholder="Enter child's name"
                  />
                  {errors.childName && <p className="text-red-600 text-sm mt-2 font-medium">{errors.childName}</p>}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-3">
                    Child's Age *
                  </label>
                  <input
                    type="number"
                    name="childAge"
                    value={formData.childAge}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-lg border-2 transition-colors duration-200 ${
                      errors.childAge ? 'border-red-500 bg-red-50' : 'border-gray-200 focus:border-primary-600 bg-white'
                    } focus:outline-none`}
                    placeholder="Enter child's age"
                    min="2"
                    max="15"
                  />
                  {errors.childAge && <p className="text-red-600 text-sm mt-2 font-medium">{errors.childAge}</p>}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-3">
                    Grade of Interest *
                  </label>
                  <select
                    name="gradeInterest"
                    value={formData.gradeInterest}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-lg border-2 transition-colors duration-200 ${
                      errors.gradeInterest ? 'border-red-500 bg-red-50' : 'border-gray-200 focus:border-primary-600 bg-white'
                    } focus:outline-none`}
                  >
                    <option value="">Select grade</option>
                    <option value="nursery">Nursery</option>
                    <option value="lkg">LKG</option>
                    <option value="ukg">UKG</option>
                    <option value="class1">Class 1</option>
                    <option value="class2">Class 2</option>
                    <option value="class3">Class 3</option>
                    <option value="class4">Class 4</option>
                    <option value="class5">Class 5</option>
                    <option value="class6">Class 6</option>
                    <option value="class7">Class 7</option>
                    <option value="class8">Class 8</option>
                  </select>
                  {errors.gradeInterest && <p className="text-red-600 text-sm mt-2 font-medium">{errors.gradeInterest}</p>}
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-900 mb-3">
                    Previous School (if applicable)
                  </label>
                  <input
                    type="text"
                    name="previousSchool"
                    value={formData.previousSchool}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-primary-600 bg-white focus:outline-none transition-colors duration-200"
                    placeholder="Enter previous school name"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-900 mb-3">
                    Message or Special Requirements
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-primary-600 bg-white focus:outline-none transition-colors duration-200"
                    placeholder="Any specific questions or requirements..."
                  ></textarea>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="mt-10 text-center"
              >
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`btn-primary px-10 py-4 text-lg font-semibold inline-flex items-center space-x-2 rounded-lg transition-all duration-300 ${
                    isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:shadow-xl hover:scale-105'
                  }`}
                >
                  <span>{isSubmitting ? 'Submitting...' : 'Submit Inquiry'}</span>
                  {!isSubmitting && (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  )}
                </button>
              </motion.div>
            </motion.form>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-primary-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-72 h-72 bg-white rounded-full -mr-36 -mt-36"></div>
        </div>
        <div className="container-custom text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ fontFamily: "'Oswald', sans-serif" }}
          >
            Questions About Admissions?
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl mb-10 opacity-95"
          >
            Our admission team is ready to help you. Reach out anytime during office hours.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href="tel:+918400308200"
              className="inline-flex items-center space-x-2 bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <FaPhone />
              <span>Call: +91 8400308200</span>
            </a>
            <a
              href="mailto:info@hpbrightacademy.in"
              className="inline-flex items-center space-x-2 bg-white bg-opacity-20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-opacity-30 transition-all duration-300 border border-white border-opacity-30"
            >
              <FaEnvelope />
              <span>Email Us</span>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Admissions;
