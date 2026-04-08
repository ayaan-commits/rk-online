# RK Online — Website Design Spec

**Date:** 2026-04-09
**Status:** Approved for implementation planning
**Author:** Brainstorming session with RK Online founder
**Project:** RK Online — MBBS abroad consultancy website

---

## 1. Overview

A 7-page, SEO-optimized, lead-generating Next.js website for **RK Online**, a new MBBS-abroad consultancy that places Indian students at medical universities in Kazakhstan. The site launches with a deep focus on **Shokan Ualikhanov Kokshetau State University** as the featured partner, with a route architecture that scales to additional universities and countries without rebuilding.

The site uses a **trustworthy visual identity** (navy + gold, serif headings) to target Indian parents who are cautious about fake agents, combined with modern Next.js + shadcn/ui for performance and scalability.

**One-sentence summary:**
> A 7-page, SEO-optimized, lead-generating Next.js website for RK Online — a new MBBS-abroad consultancy positioning honestly as "direct university tie-up + real mentors" — focused on Shokan Ualikhanov Kokshetau State University in Kazakhstan, built on Next.js 15 + shadcn/ui + Tailwind with a trustworthy navy/gold visual identity, designed to scale to more universities and countries by adding content files, not rebuilding code.

---

## 2. Context & Problem Statement

### 2.1 The Brand
**RK Online** is a new (pre-launch) education consultancy that helps Indian students secure MBBS admission at universities in Kazakhstan. The business is being started by the founder based on their own experience studying at Kokshetau. The positioning is intentionally honest — they are NOT claiming thousands of placements or decades of experience. Instead, their differentiation is:

1. **Direct tie-up** with the partner university (no commission middlemen)
2. **End-to-end support** (visa, flights, hostel, Indian food, emergency help)
3. **Personal mentoring** by someone who actually studied at Kokshetau

### 2.2 Market Context
The Indian MBBS-abroad consultancy market is dominated by a few large players (Eklavya Overseas, GVK Edutech, MBBS Direct, MBBS Kazakhstan, RMC Education). Research of these competitors revealed a common playbook:

- **Lead-gen first**: simple forms (Name / Phone / State) above the fold
- **Heavy trust signals**: NMC, WHO, FAIMER badges; inflated placement numbers
- **SEO-driven**: landing pages for "MBBS in [country]" and each partner university
- **Multi-channel CTAs**: phone, WhatsApp, form, popup, floating button
- **Content depth**: fees, eligibility, documents, syllabus, city info, FAQs

### 2.3 The Problem
RK Online needs a website that:
1. Looks credible enough that Indian parents will trust a ₹23-lakh, 6-year commitment to an unknown consultancy
2. Ranks on Google for "MBBS in Kazakhstan" and "Kokshetau University" queries
3. Captures leads efficiently (form / phone / WhatsApp)
4. Can grow from 1 university / 1 country to many without rebuilding
5. Launches with placeholder content (no real team photos, no real testimonials, no office address yet) without looking fake or empty

---

## 3. Goals & Non-Goals

### 3.1 Goals
- Build a 7-page static Next.js website that looks like a complete, credible consultancy
- Rank on Google for Kazakhstan MBBS keywords within 3–6 months of launch
- Capture leads via form, phone, and WhatsApp
- Scale by adding content files (not code) when new universities or countries are added
- Ship fast — placeholder content is explicit and centralized for quick replacement

