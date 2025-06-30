# H.P. Bright Academy - GitHub Pages Deployment Guide

## 🚀 Step-by-Step Deployment Instructions

Follow these steps to deploy your H.P. Bright Academy website to GitHub Pages:

### Step 1: Initialize Git Repository (if not done already)

```bash
# Navigate to your project directory
cd /Users/gyaneshvar/learning/hpbrightac

# Initialize git (if not already done)
git init

# Add all files
git add .

# Make initial commit
git commit -m "Initial commit: H.P. Bright Academy website ready for deployment"
```

### Step 2: Create GitHub Repository

1. **Go to GitHub.com** and sign in to your account
2. **Click the "+" button** in the top right corner
3. **Select "New repository"**
4. **Repository settings:**
   - Repository name: `hpbrightac` (must match the name in vite.config.js)
   - Description: "H.P. Bright Academy - Modern School Website"
   - Set to **Public** (required for free GitHub Pages)
   - **Do NOT** initialize with README (since you already have files)
5. **Click "Create repository"**

### Step 3: Connect Local Repository to GitHub

```bash
# Add GitHub repository as remote origin (replace 'yourusername' with your GitHub username)
git remote add origin https://github.com/yourusername/hpbrightac.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 4: Enable GitHub Pages

1. **Go to your repository** on GitHub
2. **Click "Settings"** tab (at the top of the repository)
3. **Scroll down** to the "Pages" section in the left sidebar
4. **Under "Source"**, select **"GitHub Actions"**
5. **That's it!** The deployment will start automatically

### Step 5: Wait for Deployment

- The GitHub Action will automatically run when you push to the main branch
- You can monitor the progress in the **"Actions"** tab of your repository
- Deployment usually takes 2-5 minutes

### Step 6: Access Your Website

Your website will be available at:
```
https://yourusername.github.io/hpbrightac/
```

## 🔄 Future Updates

To update your website:

```bash
# Make your changes to the code
# Add and commit changes
git add .
git commit -m "Update: describe your changes"

# Push to GitHub (this will trigger automatic deployment)
git push origin main
```

## 🛠️ Troubleshooting

### Common Issues:

1. **404 Error**: Make sure repository name matches the base path in `vite.config.js`
2. **CSS/Images not loading**: Ensure all paths use `import.meta.env.BASE_URL`
3. **Build failing**: Check the Actions tab for error details

### Manual Build Test:

```bash
# Test build locally before pushing
npm run build

# Check if dist folder is created successfully
ls -la dist/
```

## 📋 Pre-Deployment Checklist

✅ **Repository name is `hpbrightac`**  
✅ **All images are in `public/images/` with web-friendly names**  
✅ **Build completes successfully (`npm run build`)**  
✅ **All navigation links work**  
✅ **Responsive design tested**  
✅ **Contact information is correct**  
✅ **Images display properly**  

## 🎯 What's Already Configured

Your project is already set up with:

- ✅ **GitHub Actions workflow** (`.github/workflows/deploy.yml`)
- ✅ **Proper base path configuration** (`vite.config.js`)
- ✅ **Conditional routing** for dev/production (`App.jsx`)
- ✅ **Optimized images** with correct paths
- ✅ **Responsive design** for all devices
- ✅ **SEO-friendly structure**

## 📞 Contact Information in Website

The deployed website includes:

**H.P. Bright Academy**
- Address: Chamao Shivpur Tarna, Ganeshpur, Varanasi, UP 221105
- Phone: +91 8400308200
- Email: info@hpbrightacademy.in
- Principal: Mrs. Pooja Verma

---

**🎉 You're ready to deploy!** Follow the steps above and your website will be live on GitHub Pages.
