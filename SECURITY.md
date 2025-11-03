# Security Guidelines for Romance Retreat App

## 🔒 Environment Variables Security

### For Development:
1. Use `.env.local` for your local environment variables
2. Never commit `.env.local` to git (it's already in .gitignore)
3. Use the `.env.example` file as a template

### For Production Deployment:

#### Option 1: Hosting Platform Environment Variables (Recommended)
Most hosting platforms (Vercel, Netlify, Heroku) allow you to set environment variables in their dashboard:

**Vercel:**
1. Go to your project dashboard
2. Navigate to Settings → Environment Variables
3. Add: `REACT_APP_ADMIN_PASSWORD` = `your_secure_password`

**Netlify:**
1. Go to Site Settings → Environment Variables
2. Add: `REACT_APP_ADMIN_PASSWORD` = `your_secure_password`

#### Option 2: Production .env File
If deploying to your own server, create `.env.production`:
```bash
REACT_APP_ADMIN_PASSWORD=your_very_secure_production_password
```

## 🛡️ Password Security Best Practices

### Strong Password Requirements:
- Minimum 12 characters
- Mix of uppercase, lowercase, numbers, and symbols
- No dictionary words
- Unique to this application

### Example Strong Passwords:
- `RomanceRetreat#2025!Secure`
- `Goa$Romantic&Admin2025`
- `Love@Beach#Admin$2025`

## 🚨 Additional Security Measures

### For Better Production Security:
1. **Use proper authentication backend** with JWT tokens
2. **Implement session timeouts** (auto-logout after inactivity)
3. **Add rate limiting** to prevent brute force attacks
4. **Use HTTPS only** in production
5. **Consider two-factor authentication**

### Quick Security Checklist:
- [ ] Environment variables set in hosting platform
- [ ] Strong admin password (12+ characters)
- [ ] `.env.local` not committed to git
- [ ] HTTPS enabled on production domain
- [ ] Admin panel only accessible to authorized users

## 🔧 Emergency Password Reset

If you forget the admin password:
1. Update `REACT_APP_ADMIN_PASSWORD` in your hosting platform
2. Redeploy the application
3. The new password will take effect immediately