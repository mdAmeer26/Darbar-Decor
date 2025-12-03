# 🎨 Darbar Decor Website - Complete Project

## 📋 Project Overview

A fully functional, modern website for **Darbar Decor** - a premium event decoration company. The website features:

- ✅ 5 Complete Pages (Home, About, Services, Gallery, Contact)
- ✅ Responsive Design (Mobile, Tablet, Desktop)
- ✅ Modern UI with Indian Wedding Color Palette
- ✅ Smooth Animations & Parallax Effects
- ✅ Contact Form with Backend API
- ✅ Dynamic Gallery with Filters
- ✅ WhatsApp Integration
- ✅ SEO Optimized
- ✅ Backend API with MongoDB Support
- ✅ JSON File Fallback (works without database)

---

## 🎯 Quick Start (5 Minutes)

### Terminal 1 - Start Backend:
```powershell
cd "c:\Users\mdame\OneDrive\Desktop\Darbar Decor\backend"
npm install
npm run dev
```

### Terminal 2 - Start Frontend:
```powershell
cd "c:\Users\mdame\OneDrive\Desktop\Darbar Decor\frontend"
npm install
npm run dev
```

**Open**: http://localhost:3000 in your browser

---

## 📁 Complete File Structure

```
Darbar Decor/
│
├── 📄 README.md (Main documentation)
├── 📄 SETUP.md (Setup instructions)
├── 📄 DEPLOYMENT.md (Deployment guide)
│
├── frontend/
│   ├── public/
│   │   └── logo.svg (Company logo)
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx (Sticky navigation with menu)
│   │   │   ├── Footer.jsx (Footer with links & contact info)
│   │   │   ├── ServiceCard.jsx (Reusable service display)
│   │   │   ├── TestimonialCard.jsx (Customer reviews)
│   │   │   ├── WhatsAppButton.jsx (Floating WhatsApp button)
│   │   │   └── Preloader.jsx (Loading animation)
│   │   ├── pages/
│   │   │   ├── Home.jsx (Landing page with hero section)
│   │   │   ├── About.jsx (Company story & team)
│   │   │   ├── Services.jsx (All services detailed)
│   │   │   ├── Gallery.jsx (Filterable image gallery)
│   │   │   └── Contact.jsx (Contact form & map)
│   │   ├── App.jsx (Main app component)
│   │   ├── main.jsx (Entry point)
│   │   └── index.css (Global styles & animations)
│   ├── index.html (HTML template)
│   ├── package.json (Dependencies)
│   ├── vite.config.js (Vite configuration)
│   ├── tailwind.config.js (Tailwind with custom colors)
│   ├── postcss.config.js (PostCSS config)
│   ├── .gitignore
│   └── README.md
│
└── backend/
    ├── config/
    │   └── db.js (MongoDB connection)
    ├── models/
    │   ├── Contact.js (Contact form schema)
    │   └── Gallery.js (Gallery item schema)
    ├── routes/
    │   ├── contact.js (Contact API routes)
    │   └── gallery.js (Gallery API routes)
    ├── data/
    │   ├── contacts.json (Fallback contact storage)
    │   └── gallery.json (Fallback gallery storage)
    ├── server.js (Main server file)
    ├── package.json (Dependencies)
    ├── .env (Environment variables)
    ├── .env.example (Environment template)
    ├── .gitignore
    └── README.md
```

---

## 🎨 Color Palette

| Color | Hex Code | Usage |
|-------|----------|-------|
| Royal Maroon | `#7A0A23` | Primary brand color, buttons, headings |
| Regal Gold | `#D4A017` | Luxury accents, CTAs, highlights |
| Elegant White | `#FFFFFF` | Backgrounds, text on dark |
| Blush Pink | `#F7DDE2` | Soft accents, hover states |
| Deep Purple | `#4B1A47` | Secondary, gradients |
| Emerald Green | `#0F5132` | Traditional accents |
| Charcoal Gray | `#333333` | Text, borders |
| Soft Beige | `#F2E8DA` | Section backgrounds |

---

## 📄 Pages Breakdown

