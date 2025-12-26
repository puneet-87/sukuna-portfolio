# Sukuna Portfolio - replit.md

## Overview

A dark, anime-inspired personal portfolio website themed around Sukuna's Domain Expansion from Jujutsu Kaisen. The site showcases technical skills, projects, and contact information with an intimidating yet professional aesthetic. Built as a fullstack application with a React frontend and Express backend, featuring 3D graphics, smooth animations, and a PostgreSQL database for storing contact messages and feedback.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript, bundled with Vite
- **Routing**: Wouter for client-side navigation (lightweight alternative to React Router)
- **State Management**: TanStack React Query for server state and data fetching
- **Styling**: TailwindCSS with custom CSS variables for the Sukuna theme (crimson/black color palette)
- **UI Components**: shadcn/ui component library (Radix primitives) with custom themed components (SukunaButton, CursedCard)
- **3D Graphics**: Three.js via @react-three/fiber and @react-three/drei for animated background elements
- **Animations**: Framer Motion for page transitions and UI animations

### Backend Architecture
- **Runtime**: Node.js with Express
- **Language**: TypeScript (compiled with tsx for development, esbuild for production)
- **API Design**: RESTful endpoints defined in shared/routes.ts with Zod validation schemas
- **Database ORM**: Drizzle ORM with PostgreSQL dialect

### Data Storage
- **Database**: PostgreSQL (connection via DATABASE_URL environment variable)
- **Schema Location**: shared/schema.ts defines tables using Drizzle's pgTable
- **Tables**: 
  - `messages` - Contact form submissions (name, email, message)
  - `feedback` - Site feedback with ratings (1-5 scale) and comments
- **Migrations**: Drizzle Kit for schema management (`npm run db:push`)

### Shared Code Pattern
- The `shared/` directory contains code used by both frontend and backend
- `shared/schema.ts` - Database schema definitions and Zod validation schemas
- `shared/routes.ts` - API route definitions with input/output types for type-safe API calls

### Build System
- Development: Vite dev server with HMR, Express backend with tsx
- Production: Vite builds frontend to dist/public, esbuild bundles server to dist/index.cjs
- Key dependencies are bundled into the server build to reduce cold start times

## External Dependencies

### Database
- PostgreSQL database (required, connection string via DATABASE_URL)
- Drizzle ORM for database operations
- connect-pg-simple for session storage (available but not currently used)

### UI Component Libraries
- Radix UI primitives (accordion, dialog, dropdown, tabs, etc.)
- shadcn/ui component patterns
- Lucide React for icons

### 3D Graphics
- Three.js core library
- @react-three/fiber - React renderer for Three.js
- @react-three/drei - Useful helpers (Float, Points, etc.)

### Form Handling
- React Hook Form with @hookform/resolvers
- Zod for schema validation (shared between frontend and backend)

### Development Tools
- Replit-specific plugins: vite-plugin-runtime-error-modal, vite-plugin-cartographer, vite-plugin-dev-banner