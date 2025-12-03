# ✅ DEPLOYMENT CHECKLIST

Use this to track your deployment progress!

---

## 📋 **Phase 1: Database Setup**

- [ ] Go to https://www.mongodb.com/cloud/atlas/register
- [ ] Create free account
- [ ] Create M0 FREE cluster
- [ ] Create database user (username + password)
- [ ] Whitelist all IPs (0.0.0.0/0)
- [ ] Copy connection string
- [ ] Replace `<password>` in connection string
- [ ] Add `/darbar-decor` database name

**✅ Your MongoDB Connection String:**
```
mongodb+srv://darbar-admin:YOUR_PASSWORD@cluster0.xxxxx.mongodb.net/darbar-decor?retryWrites=true&w=majority
```

---

## 📋 **Phase 2: Backend Deployment (Railway)**

- [ ] Go to https://railway.app
- [ ] Login with GitHub
- [ ] Create new project
- [ ] Deploy from GitHub repo: `darbar-decor`
- [ ] Set Root Directory: `backend`
- [ ] Add environment variables:
  - [ ] `PORT` = `5000`
  - [ ] `MONGODB_URI` = (your connection string)
  - [ ] `NODE_ENV` = `production`
- [ ] Generate domain
- [ ] Test backend: `https://your-backend.railway.app/api/health`

**✅ Your Backend URL:**
```
https://_____________________________.railway.app
```

---

## 📋 **Phase 3: Frontend Deployment (Vercel)**

- [ ] Go to https://vercel.com
- [ ] Login with GitHub
- [ ] Import project: `darbar-decor`
- [ ] Configure settings:
  - [ ] Framework: Vite
  - [ ] Root Directory: `frontend`
  - [ ] Build Command: `npm run build`
  - [ ] Output Directory: `dist`
- [ ] Add environment variable:
  - [ ] Name: `VITE_API_URL`
  - [ ] Value: (your Railway backend URL)
- [ ] Click Deploy
- [ ] Wait for build to complete

**✅ Your Website URL:**
```
https://_____________________________.vercel.app
```

---

## 📋 **Phase 4: Testing**

### Test These Features:
- [ ] Home page loads
- [ ] All navigation links work
- [ ] Gallery images display
- [ ] Gallery filters work
- [ ] Contact form submits
- [ ] Confirmation message appears
- [ ] WhatsApp button works
- [ ] Mobile responsive
- [ ] All pages load fast

### Check Backend:
- [ ] Health check works: `/api/health`
- [ ] Contact submissions save to MongoDB
- [ ] Gallery API returns data
- [ ] No console errors

---

## 📋 **Phase 5: Final Steps**

- [ ] Update contact info (phone, email, address)
- [ ] Replace placeholder images
- [ ] Add real gallery photos
- [ ] Test on mobile phone
- [ ] Share website link
- [ ] Add to business cards
- [ ] Update social media bios

---

## 🎉 **DEPLOYMENT COMPLETE!**

**Website:** https://_____________________________.vercel.app

**Backend:** https://_____________________________.railway.app

**Status:** 🟢 LIVE

---

## 📝 **Important URLs to Save**

| Service | URL | Login |
|---------|-----|-------|
| **Website** | (Vercel URL) | GitHub |
| **Backend** | (Railway URL) | GitHub |
| **Database** | https://cloud.mongodb.com | (Your email) |
| **Vercel Dashboard** | https://vercel.com/dashboard | GitHub |
| **Railway Dashboard** | https://railway.app/dashboard | GitHub |

---

## 💡 **Quick Commands**

### Update website:
```powershell
git add .
git commit -m "Update content"
git push
```
Vercel auto-deploys in ~2 minutes!

### Check backend logs:
Go to Railway Dashboard → Your Project → Logs

### Check database:
Go to MongoDB Atlas → Browse Collections

---

**Print this checklist and check items as you complete them! ✓**