### 1. Home Page (`Home.jsx`)
- **Hero Section**: Full-screen banner with CTA buttons
- **Services Showcase**: 6 service cards with images
- **Statistics**: 500+ events, 10+ years, 100% satisfaction
- **Gallery Preview**: 6-image grid
- **Testimonials**: 3 customer reviews with ratings
- **Final CTA**: "Ready to Create Magic" section

### 2. About Page (`About.jsx`)
- **Hero**: Page banner
- **Our Story**: Company history and mission statement
- **Image Grid**: 4 beautiful images
- **Mission & Vision**: Two card layout
- **Core Values**: 4 value cards (Passion, Excellence, Collaboration, Reliability)
- **Why Choose Us**: 8 reasons with checkmarks
- **Team**: 3 team member profiles

### 3. Services Page (`Services.jsx`)
- **Hero**: Page banner
- **Service Grid**: 8 detailed services
  - Stage Décor
  - Mandap Designs
  - Car Decoration
  - Home Décor
  - Garland Making
  - Event Management
  - Lighting Solutions
  - Destination Weddings
- **Process**: 6-step workflow
- **Features**: Premium quality highlights
- **CTA**: Consultation and call buttons

### 4. Gallery Page (`Gallery.jsx`)
- **Hero**: Page banner
- **Category Filter**: All, Stage Decor, Mandaps, Lighting, Weddings, Garlands
- **Gallery Grid**: Masonry-style responsive grid
- **Image Hover**: Title and category overlay
- **Dynamic Loading**: Fetches from API
- **CTA**: "Start Planning Now" button

### 5. Contact Page (`Contact.jsx`)
- **Hero**: Page banner
- **Contact Info Cards**: Phone, Email, Address, Hours
- **Contact Form**: 
  - Name, Email, Phone (required)
  - Event Date, Event Type
  - Requirements (textarea)
  - Validation and success/error messages
- **Google Map**: Embedded map
- **WhatsApp CTA**: Quick chat button
- **Call CTA**: Direct call button

---

## 🔧 Key Features Explained

### Frontend Features

1. **Responsive Design**
   - Mobile-first approach
   - Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
   - Hamburger menu on mobile

2. **Animations**
   - Framer Motion for page transitions
   - Fade-in effects on scroll
   - Hover animations on cards
   - Parallax background on hero sections

3. **Navigation**
   - Sticky navbar
   - Active page highlighting
   - Smooth scroll to sections
   - Mobile-friendly menu

4. **WhatsApp Integration**
   - Floating button (bottom-right)
   - Pre-filled message
   - Opens in new tab
   - Pulse animation

5. **SEO Optimization**
   - Meta tags in index.html
   - Semantic HTML structure
   - Alt tags on images
   - Fast loading with Vite

### Backend Features

1. **RESTful API**
   - Clean route structure
   - Express middleware
   - CORS enabled for cross-origin requests
   - Error handling

2. **Database Flexibility**
   - MongoDB with Mongoose (primary)
   - Automatic JSON file fallback
   - No crashes if DB unavailable

3. **Validation**
   - express-validator for form validation
   - Email format checking
   - Required field enforcement

4. **Contact Management**
   - Store inquiries with timestamp
   - Status tracking (pending, contacted, etc.)
   - Email and phone validation

5. **Gallery Management**
   - CRUD operations
   - Category filtering
   - Featured items support

---

## 🚀 Testing Checklist

### Frontend Tests
- [ ] All pages load correctly
- [ ] Navigation works (all links)
- [ ] Mobile menu opens/closes
- [ ] Forms validate properly
- [ ] Images load correctly
- [ ] Animations work smoothly
- [ ] WhatsApp button works
- [ ] Gallery filters work
- [ ] Responsive on all screen sizes

### Backend Tests
- [ ] Server starts without errors
- [ ] Health check endpoint works (`/api/health`)
- [ ] Contact form submission works
- [ ] Gallery API returns data
- [ ] CORS allows frontend requests
- [ ] JSON fallback works (without MongoDB)

---

## 🛠️ Customization Guide

### Change Contact Information

**Files to update:**
- `frontend/src/components/Footer.jsx` (lines 50-65)
- `frontend/src/components/Navbar.jsx` (line 68)
- `frontend/src/components/WhatsAppButton.jsx` (line 5)
- `frontend/src/pages/Contact.jsx` (lines 35-65)

