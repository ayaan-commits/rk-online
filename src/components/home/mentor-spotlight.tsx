import { SectionHeader } from "@/components/shared/section-header"
import { CheckCircle, User } from "lucide-react"

// PLACEHOLDER — replace with real mentor details before launch
const mentor = {
  name: "Dr. [Name Placeholder]",
  title: "Senior Mentor & Kokshetau Graduate",
  quote:
    "I studied at Kokshetau myself. I know exactly what it takes to settle in, pass FMGE, and come back as a practicing doctor. That's why RK Online exists — no middlemen, no inflated promises, no surprises.",
}

const differentiators = [
  "Direct tie-up with the university — no commission layers",
  "End-to-end: visa, flights, hostel, Indian food, emergency support",
  "On-ground mentorship in both India and Kazakhstan",
]

export function MentorSpotlight() {
  return (
    <section className="section-padding bg-background">
      <div className="container-brand">
        <SectionHeader
          kicker="Why RK Online"
          title="Guided by people who actually lived it."
        />

        <div className="mx-auto grid max-w-4xl items-center gap-10 lg:grid-cols-[1fr_1.4fr]">
          {/* Left — Mentor photo placeholder */}
          <div className="flex flex-col items-center">
            <div className="ring-gold/40 bg-muted flex h-48 w-48 items-center justify-center rounded-full ring-4">
              <User className="text-muted-foreground h-20 w-20 opacity-30" />
            </div>
            <p className="font-heading text-foreground mt-4 text-lg font-semibold">
              {mentor.name}
            </p>
            <p className="text-muted-foreground text-sm">{mentor.title}</p>
          </div>

          {/* Right — Story + differentiators */}
          <div>
            <blockquote className="text-foreground mb-6 border-l-4 border-gold pl-4 text-lg leading-relaxed italic">
              &ldquo;{mentor.quote}&rdquo;
            </blockquote>
            <ul className="space-y-3">
              {differentiators.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <CheckCircle className="text-gold mt-0.5 h-5 w-5 shrink-0" />
                  <span className="text-foreground">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
