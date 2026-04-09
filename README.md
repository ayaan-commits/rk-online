# RK Online — MBBS Abroad Consultancy Website

A 7-page, SEO-optimized, lead-generating website for **RK Online**, an MBBS abroad consultancy helping Indian students study medicine at NMC-approved universities in Kazakhstan.

## Tech Stack

- **Next.js 16** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS 4** + **shadcn/ui** (20+ components)
- **Framer Motion** — scroll-triggered animations on every page
- **MDX** — file-based blog system with 3 seed posts
- **Zod** + **react-hook-form** — validated lead capture forms

## Pages

| Route | Description |
|---|---|
| `/` | Home — 11-block landing page with hero, stats, fees, process, testimonials, FAQ |
| `/mbbs-kazakhstan` | SEO country page — comparison tables, eligibility, fees, 10 FAQs |
| `/universities/kokshetau` | University detail — tabbed layout (Overview, Fees, Admission, Hostel, Curriculum, FAQ) |
| `/universities` | Universities index with card grid |
| `/admission` | Admission process — eligibility, documents, 5-step process, payment schedule |
| `/about` | About RK Online — story, mentor spotlight, comparison vs typical agents |
| `/blog` | Blog index + 3 SEO-ready seed posts (MDX) |
| `/contact` | Contact — phone/WhatsApp/email cards, lead form, office map |
| `/api/lead` | Lead form POST endpoint with zod validation + honeypot spam protection |

## Quick Start

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Before Going Live

Replace placeholder content in these files:

### Contact Info (`src/lib/constants.ts`)
- Phone number, WhatsApp, email, office address
- Social media URLs (Instagram, Facebook, YouTube, LinkedIn)
- Google Maps embed URL
- GA4 measurement ID

### Team (`src/content/mentor.ts`)
- Mentor real name, photo, bio, credentials

### Brand Assets
- Logo → `public/images/brand/logo.svg`
- Favicon → `public/favicon.ico`
- OG image → `public/images/brand/og-default.jpg`

### Photography
- University photos → `public/images/universities/kokshetau/`
- Mentor photo → `public/images/mentors/`

### Testimonials (optional)
- Real student quotes → `src/content/testimonials.ts`

### Lead Form Backend
- Wire `/api/lead/route.ts` to Resend / Google Sheets / CRM (TODO markers in code)
- Add hCaptcha or Cloudflare Turnstile for spam protection

## Adding Content

### New University
1. Create `src/content/universities/[slug].ts` (copy kokshetau.ts structure)
2. Add to `UNIVERSITY_NAV` in `src/lib/constants.ts`
3. Done — route, page, SEO auto-generated

### New Country
1. Create `src/app/mbbs-[country]/page.tsx` (copy mbbs-kazakhstan)
2. Add to nav in `src/lib/constants.ts`

### New Blog Post
1. Create `src/content/blog/[slug].mdx` with frontmatter (title, excerpt, date, author, category, image, readingTime)
2. Done — auto-indexed and statically generated

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── api/lead/           # Lead form API endpoint
│   ├── about/
│   ├── admission/
│   ├── blog/[slug]/
│   ├── contact/
│   ├── mbbs-kazakhstan/
│   └── universities/[slug]/
├── components/
│   ├── ui/                 # shadcn/ui primitives (20+ components)
│   ├── layout/             # Header, Footer, FloatingCTAs, MobileNav
│   ├── home/               # 11 home page blocks
│   └── shared/             # Reusable: LeadForm, SectionHeader, StatBlock, etc.
├── content/
│   ├── universities/       # University data (TypeScript objects)
│   ├── blog/               # MDX blog posts
│   ├── faqs.ts             # FAQ data (home, kazakhstan, admission)
│   ├── testimonials.ts     # Student testimonials
│   └── mentor.ts           # Mentor bio
├── lib/
│   ├── constants.ts        # Site config (name, phone, email, nav, etc.)
│   ├── blog.ts             # Blog utilities (getAllPosts, getPostBySlug)
│   ├── utils.ts            # shadcn cn() helper
│   └── validations/        # Zod schemas
└── types/                  # TypeScript interfaces
```

## Design System

- **Colors**: Navy (#0A1F44) + Gold (#C9A227) + Off-white (#FAF8F3)
- **Fonts**: Playfair Display (headings) + Inter (body)
- **Visual style**: "Trustworthy" — institutional look targeting Indian parents
- **Animations**: Scroll-triggered fade/slide via framer-motion on all pages

## SEO

- Per-page metadata (title, description, Open Graph, Twitter cards)
- `sitemap.xml` and `robots.txt` auto-generated
- `public/llms.txt` for AI crawler allowlist
- JSON-LD structured data ready (TODO markers in code)
- Blog posts target long-tail MBBS keywords

## Deployment

Optimized for Vercel:

```bash
npm run build    # Verify build passes
# Then connect GitHub repo to Vercel for auto-deploy
```

## License

Private project — RK Online.
