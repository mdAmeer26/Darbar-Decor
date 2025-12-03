# 🚀 Easy Deployment Guide - Darbar Decor

## Step-by-Step Deployment (15 minutes)

---

## ✅ **Step 1: Setup MongoDB Atlas (Database) - FREE**

### 1. Create Account
- Go to: https://www.mongodb.com/cloud/atlas/register
- Sign up with Google or email

### 2. Create Free Cluster
- Click **"Build a Database"**
- Choose **"M0 FREE"** tier
- Select region closest to you
- Click **"Create"**

### 3. Create Database User
- Click **"Database Access"** (left sidebar)
- Click **"Add New Database User"**
- Username: `darbar-admin`
- Password: Generate a strong password (SAVE THIS!)
- User Privileges: **"Read and write to any database"**
- Click **"Add User"**

### 4. Allow Network Access
- Click **"Network Access"** (left sidebar)
- Click **"Add IP Address"**
- Click **"Allow Access from Anywhere"** (0.0.0.0/0)
- Click **"Confirm"**

### 5. Get Connection String
- Click **"Database"** (left sidebar)
- Click **"Connect"** on your cluster
- Click **"Connect your application"**
- Copy the connection string (looks like):
  ```
  mongodb+srv://darbar-admin:<password>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority
  ```
- Replace `<password>` with your actual password
- Add database name: `/darbar-decor` before the `?`

**Final format:**
```
mongodb+srv://darbar-admin:YOUR_PASSWORD@cluster0.xxxxx.mongodb.net/darbar-decor?retryWrites=true&w=majority
```

**✅ MongoDB Setup Complete!**

---

## ✅ **Step 2: Deploy Backend to Railway.app - FREE**

### 1. Create Railway Account
- Go to: https://railway.app
- Click **"Login"**
- Sign in with **GitHub**

### 2. Push Code to GitHub
```powershell
# In Darbar Decor folder
git init
git add .
git commit -m "Initial commit - Darbar Decor"
gh repo create darbar-decor --private --source=. --remote=origin --push
```

**OR manually:**
- Go to GitHub.com
- Create new repository: **"darbar-decor"**
- Follow GitHub's instructions to push code

### 3. Deploy Backend on Railway
- In Railway, click **"New Project"**
- Select **"Deploy from GitHub repo"**
- Choose your **"darbar-decor"** repository
- Railway will detect Node.js automatically

### 4. Configure Backend
- Click on your deployment
- Go to **"Variables"** tab
- Add these environment variables:

```
PORT=5000
MONGODB_URI=mongodb+srv://darbar-admin:YOUR_PASSWORD@cluster0.xxxxx.mongodb.net/darbar-decor?retryWrites=true&w=majority
NODE_ENV=production
```

### 5. Set Root Directory
- Go to **"Settings"** tab
- Find **"Root Directory"**
- Set to: `backend`
- Save

### 6. Get Backend URL
- Go to **"Settings"** tab
- Click **"Generate Domain"**
- Copy the URL (e.g., `darbar-decor-production.up.railway.app`)

**✅ Backend Deployed!**

---

## ✅ **Step 3: Deploy Frontend to Vercel - FREE**

### 1. Update API URL in Frontend
First, update the backend URL in your frontend code:

**Files to update:**
- `frontend/src/pages/Contact.jsx` (line 32)
- `frontend/src/pages/Gallery.jsx` (line 45)

Replace `http://localhost:5000` with your Railway URL:
```javascript
// Change from:
await axios.post('http://localhost:5000/api/contact', formData);

// To:
await axios.post('https://your-backend-url.railway.app/api/contact', formData);
```

### 2. Commit Changes
```powershell
git add .
git commit -m "Update API URLs for production"
git push
```

### 3. Deploy to Vercel
- Go to: https://vercel.com
- Click **"Sign Up"** → Use **GitHub**
- Click **"Add New Project"**
- Import your **"darbar-decor"** repository
- Configure project:
  - **Framework Preset:** Vite
  - **Root Directory:** `frontend`
  - **Build Command:** `npm run build`
  - **Output Directory:** `dist`
- Click **"Deploy"**

### 4. Wait for Deployment
- Vercel will build and deploy (takes 2-3 minutes)
- You'll get a URL like: `darbar-decor.vercel.app`

**✅ Frontend Deployed!**

---

## 🎉 **You're Live!**

Your website is now accessible at:
- **Main Site:** `https://darbar-decor.vercel.app`
- **Backend API:** `https://your-backend.railway.app`

---

## 🔧 **Optional: Add Custom Domain**

### Vercel (Frontend):
1. Buy domain from Namecheap/GoDaddy
2. In Vercel → Settings → Domains
3. Add your domain (e.g., `darbardecor.com`)
4. Update DNS records as shown
5. Wait 24-48 hours for propagation

---

## 📊 **Free Tier Limits:**

| Service | Free Tier | Upgrade Cost |
|---------|-----------|--------------|
| MongoDB Atlas | 512MB storage | $9/month for 2GB |
| Railway | 500 hours/month | $5/month unlimited |
| Vercel | Unlimited | $20/month for teams |

**Total Cost:** FREE to start, ~$15-20/month for production

---

## ✅ **Post-Deployment Checklist:**

- [ ] Test contact form submission
- [ ] Check gallery loads correctly
- [ ] Test all page navigation
- [ ] Verify WhatsApp button works
- [ ] Test on mobile device
- [ ] Check site speed (should be fast!)
- [ ] Verify backend API health check

---

## 🆘 **Troubleshooting:**

### Backend not responding:
- Check Railway logs for errors
- Verify MongoDB connection string is correct
- Make sure environment variables are set

### Frontend shows errors:
- Check browser console (F12)
- Verify API URLs are updated correctly
- Make sure backend is deployed and running

### Database connection failed:
- Check MongoDB Atlas IP whitelist (0.0.0.0/0)
- Verify password in connection string has no special characters needing URL encoding
- Test connection string in Railway logs

---

## 📞 **Need Help?**

Check these resources:
- Vercel Docs: https://vercel.com/docs
- Railway Docs: https://docs.railway.app
- MongoDB Atlas Docs: https://docs.atlas.mongodb.com

---

## 🎨 **Next Steps:**

1. Replace placeholder images with real photos
2. Update contact information (phone, email, address)
3. Add more gallery items through API
4. Set up Google Analytics (optional)
5. Add SSL certificate (automatic on Vercel/Railway)

---

**Congratulations! Your Darbar Decor website is now live! 🎉**
