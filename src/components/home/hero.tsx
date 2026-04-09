"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { LeadForm } from "@/components/shared/lead-form"
import { TrustBadge } from "@/components/shared/trust-badge"
import { ArrowRight, ChevronDown, Download } from "lucide-react"
import { motion } from "framer-motion"

const floatingDots = [
  { className: "top-20 right-20 w-2 h-2 bg-gold/30", duration: 4 },
  { className: "top-40 left-16 w-3 h-3 bg-gold/20", duration: 5 },
  { className: "bottom-32 right-40 w-1.5 h-1.5 bg-gold/25", duration: 3 },
  { className: "top-60 right-[60%] w-2 h-2 bg-gold/15", duration: 6 },
  { className: "bottom-20 left-[30%] w-2.5 h-2.5 bg-gold/20", duration: 4.5 },
]

export function Hero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background: "linear-gradient(-45deg, #0A1F44, #061433, #0A1F44, #1a3a6b)",
        backgroundSize: "400% 400%",
        animation: "gradient-shift 15s ease infinite",
      }}
    >
      {/* Subtle grid pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(rgba(201,162,39,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(201,162,39,0.3) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Floating gold decoration elements */}
      {floatingDots.map((dot, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full pointer-events-none ${dot.className}`}
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: dot.duration, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}

      <div className="container-brand relative z-10 py-16 md:py-20 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
          {/* Left content */}
          <div className="text-white">
            <span className="bg-gold/10 text-gold mb-4 inline-block rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-widest">
              Study MBBS in Kazakhstan &middot; 2026 Intake Open
            </span>
            <h1 className="font-heading mb-6 text-4xl font-bold leading-tight md:text-5xl lg:text-[56px] lg:leading-[1.1]">
              <span className="bg-gradient-to-r from-white via-gold/80 to-white bg-clip-text text-transparent">
                Your Medical Career
              </span>{" "}
              Starts at{" "}
              <span className="text-gold">Kokshetau State University</span>.
            </h1>
            <p className="mb-8 max-w-xl text-lg leading-relaxed text-white/80">
              NMC-approved &middot; English medium &middot; &#x20B9;4.5 lakhs
              per year &middot; Guided end-to-end by seniors who actually
              studied there.
            </p>

            <div className="mb-8 flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-gold hover:bg-gold-dark text-navy font-semibold btn-fill-effect"
                render={<Link href="/contact" />}
              >
                Apply for 2026 Intake
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                className="!bg-white !text-black !border-white hover:!bg-gray-100 font-medium"
                render={<Link href="#fees" />}
              >
                <Download className="mr-2 h-4 w-4" />
                Download Fee Structure
              </Button>
            </div>

            <motion.div
              className="flex flex-wrap gap-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <TrustBadge label="NMC Approved" variant="outline" />
              <TrustBadge label="WHO Listed" variant="outline" />
              <TrustBadge label="FAIMER" variant="outline" />
              <TrustBadge label="No Donation" variant="outline" />
            </motion.div>
          </div>

          {/* Right — Lead form card with radial glow */}
          <div className="relative">
            {/* Radial glow bloom effects */}
            <div className="absolute -right-20 top-1/2 -translate-y-1/2 hidden lg:block">
              <div className="h-[500px] w-[500px] rounded-full bg-gold/5 blur-3xl" />
              <div className="absolute inset-[15%] rounded-full bg-gold/10 blur-2xl" />
              <div className="absolute inset-[30%] rounded-full bg-gold/15 blur-xl" />
            </div>

            <Card className="relative z-10 border border-white/20 bg-white/95 shadow-[0_0_80px_rgba(201,162,39,0.15)] shadow-2xl backdrop-blur-sm">
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
      </div>

      {/* Animated scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="h-6 w-6 text-white/40" />
      </motion.div>
    </section>
  )
}
