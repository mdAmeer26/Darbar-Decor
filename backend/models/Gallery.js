const mongoose = require('mongoose');

const GallerySchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please provide a title'],
    trim: true,
  },
  category: {
    type: String,
    required: [true, 'Please provide a category'],
    enum: ['decor', 'mandaps', 'lighting', 'weddings', 'garlands'],
  },
  image: {
    type: String,
    required: [true, 'Please provide an image URL'],
  },
  description: {
    type: String,
    trim: true,
  },
  featured: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Gallery', GallerySchema);
