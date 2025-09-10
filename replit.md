# Guy Harris Pathé Voice - Voice Over Landing Page

## Overview

This is a professional landing page website for Guy Harris, a voiceover artist specializing in the authentic British Pathé newsreel voice style. The site showcases his services, includes audio/video examples, and provides a contact form for potential clients. Built as a modern single-page application with a vintage aesthetic that reflects the 1940s newsreel era.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **React SPA**: Single-page application built with React 18 and TypeScript
- **Routing**: Client-side routing using Wouter for lightweight navigation
- **Styling**: Tailwind CSS with custom design system and vintage-themed components
- **UI Components**: Comprehensive component library using Radix UI primitives with shadcn/ui styling
- **State Management**: React Query (TanStack Query) for server state and React hooks for local state
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Express Server**: Node.js server with Express framework
- **TypeScript**: Full TypeScript implementation across frontend and backend
- **Development Setup**: Hot module replacement and live reloading via Vite integration
- **Static Serving**: Production builds served as static files through Express

### Database Layer
- **Drizzle ORM**: Type-safe database interactions with PostgreSQL dialect
- **Schema Management**: Centralized schema definitions in shared directory
- **Migrations**: Database migrations managed through Drizzle Kit
- **Connection**: Neon Database serverless PostgreSQL integration

### Component Architecture
- **Design System**: Custom CSS variables and Tailwind configuration for consistent theming
- **Responsive Design**: Mobile-first approach with breakpoint-specific styling
- **Accessibility**: ARIA labels and semantic HTML throughout component structure
- **Animation**: CSS transitions and scroll-reveal animations for enhanced user experience

### Development Workflow
- **Monorepo Structure**: Client, server, and shared code organized in separate directories
- **Path Aliases**: Configured import aliases for clean module resolution
- **Hot Reloading**: Development server with instant feedback for code changes
- **Type Safety**: Strict TypeScript configuration with comprehensive type checking

## External Dependencies

### UI Framework & Styling
- **React**: Core UI framework with hooks and modern patterns
- **Tailwind CSS**: Utility-first CSS framework with custom design tokens
- **Radix UI**: Headless component primitives for accessible UI elements
- **Lucide React**: Icon library for consistent iconography
- **Google Fonts**: Custom typography with Bebas Neue, Playfair Display, and Libre Baskerville

### Database & ORM
- **Neon Database**: Serverless PostgreSQL database hosting
- **Drizzle ORM**: Type-safe database toolkit with schema management
- **Drizzle Kit**: CLI tools for database migrations and schema generation

### Development Tools
- **Vite**: Build tool and development server with TypeScript support
- **ESBuild**: Fast JavaScript bundler for production builds
- **PostCSS**: CSS processing with Tailwind and Autoprefixer plugins

### Form & Validation
- **React Hook Form**: Form state management with validation
- **Zod**: Schema validation library integrated with Drizzle

### Media Integration
- **YouTube Embeds**: Video examples showcasing voiceover work
- **Unsplash Images**: Professional stock photography for visual content

### Production Considerations
- **Replit Integration**: Platform-specific configurations for deployment
- **Environment Variables**: Secure configuration management for database connections
- **Error Handling**: Comprehensive error boundaries and user feedback systems