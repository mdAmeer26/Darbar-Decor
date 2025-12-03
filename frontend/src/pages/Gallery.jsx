import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [galleryItems, setGalleryItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'decor', name: 'Stage Decor' },
    { id: 'mandaps', name: 'Mandaps' },
    { id: 'lighting', name: 'Lighting' },
    { id: 'weddings', name: 'Weddings' },
    { id: 'garlands', name: 'Garlands' },
  ];

  // Fallback gallery data
  const fallbackGallery = [
    { id: 1, category: 'decor', image: 'https://images.unsplash.com/photo-1519167758481-83f29da8c6b6?w=800', title: 'Elegant Stage Setup' },
    { id: 2, category: 'mandaps', image: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800', title: 'Traditional Mandap' },
    { id: 3, category: 'weddings', image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800', title: 'Wedding Decoration' },
    { id: 4, category: 'lighting', image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800', title: 'Ambient Lighting' },
    { id: 5, category: 'decor', image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800', title: 'Reception Decor' },
    { id: 6, category: 'garlands', image: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=800', title: 'Fresh Flower Garlands' },
    { id: 7, category: 'weddings', image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800', title: 'Destination Wedding' },
    { id: 8, category: 'mandaps', image: 'https://images.unsplash.com/photo-1587271636175-90d58cdad458?w=800', title: 'Floral Mandap' },
    { id: 9, category: 'decor', image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800', title: 'Home Decoration' },
    { id: 10, category: 'lighting', image: 'https://images.unsplash.com/photo-1478147427282-58a87a120781?w=800', title: 'Fairy Lights' },
    { id: 11, category: 'weddings', image: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800', title: 'Outdoor Wedding' },
    { id: 12, category: 'decor', image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800', title: 'Car Decoration' },
    { id: 13, category: 'mandaps', image: 'https://images.unsplash.com/photo-1523438097201-512ae7d59c44?w=800', title: 'Modern Mandap' },
    { id: 14, category: 'garlands', image: 'https://images.unsplash.com/photo-1563207153-f403bf289096?w=800', title: 'Rose Garlands' },
    { id: 15, category: 'lighting', image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800', title: 'Event Lighting' },
    { id: 16, category: 'weddings', image: 'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?w=800', title: 'Grand Wedding' },
    { id: 17, category: 'decor', image: 'https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=800', title: 'Birthday Decoration' },
    { id: 18, category: 'mandaps', image: 'https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=800', title: 'Royal Mandap' },
  ];

  useEffect(() => {
    fetchGallery();
  }, []);

  const fetchGallery = async () => {
    // Use environment variable or default to localhost
    const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

    try {
      const response = await axios.get(`${API_URL}/api/gallery`);
      setGalleryItems(response.data.length > 0 ? response.data : fallbackGallery);
    } catch (error) {
      console.log('Using fallback gallery data');
      setGalleryItems(fallbackGallery);
    } finally {
      setLoading(false);
    }
  };

  const filteredItems = selectedCategory === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedCategory);

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
            Our Gallery
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl opacity-90"
          >
            Explore Our Beautiful Portfolio
          </motion.p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-neutral-beige">
        <div className="container mx-auto px-4">
          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-primary-maroon text-white shadow-lg scale-105'
                    : 'bg-white text-neutral-charcoal hover:bg-primary-gold hover:text-white shadow-md'
                }`}
              >
                {category.name}
              </button>
            ))}
          </motion.div>

          {/* Loading State */}
          {loading && (
            <div className="flex justify-center items-center py-20">
              <div className="spinner"></div>
            </div>
          )}

          {/* Gallery Grid */}
          {!loading && (
            <motion.div
              layout
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer aspect-square"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div>
                      <h3 className="text-white text-xl font-bold mb-2">
                        {item.title}
                      </h3>
                      <p className="text-primary-gold capitalize text-sm">
                        {item.category}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* No Results */}
          {!loading && filteredItems.length === 0 && (
            <div className="text-center py-20">
              <p className="text-2xl text-neutral-charcoal opacity-70">
                No items found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary-maroon mb-6">
              Like What You See?
            </h2>
            <p className="text-xl text-neutral-charcoal mb-10 max-w-2xl mx-auto opacity-80">
              Let's create something equally beautiful for your special event
            </p>
            <a
              href="/contact"
              className="inline-block bg-primary-maroon hover:bg-opacity-90 text-white px-12 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-2xl hover:scale-105"
            >
              Start Planning Now
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
