# 🚀 How to Start Darbar Decor Website

## Option 1: Using PowerShell Script (Recommended)

### Method A: Right-click and Run
1. Navigate to the `Darbar Decor` folder
2. Right-click on `start.ps1`
3. Select **"Run with PowerShell"**

### Method B: From PowerShell Terminal
1. Open PowerShell
2. Navigate to the project folder:
   ```powershell
   cd "c:\Users\mdame\OneDrive\Desktop\Darbar Decor"
   ```
3. Run the script:
   ```powershell
   .\start.ps1
   ```

### If you get an execution policy error:
Run this command first (one-time setup):
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

---

## Option 2: Using Batch File

1. Navigate to the `Darbar Decor` folder
2. Double-click on `start.bat`

---

## Option 3: Manual Start (Two Terminals)

### Terminal 1 - Backend:
```powershell
cd "c:\Users\mdame\OneDrive\Desktop\Darbar Decor\backend"
npm install
npm run dev
```

### Terminal 2 - Frontend:
```powershell
cd "c:\Users\mdame\OneDrive\Desktop\Darbar Decor\frontend"
npm install
npm run dev
```

---

## What the Start Scripts Do:

1. ✅ Check if Node.js is installed
2. ✅ Install dependencies if needed (first time only)
3. ✅ Start backend server on http://localhost:5000
4. ✅ Start frontend server on http://localhost:3000
5. ✅ Open both in separate windows
6. ✅ Automatically open website in browser

---

## After Starting:

- **Backend**: http://localhost:5000
- **Frontend**: http://localhost:3000 (your website)
- The website should open automatically in your browser

---

## To Stop Servers:

- Close the PowerShell/Command Prompt windows, OR
- Press `Ctrl + C` in each window

---

## Troubleshooting:

### "Node.js not found"
- Install Node.js from https://nodejs.org/
- Restart your computer after installation

### "Port already in use"
- Close other applications using ports 3000 or 5000
- Or restart your computer

### "Dependencies not installed"
- The script will automatically install them
- Or run `npm install` manually in both folders

---

## First Time Setup:

The first time you run the start script, it will:
- Install all dependencies (takes 2-3 minutes)
- This only happens once

Subsequent runs will start immediately!

---

## Quick Start (TL;DR):

**Just double-click `start.bat` or run `start.ps1`** and you're done! 🎉
