@AGENTS.md

# RK Online — Project Instructions

## Overview
MBBS abroad consultancy website for Indian students targeting Kazakhstan. Built with Next.js 16 + React 19 + TypeScript + Tailwind 4 + shadcn/ui.

## Brand
- **Name**: RK Online
- **Positioning**: "No middlemen. Real people. Real experience."
- **Visual Identity**: Trustworthy — navy (#0A1F44) + gold (#C9A227) + off-white (#FAF8F3)
- **Fonts**: Playfair Display (headings), Inter (body)
- **Tone**: Professional but warm, transparent, parent-friendly

## Architecture

### Content-as-Data Pattern
University info lives in `src/content/universities/[slug].ts` as typed objects. Adding a university = create a new file with the same shape. No template changes needed.

### Placeholder Content
All placeholders are centralized in:
- `src/lib/constants.ts` — contact info, nav, recognitions
- `src/content/mentor.ts` — mentor bio
- `src/content/testimonials.ts` — student quotes
Every placeholder has a `// PLACEHOLDER` comment for easy find-and-replace.

### Lead Form
`/api/lead/route.ts` validates with zod, has honeypot spam protection, rate limiting. Currently logs to console — TODO markers show where to wire Resend/Sheets/CRM.

### Blog
MDX files in `src/content/blog/`. Frontmatter: title, excerpt, date, author, category, image, readingTime. Auto-indexed by `src/lib/blog.ts`.

## Coding Conventions

### Component Organization
- `src/components/ui/` — shadcn primitives (don't modify unless necessary)
- `src/components/shared/` — reusable across pages (LeadForm, SectionHeader, AnimateOnScroll, etc.)
- `src/components/home/` — home page blocks only
- `src/components/layout/` — header, footer, floating CTAs, mobile nav

### Styling
- Use Tailwind utility classes, not custom CSS
- Brand utilities available: `container-brand`, `section-padding`, `bg-navy-gradient`, `text-shadow-gold`, `highlight-gold`, `animate-gradient`, `btn-fill-effect`
- Use CSS variables for colors: `text-gold`, `bg-navy`, `bg-gold`, `text-navy-dark`, etc.
- Buttons on dark backgrounds: use `!bg-white !text-black` with `!important` to override shadcn variants

### Animations
- Use `AnimateOnScroll` wrapper from `src/components/shared/animate-on-scroll.tsx` for scroll-triggered animations
- Don't wrap hero sections (above the fold)
- Use staggered delays for card grids: `delay={index * 0.1}`
- Directions: "up" (default), "left", "right", "none" (fade only)

### SEO
- Every page exports `metadata` (Metadata type from Next.js)
- Keep pages as server components (don't add "use client" to pages with metadata)
- AnimateOnScroll handles its own client-side rendering

## Key Files
- `src/lib/constants.ts` — single source of truth for site config
- `src/content/universities/kokshetau.ts` — university data template
- `src/lib/validations/lead-form.ts` — zod schemas for forms
- `src/app/globals.css` — theme variables + custom utilities + keyframe animations
- `docs/superpowers/specs/2026-04-09-rk-online-website-design.md` — full design spec

## Known Issues
- shadcn Button `variant="outline"` overrides custom className on dark backgrounds — use `!important` overrides
- shadcn Accordion does NOT accept `type="single"` or `collapsible` props in this version
- Zod v4 uses `.issues` not `.errors` on ZodError
- lucide-react does not export social media icons (Instagram, Facebook, etc.) — use inline SVGs

## Adding Features
- **New university**: Copy `src/content/universities/kokshetau.ts`, update `UNIVERSITY_NAV` in constants
- **New country**: Copy `src/app/mbbs-kazakhstan/`, update nav
- **New blog post**: Create `.mdx` in `src/content/blog/`
- **Real lead backend**: Follow TODO markers in `/api/lead/route.ts`