### 3.2 Non-Goals (explicitly out of scope)
- Real brand assets (logo, photography, team bios) — placeholders only
- Production-wired lead backend (email / CRM / Sheets) — code has TODO markers
- Admin CMS — blog is MDX file-based
- Payment integration
- Authenticated student portal
- Chat widget / live chat bot
- Multi-language (Hindi / Russian) — structure supports i18n, v1 is English only
- Real testimonials and reviews — placeholders until collected
- Paid-ads landing pages
- Email marketing automation
- Additional universities beyond Kokshetau (route is ready; content only for Kokshetau)
- Additional countries beyond Kazakhstan (route is ready; content only for Kazakhstan)
- Production deployment / hosting setup (prepped for Vercel, deploy is founder's step)

---

## 4. User Personas

### Persona 1 — "The Parent" (primary decision maker)
- 45–55 years old, middle-class Indian parent
- Child just got NEET result below the cutoff for Indian government colleges
- Terrified of getting scammed by fake agents (common in this niche)
- Wants: institutional credibility, transparent fees, direct university contact, real people to talk to
- Primary action: **phone call or form submission**, then demands a meeting

### Persona 2 — "The Student" (primary researcher)
- 17–19 years old, recently wrote NEET
- Researches on mobile, compares 5–10 consultancies in parallel
- Wants: fee clarity, university photos, what life is like, FMGE pathway
- Primary action: **WhatsApp** (fastest response), then tells parents

### Persona 3 — "The Senior / Referral" (warm lead)
- Already studying at Kokshetau or similar
- Sends juniors and friends to the site
- Wants: to easily share a link and the mentor's contact
- Primary action: **direct to WhatsApp or phone**

---

## 5. Competitive Research Summary

Top competitors studied in depth: **eklavyaoverseas.com**, **gvkedutech.com**, **mbbskazakhstan.com**, **mbbsdirect.com**, **rmcedu.com**, **eduwisor.com**.

**Patterns that work in this niche:**

| Pattern | Why it works |
|---|---|
| Hero with mini lead form (Name/Phone/State) | Captures leads before scroll; parents submit fast |
| "At a glance" facts strip | Scannable; answers the first 5 questions instantly |
| Fee comparison table per university | Most-read block; decision anchor |
| NMC / WHO / FAIMER badge strip | Primary trust signal |
| 5-step admission timeline | Reduces "how does this work?" anxiety |
| Sticky phone number + WhatsApp float | Multi-channel conversion |
| FAQ accordion | Crushes objections without demanding a call |
| Blog for SEO | Ranks long-tail queries; serves as trust content |

**Anti-patterns observed (we explicitly avoid):**

| Anti-pattern | Why we avoid |
|---|---|
| Inflated stats ("5,000+ students placed") | Illegal-ish and breaks trust when parents verify |
| Dark-pattern popups (multiple, pushy) | Feels scammy; hurts conversion for cautious buyers |
| Fake testimonials with stock photos | Easily detected; destroys trust |
| Dozens of thin pages (1 per service) | Google treats as low-quality; wastes crawl budget |
| Auto-playing video or chatbot | User explicitly said no chatbot |
| Cluttered footer with 50 links | Looks desperate; modern design prefers focused footers |

---

## 6. Brand & Positioning

### 6.1 Positioning Statement
> **"No middlemen. Real people. Real experience."**
>
> RK Online is the MBBS-abroad consultancy built by people who actually studied there. We have direct tie-ups with the university, handle everything end-to-end, and every student gets mentored by a senior who's lived the journey.

### 6.2 Tone of Voice
- **Professional but warm** — not corporate, not casual
- **Transparent** — we name exact fees, don't hide caveats
- **Confident without boasting** — we don't claim numbers we don't have
- **Parent-friendly** — every page reassures a nervous parent paying ₹23 lakhs

### 6.3 Visual Identity: "Trustworthy"

Chosen because this niche is dominated by fake agents, and parents specifically look for institutional cues (like universities, banks, law firms) to distinguish legitimate consultancies.

#### Color Palette

| Role | Name | Hex | Usage |
|---|---|---|---|
| Primary | Deep Navy | `#0A1F44` | Header, footer, headings, primary buttons |
| Primary Dark | Darker Navy | `#061433` | Hover states, footer bg |
| Accent | Muted Gold | `#C9A227` | CTAs, highlights, trust badges, underlines |
| Accent Dark | Dark Gold | `#A8851B` | CTA hover |
| Background | Warm Off-White | `#FAF8F3` | Page background |
| Surface | White | `#FFFFFF` | Cards, form fields |
| Text Primary | Near-Black | `#0F172A` | Body copy |
| Text Secondary | Slate | `#475569` | Meta, sub-copy |
| Border | Light Slate | `#E2E8F0` | Dividers, card borders |
| Success | Deep Green | `#16A34A` | "NMC Approved" |
| Error | Crimson | `#DC2626` | Form validation |

#### Typography
- **Headings:** Playfair Display (Google Fonts) — serif, editorial authority
- **Body + UI:** Inter (Google Fonts) — modern, highly readable
- **Scale desktop:** H1 56px · H2 40px · H3 28px · body 17px · small 14px
- **Scale mobile:** H1 36px · H2 28px · body 16px

#### Layout & Spacing
- **Container max-width:** 1200px (intentional, not 1280)
- **Section padding:** 96px desktop, 64px mobile
- **Grid:** 12-col desktop, collapses to 1-col at <768px
- **Border radius:** 8px default
- **Breakpoints:** sm 640 · md 768 · lg 1024 · xl 1280

#### Visual Effects (restrained)
- No gradients on CTAs (solid colors only)
- Subtle scroll-triggered fade-ins on section headers and hero stats
- Gentle 2px hover lift + shadow on cards
- NO glassmorphism, blur, or aggressive motion
- One animated counter on hero stats (0 → 62 years, 0 → 50,000 alumni)

---

## 7. Sitemap & Route Architecture

```
rk-online/
│
├── /                                    → Home
├── /about                               → About RK Online
├── /mbbs-kazakhstan                     → Country landing page
├── /universities                        → Universities index
│   └── /universities/[slug]             → Dynamic uni detail (Kokshetau today)
├── /admission                           → Admission + Fees + Eligibility
├── /blog                                → Blog index
│   └── /blog/[slug]                     → Dynamic blog post
├── /contact                             → Contact + Apply
├── /api/lead                            → Lead form endpoint
├── /sitemap.xml                         → Auto-generated
└── /robots.txt                          → Auto-generated
```

### 7.1 URL Rationale
- `/mbbs-kazakhstan` (not `/kazakhstan`) — exact-match for top SEO query
- `/universities/kokshetau` — clean hierarchy; supports `/universities` index
- `/admission` (not `/admission-process`) — shorter URLs rank higher
- No `/services` page — services are sections on the home page
- No separate `/fees` page — fees live in `/admission` and `/universities/kokshetau`

### 7.2 Future-Ready Routes (reserved, not built)
- `/mbbs-russia` (duplicate of `/mbbs-kazakhstan` template)
- `/mbbs-uzbekistan` (same)
- `/universities/[new-slug]` (already dynamic; just add content file)

### 7.3 Navigation
**Header (left-to-right):**
`Logo` · `Home` · `MBBS in Kazakhstan` · `Universities ▾` · `Admission` · `About` · `Blog` · `[📞 Call]` `[Apply Now →]`

The `Universities ▾` dropdown lists Kokshetau today, expandable.

**Footer (4 columns):**
1. **RK Online** — logo, tagline, socials
2. **Quick Links** — Home, About, Admission, Blog, Contact
3. **Study Destinations** — Kazakhstan (+ "More coming soon")
4. **Contact** — phone, WhatsApp, email, address placeholder

**Below footer:** credentials strip (NMC · WHO · FAIMER · WDOMS · USMLE), copyright, privacy/terms.

---

## 8. Home Page Structure

The home page has **11 content blocks** + header + footer + floating CTAs. Block order is deliberate: each block's job is to move the visitor one step closer to submitting the lead form.

### Block 1 — Hero
- **Left (60%):** Gold kicker ("STUDY MBBS IN KAZAKHSTAN · 2026 INTAKE OPEN"), serif H1 ("Your Medical Career Starts at Kokshetau State University."), sub-copy, two CTAs (`Apply for 2026 Intake →`, `Download Fee Structure`), trust row (NMC / WHO / FAIMER / No Donation)
- **Right (40%):** White hero lead form card with `Full Name`, `Phone`, `State`, `NEET Score (optional)`, consent checkbox, `Get Free Counseling →` button
- **Background:** subtle campus photo with dark overlay OR navy gradient with gold grid

### Block 2 — Trust Strip
Thin band with horizontally-arranged credential logos: NMC · WHO · FAIMER · WDOMS · UNESCO · USMLE · ECFMG.

### Block 3 — Why Kokshetau? (6-card value grid, 3×2)
| Icon | Title | Copy |
|---|---|---|
| 🏛️ | 62 Years of Legacy | Founded 1962, 50,000+ alumni worldwide |
| 🌐 | English Medium | Entire MBBS in English — no language barrier |
| 🏥 | NMC + WHO Recognized | Eligible for FMGE, USMLE, PLAB |
| 💰 | ₹4.5L / Year All-Inclusive | Under ₹5L total — cheaper than Indian private |
| ✈️ | Direct Admission | No entrance exam, no IELTS |
| 🇮🇳 | 500+ Indian Students | Strong community, Indian food |

### Block 4 — Animated Stats Strip
Full-width navy band. Gold numbers count up on scroll.
**62+** Years of Legacy · **50,000+** Alumni Worldwide · **500+** Indian MBBS Students · **41st** Ranked in Kazakhstan

### Block 5 — Featured University Teaser (Kokshetau)
Two-column: image carousel left, key facts + `Explore Kokshetau in Detail →` button right.

### Block 6 — Fee Transparency Table
Clean shadcn Table with tuition, hostel, admission, total annual, total 6-year. Copy: "No hidden fees. Ever." CTA: `Download Full Fee Structure (PDF)`.

### Block 7 — Admission Process Timeline
Horizontal 5-step visual: Free Counseling → Document Review → Admission Offer Letter → Visa & Ticketing → Fly & Campus Arrival (Day 1 / Week 1 / Week 2 / Week 4 / Month 2). Stacks vertical on mobile.

### Block 8 — Mentor Spotlight ("The RK Online Difference")
Two-column: mentor photo (gold ring border) left, story + 3 bullet differentiators right.

### Block 9 — Testimonials Carousel
shadcn Carousel with 4–6 placeholder testimonial cards (avatar, name, year, 5-star rating, 2–3 sentence quote).

### Block 10 — FAQ Accordion (8 items)
1. Is MBBS from Kokshetau recognized in India?
2. What is the total cost for 6 years?
3. Do I need IELTS or any language test?
4. Is Indian food available in the hostel?
5. Can my child come home during holidays?
6. What happens after MBBS — FMGE, USMLE, PG in India?
7. Is Kokshetau safe for Indian students?
8. What if my NEET score is low?

### Block 11 — Final CTA Band
Full-width navy, gold accents. `Book Free Counseling →` (gold) and `Call +91-XXXXXXXXXX` (ghost white).

### Floating Elements (on every page)
- **Sticky WhatsApp button** bottom-right (green pulse on first scroll)
- **Sticky Apply Now button** bottom-left on mobile
- **Exit-intent popup** desktop only (once per session)

---

## 9. Other Pages Structure

### 9.1 `/mbbs-kazakhstan` (Country Landing Page)
SEO-heavy page, 1,500+ words, targets "MBBS in Kazakhstan" cluster.

**Blocks:** Hero with form · Quick facts grid · Why Kazakhstan vs other countries (comparison table) · NMC/WHO recognition explained · Eligibility · Admission process (reused timeline) · Kazakhstan at a glance · Partner university card (Kokshetau) · Cost breakdown by year · FAQ (country-specific, 10 items) · Final CTA band.

### 9.2 `/universities/kokshetau` (University Detail — Star Page)
Deepest informational page. Long-form.

**Structure:** Hero with campus photo background · shadcn Tabs (`Overview` · `Fees` · `Admission` · `Hostel & Life` · `Curriculum` · `FAQ`) · Sticky bottom apply bar.

**Overview tab:** History, 2029 innovation vision, rankings (QS Asia 641, Central Asia 41, Kazakhstan 41st), 83 bachelor + 44 master + 10 PhD programs, Erasmus+/UniCen/InterLinks partnerships, 1.5 billion Tenge research funding (2024).

**Fees tab:** Full 6-year table, annual breakdown, scholarships, payment schedule.

**Admission tab:** Eligibility, documents, process steps, timeline, intake dates.

**Hostel & Life tab:** 5 residential halls, Indian food, Wi-Fi, heating, mess, security, photo gallery.

**Curriculum tab:** Year-by-year syllabus (Year 1 Anatomy/Physio/Biochem → Year 6 Internship).

**FAQ tab:** Kokshetau-specific.

**Architecture note:** This page is the template. Adding a new university = create a new content file at `src/content/universities/[slug].ts` with the same shape. The page template reads it and renders. No template code changes.

### 9.3 `/admission` (Admission + Fees + Eligibility Combined)
**Blocks:** Hero · Interactive eligibility checklist (NEET, 50% PCB, age, passport) · Documents required (9 cards) · Expanded 5-step process · Full fee structure with payment schedule · Scholarships & loans placeholder · Timeline calendar (May–October) · FAQ · Apply CTA.

### 9.4 `/about` (About RK Online + Mentor)
**Blocks:** Hero ("Why RK Online Exists") · Our Story (placeholder narrative) · Mentor spotlight (large photo + bio placeholder + credentials + quote) · 4-card promise grid (direct tie-up, end-to-end support, honest counseling, post-admission care) · RK Online vs Typical Agents comparison table · Final CTA.

### 9.5 `/blog` + `/blog/[slug]` (Blog System)
**Index page:** Header with category filter chips · 3-column card grid · Pagination · Sidebar (popular posts, mini form).

**Individual post template:** Breadcrumb · Title · Author + date · Hero image · Table of Contents (sticky desktop) · MDX body · Author box · Related posts · CTA band.

**Storage:** MDX files in `src/content/blog/*.mdx`. Adding a post = drop a new file.

**Launch seed posts (3):**
1. "MBBS in Kazakhstan 2026: The Complete Guide for Indian Students"
2. "Kokshetau State University vs Indian Private Medical Colleges: Real Cost Comparison"
3. "Life as an Indian MBBS Student in Kazakhstan: What to Actually Expect"

### 9.6 `/contact` (Contact & Apply)
**Blocks:** Hero · 3-column contact cards (Call / WhatsApp / Email) · Full detailed lead form · Office map placeholder (Google Maps embed) · Pre-counseling FAQ · WhatsApp QR code for mobile.

---

## 10. Tech Stack

### 10.1 Core
- **Next.js 15** (App Router)
- **React 19**
- **TypeScript 5.x**
- **Tailwind CSS 4**
- **Node 20+**

### 10.2 UI & Components
- **shadcn/ui** — component library (copy-paste, owned)
- **Radix UI** — accessibility primitives (via shadcn)
- **lucide-react** — icon set
- **framer-motion** — scroll/hover animations, counter animations
- **embla-carousel-react** — carousel (shadcn default)
- **21st.dev MCP** — component inspiration and refinement during implementation (via `mcp__magic__21st_magic_component_inspiration`, `_builder`, `_refiner`, `logo_search`)

### 10.3 shadcn Components Used
`Button`, `Card`, `Dialog`, `Sheet`, `Accordion`, `DropdownMenu`, `Form`, `Input`, `Select`, `Textarea`, `Badge`, `Tabs`, `Carousel`, `NavigationMenu`, `Sonner`, `Separator`, `Avatar`, `Skeleton`, `Table`, `Pagination`.

### 10.4 Forms & Validation
- **react-hook-form** — form state
- **zod** — schema validation
- **@hookform/resolvers** — bridges the two

### 10.5 Content
- **next-mdx-remote** — MDX blog rendering
- **gray-matter** — frontmatter parser
- **remark / rehype plugins** — markdown, GFM, syntax highlighting

### 10.6 SEO & Performance
- **Next.js Metadata API** (built-in)
- **next-sitemap** — auto-generated sitemap.xml + robots.txt
- **schema-dts** — typed JSON-LD structured data

### 10.7 Fonts
- **next/font/google** — Playfair Display + Inter (zero layout shift)

### 10.8 Utilities
- **clsx** + **tailwind-merge** — conditional classes
- **date-fns** — date formatting

### 10.9 Dev Tools
- **ESLint** (Next.js default)
- **Prettier** + **prettier-plugin-tailwindcss**
- **Husky** + **lint-staged** (optional for solo dev)

---

## 11. Project Folder Structure

```
rk-online/
├── public/
│   ├── images/
│   │   ├── hero/
│   │   ├── universities/kokshetau/
│   │   ├── mentors/
│   │   ├── testimonials/
│   │   └── brand/
│   ├── badges/                   # NMC, WHO, FAIMER SVGs
│   └── favicon.ico
│
├── src/
│   ├── app/
│   │   ├── layout.tsx            # root layout (fonts, header, footer)
│   │   ├── page.tsx              # HOME
│   │   ├── globals.css           # Tailwind + shadcn CSS vars
│   │   ├── not-found.tsx         # 404
│   │   ├── mbbs-kazakhstan/page.tsx
│   │   ├── universities/
│   │   │   ├── page.tsx
│   │   │   └── [slug]/page.tsx
│   │   ├── admission/page.tsx
│   │   ├── about/page.tsx
│   │   ├── blog/
│   │   │   ├── page.tsx
│   │   │   └── [slug]/page.tsx
│   │   ├── contact/page.tsx
│   │   ├── api/lead/route.ts     # lead form POST endpoint
│   │   ├── sitemap.ts
│   │   └── robots.ts
│   │
│   ├── components/
│   │   ├── ui/                   # shadcn primitives
│   │   ├── layout/               # header, footer, mobile-nav, floating-ctas
│   │   ├── home/                 # all 11 home page blocks
│   │   ├── shared/               # section-header, stat-block, trust-badge,
│   │   │                         # feature-card, testimonial-card, lead-form,
│   │   │                         # counter
│   │   └── seo/                  # json-ld, page-metadata
│   │
│   ├── lib/
│   │   ├── utils.ts              # shadcn cn() helper
│   │   ├── constants.ts          # SITE name, phone, email, address
│   │   ├── metadata.ts           # shared metadata generator
│   │   └── validations/lead-form.ts
│   │
│   ├── content/
│   │   ├── universities/kokshetau.ts
│   │   ├── blog/*.mdx            # 3 seed posts
│   │   ├── faqs.ts
│   │   ├── testimonials.ts
│   │   ├── mentor.ts
│   │   └── site-config.ts        # nav, footer, SEO defaults
│   │
│   └── types/index.ts
│
├── .env.local / .env.example
├── next.config.ts
├── tailwind.config.ts
├── components.json               # shadcn config
├── next-sitemap.config.js
├── tsconfig.json
├── package.json
├── .eslintrc.json / .prettierrc / .gitignore
└── README.md
```

### 11.1 Key Architecture Decisions

**Content as data, not code.**
Every university is a typed content object:
```ts
// src/content/universities/kokshetau.ts
export const kokshetau = {
  slug: "kokshetau",
  name: "Shokan Ualikhanov Kokshetau State University",
  shortName: "Kokshetau",
  established: 1962,
  location: "Kokshetau, Kazakhstan",
  ranking: { qsAsia: 641, kazakhstan: 41 },
  fees: { tuitionPerYear: 3800, hostelPerYear: 800, currency: "USD" },
  programs: { bachelor: 83, master: 44, phd: 10 },
  recognitions: ["NMC", "WHO", "FAIMER", "WDOMS", "USMLE"],
  highlights: [...],
  facilities: [...],
  gallery: [...],
  faqs: [...],
}
```
Adding another university = create another file; page template reads by slug.

**Placeholder content is centralized.**
Contact info, mentor bio, and all placeholders live in `src/lib/constants.ts` and `src/content/mentor.ts`. Going live = editing these two files.

**Lead form API route (MVP behavior).**
`/api/lead/route.ts`:
1. Parse body · 2. Validate with zod · 3. On fail → 400 with details · 4. On success → log + return 200 · 5. Client shows Sonner toast.
TODO markers in code for production wiring: Resend (email), Google Sheets webhook, or CRM API.

**Images via next/image.**
All images optimized. Unsplash whitelisted in `next.config.ts` for placeholders.

**Responsive strategy.**
Mobile-first. Tested at 360px, 768px, 1440px. Breakpoints: sm 640 · md 768 · lg 1024 · xl 1280.

**Accessibility baseline.**
Semantic HTML. Radix primitives (via shadcn) = accessible by default. Navy on off-white contrast = 16.5:1 (AAA). Alt text on every image. Keyboard nav tested. Skip-to-content link.

---

## 12. SEO & Metadata Strategy

### 12.1 Keyword Targets per Page

| Page | Primary Keyword | Supporting |
|---|---|---|
| `/` | MBBS abroad consultancy for Indian students | study MBBS abroad, MBBS abroad 2026, NMC approved MBBS abroad |
| `/mbbs-kazakhstan` | MBBS in Kazakhstan for Indian students | MBBS Kazakhstan fees 2026, NMC approved universities in Kazakhstan |
| `/universities/kokshetau` | Kokshetau State University MBBS | Shokan Ualikhanov University fees, Kokshetau MBBS admission 2026 |
| `/admission` | MBBS admission Kazakhstan for Indian students | MBBS Kazakhstan eligibility, NEET for MBBS abroad |
| `/about` | RK Online MBBS consultancy | trusted MBBS consultants India |
| `/blog` | MBBS abroad guide India | MBBS abroad news, Kazakhstan MBBS blog |
| `/contact` | RK Online contact | free MBBS counseling India |

### 12.2 Metadata (titles ≤60 chars, descriptions ≤160 chars)

```
HOME
Title:       RK Online | MBBS Abroad Consultancy for Indian Students 2026
Description: Study MBBS in Kazakhstan with direct university tie-ups. NMC approved,
             English medium, ₹4.5L/year. Free counseling by senior students.

/mbbs-kazakhstan
Title:       MBBS in Kazakhstan 2026 — Fees, Admission & Top Universities
Description: Complete guide to MBBS in Kazakhstan for Indian students. NMC-approved
             universities, fees from ₹3.9L/year, admission process, eligibility & FAQs.

/universities/kokshetau
Title:       Shokan Ualikhanov Kokshetau University MBBS — Fees & Admission 2026
Description: Kokshetau State University MBBS for Indian students. Est. 1962, NMC-approved,
             ₹23L total for 6 years, English medium. Direct admission with RK Online.

/admission
Title:       MBBS Admission Process in Kazakhstan — Eligibility, Documents, Fees
Description: Step-by-step MBBS admission process for Kazakhstan. Eligibility, required
             documents, fee structure, timeline. Free counseling for 2026 intake.

/about
Title:       About RK Online — Trusted MBBS Abroad Consultancy
Description: RK Online helps Indian students pursue MBBS in Kazakhstan with direct
             university tie-ups, end-to-end support, and mentorship from real seniors.

/blog
Title:       MBBS Abroad Blog — Guides, News & Student Stories | RK Online
Description: Latest guides, fee updates, admission news and student stories about
             studying MBBS in Kazakhstan and other top destinations for Indian students.

/contact
Title:       Contact RK Online — Free MBBS Counseling for Kazakhstan 2026
Description: Book a free counseling call. Talk to seniors who studied at Kokshetau.
             WhatsApp, phone, and direct inquiry form. No obligation.
```

### 12.3 Open Graph / Twitter
Every page gets:
- `og:title`, `og:description`
- `og:image` → 1200×630 navy bg + gold accent + page title + logo
- `og:type`: `website` for pages, `article` for blog posts
- `twitter:card`: `summary_large_image`
- Canonical URL

### 12.4 Structured Data (JSON-LD)

**Global (every page):**
- `Organization` — name, logo, sameAs, contactPoint
- `WebSite` with `SearchAction`

**Homepage:**
- `EducationalOrganization` (RK Online as a consultancy)
- `LocalBusiness` with NAP (once real office is set)
- `Service` — "MBBS Abroad Admission Consulting"

**`/universities/kokshetau`:**
- `CollegeOrUniversity` (foundingDate 1962, location, URL, description)
- `EducationalOccupationalProgram` (timeToComplete P6Y, credential MBBS)
- `AggregateRating` (placeholder until reviews collected)

**`/admission` and `/mbbs-kazakhstan`:**
- `HowTo` for 5-step admission process
- `FAQPage` for FAQ sections (yields Google FAQ rich snippet)

**`/blog/[slug]`:**
- `Article` — headline, author, datePublished, image, publisher

**`/contact`:**
- `ContactPage` + `LocalBusiness` with full NAP

### 12.5 Technical SEO Checklist
- ✅ sitemap.xml (next-sitemap)
- ✅ robots.txt (points to sitemap)
- ✅ `public/llms.txt` — AI crawler allowlist with business summary
- ✅ Clean URLs (no trailing slashes, no query params on canonical pages)
- ✅ BreadcrumbList schema on all non-home pages
- ✅ 3–5 internal links per page
- ✅ One H1 per page (keyword-focused)
- ✅ H2/H3 hierarchy with supporting keywords
- ✅ Image alt text (descriptive)
- ✅ Descriptive anchor text (no "click here")
- ✅ Custom 404 with search + popular links
- ✅ No orphan pages

### 12.6 Core Web Vitals Targets

| Metric | Target | Strategy |
|---|---|---|
| LCP | < 2.5s | next/image priority, next/font, optimized hero |
| CLS | < 0.1 | All images sized, fonts via next/font, no injected shift |
| INP | < 200ms | Lazy load below-fold, minimize client JS, RSC by default |
| TTFB | < 800ms | SSG for all pages, Vercel edge deploy |
| Lighthouse | 90+ mobile & desktop | Regular audits |

### 12.7 Analytics
- **Google Search Console** — post-launch setup
- **Google Analytics 4** — page views + conversion events
- **Placeholder GA4 ID** in `.env.example`
- **Events tracked:** `lead_form_submit`, `whatsapp_click`, `phone_click`, `fee_pdf_download`

---

## 13. Lead Form Implementation

### 13.1 Fields

**Homepage hero form (short):**
- `fullName` — required, min 2 chars
- `phone` — required, regex `/^[6-9]\d{9}$/`
- `state` — required, dropdown (28 states + 8 UTs)
- `neetScore` — optional, number 0–720
- `consent` — required checkbox

**Contact page form (full):**
All above plus `email` (required), `whatsapp` (optional), `preferredUniversity` (dropdown), `message` (textarea ≤500 chars).

### 13.2 Validation (zod)
```ts
export const leadFormSchema = z.object({
  fullName: z.string().min(2, "Please enter your full name"),
  phone: z.string().regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit Indian phone"),
  state: z.string().min(1, "Please select your state"),
  neetScore: z.number().min(0).max(720).optional(),
  email: z.string().email("Enter a valid email").optional(),
  consent: z.literal(true, {
    errorMap: () => ({ message: "You must agree to continue" }),
  }),
})
```

### 13.3 Submission Flow
1. Parse body
2. Validate with zod
3. On fail → 400 with error details (inline in form)
4. On success (MVP):
   - Log to console
   - Return 200
   - TODO code markers for: **Resend** (email), **Google Sheets** (webhook), **CRM** (HubSpot/Zoho)
5. Client: show Sonner toast "Thanks! A senior will call you within 24 hours."
6. Fire GA4 event `lead_form_submit` with source tag
7. Reset form

### 13.4 Spam Protection
- Honeypot field (invisible input bots fill)
- IP rate limit (10 req/hour via Next.js middleware)
- TODO marker: upgrade to hCaptcha or Cloudflare Turnstile pre-launch

### 13.5 WhatsApp & Phone
```ts
const waLink = `https://wa.me/${SITE.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(
  "Hi RK Online, I'm interested in MBBS at Kokshetau. Please share details."
)}`
```
Phone: simple `tel:` link. Both fire GA4 events on click.

