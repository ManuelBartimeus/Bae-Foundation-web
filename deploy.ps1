# Automated deployment script for Bae Foundation website
# Usage: .\deploy.ps1
# This script builds and deploys the project to GitHub Pages

Write-Host "`n===================================="
Write-Host "Bae Foundation - Auto Deployment"
Write-Host "====================================" -ForegroundColor Cyan
Write-Host ""

# Get current timestamp for commit message
$timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"

# Stage all changes
Write-Host "[1/4] Staging changes..." -ForegroundColor Yellow
git add .
if ($LASTEXITCODE -ne 0) {
    Write-Host "ERROR: Failed to stage changes" -ForegroundColor Red
    Read-Host "Press Enter to exit"
    exit 1
}

# Commit changes
Write-Host "[2/4] Committing changes..." -ForegroundColor Yellow
git commit -m "Auto-deployment: $timestamp"
if ($LASTEXITCODE -ne 0) {
    Write-Host "WARNING: Nothing to commit or commit failed" -ForegroundColor Yellow
}

# Push to master
Write-Host "[3/4] Pushing to master branch..." -ForegroundColor Yellow
git push origin master
if ($LASTEXITCODE -ne 0) {
    Write-Host "ERROR: Failed to push to master" -ForegroundColor Red
    Read-Host "Press Enter to exit"
    exit 1
}

# Run deployment
Write-Host "[4/4] Building and deploying to GitHub Pages..." -ForegroundColor Yellow
npm run deploy
if ($LASTEXITCODE -ne 0) {
    Write-Host "ERROR: Deployment failed" -ForegroundColor Red
    Read-Host "Press Enter to exit"
    exit 1
}

Write-Host "`n===================================" -ForegroundColor Green
Write-Host "Deployment completed successfully!" -ForegroundColor Green
Write-Host "===================================" -ForegroundColor Green
Write-Host "Your site will be updated shortly at:`n" -ForegroundColor Green
Write-Host "https://ManuelBartimeus.github.io/Bae-Foundation-web`n"
Read-Host "Press Enter to exit"
