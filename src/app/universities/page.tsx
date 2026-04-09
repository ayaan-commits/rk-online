import type { Metadata } from "next"
import Link from "next/link"
import {
  MapPin,
  Calendar,
  Trophy,
  DollarSign,
  Plus,
  ArrowRight,
  Phone,
} from "lucide-react"
import { kokshetau } from "@/content/universities/kokshetau"
import { SITE } from "@/lib/constants"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Partner Universities — MBBS in Kazakhstan",
  description:
    "Explore our partner universities in Kazakhstan offering NMC-approved MBBS programs for Indian students. Affordable fees, English medium, globally recognized degrees.",
}

export default function UniversitiesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy-gradient section-padding text-white">
        <div className="container-brand text-center">
          <h1 className="font-heading text-3xl font-bold md:text-4xl lg:text-5xl">
            Our Partner Universities in Kazakhstan
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
            NMC-approved, WHO-listed universities offering world-class MBBS
            programs at affordable fees for Indian students.
          </p>
        </div>
      </section>

      {/* University Grid */}
      <section className="section-padding bg-cream">
        <div className="container-brand">
          <div className="grid gap-8 md:grid-cols-2">
            {/* Kokshetau Card */}
            <Card className="flex flex-col overflow-hidden border-0 shadow-md">
              {/* Placeholder image area */}
              <div className="bg-navy/5 flex h-52 items-center justify-center">
                <div className="text-center">
                  <div className="bg-gold/10 mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full">
                    <Trophy className="text-gold h-8 w-8" />
                  </div>
                  <p className="text-muted-foreground text-sm font-medium">
                    Campus Photo
                  </p>
                </div>
              </div>

              <CardHeader>
                <div className="flex flex-wrap gap-2">
                  {kokshetau.recognitions.slice(0, 3).map((rec) => (
                    <Badge key={rec} variant="secondary" className="text-xs">
                      {rec}
                    </Badge>
                  ))}
                </div>
                <CardTitle className="mt-2 text-xl font-bold">
                  {kokshetau.name}
                </CardTitle>
              </CardHeader>

              <CardContent className="flex flex-1 flex-col gap-4">
                <div className="text-muted-foreground flex items-center gap-2 text-sm">
                  <MapPin className="h-4 w-4 shrink-0" />
                  <span>{kokshetau.location}</span>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <StatItem
                    icon={<Calendar className="h-4 w-4" />}
                    label="Established"
                    value={String(kokshetau.established)}
                  />
                  <StatItem
                    icon={<Trophy className="h-4 w-4" />}
                    label="QS Asia"
                    value={`#${kokshetau.ranking.qsAsia}`}
                  />
                  <StatItem
                    icon={<DollarSign className="h-4 w-4" />}
                    label="Per Year"
                    value={`$${kokshetau.fees.tuitionPerYear.toLocaleString()}`}
                  />
                </div>
              </CardContent>

              <CardFooter>
                <Button asChild className="w-full">
                  <Link href={`/universities/${kokshetau.slug}`}>
                    View Details
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            {/* More Coming Soon Card */}
            <Card className="flex flex-col items-center justify-center border-2 border-dashed border-border bg-transparent p-12 shadow-none">
              <div className="bg-muted mb-4 flex h-14 w-14 items-center justify-center rounded-full">
                <Plus className="text-muted-foreground h-7 w-7" />
              </div>
              <p className="font-heading text-muted-foreground text-lg font-semibold">
                More universities coming soon
              </p>
              <p className="text-muted-foreground mt-2 text-center text-sm">
                We are expanding our network of partner universities across
                Kazakhstan and Central Asia.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <section className="bg-navy-gradient section-padding text-white">
        <div className="container-brand text-center">
          <h2 className="font-heading text-2xl font-bold md:text-3xl">
            Interested in studying MBBS?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-lg text-white/80">
            Get free counseling from senior medical students who have been
            through the journey themselves.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-gold hover:bg-gold-dark h-12 px-8 text-base font-semibold text-white"
            >
              <Link href="/admission">Get Free Counseling</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-12 border-white/30 px-8 text-base text-white hover:bg-white/10"
            >
              <a href={`tel:${SITE.phone}`}>
                <Phone className="mr-2 h-4 w-4" />
                Call Us
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}

/* ------------------------------------------------------------------ */
/*  Local helper component                                            */
/* ------------------------------------------------------------------ */

interface StatItemProps {
  icon: React.ReactNode
  label: string
  value: string
}

function StatItem({ icon, label, value }: StatItemProps) {
  return (
    <div className="rounded-lg bg-cream p-3 text-center">
      <div className="text-gold mx-auto mb-1 flex justify-center">{icon}</div>
      <p className="font-heading text-foreground text-sm font-bold">{value}</p>
      <p className="text-muted-foreground text-xs">{label}</p>
    </div>
  )
}
