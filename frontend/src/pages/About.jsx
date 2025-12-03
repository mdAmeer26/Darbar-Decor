import React from 'react';
import { motion } from 'framer-motion';
import { FaAward, FaHeart, FaUsers, FaCheckCircle } from 'react-icons/fa';

const About = () => {
  const values = [
    {
      icon: <FaHeart className="text-5xl text-primary-gold mb-4" />,
      title: 'Passion',
      description: 'We pour our heart into every event, treating each celebration as our own.',
    },
    {
      icon: <FaAward className="text-5xl text-primary-gold mb-4" />,
      title: 'Excellence',
      description: 'Committed to delivering exceptional quality in every detail of your event.',
    },
    {
      icon: <FaUsers className="text-5xl text-primary-gold mb-4" />,
      title: 'Collaboration',
      description: 'Working closely with you to understand and realize your unique vision.',
    },
    {
      icon: <FaCheckCircle className="text-5xl text-primary-gold mb-4" />,
      title: 'Reliability',
      description: 'Timely execution and seamless coordination you can always count on.',
    },
  ];

  const whyChoose = [
    'Experienced team of creative designers and decorators',
    'Premium quality materials and fresh flowers',
    'Customized solutions tailored to your budget',
    'End-to-end event management services',
    'On-time delivery and professional execution',
    'Transparent pricing with no hidden costs',
    '24/7 customer support throughout planning',
    'Extensive portfolio of successful events',
  ];

  const team = [
    {
      name: 'Rajesh Darbar',
      role: 'Founder & Creative Director',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
    },
    {
      name: 'Priya Malhotra',
      role: 'Lead Designer',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
    },
    {
      name: 'Vikram Singh',
      role: 'Event Manager',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400',
    },
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
            About Darbar Decor
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl opacity-90"
          >
            Creating Beautiful Memories Since 2014
          </motion.p>
        </div>
      </section>

      {/* Our Story */}
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
                Crafting Celebrations With Style, Tradition & Perfection
              </h2>
              <div className="space-y-4 text-lg text-neutral-charcoal leading-relaxed">
                <p>
                  Darbar Decor is a premium décor and event-design company dedicated to creating
                  unforgettable experiences. From grand wedding mandaps to elegant stage décor and
                  destination wedding setups, our team blends creativity with craftsmanship to
                  bring your dream event to life.
                </p>
                <p>
                  Founded in 2014, we've grown from a small passionate team to one of the most
                  trusted names in event decoration. Our journey has been marked by countless
                  successful celebrations, satisfied clients, and the joy of being part of life's
                  most precious moments.
                </p>
                <p className="font-semibold text-primary-maroon">
                  Our focus is simple: Beautiful décor, seamless execution, and memories that last forever.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-2 gap-4"
            >
              <img
                src="https://images.unsplash.com/photo-1519741497674-611481863552?w=800"
                alt="Decoration 1"
                className="rounded-lg shadow-lg h-64 w-full object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800"
                alt="Decoration 2"
                className="rounded-lg shadow-lg h-64 w-full object-cover mt-8"
              />
              <img
                src="https://images.unsplash.com/photo-1519167758481-83f29da8c6b6?w=800"
                alt="Decoration 3"
                className="rounded-lg shadow-lg h-64 w-full object-cover -mt-8"
              />
              <img
                src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800"
                alt="Decoration 4"
                className="rounded-lg shadow-lg h-64 w-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-neutral-beige">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-10 rounded-xl shadow-lg"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary-maroon to-secondary-purple rounded-full flex items-center justify-center mb-6">
                <FaAward className="text-primary-gold text-3xl" />
              </div>
              <h3 className="text-3xl font-bold text-primary-maroon mb-4">Our Mission</h3>
              <p className="text-lg text-neutral-charcoal leading-relaxed">
                To create extraordinary celebrations that reflect your unique style and personality,
                while ensuring every detail exceeds expectations. We strive to make your special day
                stress-free and magical through innovative designs and flawless execution.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-10 rounded-xl shadow-lg"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary-gold to-secondary-emerald rounded-full flex items-center justify-center mb-6">
                <FaHeart className="text-white text-3xl" />
              </div>
              <h3 className="text-3xl font-bold text-primary-maroon mb-4">Our Vision</h3>
              <p className="text-lg text-neutral-charcoal leading-relaxed">
                To be the most trusted and innovative event decoration company, recognized for
                transforming dreams into reality. We envision a future where every celebration we
                touch becomes a cherished memory that lasts a lifetime.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">Our Core Values</h2>
            <p className="section-subtitle">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-8 bg-neutral-beige rounded-xl hover:shadow-lg transition-shadow duration-300"
              >
                {value.icon}
                <h3 className="text-2xl font-bold text-primary-maroon mb-3">
                  {value.title}
                </h3>
                <p className="text-neutral-charcoal opacity-80">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-primary-maroon to-secondary-purple text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
              Why Choose Darbar Decor?
            </h2>
            <p className="text-xl text-center mb-12 opacity-90 max-w-3xl mx-auto">
              We're not just decorators – we're dream makers
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {whyChoose.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start space-x-4 bg-white/10 backdrop-blur-sm p-6 rounded-lg"
              >
                <FaCheckCircle className="text-primary-gold text-2xl flex-shrink-0 mt-1" />
                <p className="text-lg">{reason}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">Meet Our Team</h2>
            <p className="section-subtitle">
              Passionate professionals dedicated to your perfect celebration
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="relative overflow-hidden rounded-xl mb-4 shadow-lg">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-maroon/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-2xl font-bold text-primary-maroon mb-2">
                  {member.name}
                </h3>
                <p className="text-neutral-charcoal opacity-80">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
