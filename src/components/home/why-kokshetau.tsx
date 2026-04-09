import { SectionHeader } from "@/components/shared/section-header"
import { FeatureCard } from "@/components/shared/feature-card"

const features = [
  {
    icon: "Building2",
    title: "62 Years of Legacy",
    description:
      "Founded in 1962 with 50,000+ alumni making an impact across the globe.",
  },
  {
    icon: "Globe",
    title: "English Medium",
    description:
      "The entire MBBS program is taught in English — no Russian or Kazakh language barrier.",
  },
  {
    icon: "Hospital",
    title: "NMC + WHO Recognized",
    description:
      "Eligible for FMGE, USMLE, and PLAB. Practice medicine anywhere in the world.",
  },
  {
    icon: "IndianRupee",
    title: "₹4.5L / Year All-Inclusive",
    description:
      "Tuition + hostel + living under ₹5L annually — cheaper than most Indian private colleges.",
  },
  {
    icon: "Plane",
    title: "Direct Admission",
    description:
      "No entrance exam beyond NEET. No IELTS or TOEFL required. Simple, fast process.",
  },
  {
    icon: "Users",
    title: "500+ Indian Students",
    description:
      "A strong Indian community on campus with Indian food, fellow seniors, and cultural events.",
  },
]

export function WhyKokshetau() {
  return (
    <section className="section-padding bg-background">
      <div className="container-brand">
        <SectionHeader
          kicker="Why Kokshetau"
          title="A 62-year legacy that's genuinely affordable."
          subtitle="Everything you need to know about studying MBBS at Kokshetau State University, in six points."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  )
}