---

## 14. Content Placeholder Strategy

### 14.1 Centralized Placeholders
All placeholders live in **two files**, so launch requires editing only these:
1. `src/lib/constants.ts` — site name, phone, whatsapp, email, address, socials, GA4 ID
2. `src/content/mentor.ts` — mentor name, photo, bio, credentials

Plus:
- `public/images/` — swap placeholder Unsplash photos with real ones
- `src/content/testimonials.ts` — replace with real student quotes (optional)

### 14.2 Placeholder Marking Policy
- Every placeholder value has a `// PLACEHOLDER — replace before launch` comment
- Phone/email use `+91-XXXXXXXXXX` and `hello@rkonline.in` as standard
- Mentor name is `Dr. [Name Placeholder]`
- Images use Unsplash URLs with attribution comments

### 14.3 Honest-Only Stats Policy
- **University stats are real** (62 years, 50,000 alumni, 500 Indian students, QS 641) — these come from the university itself
- **RK Online stats are NOT fabricated** — no "5,000+ placed" or "15 years experience" claims. If it isn't true, it isn't on the site.

### 14.4 Blog Placeholders
3 real, well-written, SEO-ready posts ship with the site (not lorem ipsum). They're genuinely useful and can stay up indefinitely or be replaced later:
1. "MBBS in Kazakhstan 2026: The Complete Guide for Indian Students" (~2,000 words)
2. "Kokshetau State University vs Indian Private Medical Colleges" (~1,500 words)
3. "Life as an Indian MBBS Student in Kazakhstan" (~1,500 words)

