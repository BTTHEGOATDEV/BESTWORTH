# BestWorth Law Firm Website - Replit.md

## Overview

This is a full-stack web application for BestWorth Law Firm built with a modern tech stack. The application features a professional frontend for client interaction and a backend API for handling contact forms and consultation bookings. The site focuses on Sarah BestWorth as the sole practicing attorney with a personalized approach to legal services.

## Recent Changes (January 2025)

✓ Removed Stripe payment integration (switched to simplified consultation booking)
✓ Updated schema to remove payment-related fields
✓ Created dedicated About and Services pages with proper routing
✓ Enhanced navigation with hamburger menu functionality for mobile
✓ Improved professional theme with refined color scheme and typography
✓ Modified consultation flow to be scheduling-based rather than payment-based
✓ Updated branding to focus on single attorney practice (Sarah BestWorth, Esq.)
✓ Switched to Supabase database for persistent data storage
✓ Updated database configuration to use postgres-js driver
✓ Added email notifications for contact forms and consultation bookings
✓ Integrated SendGrid for professional email delivery with branded templates

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Routing**: Wouter for lightweight client-side routing
- **UI Framework**: Tailwind CSS with shadcn/ui component library
- **State Management**: TanStack Query (React Query) for server state management
- **Payment Processing**: Stripe React components for secure payment handling

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Style**: RESTful API endpoints
- **Development**: Hot reloading with Vite integration in development mode

### Database & ORM
- **Database**: PostgreSQL (configured for production)
- **ORM**: Drizzle ORM with type-safe queries
- **Schema**: Shared schema definitions between client and server
- **Development Storage**: In-memory storage for development/testing

## Key Components

### Frontend Components
- **Navigation**: Fixed header with smooth scrolling navigation
- **Hero Section**: Landing page with call-to-action buttons
- **About Section**: Attorney profile and credentials
- **Services**: Grid layout showcasing legal practice areas
- **Testimonials**: Client success stories with ratings
- **Contact Form**: Form submission with validation
- **Consultation Booking**: Two-tier consultation system with Stripe payment

### Backend API Endpoints
- `POST /api/contact` - Contact form submission
- `POST /api/consultation` - Consultation booking creation
- `POST /api/create-payment-intent` - Stripe payment intent creation
- `POST /api/confirm-payment` - Payment confirmation handling

### Database Schema
- **Contacts Table**: Stores contact form submissions
- **Consultations Table**: Stores consultation bookings with payment status

## Data Flow

1. **Contact Form Flow**:
   - User fills contact form → Frontend validation → API submission → Database storage → Email notification (planned)

2. **Consultation Booking Flow**:
   - User selects consultation type → Form submission → Payment intent creation → Stripe payment processing → Database update → Confirmation

3. **Payment Processing**:
   - Client initiates payment → Stripe payment intent → Secure payment form → Payment confirmation → Database status update

## External Dependencies

### Payment Processing
- **Stripe**: Complete payment processing solution
  - Client-side: `@stripe/stripe-js` and `@stripe/react-stripe-js`
  - Server-side: `stripe` SDK for payment intent management

### Database
- **Neon Database**: PostgreSQL hosting service via `@neondatabase/serverless`
- **Connection**: Session-based connection pooling with `connect-pg-simple`

### UI/UX Libraries
- **Radix UI**: Accessible component primitives
- **Lucide React**: Icon library
- **Tailwind CSS**: Utility-first CSS framework
- **shadcn/ui**: Pre-built component library

### Development Tools
- **Replit Integration**: Development environment optimization
- **TypeScript**: Type safety across the stack
- **ESBuild**: Fast bundling for production

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite builds React application to `dist/public`
2. **Backend Build**: ESBuild bundles server code to `dist/index.js`
3. **Database**: Drizzle migrations applied via `db:push` command

### Environment Configuration
- **Development**: Uses Vite dev server with Express API
- **Production**: Static file serving with Express server
- **Database**: PostgreSQL connection via `DATABASE_URL`
- **Payments**: Stripe keys via environment variables

### File Structure
```
├── client/          # React frontend
├── server/          # Express backend
├── shared/          # Shared TypeScript definitions
├── migrations/      # Database migration files
└── dist/           # Production build output
```

The application follows a monorepo structure with clear separation between client, server, and shared code, enabling efficient development and deployment workflows.