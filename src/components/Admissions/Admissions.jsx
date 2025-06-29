import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaFileAlt, 
  FaCalendarAlt, 
  FaMoneyBillWave, 
  FaCheckCircle, 
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

  const feeStructure = [
    { grade: 'Preschool (Nursery, LKG, UKG)', admission: '₹5,000', monthly: '₹2,500', annual: '₹1,500' },
    { grade: 'Primary (Classes 1-3)', admission: '₹8,000', monthly: '₹3,500', annual: '₹2,000' },
    { grade: 'Primary (Classes 4-5)', admission: '₹10,000', monthly: '₹4,000', annual: '₹2,500' },
    { grade: 'Middle School (Classes 6-8)', admission: '₹12,000', monthly: '₹4,500', annual: '₹3,000' }
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
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-primary-600 text-white py-20">
        <div className="container-custom text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold font-display mb-6"
          >
            Admissions Open
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto"
          >
            Join our family and give your child the foundation for a bright future
          </motion.p>
        </div>
      </section>

      {/* Admission Process */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="heading-primary text-center mb-16"
          >
            Admission <span className="text-primary-600">Process</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {admissionSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-md text-center card-hover"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <step.icon className="text-2xl text-primary-600" />
                </div>
                <div className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-sm font-bold">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Fee Structure */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="heading-primary text-center mb-16"
          >
            Fee <span className="text-primary-600">Structure</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="overflow-x-auto"
          >
            <table className="w-full bg-white rounded-lg shadow-lg overflow-hidden">
              <thead className="bg-primary-600 text-white">
                <tr>
                  <th className="px-6 py-4 text-left">Grade</th>
                  <th className="px-6 py-4 text-left">Admission Fee</th>
                  <th className="px-6 py-4 text-left">Monthly Fee</th>
                  <th className="px-6 py-4 text-left">Annual Charges</th>
                </tr>
              </thead>
              <tbody>
                {feeStructure.map((fee, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="px-6 py-4 font-medium">{fee.grade}</td>
                    <td className="px-6 py-4">{fee.admission}</td>
                    <td className="px-6 py-4">{fee.monthly}</td>
                    <td className="px-6 py-4">{fee.annual}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-8 text-center"
          >
            <p className="text-gray-600 mb-4">
              * Additional charges may apply for transport, uniform, and books
            </p>
            <button className="btn-secondary inline-flex items-center space-x-2">
              <FaDownload />
              <span>Download Fee Structure PDF</span>
            </button>
          </motion.div>
        </div>
      </section>

      {/* Required Documents */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="heading-primary mb-8">
                Required <span className="text-primary-600">Documents</span>
              </h2>
              <div className="space-y-4">
                {requiredDocuments.map((document, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-3"
                  >
                    <FaCheckCircle className="text-primary-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{document}</span>
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
              <h2 className="heading-primary mb-8">
                Admission <span className="text-primary-600">Criteria</span>
              </h2>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Age Criteria:</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Nursery: 2.5 - 3.5 years</li>
                      <li>• LKG: 3.5 - 4.5 years</li>
                      <li>• UKG: 4.5 - 5.5 years</li>
                      <li>• Class 1: 5.5 - 6.5 years</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Selection Process:</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Parent-child interaction session</li>
                      <li>• Age-appropriate activities and assessment</li>
                      <li>• Parent counseling session</li>
                      <li>• Document verification</li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="heading-primary text-center mb-16"
          >
            Admission <span className="text-primary-600">Inquiry</span>
          </motion.h2>

          <div className="max-w-4xl mx-auto">
            <motion.form
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              onSubmit={handleSubmit}
              className="bg-gray-50 p-8 rounded-lg shadow-lg"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <FaUser className="inline mr-2" />
                    Parent/Guardian Name *
                  </label>
                  <input
                    type="text"
                    name="parentName"
                    value={formData.parentName}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.parentName ? 'border-red-500' : 'border-gray-300'
                    } focus:ring-primary-500 focus:border-primary-500`}
                    placeholder="Enter parent/guardian name"
                  />
                  {errors.parentName && <p className="text-red-500 text-sm mt-1">{errors.parentName}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <FaEnvelope className="inline mr-2" />
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.email ? 'border-red-500' : 'border-gray-300'
                    } focus:ring-primary-500 focus:border-primary-500`}
                    placeholder="Enter email address"
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <FaPhone className="inline mr-2" />
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.phone ? 'border-red-500' : 'border-gray-300'
                    } focus:ring-primary-500 focus:border-primary-500`}
                    placeholder="Enter phone number"
                  />
                  {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <FaChild className="inline mr-2" />
                    Child's Name *
                  </label>
                  <input
                    type="text"
                    name="childName"
                    value={formData.childName}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.childName ? 'border-red-500' : 'border-gray-300'
                    } focus:ring-primary-500 focus:border-primary-500`}
                    placeholder="Enter child's name"
                  />
                  {errors.childName && <p className="text-red-500 text-sm mt-1">{errors.childName}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Child's Age *
                  </label>
                  <input
                    type="number"
                    name="childAge"
                    value={formData.childAge}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.childAge ? 'border-red-500' : 'border-gray-300'
                    } focus:ring-primary-500 focus:border-primary-500`}
                    placeholder="Enter child's age"
                    min="2"
                    max="15"
                  />
                  {errors.childAge && <p className="text-red-500 text-sm mt-1">{errors.childAge}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Grade of Interest *
                  </label>
                  <select
                    name="gradeInterest"
                    value={formData.gradeInterest}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.gradeInterest ? 'border-red-500' : 'border-gray-300'
                    } focus:ring-primary-500 focus:border-primary-500`}
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
                  {errors.gradeInterest && <p className="text-red-500 text-sm mt-1">{errors.gradeInterest}</p>}
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Previous School (if applicable)
                  </label>
                  <input
                    type="text"
                    name="previousSchool"
                    value={formData.previousSchool}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="Enter previous school name"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <FaComments className="inline mr-2" />
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="Any specific questions or requirements..."
                  ></textarea>
                </div>
              </div>

              <div className="mt-8 text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`btn-primary px-8 py-3 text-lg ${
                    isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
                </button>
              </div>
            </motion.form>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-padding bg-primary-50">
        <div className="container-custom text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="heading-primary mb-8"
          >
            Need Help with <span className="text-primary-600">Admissions?</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 mb-8"
          >
            Our admission team is here to assist you. Contact us for more information.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href="tel:+918400308200"
              className="btn-primary inline-flex items-center space-x-2"
            >
              <FaPhone />
              <span>Call: +91 8400308200</span>
            </a>
            <a
              href="mailto:info@hpbrightacademy.edu.in"
              className="btn-secondary inline-flex items-center space-x-2"
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
