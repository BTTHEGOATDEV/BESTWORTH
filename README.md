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
- **Database**: PostgreSQL with Drizzle ORM
- **Deployment**: Vercel

## Deployment on Vercel

### Prerequisites
1. GitHub account
2. Vercel account (free)
3. Supabase account for database (optional - uses in-memory storage by default)

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

### Step 3: Environment Variables (Optional)
If you want to use Supabase database instead of in-memory storage:
1. In Vercel project settings, go to "Environment Variables"
2. Add `DATABASE_URL` with your Supabase connection string

### Step 4: Deploy
1. Click "Deploy"
2. Wait for deployment to complete
3. Your website will be available at `https://your-project-name.vercel.app`

## Development

To run locally:
```bash
npm install
npm run dev
```

## Contact Information

- Email: sarah@bestworthlaw.com
- Phone: (555) 123-4567
- Address: 123 Legal Plaza, Suite 456