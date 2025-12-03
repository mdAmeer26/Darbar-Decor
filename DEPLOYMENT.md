# Deployment Guide for Darbar Decor Website

## Frontend Deployment (Vercel - Recommended)

### Option 1: Using Vercel CLI

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Navigate to frontend directory:
```bash
cd frontend
```

3. Deploy:
```bash
vercel
```

4. Follow the prompts and your site will be live!

### Option 2: Using Vercel Dashboard

1. Push your code to GitHub
2. Go to https://vercel.com
3. Import your repository
4. Set build settings:
   - **Framework Preset**: Vite
   - **Root Directory**: frontend
   - **Build Command**: npm run build
   - **Output Directory**: dist
5. Click Deploy

### Option 3: Netlify

1. Build the project:
```bash
cd frontend
npm run build
```

2. Drag and drop the `dist` folder to https://app.netlify.com/drop

OR

1. Connect GitHub repository
2. Set build settings:
   - **Base directory**: frontend
   - **Build command**: npm run build
   - **Publish directory**: frontend/dist

## Backend Deployment

### Option 1: Railway.app (Recommended)

1. Go to https://railway.app
2. Click "New Project" → "Deploy from GitHub"
3. Select your repository
4. Set environment variables:
   - `PORT`: 5000
   - `MONGODB_URI`: (your MongoDB Atlas connection string)
   - `NODE_ENV`: production
5. Set root directory to `backend`
6. Deploy!

### Option 2: Heroku

1. Install Heroku CLI
2. Login:
```bash
heroku login
```

3. Create app:
```bash
cd backend
heroku create darbar-decor-api
```

4. Set environment variables:
```bash
heroku config:set MONGODB_URI="your-mongodb-uri"
heroku config:set NODE_ENV=production
```

5. Deploy:
```bash
git push heroku main
```

### Option 3: DigitalOcean App Platform

1. Go to DigitalOcean
2. Create New App
3. Connect GitHub repository
4. Configure app:
   - **Source Directory**: backend
   - **Environment Variables**: Add PORT, MONGODB_URI, NODE_ENV
5. Deploy

## MongoDB Setup (MongoDB Atlas - Free Tier)

1. Go to https://www.mongodb.com/cloud/atlas
2. Create a free account
3. Create a new cluster
4. Create a database user
5. Whitelist IP addresses (0.0.0.0/0 for all)
6. Get connection string
7. Update backend `.env` or hosting environment variables

## Post-Deployment Steps

1. **Update API Endpoint in Frontend**:
   - Replace `http://localhost:5000` with your deployed backend URL
   - In files: `src/pages/Contact.jsx` and `src/pages/Gallery.jsx`

2. **Test all features**:
   - Navigation
   - Contact form submission
   - Gallery loading
   - WhatsApp button
   - Responsive design

3. **Add Custom Domain** (Optional):
   - In Vercel/Netlify dashboard, add your custom domain
   - Update DNS records as instructed

## Environment Variables Summary

### Backend
```
PORT=5000
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/darbar-decor
NODE_ENV=production
```

### Frontend
No environment variables needed, but update API base URL to your backend URL.

## SSL/HTTPS

Both Vercel and Railway provide automatic HTTPS. No additional configuration needed!

## Monitoring & Maintenance

- Check deployment logs regularly
- Monitor API performance
- Backup MongoDB data periodically
- Update dependencies monthly for security

## Cost Estimate

- **Frontend (Vercel)**: Free
- **Backend (Railway)**: Free tier available, ~$5/month for production
- **MongoDB Atlas**: Free tier (512MB), ~$9/month for 2GB
- **Domain**: ~$10-15/year (optional)

**Total**: Free to start, ~$15-20/month for production with custom domain

## Support

For deployment issues:
- Vercel: https://vercel.com/docs
- Railway: https://docs.railway.app
- MongoDB: https://docs.mongodb.com/

---

Good luck with your deployment! 🚀
