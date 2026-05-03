import React, { useState } from 'react';

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
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
    <div className="flex-1 flex flex-col min-h-screen font-body-md w-full max-w-[1440px] mx-auto overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative pt-stack-lg pb-stack-md px-container-padding text-center overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-surface-container-low opacity-50"></div>
        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 w-24 h-24 bg-primary-fixed rounded-full blur-3xl opacity-60"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-secondary-fixed rounded-full blur-3xl opacity-60"></div>
        <h1 className="font-headline-xl text-headline-xl text-primary mb-stack-sm relative inline-block">
          Let's Connect
          <span className="absolute -top-4 -right-8 text-secondary text-4xl material-symbols-outlined fill animate-bounce">stars</span>
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-stack-md">
          Have questions about admissions, programs, or campus life? We're here to help you every step of the way.
        </p>
      </section>

      {/* Contact Cards (Bento style) */}
      <section className="px-container-padding py-stack-md max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="bg-surface-container-lowest border-2 border-surface-variant rounded-2xl p-8 relative shadow-lg shadow-surface-variant/50 flex flex-col items-start gap-4">
          <div className="w-14 h-14 rounded-full bg-primary-fixed flex items-center justify-center text-on-primary-fixed-variant mb-2">
            <span className="material-symbols-outlined text-3xl">call</span>
          </div>
          <h3 className="font-headline-md text-xl text-primary">Call Us</h3>
          <p className="font-body-md text-on-surface-variant">Mon-Sat: 8:00 AM - 4:00 PM</p>
          <a href="tel:+918400308200" className="font-label-bold text-label-bold text-primary hover:underline mt-2">+91 8400308200</a>
        </div>
        {/* Card 2 */}
        <div className="bg-surface-container-lowest border-2 border-surface-variant rounded-2xl p-8 relative shadow-lg shadow-surface-variant/50 flex flex-col items-start gap-4">
          <div className="w-14 h-14 rounded-full bg-secondary-fixed flex items-center justify-center text-on-secondary-fixed-variant mb-2">
            <span className="material-symbols-outlined text-3xl">mail</span>
          </div>
          <h3 className="font-headline-md text-xl text-primary">Email Us</h3>
          <p className="font-body-md text-on-surface-variant">We'll respond within 24 hours.</p>
          <a href="mailto:info@hpbrightacademy.in" className="font-label-bold text-label-bold text-secondary hover:underline mt-2">info@hpbrightacademy.in</a>
        </div>
        {/* Card 3 */}
        <div className="bg-surface-container-lowest border-2 border-surface-variant rounded-2xl p-8 relative shadow-lg shadow-surface-variant/50 flex flex-col items-start gap-4">
          <div className="w-14 h-14 rounded-full bg-tertiary-fixed flex items-center justify-center text-on-tertiary-fixed-variant mb-2">
            <span className="material-symbols-outlined text-3xl">location_on</span>
          </div>
          <h3 className="font-headline-md text-xl text-primary">Visit Us</h3>
          <p className="font-body-md text-on-surface-variant">Chamao Shivpur Tarna, Ganeshpur</p>
          <p className="font-label-bold text-label-bold text-tertiary mt-2">Varanasi, UP 221105</p>
        </div>
      </section>

      {/* Form and Map section */}
      <section className="px-container-padding py-stack-lg max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-gutter my-stack-md">
        {/* Contact Form */}
        <div className="bg-surface-container-low border border-surface-variant rounded-[2.5rem] p-8 md:p-12 shadow-lg">
          <div className="mb-8">
            <span className="inline-flex items-center justify-center bg-primary-fixed text-on-primary-fixed px-4 py-1 rounded-full font-label-bold text-label-bold mb-4">
              <span className="material-symbols-outlined text-sm mr-1">chat</span>
              Send a message
            </span>
            <h2 className="font-headline-lg text-headline-lg text-primary">Get in Touch</h2>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="font-label-bold text-label-bold text-on-surface-variant mb-2 block">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 rounded-xl border-2 bg-surface focus:outline-none transition-all duration-200 ${errors.name ? 'border-error' : 'border-surface-variant focus:border-primary'}`}
                  placeholder="Your Name"
                />
                {errors.name && <p className="text-error text-xs mt-1 font-body-md">{errors.name}</p>}
              </div>
              <div>
                <label className="font-label-bold text-label-bold text-on-surface-variant mb-2 block">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 rounded-xl border-2 bg-surface focus:outline-none transition-all duration-200 ${errors.email ? 'border-error' : 'border-surface-variant focus:border-primary'}`}
                  placeholder="Your Email"
                />
                {errors.email && <p className="text-error text-xs mt-1 font-body-md">{errors.email}</p>}
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="font-label-bold text-label-bold text-on-surface-variant mb-2 block">Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 rounded-xl border-2 bg-surface focus:outline-none transition-all duration-200 ${errors.phone ? 'border-error' : 'border-surface-variant focus:border-primary'}`}
                  placeholder="Your Phone Number"
                />
                {errors.phone && <p className="text-error text-xs mt-1 font-body-md">{errors.phone}</p>}
              </div>
              <div>
                <label className="font-label-bold text-label-bold text-on-surface-variant mb-2 block">Subject *</label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 rounded-xl border-2 bg-surface focus:outline-none transition-all duration-200 ${errors.subject ? 'border-error' : 'border-surface-variant focus:border-primary'}`}
                >
                  <option value="">Select a subject</option>
                  <option value="admission">Admission Inquiry</option>
                  <option value="academic">Academic Information</option>
                  <option value="facilities">Facilities</option>
                  <option value="other">Other</option>
                </select>
                {errors.subject && <p className="text-error text-xs mt-1 font-body-md">{errors.subject}</p>}
              </div>
            </div>
            <div>
              <label className="font-label-bold text-label-bold text-on-surface-variant mb-2 block">Message *</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                className={`w-full px-4 py-3 rounded-xl border-2 bg-surface focus:outline-none transition-all duration-200 ${errors.message ? 'border-error' : 'border-surface-variant focus:border-primary'} resize-none`}
                placeholder="How can we help you?"
              ></textarea>
              {errors.message && <p className="text-error text-xs mt-1 font-body-md">{errors.message}</p>}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-primary text-on-primary font-button text-button py-4 px-8 rounded-full border-b-4 border-primary-fixed-dim hover:-translate-y-1 active:scale-95 transition-all shadow-[0_10px_20px_rgba(0,92,85,0.2)] disabled:opacity-50 disabled:cursor-not-allowed btn-squish flex items-center justify-center gap-2"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
              {!isSubmitting && <span className="material-symbols-outlined">send</span>}
            </button>

            {submitResult.message && (
              <div className={`mt-4 text-sm font-label-bold p-4 rounded-xl text-center border-2 ${submitResult.success ? 'bg-primary-container text-on-primary-container border-primary-fixed' : 'bg-error-container text-on-error-container border-error'}`}>
                {submitResult.message}
              </div>
            )}
          </form>
        </div>

        {/* School Map */}
        <div className="bg-surface-container-lowest border border-surface-variant rounded-[2.5rem] p-4 flex flex-col justify-between shadow-lg h-full min-h-[450px]">
          <div className="flex-1 rounded-[1.5rem] overflow-hidden border border-surface-variant/40 relative">
            <iframe
              title="H.P. Bright Academy Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3605.238659194116!2d82.92486!3d25.363316700000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e2d5e68795ded%3A0x8ede4d0113bbdc36!2sH%20P%20BRIGHT%20ACADEMY%20PASCHIMPUR%20SHIVPUR%20VARANASI!5e0!3m2!1sen!2sin!4v1751262397479!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
            ></iframe>
          </div>
          <div className="mt-4 p-4 text-center">
            <a
              href="https://maps.google.com/?q=Chamao+Shivpur+Tarna+Ganeshpur+Varanasi+Uttar+Pradesh+221105"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary font-label-bold text-label-bold hover:underline"
            >
              Open in Google Maps <span className="material-symbols-outlined text-sm">open_in_new</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