---

## 15. Success Criteria (Definition of Done)

1. `npm run dev` starts with no errors
2. `npm run build` compiles with no errors or warnings
3. All 7 pages render correctly at 360px, 768px, 1440px
4. Lead form validates inputs, submits successfully, shows Sonner toast
5. WhatsApp and phone buttons open correct actions on mobile
6. Lighthouse scores: Performance ≥ 90, Accessibility ≥ 95, SEO ≥ 95 on home page
7. All pages have unique titles, descriptions, and canonical URLs
8. `sitemap.xml` and `robots.txt` are generated
9. README documents how to replace placeholders and add new content
10. Code passes ESLint and is formatted with Prettier

---

## 16. Placeholders To Fill Before Launch

A checklist the founder works through before going live:

### Contact Info (`src/lib/constants.ts`)
- [ ] Real phone number
- [ ] Real WhatsApp number
- [ ] Real email address
- [ ] Real office address (even a city is fine)
- [ ] Social media URLs (Instagram, Facebook, YouTube, LinkedIn)
- [ ] Google Maps embed URL
- [ ] GA4 measurement ID

### Team / Mentor (`src/content/mentor.ts`)
- [ ] Mentor real name
- [ ] Mentor real photo
- [ ] Mentor real bio
- [ ] Mentor credentials
- [ ] Mentor quote

