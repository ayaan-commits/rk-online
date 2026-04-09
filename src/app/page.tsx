import { Hero } from "@/components/home/hero"
import { TrustStrip } from "@/components/home/trust-strip"
import { WhyKokshetau } from "@/components/home/why-kokshetau"
import { StatsBand } from "@/components/home/stats-band"
import { FeaturedUniversity } from "@/components/home/featured-university"
import { FeeTable } from "@/components/home/fee-table"
import { ProcessTimeline } from "@/components/home/process-timeline"
import { MentorSpotlight } from "@/components/home/mentor-spotlight"
import { Testimonials } from "@/components/home/testimonials"
import { FaqSection } from "@/components/home/faq-section"
import { FinalCta } from "@/components/home/final-cta"

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <WhyKokshetau />
      <StatsBand />
      <FeaturedUniversity />
      <FeeTable />
      <ProcessTimeline />
      <MentorSpotlight />
      <Testimonials />
      <FaqSection />
      <FinalCta />
    </>
  )
}
