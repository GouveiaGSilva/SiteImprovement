# Ivox Scale - Growth Hacking & Marketing Digital Platform

## Overview

Ivox Scale is a premium dark-themed institutional website for a growth hacking and digital marketing agency. The platform showcases the agency's services, methodology, case studies, and company information through a modern, high-performance web application with sophisticated animations and glassmorphism design patterns.

The application is built as a single-page application (SPA) with client-side routing, featuring multiple pages including Home, Metodologia (Methodology), Serviços (Services), Cases (Case Studies), and Sobre (About). The site emphasizes visual polish with iridescent gradient accents, glowing card effects, and smooth animations throughout.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework**: React 18+ with TypeScript, using Vite as the build tool and development server for fast hot module replacement (HMR) and optimized production builds.

**Routing**: Client-side routing implemented with Wouter, a lightweight React router alternative. All routes are handled client-side with hash-based navigation to support static hosting environments like Netlify.

**State Management**: React Query (@tanstack/react-query) for server state management and API interactions. Local component state managed with React hooks (useState, useEffect, useCallback).

**Styling System**: 
- Tailwind CSS for utility-first styling with custom configuration extending the default theme
- CSS variables for theming (dark mode by default)
- Custom design tokens defined in `index.css` for colors, spacing, shadows, and elevations
- Component library from shadcn/ui (Radix UI primitives with custom styling)

**Animation**: Framer Motion for declarative animations, page transitions, and interactive micro-interactions throughout the site.

**Design Philosophy**: Premium dark theme inspired by Linear, Stripe, and Vercel aesthetics. Features include:
- Deep black backgrounds (#0a0a0a, #121213)
- Iridescent cyan-purple-pink gradient accents
- Glassmorphism effects with backdrop blur
- Glow effects on interactive cards
- Restrained, purposeful animations

### Backend Architecture

**Server Framework**: Express.js serving as both the API server and static file server for the production build.

**Development Environment**: Vite development server in middleware mode during development, with Express handling API routes under the `/api` prefix.

**API Structure**: Minimal backend with serverless-ready architecture. Routes defined in `server/routes.ts` are currently placeholder implementations. The application is designed to work with Netlify Functions for serverless API endpoints.

**Data Storage Interface**: Abstract storage interface (`IStorage`) with in-memory implementation (`MemStorage`). Designed to be swapped with database-backed implementation (Drizzle ORM with PostgreSQL).

**Build Process**: 
- Client build: Vite bundles React application to `dist/public`
- Server build: esbuild bundles Express server to `dist/index.js`
- Production deployment serves static files with Express

### Component Architecture

**Reusable Components**:
- `GlowingCard`: Interactive card with mouse-tracking glow effect
- `IridescentBlob`: Animated gradient background element
- `RainbowButton`: Animated gradient CTA button
- `FeatureCard`, `TestimonialCard`, `CaseCard`: Content presentation components
- `Navbar`, `Footer`: Layout components with scroll interactions
- `ContactForm`: Form with API integration for lead capture

**UI Components**: Comprehensive component library from shadcn/ui including accordions, alerts, avatars, badges, buttons, cards, dialogs, dropdowns, forms, inputs, labels, modals, popovers, progress bars, radio groups, selects, separators, sliders, switches, tabs, toasts, tooltips, and more.

### Page Structure

**Multi-page SPA**:
- `/` - Home: Hero section, features, testimonials, case previews, FAQ, CTA
- `/metodologia` - Methodology: 4-step process visualization with detailed descriptions
- `/servicos` - Services: Detailed service offerings with benefits and pricing
- `/cases` - Case Studies: Portfolio of client success stories with metrics
- `/sobre` - About: Company values, team, timeline, contact form

### External Dependencies

**UI Component Libraries**:
- Radix UI: Unstyled, accessible component primitives (@radix-ui/react-*)
- shadcn/ui: Pre-styled components built on Radix UI
- Lucide React: Icon library for consistent iconography

**Animation & Interaction**:
- Framer Motion: Animation library for React
- Embla Carousel: Lightweight carousel library

**Forms & Validation**:
- React Hook Form: Form state management
- Zod: Schema validation
- @hookform/resolvers: Integration between React Hook Form and Zod

**Utilities**:
- clsx & tailwind-merge: Utility for conditional className composition
- class-variance-authority: Utility for creating variant-based component APIs
- date-fns: Date manipulation library
- cmdk: Command palette component

**Database (Configured but Not Currently Used)**:
- Drizzle ORM: TypeScript ORM for SQL databases
- @neondatabase/serverless: Serverless PostgreSQL driver for Neon
- drizzle-zod: Integration between Drizzle and Zod for schema validation
- Database schema defined in `shared/schema.ts` with users table
- Connection configured via `DATABASE_URL` environment variable

**Backend**:
- Express: Web server framework
- serverless-http: Adapter for running Express in serverless environments (Netlify Functions)
- connect-pg-simple: PostgreSQL session store (configured but not actively used)

**Development Tools**:
- Vite plugins: Runtime error overlay, cartographer (Replit-specific), dev banner
- TypeScript: Type safety across the entire codebase
- ESBuild: Fast JavaScript bundler for server code

**Deployment Platform**: Netlify with automatic deployments from Git, configured via `netlify.toml` (implied by deploy documentation). Serverless functions directory at `netlify/functions/` contains API endpoints that will be deployed as Netlify Functions.

**Third-party Services** (Integration Ready):
- Contact form and newsletter endpoints prepared for integration with:
  - Email services (SendGrid, Mailchimp, etc.)
  - CRM systems (HubSpot, RD Station, ActiveCampaign)
  - Analytics platforms (Google Analytics, Mixpanel, etc.)