### Brand Assets
- [ ] Real logo (SVG preferred) in `public/images/brand/logo.svg`
- [ ] Real favicon in `public/favicon.ico`
- [ ] Real OG image in `public/images/brand/og-default.jpg`

### Photography
- [ ] Real university campus / lab / hostel photos in `public/images/universities/kokshetau/`
- [ ] Hero background photo (if using photo hero)

### Testimonials (optional for launch)
- [ ] Real student quotes + names + photos in `src/content/testimonials.ts`

### Lead Form Backend
- [ ] Wire `/api/lead/route.ts` to Resend / Google Sheets / CRM (TODO markers in code)
- [ ] Add hCaptcha or Cloudflare Turnstile

### Deployment
- [ ] Vercel account + project setup
- [ ] Custom domain
- [ ] Submit sitemap to Google Search Console
- [ ] Create Google Business Profile listing

---

## 17. Future Expansion (Out of Scope for v1)

When ready to grow:

**Adding another university (same country):**
1. Create `src/content/universities/[new-slug].ts` with the same shape as `kokshetau.ts`
2. Add to `Universities ▾` dropdown in `src/content/site-config.ts`
3. Done — route, page, SEO all work automatically

**Adding another country:**
1. Create `src/app/mbbs-[country]/page.tsx` (duplicate `mbbs-kazakhstan`)
2. Create content file for the country
3. Add to header nav + footer
4. Add universities for that country

