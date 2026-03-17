import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaClock,
  FaWhatsapp,
  FaUser,
  FaComments,
  FaPaperPlane
} from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState({ message: '', success: null });

  const contactInfo = [
    {
      icon: FaPhone,
      title: 'Phone Number',
      details: '+91 8400308200',
      link: 'tel:+918400308200',
      description: 'Call us for immediate assistance'
    },
    {
      icon: FaEnvelope,
      title: 'Email Address',
      details: 'info@hpbrightacademy.in',
      link: 'mailto:info@hpbrightacademy.in',
      description: 'Send us your queries anytime'
    },
    {
      icon: FaMapMarkerAlt,
      title: 'School Address',
      details: 'Chamao Shivpur Tarna, Ganeshpur, Varanasi, Uttar Pradesh 221105',
      link: 'https://maps.google.com/?q=Chamao+Shivpur+Tarna+Ganeshpur+Varanasi+Uttar+Pradesh+221105',
      description: 'Visit our beautiful campus'
    },
    {
      icon: FaClock,
      title: 'Office Hours',
      details: 'Mon-Sat: 8:00 AM - 4:00 PM',
      description: 'Sunday: Closed'
    }
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
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) newErrors.phone = 'Please enter a valid 10-digit phone number';
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitResult({ message: '', success: null });

    const formDataToSend = new FormData(e.target);
    formDataToSend.append('access_key', 'd6e8c130-b17f-4cd0-ba6c-30e47b1b81c9');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDataToSend
      });
      const data = await response.json();

      if (data.success) {
        setSubmitResult({ message: 'Thank you! Your message has been sent successfully. We will get back to you within 24 hours.', success: true });
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      } else {
        setSubmitResult({ message: data.message || 'Something went wrong. Please try again.', success: false });
      }
    } catch {
      setSubmitResult({ message: 'Network error. Please check your connection and try again.', success: false });
    } finally {
      setIsSubmitting(false);
    }
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
              We're Here to Help
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-6xl font-bold mb-6"
            style={{ fontFamily: "'Oswald', sans-serif" }}
          >
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed font-light"
          >
            Have questions about admissions, academics, or our facilities? Reach out to our friendly team—we're always happy to help.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-10"
          >
            <a href="#contact-form" className="inline-flex items-center space-x-2 bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105">
              <span>Send a Message</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block bg-primary-50 text-primary-600 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Get in Touch
            </span>
            <h2 className="heading-primary">
              Contact <span className="text-primary-600">Information</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto mt-6">
              Multiple ways to reach us. Choose whatever works best for you.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 h-full border border-gray-100 hover:border-primary-600">
                  <div className="w-14 h-14 bg-primary-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary-600 transition-all duration-300">
                    <info.icon className="text-2xl text-primary-600 group-hover:text-white transition-all duration-300" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{info.title}</h3>
                  {info.link ? (
                    <a
                      href={info.link}
                      target={info.link.startsWith('http') ? '_blank' : undefined}
                      rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-primary-600 hover:text-primary-700 transition-colors duration-200 mb-3 block font-semibold group-hover:underline"
                    >
                      {info.details}
                    </a>
                  ) : (
                    <p className="text-gray-700 font-semibold mb-3">{info.details}</p>
                  )}
                  <p className="text-sm text-gray-500">{info.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="section-padding bg-white" id="contact-form">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="mb-10">
                <span className="inline-block bg-primary-50 text-primary-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  Send a Message
                </span>
                <h2 className="heading-primary">
                  We'd love to <span className="text-primary-600">hear from you</span>
                </h2>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-3">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-lg border-2 transition-colors duration-200 ${
                      errors.name ? 'border-red-500 bg-red-50' : 'border-gray-200 focus:border-primary-600 bg-white'
                    } focus:outline-none`}
                    placeholder="Enter your full name"
                  />
                  {errors.name && <p className="text-red-600 text-sm mt-2 font-medium">{errors.name}</p>}
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
                    placeholder="Enter your email address"
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
                    placeholder="Enter your phone number"
                  />
                  {errors.phone && <p className="text-red-600 text-sm mt-2 font-medium">{errors.phone}</p>}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-3">
                    Subject *
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-lg border-2 transition-colors duration-200 ${
                      errors.subject ? 'border-red-500 bg-red-50' : 'border-gray-200 focus:border-primary-600 bg-white'
                    } focus:outline-none`}
                  >
                    <option value="">Select a subject</option>
                    <option value="admission">Admission Inquiry</option>
                    <option value="academic">Academic Information</option>
                    <option value="fees">Fee Structure</option>
                    <option value="transport">Transportation</option>
                    <option value="facilities">Facilities</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.subject && <p className="text-red-600 text-sm mt-2 font-medium">{errors.subject}</p>}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-3">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className={`w-full px-4 py-3 rounded-lg border-2 transition-colors duration-200 ${
                      errors.message ? 'border-red-500 bg-red-50' : 'border-gray-200 focus:border-primary-600 bg-white'
                    } focus:outline-none resize-none`}
                    placeholder="Write your message here..."
                  ></textarea>
                  {errors.message && <p className="text-red-600 text-sm mt-2 font-medium">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`btn-primary w-full py-4 text-lg font-semibold inline-flex items-center justify-center space-x-2 rounded-lg transition-all duration-300 ${
                    isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:shadow-xl hover:scale-105'
                  }`}
                >
                  <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                  {!isSubmitting && (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  )}
                </button>

                {submitResult.message && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`text-sm font-medium text-center px-4 py-4 rounded-lg ${
                      submitResult.success
                        ? 'bg-green-50 text-green-700 border border-green-200'
                        : 'bg-red-50 text-red-700 border border-red-200'
                    }`}
                  >
                    {submitResult.message}
                  </motion.div>
                )}
              </form>
            </motion.div>

            {/* Map and Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold mb-6">Visit Our Campus</h3>
                <div className="bg-gray-200 rounded-2xl overflow-hidden shadow-lg h-80 flex items-center justify-center">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3605.238659194116!2d82.92486!3d25.363316700000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e2d5e68795ded%3A0x8ede4d0113bbdc36!2sH%20P%20BRIGHT%20ACADEMY%20PASCHIMPUR%20SHIVPUR%20VARANASI!5e0!3m2!1sen!2sin!4v1751262397479!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="H.P. Bright Academy Location"
                  ></iframe>
                </div>
              </div>

              <div className="bg-gradient-to-br from-primary-50 to-primary-100 p-8 rounded-2xl border border-primary-200">
                <h4 className="text-xl font-bold mb-6 text-gray-900">School Hours</h4>
                <div className="space-y-4 text-gray-700">
                  <div className="flex justify-between items-center pb-4 border-b border-primary-200">
                    <span className="font-semibold">Monday - Friday</span>
                    <span className="text-primary-600 font-bold">8:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-primary-200">
                    <span className="font-semibold">Saturday</span>
                    <span className="text-primary-600 font-bold">8:00 AM - 12:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">Sunday</span>
                    <span className="text-red-600 font-bold">Closed</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-secondary-50 to-secondary-100 p-8 rounded-2xl border border-secondary-200">
                <h4 className="text-xl font-bold mb-6 text-gray-900">Office Hours</h4>
                <div className="space-y-4 text-gray-700">
                  <div className="flex justify-between items-center pb-4 border-b border-secondary-200">
                    <span className="font-semibold">Monday - Saturday</span>
                    <span className="text-secondary-600 font-bold">8:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">Sunday</span>
                    <span className="text-red-600 font-bold">Closed</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl border border-green-200">
                <h4 className="text-xl font-bold mb-4 flex items-center text-gray-900">
                  <FaWhatsapp className="text-green-600 mr-3 text-2xl" />
                  WhatsApp Support
                </h4>
                <p className="text-gray-700 mb-6">
                  For quick queries and support, connect with us on WhatsApp. We usually respond within minutes.
                </p>
                <a
                  href="https://wa.me/918400308200?text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20H.P.%20Bright%20Academy."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition-all duration-300 font-semibold hover:shadow-lg hover:scale-105"
                >
                  <FaWhatsapp />
                  <span>Chat with us</span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Google Map Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="heading-primary mb-3">
              Find <span className="text-primary-600">Us Here</span>
            </h2>
            <p className="text-gray-500 text-base">
              Chamao Shivpur Tarna, Ganeshpur, Varanasi, Uttar Pradesh 221105
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="rounded-3xl overflow-hidden shadow-2xl border border-gray-100"
          >
            <iframe
              title="H.P. Bright Academy Location"
              src="https://maps.google.com/maps?q=9W7F%2B7XV+Ganeshpur,+Uttar+Pradesh&z=16&output=embed"
              width="100%"
              height="450"
              style={{ border: 0, display: 'block' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-6 text-center"
          >
            <a
              href="https://maps.google.com/?q=9W7F%2B7XV+Ganeshpur,+Uttar+Pradesh"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white font-bold px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              style={{ fontFamily: "'Oswald', sans-serif" }}
            >
              <FaMapMarkerAlt />
              Open in Google Maps
            </a>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="heading-primary text-center mb-16"
          >
            Frequently Asked <span className="text-primary-600">Questions</span>
          </motion.h2>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                question: "What are the school timings?",
                answer: "School timings are from 8:00 AM to 2:00 PM (Monday to Friday) and 8:00 AM to 12:00 PM on Saturday. Sunday is a holiday."
              },
              {
                question: "How can I schedule a campus visit?",
                answer: "You can schedule a campus visit by calling us at +91 8400308200 or by sending us a message through our contact form. We'll arrange a convenient time for you."
              },
              {
                question: "What documents are required for admission?",
                answer: "Required documents include birth certificate, transfer certificate (if applicable), medical certificate, passport size photographs, address proof, and parent's ID proof."
              },
              {
                question: "Do you provide transportation facility?",
                answer: "Yes, we provide safe and reliable transportation facility covering various routes in Varanasi. Please contact us for route details and availability."
              },
              {
                question: "What is the teacher-student ratio?",
                answer: "We maintain a low teacher-student ratio to ensure individual attention. Our average class size is 20-25 students per teacher for optimal learning experience."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <h4 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h4>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
