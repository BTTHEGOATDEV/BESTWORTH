# BestWorth Law Firm - Vercel Deployment Guide

## Quick Deployment Steps

### 1. Download Your Project
1. In Replit, click the 3-dot menu (⋮) in the top right
2. Select "Download as zip"
3. Extract the zip file to your computer

### 2. Upload to GitHub
1. Go to [github.com](https://github.com) and sign in
2. Click "New repository"
3. Name it `bestworth-law-firm` (or similar)
4. Make it public
5. Upload all your project files to this repository

### 3. Deploy on Vercel
1. Go to [vercel.com](https://vercel.com) and sign up/login (free account)
2. Click "New Project"
3. Import your GitHub repository
4. Configure deployment settings:
   - **Framework Preset**: Other
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist/public`
   - **Install Command**: `npm install`

### 4. Environment Variables
In Vercel project settings → Environment Variables, add:

**Required:**
- `DATABASE_URL`: Your Supabase connection string

**Optional (for email notifications):**
- `SENDGRID_API_KEY`: Your SendGrid API key

### 5. Deploy
1. Click "Deploy"
2. Wait 2-3 minutes for build completion
3. Your website will be live at `https://your-project-name.vercel.app`

## Database Setup (Supabase)

Since you're using Supabase, you'll need to:

### Get Supabase Database URL:
1. Go to [supabase.com](https://supabase.com) and create a project
2. In project dashboard, click "Connect"
3. Copy the connection string from "Transaction pooler"
4. Replace `[YOUR-PASSWORD]` with your database password

### Example connection string:
```
postgresql://postgres.[project-ref]:[password]@aws-0-[region].pooler.supabase.com:6543/postgres?pgbouncer=true&connection_limit=1
```

### Create Database Tables:
After deployment, your tables will be created automatically when the first contact or consultation is submitted.

## Email Setup (Optional)

For email notifications when clients submit forms:

### SendGrid Setup:
1. Create free account at [sendgrid.com](https://sendgrid.com)
2. Go to Settings → API Keys → Create API Key
3. Choose "Restricted Access" and enable "Mail Send"
4. Copy the API key
5. In SendGrid, verify the sender email `noreply@bestworthlaw.com`

### Add to Vercel:
1. In Vercel project settings → Environment Variables
2. Add `SENDGRID_API_KEY` with your API key
3. Redeploy the project

## What You'll Get

### Live Website Features:
- Professional law firm website at your Vercel URL
- Working contact form (saves to database + sends emails)
- Consultation booking system
- Mobile-responsive design
- About and Services pages

### Client Experience:
1. Visitors can browse your services
2. Contact form sends inquiries directly to your email
3. Consultation booking collects client information
4. Professional branded emails are sent automatically
5. All submissions are stored in your database

## Post-Deployment Checklist

- [ ] Website loads correctly
- [ ] Contact form works
- [ ] Consultation booking works
- [ ] Navigation menu functions on mobile
- [ ] All pages display properly
- [ ] Email notifications work (if SendGrid configured)

## Custom Domain (Optional)

To use your own domain like `bestworthlaw.com`:

1. In Vercel project settings → Domains
2. Add your custom domain
3. Update your domain's DNS settings as instructed by Vercel
4. Vercel automatically provides SSL certificate

## Support

If you encounter any issues during deployment:
1. Check the Vercel build logs for errors
2. Verify all environment variables are set correctly
3. Ensure your Supabase database is accessible
4. Test the deployed site thoroughly

Your law firm website will be ready to impress clients and collect leads immediately after deployment!