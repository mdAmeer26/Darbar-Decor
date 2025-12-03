# Quick Deployment Helper Script

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  DARBAR DECOR - Deployment Helper" -ForegroundColor Yellow
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

Write-Host "This script will help you prepare for deployment." -ForegroundColor White
Write-Host ""

# Get the script directory
$scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path

Write-Host "Step 1: Checking Git installation..." -ForegroundColor Cyan
try {
    $gitVersion = git --version
    Write-Host "OK Git found: $gitVersion" -ForegroundColor Green
} catch {
    Write-Host "ERROR Git is not installed!" -ForegroundColor Red
    Write-Host "Please install Git from https://git-scm.com/download/win" -ForegroundColor Yellow
    Read-Host "Press Enter to exit"
    exit
}

Write-Host ""
Write-Host "Step 2: Initialize Git repository..." -ForegroundColor Cyan

cd $scriptDir

if (Test-Path ".git") {
    Write-Host "OK Git repository already initialized" -ForegroundColor Green
} else {
    git init
    Write-Host "OK Git repository initialized" -ForegroundColor Green
}

Write-Host ""
Write-Host "Step 3: Adding files to Git..." -ForegroundColor Cyan
git add .
Write-Host "OK Files added" -ForegroundColor Green

Write-Host ""
Write-Host "Step 4: Creating initial commit..." -ForegroundColor Cyan
git commit -m "Initial commit - Darbar Decor Website"
Write-Host "OK Commit created" -ForegroundColor Green

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Git Setup Complete!" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

Write-Host "NEXT STEPS FOR DEPLOYMENT:" -ForegroundColor Yellow
Write-Host ""
Write-Host "1. CREATE GITHUB REPOSITORY:" -ForegroundColor Cyan
Write-Host "   - Go to: https://github.com/new" -ForegroundColor White
Write-Host "   - Repository name: darbar-decor" -ForegroundColor White
Write-Host "   - Make it: Private" -ForegroundColor White
Write-Host "   - Click: Create repository" -ForegroundColor White
Write-Host ""

Write-Host "2. PUSH CODE TO GITHUB:" -ForegroundColor Cyan
Write-Host "   Run these commands in this terminal:" -ForegroundColor White
Write-Host ""
Write-Host "   git remote add origin https://github.com/YOUR-USERNAME/darbar-decor.git" -ForegroundColor Yellow
Write-Host "   git branch -M main" -ForegroundColor Yellow
Write-Host "   git push -u origin main" -ForegroundColor Yellow
Write-Host ""

Write-Host "3. DEPLOY BACKEND (Railway.app):" -ForegroundColor Cyan
Write-Host "   - Go to: https://railway.app" -ForegroundColor White
Write-Host "   - Login with GitHub" -ForegroundColor White
Write-Host "   - New Project > Deploy from GitHub" -ForegroundColor White
Write-Host "   - Select: darbar-decor repository" -ForegroundColor White
Write-Host "   - Set Root Directory: backend" -ForegroundColor White
Write-Host "   - Add environment variables (see DEPLOY_NOW.md)" -ForegroundColor White
Write-Host ""

Write-Host "4. DEPLOY FRONTEND (Vercel):" -ForegroundColor Cyan
Write-Host "   - Go to: https://vercel.com" -ForegroundColor White
Write-Host "   - Login with GitHub" -ForegroundColor White
Write-Host "   - Import: darbar-decor repository" -ForegroundColor White
Write-Host "   - Root Directory: frontend" -ForegroundColor White
Write-Host "   - Click: Deploy" -ForegroundColor White
Write-Host ""

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "For detailed instructions, see:" -ForegroundColor Yellow
Write-Host "DEPLOY_NOW.md" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

Read-Host "Press Enter to close"
