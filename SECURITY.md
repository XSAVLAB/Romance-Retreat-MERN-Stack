# Security Guidelines for Romance Retreat App

## Authentication Model

Admin access is enforced by Firebase Auth and Firestore security rules.
Client-side passwords are not used.

Requirements:
1. Create an admin user in Firebase Authentication.
2. Set a custom claim on that user: `admin: true`.
3. Deploy Firestore rules from this repository.

Claim management commands:
1. Grant: `cd functions && npm run admin:grant -- admin@example.com grant`
2. Revoke: `cd functions && npm run admin:revoke -- admin@example.com revoke`
3. Ensure `GOOGLE_APPLICATION_CREDENTIALS` points to a valid service account JSON before running the commands.

## Environment Variables Security

### For Development:
1. Use `.env.local` for your local environment variables
2. Never commit `.env.local` to git (it's already in .gitignore)
3. Use the `.env.example` file as a template

### For Production Deployment

#### Option 1: Hosting Platform Environment Variables (Recommended)
Most hosting platforms (Vercel, Netlify, Heroku) allow you to set environment variables in their dashboard:

**Vercel:**
1. Go to your project dashboard
2. Navigate to Settings → Environment Variables
3. Add: `REACT_APP_ADMIN_EMAIL` = `admin@example.com`

**Netlify:**
1. Go to Site Settings → Environment Variables
2. Add: `REACT_APP_ADMIN_EMAIL` = `admin@example.com`

#### Option 2: Production .env File
If deploying to your own server, create `.env.production`:
```bash
REACT_APP_ADMIN_EMAIL=admin@example.com
```

## Admin Credential Security Best Practices

### Strong Password Requirements
- Minimum 12 characters
- Mix of uppercase, lowercase, numbers, and symbols
- No dictionary words
- Unique to this application

### Example Strong Passwords
- `RomanceRetreat#2025!Secure`
- `Goa$Romantic&Admin2025`
- `Love@Beach#Admin$2025`

## Additional Security Measures

### For Better Production Security:
1. Use Firebase Auth with custom admin claims.
2. Keep Firestore write access restricted to `request.auth.token.admin == true`.
3. Add rate limiting and lockout rules for login attempts.
4. Use HTTPS only in production.
5. Consider multi-factor authentication for admin users.

### Quick Security Checklist:
- [ ] `REACT_APP_ADMIN_EMAIL` set in hosting platform
- [ ] Firestore rules deployed successfully
- [ ] Admin user has custom claim `admin: true`
- [ ] `.env.local` not committed to git
- [ ] HTTPS enabled on production domain

## Emergency Admin Access Reset

If admin access is lost:
1. Reset password in Firebase Authentication for the admin user.
2. Re-apply custom claim `admin: true` if needed.
3. Revoke existing refresh tokens for that user.