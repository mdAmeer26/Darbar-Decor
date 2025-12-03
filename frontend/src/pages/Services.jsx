import React from 'react';
import { motion } from 'framer-motion';
import {
  FaTheaterMasks,
  FaRing,
  FaCar,
  FaHome,
  FaLeaf,
  FaCalendarAlt,
  FaLightbulb,
  FaMusic,
} from 'react-icons/fa';
import ServiceCard from '../components/ServiceCard';

const Services = () => {
  const services = [
    {
      icon: <FaTheaterMasks />,
      title: 'Stage Décor',
      description: 'Transform your stage into a breathtaking centerpiece with our custom designs. We create stunning backdrops, elegant drapery, and thematic setups perfect for weddings, corporate events, and special occasions.',
      image: 'https://images.unsplash.com/photo-1519167758481-83f29da8c6b6?w=800',
    },
    {
      icon: <FaRing />,
      title: 'Mandap Designs',
      description: 'Sacred and beautiful mandap setups that honor tradition while embracing modern aesthetics. From traditional wooden mandaps to contemporary floral designs, we create the perfect setting for your sacred ceremonies.',
      image: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800',
    },
    {
      icon: <FaCar />,
      title: 'Car Decoration',
      description: 'Make a grand entrance with our elegant car decoration services. We use premium fresh flowers, ribbons, and decorative accessories to create stunning designs for the bride and groom\'s special arrival.',
      image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800',
    },
    {
      icon: <FaHome />,
      title: 'Home Décor',
      description: 'Bring the celebration home with our beautiful home decoration services. From entrance arches to room setups, we transform your space with elegant floral arrangements and traditional decorative elements.',
      image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800',
    },
    {
      icon: <FaLeaf />,
      title: 'Garland Making',
      description: 'Handcrafted fresh flower garlands made with premium blooms. From traditional Varmala to decorative garlands, each piece is created with attention to detail and cultural significance.',
      image: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=800',
    },
    {
      icon: <FaCalendarAlt />,
      title: 'Event Management',
      description: 'Complete end-to-end event planning and coordination services. We handle everything from vendor management to timeline coordination, ensuring your event runs smoothly and stress-free.',
      image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800',
    },
    {
      icon: <FaLightbulb />,
      title: 'Lighting Solutions',
      description: 'Set the perfect ambiance with our professional lighting services. From romantic fairy lights to dramatic LED walls and special effects, we create magical atmospheres that enhance your décor.',
      image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800',
    },
    {
      icon: <FaMusic />,
      title: 'Destination Weddings',
      description: 'Turn your dream destination wedding into reality. We provide complete décor management for weddings at exotic locations, handling logistics, local vendors, and creating unforgettable experiences.',
      image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800',
    },
  ];

  const process = [
    {
      step: '01',
      title: 'Consultation',
      description: 'We meet with you to understand your vision, preferences, budget, and event details.',
    },
    {
      step: '02',
      title: 'Design Proposal',
      description: 'Our team creates a customized design plan with mood boards, sketches, and material samples.',
    },
    {
      step: '03',
      title: 'Planning',
      description: 'Detailed planning of all elements including timeline, vendor coordination, and logistics.',
    },
    {
      step: '04',
      title: 'Execution',
      description: 'Professional setup and installation with our experienced team ensuring perfection.',
    },
    {
      step: '05',
      title: 'Celebration',
      description: 'Enjoy your event while we manage everything, ensuring seamless execution.',
    },
    {
      step: '06',
      title: 'Cleanup',
      description: 'Complete post-event cleanup and dismantling, leaving the venue spotless.',
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1519741497674-611481863552?w=1920)',
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
            Our Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl opacity-90"
          >
            Comprehensive Event Decoration & Management Solutions
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">What We Offer</h2>
            <p className="section-subtitle">
              Tailored decoration and event management services for every celebration
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 bg-neutral-beige">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">How We Work</h2>
            <p className="section-subtitle">
              Our streamlined process ensures your event is executed flawlessly
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {process.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="absolute -top-6 left-8 w-14 h-14 bg-gradient-to-br from-primary-maroon to-secondary-purple rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-primary-gold font-bold text-xl">
                    {item.step}
                  </span>
                </div>
                <div className="mt-6">
                  <h3 className="text-2xl font-bold text-primary-maroon mb-3">
                    {item.title}
                  </h3>
                  <p className="text-neutral-charcoal opacity-80 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-primary-maroon mb-6">
                Premium Quality, Personalized Service
              </h2>
              <div className="space-y-4">
                {[
                  'Custom designs tailored to your theme and preferences',
                  'Premium quality materials and fresh flowers',
                  'Experienced team of professional decorators',
                  'Flexible packages to suit any budget',
                  'On-time setup and professional execution',
                  'Complete coordination with other vendors',
                  '24/7 support during event planning',
                  'Post-event cleanup included',
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-6 h-6 bg-primary-gold rounded-full flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <p className="text-lg text-neutral-charcoal">{feature}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1519741497674-611481863552?w=800"
                alt="Service Features"
                className="rounded-xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary-gold p-8 rounded-xl shadow-2xl">
                <p className="text-4xl font-bold text-white mb-2">10+</p>
                <p className="text-white">Years Experience</p>
              </div>
            </motion.div>
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
              Ready to Transform Your Event?
            </h2>
            <p className="text-xl mb-10 max-w-2xl mx-auto opacity-90">
              Let's discuss your vision and create something extraordinary together
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-block bg-primary-gold hover:bg-opacity-90 text-white px-12 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-2xl hover:scale-105"
              >
                Get Free Consultation
              </a>
              <a
                href="tel:+919876543210"
                className="inline-block bg-white text-primary-maroon hover:bg-neutral-beige px-12 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-2xl hover:scale-105"
              >
                Call Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
