import React from 'react';
import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';

const TestimonialCard = ({ name, event, rating, review, image }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300"
    >
      <div className="flex items-center mb-4">
        <img
          src={image}
          alt={name}
          className="w-16 h-16 rounded-full object-cover mr-4 border-4 border-primary-gold"
        />
        <div>
          <h4 className="text-xl font-bold text-primary-maroon">{name}</h4>
          <p className="text-sm text-neutral-charcoal opacity-70">{event}</p>
        </div>
      </div>
      <div className="flex mb-4">
        {[...Array(rating)].map((_, i) => (
          <FaStar key={i} className="text-primary-gold text-lg" />
        ))}
      </div>
      <p className="text-neutral-charcoal italic leading-relaxed">
        "{review}"
      </p>
    </motion.div>
  );
};

export default TestimonialCard;