**Replace:**
- Phone: `+919876543210` → Your phone number
- Email: `info@darbardecor.com` → Your email
- Address: Update in Footer and Contact page

### Change Colors

Edit `frontend/tailwind.config.js`:
```javascript
colors: {
  primary: {
    maroon: '#7A0A23', // Change this
    gold: '#D4A017',   // Change this
    // etc.
  }
}
```

### Add More Services

Edit `frontend/src/pages/Services.jsx`:
Add new object to `services` array (line 12):
```javascript
{
  icon: <YourIcon />,
  title: 'New Service',
  description: 'Description here...',
  image: 'image-url-here',
}
```

### Update Gallery Images

**Option 1**: Replace placeholder URLs with your images
**Option 2**: Add real images through the API:

```bash
POST http://localhost:5000/api/gallery
Content-Type: application/json

{
  "title": "Beautiful Mandap",
  "category": "mandaps",
  "image": "https://your-image-url.jpg",
  "description": "Optional description"
}
```

---

## 📊 Technology Stack

### Frontend
- **Framework**: React 18.2
- **Build Tool**: Vite 5.0
- **Styling**: Tailwind CSS 3.3
- **Animations**: Framer Motion 10.16
- **Routing**: React Router DOM 6.20
- **HTTP Client**: Axios 1.6
- **Icons**: React Icons 4.12

### Backend
- **Runtime**: Node.js
- **Framework**: Express 4.18
- **Database**: MongoDB with Mongoose 8.0
- **Validation**: express-validator 7.0
- **CORS**: cors 2.8
- **Environment**: dotenv 16.3

---

## 🔐 Security Notes

1. **Environment Variables**: Never commit `.env` file
2. **API Keys**: Store in environment variables
3. **CORS**: Configure allowed origins in production
4. **Input Validation**: All forms have server-side validation
5. **MongoDB**: Use strong passwords and IP whitelisting

---

## 📈 Performance

- **Lighthouse Score Target**: 90+
- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3.5s
- **Image Optimization**: All images from CDN
- **Code Splitting**: React lazy loading ready
- **Caching**: Browser caching enabled

---

## 🆘 Common Issues & Solutions

### Issue: Port 3000 already in use
**Solution**: 
```powershell
# Find and kill process
Get-Process -Id (Get-NetTCPConnection -LocalPort 3000).OwningProcess | Stop-Process
```

### Issue: MongoDB connection failed
**Solution**: The app will work fine with JSON file fallback. To fix:
1. Install MongoDB locally, OR
2. Use MongoDB Atlas (free cloud database)

### Issue: Images not loading
**Solution**: Check internet connection (images are from Unsplash CDN)

### Issue: npm install fails
**Solution**: Delete `node_modules` and `package-lock.json`, then run `npm install` again

---

## 📞 Support Resources

- **React Docs**: https://react.dev
- **Tailwind CSS**: https://tailwindcss.com/docs
- **Express.js**: https://expressjs.com
- **MongoDB**: https://docs.mongodb.com
- **Framer Motion**: https://www.framer.com/motion

---

## 📝 License & Credits

- **Project**: Darbar Decor Website
- **Built with**: React, Tailwind CSS, Node.js, Express, MongoDB
- **Images**: Unsplash (replace with actual photos)
- **Icons**: React Icons
- **Fonts**: Google Fonts (Playfair Display, Poppins)

---

## ✅ What's Included

✔️ **5 Complete Pages** - All content ready  
✔️ **Responsive Design** - Works on all devices  
✔️ **Backend API** - Fully functional  
✔️ **Contact Form** - With email validation  
✔️ **Gallery System** - With category filters  
✔️ **WhatsApp Integration** - Click-to-chat  
✔️ **Animations** - Smooth and professional  
✔️ **SEO Ready** - Meta tags included  
✔️ **Documentation** - Complete guides  
✔️ **No Database Required** - JSON fallback included  

---

## 🎉 You're All Set!

Your complete Darbar Decor website is ready to use. Follow the Quick Start guide to launch it locally, then use the DEPLOYMENT.md guide when you're ready to go live.

**Happy Decorating! 🎨✨**
