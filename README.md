# BestWorth Law Firm Website

A professional law firm website built with React, TypeScript, and Express.js featuring consultation booking and contact forms.

## Features

- Professional law firm design with custom branding
- Consultation booking system (simplified without payment processing)
- Contact form submissions
- About and Services pages with detailed information
- Mobile-responsive design with hamburger navigation
- Modern UI components with Tailwind CSS

## Tech Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS, shadcn/ui
- **Backend**: Express.js, Node.js
- **Database**: Supabase (PostgreSQL) with Drizzle ORM
- **Deployment**: Vercel

## Database Setup with Supabase

### Step 1: Create Supabase Project
1. Go to [supabase.com](https://supabase.com) and create a free account
2. Click "New Project"
3. Choose your organization and give your project a name (e.g., "bestworth-law-firm")
4. Set a database password (save this!)
5. Choose a region close to your users
6. Click "Create new project" and wait for setup to complete

### Step 2: Get Database Connection String
1. In your Supabase project dashboard, click "Connect" in the top toolbar
2. Under "Connection string" → "Transaction pooler", copy the URI
3. Replace `[YOUR-PASSWORD]` with the database password you set earlier
4. Your connection string should look like:
   ```
   postgresql://postgres.[project-ref]:[password]@aws-0-[region].pooler.supabase.com:6543/postgres?pgbouncer=true&connection_limit=1
   ```

## Deployment on Vercel

### Prerequisites
1. GitHub account
2. Vercel account (free)
3. Supabase database URL from above

### Step 1: Push to GitHub
1. Create a new repository on GitHub
2. Push your code to the repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit - BestWorth Law Firm website"
   git branch -M main
   git remote add origin https://github.com/yourusername/bestworth-law-firm.git
   git push -u origin main
   ```

### Step 2: Deploy on Vercel
1. Go to [vercel.com](https://vercel.com) and sign in
2. Click "New Project"
3. Import your GitHub repository
4. Configure build settings:
   - **Framework Preset**: Other
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist/public`
   - **Install Command**: `npm install`

### Step 3: Environment Variables
1. In Vercel project settings, go to "Environment Variables"
2. Add `DATABASE_URL` with your Supabase connection string from above
3. Make sure to redeploy after adding environment variables

### Step 4: Deploy
1. Click "Deploy"
2. Wait for deployment to complete
3. Your website will be available at `https://your-project-name.vercel.app`

## Development

To run locally:
```bash
npm install
# Add your Supabase DATABASE_URL to environment variables
npm run db:push  # Creates tables in your Supabase database
npm run dev
```

### Environment Variables for Local Development
Create a `.env` file in your project root:
```
DATABASE_URL=your_supabase_connection_string_here
```

## Contact Information

- Email: sarah@bestworthlaw.com
- Phone: (555) 123-4567
- Address: 123 Legal Plaza, Suite 456