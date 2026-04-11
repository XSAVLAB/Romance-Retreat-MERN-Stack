# 🔐 GitHub Secrets Configuration

Go to: https://github.com/XSAVLAB/Romance-Retreat-MERN-Stack/settings/secrets/actions

Add these **Repository Secrets**:

## Environment Variables:
```
Secret Name: REACT_APP_ADMIN_EMAIL
Secret Value: admin@example.com

Secret Name: REACT_APP_WHATSAPP_NUMBER
Secret Value: 917840930140

Secret Name: REACT_APP_FACEBOOK_URL
Secret Value: https://facebook.com/romanceretreat

Secret Name: REACT_APP_INSTAGRAM_URL
Secret Value: https://instagram.com/romanceretreat

Secret Name: REACT_APP_TWITTER_URL
Secret Value: https://x.com/romanceretreat
```

Admin password must be managed in Firebase Authentication, not in GitHub secrets.

## ✅ Already Added by Firebase:
- `FIREBASE_SERVICE_ACCOUNT_ROMANCE_RETREAT_XSAVLAB` ✓
- `GITHUB_TOKEN` (automatically available) ✓

## 🚀 After Adding Secrets:
1. Commit and push any changes
2. GitHub Actions will automatically deploy to Firebase
3. Your live site will be available at: https://romance-retreat-xsavlab.web.app