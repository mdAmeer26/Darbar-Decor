# Darbar Decor - Premium Event Decoration Website

A complete, modern, and responsive website for **Darbar Decor**, a premium event decoration and management company specializing in weddings, mandaps, stage décor, and destination celebrations.

## 🌟 Features

### Frontend
- ✨ Modern, elegant UI with Indian wedding-inspired color palette
- 📱 Fully responsive mobile-first design
- 🎨 Smooth animations and parallax effects
- 🖼️ Dynamic gallery with category filters
- 📝 Contact form with validation
- 💬 WhatsApp quick-chat integration
- 🎯 SEO-friendly with meta tags
- ⚡ Fast performance with Vite
- 🎭 Preloader animation

### Backend
- 🔧 RESTful API with Express.js
- 💾 MongoDB integration with JSON file fallback
- ✅ Form validation
- 🔄 CORS enabled
- 📊 Contact form submissions
- 🖼️ Gallery management API
- 🛡️ Error handling middleware

## 🎨 Color Palette

- **Royal Maroon** (#7A0A23) - Primary brand color
- **Regal Gold** (#D4A017) - Luxury accents
- **Elegant White** (#FFFFFF) - Clean backgrounds
- **Blush Pink** (#F7DDE2) - Soft accents
- **Deep Purple** (#4B1A47) - Rich secondary
- **Emerald Green** (#0F5132) - Traditional harmony

## 📁 Project Structure

```
Darbar Decor/
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── ServiceCard.jsx
│   │   │   ├── TestimonialCard.jsx
│   │   │   ├── WhatsAppButton.jsx
│   │   │   └── Preloader.jsx
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Services.jsx
│   │   │   ├── Gallery.jsx
│   │   │   └── Contact.jsx
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   ├── tailwind.config.js
│   └── postcss.config.js
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── models/
│   │   ├── Contact.js
│   │   └── Gallery.js
│   ├── routes/
│   │   ├── contact.js
│   │   └── gallery.js
│   ├── data/
│   │   ├── contacts.json
│   │   └── gallery.json
│   ├── server.js
│   ├── package.json
│   └── .env.example
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- MongoDB (optional - app uses JSON file fallback)

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file:
```bash
cp .env.example .env
```

4. Edit `.env` with your configuration:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/darbar-decor
NODE_ENV=development
```

5. Start the backend server:
```bash
# Development mode with auto-restart
npm run dev

# Production mode
npm start
```

The backend will run on `http://localhost:5000`

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The frontend will run on `http://localhost:3000`

## 📡 API Endpoints

### Contact Routes
- **POST** `/api/contact` - Submit contact form
- **GET** `/api/contact` - Get all contact submissions (admin)

### Gallery Routes
- **GET** `/api/gallery` - Get all gallery items
- **GET** `/api/gallery?category=weddings` - Filter by category
- **POST** `/api/gallery` - Add new gallery item (admin)
- **DELETE** `/api/gallery/:id` - Delete gallery item (admin)

### Health Check
- **GET** `/api/health` - Check API status

## 🎯 Pages

1. **Home** - Hero section, services showcase, testimonials, gallery preview
2. **About Us** - Company story, mission, vision, team, values
3. **Services** - Detailed service descriptions with images
4. **Gallery** - Filterable image gallery with categories
5. **Contact** - Contact form, map, quick contact options

## 🛠️ Technologies Used

### Frontend
- React 18
- React Router DOM
- Tailwind CSS
- Framer Motion (animations)
- Axios (API calls)
- React Icons
- Vite (build tool)

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- CORS
- dotenv
- express-validator
- body-parser

## 📦 Build for Production

### Frontend
```bash
cd frontend
npm run build
```

### Backend
The backend is production-ready. Just set `NODE_ENV=production` in your `.env` file.

## 🌐 Deployment

### Frontend (Vercel/Netlify)
1. Build the frontend: `npm run build`
2. Deploy the `dist` folder to Vercel or Netlify
3. Update API endpoint in frontend code to your backend URL

### Backend (Heroku/Railway/DigitalOcean)
1. Push code to Git repository
2. Connect to your hosting platform
3. Set environment variables
4. Deploy

## 🔧 Configuration

### Update Contact Information
Edit the following files:
- `frontend/src/components/Footer.jsx`
- `frontend/src/components/Navbar.jsx`
- `frontend/src/components/WhatsAppButton.jsx`
- `frontend/src/pages/Contact.jsx`

### Update Colors
Edit `frontend/tailwind.config.js` to customize the color palette.

### Add/Remove Services
Edit `frontend/src/pages/Services.jsx` to modify service offerings.

## 📝 Environment Variables

### Backend (.env)
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/darbar-decor
NODE_ENV=development
```

## 🤝 Support

For support and inquiries:
- 📞 Phone: +91 98765 43210
- 📧 Email: info@darbardecor.com
- 💬 WhatsApp: Available on website

## 📄 License

This project is private and proprietary to Darbar Decor.

## 🙏 Acknowledgments

- Design inspiration from modern wedding decoration websites
- Images from Unsplash (replace with actual company photos)
- Icons from React Icons

---

**Built with ❤️ for Darbar Decor** - Creating Beautiful Memories Since 2014
