import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FaTheaterMasks,
  FaHome,
  FaCar,
  FaLightbulb,
  FaRing,
  FaLeaf,
  FaCalendarAlt,
  FaMusic,
} from 'react-icons/fa';
import ServiceCard from '../components/ServiceCard';
import TestimonialCard from '../components/TestimonialCard';

const Home = () => {
  const categories = [
    {
      icon: <FaTheaterMasks />,
      title: 'Stage Décor',
      description: 'Stunning stage setups for weddings, corporate events, and special occasions.',
      image: 'https://images.unsplash.com/photo-1519167758481-83f29da8c6b6?w=800',
    },
    {
      icon: <FaRing />,
      title: 'Mandap Designs',
      description: 'Traditional and contemporary mandap décor for your sacred ceremonies.',
      image: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800',
    },
    {
      icon: <FaCar />,
      title: 'Car Decoration',
      description: 'Elegant car décor for bride & groom entry with flowers and accessories.',
      image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800',
    },
    {
      icon: <FaLightbulb />,
      title: 'Lighting Solutions',
      description: 'Ambient lighting, LED walls, and special effects to set the perfect mood.',
      image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800',
    },
    {
      icon: <FaCalendarAlt />,
      title: 'Event Management',
      description: 'End-to-end planning and execution of your dream celebration.',
      image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800',
    },
    {
      icon: <FaMusic />,
      title: 'Destination Weddings',
      description: 'Exotic destination wedding planning with complete décor management.',
      image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800',
    },
  ];

  const testimonials = [
    {
      name: 'Priya & Rahul',
      event: 'Wedding Ceremony',
      rating: 5,
      review: 'Darbar Decor transformed our wedding into a fairytale! Every detail was perfect. The mandap design was breathtaking and our guests couldn\'t stop praising the décor.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200',
    },
    {
      name: 'Anjali Sharma',
      event: 'Engagement Ceremony',
      rating: 5,
      review: 'Professional, creative, and extremely accommodating. They brought our vision to life and exceeded all expectations. Highly recommended for any special event!',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200',
    },
    {
      name: 'Vikram Patel',
      event: 'Corporate Event',
      rating: 5,
      review: 'Exceptional stage design and lighting for our annual gala. The team was punctual, professional, and the setup was completed flawlessly. Will definitely hire again!',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200',
    },
  ];

  const galleryPreview = [
    'https://images.unsplash.com/photo-1519741497674-611481863552?w=800',
    'https://images.unsplash.com/photo-1587271636175-90d58cdad458?w=800',
    'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800',
    'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800',
    'https://images.unsplash.com/photo-1519167758481-83f29da8c6b6?w=800',
    'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800',
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 parallax"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1519741497674-611481863552?w=1920)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary-maroon/80 to-secondary-purple/70"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
          >
            Crafting Celebrations With
            <span className="block text-primary-gold mt-2">Style, Tradition & Perfection</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto opacity-90"
          >
            Premium décor and event-design company creating unforgettable experiences
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/contact" className="btn-primary">
              Book Your Event
            </Link>
            <Link to="/gallery" className="btn-secondary">
              View Gallery
            </Link>
          </motion.div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-8 h-12 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-2 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-neutral-beige">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">Our Services</h2>
            <p className="section-subtitle">
              From traditional mandaps to modern stage setups, we bring your vision to life with creativity and precision
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {categories.map((category, index) => (
              <ServiceCard key={index} {...category} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/services" className="btn-outline">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">Why Choose Darbar Decor?</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {[
              { number: '500+', label: 'Events Completed' },
              { number: '10+', label: 'Years Experience' },
              { number: '100%', label: 'Client Satisfaction' },
              { number: '50+', label: 'Expert Team Members' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-8 bg-gradient-to-br from-primary-maroon to-secondary-purple rounded-xl shadow-lg text-white"
              >
                <div className="text-5xl font-bold text-primary-gold mb-2">
                  {stat.number}
                </div>
                <div className="text-lg opacity-90">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-20 bg-neutral-beige">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">Our Work</h2>
            <p className="section-subtitle">
              Explore our stunning portfolio of unforgettable celebrations
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-12">
            {galleryPreview.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="img-hover-zoom rounded-xl overflow-hidden shadow-lg aspect-square"
              >
                <img
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/gallery" className="btn-primary">
              View Full Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">What Our Clients Say</h2>
            <p className="section-subtitle">
              Real stories from real celebrations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-maroon to-secondary-purple text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Create Magic?
            </h2>
            <p className="text-xl mb-10 max-w-2xl mx-auto opacity-90">
              Let's bring your dream event to life. Contact us today for a consultation!
            </p>
            <Link
              to="/contact"
              className="inline-block bg-primary-gold hover:bg-opacity-90 text-white px-12 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-2xl hover:scale-105"
            >
              Get Started Now
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
