import React, { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventDate: '',
    eventType: '',
    requirements: '',
  });

  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    try {
      await axios.post('http://localhost:5000/api/contact', formData);
      setStatus({
        type: 'success',
        message: 'Thank you! Your message has been sent successfully. We will contact you soon.',
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        eventDate: '',
        eventType: '',
        requirements: '',
      });
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Sorry, something went wrong. Please try calling us directly.',
      });
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: <FaPhone className="text-3xl text-primary-gold" />,
      title: 'Phone',
      details: ['+91 98765 43210', '+91 98765 43211'],
      link: 'tel:+919876543210',
    },
    {
      icon: <FaEnvelope className="text-3xl text-primary-gold" />,
      title: 'Email',
      details: ['info@darbardecor.com', 'bookings@darbardecor.com'],
      link: 'mailto:info@darbardecor.com',
    },
    {
      icon: <FaMapMarkerAlt className="text-3xl text-primary-gold" />,
      title: 'Address',
      details: ['123 Wedding Street, Decoration Plaza', 'City, State - 123456, India'],
      link: '#map',
    },
    {
      icon: <FaClock className="text-3xl text-primary-gold" />,
      title: 'Working Hours',
      details: ['Mon - Sat: 9:00 AM - 8:00 PM', 'Sunday: 10:00 AM - 6:00 PM'],
      link: null,
    },
  ];

  const eventTypes = [
    'Wedding Ceremony',
    'Engagement',
    'Birthday Party',
    'Corporate Event',
    'Reception',
    'Anniversary',
    'Festival Celebration',
    'Other',
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1920)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary-maroon/90 to-secondary-purple/80"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold mb-4"
          >
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl opacity-90"
          >
            Let's Create Something Beautiful Together
          </motion.p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-neutral-beige">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex justify-center mb-4">{info.icon}</div>
                <h3 className="text-xl font-bold text-primary-maroon mb-3">
                  {info.title}
                </h3>
                {info.details.map((detail, i) => (
                  <p key={i} className="text-neutral-charcoal opacity-80 mb-1">
                    {detail}
                  </p>
                ))}
                {info.link && (
                  <a
                    href={info.link}
                    className="inline-block mt-4 text-primary-gold hover:text-primary-maroon transition-colors duration-300 font-semibold"
                  >
                    {info.title === 'Phone' ? 'Call Now' : 'Get Directions'}
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-primary-maroon mb-4">
                Send Us a Message
              </h2>
              <p className="text-lg text-neutral-charcoal opacity-80 mb-8">
                Fill out the form below and we'll get back to you within 24 hours
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-neutral-charcoal font-semibold mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-neutral-beige rounded-lg focus:border-primary-gold focus:outline-none transition-colors duration-300"
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-neutral-charcoal font-semibold mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-neutral-beige rounded-lg focus:border-primary-gold focus:outline-none transition-colors duration-300"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-neutral-charcoal font-semibold mb-2">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-neutral-beige rounded-lg focus:border-primary-gold focus:outline-none transition-colors duration-300"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-neutral-charcoal font-semibold mb-2">
                      Event Date
                    </label>
                    <input
                      type="date"
                      name="eventDate"
                      value={formData.eventDate}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-neutral-beige rounded-lg focus:border-primary-gold focus:outline-none transition-colors duration-300"
                    />
                  </div>

                  <div>
                    <label className="block text-neutral-charcoal font-semibold mb-2">
                      Event Type
                    </label>
                    <select
                      name="eventType"
                      value={formData.eventType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-neutral-beige rounded-lg focus:border-primary-gold focus:outline-none transition-colors duration-300"
                    >
                      <option value="">Select event type</option>
                      {eventTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-neutral-charcoal font-semibold mb-2">
                    Requirements *
                  </label>
                  <textarea
                    name="requirements"
                    value={formData.requirements}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 border-2 border-neutral-beige rounded-lg focus:border-primary-gold focus:outline-none transition-colors duration-300 resize-none"
                    placeholder="Tell us about your event and decoration requirements..."
                  ></textarea>
                </div>

                {status.message && (
                  <div
                    className={`p-4 rounded-lg ${
                      status.type === 'success'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-red-100 text-red-800'
                    }`}
                  >
                    {status.message}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-primary-maroon hover:bg-opacity-90 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? 'Sending...' : 'Submit Inquiry'}
                </button>
              </form>
            </motion.div>

            {/* Map & Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Google Map */}
              <div className="rounded-xl overflow-hidden shadow-lg h-96" id="map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.2613173278896!2d73.91411287501422!3d18.56200098258489!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c147b8b3a3bf%3A0x6f7fdcc8e4d6c77e!2sPhoenix%20Marketcity%20Pune!5e0!3m2!1sen!2sin!4v1701234567890!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Darbar Decor Location"
                ></iframe>
              </div>

              {/* WhatsApp CTA */}
              <div className="bg-gradient-to-br from-primary-maroon to-secondary-purple p-8 rounded-xl shadow-lg text-white">
                <FaWhatsapp className="text-5xl mb-4" />
                <h3 className="text-2xl font-bold mb-2">Quick Chat on WhatsApp</h3>
                <p className="mb-6 opacity-90">
                  Get instant responses to your queries. Chat with our team now!
                </p>
                <a
                  href="https://wa.me/919876543210?text=Hello!%20I%20would%20like%20to%20inquire%20about%20your%20decoration%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <FaWhatsapp className="text-2xl" />
                  <span>Chat Now</span>
                </a>
              </div>

              {/* Call CTA */}
              <div className="bg-primary-gold p-8 rounded-xl shadow-lg text-white">
                <FaPhone className="text-5xl mb-4" />
                <h3 className="text-2xl font-bold mb-2">Call Us Directly</h3>
                <p className="mb-6 opacity-90">
                  Speak with our event planning experts
                </p>
                <a
                  href="tel:+919876543210"
                  className="inline-flex items-center space-x-2 bg-white text-primary-maroon px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:bg-neutral-beige"
                >
                  <FaPhone />
                  <span>+91 98765 43210</span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
