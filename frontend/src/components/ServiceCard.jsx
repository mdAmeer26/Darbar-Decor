import React from 'react';
import { motion } from 'framer-motion';

const ServiceCard = ({ icon, title, description, image }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="card group cursor-pointer"
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="gradient-overlay opacity-60"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-6xl text-primary-gold opacity-80">{icon}</div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold text-primary-maroon mb-3 group-hover:text-primary-gold transition-colors duration-300">
          {title}
        </h3>
        <p className="text-neutral-charcoal opacity-80 leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
