import Link from "next/link"
import { SectionHeader } from "@/components/shared/section-header"
import { Button } from "@/components/ui/button"
import { AnimateOnScroll } from "@/components/shared/animate-on-scroll"
import {
  MapPin,
  GraduationCap,
  BookOpen,
  FlaskConical,
  Handshake,
  ArrowRight,
} from "lucide-react"

const facts = [
  { icon: MapPin, text: "Kokshetau, northern Kazakhstan" },
  { icon: GraduationCap, text: "6-year MBBS (5 years + 1 internship)" },
  { icon: BookOpen, text: "83 Bachelor · 44 Master · 10 PhD programs" },
  { icon: FlaskConical, text: "₹1.5 Billion Tenge research funding (2024)" },
  { icon: Handshake, text: "Erasmus+, UniCen, InterLinks partnerships" },
]

export function FeaturedUniversity() {
  return (
    <section className="section-padding bg-white">
      <div className="container-brand">
        <SectionHeader
          kicker="Our Partner University"
          title="Shokan Ualikhanov Kokshetau State University"
          subtitle="Est. 1962 — A 62-year legacy of excellence in education and medical training."
        />

        <div className="grid items-center gap-10 lg:grid-cols-2">
          {/* Left — Image placeholder */}
          <AnimateOnScroll direction="left">
            <div className="bg-muted flex aspect-[4/3] items-center justify-center overflow-hidden rounded-lg">
              <div className="text-muted-foreground text-center">
                <GraduationCap className="mx-auto mb-3 h-16 w-16 opacity-30" />
                <p className="text-sm">Campus photo placeholder</p>
                <p className="text-xs opacity-60">
                  Replace with real university photos
                </p>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Right — Facts */}
          <AnimateOnScroll direction="right">
            <ul className="mb-8 space-y-4">
              {facts.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-start gap-3">
                  <div className="bg-gold/10 mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full">
                    <Icon className="text-gold h-4 w-4" />
                  </div>
                  <span className="text-foreground text-base">{text}</span>
                </li>
              ))}
            </ul>
            <Button asChild size="lg" className="font-semibold">
              <Link href="/universities/kokshetau">
                Explore Kokshetau in Detail
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  )
}
