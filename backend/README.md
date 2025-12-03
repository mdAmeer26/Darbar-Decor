# Darbar Decor Backend API

RESTful API for Darbar Decor event decoration website.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Create `.env` file:
```bash
cp .env.example .env
```

3. Configure environment variables in `.env`

4. Start the server:
```bash
npm run dev  # Development with auto-restart
npm start    # Production
```

## API Endpoints

### Contact Form
- `POST /api/contact` - Submit contact inquiry
- `GET /api/contact` - Get all contacts (admin)

### Gallery
- `GET /api/gallery` - Get all gallery items
- `GET /api/gallery?category=weddings` - Filter by category
- `POST /api/gallery` - Add gallery item (admin)
- `DELETE /api/gallery/:id` - Delete item (admin)

### Health Check
- `GET /api/health` - Check API status

## MongoDB Setup (Optional)

The API works with or without MongoDB. If MongoDB is unavailable, it automatically uses JSON file storage.

### Local MongoDB
```bash
mongod
```

### MongoDB Atlas (Cloud)
Update `MONGODB_URI` in `.env` with your Atlas connection string.

## File-Based Storage

If MongoDB is not available, data is stored in:
- `data/contacts.json` - Contact form submissions
- `data/gallery.json` - Gallery items

These files are created automatically.

## Technologies
- Express.js
- MongoDB with Mongoose
- express-validator
- CORS
- dotenv
