import type { Metadata } from "next"
import { CheckCircle, User, X } from "lucide-react"
import { SectionHeader } from "@/components/shared/section-header"
import { FeatureCard } from "@/components/shared/feature-card"
import { FinalCta } from "@/components/home/final-cta"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export const metadata: Metadata = {
  title: "About RK Online — Trusted MBBS Abroad Consultancy",
  description:
    "Learn about RK Online's mission to provide honest MBBS abroad counseling with direct university tie-ups, senior student mentorship, and end-to-end support for Indian medical students.",
}

// PLACEHOLDER — replace with real mentor details before launch
const mentor = {
  name: "Dr. [Name Placeholder]",
  title: "Senior Mentor & MBBS Graduate",
  quote:
    "Every student deserves honest guidance — not sales pitches. RK Online was built on that principle. We have been through the journey ourselves, and we know what it takes to succeed abroad and come back as a confident, practicing doctor.",
  credentials: [
    "MBBS from a top NMC-recognized university abroad",
    "Successfully cleared FMGE on first attempt",
    "Mentored 200+ students through the admissions process",
  ],
}

const promises = [
  {
    icon: "Handshake",
    title: "Direct Tie-up",
    description:
      "We work directly with partner universities — no middlemen, no commission layers, no inflated fees.",
  },
  {
    icon: "ShieldCheck",
    title: "End-to-End Support",
    description:
      "From application to arrival — visa, flights, hostel, Indian food, and on-ground emergency support.",
  },
  {
    icon: "Heart",
    title: "Honest Counseling",
    description:
      "We tell you what you need to hear, not what you want to hear. No fake promises about placements or rankings.",
  },
  {
    icon: "GraduationCap",
    title: "Post-Admission Care",
    description:
      "Our relationship doesn't end at enrollment. We support you through FMGE prep, internships, and career guidance.",
  },
]

const comparisonRows = [
  {
    feature: "Fee Transparency",
    rkOnline: "Full fee breakdown shared upfront — no hidden charges",
    typical: "Vague quotes; surprise charges after enrollment",
  },
  {
    feature: "University Relationship",
    rkOnline: "Direct tie-up with the university administration",
    typical: "Works through sub-agents with multiple commission layers",
  },
  {
    feature: "On-ground Support",
    rkOnline: "Dedicated team in Kazakhstan for emergencies and daily needs",
    typical: "Support ends once the student lands abroad",
  },
  {
    feature: "Post-landing Help",
    rkOnline: "Indian food, SIM, bank account, hostel setup from day one",
    typical: "Students left to figure things out on their own",
  },
  {
    feature: "Mentor Access",
    rkOnline: "Direct access to senior students and graduated doctors",
    typical: "No mentorship; only sales-driven counselors",
  },
]

export default function AboutPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-navy-gradient py-20 md:py-28">
        <div className="container-brand text-center">
          <h1 className="font-heading mb-6 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            Why RK Online Exists
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-white/80 md:text-xl">
            Because every aspiring doctor deserves honest guidance —
            <br className="hidden sm:block" />
            not sales pitches disguised as counseling.
          </p>
        </div>
      </section>

      {/* ── Our Story ── */}
      <section className="section-padding bg-background">
        <div className="container-brand">
          <SectionHeader
            kicker="Our Story"
            title="From firsthand experience to a mission."
          />
          <div className="mx-auto max-w-3xl space-y-6 text-lg leading-relaxed text-foreground">
            {/* PLACEHOLDER — replace with the real founding narrative */}
            <p>
              RK Online was founded with a simple belief: pursuing MBBS abroad
              shouldn't feel like a gamble. Too many families in India face
              misleading agents, hidden fees, and broken promises when trying to
              secure a medical seat for their children. We started RK Online to
              change that.
            </p>
            {/* PLACEHOLDER — expand with specific founding details */}
            <p>
              Our founders went through the journey themselves — studying
              medicine abroad, navigating visa processes, adjusting to a new
              country, and clearing the FMGE to practice back in India. That
              lived experience is what sets us apart. We don't just sell seats;
              we guide students through every phase because we've been there.
            </p>
            {/* PLACEHOLDER — add vision/values paragraph */}
            <p>
              Today, RK Online partners directly with NMC-approved universities
              in Kazakhstan, removing the layers of sub-agents that typically
              inflate costs and erode trust. Our mission is straightforward:
              provide transparent, mentor-led counseling so that families can
              make informed decisions — not pressured ones.
            </p>
          </div>
        </div>
      </section>

      {/* ── Mentor Spotlight ── */}
      <section className="section-padding bg-cream">
        <div className="container-brand">
          <SectionHeader
            kicker="Meet the Mentor"
            title="Guided by someone who lived it."
          />

          <div className="mx-auto grid max-w-4xl items-center gap-10 lg:grid-cols-[1fr_1.4fr]">
            {/* Photo placeholder */}
            <div className="flex flex-col items-center">
              {/* PLACEHOLDER — replace with actual mentor photo */}
              <div className="flex h-56 w-56 items-center justify-center rounded-full bg-muted ring-4 ring-gold/40">
                <User className="h-24 w-24 text-muted-foreground opacity-30" />
              </div>
              <p className="font-heading mt-5 text-xl font-semibold text-foreground">
                {mentor.name}
              </p>
              <p className="text-muted-foreground text-sm">{mentor.title}</p>
            </div>

            {/* Quote + credentials */}
            <div>
              <blockquote className="mb-6 border-l-4 border-gold pl-4 text-lg leading-relaxed italic text-foreground">
                &ldquo;{mentor.quote}&rdquo;
              </blockquote>
              <ul className="space-y-3">
                {mentor.credentials.map((credential) => (
                  <li key={credential} className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                    <span className="text-foreground">{credential}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Our Promise ── */}
      <section className="section-padding bg-background">
        <div className="container-brand">
          <SectionHeader
            kicker="Our Promise"
            title="What you get when you choose RK Online."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {promises.map((promise) => (
              <FeatureCard
                key={promise.title}
                icon={promise.icon}
                title={promise.title}
                description={promise.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── RK Online vs Typical Agents ── */}
      <section className="section-padding bg-cream">
        <div className="container-brand">
          <SectionHeader
            kicker="Why We're Different"
            title="RK Online vs Typical Agents"
          />
          <div className="mx-auto max-w-4xl overflow-hidden rounded-xl border border-border bg-white">
            <Table>
              <TableHeader>
                <TableRow className="bg-navy text-white hover:bg-navy">
                  <TableHead className="w-[200px] text-white font-semibold">
                    Feature
                  </TableHead>
                  <TableHead className="text-white font-semibold">
                    RK Online
                  </TableHead>
                  <TableHead className="text-white font-semibold">
                    Typical Agent
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {comparisonRows.map((row) => (
                  <TableRow key={row.feature}>
                    <TableCell className="font-semibold text-foreground">
                      {row.feature}
                    </TableCell>
                    <TableCell>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                        <span className="whitespace-normal text-foreground">
                          {row.rkOnline}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-start gap-2">
                        <X className="mt-0.5 h-4 w-4 shrink-0 text-destructive" />
                        <span className="whitespace-normal text-muted-foreground">
                          {row.typical}
                        </span>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <FinalCta />
    </>
  )
}