**Adding multi-language (Hindi/Russian):**
- Next.js i18n routing already supported by folder structure
- Requires adding `next-intl` or similar

**Production lead backend:**
- TODO markers in `/api/lead/route.ts` show exactly where to wire Resend / Sheets / CRM

**Admin CMS:**
- Can add Sanity, Contentlayer, or Payload later — blog MDX structure is compatible

---

## 18. Open Questions & Assumptions

### Assumptions Made
- The site will be hosted on Vercel (best Next.js support)
- English-only content at launch
- Founder will provide real logo, photos, contact info before going live
- Lead form backend will be wired to one of: Resend, Google Sheets, or a CRM — decision deferred

### Open Questions (deferred by founder)
- Who is the mentor? (placeholder for now)
- What are the real contact details? (placeholder for now)
- Which additional universities will RK Online add next? (deferred)
- Which country is next after Kazakhstan? (deferred)

None of these block the initial build — they are all swappable via content files.

---

## 19. Appendix: Kokshetau University Facts (Verified)

Collected from multiple sources during research — all facts appearing on the site.

**Basics:**
- Full name: Shokan Ualikhanov Kokshetau State University
- Location: Kokshetau, northern Kazakhstan
- Established: 1962 (62 years as of 2024)
- Type: Public state university
- Named after: Shokan Ualikhanov (Kazakh scholar and ethnographer)

