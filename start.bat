@echo off
title Darbar Decor - Server Launcher

echo ========================================
echo    DARBAR DECOR - Starting Servers
echo ========================================
echo.

REM Get the directory where the batch file is located
set "SCRIPT_DIR=%~dp0"

REM Define paths
set "BACKEND_PATH=%SCRIPT_DIR%backend"
set "FRONTEND_PATH=%SCRIPT_DIR%frontend"

REM Check if Node.js is installed
echo Checking Node.js installation...
where node >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo [ERROR] Node.js is not installed!
    echo Please install Node.js from https://nodejs.org/
    pause
    exit /b 1
)

for /f "tokens=*" %%i in ('node --version') do set NODE_VERSION=%%i
echo [OK] Node.js found: %NODE_VERSION%
echo.

REM Check and install backend dependencies
echo Checking dependencies...
if not exist "%BACKEND_PATH%\node_modules" (
    echo Installing Backend dependencies...
    cd /d "%BACKEND_PATH%"
    call npm install
    echo [OK] Backend dependencies installed
) else (
    echo [OK] Backend dependencies already installed
)

REM Check and install frontend dependencies
if not exist "%FRONTEND_PATH%\node_modules" (
    echo Installing Frontend dependencies...
    cd /d "%FRONTEND_PATH%"
    call npm install
    echo [OK] Frontend dependencies installed
) else (
    echo [OK] Frontend dependencies already installed
)

echo.
echo ========================================
echo    Starting Backend Server...
echo ========================================
echo.

REM Start backend in a new window
start "Darbar Decor - Backend Server" cmd /k "cd /d "%BACKEND_PATH%" && echo ======================================== && echo    BACKEND SERVER && echo ======================================== && echo. && echo Backend running on: http://localhost:5000 && echo API Health Check: http://localhost:5000/api/health && echo. && echo Press Ctrl+C to stop the server && echo. && npm run dev"

echo [OK] Backend server starting in new window...
echo     URL: http://localhost:5000
timeout /t 3 /nobreak >nul

echo.
echo ========================================
echo    Starting Frontend Server...
echo ========================================
echo.

REM Start frontend in a new window
start "Darbar Decor - Frontend Server" cmd /k "cd /d "%FRONTEND_PATH%" && echo ======================================== && echo    FRONTEND SERVER && echo ======================================== && echo. && echo Frontend running on: http://localhost:3000 && echo. && echo Press Ctrl+C to stop the server && echo. && npm run dev"

echo [OK] Frontend server starting in new window...
echo     URL: http://localhost:3000

echo.
echo ========================================
echo    ALL SERVERS STARTED!
echo ========================================
echo.
echo Backend:  http://localhost:5000
echo Frontend: http://localhost:3000
echo.
echo Your website should open automatically in your browser.
echo If not, manually open: http://localhost:3000
echo.
echo To stop the servers, close the command prompt windows
echo or press Ctrl+C in each window.
echo.
pause
