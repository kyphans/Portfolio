# Portfolio Website

A modern, high-performance portfolio website built with Next.js 14 and Sanity CMS, showcasing projects, blog posts, and technical expertise. Features a custom theming system, server-side rendering, and comprehensive monitoring.

## Features

- **Dynamic Content Management**: Blog posts and projects managed through Sanity CMS
- **Custom Theming**: Pink and green theme variants with CSS variables
- **Performance Optimized**: ISR (Incremental Static Regeneration) with 4-hour revalidation
- **SEO Enhanced**: Server-side rendering and optimized metadata
- **Error Tracking**: Integrated Sentry monitoring across all environments
- **Analytics**: Google Analytics 4 integration
- **Responsive Design**: Mobile-first approach with Tailwind CSS

## Tech Stack

- **Framework**: Next.js 14.2.18 (App Router)
- **Language**: TypeScript 5.3.3
- **Styling**: Tailwind CSS 3.4.1
- **CMS**: Sanity 3.67.1
- **Monitoring**: Sentry 8.47.0
- **Analytics**: Google Analytics 4
- **Deployment**: Vercel (or compatible Node.js platform)

## Quick Start

### Prerequisites

- Node.js 20+
- npm or yarn
- Sanity CMS account and project

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd Portfolio

# Install dependencies
npm install

# Set up environment variables (see .env.example)
cp .env.example .env
# Edit .env with your Sanity credentials

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

### Development Commands

```bash
npm run dev          # Start development server at http://localhost:3000
npm run build        # Build production bundle
npm run start        # Start production server
npm run lint         # Run ESLint
npx prettier --write .  # Format all files with Prettier
```

## Project Structure

```
Portfolio/
├── app/                    # Next.js 14 App Router (pages, layouts, API routes)
├── components/             # React components (UI, features, utilities)
├── lib/                    # Library code (Sanity client, utilities)
├── sanity/                 # Sanity CMS configuration and schemas
├── public/                 # Static assets (images, fonts, icons)
├── types/                  # TypeScript type definitions
├── docs/                   # 📚 Comprehensive documentation
└── Configuration files     # Next.js, TypeScript, Tailwind, Sentry, etc.
```

## Key Directories

### `/app` - Next.js App Router

All pages, layouts, and API routes using Next.js 14 App Router:

- **Pages**: `page.tsx`, `about/page.tsx`, `blogs/page.tsx`, `projects/page.tsx`, `contact/page.tsx`
- **Dynamic Routes**: `blogs/[slug]/page.tsx` (ISR with 4-hour revalidation)
- **API Routes**: `api/revalidate/route.ts` (on-demand revalidation)
- **Sanity Studio**: `studio/[[...tool]]/page.tsx` (CMS admin interface)

### `/components` - React Components

Reusable UI and feature components:

- **Layout**: `Navbar.tsx`, `Footer.tsx`, `theme-provider.tsx`
- **Sections**: `Home.tsx`, `About.tsx`, `Blog.tsx`, `TechStack.tsx`, `ShowCase.tsx`
- **Features**: `BlogCard.tsx`, `ThemeToggle.tsx`, `GoogleAnalytics.tsx`
- **UI**: `ui/button.tsx`

### `/lib` - Library Code

Utility functions, Sanity client, and shared logic:

- **Sanity**: `sanity/client.ts`, `sanity/queries.ts`, `sanity/env.ts`
- **Utilities**: `utils.ts`

### `/sanity` - Sanity CMS

Content schemas and Studio configuration:

- **Schemas**: `schemaTypes/blogSchema.ts`, `schemaTypes/projectSchema.ts`
- **Configuration**: `lib/client.ts`, `lib/image.ts`, `structure.ts`

## Configuration

## Theming System

The website features a custom theming system with two variants:

- **Pink Theme** (default): Primary color `#fa002e`
- **Green Theme**: Primary color `#00ff00`

Theme colors are defined as CSS variables in `app/globals.css` and can be toggled via the theme toggle in the navigation bar. Themes persist across sessions using `localStorage`.

## Content Management

### Blog Posts

Blog posts are managed in Sanity CMS with the following fields:

- Title, slug, short description, detailed description (portable text)
- Images, hashtags, category, reference links
- Estimated reading time (auto-calculated)

### Projects

Projects are managed in Sanity CMS with:

- Title, slug, short/detailed description
- Images, GitHub link, hashtags, category

## Rendering Strategies

- **SSG** (Static Site Generation): Homepage, About, Contact
- **SSR** (Server-Side Rendering): Blog listing, Projects listing
- **ISR** (Incremental Static Regeneration): Blog detail pages (4-hour revalidation)

## Monitoring & Analytics

### Sentry Error Tracking

- Configured for client, server, and edge environments
- Tunnel route at `/monitoring` to bypass ad-blockers
- 10% session replay sampling

### Google Analytics

- GA4 integration for page views and user analytics
- Configured via `NEXT_PUBLIC_GOOGLE_ANALYTICS` environment variable

## Deployment

### Vercel Deployment (Recommended)

1. Push your code to GitHub
2. Import project in Vercel
3. Configure environment variables
4. Deploy

The application is optimized for Vercel but can be deployed to any Node.js hosting platform.

### Build for Production

```bash
npm run build
npm run start
```

## Performance

The website is optimized for excellent performance:

- **Target Lighthouse Score**: ≥ 90 for Performance, SEO, and Accessibility
- **ISR**: Reduces API calls and improves load times
- **Image Optimization**: Next.js Image component + Sanity CDN
- **Code Splitting**: Automatic route-based splitting

## Browser Support

- Latest 2 versions of Chrome, Firefox, Safari, Edge
- iOS Safari and Chrome Mobile
- Graceful degradation for older browsers

### Development Workflow

1. Create a feature branch: `git checkout -b feat/your-feature`
2. Make your changes following the code standards
3. Run linting: `npm run lint`
4. Test locally: `npm run dev`
5. Commit with conventional commit format: `feat: add new feature`
6. Push and create a pull request

## License

This project is private and proprietary.
---

**Version**: 0.1.0
**Last Updated**: 2025-11-13
**Built with**: Next.js 14, React 18, TypeScript, Sanity CMS, Tailwind CSS