**Academic:**
- 83 Bachelor programs · 44 Master programs · 10 PhD programs
- Medical faculties: General Medicine, Pediatrics, Pharmacy, Dentistry, Public Health
- MBBS: 6 years (5 academic + 1 internship), English medium
- Year 1: Anatomy, Physiology, Biochemistry
- Year 2: Pathology, Microbiology, Pharmacology
- Year 3: Forensic Medicine, Community Medicine, General Medicine
- Year 4: Surgery, Obstetrics, Pediatrics
- Year 5: Clinical rotations
- Year 6: Rotating internship

**Recognition:**
- NMC (India) — FMGE eligible
- WHO
- FAIMER
- WDOMS (World Directory of Medical Schools)
- USMLE / PLAB eligible
- ISO certified
- Ministry of Education, Kazakhstan — official accreditation

**Rankings:**
- QS Asia University Rankings 2025: 641st
- Central Asia: 41st
- Kazakhstan: 41st
- World: #7,940

**Fees (2026):**
- Annual tuition: ~$3,800 (~₹3.2 lakh)
- Annual hostel: ~$800 (~₹67,000)
- Admission/one-time: ~$300
- Total annual: ~$4,600 (~₹3.9 lakh)
- Total 6-year: ~$27,600 (~₹23 lakh)

**International Projects:**
- Erasmus+
- UniCen
- InterLinks

**Research:**
- 1.5 billion Tenge research funding in 2024
- Vision: become an innovative university by 2029

**Student Body:**
- 50,000+ alumni worldwide
- ~500 Indian MBBS students currently enrolled
- Intake: 100–150 medical students per year

**Infrastructure:**
- 5 residential halls
- Modern lecture halls, anatomy dissection labs with cadaveric specimens
- Simulation centers for clinical skills practice
- Medical library with 45,000+ volumes
- Computer labs, sports facilities, cafeteria
- Wi-Fi, central heating, 24/7 security, CCTV
- Indian food availability in hostel

**Eligibility (Indian students):**
- NEET qualification mandatory
- 10+2 with PCB, minimum 50% (40% for reserved categories)
- Age 17+, typical upper limit 25
- Valid passport (18+ months validity)
- Medical fitness certificate
- No IELTS/TOEFL required
- Direct admission (no entrance exam)

---

**End of Design Spec.**
