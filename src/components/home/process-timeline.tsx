import Link from "next/link"
import { SectionHeader } from "@/components/shared/section-header"
import { Button } from "@/components/ui/button"
import {
  MessageSquare,
  FileSearch,
  FileCheck,
  Ticket,
  PlaneTakeoff,
  ArrowRight,
} from "lucide-react"

const steps = [
  {
    icon: MessageSquare,
    step: 1,
    title: "Free Counseling",
    description: "Talk to a senior who studied at Kokshetau. Get honest advice.",
    timeline: "Day 1",
  },
  {
    icon: FileSearch,
    step: 2,
    title: "Document Review",
    description: "We verify your NEET score, 10+2 marks, and documents.",
    timeline: "Week 1",
  },
  {
    icon: FileCheck,
    step: 3,
    title: "Admission Offer Letter",
    description: "University reviews and issues your official admission letter.",
    timeline: "Week 2",
  },
  {
    icon: Ticket,
    step: 4,
    title: "Visa & Ticketing",
    description: "We handle visa application, flight booking, and pre-departure prep.",
    timeline: "Week 4",
  },
  {
    icon: PlaneTakeoff,
    step: 5,
    title: "Fly & Campus Arrival",
    description: "Airport pickup, hostel check-in, orientation. You're home.",
    timeline: "Month 2",
  },
]

export function ProcessTimeline() {
  return (
    <section className="section-padding bg-white">
      <div className="container-brand">
        <SectionHeader
          kicker="Simple & Transparent"
          title="From NEET result to Kokshetau campus in 5 steps."
          subtitle="We handle everything. You just show up."
        />

        <div className="mx-auto max-w-4xl">
          <div className="grid gap-6 md:grid-cols-5">
            {steps.map(({ icon: Icon, step, title, description, timeline }) => (
              <div key={step} className="group relative text-center">
                {/* Connector line (hidden on first, hidden on mobile) */}
                {step > 1 && (
                  <div className="bg-border absolute left-0 top-8 hidden h-[2px] w-full -translate-x-1/2 md:block" />
                )}

                <div className="relative z-10 mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full border-2 border-gold bg-white shadow-sm transition-transform group-hover:scale-110">
                  <Icon className="text-gold h-7 w-7" />
                </div>

                <span className="text-gold mb-1 block text-xs font-semibold uppercase tracking-wider">
                  {timeline}
                </span>
                <h3 className="font-heading text-foreground mb-1 text-sm font-semibold">
                  {title}
                </h3>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <Button
            asChild
            size="lg"
            className="bg-gold hover:bg-gold-dark text-navy font-semibold"
          >
            <Link href="/contact">
              Start Step 1 — Book Free Counseling
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
