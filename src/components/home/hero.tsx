import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { LeadForm } from "@/components/shared/lead-form"
import { TrustBadge } from "@/components/shared/trust-badge"
import { ArrowRight, Download } from "lucide-react"

export function Hero() {
  return (
    <section className="bg-navy-gradient relative overflow-hidden">
      {/* Subtle grid pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(rgba(201,162,39,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(201,162,39,0.3) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="container-brand relative z-10 py-16 md:py-20 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
          {/* Left content */}
          <div className="text-white">
            <span className="text-gold mb-4 inline-block text-sm font-semibold uppercase tracking-widest">
              Study MBBS in Kazakhstan &middot; 2026 Intake Open
            </span>
            <h1 className="font-heading mb-6 text-4xl font-bold leading-tight md:text-5xl lg:text-[56px] lg:leading-[1.1]">
              Your Medical Career Starts at Kokshetau State University.
            </h1>
            <p className="mb-8 max-w-xl text-lg leading-relaxed text-white/80">
              NMC-approved &middot; English medium &middot; &#x20B9;4.5 lakhs
              per year &middot; Guided end-to-end by seniors who actually
              studied there.
            </p>

            <div className="mb-8 flex flex-wrap gap-4">
              <Button
                asChild
                size="lg"
                className="bg-gold hover:bg-gold-dark text-navy font-semibold"
              >
                <Link href="/contact">
                  Apply for 2026 Intake
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white/10"
              >
                <Link href="#fees">
                  <Download className="mr-2 h-4 w-4" />
                  Download Fee Structure
                </Link>
              </Button>
            </div>

            <div className="flex flex-wrap gap-3">
              <TrustBadge label="NMC Approved" variant="outline" />
              <TrustBadge label="WHO Listed" variant="outline" />
              <TrustBadge label="FAIMER" variant="outline" />
              <TrustBadge label="No Donation" variant="outline" />
            </div>
          </div>

          {/* Right — Lead form card */}
          <Card className="border-0 shadow-2xl">
            <CardHeader className="pb-2">
              <CardTitle className="font-heading text-center text-xl">
                Free Counseling &mdash; Talk to a Senior
              </CardTitle>
            </CardHeader>
            <CardContent>
              <LeadForm source="home_hero" />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
