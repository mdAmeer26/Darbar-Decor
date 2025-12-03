const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const Contact = require('../models/Contact');
const fs = require('fs').promises;
const path = require('path');

// File path for JSON fallback
const contactsFilePath = path.join(__dirname, '../data/contacts.json');

// Ensure data directory exists
const ensureDataDir = async () => {
  const dataDir = path.join(__dirname, '../data');
  try {
    await fs.access(dataDir);
  } catch {
    await fs.mkdir(dataDir, { recursive: true });
  }
};

// Read contacts from JSON file
const readContactsFromFile = async () => {
  try {
    await ensureDataDir();
    const data = await fs.readFile(contactsFilePath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
};

// Write contacts to JSON file
const writeContactsToFile = async (contacts) => {
  await ensureDataDir();
  await fs.writeFile(contactsFilePath, JSON.stringify(contacts, null, 2));
};

// @route   POST /api/contact
// @desc    Submit contact form
// @access  Public
router.post(
  '/',
  [
    body('name').trim().notEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('Please provide a valid email'),
    body('phone').trim().notEmpty().withMessage('Phone number is required'),
    body('requirements').trim().notEmpty().withMessage('Requirements are required'),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success: false, errors: errors.array() });
    }

    try {
      const { name, email, phone, eventDate, eventType, requirements } = req.body;

      // Try MongoDB first
      try {
        const contact = await Contact.create({
          name,
          email,
          phone,
          eventDate,
          eventType,
          requirements,
        });

        res.status(201).json({
          success: true,
          message: 'Contact form submitted successfully',
          data: contact,
        });
      } catch (dbError) {
        // Fallback to JSON file if MongoDB fails
        console.log('Using file-based storage for contact');
        
        const contacts = await readContactsFromFile();
        const newContact = {
          id: Date.now(),
          name,
          email,
          phone,
          eventDate,
          eventType,
          requirements,
          status: 'pending',
          createdAt: new Date().toISOString(),
        };
        
        contacts.push(newContact);
        await writeContactsToFile(contacts);

        res.status(201).json({
          success: true,
          message: 'Contact form submitted successfully',
          data: newContact,
        });
      }
    } catch (error) {
      console.error('Contact submission error:', error);
      res.status(500).json({
        success: false,
        message: 'Error submitting contact form',
        error: error.message,
      });
    }
  }
);

// @route   GET /api/contact
// @desc    Get all contacts (admin use)
// @access  Public (should be protected in production)
router.get('/', async (req, res) => {
  try {
    // Try MongoDB first
    try {
      const contacts = await Contact.find().sort({ createdAt: -1 });
      res.json({ success: true, data: contacts });
    } catch (dbError) {
      // Fallback to JSON file
      const contacts = await readContactsFromFile();
      res.json({ success: true, data: contacts });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching contacts',
      error: error.message,
    });
  }
});

module.exports = router;
