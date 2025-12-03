# SETUP INSTRUCTIONS FOR DARBAR DECOR WEBSITE

## Quick Start Guide

### Step 1: Backend Setup

1. Open a terminal and navigate to the backend folder:
```powershell
cd "c:\Users\mdame\OneDrive\Desktop\Darbar Decor\backend"
```

2. Install backend dependencies:
```powershell
npm install
```

3. Start the backend server:
```powershell
npm run dev
```

The backend should now be running on http://localhost:5000

### Step 2: Frontend Setup

1. Open a NEW terminal and navigate to the frontend folder:
```powershell
cd "c:\Users\mdame\OneDrive\Desktop\Darbar Decor\frontend"
```

2. Install frontend dependencies:
```powershell
npm install
```

3. Start the frontend development server:
```powershell
npm run dev
```

The website should now open automatically in your browser at http://localhost:3000

## Troubleshooting

### If MongoDB connection fails:
- Don't worry! The app will automatically use JSON file storage
- All features will work the same way

### If you see port already in use:
- Close other applications using ports 3000 or 5000
- Or change the port in the configuration files

### If npm install fails:
- Make sure you have Node.js installed (version 16 or higher)
- Download from: https://nodejs.org/

## What's Next?

1. **Customize Content**: Edit pages in `frontend/src/pages/`
2. **Update Contact Info**: Change phone numbers and email in components
3. **Add Real Images**: Replace Unsplash URLs with your actual photos
4. **Update Colors**: Modify `frontend/tailwind.config.js` if needed
5. **Deploy**: Follow deployment instructions in main README.md

## Need Help?

- Check the main README.md for detailed documentation
- Review the backend/README.md for API information
- Review the frontend/README.md for frontend customization

## Testing the Website

1. Visit http://localhost:3000
2. Navigate through all pages (Home, About, Services, Gallery, Contact)
3. Test the contact form
4. Try filtering gallery items
5. Click the WhatsApp button
6. Test mobile responsiveness by resizing browser

Enjoy your beautiful new website! 🎉
