# Automated Deployment Guide

Your Bae Foundation website is now set up for automated deployment to GitHub Pages. No more typing deployment commands!

## Quick Start

### Option 1: Batch File (Recommended for Windows)
Double-click the `deploy.bat` file in your project folder, or run:
```
deploy.bat
```

### Option 2: PowerShell Script
Right-click `deploy.ps1` and select "Run with PowerShell", or run:
```powershell
.\deploy.ps1
```

## What the Scripts Do

When you run either deployment script, it automatically:

1. **Stages all changes** - Adds all modified files to git
2. **Creates a commit** - Commits with timestamp (e.g., "Auto-deployment: 2025-01-15 14:30:45")
3. **Pushes to master** - Uploads changes to your GitHub repository's master branch
4. **Builds the project** - Runs `npm run build` to bundle your React app
5. **Deploys to GitHub Pages** - Pushes the built files to the gh-pages branch

Your site at https://ManuelBartimeus.github.io/Bae-Foundation-web will update within 1-3 minutes.

## Workflow

### After Making Changes:
1. Make your code edits in VS Code
2. Run `deploy.bat` (or `deploy.ps1`)
3. Wait for the script to complete
4. Your changes go live!

### Manual Verification:
If you want to check deployment status:
- Visit your repo: https://github.com/ManuelBartimeus/Bae-Foundation-web
- Click the "Actions" tab to see deployment workflow status
- Check your live site after 1-3 minutes

## Troubleshooting

### "PowerShell script execution is disabled"
If you get this error, run PowerShell as Administrator and execute:
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

Then run the deployment script again.

### Git connection fails
Make sure you:
- Have an active internet connection
- Have Git installed and configured
- Have SSH keys set up (for SSH) or credentials saved (for HTTPS)

### Build fails
Run this in your terminal to check for errors:
```
npm run build
```

Check for syntax errors or missing dependencies in the output.

## File Details

- **deploy.bat** - Batch script for Windows Command Prompt
- **deploy.ps1** - PowerShell script (more colorful output)
- **package.json** - Contains predeploy and deploy scripts
- **vite.config.js** - Configured with correct base path for GitHub Pages subdirectory

## Git Commits

Each deployment creates an automatic commit with a timestamp. Your master branch history will show:
```
Auto-deployment: 2025-01-15 14:30:45
Auto-deployment: 2025-01-15 14:28:12
...etc
```

If you prefer custom commit messages, edit the scripts or use git directly.

## Future Enhancements

To set up automatic deployments via GitHub Actions (so deployment happens automatically on every push), create a `.github/workflows/deploy.yml` file in your repository. Ask if you'd like help setting that up!

---

**Happy deploying! Your site is now production-ready with one-click deployment.** 🚀
