# 🚀 Firebase Deployment Setup Guide

## Prerequisites
1. Firebase CLI installed: `npm install -g firebase-tools`
2. Firebase project created: `romance-retreat-xsavlab`
3. GitHub repository: `Romance-Retreat-MERN-Stack`

## 🔧 Setup Instructions

### 1. Firebase Service Account Setup
```bash
# Login to Firebase
firebase login

# Generate service account key
firebase projects:list
firebase use romance-retreat-xsavlab
```

### 2. GitHub Secrets Configuration
Go to GitHub Repository → Settings → Secrets and Variables → Actions

Add these **Repository Secrets**:

#### Environment Variables:
```
REACT_APP_ADMIN_USERNAME=admin
REACT_APP_ADMIN_PASSWORD=romance_retreat_2025
REACT_APP_WHATSAPP_NUMBER=917840930140
REACT_APP_FACEBOOK_URL=https://facebook.com/romanceretreat
REACT_APP_INSTAGRAM_URL=https://instagram.com/romanceretreat
REACT_APP_TWITTER_URL=https://x.com/romanceretreat
```

#### Firebase Service Account:
```
FIREBASE_SERVICE_ACCOUNT_ROMANCE_RETREAT_XSAVLAB=[Firebase Service Account JSON]
```

### 3. Get Firebase Service Account JSON
```bash
# In your project directory
firebase init hosting:github

# This will:
# 1. Connect to your GitHub repo
# 2. Generate service account
# 3. Add the secret automatically
```

## 🏗️ Manual Deployment Commands

### Local Build and Deploy:
```bash
# Build the project
npm run build

# Deploy to Firebase
firebase deploy --only hosting
```

### Preview Deployment:
```bash
# Deploy to preview channel
firebase hosting:channel:deploy preview-$(date +%Y%m%d-%H%M%S)
```

## 🔄 CI/CD Pipeline Flow

1. **Push to main branch** → Triggers deployment
2. **Build React app** with environment variables
3. **Run tests** to ensure quality
4. **Deploy to Firebase Hosting** automatically
5. **Live site updated** instantly

## 🌐 Deployment URLs

- **Production**: `https://romance-retreat-xsavlab.web.app`
- **Custom Domain**: Configure in Firebase Console → Hosting

## 🛠️ Troubleshooting

### Common Issues:
1. **Service Account Error**: Re-run `firebase init hosting:github`
2. **Build Fails**: Check environment variables in GitHub secrets
3. **Deployment Fails**: Verify Firebase project permissions

### Debug Commands:
```bash
# Check Firebase projects
firebase projects:list

# Test local build
npm run build && npx serve -s build

# Check GitHub Actions logs
# Go to GitHub → Actions tab → Click on failed workflow
```