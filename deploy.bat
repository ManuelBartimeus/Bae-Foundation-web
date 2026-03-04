@echo off
REM Automated deployment script for Bae Foundation web site
REM This script builds and deploys the project to GitHub Pages

echo.
echo ====================================
echo Bae Foundation - Auto Deployment
echo ====================================
echo.

REM Get current timestamp for commit message
for /f "tokens=2-4 delims=/ " %%a in ('date /t') do (set date=%%c-%%a-%%b)
for /f "tokens=1-2 delims=/:" %%a in ('time /t') do (set time=%%a%%b)

REM Stage all changes
echo [1/4] Staging changes...
git add .
if errorlevel 1 (
    echo ERROR: Failed to stage changes
    pause
    exit /b 1
)

REM Commit changes
echo [2/4] Committing changes...
git commit -m "Auto-deployment: %date% %time%"
if errorlevel 1 (
    echo WARNING: Nothing to commit or commit failed
)

REM Push to master
echo [3/4] Pushing to master branch...
git push origin master
if errorlevel 1 (
    echo ERROR: Failed to push to master
    pause
    exit /b 1
)

REM Run deployment
echo [4/4] Building and deploying to GitHub Pages...
call npm run deploy
if errorlevel 1 (
    echo ERROR: Deployment failed
    pause
    exit /b 1
)

echo.
echo ====================================
echo Deployment completed successfully!
echo ====================================
echo Your site will be updated shortly at:
echo https://ManuelBartimeus.github.io/Bae-Foundation-web
echo.
pause
