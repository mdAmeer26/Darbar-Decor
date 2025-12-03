const express = require('express');
const router = express.Router();
const Gallery = require('../models/Gallery');
const fs = require('fs').promises;
const path = require('path');

// File path for JSON fallback
const galleryFilePath = path.join(__dirname, '../data/gallery.json');

// Sample gallery data
const sampleGalleryData = [
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
];

// Ensure data directory exists
const ensureDataDir = async () => {
  const dataDir = path.join(__dirname, '../data');
  try {
    await fs.access(dataDir);
  } catch {
    await fs.mkdir(dataDir, { recursive: true });
  }
};

// Read gallery from JSON file
const readGalleryFromFile = async () => {
  try {
    await ensureDataDir();
    const data = await fs.readFile(galleryFilePath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    // If file doesn't exist, create it with sample data
    await writeGalleryToFile(sampleGalleryData);
    return sampleGalleryData;
  }
};

// Write gallery to JSON file
const writeGalleryToFile = async (gallery) => {
  await ensureDataDir();
  await fs.writeFile(galleryFilePath, JSON.stringify(gallery, null, 2));
};

// @route   GET /api/gallery
// @desc    Get all gallery items
// @access  Public
router.get('/', async (req, res) => {
  try {
    const { category } = req.query;

    // Try MongoDB first
    try {
      let query = {};
      if (category && category !== 'all') {
        query.category = category;
      }

      const gallery = await Gallery.find(query).sort({ createdAt: -1 });
      res.json(gallery);
    } catch (dbError) {
      // Fallback to JSON file
      let gallery = await readGalleryFromFile();
      
      if (category && category !== 'all') {
        gallery = gallery.filter(item => item.category === category);
      }
      
      res.json(gallery);
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching gallery',
      error: error.message,
    });
  }
});

// @route   POST /api/gallery
// @desc    Add new gallery item (admin use)
// @access  Public (should be protected in production)
router.post('/', async (req, res) => {
  try {
    const { title, category, image, description, featured } = req.body;

    // Try MongoDB first
    try {
      const galleryItem = await Gallery.create({
        title,
        category,
        image,
        description,
        featured,
      });

      res.status(201).json({
        success: true,
        message: 'Gallery item added successfully',
        data: galleryItem,
      });
    } catch (dbError) {
      // Fallback to JSON file
      const gallery = await readGalleryFromFile();
      const newItem = {
        id: Date.now(),
        title,
        category,
        image,
        description,
        featured: featured || false,
        createdAt: new Date().toISOString(),
      };
      
      gallery.push(newItem);
      await writeGalleryToFile(gallery);

      res.status(201).json({
        success: true,
        message: 'Gallery item added successfully',
        data: newItem,
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error adding gallery item',
      error: error.message,
    });
  }
});

// @route   DELETE /api/gallery/:id
// @desc    Delete gallery item (admin use)
// @access  Public (should be protected in production)
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    // Try MongoDB first
    try {
      await Gallery.findByIdAndDelete(id);
      res.json({ success: true, message: 'Gallery item deleted' });
    } catch (dbError) {
      // Fallback to JSON file
      let gallery = await readGalleryFromFile();
      gallery = gallery.filter(item => item.id !== parseInt(id));
      await writeGalleryToFile(gallery);
      res.json({ success: true, message: 'Gallery item deleted' });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error deleting gallery item',
      error: error.message,
    });
  }
});

module.exports = router;
