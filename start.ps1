# Darbar Decor - Start Script
# This script starts both frontend and backend servers

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "   DARBAR DECOR - Starting Servers" -ForegroundColor Yellow
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Get the script directory
$scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path

# Define paths
$backendPath = Join-Path $scriptDir "backend"
$frontendPath = Join-Path $scriptDir "frontend"

# Check if Node.js is installed
Write-Host "Checking Node.js installation..." -ForegroundColor Cyan
try {
    $nodeVersion = node --version
    Write-Host "OK Node.js found: $nodeVersion" -ForegroundColor Green
} catch {
    Write-Host "ERROR Node.js is not installed!" -ForegroundColor Red
    Write-Host "Please install Node.js from https://nodejs.org/" -ForegroundColor Yellow
    Read-Host "Press Enter to exit"
    exit
}

Write-Host ""

# Function to check if dependencies are installed
function Test-Dependencies {
    param($path, $name)
    
    $nodeModules = Join-Path $path "node_modules"
    if (-Not (Test-Path $nodeModules)) {
        Write-Host "Installing $name dependencies..." -ForegroundColor Yellow
        Push-Location $path
        npm install
        Pop-Location
        Write-Host "OK $name dependencies installed" -ForegroundColor Green
    } else {
        Write-Host "OK $name dependencies already installed" -ForegroundColor Green
    }
}

# Check and install dependencies
Write-Host "Checking dependencies..." -ForegroundColor Cyan
Test-Dependencies -path $backendPath -name "Backend"
Test-Dependencies -path $frontendPath -name "Frontend"

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "   Starting Backend Server..." -ForegroundColor Yellow
Write-Host "========================================" -ForegroundColor Cyan

# Start backend in a new PowerShell window
$backendCommand = "cd '$backendPath'; Write-Host 'DARBAR DECOR - BACKEND SERVER' -ForegroundColor Yellow; Write-Host 'Backend: http://localhost:5000' -ForegroundColor Green; Write-Host 'Press Ctrl+C to stop' -ForegroundColor Cyan; Write-Host ''; npm run dev"

Start-Process powershell -ArgumentList "-NoExit", "-Command", $backendCommand

Write-Host "OK Backend server starting in new window..." -ForegroundColor Green
Write-Host "   URL: http://localhost:5000" -ForegroundColor Cyan

# Wait a moment for backend to initialize
Start-Sleep -Seconds 3

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "   Starting Frontend Server..." -ForegroundColor Yellow
Write-Host "========================================" -ForegroundColor Cyan

# Start frontend in a new PowerShell window
$frontendCommand = "cd '$frontendPath'; Write-Host 'DARBAR DECOR - FRONTEND SERVER' -ForegroundColor Yellow; Write-Host 'Frontend: http://localhost:3000' -ForegroundColor Green; Write-Host 'Press Ctrl+C to stop' -ForegroundColor Cyan; Write-Host ''; npm run dev"

Start-Process powershell -ArgumentList "-NoExit", "-Command", $frontendCommand

Write-Host "OK Frontend server starting in new window..." -ForegroundColor Green
Write-Host "   URL: http://localhost:3000" -ForegroundColor Cyan

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "   ALL SERVERS STARTED!" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Backend:  http://localhost:5000" -ForegroundColor Cyan
Write-Host "Frontend: http://localhost:3000" -ForegroundColor Cyan
Write-Host ""
Write-Host "Your website should open automatically in your browser." -ForegroundColor Yellow
Write-Host "If not, manually open: http://localhost:3000" -ForegroundColor Yellow
Write-Host ""
Write-Host "To stop the servers, close the PowerShell windows or press Ctrl+C" -ForegroundColor Yellow
Write-Host ""
Write-Host "Press Enter to close this window..." -ForegroundColor Gray
Read-Host
