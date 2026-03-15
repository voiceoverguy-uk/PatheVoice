# Guy Harris Pathé Voice - Voice Over Landing Page

## Overview

This is a professional landing page website for Guy Harris, a voiceover artist specializing in the authentic British Pathé newsreel voice style. The site showcases his services, includes audio/video examples, and provides a contact form for potential clients. Built as a modern single-page application with a vintage aesthetic that reflects the 1940s newsreel era.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend + Vercel Serverless Functions
- **React SPA**: Single-page application built with React 18 and TypeScript
- **Routing**: Client-side routing using Wouter for lightweight navigation
- **Styling**: Tailwind CSS with custom design system and vintage-themed components
- **UI Components**: Comprehensive component library using Radix UI primitives with shadcn/ui styling
- **State Management**: React hooks for local state management
- **Build Tool**: Vite for fast development and optimized production builds
- **Serverless API**: Vercel functions in `api/` directory for server-side logic (contact form emails via Resend, Google Reviews via Places API)

### Component Architecture
- **Design System**: Custom CSS variables and Tailwind configuration for consistent theming
- **Responsive Design**: Mobile-first approach with breakpoint-specific styling
- **Accessibility**: ARIA labels and semantic HTML throughout component structure
- **Animation**: CSS transitions and scroll-reveal animations for enhanced user experience

### Development Workflow
- **Project Structure**: Frontend code in `client` directory, build output to `dist` folder
- **Path Aliases**: Configured import aliases (@, @assets) for clean module resolution
- **Hot Reloading**: Vite development server with instant feedback for code changes
- **Type Safety**: Strict TypeScript configuration with comprehensive type checking
- **Production Build**: Static files output to `dist/` folder for deployment

## External Dependencies

### UI Framework & Styling
- **React**: Core UI framework with hooks and modern patterns
- **Tailwind CSS**: Utility-first CSS framework with custom design tokens
- **Radix UI**: Headless component primitives for accessible UI elements
- **Lucide React**: Icon library for consistent iconography
- **Google Fonts**: Custom typography with Bebas Neue, Playfair Display, and Libre Baskerville

### Development Tools
- **Vite**: Build tool and development server with TypeScript support
- **PostCSS**: CSS processing with Tailwind and Autoprefixer plugins

### Form & Validation
- **React Hook Form**: Form state management with validation
- **Zod**: Schema validation library for form validation (shared schema in `client/src/lib/contactSchema.ts`, duplicated in `api/contact.ts` for server-side validation)

### Contact Form & Email
- **Resend**: Email delivery service for contact form submissions (server-side only via `api/contact.ts`)
- **Email Template**: Table-based HTML with inline CSS for Gmail/Outlook compatibility
- **Secrets**: `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL` (must also be set in Vercel environment variables)

### Media Integration
- **YouTube Embeds**: Video examples showcasing voiceover work
- **Stock Images**: Professional photography for visual content

### Deployment
- **Hosting**: Vercel — auto-deploys from GitHub on every push
- **Build Output**: Production-ready static files in `dist/` folder
- **SPA Routing**: Configured with vercel.json for proper client-side routing support
- **Social Banner**: `client/public/social-banner.jpg` is the OG/Twitter Card image served at `https://www.pathevoice.co.uk/social-banner.jpg`